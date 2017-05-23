<?php

namespace App\Models;

use App;
use App\Events\UserSettingsChanged;
use App\Models\LookupAccount;
use App\Models\Traits\GeneratesNumbers;
use App\Models\Traits\PresentsInvoice;
use App\Models\Traits\SendsEmails;
use App\Models\Traits\HasLogo;
use Cache;
use Carbon;
use DateTime;
use Eloquent;
use Event;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laracasts\Presenter\PresentableTrait;
use Session;
use Utils;

/**
 * Class Account.
 */
class Account extends Eloquent
{

    /**
     * @var string
     */
    protected $presenter = 'App\Ninja\Presenters\AccountPresenter';

    /**
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * @var array
     */
    protected $hidden = ['ip'];

    /**
     * @var array
     */
    protected $fillable = [
        'timezone_id',
        'date_format_id',
        'datetime_format_id',
        'currency_id',
        'name',
        'address1',
        'address2',
        'city',
        'state',
        'postal_code',
        'country_id',
        'invoice_terms',
        'email_footer',
        'industry_id',
        'size_id',
        'invoice_taxes',
        'invoice_item_taxes',
        'invoice_design_id',
        'work_phone',
        'work_email',
        'language_id',
        'custom_label1',
        'custom_value1',
        'custom_label2',
        'custom_value2',
        'custom_client_label1',
        'custom_client_label2',
        'fill_products',
        'update_products',
        'primary_color',
        'secondary_color',
        'hide_quantity',
        'hide_paid_to_date',
        'custom_invoice_label1',
        'custom_invoice_label2',
        'custom_invoice_taxes1',
        'custom_invoice_taxes2',
        'vat_number',
        'invoice_number_prefix',
        'invoice_number_counter',
        'quote_number_prefix',
        'quote_number_counter',
        'share_counter',
        'id_number',
        'token_billing_type_id',
        'invoice_footer',
        'pdf_email_attachment',
        'font_size',
        'invoice_labels',
        'custom_design',
        'show_item_taxes',
        'military_time',
        'enable_reminder1',
        'enable_reminder2',
        'enable_reminder3',
        'num_days_reminder1',
        'num_days_reminder2',
        'num_days_reminder3',
        'custom_invoice_text_label1',
        'custom_invoice_text_label2',
        'default_tax_rate_id',
        'recurring_hour',
        'invoice_number_pattern',
        'quote_number_pattern',
        'quote_terms',
        'email_design_id',
        'enable_email_markup',
        'website',
        'direction_reminder1',
        'direction_reminder2',
        'direction_reminder3',
        'field_reminder1',
        'field_reminder2',
        'field_reminder3',
        'header_font_id',
        'body_font_id',
        'auto_convert_quote',
        'all_pages_footer',
        'all_pages_header',
        'show_currency_code',
        'enable_portal_password',
        'send_portal_password',
        'custom_invoice_item_label1',
        'custom_invoice_item_label2',
        'recurring_invoice_number_prefix',
        'enable_client_portal',
        'invoice_fields',
        'invoice_embed_documents',
        'document_email_attachment',
        'enable_client_portal_dashboard',
        'page_size',
        'live_preview',
        'invoice_number_padding',
        'enable_second_tax_rate',
        'auto_bill_on_due_date',
        'start_of_week',
        'enable_buy_now_buttons',
        'include_item_taxes_inline',
        'financial_year_start',
        'enabled_modules',
        'enabled_dashboard_sections',
        'show_accept_invoice_terms',
        'show_accept_quote_terms',
        'require_invoice_signature',
        'require_quote_signature',
        'client_number_prefix',
        'client_number_counter',
        'client_number_pattern',
        'payment_terms',
        'reset_counter_frequency_id',
        'payment_type_id',
        'gateway_fee_enabled',
        'reset_counter_date',
        'custom_contact_label1',
        'custom_contact_label2',
        'domain_id',
    ];

