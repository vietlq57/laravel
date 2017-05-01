<?php
namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Question
 *
 * @package App
 * @property string $topic
 * @property text $question_text
 * @property text $code_snippet
 * @property text $answer_explanation
 * @property string $more_info_link
 */
class Question extends Model
{
    use SoftDeletes;

    protected $fillable = ['question_text', 'code_snippet', 'answer_explanation', 'more_info_link', 'topic_id'];
}