    /**
     * @var array
     */
    public static $basicSettings = [
        ACCOUNT_COMPANY_DETAILS,
        ACCOUNT_USER_DETAILS,
        ACCOUNT_LOCALIZATION,
        ACCOUNT_PAYMENTS,
        ACCOUNT_TAX_RATES,
        ACCOUNT_PRODUCTS,
        ACCOUNT_NOTIFICATIONS,
        ACCOUNT_IMPORT_EXPORT,
        ACCOUNT_MANAGEMENT,
    ];

    /**
     * @var array
     */
    public static $advancedSettings = [
        ACCOUNT_INVOICE_SETTINGS,
        ACCOUNT_INVOICE_DESIGN,
        ACCOUNT_CLIENT_PORTAL,
        ACCOUNT_EMAIL_SETTINGS,
        ACCOUNT_TEMPLATES_AND_REMINDERS,
        ACCOUNT_BANKS,
        //ACCOUNT_REPORTS,
        ACCOUNT_DATA_VISUALIZATIONS,
        ACCOUNT_API_TOKENS,
        ACCOUNT_USER_MANAGEMENT,
    ];

    public static $modules = [
        ENTITY_RECURRING_INVOICE => 1,
        ENTITY_CREDIT => 2,
        ENTITY_QUOTE => 4,
        ENTITY_TASK => 8,
        ENTITY_EXPENSE => 16,
        ENTITY_VENDOR => 32,
    ];

    public static $dashboardSections = [
        'total_revenue' => 1,
        'average_invoice' => 2,
        'outstanding' => 4,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\Models\User');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo('App\Models\Company');
    }

    /**
     * @return bool
     */
    public function isNinjaAccount()
    {
        return $this->account_key === NINJA_ACCOUNT_KEY;
    }

    /**
     * @param $feature
     *
     * @return bool
     */
    public function hasFeature($feature)
    {
        if (Utils::isNinjaDev()) {
            return true;
        }

        $planDetails = $this->getPlanDetails();
        $selfHost = ! Utils::isNinjaProd();

        if (! $selfHost && function_exists('ninja_account_features')) {
            $result = ninja_account_features($this, $feature);

            if ($result != null) {
                return $result;
            }
        }

        switch ($feature) {
            // Pro
            case FEATURE_TASKS:
            case FEATURE_EXPENSES:
                if (Utils::isNinja() && $this->company_id < EXTRAS_GRANDFATHER_COMPANY_ID) {
                    return true;
                }

            case FEATURE_CUSTOMIZE_INVOICE_DESIGN:
            case FEATURE_DIFFERENT_DESIGNS:
            case FEATURE_EMAIL_TEMPLATES_REMINDERS:
            case FEATURE_INVOICE_SETTINGS:
            case FEATURE_CUSTOM_EMAILS:
            case FEATURE_PDF_ATTACHMENT:
            case FEATURE_MORE_INVOICE_DESIGNS:
            case FEATURE_QUOTES:
            case FEATURE_REPORTS:
            case FEATURE_BUY_NOW_BUTTONS:
            case FEATURE_API:
            case FEATURE_CLIENT_PORTAL_PASSWORD:
            case FEATURE_CUSTOM_URL:
                return $selfHost || ! empty($planDetails);

            // Pro; No trial allowed, unless they're trialing enterprise with an active pro plan
            case FEATURE_MORE_CLIENTS:
                return $selfHost || ! empty($planDetails) && (! $planDetails['trial'] || ! empty($this->getPlanDetails(false, false)));

            // White Label
            case FEATURE_WHITE_LABEL:
                if ($this->isNinjaAccount() || (! $selfHost && $planDetails && ! $planDetails['expires'])) {
                    return false;
                }
            // Fallthrough
            case FEATURE_REMOVE_CREATED_BY:
                return ! empty($planDetails); // A plan is required even for self-hosted users

            // Enterprise; No Trial allowed; grandfathered for old pro users
            case FEATURE_USERS:// Grandfathered for old Pro users
                if ($planDetails && $planDetails['trial']) {
                    // Do they have a non-trial plan?
                    $planDetails = $this->getPlanDetails(false, false);
                }

                return $selfHost || ! empty($planDetails) && ($planDetails['plan'] == PLAN_ENTERPRISE || $planDetails['started'] <= date_create(PRO_USERS_GRANDFATHER_DEADLINE));

            // Enterprise; No Trial allowed
            case FEATURE_DOCUMENTS:
            case FEATURE_USER_PERMISSIONS:
                return $selfHost || ! empty($planDetails) && $planDetails['plan'] == PLAN_ENTERPRISE && ! $planDetails['trial'];

            default:
                return false;
        }
    }

    /**
     * @param bool $include_inactive
     * @param bool $include_trial
     *
     * @return array|null
     */
    public function getPlanDetails($include_inactive = false, $include_trial = true)
    {
        if (! $this->company) {
            return null;
        }

        $plan = $this->company->plan;
        $price = $this->company->plan_price;
        $trial_plan = $this->company->trial_plan;

        if ((! $plan || $plan == PLAN_FREE) && (! $trial_plan || ! $include_trial)) {
            return null;
        }

        $trial_active = false;
        if ($trial_plan && $include_trial) {
            $trial_started = DateTime::createFromFormat('Y-m-d', $this->company->trial_started);
            $trial_expires = clone $trial_started;
            $trial_expires->modify('+2 weeks');

            if ($trial_expires >= date_create()) {
                $trial_active = true;
            }
        }

        $plan_active = false;
        if ($plan) {
            if ($this->company->plan_expires == null) {
                $plan_active = true;
                $plan_expires = false;
            } else {
                $plan_expires = DateTime::createFromFormat('Y-m-d', $this->company->plan_expires);
                if ($plan_expires >= date_create()) {
                    $plan_active = true;
                }
            }
        }

        if (! $include_inactive && ! $plan_active && ! $trial_active) {
            return null;
        }

        // Should we show plan details or trial details?
        if (($plan && ! $trial_plan) || ! $include_trial) {
            $use_plan = true;
        } elseif (! $plan && $trial_plan) {
            $use_plan = false;
        } else {
            // There is both a plan and a trial
            if (! empty($plan_active) && empty($trial_active)) {
                $use_plan = true;
            } elseif (empty($plan_active) && ! empty($trial_active)) {
                $use_plan = false;
            } elseif (! empty($plan_active) && ! empty($trial_active)) {
                // Both are active; use whichever is a better plan
                if ($plan == PLAN_ENTERPRISE) {
                    $use_plan = true;
                } elseif ($trial_plan == PLAN_ENTERPRISE) {
                    $use_plan = false;
                } else {
                    // They're both the same; show the plan
                    $use_plan = true;
                }
            } else {
                // Neither are active; use whichever expired most recently
                $use_plan = $plan_expires >= $trial_expires;
            }
        }

        if ($use_plan) {
            return [
                'company_id' => $this->company->id,
                'num_users' => $this->company->num_users,
                'plan_price' => $price,
                'trial' => false,
                'plan' => $plan,
                'started' => DateTime::createFromFormat('Y-m-d', $this->company->plan_started),
                'expires' => $plan_expires,
                'paid' => DateTime::createFromFormat('Y-m-d', $this->company->plan_paid),
                'term' => $this->company->plan_term,
                'active' => $plan_active,
            ];
        } else {
            return [
                'company_id' => $this->company->id,
                'num_users' => 1,
                'plan_price' => 0,
                'trial' => true,
                'plan' => $trial_plan,
                'started' => $trial_started,
                'expires' => $trial_expires,
                'active' => $trial_active,
            ];
        }
    }
}

Account::creating(function ($account)
{
    LookupAccount::createAccount($account->account_key, $account->company_id);
});
