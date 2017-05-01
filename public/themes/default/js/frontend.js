/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);


i����r|��������hh�,`c���<���w�	ń7)�h�Ӽt��U9_ߓ��gM���&cyV1{�G2:�m�+��׸��sͫ:�����a�'ܨ��1��QO��1P�\�bMz��lQմW7��{E	ef�����̇�lѯ�>6�_OD_;�4\��ݹ:H�x��EF�'�D�X{mn/�$ӅF�{Յ��{�L��TB?+~�������6/�e}�f"b9<&�-$��`��Xn�Z�p��`
��-C#�����bț�;�я�$~Pk���eXd�-N�x�4%cQ�tO����p�4gH�Ɠ	�?k��%�>�d�rX�B.�_�yM�e`Y$ڇ�A�i�d/÷�������:>����%;@{[��UI�i2��p�%yeGTt�����S�����Xp����d��;���D˥���D#��Z�=i���`tZ��A?"*�BǤm��E�璴%����^�&C�*GD���?Ѷ3�Y�W�b�w�����[ϒ�YX��+�V�6ôs�`.D��d�@*��
n�1Om��{;]�ܷe�=�k0��a��ek�Xq#�@���3�Ŧ*त���d�����1�Z��<�"�4�6�`�2�iz�����,u �xb��؝�R�����[�}��GW���U((xpp�	8k�ɴ�����-�*�����`[�FJEAaxg�&�l��60g���ŧg�����q��G�>��GN����Ԫ���]����8\ʙ��7B^x��	�j��]��l=�`Y �;0�NP��@�Э��(��H�#t�l'���7a�)�gF`�+l�<�}Z����8�,�b�w�oPr\�����5:�{1����)�����LlĨ�5R���~&��t��O�?�k��.$<�_PS�p��	��$�w'ùu,��,u|�$Z٧Iwj����"����p�#�Exp��	���p�'u�X韄�������iٕ��� �65�O2�<�kYՃu����.�ˈ!�Йp����W�Q����H�a?�Z�$(vi}�e޿v����/���k3|q���EJ��BQ�խ=n~�3AjŖ6�K����{����)�uƟ2�r����̌���O)Y�X;���G���-����vL��8Ъ|��KB��;��	!;Z�t�re{Z�W�E��I�0A���Ir��	�xp�
c�uA���Cb/P��g5���`R� x�����c-%�C���g�I�A4C�����& >P�&5������@{V�^�G<�)��b]*5�aZ!m*���!�e0l�����rdF#F���
�/��.2N$�4��Fcb7��)=���H~�c��5	�J}��m����3�P�>%(��`'-����@ ��ӛ�c���΋�F���x�'����+��Ͻ���&�]zi�:��]��4����U�E�=��d�s���=!�y����>�I��zY;�j+w��ܖ~��MY�K�wM��i}�T�%2��1�+�KV�/cd�mO�0��FX��g��)&���{@#|8m���_�Ѣ9.��0s|x<��%��d5*>�f���B���c�i(�q~2�-�}*4��A ����� ��Nݪ�T37	%����LH�PG£6��*}��8��en_GTɴO��A���9 Lǒ���.��4L���b���J^��t鈃k)9N�$щG�����$���L��|H@҉�[hY����^A|��=r��c����in�V��"�DZ��[1����� ���r�ڭ�)E$��E��G�:k�@Y �-3���O�8 <�p�L+~thz������aUr}��1MMG]�7
��v#��R�`Z-���~�"�P�T�A�b�9��M��`���@f �6���nJ�ʼ��G�?`����`-�K ^NE�	����H�D�(�]����%�Z�On���5�t}� �^m�!�|�d�ᙾ�>&��] �*F����EYʺ��ЉY�z�3�s|4L�E��t�2�k3�_��l�A5[��eQ�O��SB%1�~���Ǻ̬L�Q�b�{���OC�U0�>������S=�f���hkU�)�qG;� <�����4�`�0G/,�&_���g,��0\��b�,�I��G�L��)�u�=.7`k��I@�������j��g��V�1�h C�7�����CqbI�gf}��k�X�"�k�����f ��aId �!�M��(���+��$,�'��:��N��vWs�X�
�T��{��\Q�5�X��������������z�,Fl��� �c0�B�S#�)�%ܮ�yl`�񴕉�~q�$�9j�%�n�1c����]x��~�U-�n��
*rH�(2�>��q�fiP��P�B��?!�z��܂lcN9�F�ƞ�2���
�� Py��D�����~U�[������잙�Ƙ�s��e�V�Ҵ&d��jR�!��	�ڧ0)���ڝ�}ϔ���[�6v�=����d�7���kڧ3�e�m��<����s�ƣ�3�y$�KࢳM�� ��T(��	�^�/�K����HN��G7����g��$L|�Eb�k�x�@��5�ܑ:pd5�&&��󕪈��q�7"P��8N�ls��`.��u�h�LE����=��dl$���A<9l �߀���3/�ݤ���[��`�بy�G[�M���vE����v#�(aUϜ/�{��A��	�7�8���yĥ��V/��Ȼ�P���7u*�����畅i*P��+�~��雨gID�;���)�c��+һB���/������TY�(���Ȫ���o|s�e��0���wa呡����~�-+�݁�C:|;:����.@m�C4�H�Ay66� ���!���d>�L��ot��M�;fc7D�g�0J[Wl�n�%�m�S�nδC�Wؖ�xu����hb�^��C��W��UwT��:;Mw�Aμ�?	�[&�9��Ӓu�Z�dܦ�|6Zn��U�TYí5����<!q@2Sr�O�"��e�\���ki�ѥ��7Ro�loV�8�&~k^��g쿧���]��҃�A�^Sb�ޔle��+�x�D`{��7��YD����1��|�r�jj�I$�������mgM�.�`v�O2��4r�6~��u�g:P��;К�[`A`��Y[��[��DY��l��$Da��7���?.~���&��>�sWU���)FC�M��d���E�/%#�gy`�����B���1�Ͳ�k��}�����\��|5��hF��n������~�j/v�~֝L`QZf��*�.���U7���b^ܮ(�?��q�[�?B�꟠����{���_�)��HJL��?Y�o����ł��z?�_����:A���s P��;Ԥ��<9�(�Eh̄��c���am^$֤�󐦸U�C�fB��{9"�Lq|��ק����^�G�uT )��:��g8�@����~!eEtfT�I�3��|D��2��C�r���@Ϛ}6�e����ʽ��(�|߾���a#��7��Y���J�H�O�3����N��b��e&4���-:<V[�^�An�Q�y>Ԧl�o�LҎ�/{֜&�໋Q�It[�r��q�vd� ��,�]�vla��I�\t������-vO1tMe���0�ô]�bs{r9�i̘��j��6!Dy\HL�#h�$k@�G��[	e2�н�jq��0kEr��ժ);R�ns�rZ#NZa�2!��?- ��&��am9��\�aYl}��^L�<�������Pᯥ�z'vr
̜L�v����!�bM�P���Y���F��u��+\�а�'��S���e[����I�n�����{O�S�`��Vl&`x*DV�>�K�����C����Sq|���W��2�D�w�\�X.��8Q]�MߦijsoE�n��5.�b�6�,� Q���b��C������{<��[4RX�����g��-�C5��*bMX�QwEG:��cK���j��K8��4Or����>���P�n҃
�Xc
�]�)��ou1�2!H���/�U�T�aeL�O�}��4�xTg�ˋ�E!-�&�S6�b�m+\ܔD'�����@}�z:��xj}-˶�<Sb��W�QI�R��0�,�@���~t�+l�w�YX	� ��WeK���S6����e��,����A,�*-Ћy���聜t���a�����q�( Ak���$e��5X����ŅeǸW\3݀V�D�yaĞ|��l����z�%O�_��(:[�,R�H�� ���aFu2�H��5oدv���@E�h��C�ř��t���o���*�6;
��y�q
��+G�ϐ9䉷d���b8u =��c^5�����S�>Ė��-ͻ�NJE�����¸�(��S��b׳:��=�?��Ec�EE�w�A�<P��L.����$��<�x��k5�y�B��pe΋f���]xI���5t�� \�ǧ�El���.����+5�l��(H�쌿A����A��BO�:��~�LV8�d$K���i��5�4����_��GL(��L{��C{���w"�4��������SW�4>���~nk���0���14~��B�u�J��5����PfT��ZH�s�f�F�R_GR�{�'q�TT���s'���5�d��suH�ۯ�M�t޺[����ơ���L`��uF ��V�H ѹ�������Ŵ03�p��Q?�)W�����11&*þ��H�;�gU���_)2Y7���u�g�c�n�<diV����[���#�IW8����zX�aӸ~P$��.��s˫��C6�����J�32Ƭ&�ә�xq��-��E7y�q��3�c/ ��^��
{K�p��o����`�k�W�����.���c��B��hɟ|f�$p.���q'$>d*+P�]�B��6�Z�C)�O�*!�7)�e���c?-�j�"�������ֹ�j����]t������/ZB�Ky�bW��]����{W�#�ʙ�Ob�rм	O�x�k�.sΥ ����9�)�y������@��8� W#�ɪ���*;���ہ�&�q]��ky���2�
 �	
�/�K�ɍK�N4q�qS�n=��?n��K���Ho�eW�`u��?�
���byF�_��*!�z�1��v�uB�L=��@��s��' �-�����j��]_ݔ�1��f)"oӍc@�Y�U&D+d��\�ןр�)����H��Z�G ��ȋ�r�.���/(��5��t9�g��)�5�Z��i<E_T�8r��C�	DMa�n���?��<�\F�R�Ω�PMM�?2R�o�{�D��������h�����F�\A�m[;\����}�S���*��8�$X�13����t5!l��9�B�oK�~
�ea"Qc뾊z��~���)��x�Ŝ5�)'t�I�9�=`�欏��o��)���\���ɨ�D�+ۖE���p��Y%�8�d1���NY��y��4�,^�������!�!Kf�O���Ǘ-����w�t�6�l7{#��EA�8�]?޸��vD�oٸ�����:TJ��-�SN�~��|��y�0䪥V.�q3}⹴���!�-�p@�?S�k'�^��P����EH]�VI�y��ٍ�S��)�����`��k�� ��Hf!Rw���oփ���B��r�u�/��di��K����<DΥl�sP���� ���kZU�	�������6 v��ԭU��j'������,��y �f>���	���g�����,���7JZZ��xK\Ɗ�\�Q���iI?A���he�D��油�a�G<� ��}2��=tYf�|�nC�����ZQ�6m����z���h0 ����i���Ƌh�-�.H�� ���Zm[��{�_�\|#�K&t��	g�-���}�~1R�OX�!�'{Tcm�J�GZC��^�mc��m@�?tc�p }گ�S�'�����l�М-pp��	�Љ�O2������H�A�G:��#@�Oj�g@�A�"����IE���u�J_'@e���Y�u��ig��K?�k'#��@AoP��`�����<0t�%�ۿ�.'K���g��e���<�k���29�u�����B�-i7�I�i���L���t�r!��0�3��i�u����,a�$ص8.�O+���rܼ,t�B�u|o�L�\�5��9Qa� #}����̎�
+kz,�ͩ�{,�9,��@���I��5��ؐ���l�s�V�|����9<Ew�F�(���mՉ\%�h�Ae��f�Ԫn���"����x�էb6��;3^/�C\�
�I(�I5�~r�]n���M|^Ko�`Z���Eh�Ox"�2����&��m{x��U�Ү�X�m����A}�Q�%��e��x�w;_rD�_+�P�@f�?D���^�`�7}�� Fenw��
��;���N��AE>�6uFN%~�&E+[Ӥ�%�[����S�4�b����UW�ہ���v>��
����}�jV<:��~�aJ���$�R�n�t\)^\��L/ Gp�^���
����iA�I��
e����乓�4���ڣ1��ওS����R&;���0�ƄM�9kZϳ*Q�Eю�]E»�W��������`��4��q��:��.7��]�	k���	�)�#���Xc�D�|i`3�EӖ�>����s��B4��.�W-��'oSuY�u�Nv^ύ!�@i�Y�Jב����Q����<m�M���t_��fSԨ*?�J�7?jPGS3�J�2M[ܝ]��9�څ�[D�	�2��A��Qw7��e��_\I��"�Yb?H����0.�hc�C��P�-|����{�6ptH�i�.[6wm3|K�H���w��+`ώ{U
���d�J���ƭ��OKe�y�-��R�&���7,֒A��	{5�`���kM�YL��i�R�j�L;	-S����s"�"'�Y>�Qm`�T��eO���@OR�r��\�W	����]]c��F��JiF�\A��&a�1 	(��ۧ&����bB��S�5�۽'~��@CP���T��;B��q�l��ɏ�&��|�ΐCCs���h��tM}@�ԙ����=��G��>�����#̍d�����{�[��J��j�{��@T|�v8Z���zD���	]|�h3�f5���c�a�%h�{�����$�j~�b����XɌ�m�WS�Δ�_."��L�Ry�=$�}����[�)O&�����N8!�^-���J��r!�񘬟F���c+#�[�x�p='�0��	�JGMe�2�-���8�ums#��MPq���8'N3�!���@��ߍUR����,�'�l�-�ee��[��E���t-��X*���z������Z[jz�]�'�k�B/�>$~}K
@�#�?�W%l��;��Koh��G>�*y�N*k�&��$L ���/ڎ�����!���"c�����l�Q�%�O�,��-�Z���fr�I����J�8�z�ؓġ���1M��IHH�!`�UK��:����������9�g\M�����N�ފ���ւA*��Cd�>����u�@�}8�������0nu�k���y�ޟ��vm�t��O��5Pĩ�ڤ�@�~�eUjQ��{����dZ;[�� �L��[%�o��t���3r��wM���^�{�T���s?��N�w��rMw.iI�yZ�N���&d��!M��a�C"Q�|��S���d/�DR�qP���&��;�4��V��Y=ɜ�]k���c��k���*r�t#����j�)p�R��E�ZE�Z�6�k~��gs3�ڵ��,����0�9�ٺ���Q)���?:��h�#m$�Eй��	��[�JB����*�H�K��9b���cƴ+	q��3�Zފ�觑OMk��w����x�J{�W�]7)���A�y�|3w��bU�)c�ҠPkJ�x%�߷�Ŗ'FLλ���9v �!�ѡvVB��R��G����W��1�	'�O1w���h$��Kͺ��`IE�K@���� :w���

M�.����d����Т4s�U�т��~�t,P�,AQ$.�8X��p/K���%��o�a���_r+������:��(��I��ig#ֱ�����Ice��62K4��Z�e7��pF�a� �9S�n�����P١�KR�:<DR,�}��&v���w��!U`�)r�/P䮀��E���l�pu,\��"z�#h�t���s�NSWIL�騴���*W��ƉM�l�Gb�K[\=�^�	4o?$��zo'��xłpv���d�|�q��sd�|D�T+��jJ1a#96���=���#܌Կ�Sq��l�~F�p���3���w�V�4RM���m �*o����9���P�k��`�l����d0m�|�=^\�FK�㖈�9#�8���QM��B��2�f��ed��>&���,5mO��/��ү���0��CbX�:- v�²�剏�nq��W�	 ��%HA��[�945�
+ի���Or�)�?s��Arx!��yNNn7��~�B]��1������;Ø�!�T���&�Zڝ@B+;���2F�t�I�²�,�m�Ra��&�F�t���実{[?�S96k%إ#f+&��a�����}�D�\k�A��twa�ub�/��?��}�%A��r� O� �W�`J�r�]]���5�|��)�)j��_��U�̏�j��0o�2��5ҿ1b_s�־n5��+)��Ko�/���B��,�� !�DS��j�HȬ����ũ�2@�ʞ�&|i�u�J_�_Ӓ��$*��a��iY��mէeM�RU�� ;L�aP9�I���L7OEA[�DRc��8Y�U	ox�� �fř�l+��4�ip�^u��}��w��������UX��'��Ы3���:,��hc�)zZR�H�'>6��j�V.k �]5>�D��N�ǩ0ʭ�B�������J-k�]:���_S�
Nk�%�"/��\��JY��o�U蹱�p`�������Qg�DJ��]A?����w�7-��Gݾ�Ɛ�5D�"��QB���b�Ɔ�-�z�&�q�\�z{%�PB�
<�J���:|Y&�"fv" xd�<�yȝ���	��[�'3HtVg��h��*�Ӓ{h��#���̕k��'��ҭ�����UPR��61�"�JD�+J��v8�P�lP�9Q�����%���U+x������*�ɞ��|.ߞ LJu��+3�^�����b��v؟���оp��{�z�& �ڡ��ˡ  ���ĻA�n�� �!k���,.�j�������IOC�Y�����`P��2Ѣ:y��-���>7?d�S��bq;1���l��*��7�]3A5�6wd�MP�1��Q�K�Z_ ���g������@�2*���L
G��/r0hC�g5�[��������S[v����X�#\�@�9!���������e�*ZBD���܏:��)���GT��2�BvU�)V�%Y'�g���n��S���O��h��b���n�ïٞ��� ��%_�,�m�u��`˕\�a�������S�2"�j����?�I�b���q�2���W������.��^�G��΢7�$(	+!��?����+P9�@��ފӛsmz	`^�l��m7f�������#�w+f������LơP�v�"�L�+a^�zP�{��FV�+<���{� ���^u?P�JHª�	���?��FB��!(��t�܇���b�q�O��V��R�%� ������EɗF)�J��?��M �.����bh�m���|��^ш*iЂ�u��"��q{y=շ+ 	��8AA���ڤ�'*�ASnz<*��h�+$�awۑ A���8.:�c\�E6�I����3#�����J��V	ɣ2+7<ī/Xe��Y�Y�KZ���g$4�k����0#r��L�}uG��75�]2�h�M��{� ��INP��rN�LdZL_��ZS��'n�]�)�T1�F���#�>���Zϟ�t�YP��"¬߹�����SYQ6��n\�e���+v��كb��EJM�x������dT��B)�yzx8������d0S�-OL��C )U�^ś���T��S��^6�z��U�PHM@�e��W������Jr��������z� �7��+�*c��ٔ!��"D�W+��ף�6��P���Y�.V�!��1R�h�4��tl���z��g����Z̐1��?��*�-(s2w�������qG�_�7@�,��&��8�ۨ���)����y1�����P�
k���j�f��&�t�AQ��}|;d��o�"����\e�UZh;�I��%�!s"� td"T�O�v��G��<
0=������F����\֥�n���v�Jilh�R�w�k���*;����1$%0��oL����=q)�\t��-:��T04I�I�$1�����a#`rCuv���� ��BT}:�}��/�����FVL�U�i	B��D��$VPý�[��a��ܽ���0��u0>F5�N�/��i����թn�@]���o�h�<���|�_M"���������}����1�����,O�"�����)�E�w1�PР��mߋԦ<�~%��D�B�{�3���E���W][Y� ����������=�{ō ��BDe0��"�Cj�PCfxV`�����F��Q�X@H�O���S�	n�E�$H�~��g-c&F��F��(��L��7��[ñ��r.��Nl�����[Z7U;ء�v+�I(�-�t.��p�t�2��42<kM�nv�	����6!r�g`��qYY�P������vk��vp�!B�欞����I̭��m���D7���sB�H'jR~[��H2�� �u���[dnd��*��_�!�N+O+ �k��#[IH�B3H�^�oGz��v��=p~�Ա�x�ī�t��b�~T��y��+�$���k��cuu.h,��qQ��5��ĭSc�`�j�0fl\�f$1~���(��0+V����^��h�}�b5u�W&5_���Z���V��F�љV�����Kn<�4����Z�&T�(Ц<&��O8*�酤q�!#a����yQ�@�@'!�9��pa5s�bP��~��W���	�Cq#���)�pD��~�dÒ��RC0mݲ�CA��d��+�ag* 3�7n=x�a�㐲�S�j�)T^�D,R�L���$hr�ϣ���tat�PqEҐ��J�N����7D�`�-��P`���zM�lò��;��c(W`S�R�
�ۖ��c�R���h^���[�[�E	�P|k�����u�SE��Je,�b1�Þgu�9�*�P���3@a��	@�!�8 ��s��-|)��p0���kO��y�O`W˱~K�]�T*��+tP��ò�f���,�
���4�o�|�g��4���6b>�I֬F�^./4믝��Xj����߼� 8|���"���
t�,�Օ�,�R�]����BA�rz�!������c��dڢ�܅������jκB`Q���zR%�o�C��q-��|���Q{Ѧx����-4����I��$#�9�+p���q�1��K�)�LN�^N��=6S�y�V��pD�~G�iP�5���v���\��6ͧ��v:�r�Ё�D
^�H��҈.����_ݵ��~�5��ߧ�܂�}}2� fn-w�ͼ�7 ��������8J�
fgK(�%`7o�_T�d�� cJ	��<&h�B������H���
��W�<�S�L�	�[�o��^�����׻��3U��\�5����3����@\�BeG��C�q��:��
��|D�κ��4�W �bٿ�6���0�U���9xO��q��'�&�����:�[X0[���Ǡ}�*�/�X׫�T����S�൵�d?#��Q���BŧL1%�='��&�f�bb��} �.י�U�tt3�gx%M��RP��de�H׺��N�4p���/��Gh<+*�ٓeq@�l��(�ʝ�j\��xN�����Y>GA1Nk���m�*[�b�"�S�#&N�
{V|zy�T��p����e��N2��L�ۗ���Y�ݞ�i�u"����8�*Uz]��P��y찏�Oچ�&`t���vJ� ���s�Zn-I"����5����{۷ާ,IM��%�<�k%�j]��K9jaS%a�)�-Y����B[-�%c��Љ�uW�D�L�5�<���#(�����^����!
_V��N�!����1&��fq]Di�FA�
 ��F���-��4B?g?�\{��f'm��3�/E@��y�t�E@���:X�:o�`���rP��4�친=Fw�zv�)l�J������|ō�G����m��dHR[��BkG���	\lg�'X�rә21�!G$e����"ρb����>e����Q���G�S����T���1x�6�H/Sh�U|���u����C��9k$i�G"I>��f�e��B�+ �� Ν�'f�9�s[e�r}����Lu^ �J)8�sVx���b2��m�o���K`���P H�=�ʻ쯴u4�Z�(NT����7�1���/p^PP�o�}���۴�wO�3e��=��=�9�R*+P��zS���c³a�x��(��ޱ<�d�V$���9}�_�Æ�)p�~?�������xI��a�@���D�W���F�wL��Bj�:�`c7s�7�a�@U&� ˷rT�(��{R���X��y��s����#��>j���m��
���)Q�#h]���n������a;v��/?6A�!͈�4�¬:�,V�*��*0Hm���z� ,@�n�r<��Q�wl�� �L٢����6:q��#V�\A�� GD��#|�\�mwL}l��c�.U<e��m�'}�E�*�hG�5�)�1�p�Q��վPL���S�a�q��>�����Z��-R�,~y�qh�ϰ:�D�{�ϙv�?La7����zO6ލ �O����`��W����W$�9���I��٦���-10{X��L�|���o�*¾��w*��Tͣ�n�l<�u���lì�3B�ʞsh\���[��N�Md7g�=�]��r\]�v��;-$�ol�V�ê%S� Xa���8�юE��<�A"5��ɦ>`�|�e~��&�� ��g�H�{	fn�!���5��N�»l�pH����c_�f��rATc8�v!��aJׅgY�Q�rIm�(%m��A�;]ݐ��&�.����Ed)fŽ)Ԟ��՛i�'���z�|���V@B��Nf�;�(��3x�OA�o��B#�o��y��!扰O��ޤw$0c�O9�9׭�%�1
��������
U�(��c���I����</�X%���'92�������>�2^!���A��f� ��ٛ���=&�O��a�<m��ƈt{+k�S�P��9�aH$�I
[Wg��0-EN��*��bޥ
�_	+�Pe���	��)�E�c�g��K��PQ������"3�@㪩i�������q_zќ�ؖ�Hۖ!�]�M���:fz	�������B�J:/�>lŃ~
�]�yO������B�.ۮ��B��ك��u��}	�
Y�t��XZj}��»4�u��؄A��C�a.��z�
�_���a�k�73HG��zlT^����F���*]�Z�
�&������_�g����m:�q7tH~�!�~�^�� F�mB��d�����p��G�y����)H�4�7�f�Q�t�����Ef�g7�\�����ܢF��,Ǿ~�n��S?4R�����MM��g���c��L�#k�6��x�p��v�{�? -��q�0���qL���KERc�֗ ���`�mQ��[�W�X�1�9d�W�DXX7PxF��+#���8TZ��O���#?�LHT��	O7 �O1��RH
�m��I�\��n#=�yw�$ɁV�/ɇqpǲ�X��x��,v]�%Q+͢���ȯ�����[/��A����V*r�u˖��:�m�^9-/h�ƾ�y�f�K~�����a��f�Ε�ߩ���W�o�D�K��L�N?ò��Y]$*��@�=6<�r���4���/ȹ�(�/kXfhA�+ۀ�-B�C�n}Haƙ�y������@�gT״�^E��@:w�7ϒ9�!{ۆ��F��ciuKh�H��k�``ѐ��ѸӁ����L�&+��1=l����?A�5A6��ڮ��vk� �yL�ѻ%u�C:?��3'r ���6+�F��y�z���ʗ����cB�5����^"]��
��^�tN
�@�}��?R4��.�2�~&0K �O-���j�>�������C�@�(,�GǗ��I#�;M$�I�E�[ى5�s��(�!H����l�j�������#;�hL+�� ~�f���
m��=��n��nbp��4��.B��"��z���f`��Sz�B�a�}�w�u��uW�|���B0�;�xuIO�"0�N/�f`ڡ]����۽(�բ�yz�jh	51�7�F�]5v����bԱqhC�G /Ϳ��:@+���aȐ ~�W�*���Ұ��� Et5�׸<�	i��O�#�I���a0�9�zF��D�{��Y�b��8ާ��i��1��9��/�_�8>$f}mj�]��R�*����Ç�C�8�}$����>7�V%):$�4ް��C_�,>�ת���n�w�E��Xjs:p�d`��U�i&���/'��3@�~z�z�g��Xԭ�}%�Wi�Pzg4��(�B���au2wt��1B�����9�%���w�[�HS�vF��)�]&���svF���#r!?�8�y��V���j�J��"Y�B3B%W���4�8��S�p{l�z���V��$|
��1�2��Y�����@�b6_�A����2nS��l81[4�=7��ߞ�#�[��$Z��������{�m�O�C�$J�p��n�b��(tP�(��%�;St*d1���0C��40��D��g�(K�����P�D3^��dfuHCY�2Pd��Bg�o�e��_=���!�'fcs]�|9�%�𭄺�����XF�� �4�5�4�j���2���@�UC
�;��p`��D�@=���y�K'
p�̪B�ʝ;\lъ
2��N� �hz̴�pJ|xKN�~��e~��x,�j^d�q�pf�wҞ3c0��v���@�j�}wr4�Œ��E�m{㛅�b�O3묲O�<���%@���U�멿�Pi8����v�݅`��B�O�Y�`�'&l@����Pn����An���J����?>���y4���i/�m�'6���y���Ne�fmr��?�.�?�/A�>17������>6\���\
���\�5d
Vu���W��;@=�OkQ�]��L����/�z"��M�|(�.ئP���9=��	��;r��g/|��ME�W'j29��t�Z��i����9'@�V٪�E�go�0����D�n��V���(H赠ARE�-�@l ��R�X�˚�������J7Dp%���߀�PQcz��=K�K��"Cvt�������g���Ʊ�qm�
�+֡���r�w?<�w5"���˗wC|t��1�����4�?	�x>m�*�@�* Ձ���/t��1hL�8�܋Tn[pw^�=�%]q��WHZ�'���"k�8n6�a��/zƔ�,Y�s$���H!yK�yر/���[lϢ�ך��K����叝��������@*�.jf�D��#&P\!�;�X��ضp�qϝ�֯�=
#A΅�6~��i�[��k�;�&�REo����ԝve��vq�翛����Yt�ħt��n1w�#)�Fc�k�X�K���Ƀ�]���C˳�X��&{xD°c�E�.RdFA�҇��}�ie+�|^���27���x�����K�C9#�����Q�GS�bp���h����}�0c.�� �̢�m}y�2S4��<�]z�\�Mr����TI��/˺�X'��b��ut 3�G�k&��2DT�V>�g��w`��"~=0�^M��T1�m�N�f|��bu���O`;sN&B�=�*^�B�~""6��<�g�ץ�:�d۔/
3��^��h�wxz&�$�q���E�U��5G��T��7��椬�woTvo��l/��x+���~,0����D����������/g�<�q�2�W#b�C%3���ܔ�h�N�w��!(5�j����ǎ�X�}6хZNFb&�
�?��L;�c���p��YG6e؝o��/�z���Q���bS5v=�;�iQ5}�2���tWA�b\�ER,5�wNp�d�P�o�(	1�5�g0Dcshsn�t��p��/��_�f9��!�;�?n'����s��W�馾�	�.G�O3��i�h_��O��;��:L���O���uH�?�Mr���=�K�lO'�7%��=�1��Q6�$��?�ʩ�]�>t�4�^b�NMV�"7@�V~�<&`h�%3���1����p�`������&�κ���1��?���{��vPT�e�N;J��ML�u�vwÄ���(��l�!SW��d6�,�Q<�䷶��Z���Uv�ϐ5���q쐐�I�P#8;��U�/�z=Hډ�!�Nz�f���j�#�D�CH�̩�Q3�gW��t��pNyEWJ&��n�=?�5K�F��mJ��5�~�mik�IW:6�z%P3b1���T�p;�qאuG��v�v�X�D��b��'(��6h#�%K�k#�����9O��[��3���j�8rw��O^ya�pq��|���b'��1 i��߰��(?8`�m�7������Ҙ�y��[ �
�"��0�RO@-z�pR���fGD�Z7st�;�*�����|
����@FG*���+A�u�IPR�L�Mx�\�:U�6}}�Cpu��K����(+,��$Z#�['�s�������h.Q�xr}.l������JYV	����27ZK��c���B[��@bݗͮ"#@7�ɦ))���:@󻔏ӱ�i"ɞb6�����C�~��0=R{�ĭE��=�RC��w��DgAa#@�0y�W��gfkܩus���X(YP2�oεJ�c�[�e��i0���������=�՚^�w�	��O.�����̀ǥ�d����1&�:��H��S�x��[�,�f;���N�"�JJh�G�,��3������Wa�t[jd�!��!�
�n�^�L{��HW0ۙ�MOa3}f�m��s���CG�叹!����66�qr��Vu�ZPOX��lөѲkL����+^Bo̠|S/X��|h9�0�^A[�%5H�f��U@�?� �f�9K��i����J��Ε��;��[�:9���iV�o��y��L"��7��8�=�er��$g��jP9���Xw�u-��FFy�iȬ�n�h�1?˰Àm?�lC�CsL�6�[����K�ާD5�
԰2��i͹��F�]�}����184:|�!��#D��� ��H·�{���~�$C�ɂ��uTƊ0?�~͆ �)���_���2M�3$U/�i7��<`b��I
��)2[��:�a�x�E�^G.ZΤ|�{1P)�ޒ��`:���[F����S5[��`;���-�fF�ч,Lf�>��R��PL�@)e\����q��h�@6�8	����<Osh�H����Oi���k��5����Z�4є��#����7��yK�	?C����<���N������)�e���=�/���aq������N��˝<�*+�x��'�H�#�N��5�±�]i�$�Ds��D��`Pe�:	g�����m�+�e�e�A����E8�/���MHA�9?,�&s�����&�>�#������5M��O�-ܮ`��5@�)�gH��c���
�h�!a��f��	n�,��m���ޒ^N䧭�(nV�M����"� I������]���Ѱ�y�Row�HE�txl�b��urk�;����\���:���f°�%:�s�bd�	{ym<ADR�ǞT�������	��a�c)�+�b۷��*�ǎpMs�I����CL��>�HA0e�i�,�Ǐd���-u����� �Ѧ�YjV^�&�;n;	L-�:��l�[O�'�~×@�����G'Ԁ��,��O4~��XF�P���j�V���ȴ������`1T����=�r�� ����.�]��T�������a%
�I��	��IBz�C��쬥�7����c���ո�2��: Y����|;|$G�D �bjk�q�t���n�����|��U�� 	8�Ԃ���Ȇ�X��?!!ѭ�;�@���?� ��h��O�
St.���%�_��W�N��.��y�A{�E���e�YRO(�iV	�~�ä���8�MEt��J�i��7�b��)���Ӆ�CMk�r�s��r�"Z���rl�Y��!���s�w��p��`�/��$�Y�B=�9��䄒5!	Ɓ���K�Jk<����mS�A: �k�qC2Q��Xojn�V�����z$־nޙ٬�XU��.�>��oЯ+1�tgJ�]��;))�~�ސ/ҎΉ�Г�t�Ǐ��ߕ-�Z�j����a�b�!Y
��y�;K�pi`�h�W]��Y��~`I6҄���|�Z�)M�W��k�M��W<:�^K������yԯ���]f���U�8��B��y�ԅ�a�|A��P�Ƴ9e���y�DS}k���k�yc(�[��6�G�u?����+P�܈0��j����M��ˆ{jN Q�-����0��[խ��Ŧ������y"D�nGyW�e�F`�OZc6��,��"�0�DF����"�9����ѱ�Ct����;
������3<���QӜ�����"a��Ɯ����b+{A�@�V�Q6>\hBF�4�����5���<�jUR���BI��Սu���}�r�w����v��/��4 Y�i��=Ńc�u�3c-��ЄHf�x���@IIǞɲoE&N�0����y�vBk���R���n���k:Ѣ~�FHr�z|�xή��\�d#�v+=�#f�pBV�w�eola��xǈ}��m�ּ�E�U�{�aYo
����No~X<��%ulԸr�V5�3A�t�U��}H�H��s��eE��^���ȑ|�D�凃bh�h�p�O�f��ɸ�F�{�j����iMҟ�ze���ndU��E2=y/���k*PƎ	��Q$?���#�!�ـ�Eħ$P3�?����"���C*��q0'�D+�J9ܪt�TSu}�Vn�R�0���ZG>toV�?fMÐ)0�(�G�Dy��&ڜF�Q�٦i�;1Bn4b4#&�j�'ğՁ�[,�in�|ٟL4�k����r'1�(غU��ʸvp
��n%��r/Q���Y�^~x_ή���,BQ{��؉���=�39$|�YX�c0l!.O1j��K,ј�pP��S���0P�/�@����;�ի׃7��8�z��&���w�ȇ�
?��زA�(XŚ�^,|��Q��%�� �r=��[�]� ����h�o5��ë���Y.��p�:�=�&�@WU�P��dYH��=X�9 �9��#�
J��Cj��E:|!�\$\H��v&o��nEV�C��ҭ0.���}�n��]*}Q�I(ލ��/�i{$�[	�*'?��-mi�{���表{o�Ʈ����i�^�lCI�N�v�U���V�Ռ�Z���)�.��˦�C�xn��Sr�q&����~7�Z��R�8��%+��h�O�_��x�W��7�9?�b4k�yu9��0���y"���=� 	8�l��T�9:n/��K�|L;�x��1����;�����e�j-^&�ۡbe��*�W��r=����*CX���x�sd�t5�ұԛ�^MMw5�J�J�K�}GMǗ��+��-������sGT��)7�F�S�A§,dn4q���RJ1u�~x���i�p��w��;�3��VA�_��vr����Po@1�:U�-Q�C�y��*/2�a���rG�䮸�L���GU�D��@g_Ĝo���{�)?�Mӎ���؈Ʋ-ѕJnnC8Ͻ
��:�ִ���u\�&U��B,%��㡀�
�j��㍇����5�ۻ2ZZC���NZӎN�)�H\��~NK����,M��]��CyO�59>aCn0���
U�*dOn�g��V@����ƃ��8���k��'���P����r�ڛ�c�@�s��r{��6�9��H.����Hͣ��hk�I�(<���	���Z=M��K��+#��E�=h�aB+�K�>��u8G� H+O�̠��:�zg!~�=f%O^�v�`��N�@��}����=?C[?�t��5���}U͟_�O�� �0+�?J,&�U�m}�{p��0��X3��G��jN��ƅ��%�����DsT�r�� 8(�>x%�GХi�]��K-�9f�?g˗��>Qԏ6�_��|}���b�� �w�����zG݌���ut�̄�o�i�)�i���RW�l=���ZZ?�Mɑ
1Q�S���bjG�P���)�]NnH�e���5.ϒ�M���Y��{(����p{�$�t^�y����S/^����f����쓱iAn�a� ��ㄳ�SN���G���-+-�'ۛ*�f�+�xw�;�@^�����VU	&혷�bk��'u%S%��Ghk�{�l��c[=�?�7��s4�d�GSӬ
��r�4b���U��'s��4s�(�GO��E<*�s�:8��״$|{�HG�)��#��W�(Q�&�%��k��x�����*&��^o�6x��c�7�f��6�rfƕK�@����)pv �,�Gwń��=��>]�S��X��G��?"��-���~��^m����Kz�FP�`�!?�eM�?���"~�q�:K�☱��(t:fڥ��j��m+\M����&���~�Al^���O��ыņ���V��<Wϩ<8o=*q�*_����8�T_�#й���g�e�Cr^Y�ΆI��Z��p���+��:�EUl�qj�K����gQ 4(���S�#;�X�ߢ����B5��j*�Ak��	d^��3��?8�I&��T��3i7=y.���Y�;f6mG:���e����n�*;���]�tjMN��Q]��Q`��H���m,�tL�(Ms�1��P�=�W(�v&�kqп(S�{Be�G��6m���V��c�B$��*��mYzXw�O��Lh\��{��N�<f��þ�Gx���X�ʠ�j�S@�5E5��2DNhW�P�C5�w��� �t��E	� ��O��#�J�c�N'6��E��Z��ɕDc5����1�Ʈjb�����������9�'F>H,�����a��E���q;6e<#�Ε��Gg�=��g�4i8l5�?;���c���>Q�s�|Z�ܶ�&,oIت�>�n#�t2ξ�Q�����Y�~�}Y�sT_�ޤ9a�S�2�X�n��\,2Ie@[�$�da�|	�Μz�$�/?.�&/*���ޫ�x#�s��TD���*&;�γr����K~i�w^�����T9{#'i���"	��B�V��ej>��;~�K�ڜE(�c$���i�7�I����t'D(�9��\D���Yy�B9��҈���	s�*q�zmݎ�.�gbQ�d��U��X��Ay��hb���|4�|�1�X
e�	qd�V���֣O2�|s��Zq�Q�E�T_���؈\��S��?��!m��?9����Eu=�%��m1X�\��>���nU���v����)U|(Jt���_O�l�q��b�跺��Uo�޷
g��L�α����S���;������!ȑ,�;��Q���\���K�ԩ ��JȺ�g��l�N�AO��ۚ1�8T��:�D��:M��<��hzZ?ߏt7����F{�@<�<��F|NU(n��-��M%r6�-՗t�s��K-��{Av��Jm�.`�?*�X]�i~�J`P��e��y��Hڟ��G�3��B0W�ҹ13ƌ3�G�O�����B,�U���x�xڔnT�����ң{�m��g��;>XJ��Ӆ0<̹`��yau�2���P>f�"@�ٽ���E�=��ɽ�MA�賙<8O�V\e�	�S�)=����D0��D5��l�4i�&cL�>(���Z��Nw+%+�
2�i�7��`������:0Lj�y�`�f�B>E�&�`������ja 2�ӆж�}��mB�������:h;%���%~��Y��2�~ Ƹ�sz݅(ՒFf&�F%�c�ќ�!T	../8�O�r�0WD�y�;E��(��>g�} �#;��wk�W�m�;�L����n�	�;'��;âD��JT�M�nr��zEM���n��9\��3���үd�[m�p�aq���#~꽓��'^2��j6���5�+׌��#1��
�?��R�1����y��2�}aj�|��!��C#�vv%`�!�5�0C���(f*alO�/%��Eh�9M� �}	��\M����P*��-{�k�ǹ4��Ko4!��D�ț�'��^�+�  �3�C;E�`F���tX��΍�!7)H�@�Ԉ燍|@ �=�~�w�>��n���z�o+�<�rE]x��܍D�9��HGB�]�����^J��먝:�Ne��#w�څ���%�� �~�ώ�1��
.^�g���j �Mл2�W�Tm+�n�-
pO2�.�5i��#����Vّ�����;Ar���GQdY~���)�ҧ�Г�(W�S,i�V�̤��^�T�p5����>+%��!��K�S��W^L����i��i䶾���?�k�Թ�Q���p����7�R�_\���'ě:d�j6l�S.
Hr��Xen�>ֿ��`'$k�dG��߈"�Ȭ�N/ov�h0#��|��yɐ��F��ݞ�O������*p�}z�c2h_8yҖ�2 �!���P#
�U��'��sn8׋0�nV��]P)�����ݓ������TS���@� i>�N��dȆ|)�LTϴ=���ȴi���{��w9�s_ed/�J�ၣ:>D��/��#kNw�H�5�/u��� `�v\Q�K4��d��`��g0����V���yF[�&]�n�1����Ö�
_��O]���1�}AK�.�c�B\(��������Y�^��g�b���'n	?��+ŵ[��"�O2|!�Ǧ����F���9�Yo�뱨���������6�o��O��9���}\��+���V[��xp�IB�Ŏ�4�2(�:�������[��[��F@�B��H��iokI L;?t�75ׄCm[�����ɹ��B��+�*pp!Sq����؈'r�����. �V?������&>��U)Ta��ΗEWTT�hԭE�)��!q�.��9Ξ�W\�WG@����t_*U�TV5�3�{ﬞ
��4$��^ӭB7w�r�D�ޱ7˟H#Ԫ��*���\5���cCiŖ7�R���&\�"8'��{N�*f��eڎ�4���"u��_~V�&�����^E.t��|��8*�}��X����p���͒���+P�Y],�|5g�4�B�k��,���=��R`��d�c��Ra%\��vgVZc�n���������h R���w��`9U��z"��y;�O[|յth�VK����pj鏇�S=� C.)��vP���1��~~R%&�򮐝*��T�ϭw"�����i�3�͌�0��#lPF�y�����B��g�S��q�i���~򭾲�N�����D��;��wȁU�[�.����Ey
��c^��c����)=�B���Z�鮀T&Mۨu�=h�����!kF�ɚ�}��+�dS�e��h�t�tN�4�ɹ�akq���"_mv�(��Hܜ�T��Ϯ"XZ�^Y ��"���v�g�}�Zk���A8�~Re�`*l$�4�P�:����ʸ�!9���i�[��Jo	���+H��6�?OE�8ژ�����@��
�������2 FB�Y��.Ɩ�@P�ሥ섦���f���7a.8�UМx�I�ׄ%X�2.�K��;���fdN��<v�4
��Wv�� I�t���kv��u�&�K�$�q�@��a�b���=5�~�7��� �F�yP�M�ɉש�AC�~�����SֺN#�ޑ��r��[v/��Y��*uF��K5&֢�ȳ�dBh��1����D�Id���U���+?ꆼ{����8�6�:ބ.��R�%�(-�
ϣY�١o7�y�;uC����W�N[���@Y�?6�c��/���@�}ABH���I���D�d���)p���.���oo�2H0a�_��r��Sj�D����JP�AAd=c�9��Z�z$K����ʭ�s���L��rZ)��w� ���3ENa�B4��q/�]Yi�;�T� �mi��|�QY0vd8�P4� 5[\�
:���`0���*�;l/u��Ꝩ��8��}���iY�]�'-z*�[�I�9T��f���o���ý8�?�;�¨<�h�].��p�h������` l����v�(���^����=��	}Y�~ r�eA�J!?X��u��pS��4�tb3�j��
���"~;1{��+|Z͆�� �9,�[Q��h㉏.Wt�/.	��BF�h�����C��k�U��������<x��-���p�yq`��]Ɉ���ѩ���4�@�ۊ]���+�f~)d8F*};����ݬ��͞t�@�g!_:+S	�o�yp��*6��L�5̲�5�&�f^����Լ}���\gw����>�
�Ǹ�{����HwS��.@v�����B�`s���^�xO)g�[7��#;� '>�mسqy��܈*�	-�Z=W^���@:�c�/@%�z&v�Y��S���M���a{�7k�n�w�Կ6aj��sM��	3Nm:�]����6I%	�ʅVŃ����02��V*����u��jY/|"z�����_����X�s*JTZ)�:~`L��PՌ>��U��-(]�j��ǺaKt�R�K�A����B(��I�Nc�6?���˄V ��J`3t�.��6��d8��^�a����sϛ���@����6P|�
���6.)�JcCT6z'M������"��K�	���?RwW%[5��S����M�a�/�]J\e��=$����m/�IY<�ľ�=��!�^�#������MԺ�1V�7�WHg�4�P^�W*mT:�E���D	��<(�%���.[Q�ۆ��!�M&E��b8��q��cDI��l�6;�0@S}0AE�ވ�\]�>�ߥ�����IzFї�p��דUΟX��2Oʏ�� ��?�p�忰KX�z�Ԃm]��r,5���w8�u�����`��`s������!dS/�'y �����3x����#�Ewx� ���AA�ؖ|��YVL��o�e+G�Ɓ�X*�9̖�x�c���2��rMUS�ݍT�\���:_���z�
��!�'�)POˆ
j�MOI"�2��o��o}N@����u5ߤ%��+�*����B�l����&�5��
�@T�@�P��S�$s��c�$���~��b��������r��Z&J]-@��;�4�0��b[j�He�?���ɯ�����27֐�?��xJ��2t�5��>^�������+r�&c�d{q{/�9k4�R�� �_�5�b��8�P�X�p<<ًFB��hX����֡��ԋ�����$��%5�K�eIA)��e�Mp��B0����f�7[x;�b�\`���\�f���K�77;�2;>������^�)�&���3ѽ�6W_K*�}����$�	�[�<�7�;Q?;��gu�է
��Xi@xX�¹2�e��ɲ�Uq�L62d�,k���(�"4���"�p;5@v���z]�U��ѷl�EK��SyK�;o�M
�J|�V��Z���K|�>T��D���������[�
Ro��z4WѮ��?T�UB�
-7��V����.�ģ��qٌҵĶ1����,�TC�L�B�4�g_�d�gw;��i�z���.�	_���J	HkIB����W8"�98���$U~���j�(ie�Y��D��nfV,��MĹ1A��~Q%��fM/fys6ւ̗j���{_��*���d����0�,��t�c@�,D���s�I&d�0�|:�nX��r�\b��䠪�ĳ	~u�B�TBI��Y�)�۔�r�1�9�y�F�2-�W�6��?ۣ���`�_"�>ܐ9(�f5^��n�ʻ�3:�R)#�j:�!�F�X/u�u�PÞ��C�ڋ;��\��Nʇ��x*2�AF�Qo���U��^:pZ���)17̤�1�<��������j�?��bT�༎N�uD�0�{�ej�Ǎ�V#Q��+�󜙠+	�mQ�����*�NՔl9{	�N��|��_�[��o���1�$�9�Erh�5�gd��C�s��ZAm�q�=�6�A�'���|�Y^�r�2A��Z����j��H�|�9��?��y=���RS��Y��M��$ٗ�>4�u=��-���M�s�[U=�FM��z�˗CTE�f��׫��& -�or�`���b1��h������>��\�X�6d^��r�Q��,��RZ��L�E󖫧	�cQ�4d�z�1pۜVf�����r�	�P#F��+f����WA�X�1�y�dt`���(�����N5�/6�iɰ�Lm@����cҌz�����=`HO��r�����X%v
Kz�f#��̠�e�[��\F݉�}��pM����)�m@~��7����U�0[�G���BG��1��3��8[��]��G�27y�,-v� $AT��q>KC�����G3IQ`�}����-�����[�	&8qZdn��t펲I�!9��t,o��"�)T�/T� A�'�C
B�X,��c<�*���5��CE���o��] B�}I ٚ����Ђyw��h�>_���4�1�.��]����_h�m{	�lO8M��s�`�e��s\�ol���f�=�o�W�f7��ŽX��D�p桶�
E�����?���s	x��&$�w�Î`���
.'�����/y�Q�-�<KD~��\s�K79�E��QqP��������P�t�����q��XKá#��1�M��b���G�j��>�T^_x2��/���[���x�� �d���J`�Bn1��k*��޸5�B������I���tk�8#IPX���	Pd� V3\B�o��͐=���
��t��N��˕�'�؉(�⽒��I]Ov~�6���}0#�-=5x@�I69W��L�׶y�O����7�A$�M*�W/u�͈}3�ą����S�����I��K���|p�vb��t���P��!9��z+�lat��;�"�Fh|�V�~7UU*aG��t��S.�4�qmNc���Q��'��P:�eIu�t�x,��Q�>z5�����c��V\�j�y�yK�#ׄqՐ��>��s�?-����2|���RE����X1:�L/������m҅�w�u;��pPpו_�c+��2�+�l���#W����X�$�\ڹ���z�E �<_\��ێ-�9���� /�SԜ�g��(7K�]��+���j�r,2��xN͏^&JW�pџE�M��<ϯ�n*O��^�B3��ɜ���j�W�%�ʛ��M�Y�$�?1u%�Țv�ǔ�[Ay��i챭/R��T�a6�zm��7Y��0�(ڥ�����/�dz���	����m\����BLb��p�)�a����f���}���wJ0���"%�C�'J�2&����)�W���K�+S���҉������,���'\���gO^`�^ՠ|$���߿k_/�J��.o�D��N���y���$%��R��)�\�2Æ�d��(���ݝ��l�7�J�����8�֭团�X烆�rA�*������]P���{�i��^����="o�7�����zinq8��Q���1lh�e���EaNuB�ړ�>/�g	$	��3����O1���d�|��U9C�˩�pd���_G�q����Cc~��~�ٿ3��"p��~8����I��4|�Rh{���_l�)�K�
h�E���'�&�ԧ��)�����j���h0Zӄy�ט#�D2O��H�K��ל�ƛ;�YZ��D%�G'�?H�/s����	�<:3�,�M#q/ Cjb>r8��'� ��J�ǳ�{Q��ΰ��Ӗ b���c�=��C���̭��z�3D� E��Z7jn+�9W!�e�hw��x�4VEZ�'�D^�=�}����1{���d85.ruOf��A� �]�	�mu�c��Us��T�Ĩ����69���⦴�StSMu
��W�K?}�S1Y���q �%�ǧ}�P96�Q���ֺ�=e7����I�ׅ���
��u�8ASJ����G�L�K�/,�o7�����/ß���P�x5�nj ����8���PQ�o�;t�f��'���
�l��r-�j�K��C}
�	�h �R�X�����|K��T�Y����NC��3��
�_���+yG�DS#��IW1�z~|3ٱ+m����	��P���^��n�����6�Y9H��H��|#�O�v3}��F�&|@!]��Ry����c�A_<<���=��_��{���S�^�zGM�!����� ���[:]��yދ�� �к��g�0�J�=*.�um�����JbY�M�uZRk�e��y�,�鳑�T��K��S��(���G�T�}FY=e_!A\��xd�S��w�k{����:g�t��X*MO$`1w5�	ѵ�J��O�<z�}cҩ��q[\���UV�������ԹE��W�5*U�o�b�7ł�'��56o:>XC���M�8\}���N�bk;��c����G��U�0�HXkқ��
�mR�����=��2&� \X��d-�|���ǜ���A|�TLV�����L��N���W�~�]T��q�����d�ʈ�i�����������`�-�Z�di�1p�����,������6������{����\���t�h��E^DN�@1�N�mW�WCo����;3���^"�5T���=�֨I����Rb�X<���v����F
HԊ|yT���m���Y��[��#��<�*9~gX[K2���n5�7������[��^?�*���E�1p"��B�\2kV��ޓ�n���9
d�i��N=��6�n�b2��a��;��_��c�|��n�X���7SEx�Jׅ���t6ъ�5�.���9C�\}�7Fk�Y�~}�m���H�[$ VV9�g��o��y���$a�� u�"���B�4����]�EX(�ǉ	��u�7�=�E�ԯ��\�i8��ǈ���y�E��ï���0�AC3�dM��u�_�Vt�{d$�5��zk�
����@z0��q�٢_�G�������i�X� ����0^���C�7���:�J�"�.�BW	�0g�S �cM��W%L�M:�=w�=<�/�V�#T�A�mN�Z+|!^���*��E\�7��R�E6}�=\4�����iuL�E�UѬ�����h�Y��+}[=��>zq�n[ ��'�x�C�-�7�����-V�7�ƏMq�H��>_䭱e<�h�3�,8�Y�O>ckp�3��1fקٺ��2mc�l�����i���*9/)�x�g�C�P'$���Mrx��l�K<��?��<E�Tq����׊�J1	?�RÈyP#�����o��Xs���4�5�WV5����~%�]��
6A��y?�h��uk�.��2Q�ʤ��+���Rs�[��3F�0Y�?�8�h����㲵N��"�@q琝��u��l*�4H�v��3��^�)<Kᖜ��k㑢�:������Q���!<�2o�؝Y�@�b2F ����5^���W�}�pg��m� ��L�m��!�/(UzNHt}0����䬈�3��E���r��RT����I�k�g��%�/���c|O�\4c�/����Rj��\��U�0�~^��fx�d���/����E��d����,VC*����%-��g̏׏�*��̫n��K��ĬS�	i.�9�>��Q㔼B�=��m�Sn������_r\���}R&�L3�N+9D�a�%	�a��U�`�%16����y�ʈwP�
����w�tD=Ϳ[1�}���A���x=l8���L�K+S�LA��2����Җo��m�'9a{���a���o�
K�H�4
#Zj"��ߦ����13H ���[�^�_�%��Q*k��˯�N�9�#f�1��,���W���Cn@*����:�`��vn;R�΄s�o=ӿ@�N�
j��n���c�3�0�t�{Чz��-%A�:G����q�{�~��=m�Ge��u�n7�If����)������ޒd���v%b�T��,L�^�I*�'�^@-x7a�)�G�����J�����].[J����7׵�`P�G�F9��q/&h��A]d���AZ_�{��"�HL2�^$�_��5b�^�M[0ΝL� ٶx�wV(}�����M�5#�枱�M��m"�9�4�{�}J@�ɤH�������mA�/�E4���t���Z�db�t>��$�t�M��\m�yN��y�n�{��kX]ON	U.5�����(��f���S��W����ނvʛ ��B��Z�_�x6�ڙ�8�T�#S�-K��r�
�y���h0�����*�����3D7�(|{x1E��@y'�9�����W�ӫ�*ýR��+��]_v�i4�&>�`����z*�}�{�Z��@DU�B=_�WT��T��6--�m䵏a+���\���".����腽��+b�k]#RA�*�C�3�I�Z'��ݼ�rn����ޒ�x�Na`F#8��>�n�Ś���[�(@�D���p����F�e�̖��l�)�{�;��o����B�&le�C�������j@*��uhA�n�ߨ[V�q^�=���t��DR���_����F�;�j3:�sC�5������E[+X�@�@�S���ji	�o�s��Ag�G��HL�4��O�I������O-G�d�o���`�,�gw9csyA��^���O�Q��@֤���()�z�ɠ����HѢ�_��G�+�`M����@l~�o�}���p����]�(S���`��$
=b5uc"���zdK����+7f�c�^,(x�ln�����%�t����Ϧ�Ϳ��|��{�!���x���JV�@{2x������%�����->)b��W�f�7����L��گ��K䱔_[%���@�5l�4Q՞~k��X䟮�d���v���p��9Ťn�<c<
��(�s�Ö��&)����d� ggE���g�H?��|�z��8�i۸i�3h�����R�x SG�y��Y�r	4ܖ�E��V�>�<�ҏ���݆Xe V���7
-�R��AG	�����v=|�3W"�z^U8��A"E���°������Cy���9�D�H+t����Y�%"&��G?����#%B+��@���@�v15.�<~��z���@��
֩{Z�� =y����6����vC7?
�ݯ>@u&?��3'����N�����OC�li��W�d��Ш�\+���(��I�Z�|f��PM�7��ѹ��z5g��b����c�[xs�9={(��Vg1x]�ػ��� �BBޑ�̬ߣ�cS������I���,��H�?I����!eZ��_��dކ~#ea�E�0V�M1TKj��kYn���vYb�!���a�~X!�d�&��=�ʥC,�����,�=!9aeؕŅY%;��tѺ���$��:�H�`��s����eT;c:�0"�4�x���^8���So<˻8�Wgq2,�P !K��*���̚7�����]�+�6�u��jd��\v瘺Xd}�9��*)�~P�����t)���;2���K'qo��4b{��똻K�A�����7.�->�d=L3�p���gZ/��PE�Ww�I'�q��6���z�������a����
�Z���On.�L�8�(�(��q�T��V{^�o�uNhfX<C��j;9��us���ᖽM�e�0�>
�	
��bW�Z
aj�r�n��<�z�KGt�}o�Ǒd	`��4�%�J�s ��
�a���h�'�\F��{|�*���������yA�4��ɥr�� e��g��Oy����D���F�6�@�}K㟲4"}��2�����<��3k8�\((<&by�%���ц�!��$]��8��N
���na�DvՖؠ�h��qVp�<g�@�gԖ�Z&����b�-�H��~��>*`���9��2�#�74�*X,�*�#�5{�\T9�=��u��'NY'��o�E~W��n�'�ufP�4��K8���$��$O�М���;��F\7��vI$$0/��g�y�3ƾH~V��:PT��Lֆ}�����!4�(��T���e����8���l�d�0�z�ݏSʹ�l��7�����X��[h�����s�/z���V���� ;�V!�;%E�}e�g
��.dO�3������2�@؛���3���#/�NZM6�_��wIȜ�.�U4dtGOmA�H�돑(%2׮��L3'jN����h���m+�P�/K}LE�����wX?�R�/�P�>�7━����-n�S���-�oD
�ĞJ�鯴ѽ�?����\���;����[�9��!z�0Tg�v���x�ڝU #W�S/ގ?4OkN�f3���B:o��Rst�'Z��� �!���?�,����j�]�s 2l�����+u%��K�t�.��"�O�����+ը�_a��;����{�����j���t1��٪���5cfq1��,p,i� ����h
����U@�)o�� �^؄����͓F�Aq�k{t6�_�jSWV���3�K���� ��.�*M�E �ǡFGJ`�£�z`�O.�!`�-r
���~\�u�Թ�Z�,�6�؛nv���/={y{�j����[��N�2������S����Vsg�����j%i����Չ��m��Of�})Sf��>���"�
��,�l����E$\B��(ۣ�8��&K*ܛ�����a��*�f��b���]�so��Ii�Ȕ���>���[��I� w��G��5$��Kd�,pXL�K�����1���O�@b2��7p�VH�`Uz<��zB	j#��A�q��Ѣ��?YO�OO@{�|�)V6k/ܯvWۧ3YXBKwQzK�s�T��<���ҶB5H����&��q��#���-&��7ɖ"��H���<�	�~ڮ@��<�Xš�M`���0c�� o5Y9�i)�rD��~FyG��<81d㵄�ߋ�i�L��D�7g~�4�$��(w��Lᚂ`�H�u*�~���EQ:�"���휆��_�Z.&�X�I`J|1^�j����S-����bkv�(o��6E�F݂��)��D��+o����=2].���G���d���0Y	�)7+��:���R��q[Y��#�(�r�V&n�[N��N�4J��%��ի{�_GR������6΂���3"���m�Ty�$4���Q��!��2X��9�H��:&�	����qu;�1���%:�w��X�91*Yw �(��i�B��y�t�}�wXrV����������Y��ά���"�'��s\m!Nw�y���=qr��h=v#5v�؅���_�{J\���@� Q�}4%�I��:�W9�-�P5��M.������~�S_Dd�\�"�oNv��'GO	J<�}(��}p�r��̪$CK���^N:���oG�J���lݷ�i����Z�b�X3DNTq�꽔�v�����IŘ���X�a��JV��%�A���U��ƐU$���!,��c�Q��g�M��v����()��f�&����4t-`�N�Gm��S2Y|'�%Qwx�s�]���MBh�5�̊�`y:��Ld�a�� rB�d=p�J��.i���3��0�E��>����H�D��r�5��B��f�P	[`K�U��7��C�ĊE��}V�h7�H�����	8��Ɇ��W��:���]b��& )u�S@��{q�����;D[��.!�;D���HB|1�M��vN��
����2\�>>`��)	o�J�!2�Q�R/G.:sf��+i���Ƿ�1.�r��~Ѳ"��>	��)�z����7�-�n�︆N\
��.����qmX"yQY�ނ�|��Mk�g s;�Ғ��h��H�i&[
Og�J:M��@:��V�~�TD�|#��vLk���fV���˗�˒*р������"/)�Fy�w2�z� �)hj�MӺd�v�r�K�J+�����0a�BO:0z���1���B����b�\-Wi��r͎Mb�#ߦu�!B)�>�gJD�z�<6���Z�/L"�l$2M���R���9i�?��c �t/���6n$�Nj��5 +����a+r����j�#��G��8\,^�]/m��P��0����&�sQ=�b��L���R���c����0*��k�b��@)C�ͽ������'�@Q����%
p�J�k5]-+��D�wa�|�e~m�D$��|�DTЫ��-�V�v컏�S���-$�T�K�J����R��Өğ�wI�bxՙv
����J��DP�P�U$=-{/~�Jw=�1)i�
�GD�h�N��\_�R�i�*)�b���S*/��uX�1u���f*�9�-�,
/CDؿs�?2%�Xˁ�M�=��[�1��˦<���ok�:�噘˗q���z����e��˃����y�������s�RH����mI�.��g�#J{�# �zN�@8dW�� -��tx�k�� O�ف�@��lG�廦�ǟ�#��C��5�Kl�!b��%}t�F�\>m�s[�{�����>�O>�Y�.�Y��Y�=��-��Lѻ��my�GM����RF4���?����c�}Qq���TC�b*�1Ku�����dM[s��yb��01{������m(�,�,���-�J�4�����!��/�����Lި>ܶU�r�-�3%�6�Ǹ:0�^� ڞ�����������ZW-W���(NPj�ܐm�;^8*�} ��b�_�'se���`E����ʜ���fvY�m��*%��K�A=]�^�O>��u9��$�W�{&J�[n��xг��R��ک�KZ���޹1E� �^��*6JY����U��C�{���)�ԋ�C��a�O�}�� �,�
Ћ���	����и�MD@��<���a�u���LT�&�0���3�, ��*7�ّ���9}Pְ�ђ$���P'Ui�y1̓B�L@��z�uH
S���Ӻ�q���D���.��q����U�g![�nzG|j�4��;a�&}fB�&�\k9l{� ΰKP�q�`:gm�R��d�?�r�
oO�ʅh�l��t�:E���n<YL*3�>�:z�t;��X�u$����C�!-�����.g�1c'�[���Տ�:9VCD9}t�7�3���{�OO��A���?�S��E7���a"6Z�U����}<4�ԸW��4G��
����w�)t��:x�s�J:7�*Ճ>
�VZ{�jv��;���b�I������1Z�CH� ��y�X��^upT��C��Kp���h�wTS=�d��  ����@�5g�]����FJ挅���lS��BJb-�v*��@���x��ky����L5X�"��U��ɫN���Iv� $���)�/��3k񩫒�y��M���x]�X�����N�$��4��ŋK�B��uKa��Qif���IH�|�@������svr)<�X;��z�Ǹ�q��[>�
��,�����(\%���#5O*\�^h.�\��i�x��z���qfe��#G��@�}�5["�ڬ�����)p��D/�t��<�ܖK+�t�p:��$��b��{����K�"���#��Q��Φx0W$[�20[׸��W���c-��ǃ����io]��`	}�Z�.đ���R�z����;ʂo�~�kB�x=d�u�DO� ��!�fU�ќ��13�%���O�)U�	�����#զ�ܶ���^�R<�����P�����V�=�5�s�ɱ�h��_�Md����*r������kkP��Q�A{�G��ʌ~b�A���+� D��|,��)q J;��A}V|Dn)Zɼ��AO�d�.��k��-t��ypR}ns�w
r�R#yT,�";�O sβ�yШR��5ko����[^㸵�ڪia�V�Ⲻ�y:����i|
��@���G�׾r��߯?�bz�?;Y"������W�02�U���'�:��g)�SA���G�����wmW-ߍ r)l����ϧ��}펳�׮2�0�ۇ8s�^A���pp��D��,K�Aݭ�)��d.
���;�,��
�W@���i�%�g���5q�9ZWU�U��X�Ao0�Ԙ�ÃO��N��Y���/0Rp����f����A�ׇ��Q�/�����zQ{a%�M�X#�[s�N�zO��2��QÐf����:��o���oe��Ob�җ:��z��²��;��<(p3Ic�]��(��cq��+�D�h�
�1ǩ��)��C�_P{��������IL�Y�^�� ��\=Zh�����y�*����>Y���3|����s-Լ&}���/���6g�ԇ�a'5ks��p坅#�G�8��o�|��k�TvY���Qp ƕ�پ�izI�0�Ș��u�M�2z�6�ýt�A��U�x��(�q�2�T�ߧje��7�s��L�G	��>��@MB!z��P�:�aTC�������f���(�Y�w�R�2?o��,�V=0j~����Aٻ��&�̴.<����9�v���[��[�}pn��|��՚�]]#��AE@&�̧��}�)�R��wle ��z����M ���Ϛ�RI{�#-���8�I���v����̂��Ӏ~~�-�U$0qO.r��uUG�o&��skײ��&�C{ ���Z�7�W'�i����)%�����i���
�1Nc�K뗺��3^!��u�l��5ׁ�����J<�	9l�]����KG!��ά�1�o�&[��py��?�e���x�C�t-��a�������`u�i*k�m=g�*I�s� ����E[u<(�6z�'y�/���Q�aN[���J�%�!���k����Ys�ϲ:i2P:�Ϙ�Y��&��f���ѽ�&�q��gG�����wiز�۵Gfr4�a��r��J򙙰�nNYjWv���rYMo/�a��}�J/{��]��xCds*��.�6�:�򆚠Q�-��6Ȫ�����
�㍾����J�xabW�4I�W��ZǶ�׮/��V'��lJ���C)X�En!A����ָ��Q�_*��ّ�Z�Z���Um6�@���0]�w))z�5aT��,M/�X� �v�8H�4g�8@������"]7�ԏ�_���dK `w[b�S̹�^���ߴ�0`'y�F�6�'��NNjx���Ѹ�_yJ�=f�O� *1Z}jk�n#�j�٫	���ѾY�R ԕ�l����|���a���t�*�2&�9�>ҷ@x�'�:�<�'9��}����T�9Gp�x����\���Z=F�dU��!7����#����8A�92^��!�i
���TݨZE_���y���t;�MV�(�w�^�2�ߝ���B��>t�ǩ'��&���I�<�ѡ�E��G@���d�1�TGS
�<T��^�}S \�w��f����7�3��i��C�#����EB���e��j�hT��@�ۜՕ��6�&�ɼ�̓��`;c�e�kB+�GA�$Lȑ��֜j�����fl� �
��I,����C�Fq�x�LB�t��/�Op>+h��Ύ�'��IĲ�?�9!mY�����҂J���6��H�O��S�0�c��+U���ɲ��	�Ag�C�(�%:��I���r�i�b>�	z�b.�H�v�UX�Rxp\���z���k�X�?xw��Q������T���w�������x�濜�AB�27��|Z���ն"�g�+����w��|�nBV��A{]�Ʊ���Z��+؄Su��eŅ�N���v�N�
��X�\�k/�E�I���M�Gܨ
rO�#�}���x���xRbC�8��(�� O�|��x|.���@	d2V�7��ݒ�al��o�;����*�,��ɒ��e�r��m�[����Yִg��Ù��rC��p���q�R�{��C*�F���θp�Ǔb�Y�!P��)E\h���"wgJ��$�������c�,vV'#L�(��N*>�kS���j�p� 3
���DX��'��qC�%L�����W��n��e�7��6M�^����������@?m��[t���"Nvr�X��ޠCӟ������Q�YN8s��@����!�`w�)r��=@]E��S�F>�1���F�l�R �?���e+�Bl�۞VwB~K���Z�����$��*��u6�z6�|��F@��$*}ӱ�~�S<����?�f/Hǜߵ����
(4X�_}@�����t�]�R�f�
���?
���6��-VY}As��`��j*{��a�Ϋ�!��U�7�Fԯ��<�ܥ��5�Bi_\TT[�Z�����F9�=y,O屽���| �烀C��4��?h�U�>/�Q�p��Nt����"M�|7ٷ����2g�h�-��?�jl����/<s���k�E.�V6-��!���p�jm!�Q#��*�VZ��լ0J�f=ڏ�
$�����9����#����Λ/���ዑM�S��k1d�m��Y��ƣ��)b���ۭ�o�����'i(�ř�!1�P�����^ S���G���f�`fm�1����������'�0c�� Rҥ���;�E��*d�{�)Y����q8���psuV��sh���V��[�驸���(��{x$�A��4�rL���'2���DҘQ��u۷�6�$2�)�6������ ���V@�����i�{��ȏ�}�G���}�{'����2���CT�/D�����q���Fz���b�yK��=�,�/���N�m����Z�)����'�"o��V��I�O�����u(bG�B��n5<L��3�TnC�4#��D��L�\� ���hjJ�	��!�{�L�Vy����<g���Z �
��鹸zI)��T+�w���r/Q��"��0�.v�H�7�>3<�Qq��g�*L������d���H�;�br9��B�|a+BN�Olt�U�����^y9�ᲅ��1�Y� ��x����8S�~��"n�!�E%��Cqi�(pk&_\�=�#W�6	u��z��i%u�r��0����DH���b��M�����TȀ�ҙjK�dw�r�5����>��0Ӛ�8��g���Xg^%77�S�����][�kګp�u������cq&ya�I��_��q{��o.�}�2� ��*���@B�D��y�W���`����aa���@t�{�1�&��x<-~[�������ױ�A�V��p�ĸFhtvջ�H�B�<�HY�������/�DEL)Q�-�<@6��#�"����jr�����o�6'��r�BN��$>�]��R��X�H�@1?��]�l?��_K)���8�qp��8G>��y�����r��hģ���bѕQ��7e����,؞J;�>�׀t��٬>�b�8o�x�Z.��28߮t��a�$!�6z3J|��9&�����O ��,�"z�HSu�[�i����ؗH0YZ}���X���"�!��� ��ϴ�/�����u$=���'(������nW�7�@^Σh�o��"呡���Tޚ�p������z�L[��ˋzU(�}}Sf�!�5���%8|˒i"a�KAz�%�}j�0.�j��H�W��>�hꅲ;��f1p�YX�:�����B�� E>��#2m�0j��u_��_?�:b�� w7�=Ђ�7���j�H�0�-S	ly�n�q�9���.}�S&�>8�.҆6	����rb;yuP�C�����:{�UP��Hbg}�jx��<�4Ǎ�68[-�b !�Ο0h��G
KU��١lA���І�j�Eŕ�Vtq�[Z��t�G��!�U4F|)ވ/vγ�W=ti�d�]�^:�K\Q�Σ+��ِ�j�,��Q���Z�y��}U�[���?VZT���N��J�CŁ��k�)6��*������2��LA+P���-�p*�̛\�׉u������ǃ pe�wQ��+��Aۥ�3窞�]���Կ�nے�~2����9��H��(�g��>δ�64�����n�FuF�*����}��J�^\U����~�Y��`8�K4ԖwR�5�6�g��a�F����L�A%^zՍPl�N#T�FZ���&#K���5Ԋ5�}3>-���$���Ze��b��y���U�]�i~�Fg��bl|E�YMb#��R<��&)\�>apr�����i�CMp��V���1#�Ϫaxy�VrDψ��xbc��D�ʠ����ZjN8n�AfC�q�9���۵���WR-MF��I�����"�#E����O��qPKl�=ˤ�t�&�c%fg{[���+�`O�ƣ>8�$��B�[{�l��A6�Q=�"ND����<�uչJI|Gs�]��(��\J�m��m{i�M���	��Q�3�*��ƹ�+�t?�]ʰ�����Z��D|����K!:�˱c<���&�LO��J�!��kG�1^�H9<�n>�}�i񧱉;��u�-�Q;�<�^��^�△��n; �fH�A��Uc|n۹��G�_�D����$���7�MY�����Nq�Lg0��-���"���M!�l����������4�}%�}"�����`&/�?_h�Yd��|fu�m��b�����QYP��H:��\�jԵW\Y�\c%��.����|�}NCϒ:�ٞBYG������׷��Ʌh�/�� ��BF���cq^yD�ͅ�ڣ @a,���t�"F5��{��䏽��.(�	��4���j�ڳ�;ӊ�Zh.e����V��߼��.o�}[�6���������%ܫ���}`lȧ�`��Za��
l��oҎ����`���/u�$��Blay�f�`��A3��TO�v����&����V���KZ�����f�1������<�V}c3 �������j�T�0�4''uu��C��& ����K�L������h����0Kߛ��V�*���M��{�Kq��R��t�)�n>���S&�S\�OK �����,��V+�� (∛�$�ū�dX����h���M8��ga6r�vt�f?X��.ab#O9Ѥ�jvx��1z�B�:X �	2{�2�	�8��TT(��!�:����p{J�4�sb�.b�A�N��*�6a���%M(�W �̮�F�;�+�q��`��Ue�)��!�l}��P�]\��4�����H�f5��vB�p�n�hi�Us�&�1���S�����ƍ��s³���]�~躮m�m4�^Cj&��!}�2���I�>ӽe\��&{ǖYw'{*=�"��
�D���ነ��ȫgj~�p�#3�>�eG�����r�"��ǁP�!2hy�n�۔-k���'e7ԅ2�%9���}�'q����ģ�K&���J�\��M�0dGE��i+�	�����ҥwm'/����s���K��	��$ifˢDܺ4Jr?ڒ��e?���~�P�[K4!,�\P�=:xE3ֽt�U��; M� �ot��K�M���&��豿��5Ό'>���C8���觃�@���+�_�	ՙ�J�i4��OvN�m�.,��<Y?)�ד�]#���e2��`,��"��2'�{��0_�e�<��L���<��K��4� �^��=e�~o�H�9p�����m8�fU�L�5ȿ�� �ֲ��2���"�Ł��]D�X���N�n�i��A����� ��%%D�Fe�tUH	�O!��!�u�6w?���Z�#v���1\�Lk��Iq=�G��}3�^���^������0�dR.���9���5�D�t����0���#�5`f���!x%��(�R~]<Z\��d�ƾ[x���ܽI�W�@3F�g�ƒ���ڠeV�'�
B��Ǟ���q��+oiu�d��ѥ���=jD��+ |N�-o7������}	�̥݉C �B�P0d�Ec\pӭ���4��9;(��Sir��K�^g�~��~��Q�I��Y.�Z#���9bd�7[�\�K�,!�D1M��`�h�$"`cs�]�(�"߉��Y�V��Ó71+O>Q1��P�'��L�f�s�^����F���3�_�S2�[���}oXኻx�|�11�GG��XW./��ɮ����88�궔)7?��~
V�%;!��u^G������R����u��@>hA��#��c�� 3Jg�e(� ,p�.N�"�P��x���%�T?gFUç<�_#�I�#�������a��uf�dE�I̊CV��M�2G ��sM��叀�ħ^��Ǻ�ᤉC����*y�ڊ���PW��������#R��ӭ͚�[���V��	��*	��"���S���On��<�&��<٭:��Q䈯���Z�vw�r�U�	�(&��jۃ�Z.&�7#�(� �Y֚U`��{�r�i���[��n�+2h��T�_b�&��6/&�c�+)&u[�w�����u�\��g�<��m��8��dm$)	,\;��S�K�%����N]`��d!�!�%mu����̈PBm��n��'!��� �3��!��}2!v�<DJM���hQpn�����VEK�n�ШWq?��r3���7I�B������d.�/c��G��i�g��[<�\OZ�M�;���	�G�79-ⲣ���� m-}�[�7�|�����Rh���F\����$v����%^���3�P����:1(��i��*p��k8�u���H��+6������n��s��|��I�;�«L�Sݘ��Af�_e�`�3~Mɵ ��>9{C�	����N��ϱ{1ڴ���d�E��8�����̧�?���~��<�HVk����:DE� ��I/`�(�n"y�a։���%#�*�?��������P~��}!J*%����]����LV�2����KiG'�h�Mb,��6��e���ۘD��4�
�AR�� {!��rj�'��,leu��H��Cr}}��v1W���Z�p3�@���Sw�o��%#��ca�����N��3kV�`��q�4ô�E��������v�½JpZ��9
<���yo	���6*�3�蚰��s�fୣ:�O�M=��snn�s�J�w�'m�:���jl�����*f����1���O��6��%��8`r�4��G�-��{�ZDp@��hy���}�5�"Y2�9�l^�;M�y#����qz`֐ �k4Ծ�K�e_)�4��z�E��H�o����CIB�?`1�s�w;�p"�@Ķ��;���mf2E����6�if�=͌j
..�
���;���\gF^��oj�6���2���5�
`��t�E��T���M����hrB��1�k��"3Gғq�^m-q'7[���{��Q��TFd��-;E~��o���^�E���iy�S�Z�!6r:�@QF��d��(<q�q}��$�>�DN��3"zK�e��,#���퉆�b�#t.4�G��P�����s�\$@�`ҵ���@�؉���x�ޛ��oGЅ$~�:�И[8�u����Sk��?�2p�.�����|�j�*o�����mR��E���7�ۣ�����J�j�"��/`�<_p�[����m��;J���m�W��I�m������C&��{�S�T��az�}^Pg������W_�>����'����"��E��R�El�V���ny5-+ Au*] DN���8��T6��=uw9�ܘ	��
��n�Tn�?8E�C�(� �g!�tA�7$���6��*�h��0�K�a1�H�.7h��0r�9�D�Ti�g���t�k�� 
�||rϑ���:V����/EtTID�th�XO���4k�-�?�����C��2��ި�+���(�Čc���t�6)	DO���h���tї�s����3ZI[�֙��
5�-\	����O�2�F���f}ؐT���/Q��}�޻!�JܴȉSg�\����_E���b�`���Ok*Z%�{��?~�]�3��7nD ��~�>E;}j&$1�V�9����fYζ��Q
��V�@��0����|Q��~^�)����t������B����fE�pP!�U�ye�՘{_n�o���&�y�MQ՚hc�����*^q�'%���,HM��\c۲�S��S�Zc�0�z>�~�9E��T�}������h �UF����EV1�6V�O�i4���;Y�%��T������"k'z�L����
��>�<�k�ԑ%����a�R�E
B�ysI汹�� !N2���m�U����d���*p����� +8s(�z4� ���("8m.���.�9��&��{��\�ŏ�|���B��qG/u�̫3F��H�m���SuL�0���j~�z��+2:Jh� �(8�PZ oל�O�y����8o<{����d��f�@��ū�|�)q�cr �i��- ����qW��5����ÄQ�4[A�?�N�444Zk#��䰟#��B�>rN�q�Æ��rH��j�YX���Zd�^q�V��	�j{k@N��d�1E7�F0���sUI��n-)zF�݇������8A�RѡB����)a���yVC;:߽�c��!|��7��q��4�w@(��}w��Tԅ��Y諸��H-Bg]�vZ�	��k�C��4��O�-f�u����F��P��R�]��F���a�M��p(8�ۮTj���R�=��Y�צ)*�?�X��x�ڥDk/�T. ��K֋(\Q�B�'�Y�,�G�$%��|~o
�ʤ`y7C�����G3��r�7at�>K���@ۨr�:?�(�����)�ؕ�r�� �/��i�Sm�F@�,�r���$;����Ue�#i��]pz;������W/��*s�~@I'�O�i����X��;E[MZ#��K�����b5��-{��V'��EPA_��RU�E�Rt���Z�'�]��~B�չ���gd7)�l_Ԛ*�v~�p�T>���٤��m���)���Q���.�tL[�8��pO����"��u����a΅yE���1�"���C��x�4�Kv��z޾26ھ>6k5�.��>�q�;� n4:c� �@�ת�#�M-y�	��èXRvF7��I��!W�=���U�~b�SV�Q�u�� �<����Q��]w('��8):�3bo#V�7�� �#Ւy�ۺ�)T��h^;�]�<�K�#���
c1���0Gĩ�;aH�~��6�l�bMIo~�%^�0��}�(�N�	�KdY����Bn!!߆�2�=Ґ���B���T�� Њ`-�}1SP^�&nh1���O0��?�L�I�ENd���8�p�@���l�p����2|$_,)�j, ,���mD���!��Q#z���Ny��	)�83���K+?��׵�mρU���`)i����/<}�������z�F�Sз�J����̪/�e>!�.��N!��dB�T3�H���X|�pU�P>�:��g���&�4���`�� ��V�8���r��;	s�d�{��o�K	E����E�W�9�]Vʹ��F��L��`�cѠUY� '/�EV�$�K�P��Po������UMR"/q���:A�o�Pc�3�5.!��n�ه2ߴv����~&�����W����+�̍m<��p�K�S�L?��<N��\@k���-p�����r\�墶	9�"�4I���W#@��7hK͘�P�%��>���걓^>���̌#�4ox��˛LbO�1�}��P�� ć
����E��9X���hP�ƪI�d|���߱EA�煊�������<S�f���h`b("�(���o�WTG��s+_Ǔ�+I��8j�m�
,p�a�+�Dyx-L�*�W�����2�h�0cL��m�i�%i���cB�f/�r7_� ]����\�q9�D�Y:<��l~+lG�	�ih��'m�p���Y#�5��=c� btj��߂�>�)Xy������7Kt��Z����Zʋ��@�4t��˼{�@J8@t�a�Y]Cm>"����U�	�0M��|��֢�-��]/���_���t�pQ�̔���/ԫ?�򌕪h��f���c�۵���\�7, �Vg槐�}
D�&ÃiG�6���T��}��/Frxu�o�J�o�i �3Hf<�±�Mwr
6�TR6�O�&/&C�8�����Y�l���I��x!uS�{��@r�d�%�W
��	A�w���%� R�1�J:q�EA��9��y�#�<C�ѵ��>� я�᢬�5���;���Mi.$@;�,��6�ɹÇB�:B8Y���7�b
B
�]4��^֎'��jDc�ӐW2�㈱|e�~��q� � a��W��E>�P��˷��\����0�Q>�H6�g�=��*�J�?Y$G��qvyj�[^W"�8,y�(�q˔�˼4�#�N%+oh��<1�u�Ohݧ���}d,cʤQ4ϣ
(э��ɑ;~,��N|������!���x�Ot]l����FX�}�([K���L�'y��Ԍ/����r!��a�}�0ԟĺ1G��g���v�g���<��*�t�<bW��`5G:oRրE�f+�	�T���e�*���c ���������� ܑ
��.6ua�%B��O7�A�"���d����}�D�>���\�Jh���^�����2*,x��F=s<O�`DC�.���dQ�e2�7�]
���Z�����2���۽V��6���xX�v4+y�g!ƽ9�!Jsc��;��T���(�C(π��|��s���kT:��y� ���j�c/�ƞ�
�;��q� ��:9�f �������Z
�o���
�b�[r��3�b�,Ӻ2Q�9�jݘ�~&އ��[ס�ى�)�d��fm��R�;��^�U��n%�m�yODq��`�bܨ�\g&W�Î���%��	��T�4*w=�0T$�f�Ag�]]~�ga7���\�'
F�U!T��'�/m��مx�o���M�[�Uo�/�mu���Հ�庚^�|\S|N�p����u?I�E����TׅF�"��Ԑ).�ı���v͉���<{�87��1a���ل�cUS�H���
�+��r;g��lϤ�%��jclS�:�B��������0z0u���x,~EC��yJ�:�<����M^��]쩵 �p>���/p����WW7��a���yS?��U���b��O�tMsa
�훯ԵG��#_}]�
�y�j��H�i��j����C�KBN�j~q���,V��.��|v�b��T�`E����ƱN�{B�`����Z���*#v݀����<��^��R��.ä4]`	��>��\�w���j����h��.@�;YQ�A#�q�Kbm�>�X�=��`��=&����N�U_?�	�g�t$�e7]#�)vyÖBB��m ���]�6xz�bksX�d"e���T��4B����e��R�yy1a�Z�|Dz�Z��t0ܟ�¤�}����s�S��xy���.㗪��a���E��g��o1��u��2} 
~C<.Ϸb%��`���� ]���[��$�~R$��X@��ytC�t��1��CASR{h�����Ls��l��1�h^UR[<�>�
�~�$*��S�tUB�IKC6f���'�A��>-*y �!���DIA�=�*�Q+�iB�e�za��)ʈ�}��i>��ˎ�r�i_��?�ZB���Y���L�T�?گ2k)��qh��,��%n�T���8�3��x���Gb4�sר�.�Dx�YҮ7P?=�D�y!�@�R�:+�h��q�da��}�u\I�1��l�`q����N*w>,F��^(-9(��x@��c@,x�ҙ��˜��!���]rzIFT\��˵-�LG�_��{��ʮ{N ���GP�Kl2�R�Gaa�n��sb ���^�P��^vJ҈濋�@���B�SЕvMb��08�������F��<�M͌�(� �R��h��h��c�	�e)����!��=�C�i�E��1ȹe8�U���(\@��,ڇ�pl�ڄJډ�?�:�毛����>��'UhF���l����
����
Y��)�'�~�(�q��
��B	r������q���<d�e������4��xo���޵U\r���7�M�9.`>W7��Dc��|yϋ��R�,���JBN;����@�!ط���܁ĐҁB=\V���������JWn:�6Q!�!��`bϽA�|�.bҋzw��6�NL�֥F/��s�ң%����T�7�L��BgЋ2�J&�#l=:�V��/���2����g���t���ʉ�KXG��e9iw|ʚ�d�$~^f�\�\'źпt�Q/�k�X�1zʖ��+���#�8k���1n����{����ҍM�8x��Y��8�vx��ng%7�t�= �^�1^��r�\���1鈲�%�Kׅ��)���km�u���S��)]��2��/�ػ��X��9*��<~�*�#����G�����ѭ�GvG&jh�ǳps���Md�L��'g8��c��݆�RGdU�8�˥�E����y��v�x�F���������%�j�c��{��8x"d=RܤN1us����a>t�Zn߽&��Φ�"Y��7�t:J@R*�r�|��9ZH�����z"`��]:����]���RF)!���g̾h�Ǖ{�� ��]�_��di��fL��ט���aG&	�B)��E���y|y�ɾi����_s���ٲ
~b�����'�P�(c!�ܨ�����-������&����_�����-'c'�b��MU��轠�->����pG�2�~��1c��e���^�<W�w�m�ce|@[/�d,࿞K>�7���T͚�.Ī��H�Y�c��Q��]����:�,�\�z��O`���U|���{&<�ilALԼ:�Ϣ7�\��v[�鿻����C����E���J��Ԙ����*�a�V���j��R���v��s�~wf��I"gmRV} w
!�D���}랤C$W���HK&8��(n��=�FaC��Y>\�ax����y0�� ؅$+Ĕ�.TH#��4����"�s/KӸ������]吧��������A_�kS�M>����V<;}��e�e KE�^�gX\��+����E��0�j}���V�h���J���h
�|Xq���v�+�� ���R�R�j���>��?��K|��#$�|���RY'�3Fn�zQwQ���Wl�U��E��5��aQ+}��L C��3O�~|r��Y9[����'
8P!T���q�]p�R�؛1�[�.r�H��H__��߲(���%�s���#���"��\>����iB�2����x���f8<���Y���-[yU�ڪ��h�8���Y�ѳ��� �ҝ�<@~ڇ%�HK����)��̥Lˠuym��{��� 'e}`4TҸ���D��I;���40L�L2����. Zy����A @��H�5�~@�Vq�eФ�8W.H�E�� M+�w)���h���Z�n)��4��kMu2*�3H>ު� �l⃪�H0����0�j��xɂ� of�R8 ���(\����1+���8<�<C����a���y�*��^�.�o�z��sep�Lb8���?�A��w<��ࠇ�2b^o%���2xH�K�qo�s�E�ջE�v1?U�!��$���񂫠�-Q ������0d�ؙ��1�)v���w�a?){K� zu1������I%u�tk`�+��t�� b�S6���0��H�#�Q��s�+ӻX��}������ E��va�S����x�ɚe������al�k`cm�a�Dk���1�>@�>i�8�J���S��2��|�Q�п��&�����B�����@,��Dd��n���!eZM�J�S��ҎZjZ��FY��+;��*��!VC����J~������`����K�� ��Q�ٴ��E>G��ɗ��h=�:�	z���G��ب�Օ #$4�����jRi�_,T���o�,���}���PĘ	=��Z��pB�	%��b�q�+W���{�P���<$�b���ޅt�QY��-$U�O��Gثb���j��x��xسk��>l���Oo���1�۹i���M���?t��'�@�R��Y�;�h����l��ü�/���(Gt�W�9G�������̸:���f#���B�!>�a ����P��֊��tH�sh�Kq q������+u=VP�{P�%�Rh&7s��B<<�݅*���w �ӧJ�����'�R�3��gO�)*?��|B	��}�^��H��P�п��>G�����i'�j�s�?wz���#,3�$'hz�IЧ̨ 3�_�kk�����g�3��x,C٘8P�(佈�ZJR,���̄��f�f�Q3����Tz�=o��R��r�h���a�p�,�����\�Ỷ-���sB���[&rs�&�@���d?���1<��%7Qb�a`�@��,WvEU��(��P
ճS�1�7]J|S[(�#A�Z�)��]�����+	��t�j��}�><˨�n��T�Ԏ��yx�$	�gI��0R�}��:�'Qxl�e�'a3b@3�w�,7�L�R�_�}�k�SK?}x"5��>�;����Ќ��L�#�?ONmG�?���,���(:���4�%�߫*�6w@	UQN�w����{���[R���Dm�4�[�9��$�0&��Gmf�ѓ*9��>������k ����ԄN��Zmj�Eg�3��4��6w��
u�e�쬡�t	�,��#�{4��I� h��Џyf(.3.�rx\à,����5�{A���v�J�b����5^6+UA�W�&<p3|��Ix��Ћ�� S�J���IT�;���HQ�}ne���n= �B"��^�3}�P7`2��D_o�4_��#A�ΣJ�)8#5�,\��+N��T�m��7��V�Q�L���Vk��7>�����p���+@\�dϝܾ�|�*Z�=��oL)r'�Ѯ�+�e��x.# �F���+��w��|m�B�!g~�r�p8����F[�ߴ0_�@Am����e�30�5y܉<����=8[��
+�����^�(0��q9]�{�w��}�k��&^A�o��������7/�؞t�<ǀ'e�Ava��^�������2i[(�b��1�;&a�j�p8�1�"�ޘ��ٽ��QS��'��K�'�~�8|�#m�,i�Ur�Z%��Kgb�@~�8���#8kt�
�D]��qj���S��� ���vTN{����v���<�6|N�,��	[��성D�<�YS;9�n_.yr�\��l�5�r��6G�!@���J�$�������{l;Q����_i[�ah��� s�9��pź^��L�?d�ה�0u ��k�S�Uv;��ʨ_QZ�Xfe�PF�!�ڨXr3�Ԩ \��e�ȟ"�+�������	�
wb�1�� �Â�s-*c�ԣ��`Eɳǥ�@��l�!e��Y������܊HL,䚨r�dI҅˯���>���"�s:���~��K�E�Vb���<u*�Lii(�%�؊�>T�5�$l�f�T���z䦚O�0L,]�f!/_�XԻN�t�	�˂�湀ۓ���t�\-a�s�Z|�-��}J���$�h�1)h"��kr��C�l=��)�L�?��3̵�3!/�s���
_MAȵ���|���]�X�ƌ��e�v�Z�I��!��F5����?8�J����H՛�������ii���ݎ�^k]њ����i�,N3�_*�\�m�A
���ЇJ�cG��x��ۄ8j1����=Jd��%�.�������X?R��Ob���ç0FT�`0�A)?s}�
n�~҃��"�֕���+eŞ��;	�mS;�F�Z�g��L� �=��v�?HSG�	Zi!��7m�%J���>4����k؈�@2B䏿%�D$"�_�)��c!uj(���ۛQ:���y�eT� �,,[3`�9��eeV*�0���z�����E)���T#4-�geǃY�6�梥�'�%ŻbNZ�F���y�UEآ���ϰ��>����7�(�R��e��pc���얭��5�b��:�y������u��Q�N��d��~�|���a�띋J��.��Ϻ�huv�HX��ǲ	��������!�f��V�7��}>XF�E��d�"��c�/Ab�TF�D�GOi(�K�w3�^��j�C�k�L3/R$1;�gubt��$�J/���k\N�x���8T�sh2eE#6�풒���Fׁr�bZ�E!��Z3l�2��	�C���;h�:A���ݒ|��E���D��Pc�y+�CM��&ܭZQ�Z�n�`�I�D�lk_��iH�W?���e�4�&Ԁ�PmT$K��g��#����n��օ\%ݓYvcۯF4Y�U�P3�<�7��_�}�9:���Lѹ��e��W
�V���D'��L��ˊ���!�cf��.~+��#�2������ki=za����U�����lt��޽pň>;��\P,�c��J�U�\��g�4W�k�!Ic��$+3�"=�k�nw��=B���������<���q������@6�d��#�y��	�����I��)�P<�ӕj-R$ӨqH��(p�$�ȟ�X˵t����S�r��C�m��m������y��
HGhr#���9\И�~����P�ba�A{.�ϡ	h��0������Sߵ���B�\@U�ч߿D9C����෌X�gEB�������) ���&�CcFoM�7����*�Y��*�9�?5��=+l�c�v���߀��]���:x��1Ëe�������)�ߥ������/Lq8��:ˌ�+�x8�_��e�S�/6�Q��{Ϋo��ۆ�9�����y���-��Z�E7�8�����(d��&��V<��x���P����)�,/WU�hϟ�m�F�N+�����Vj�]XDLOq�nڳy����#��3ܻ(�{���	'�2*���{4����� �WՐ��i%Ǽdtv9����eF�qa��������wL\�{L��.�V��ީ%���8���]����9��.�	f�ٞ�v�L��V�>��Ѹ�	"�2�Uh�KK����A]���ŏ�A0���!�{�l��B��N��"z����`ك�y:n�β�j'�2��I߶����w+{�5��؇HX� e%���	�8� u�tԄqy�#M	�dIr*ó�-�
����9<<9mk�=/���ZK�
�9�s��#,�#��p�jG ��įV�X� ���;(�	�5�t�w}�ZT�Q|��'pmJjaJ��tC7G{L�e�U+����
֫B���u����̞ߏ9𛶪�cZ)lI�CL��r�ے3�46�� ��<z���zG8RH��"��1u�F%o'UW�5��:5�#�XC�Ls"?��^�ifIi�7�� ��~Y�f'j^��׼A�=t�*C�y��kg�v�A���z!ܲ�	j�~�&>�^pPl��g�����]�1����ؕ~��0�n���ؐ_K�pXӑqq��:"�\�Q�D��w��sTT���L���z��z��=�L�&�U6��8x-��L������h�%�,�S�Ɗ����g)#�澬�(=�YF�W;U��'�2Ww�8�d'����g�S��R~��_�|�a~'��j�l�V] �j9��2s]�?W���}�*w�T��]�R�)O�bWf�[=�x��PvH\	�+7�k�!J��[�a����* ,�z`uX��o����ݚH�|7e0�ԓ��y��S93fpw��G���8��A�7^`�( �����B�����n��>d�_�3��+mj����`$;�2��R�/�!��>�v� C�hlA|�3�?Ҩ����s�!������1J���[ÔE:1�oc�{��\��ĐNy�Y�r����p��F{���k.)V�I��'z#�U�B=��F;R����DVZ�^�ٚ�}�;��|�ܿ��O�����-4�M`��t�O��v��a��)���d�����~�r_��2���s�0��{dNg
�x\k���;,��L��+��V��c��v�NU'v��ɛ��w�DnD���j�p���5�j9S8xC{p�ʫ��޳r��.8��:\�ǐE]��D��j`z�1��|�/��t���
��7B�;.���/�,iQ�7�a������]���\�����,OF
�\7�#:���Q����bO|]56�8X���U�Y7���?D�|d���#�	��;D9E���d�<s�]�c����"�,�'��c����Jȴ>2� �b�����+�\|�'�%�2p"SJ�0-�)|�V�[\�&��+�&Y�OR�5+�!2IwҿX�I�
��aq�;ڋ0�^�~'��y:��Bz�b�:��ɺ)��I�	�a;"(�sw�g��� ��c��:�BWbۯ��`�쇬G��b�6���p���5���n˓ӓ�Y��m��`N��o6*�3qD���T܌�R|��`���s6#i�<ح��5W3�t�(��U}81��s�� ��yRP��{�2HYϻC�Mq��l\���˂c����%5�?���CĬ���e�keۚEɟ��K'7K��1���nθ��8q!����jҁ�m�	��*��c��`܍|��C�)SBÞ��=��ܣzR�f�q��A�h+��a�Ќ�6�r��*�D{� 	4ڶ0���#�x �& R��g�i��n�!q<�����N�Zf�l'Z�.vn̹�7�/�<�?N[_X�`^�.�
%�%�izd�4�h!Mj\���s&���4T+��c�}gY_�yu(�^�d6�']��)\y��3W���xl)Vs���K%��1�����-V�T�h�'�x=�?XƮ"������<ka���d!��Ѭ9���p^Vi)�Md���f�sR�)�5�M�Q�%��v;6��|�b�,���[� 5®��ڟ���/�Ǉ�k/
�^�°�K"�M �	�>"�2�4������~�=�(�?u��7-�����yj�Πy���5�3J���B}A����6c�7b�my���;�;bP�f�F8�%�BП����A��,�C��>���a�cL�a<)��e�Ϳ	NHi:h��R��&���wg.����bJ(X03P6��iҳB���a{�J�*q���&��m�T��vK�>�^�,�-�а�.	��ܪ���1�P���',��-�'9�*g���7ȶc����w�%N�!��B����̽�f�w�����Ľ���Is�`��uM�
E����f˔�\+E0
|K��1�:)�!^S�� ࢩ��������@.�Lz��z�[,��i�b�=j�v���Wx�V\�~�/�3�u,�����3�.uv�{tEi���ba<[^&Vәi���n��tdQ��:U�HFX����̶8�(�5�/���F涋.�Y;|Կ��\YΠ�)햖�~�6Q�k���ˉ��3:�W<k��i�s��������fK�����0�_Ϛy h�[!�5C��=~o�����k�t����G�U2��oOÏ�X`Zx�$Z���	�ņ��-z]g2��m{L��#u"�1��C�bG����~k��ᵅ^��l��P����n}�;�<�+�m���-Z��_��j.R��D�\�3H(d+��� ���>>�A�M�~�{8\��S?	��[%h�X�M�n$���jK�'�_��/�1���X� �p'�H]�D���c^D�f��F8�c������iJ�J����ՠ�E?)tɽp���-N$�0?��c�c���v}�u������謹�VM�R��G%�d��f���*R�Ӿ��WC�&��%♡��NmlW�RXv�;n�^�_�f[�,�����c�*� D'�ys�Uϴ$�1��Sv�t��o�l�F
�N���j���-�ރm��%1�9�ȕ���Ωu�3XW4rS�IN'�x���Q��o�7����ꍮ)�f:��3�|-�}!���Ӈ�J��5)=h2ׇ������&I��aŹ�<�H%����n��:~�@�����Z�r�H��*;��.�	t�Kߩ�J��c���:{���CY�X�*&�}��Z��	�d�r��"?7eT_���B��M�:<�0������aT�O{aPB�G��Pl�{õ*CgT� �=�� �v�L��a}$���㌒qA9�ҝ���l�VR�{��\>s�N1u�]6)*��\%���6�����R��K~I´x�,k��xG|�Ϸ3��Ŧ�!���tǿ�~p���g��|)¬��Ż� I/�AT�j\�hʲwS�]����q���jD
{]ZGtį�]�=z��A���?�	���c�����z��]�J� -|\�s(zݑm:a��m٦ᕰ�~ݲo�s䝏Q�2��F�!=�g���H#��#��/v8t���U 4l7��F��Sgs��+Cj�Tn�}��P�2��)�	>
د�L��2F����j@�4.�7�z@/�l?�0����OW$�B�&��}���/lP�4BN���C#1��~��4�C�VVhm���3v��^,��]� YER2�~@c��-�7�����1���}��.6 �<fV�}xU�|]���}����S������0��D:9�W;�>�!��<A��I��Ë��#C�7�Wtȳ�tDj��T�z�c�,���	iwwr�׵�J�7{�� ?h� GX��Qz�)� �(e�R�����*�k�/�H����źl��4���oZT�/K��*K\��䷫�WF>�5_�;#�W�Zm���ݚH3LYYm�s�J��l$J��)�`���!������c��5¨����;�.���;��p�]�.9�O %e��v��`�^y�4��B{i6���o�5v���,ώ��"�+y�-4����Q��A=�ܞ�S� w]%h�}9/L1�[�au�~�%dФ��w�̓,Y�:ʭ�g��A�m3�{y��p܍���8�q����;S�8�tx��-]��w�`%��n�R���.� �������2��;N�����)V�b��4�u2O4���;ۍYo;��B2B� ;
�ť��'����Q����4JE�[�=�8�ArmU��Q��H��q>̺��q�?!!09���}���w�sfo�\:�&X��J
��B������n�$�pަ?����(��vtC�f�M�G�]�����&�N��jO��U� �uG7���T@h? ��g�N8����vQ������׊�S!�9ݻ�7�����V��a�w�䑡�����@H��~hz[���'TA��'z�7��tѡݳ=p��(�'
zOjf
X_�4�����s%����C�����3��*�Z;��GR ������%S��o)�D^j�4��*����h��!���r-�JJ���s��aC=��F�&���
6l���j��\�5��$P"a?�q������3tH�w&�TȎ�5��=����:ԛƏݘr"	��8�a�'B��#Ӱ~0�͍]Ƞc�l^1�0$��aLϓ�۬�!I���>���zЎ7���]c�'���1�d�%F�5Z���a�<Aͦz���:N�/q��J�?6$?��5���ƪ��QS���I�͖x(�~&���&G�ea�����홫|u�w��c_�"��b/�k)�k��f�SyX���/�|�W#YE�����M�y8� ���"%��G_ǒ����,�#3��`��O�p�����(�KWVJm�E��\a�, ��%"�yKA\R��L��S�/�s۝<2��9s�E��E�wM�m:%�:>.K�ʷ�pQi���UL!�1	.5��o;W���+�L(s�z�:p1d_PL���aĽ�Ԁ^�0�!��R�	5����J�-�\���2�)�q��%�=�[�w�- �LR�-�r���}ӑ�E��*f���UŹeֶ��U�5�d��k0"��'F<��3����|omW�����&e��Wm9��P��}p]���Z�����sv��*^�w��d S(0QS���M#�`�A����f�3�7<��m�ȕ�x��D]�V����7�n�.-Z,�k�6�7$S���m����5bi�Q0���I\<��wG�����>��cd�aw~�*H'	4���WSqa��Ћ�!~5즕?×�w�{�h"`p����U�v'�^�Ι�I�d�aS&N��r�u�"q���?:Ha�.�_�@`�i�-j]�vև�΢���Q�7�|��8�T�u[F���&�M!�N��j����ce㗼ɸ1�M\�`?�L=�?}S�+I�K0���e?�����n���+P�։�!�wu��a��l��b>\��N5����͝^�NA��B3˽s�V�<ܦ�k'��-[@���TQI��|mO<L��`t���%L#������s�<*S�-z�]�(|ӳ�O���1�M�Z�gR����%/��9�$�J�(b���H)3���8əF�u�Ow�$6�v�fme�Z��II+��:��vsc�y�U����S�A�D�{�[t�	ǣ�Nb��`)%c����3�+Jٸ��m�]�>t@~�,]Ѱ�+�I��)B�;!�6Rl����&�rX���qwBˎ����d҄��d�}vr%֨��+ W4)E��	v�1��k�r��F�R�k���7�w�zk���Sѭ�R@@e�
��x/���[5C�/��5ڶ���.���Q0��G�@��{��H� -���<�W�ӊ�����eUt,�kP��@}D�Hz���3���$�S��rh0Q9g�����f�q�~5��d���0��`�_#�2��8<����2[�y-�2c�>����Rob�)�֜]�������\hF����pTs���n���H��e�r�X$�7���e�IZwp�Y\��(��Ne^�Tj��]X ���?��]�Ǒ^`�4���õ���C6�Ҵq���� �?�?�6�:���V��~)���D�K0�wb-��=Ԉ�0-3|�O���wW�`���"^�aOŏWP�R��ՕWUV
��)�C��a2%	ߟo
>�@5�܏(<�z�`w������2�3&�B�e�����"/�İb��W��X*3m�c&�p��I�2�_�+d�lY���5�m��0���Sw{ia���D�4m��:���dQ�@��+�cq:P$:��la���\�	c�NѰ�$����?>�����,Ł!����	'+ӥ��������Tb/��*֎<x1�}ک^��=���a�����Q��LX�� �f�{زw����mn(Sw'xI��Z���TP�Įb
}��
��s����0�q	�l�ÿ��Y�
�0K5?!<�}0���F�O����bB%�X����"��ӣ�<PEZ��k�Oݛ_�\�Nejp�q/$��.�������F����`
l� p�~($��ğ�������V_ע&.6�<"��ى�p����ĉ�9\�p�D���y����B+���_����#	~wFF�!��i�[ʙcox���'�wxf`���;+w1A�>���ͷ(6� �vZ����>d۝�`��Ū/�g�����[Q`���H�������{\[S==e�l����3�\��m�0?�|��ƹ�ʚ1A���]��z/,�ʰm�R��hA|Nr�{�K�f�Ia!����	*��������j��7�3��ӂ
���׽Y' ���������4�+�g�n���L�����0>�;8�-��D
��D�z,^�v����&���ζ�9�=[����Ē��={������p�������������;H	,��pE�	��v�~�:q���njI�+ĤF�2�BʅW.ݪtg�*/�~jO�)�b^��H��q�i����>����tn>��!ڥ���NI�B���(	o�\�0�_N��Ǥ� ��(�5K,�5]!er)���CE���=����Y���
9���K���N��������~�� �$�L)z��f1�?s��vMù �R�"�o�������cwo�*U�a�%�z7ց:s@Qmi��!e���X-�(�&d�^w��h��d��hL�!�\�H��?��y6]�J�����a6)cH�s����T �I�坤�h�%.����ڝtW�}��U�k��(�l �_���o�0j����V�ƭ�?��eVv8?�."%��E�q�!�E���6Y�2�$	g���l`�j�N�#ʭ
im䐵/�TZ�3��p��`�?Tz�泬��^��~,I2��z��K���14G�iEr��~�
j���R�Qy f:r� v^���.��r�\���8	P�u#��$�(:Ɨ�Kr2�m ���4۠_��8��o� �A�In��9_=>�H�P����L�W$��Y=w�F�)�O6�B�L��th����TD�W��'��HAƐ�5g����"vp��J�\�)��N��9ot+X�����`��c���It��Wj;�G,�?�-��ǌ�Ҡ��-�;v�_2O�8+%#|�`ʌ>�(����4��~G%���7�uqq9XQ��	AV(o����#p d5�>�䣢�Ti׭O_��������c�ZHt�V+�'5��a)�Xk�M��
��ѣ'�RX������kذ���V��Z�}rt��e��sv�Iq9?q�*�Ӽ&U�*��Mo���l[�������O�8"���:=t e��/N@�rl��U�j�u��(�s���Һ=e���`ƅ�����'}j��վ�����ws4�ĭD�4b�n����x2���~G�̅���/d���]3l\\} {����4|�%�2�KU������P���&�/w��`
�J�����u #�r��!7p��Cm
�m����8D��}���=�W6k`���PMD��M2� F��{��.�-OMi�X[��
<�Z���Ǖlؿ�"#@�NQ��N*:�:�ʒ�S�C�0xNCQ���ލ��t�����=��iPO��q��V(N��*0��h��HG"��}Nnt�����j/6NDF[O$��]��x�D�q�FC�����	PJ��3����S~ �u'�E��^�C��G�#�W��3<��![/�:1�nk��-��P������S�ev88�[*��9d�א�mF�
RRv��s����:v&E�v��\�ʛ�y�F�Eϕ����[����R��^SJj���*����o��gxF��4LQ�la�pC.�!-p�/u�s`�F��P�"I�r:����j��-���A�WO���s�`�12�e�iO����%�o�{�����槮l���G�/l�SZP\�"a��/�M�j��(��c���;хEȇD���]� U��yA��3?���!=&E
��yr�^��ǽT1�;V�(�Rq���s�x�uQ��#�Rj�$����W�.��H�JX7Vok��ϔ�������P�O���g4n�Æ�)�:��љ�pc�h<�yG�}
�Eʥ]I/�q���u��wU�Y%=pT��҂y�o`�qd�R�%�ϊ?����.rE�����rvD�nu�*g-!4\�XxP��.����Uy���2����\G
C�Ɵ�w�Z����(�^�������'ǟm�;�"��p|G=(�{�s��,&�,��	ꉌ�k]8�+5�����^Mm�r��R����G�>V��SG%9��
AN�Ћ�"����Z�c�i~dIWn^�ϫ��3��@�ʖk�|���_'��W[�uS��b���h�,��-,��ɬA|mE�U[i5a=i��m�XO��.F����z���yJ����t�!^S���Q�A�?\���w��Q?]2�h�
g�鍒K%�n��P���CG�.��֗>gtx���Z5�Fs�,����Fq]�f1�z��;:��w޾�ݣ�c�Q��C�k�r��� ��գpf9�F���vJ���	2g�r<���rtr�Dk�I�G �l�t ���(��c��*SwC����/e,���D�
�+gv���w0��BӨ�J��;�:��Z������I����Vn2ˍHU���+��U��AL&���R4g��x�o�Hܗ��mC��D�{�PG���<������L7E����������M�����!0�O�0y�5���1�rI�D2\�!�ˌ��f��N��#m9�vfw���G�:����U�/z}qU!q�`\��c-��)�I)�
�o��y��u���O��m_����]�Ob��5w���u3�wT��u���umg����_�W�B�}�I�L[KS(c4,�l�2(~F��<�ꢥ��m)DF�;(X�6���-z@lU�D|) G��Ϫ�T�ԣ���wl�����@;K���;d�>��Ω_��5�M���"_���|�>K6`����ʦ�+	K��k��tW��@������b2�Pb���ǃn�Om�"A2�
9�"���P�>Bo�~�cԧ�
C��=���,=hD��� L��p�M������5w���-~�!�V���u�t�Բ��'f��E$�V���;�ZR�-��BЂ��,(���WB}�ul��r0rF�r}:q�L��]N���цu$�#�#2�/��)e��.���� ��r�d�ϩPc�a�G�8�ao�H$���(�|��َ�[!:��|O�'��tL�H�Kd�_ ᦐ<�,0{$i����`M�����]���%c����/�׵����&�l����/� {���R*�`p�S�R��@�f���XorwX�ms ���1?uz����D׍�63���%`��˔�x,1bD_=��Ơw$Ŀ`�22Ӊ��:aY�f�jZ���L=~�\&�=a�^�n��t�J]m��xxS7�"�T.�p!�)��_�Nz�6t_�C�f�ʰ"��^�����h�i9ԯ�c��uu�f�c���]�ٷ�S�݋KZC�H��2g�r ��f6���;;�ON>���\H܀�]-#<��zs/�~��C�P��n�Ē�u���Ԡ��SQM��\NW�s,�����:"��W_�9���Yp�_ERo6��i ],(_x�ͥ��~���[���QT�eo��`%K����Qo���u�+fC�������6Pנܻ+T�lg%?��w��X�E�4��vB�ӻE����uɼ1N��}��(ɺ��!���'� J5��~T�q�.J�=���x�����K��q��AR�w�8�ȃ|E����T��kη��9�E���KBW$}j��k �U��+���*�c�=jJO��n��B�^]���kd�Q
�Ws�2���it���R��wa�>GO�N��I�/��~ݕ]�:ץ?"��'�\���S2����洚�h�|�Z� *��P�����{i^�RG�1��P��m�眞4�ܸ���o]�^Q)~u=.�h�x���ҹV\9�'K"��<�Pl�C�9tNp�^��կ��He�4@�A�w�讇�#~ƖW�zȜD	?������]�;�~C�b�0�+���]$�sY��P�\�R@]����,%{���aͶ
��ΌX���>Z���v Ϲ37��<5	����S��;����x>4����t�<d�X�T�$���W� �bL@v�=#��ZWre������|3�,��M��%��1��:kg��S�$rt^U't�Ş����_|1dJ�� Z >�_Kķv��'����_���S��4 |�
*���x�MD�[5�7���`�,��'�}���iy*8��`K����\�p!�%�nT$�䎓��>�>��.��<�Es��H��TZ�9���S��Jw?a4�:��$��]�(�x]l�	������0|�Dh=IR��"A��S�֝g3��F�df��������*�m��Ό��j6���Fp�z�Y)�IՠU{��Z8�\v���!8�D�ހ��P��<�_�ҌġB�M^���f\����-�Z*��qQs���i`�p�!�#�D���>�i,���P,i�P�2 ��[	`D��v~6����x��2�c�oh��[݌�03��� )��h �,���P���CM�5[���� Ԋ���W���#^�Y�<B��D�9s9�*��X�b��(��g�h�&N�T�}=�k�M�H�kCqʄ�6�C�-H?}�.�Z�F��)Pu;��W�A�[�ƀ0KX@���D�o.~�;M�;��@�A�WS��0Ĳ= &C!^�,A ��C�ӞG�>�V���Hz�AL|V�H[*@]��+|���k}1qO`��$SM<@�����pF���}��݌�e��n���6�n.������V����S�Q�� �a�#鉲�/��j�3����s���S��/E'o+�����S�`-�:�l,.��D��\OΣ���XA�]�Ni��
���PX�faV$S����d��#�ӄl���'?��k��Fѣ�����)v�d;Ь�؃Q��݃�eys��4�'��0���������짮G�=H͂�8��5��le�F,e^�ټ��9Ct'6��g��ӹ_1�����)4��eP���3������~z���SY�����5��#����Aש����фE��	�f8!������*�~��s����#��rmXn�{RV~��N��p��+����C�d��jv\t�U?�T��g@ρV�)Gn���BB) ���٤Dm6�4J����X6=�l���Ee5WYT�Ȋ �����8u�����c$X6m������� �e�*`sym�;(s�G�Vv���6�]�I����b�h<���]�a��������@�!V�6���v.zn��'a���#*.�^�,���'	����G���[*�	�<�e�D�?�כ~�*g�u:(8nH���V垌rQ~:o��{���>h�v������M�C��U�̦Jf�|��޵Ka��~�D��V�!���� 4��9F��-���󗂳`�#�zX�Pk��m�m�k�3���4������غ��-�K2�Cl�&��R������"�o���L1<CL��=���)�B^��g!@��d��z�9����O�rq��v���<`r3]�lj�J�|*�2�:a}zP�[k��x.��$���e$N�W!r����L�h��U ���฀����z����م=<>�n�&���!��u(�uO�u��������q�r���F��9
��:\�w𪴨�#@\������'���X@�R4���-)E�RS�YY�r�C��W*hg����=\<B{�X��B�����ID�xs`a;�(Vi��M�HЍj/˯�;p�YM���?"��H� v��C_`�����5����V!����L���g���X�}lq0W���M��i�"d^�)�"�$b����J���������.���<Ft@Z���W��ě��B�eVF���9J��Vn�`�q�([�'L��_ �.~���"��X�����^���$��R������d����w�Cq�j�D�Q��Yi�Ɠ��Q�� ��&)������)M�3d7�u����;�
�~�W5�+_���u߱h�N���=�$���6F�I3�(�>��@1Ð�-��78�l+�<�'��'�h�
�>�Be�
�#6 ��������ZQ��w�'`؁�ro^{�,��� �`�9��.+�B��W�R�"�i`L�g/�z�+��Z�[�m�PN�p�ym�s��@�x��?�/a�R�l���6��~ԺPդN�V���F�N�|�����b��gY]L���D?0w��Կ_1r��}�dz�����qxЯ�?}i_�uFq\�f��͚�i1aAVl�p��k1@Z�խz�����4wlg�� k���o��kz��Ք����J���d㯘�'�k L�b-H��
FB�Wr��M��C+B�f�\��
,�-u.l҇���@g��ں7c�����k ���b��ku�fJ����q$p;5�A\��L��d�o�����6`�^#j�=!'S$����c��� ���Df�N���%\��<�����b�U�D?�5�t@�����㏑0o �TsDB��1`���w���ez<i-B���yV-�O%����F	�L��-� �-}�����]S����a$��4
�Pi\�m�%�O��hp��#�H��a��w{�����{��EC��� ��1L.��J�T��j��� �xA.�q�̌y����w�	�lx<`k@��<��K���'� �һ�:�oD0��X�W�G�E�O���YoQ��
����T~Z��~l}� x����<(�M�W0{�h@���1�׊���`)�F��h[*׭0B&K�*�Ch�['�#��Ր;��üƲ��i�R�A��]�!7$l
���6��,��5{�Y~rn�����i��E���7��}U<�֥O�DÞ���pp�*^)�m�P���
*�:���x��K���؊\T��n�!����%��������HX)�h�Yxw���8��;K#ƀ`t�k�{
���~�����ǡ�3��2}���T
��P��֏�n����IɈ���鑗���S����Vmu.xpg�j��ụ���k�<�
��+���O'�-o��c�Ny".��a�Y�2�<�ƨA�W"��8���o�=oY�������1�'�����j��9�gG�Y	k8�TM���Z���P��sw�b�rSG�1�L��X�8 l�/�}�cy�GOOt��K0�!%~����uV��i�9��R�"��W���0�;�T��_n����_7�}Uv�?'��� �u2�AðTe��_��]d�ӊ�w�lZ&��>�}*��P�ι�&�✥�a�Q�aFA�`��2�O[��2	�j�&���ta�g���Ĩd	�p�Z.	F2��UY0Nv����sBz@�}�ҦN��YN�f�Z0�8c�*CI�r�QbW\Ď�!,f<	Y���g9#J�
�}i��ؐJ%�#��xˣ9aCoI�
.��K���r������:�I'�o�e�z��o���
�y�y\Y듗�ߡXh��ޅǃ���q�	v���z��k��y��+�Clƴ�]� ̡���[�h	��cl��^�"�zreB.�G��聤nDC���De&���Z�a��lhR��g�����'�tL�����Y6�p������8o*m
�����4�3�� f���Dw"��-D��;�6VhyC8!��C�z!�S]�e]_�� J�^�~�Mc�36�Nr�"��LH*}�S�1y�6dv��
n*��+z��Î�A]ְJ 5��Oh�V�;������h}$�ʛl�"`��$XX���H�O�g�����#�^�z�g3��-���?B��g�v���nX\^��AH�m�C���;!�
a�:�ή�q��ƪ)�N��?�| 3�I���F�J}�VO �!#� ����1�i{��E�'N9%��ɧm��+]F2ߖ��n��?������ڬ�j�s-�4;N�ع�MW������~9�i��Nd	����`=ZQ_O]��+Ȏ1�ޯ#b�z�m�R�T&�B �s�F)��V2� &;����h�ڀ^g����͘d��� �B���j�8�I�
�>D�=�M4��l��e�=\����\�J�j�2q�*�Ç!q��Qt�.�$A|�q��u���}Qx8�ӄ��A�R?������0�sc�zIF�'��I���5� 3��oy�G���!>IA�J�)^S��H��3���Ñ�K�ÐR���mH��,SoXޘ.P�m�A1�V�يZ��,�b��tSW޼�3�C�K�y���ǔuhLG�I�{�m!q�ٯh��\ᢳ�,/3�9R�1�?����sm/��C�� X���y*)0�-���w/���t�jp��v�B=�}-Kȏ�`�J��V��r��U3aWV�G8���0?��Ѕ˪�:�+���|���k(ld,#1��Je�`����?ED:�ۈ�sxk�1����l�b��4q̈́}��	���d�a���|��xX��h�xq�h���������w��88�b'.n�X��l���	!��W\Vd��}{��^a~��HQ�+�©hҤq՞b훞�6]`5@2-����nzpk4�!�\\��o�ٻ�<�^��O�>N/	R�5��/q=���]��{����0�ژ��sIdaW�������9�v���F����X}� P����]�	eE�r4>��Gހt���|�*]�N!����^���}�s�����n��M�Y'��������Ī���t�IW����Oc,-���e��)�W���]-�c@��d�@�k��d«E��[d3#�ܯ
��\���XMڟzP��O���ő�]dE9��a��CDH���*<�b����Co������x��]�0bz��kt��ʠ)���o@�_%��&�h�HHԓ��7p��9��Wtj�҄�b������k�؂�{9r�(2���6W�p
��uD"t�b���)���/�4�K*G}�驚e�W�[_��;*��)�'r��{HA8"��>-����ά�ץ�?/f��fȏ��dz�����L8��L_�ե�:V���,�"T�Hq�"�(p���:lv1���y���>zg�ְ� *M�ޤ�֧������lC)]�.��:��ZZ�z��]����j�s��aq�SGQ�/���%iFQ�V�U�32���?�UR~NȈ��@���S����N��(�U��HUst������STk�T �dAd�����W�c_ML<���f@��Dq4w�J!\�D�6��b�W&#K&ˊ��u������\�͔�Ď��a۶�\�vx���Aϧ+�[�+-��l�f���:�a���wێK	�\���˷p�Su�֭�H3��!D1qd��%7m�Yk�ѻ�?��tN9Hq�����ۀ0Je r()�TdƜ�.ʀ�;:/�J���C!p��~�����v$�xvx��^�{'6�0+����+
��:�Ԑ���n����XNZ��M�
B����/[�=3��[���õ^��_��u�c�Ͳ�#?CH��� =I�m�a�XMf��@�[y�h��y;GT��h�H��!�&7b�T�e2,A��4`���^k
_���%;���>�T-���o�<*�M-k����JX`o,���7�9�x�P"�� ˞vIb��Qy��.C0��!)~�F��@���:oô&�7�FR�{X翥���W�2n�5M3^�������X�Pn��s%n��gŵ�݅H\�	�ڳ
$-+ް>�6���Y{����j�h|�WLϚ$3�z3���;��)����=�j������e�����XaW@�V�PS��v���ݫ�A�x�Ni$���������5�|��d�����U�7(�a6M�fH��Ỽ��-�6]̘|9Ե�lq��V�~+>����*��%�1�_a��d"��0��)4��=I���ӯ��ѫ4����8�.�"5��}[9��8�;�T��<
���jj�lbh�6�.��Pİц��mgﭘ��{^-��*��>'��v;���>�ס��A��!Ƚ���0wT"H�*�^�K�OH����PLAa�2����E�xa*�j,�Tg��d>�T�y��g��=��V�C�"����A�cf��`ib&{7�)@턌h)�r��<j�4o��L��gD��y� ��)�jV侁I�\����ҽ(@��m������wC+Yj�-���+�>��݈�`�u�ꗠ	�/���i�`����ޗS�[%xl|.�(z�0\�0�FCr0Ko:ח�_���v�;�ya�߹O�U&LZ7i.���U��L�>nG�����H.�3���iOx�vK`9d�z��~ �^{�_0��3.?���eQ{��!�N��;�9��0_�:�*M�DY73�����j�}D{~}��6Ղ&l����*�H��"�*���U�-�cc�od�<��>��qwaEʽ/*�L�G���4�S��j
KN83Y�X3���D��\]�@&
�ړ���x�!j�i9y�#�Yj*�i���,I۵K��4�iSz� 5~�F5"�)��Y�lxP�,!��9�4]�~�V�bP��*엵����pb<����bT�sB��w5L����	���J��u�H��9٭ʐ��p�3f÷��z�8�L�2]�G��'U��7y��cS���
���-n�Od}l:7��i����5��Kޖۆ���Ќ�%�%��{ �(ŧLZ{n	(�"��Hn*Ȫ����7�x>'�ή5+�F�!}�,��IK4���C>�
�G0�}��d��
��^}����o�g�����u����I��+���Πwfo�.6���\c<6x(x-�*Z��x�{NjR���dH���	C��[o�	���� X �]2VAfcʦ�cA��^+�� ��Be8|2mrϒ'9�&x������i��������F*������tzj�#��=����OʊQ*`b!��@������Kp���?Cwr�i��Ss�\bXP���$x�,�����<4�bM��E{O�Bg����ˡ�U�Ք���AA�j���.o4�N׳te����Ŀ� ���STZf�*;�7o� �i��}f�C+��:#���+5�M������Hj� /�E��ހŤ�$�pRdT�9��
v/�(��TD%����z*(v������m"�|Ng�p�y����џs�L'�����!بCu���[E/����io�n2j�"@�lM��i~�V. �?q6�: L?hh�3��L�{�!S��ޠ��<6&ul�<Nd�c�8�f������`
�h`t�1����^�����W?^�b��a�tS���P8�J:aI�dQ�R���|Fa�rݢ��CI/|�Z?\�W���������)?�1�=�.悜��H�,����sMB��d�c�+�v���œ&s��fM;B8��=[4}�cN���!X@w���0��]]%(e0� �����W�b)?�(~T*[�/������P�W܄'J[Z��Uau`Z��)���߳�p��h��b�C$b������W
k���׶�{@D��\�o�z7�U�Q����� ���^���Ut��ҏ�&�2	OU��S�L� p�Vɕ�x�_��&� �M��]�)���:HQdk���:>���6���2N�l	��fPd���*b��X9�|ZS#����R�ƾ��R=K���#�����=�Y�T1$�����pk���0��]rJ�W-�Qz��6n|��� �7�yi�����6;�U� �Ӝ	�\�`��J�K��Vd���K�w�9�5"��p�<�& �GBW�̄��W�H$vJ���Fo�9��H#dY�̯��ik�y�+R�)���8�9�w���jpr��PA�3���I�c*��O|M0�����Z�i~��ɔ�{y��N %�85�n��z5���2W�f�N5�a���h?�f�t�EO�4:�e+�4�TJ����o���?�A,;�������.ġ���S��L���w]�X�����e��Ifq��~������Ƙ����k����	���үL�R�����+R���$�%l�ᒸ�/@
�¦�rc׊ƽ_@��?5�x��
굎��Ӄ��X��t�խ[���3,�D��od�eK(�����l������~m�u�+�"�M0xU%�F� ����f�¸���Ҧ=U}���qahN	Q+��-���Tx]:ʰ0[�v�՛��~r�|�;��(x$y?qT�50l��`����m++q�p��|e��G���/�T��Yœ�w�dp�`^^Y��#�o��d�#&Ɇ���.ܳк��Y��vFr@�P����>
�O��(L5��P�dOL��� �c_�=�j���77�S�+�f��qQ�Y��<9�L�Ѐ+;��x����"�m>$v'z2qP;Åb���<VIB'��+���_�vv���^<���m�}TY{��-(98���&-~L��ؙ�W ��o\務�KbQ.}������"݁*Ĳ��3�c�FG�Y�{�?�۝�K���w��h�
F {&]2��A"����d��9�	D��W�=h����\5e����$�,O�]a6I�uGG�g|,К���ɦ�J����S����0��L֚R�V`���q�B+Db�pJr2e<��Ī�%Vs��� V����(�`���b��N[~n��1& ��6#�-�
�J�
�5�vl�F�j��xr8��L���%��x��pxM8�y�����d�K�j��j�����(Vk�D��[��:�ǶC��u���hd|{��n4�*�%����`,��f�]9���A�Y�~^�JbD,i��IMb-�!qԐm����-�<\V���zߙK��s4�6�����<k�N0�MɆ �����m-����-H��+�CxR���Z�F;f���wŃ/ NW�ٵ�$L^�W8�����H�CM�׬y��"�������ap��"��Oo���$�Q�Eݤ�H�2�"��C)���Զ ��<�cV�qr#��#�y�Ǎ�F�R�yq���5є�v�qjC��=�����J���`NZj�*�ON�_$�'G���j՛?@�%�ᾷ��,�ق�wc{rrR9r�� �^��5�-,`���Mb��F���!�c��! '-��8�jٵu%��IH'��1qa+ C�`�w��9R3�^Zgm_�@�PFS��[l7e���#E��`��}qH�'"{���^���][~�^֝�8���nG�������{F�T����1W�|�%����U��G�%:�aX}b��(~��7��o	�e��!����6���&�~K�U�҃��p��`^�S�f x1�󑄔��br�ֆ��V�"ퟒy�Q
�>�O��I��D)M���R
��4�3{걷��J�j�Ǝ��VS�� ����������s�Й�-��j��cm�Y_�M�p���$X�ʱ�ôF���b�wt쏏;�|�����&-8W��K#?Pݞ�:Y��{��S�]�9I��f� ��V�z��)�܃AD�٧9'��������~�3��a����A�;���L������ސTA��ۅvE7'\\M
bU��/�K�6�+%~�	�5L�$#��}-�(F�d�)�ٯΔTJ�❏gJ� b�8a�i�������M��*:���>w���@�5�^≜Nc�o�c@���d����t��n�B�	�@H��S�lzy��p�Ro)���']#���Vv�n[vH�r�`��U��QK=.՝�)�jm	=�+��63��a�}�[��k��~�ö�z���оY�bN�o:�^����fH�b����$�M),�㦸��4-S�&.�X���&�d��
���]Y�S{_-+������0�g�����+�~����s�UwC����=؀�%D"�L�\�H�~�UT*Y�@�	�Q+��5��n��6@x�y@Ũ����w��~�#bp�!g�5Rd�:�Bu'����O�vX,�q b��d��6?n��A�g�����҅j�Q,�}���rVݽ����@�)GЩk�p���yl���,��k2A3��v)4�r��w��Y�s ���OI�m�]�K38@P,H���vR��z}�T�^��m��Q�����U�{��S��vO���l�.;lq{l���}]U������8Թ�͔rc�7鴞^�:|�`">��^ a�BP�hțUˈG�Oؚ�#�;��FO�Ѭ��ժX!���sL�RܸǦ�C�8����ȸ�S�0�N����!���,9� ��î�+��{Hd^�!�M�,��@���M����=v�s�OgHa\��J�cY�L_��e�G���_�&����pY�M�K$i�������&-���1h��XxJ��p�T��IF8�j���X����z s6�g窽��C�,6�p�!��=7T�YS��lY���t��Tp�Y�c��Yg�)@���V�%�����A��1�cA����{K�Wc�!i�h�2x�C�k7r�4�{|�mN8��J��	/vq
�^,P��aޞ����R�4f]����[���BC"��^~��"�D��l��*�1����e:1bX{�3�L��檘�S1~{',|u�y�-kte����~�IA:�`-򌍸��N�Wq6�<�H����m�%i�AKZp+�b��}��'�]����.)�Bl������RhO-�	��U�?
�Aƻ������Q�|1�$��MyU�p)�+ǲv��H= 0ݱ|d�0�y�מ����~8Ƒh�l�7݆��̢X:+�F���\��"ƻq�`����n����uلh)p�1lZ񁑈��4+bc��չ������/�l �
���z{���B��$%�7��e�*{���
���Fa��3�[�=\���g;�hG����T��cO�aU;���£Ǧ$I���Jm�PK�(��:%�mj8���錨`Z�⋒F&��"��9ƍ�C��Qv�=�06��2Kḳ��e.�q�o�9а�w�!��2{�o�.�����>�G���$�3�p��}�C�x���|I0lG�8��^��s���e0���l�/�^��R����B��QJT ዀ��ɞ24�4P���H?��à��}��g>���V`Gh������1�Y�Q��Ϙ&���㳕29���iK�������|T2\�o�+'��>̲����E�W�������'�L� .!�3���ZZO�8��%b�.a*�hwQ���&�"�ϋ(�qcʉ7=�f�&�O'A͠��W�۹����^��W�bj��ej{��ґ���	ܬX�w�K�g����~�H��x�����|~�m��"$����{d�>�N߅%�ol˯�)���@C=��4��D>I�6�	�������
 .�!�<͟��In^L`cm�9ޡ�����Q�d(�ꛢ9Yad���W�J��s�Q&M#������^k�&{�&q4���!��~�z=H@�!�����T كp<�d閗�eԚ,q�����KFkL,�-�2�\$���e�LX�Hn��Z��u�~�r�`��F0T �q;�7-X9K�����w�����rR��#�h$d���2��Ռ�b���1Z�Q��j�j�n�����Lr�̆��ɮ��z܊�a��T�O����Ƶ��~��<ǥ*_���J�O�����H��|����r�x/�*�,���L�Q_��"�+ZA�t�ʓ^�J����=h�_�W�ݞR0�&�{��8�wSs���t�z�!JJ�?Ȧ{K=`P��@7��з^n�m�MZ��	,���_�����<��(�!�k7�K�F����$"_0c�])Ơ�bXE	O�Y2o�9ĸ !+qР� _����sf����m�i�#�=�܀�� a}kUb�����������!hn��[t��u�K��-�w��Z�>����!��u��=�𾉐��E�x#�z�(^�y6?�@��*��"�7 �^z�_�� ���ڶ��L�y���F)��v�-b�RQi�i����C��M8W�r�t������{O������=Mv�����w{�� 5H�K���r���.�_�rz��3!b9�K�%)ݵ%F3'o�+����.Q���1�e�Q%L,A"~|;�D��I��^`��a�����F�q�VM=� �8	F��y+�ɑ�-en���}�tq�ל̰Ͼ#0,v\"/'8i�^���!�rf�R�[ ۆ*�f�����*fx����� x����*�q����z���$� 7�Ct��U"XsO�z����C�*KV`�E����=a��>w��vإ~r��,U]�����(.�d���0t��2�/Iݵ��r�Й���Kʼ��IB�,G��Y�ǏU�Մ;j�����Y��Җ��j(��݅b1H�<����M�@���
�^>��R��=�����w�P�Syd7�I��`��OѨ�����3� ��L��{/���'zzK��(��>�O�}��	�6p��Z��|�1:��G�9�U��E��."���t���V4O�L쓌y:�/?�)&S����즳c�3�؈��9�?��N"��2�?2�	p�:(WF�B��I�-I��?`�qbD�;���,>+�FjܤM��$��W$�˟tP���;��r'���8&A���&1z@2|�`ZU����彁 �����ÚML�pW�{�%?��c���@��7�l�c�=#<��ƫ�k��	��O&����hU��B����5!͞fףw��
�~=�Js�:�)��� 2t:�^�6>-lӆ�[�ْ4����`�Q�u��ٯ\�^��6��j|�X�A[��i++d��@nOB@ո4�(��UV���Jk�1I�l���fmf�h�+��|���CE� ��1)K��,����)�� ��pE{G9k��.��EK?Q.��"�y���Ӏ�?b#N��_��av��%x:�x��h݋��ل�5WG���K��0,�Fu���,�`m�t]>P�0c>�%��vZ�9��W-w�?�I��K�$��
���0Md��s���
,xi�4dL�%0)T�r�xқ����8eMG�����_O�H���5�|�B�<9|��� �p˓E����vB4�O�(�-N�3�r�0�1�b�ɇ��A2�+��zn5�Z����o��Ok��H]]���+�^dm`�y.(�~���*-�P�3�!��P3HIC��6�]c�V����4j������<�⍝�W�>�|�zs5=��ZG��x�!�M���\�$��_���B+�`����R3BӜ%�!"ʫz��2��cGI����C���5�zP���[�|�C��>����fr��i
Pj��6�x���GCd�={<'zތ$I���3��N�l]Ѩ���B��b�B�P!���L��o� ������2`���DH�\�Gaj�S#0�h��;��E?��>���>Υ�Dh�հ+�"7�W��_�P�1#<��7]|���>�n[7�N�9P����g��ѩ��?����C���KTO}�Ǡ�F;��,�kc3��:�sc�k��@����z^�	�9�N��鹈�w/��Q�ɿ���2��%�����ڋ$�S��	.���9o�5��N7+mP�/
��φ9���&��U{�p�=+���Ϸ{S�K���}I�1�CG��4[�.F��J�JdcH���G朷� l�<����w�"�9�@�?s�ё�Urr��hk�3�2�_~��$�)ǭ	ˈ��.g��࿈�n?�IC��to`?\ ��ౘr�.�!�G
����!4��1�U�!�ͱ�:Ŗww��'�y��Cez�sƶ��Dr��w�W���e6�t����L�.�a+�����[����O�u�ɪ9zޗ�������|U����9�O��O
w ��)�0��m�[_gD�;��-"�/f��~�wɉ��/$�	=�%K�ow�u�jXצ�=�h� Ύŧ/��Q^�;òvՑ���A\�ڍ3?� w�N��G1�*�M��O3���Mn��)N��uq=�iq���^QUk!���g^�	uzW[�D�,���W�*�C�4�ѥ|�(؟�xˉϵ�����.v#���Q���� M�v=�V-
 8Թ��Ɖ�a���<����Uk�t�P��C34i�ݡ�򑁢��*�E�9Q��^�e����c��%��Kюm�D��' i/6D�js��qߥ��Jy����E6��m���̓�3��R�0'�LBe�~c�h)f�Ŕ�6n�H>t"�#:�Җ��o/,DX=T^+j�0���T��<�f	�:G>��cM��ׂ��Tv�9�M��Q��e�~ХZ,4��X��&⥫L�򥂦���ƾϨ6�g��|$<��� �)$�jé��C��wK⭢0�*C��,њ��e��5|�޸�F�y�L��a%���#c?F�@ ��"� [����\5yc���(��;���3�b=|�]���`ݥ{'�[���k����If�=��Q��	��J���ʉY{�́�*����~܍�c�=J*��<\�+"�	���,��F&�� �ɞ�]2*!6j�Z��7���*�l�>r�Ѷj���jIpӀjA�V	a��t�}Q�&�YpO)���X���J�"`�w�� !A�c�XF��6,�mg6/R��x�܂����3��^��Ԕ�l!s{�V���h;��A|�C��8����mM�v[}U��kb"��6s�U�+�JM�Ѯcڙm�ׂ��eAh�㢆��ԫ(��W�A��<����,k�K�ĥ��E�e��3�))�Be��t����@�l��NT얯>iT|�w��6�� ?ɛu�:/z;͟E�헌X}
��W�LT��p�n����6L�꓆�6ʮb���~Dъ��ߛ]�%��Lr�)� � [)n]���V��˫��%��G�6����#��lW�|}�f��'�o6�}t�Cp���
b0!�nـ�'�O�sr�L���"�I��]&+�&�F�a�op����+��r�S��=vY�~IR҅Wq���jm�<�����}m<"Xh�*0i�ͬ�WR�+�"B�o�@�������?�hD�+�m��.ոI�T�S��)��{@��ia��ٛ�Q�G��#���T<o��
%+��$�!�ָ�=�8�47V��x�����G���sn@ JZ�9o�TR��W����0�Ѽ�'�[��*M!\�X��/4p���7�>��+�����w�<-xgAw<��JQ�M��S����k�.���Y^�H�q��K��_�h?+\�.ě��:���l�� ed��vDs�DE8Wƽ&�8��4�RZ.(�[!�����_iO6_[��M��(�w�g��:����z�q�g$��l�:ѽF�5�'�D~���;@�%�*e�d���
ޘO[-��>�C�.$Щlm��{zm�[�A/%�-��r@{p!���qn	"�&ˀ��ң?��� �Bk(/ꉃ)�U/�yt�L9�O8"�L3{��2J�%d
����r�9�>0������M
�Q|-�6��~�� 5�K�v��Em���?�`��q� �r�9��{_8��\�89 f��6�6��+Z������)�:�%0��GvB��󗹢dMW�5����*Zj�E�Ъ�3�y	����V+vB�MvNv�2fT��DL+�!�$���ۨ���h�.���%�O���$5wc܉~e?��_�����L��.��suѪ1��/�:|�B���[xVIY�1!��/Wr��F5a�ڡ�Wg���U�u �Ѿ��!kJ������ �F&�ra�&M	�1�o��6\x���"8M�-d���Y:�1ذ}�U5���i��/�1�kw�4
�:�g���IΒ���p��,/�H\��	_u�`����͝`���Q��=�ʍ�1(�w��_���*R�t/Æ*��Bv�=�&(��y/�X�|v���He��]K@��,@O�p8 �L��c�҅�֣�$�d�JJ(�]k��Ȫ�M�-o���k�$h�g�T[R:5t�N��r8�(��Qn{�VSi�D�I4^d��c�7�5/
>��]�x8!U��3�` qp"7��O�zv��0�3}Уu8��UV,��]P���s|߆�Pb")��[�9i��¡�ASMI��0	�`��s��Eu7��J�U�r�M	��i=g����6��	�^,ޗ���#%�1d� ����Pk����k�U��{33�K���P8����L���:� �d!���Q�_&�i}Ns�����a}�C����O�����`&;{�'�%<�=�	(5�B�@�,o�X��#�G�}�����Бb4&<�L+0^�B�]�R�h�u]+5CFH�<��\�r��9�OB��c��/T�����1��n2�q@�씂S�tN��2��BC�CcaT K�����&��)椾3���`'|��������n�; aY�D��=�CV �ʹ��@���Z���;�G����ȗ���݊5�����$�6��v+k��*����g�������ays:7�Y�xK��13��ߖ�F!����P~���s�ƓcK����8�=�� ����'�b��a��{͚u|6	xz�`���s��94��=��z�_5�D�Hb��"C�
� �7A����/�ėy�vN����H����c���l��u.h�oi��4[�;��ܾ����f����F��5�.�����ł�´*����;׃6�Z%��W�,+�H�A��mÚ�­܈�g�d<w�x8�Fc~�=�g��>S��h�Y�� ���U����F�+���f���a��(�-<��
)�?~��|��Z�<� s�t4บ �8+twHZ�3i������� �����<95����ęOiL!��걉��if�:�q�9^3g��«��HM-�Uʖ��vGx���A�l^^�w��X��*3(�%o����1V��6���/��� Ê,�\O�9�ۙ�U<E��](-I1��nN˹#Q�Ձ�%��sm����]W��P�nV�N� *���Wk��1������
Q�Hl������U�;!��IЇ�Q��
���_�^Y(�_4��l�:�K��saEU�W��(�`[͙YX��0|�`0ѭ7e�n�]~jv�뭄�?����F�|<�Y�V�Tt	�?s�F�����3C.������K�@&���m�HwP�_K���N��_��AwfƬ�=�A�4{=Uk_�Dk�D�f��p�mx�H,EP%��,[�M�T�2���Ҳu�h0����I�O �g׶��x��cv�v�7B��T?�j]���*;���5@�ty2���@�̓�:]���	ͥ��3����p?��Љu`Ð��z�uCK ?�f�\�J��eO��f�åQ����x�Suϵq����X�2-v���Nk�)��<ez-x���oF�Y���a�5=b�jaT	� �2����rI)��C���$�U��ǈB�8��X#��ӣs��'���2쪐�p.сg�ϧF�������)�iiմ���z@}��"B�!��2юլ֍�`�#�ɾ��G6����*�Zo"qzιu�E_��1R��6�}���oOPT�%�k�ӿ��d��o��F{�0��l?c�M6�Z	�V���^�ĝlh�yP莇������7�J�hރ���-��N�VUpA�[�rq�sE�; �n;u�O��B�^(��*��6F����ዤ~PGp�m�@�Գ�� �bX��9~	�h���d�#�:�>�0���QT�'~~�d�H��Z@�v@��H�=u�03LC�9���;/��;�
�᤟%߭�f<�O�QA��C���ߚ���� 9�y��5:5�z�UN����3��`ʿp�+���de:5��-v"��Kh7\92���$Э��4�sp��2��y��5�Y+j��C~i���N{��t�b���sf����D�o��8;G8��*+�r>��!A��uw�ތ�!�����U-��qm.��V�j�IN�3]�����Qq�H���&������ �k�V"�w��MG�f���>:|n����=�z��������p���Iﴆ��?������7���Ί��2�BC-i�o񒅪���7�w
D�A<�3�QD�i��!"8�8�Y�(߻z5e�Iβw�j��u׬��"b�U'�aQ� �,�i�YI��'�(y�I���Kn�}%��]��)=�w>�?)I�A� ���T�Ժ�	$����$j��V��G"q�ɮ4zX- �fs�ƖJ:f�p�6��� ��%����p5b-;���̈́�W�2E�i�U�ћ��x±�%��yyw��[WB�|{�� ��&c]�}��m��*�>�t�~)���~@�>��$���E<x�z�r��Ӿ/�#k[ fP+��O�S�뵥�Du�n���|\(V���6�� "|rm��W�Ġ�й�~V{	/�A�m/"�*�Q<��4��;���
���
���vu����L+@��������]TbB�*�r��H��ٜ?e�]������m���1k#
߁��s'�Q��$[]�Ѹj>1�J��T;����z�]�qV�R��j�ň�����o1mx���NlP�����e�Z����"�+G���N�M��n"�@�9/B�\ضL��F��� u~b�zRpc��r틒t(%�\H{]ٰ�dX�Xşڏ���ѫiH�
R�~�����`�T�C�8���d��iPȁt�L|GԋM��]lt�SdH�_��#Kb�g@��5��uU�bW=6qd$6X��J0p^����/S��i�w4s�s\�r��E1e�LMRn�APUr�g��r>G�;�"&:T�p�2�Ѱk9q^60)B�R
93}b����L��S\�c=	�5��|L��O.xac��|2�:�\T6��FVr2�U�ꀬ�Lh��IZ�rgq�@���-l�����
?W�S����H��ۧa8�G��ɔ�5A8����+�k�Z��1����kM�}[��*"�^�V��W~��w�[�?�囿���U������}T׶�N��z�oo-f�`�M8���pJ`
�]EŔ>ΔV��Qٵrx�T~g
8;u��tKy]Ǥ")�eL��e��\{��K6S}L� �LN���6`�!��li��~�9:W�-P�ϥW���i���dJ�6du��<�k�!%hqq�<b��ٮ��^�Y5�+H�X�b0z����ah+BƢ�� Qv�á�ϰ���Y'��a�
JiJ>
���\�~�|�fgR��-�H�v�	C��b|�Sٰ#&[;�1�(���Jk΁_��`�Z�.rE��Ƶ	�A��!�l��V��۠{^،��B�q1��0�����e���j����.`���Q�.%�4�:Gۜ�8�z���Hn�ŵm,|����{�Xv��d�j��DZ���
Ճ�|x�@v9�i�U'!��v.Qcم��f{���
RYXbJ�%d��l;�T�S*b뉽Yᨷ�ٿ{��V��8�{2�pO�)��ګ����E�{��:)	�7T�r�ƻ�Bf�����\=Gg3�V�#��U+ު�V�p��Ԡ��M��>@�<�V#7�Ξ�PO��������m�ӟ|�N��Q����8�sT�\�vRZ^�7���Q�	Iex�#nz�v�ɴo>�Z@�Z���OB��Up.�g{��j��WEBL�#�L�stw�f4�j�����h��[E��t9�yɋ�q~$�Y2zk!��4�O�����x�YP�w]s��۬���<~MӜy`�M���ΪQ��mي�:Ҳ�X���#�w�|����:t4��E�O����<&�v��P`� ��Jd�rw��:���7Ӂz�1��\Uxd�*���k$%��)�� ��q��,3(�l��B�F�l����"!������~���n�;�-�`V�|L�gf��t(	Q\�R;t�����u�P$2�@]u\#���J�
����~y&�Ê�4Y�Uਧz�U�z�X��_4t�!�����,�^TzY&I	+�#��XAD�W]V�̞�a�Yv1��X�-.M���͹zT$i���A�;~P��N6ܠ\��
zu���\�z
�rj��\��b�@z����������i��l�|g��S�^�%��9u�r��FXsJ�9:��6K	o��h�<煼
�eF��D�l�5t��Ay�&Y2E�t�|���n���x+	��w7��O�9�^�M���H�%=C�
`�&^n*�^T�̙���/�(P*�U�ʌFgP�&��l���Î����$(e�O�ڢ�rεV <�h4ˆ�i k����Z"��s���d>C��1�8[!��ˁ�ڍ�81D�8��;8C�E�9�G�a��C����LQ��JR�`�u=QLϻj��H���!�q�X.��CvL�gkޕ�ȴ'��q�Ɏ��	�Q�s2%�-v]�����Ú����K!ud�����W���-K��.���6WR-��Q�����I4��U��D!H9_F�]?��}�?��t-KIǷ�@���E��۳h�$�\%,���+nq�*�T�Ud�0^Yo�~��� ,��<��qպ�L_U��>�`��&��C�l������H�bR�9�5��WsՌ��}����)����M�U;��˄����ܕ͢縮M��6�����y�k�N�m;31F������;��}} vG"�Ê,Ȝ��5�c���\��.EĢh�����T]5!���>��V�sLO"�Y�r���֠���Y�ϥ8�N�ʌ�/oY�&��W+$�Z�����P_�,�e�O_ƀm;2jx�ɀ�
�H�J�b�e��ַ�,0	�K��9~&nu�H��g�KgY����Yǲ�v�^*�8�+� �,����6�eMQ�K��Sb�U�!v.:�K��I'Ywa���:�0�*r0֡�/}2���Eֲb��U���i@��A�BfFL�M�^���+���'8��G�_��Qf��a]n����e�������I�郳gĚpBt����z`K:]we�G}z���5��ى��1�0�ђ�����,^>J��ܖ�elH�o��²�XE�����ȉ#P�*��W<O��<�.zO���L��TH4
���Y.o�NV���7WJ0O0�y��-��3���KJ�6�1Y�l�he1ȹ+�[�v�9����	��n1j�����r��S�r�E_�}����ʘ7�2�j��XE�,��ZQ���;e���!pe��Guv`��q�'�w���k��G&ek��+��9��ZRB��'���d��S��.����aDQ���+�}K�b�pU���2�ï���`��c$��R����{�ݺ��R=E��n��p��<}���>�U�e����2$��[&k�j�0�m�l�P��[�e���®�0��=���Rt6�PQ��,/�0ǉɽ�P��2�?FaO�d��))^du�_1"u�2�s/�ӷ��/:�NӉ�φǿ ��I��`��O�b�Ҁ��"���O7{�G����9���w�L���}��}zW�)1P�ƕ�l��Y�Јo��R=X��;�aT9��z=�<{�R9WD�~_�p�3T��@w����0,2T����Z����Q��l?.�C�y7�TQ3�\Փ!��e���49�h����_G���� ���Z���cu ��#��YN��`8bD��]B�#�s��CX���@�)����!�U����Ϧ��9	϶� 5�$���9B���&���7�EQ���v��oR��Ś��-��kfG O �<���&m��9��EZ@%��(�|&-��ge���} �!��l���	���M���F�g �nG���*ۼ�*���,��S��~"v��֏?ڤJH�u�wTs�8���|������g�7NC7�3��c{io#̧ Îb�h�3�J�W�u�h��9�g_@�[��i��^�a����:Q�0!�Z� ��^!BS��wX��_�ƎT}u�|v����T�1|f�������~_���U�[u����D��z�}�mRg�E�Ѣ;Ҙ��T�PIj����3�P��Z�%�Z���I�膎�PG���"iZ�11� �8i$�*,{�H�Q#sA�P$�Q�cOgǶF-�
��^y��K}������ j����HF�TNU�),��TW�KA��ޏ����·`�v�L��2��F~}x�A4L��վj���&�jH����P�\�ly6g��~��`F#�_k�w������uz9�}�����pg�H'�H�5ƺ5n����I�eq-6�S��t�e�^��H����֕��W+� (����P}�?�:J�jH_t��\�`�˥/�u�
x��F4lnC����M$�
s9~7Ra�K#�QC���j� ��w���5o����Y������d~�`vm�X�M����,.�D�L3����Å���v��M�*�����wWe��ba�C���J�Є;�oҿ�G��{�]�^FF����i�W��1*��r��!|{�.7W��<]��i���L�R"_��8&�W۔d}����փ����N9��ʞA�r�6$�M�1��>�/y.��Cbi*dm,�K ����5���J�A3�Y8��Mk�o�&�Ͷ�e�Ⓖb���;�KH@z���*��2��G}�V�.d�B�ԍ�4�e�F�O/RX��5l���S��G��J^b
p��Q�FJ}>��)�<��Ŏ�BSϘ٠o3~��d~Ƒ�
���ʘ�
{	O�P=�Z����#]�_�"�s|e��C�3ql���Y�� *��҇P���O)�ti�,W�����&ۈ]�����	���:�������%lG|�����왕o��d�<~
�8�5�H,�@q��Fx�m�B� `�d�"S�w�V�Z�6��Dr�d�W� �"�&�ވXI�2��*����*�$i�ܵ��k��u�l�qX/y����Tl{���u%%����TLÍ�]��pA�Y�.�[dx�c�Z��$o}����w���	য়��N|�N�h���$߅k�^B�e�J�˙m	Ǐ�lTz'Sh�Q8F���b�U�.�ew����R�7� �	�3
'��NZ �K�;4��������S�'e`j�RTw`�b�A��r��]OG�[��
-�e P
���"e�<ߺ�e��0�i)��d��t�v��%�<�7��K
U��c/P��1����)�iRZF261�Wh��ER�0�c����YĜG�?X�W��$E1'M����E{wf�]t�W^�kbR�7��q�J�אʿ�˹�J�iN�^$R�($���c��>��|���8Mdȯ��ᨱ͑i^�+Ի�@��N��D�nV�CP�"dy�?��I����J��V�*���ɏgVZ����$sJ��BmJ���@eu�J{n�rV����ϲ�[S���+�G��O�������3$�0y!�JQ/��E�*�aI��?�~��Ĕx��|�%��.�͏ݧ̖^+���2�i:qO�h�W%HP�3�!�qf}��������cQ7�=�r�e���w=�7��kYȽ�yE?4��ȵVz
�5Dq�v��%��Z��fV�;n��:/���ٽ�/�����`C�|h��� �4���ӽ�I���9d����<�����@,���y=ܙ�h�Y��׾�N�P.�4~�9�_�o6���\"��&.x���	�w��9H�j{�p���Lh�DR��ãD2��SО�_��a�U�����G�~aV���еׁl��G�3?A�\�=�r���'`�>��ʬ��6��;��B%�y�&��F��p�L4e�Zd�,$�e���#s����ة�1�9��G ˬ�@��<1+S	I�wߌ]��A�i��3j���(f���0(�����&��1}�	@���A�,?(>�0LbƇs�`�ُ%Bס?(R��\�e�:��(�z�CjE�7~��L�����V�b.<ݣI1GhjL["�u��{A�r|�{4K1=F�؛�XW{�N��
r�:	��'oQ��N;;�4����zp��~~r��Vo�:|~�޲�3��A�K��o��U7/V�^w�5I'�/6K�,z)�QXߗ�^v��p�㲥�Ъ����Jh����G�~v/��X�/�����:|��s��1X/C|��Y����l��.c2zy1����\�wVK��
���x[ɘ<[j����4�Vh��C�eQǺ�'�#�;���h��qG%�]�z"��Ci� ��9*�h�;I<B:#W���-�yf����#F��D����T&p�k5�Mr�g�YDv�k7^����(8���*����M��`>�_�Y�?�̀P����a�4�,Ը,��f
<�!��7���1��_t�&�I_Y��0=��+�[���#H�)�L�D����i�2p�������pI䐘f��xߤ�����/{/?�/�s�q-�ւ�������5�P���Üv��36$���~�-�I�]"�YA���/0���`i��,2dl
93�Z�>���Ф�t�ۡ�RM�5z7�P�K���qs��D�J�|-��6-�b��0w���'���5.�g]��=�F'�i�2R�y(�?�Cc���!r�qI����G/9�w&+A����3-Q��6����xGi%�4�),�_��Gap�h�\�U�cг3v����^sO�1����v7YV~�m�O�6�<��1B��n��M秌c��#�wJ\֠�k�h@�t�����K�g�=�{�y*
neV{�>r+�ik,�0 a9v$ u���J7	��z	�t��.���J`ةN�����������ȁ[�Uc�ݳ�%8=��!u��8Q�0A��l���!�Y���(A�8�P��bV<��X�μ}]��;��UO^zʨ�e�*�3�3-%2e��)�ՔZ޴?[-葭�*u��m~�j@�)�]sd��DB�§F��-οWY��K�C+�&}����C��~�
����[��j��-؎��r�,+-ĥ����|�/>��6�1�p�oƆ�>4�?��),�w�]$KgW���/V9'>��~y�;�?h?"�w�5!ecn|�K��_����_E��z"#NC+	Q��HBP�esƝ���_jP�=�̧���j�		�E]E�����}�{ڹn��_.�pFԿ2t+
��&��23���Q2�742�`5~*<'�ֈ�,��P�&�u�i��~�Fz��_�4U�W�p�c���Tm����� ZVL��}��ό��;�^\V�q�vLj����ol�':�k	?|�(��Mh��"�3��9�g%������1�G,���vsй�^Xm��������i�k�5�JF<��yH-�%�^�z�Y���1�NG�^8j?:�4w��l�q>��81
��n[��9/'��g��"{��1A�s,XNM�R�%5�]t,����&��s��3�>a_zp2v-��~K�kJ%vR�@Tu*�z���Xϭ������	+�>�rp�	�8U:b���|A�8ْխ��`I���sO������I���n�ĝ�	0����Dً$��W%��2���*��M=��]�sƬ6Q�m�0\T6�����̑e7,�O�Ke��J�\��;�����Ӌ��-X8��5{�.�\����C�M��	�FHQ�ْd� �`�a��5�M�Y-�췚�a��1��A�W���	ӢDT�6:�D��Z�L"����j�x�&�b|&�}�����Y��
#xkx� ��0�w��h��NzY�m�D�j$�f�H:(6�!��؀�)�N�?8C�~�"�G����0�ڰ�+!�m7� q�ho(�)!���̀�`N���Z�/�۞��'|u<M�}�S�:QD�Q�Q,��[������Gx�b����0S���/���/4`�i%��yL^�yx�+���ya�*�����i�`�/�_�@�E�QA�sp�����X��Q�RrE��a����#s?�C%k,��FqŢx"iT@��C6m7yܭ��#Ĵo��ƭ*"�Y�1�G�3�4}C� �JA����T"�̳���	W�����I�N�4��er��EC�/ޒZ~�gN*��F���Sqp��h����ܞp�?c�/�4���4����Z�� bxK�	g��̓.�0%���i2`Ș��Iܢme��vKj�=W97jnx�;u�4��Æf;% ��^���xՁ �>~�Z������Y��9i=`:�ެy%�Ԍ+�(�:��޵ܵKK���a�Qr��ºR�B`�U"t}f��OӦ���g��(�HYN����<���c`��~��\H]��l$0uc�'2�UJ$�41��m��I���}5;����0D]�a6=k��lqj�b����ff����h��
Ѡ9F��}|y1��@�:B\�aMu�&�י�T&�⦁��/����G�F2�.Z�(��iJC�Ee���A����!,68p���Ê�("��,��iw�(΂V|�rG��f�����u8Ø�Z-�� ��l����ל�Wwψ5�������2�j�T��t�B�o;�D��)z�CT��t�[5����f�E*��m�U2<)7�XڨtAkS�����A�}��]6�*�&ָﱵ�j]����@�7H��d��Xp�+I\{��'������W�M���1����zTsYq:Y���
��M�p����<�`I���ۘ>��̐��NFh�a��l�ʸEda?޸)���Q;�\���6:1�B�rmVbڙ|3���'6�m|����И2�j�L�B�5�����#nkƄٓ��)B���e����ΐ������Fm2lߢR�T�kꡙ����!(aFY�]���G!��B	Ym�l�<���ܓ���pC������y�n�5��!�uQ��`)vv���H�$�v��=� %�Ԑ�3����Q�N1�l�*v�/h�L��� |8��o�7'���&&j(�n1�w�[x99���ȭnݼ=��V�yN->�5;n.�Ri����:[W�����n��ut���AL��3�c&��GA�;K6�q�1 �(J��3*�7��D�^Z(53�t}��2k���
��u�^F���^��㑱�-1%gˌ�|��[���7d�E����D/ꖠ�k�?�$��'z�?����&����r�~�˾�~��)�M��7����J�[�b	An%=��w�
���F�mJZ�$k�����*�����d��J�����Jn&�B�PKap(�Ai�%>����_���v%�k!Q5	mA������7�>	9�3@��r�9�X�z_~�P96Qpsm�]x�l�}�����D��K�P��Z��@��fڧ(^h#���z�͵���=k�>��Qd�iQǞ�2'sNnr��P�v���}�0Sl��&�����C��l��k�����j)���n����������NBhŶ��Tq��6��Dv��-���G�w�Z���1�+�n��2K*�0�\��of�� >�d],�$L}TG-�U���!�=i�c��wY����%^�5��Vu�r�E�C��ccȁ���bc�}��T�;�=��2�穦:�{��8�\Wr��/�f��䟝��Z��j)�����jCJ]�+�����u��,�+�\[���w�-S���lcA�-ɉ�TN�]����:�#=d�9���鈎l�MuHp�k�R��	ï��T��O*�:�LdE
��W��$?��f��L��l�89�u�B�^FM ن�8�hC:m���2�I�i�ӛ��k`��إ�o>?P�Q�S_�1��v�t�D��vM�/9��ǯ�z�|(Rsl�ZK{�]h'���g�m3�D���e�� u���J�wl�E#[���>v[��@�	���8���}�غ�֖g7%k��2�2�GGW��<��w��I��`� ��'s{۷���yqpНǜ�q;⦂4��W��,�>f>�Wx�l@F.��Fs�ǂ�*K���k�ZcD��a`�[N ���? &�t��vJġi��`�
�9�����=�b�|��_�l��5H����-��qg@k�t�Q����2�-K_�Y[�O\��<`�,�@;����1�W�2G���!�n{��D�����<���*!rfK䢹���`経�[��Q�W���T�:)�*� �� �b}�.��r�N��)��=�`M.�u-��2�|�P���@�I-��A�8鰠�!5 ]�n�o�~��ѧr"��W��
���0�,
����c�� 2n/�7�Վ�F"k���!=*�_�Lc[���>)�,�ì��?�(�E�H��6�kAv��q�*��ȧB��-������dlh���6l��-{P2���o�u�CL�����22ZM�[q�\�l�ZI�<>W��kj�;C�L���K�M!�(f]4���L�{^�cIǽ5�M)kaas���7.�=�5�,�ʛ���'�o��LSC-�7�'�b�`*�]p�QRo5�Aҏ������<��2϶BM�<r�̳��H|�F>�s��?Rd�u�q���Ů�ޚ�S�^*��a��y�v�'�v��+�::�v��V��t{��+7�G'����`��y��2�t�`�"SS*H�q��)��S�6��1�ZL��q��jD��#pf$z�zV���?EM\y�/�>��e�[�j����R���w�A��\�|�PP�6�ܮ��W���[_�rh݂U�&�7�U�<A7Vٻ��c��L���\n}��\66����{�h��	:@����5�r1��%[9���݆mR.3��Q�*FO�^`7�J��O�<�-��P�jrʪ��,1�f]H�5S*yK5"��A1�(��,L'�v<��Y^3��[�.+}��pF�)X���S՜����ZE�f���[�[�*2*�"Mb��-6@�yǧ&�����Ǜw
���艼��\Rf�v��˫?��W��@��2�#��iJ�D����j���{�
� �?��F����Q�'R�8�
H�D���V8�V�2�x�=A]]��H�xI_ᛓ�K�Ƕ~���W$ k��[��G-����H�4薀+��*N�N��f,m�K3�"�D,�i{�i��`�ě* ���;u�)*�0��m2�*��DZ���Rk�Gee�n�n�2�l�~��(_�e ���V⚿��}u�^9�c�,f(F�����`�,Eu���<f��1����'[��=V�u.&�^^���z�/�'L��B�j0e�2��v�yϮa=�c�b�{���[�h8��V�]�1��&�0�݀����f����b��˔MIБ&b&#� ��]��t9p�[�8�1��I�Q���f�cq���N�l������%(�U���g���d�?=�^:m%��拈��U�ݹ��]Z�5��n���͈��6��5���b�BX�<���/�5o
w��x
FT�?ei۞�E��x��� 5A9xi/��t����9�A��Q4�!��T�j��#��RK5��ܺ'웡A1n�*�2)7�SB����q�}�����Na���'��ŔDv ����\ �wB�0�c�I���d��C��
jR�&���L
�����ujE
*�מ,,�T�-4G�c�1e�����x�S�._*��q�d!�97��/�{�$�!����R�K�68��߅�e0�ؾYLӸ+%��UcP�6m���I�^���N� 6:��X$��ɧd��^���3�/�}D�ν䠢x�[ê������"^ �-{��f+���w����v}����펀2��G�v��[Ii��DZ8�ô��yd/���;���7Y7�y��h^N�B� /f�� �XdrM���7^|{��Ǘ���W�xa�ю���i�q�f�8A0���[�+�J1ϦB��0\G5ͦ�ٴ1߀����M ;���m��e_H����	�3�Ow2n펼L�ϙ�%�EP���sv�cc��HΈ�� ����g|�e)LW2���$Wq���xf�����8�JD9�����-�;D�ǂ�������'sc/]"���蓮�����r��@��z�{GA���#~7�@�@�\�������-�/Z�-ћRMylE�d���L*T������ͥw���b��b�,�c��B���
(H�gJ-�;�&�g+��Y<�P��_�)��C���M ��jg2�F� �5#v�d[ހe<pX���<���H\w�ˉ�nk8��tq�:1S����$�Շn_�����wSw�����a�^����9����!���7 ��^�_P�M��!�x����q$��Q�k�nɝȮ��ZI�t ��(���G,Gy���ad!hE��"�½7�˧��e~�Y�p���f]3|KI(1���Cl�V���7�_$����i��FD����O�[�9S++v��cv��m\  ȿ�͟M�C-\��>���%����f#4�3���:A�O�c�Ң��W����`��%-q��gc��rŽ�/���jzG�wޭ/ŵ����sփ������:Ɨa[0`_���ާD��(/4�Ϸ�s��3�����n{5\����pb�F�����>�N�bˮ=���ɹ]���^A2��g��E�&�l�����`�us9R�!�K��c�)ҁ-���i�-��`�UR����A>�L�%��\�z��2�L\�l�;u���h\Y+XFT��t��(;ɐd�X��;�z�����x2�����%��E���і�g��W�f	�s�Ӳ�/����t�1��9�o��4K�֝����r�=���"-f��y=og��O�p�K�| �T(��`?��A�2�%�.�{�U�=ښ��������p�"[BWL��#2 ���/�a/6\�m��w&8�*$%B	�269�V�%$�\(��Hn�`O�f}�)0k-BA� �d���C�\�B�Y���-��gdzR������	���LJ������c�Y:YaC%�}��F�%J����3|(��V���yP� 5�a�
���;�嶲�_��b��	<Ȼԅ�[]�#�ڈ6a�t[_��o *�_?��F8��.W"sk����\��1�͂^S.��4�;w�e�	�GD�`~z�b伞�p����_d���Dx�#�9��,� {#Z��p�c-1%�K��W����x������ָbYC��,=�k�=T�,S�V ����;�J
p����,H=�����:�NA�{3 u�wu�&	~eD��)؅�K��y��k�XZ₣�ep�l���l���O
�9��V�Ʊ^�I���A����1���(j�w�i��;�\�J�}Dֵw������'7��o
zm��#����哯��ý�އQ��1d,��y!�x�G��Է���2�Z��$�}sdc��'�J�s"+�H������zળ��p�e*�Jcx[��u���C���n�WS�����-�Ժ��K��̭�Z���G�`�c� �f֗hgĢ{k4�nG���� +�HV��[zs�Ww*qϠF�7Ί\ �W���y�W���y]���n��}p"�r��P�r��i;Ѿ��!��˩9ږޡ��I�c`�H�[�ȦO�Yv�	M����y�8��	 �����9�Tt�����'�U�C[_�@h�q�Ȓ��OM+��
�P�F���g���4?���-lM���K�PE	��1�4=������O1���1#,w�i�yNTSO6f��ݺՂ�,��:~K�o���̍��O����r�O������Y����۸	�D)�A��Ai���`��.R�n�Y�Ȣ�S��iɀ[!m�[ֱdg�n�u�v�`�����r�uBҳ���:�6z~Z�dm_�>;��x��u��K�G<�H�/�S��M�*B����z32��x�N���
cNx�ȓ�%�`�{{;}�|�*3	��/=e�^R����s��0"��ʮ�M�*�I�����	�U�9X�B��	�����_5u�����Z\��S��̜~H�^勾���\�#�^�	4 `���^��/z���4��%kv�0t�djW�V���-oٮi6��
ԲQ'�\_�Q�r���Y��l��=�/ӳao�]��d���_EG����L�V�b�È	h��P�p1��0������w��r�Ws���������ܛ�ԭWQG=Y�����i���Z�5��<p�-H��}�_*��g�x>֥�k�[�����������/�Z���ed��g�c��WdHg����"�^��nX�t҈Q�'����U+����S�3��~Ry
M�
�����md<�.���$|��N���Gɤ4�����Ș��
"��r�����V^�i��@ʚ����|tq�(�����.6+�V.���#�9�.S�I�_^�I*��>�.5��K������`��/�V@֐��\�s�w]_{R�[�ݱ�ÃI9�x�)�VfQf�h/�.0���v�?�%�x��Z�zYYЏ�}��}�����̠��q�s��E�-��xk2�4ٻFٙoK�a��~O�K�(˛��f��V�=�D  �u)ZU�Q�cw��s��VPD�.�S�:���&�h���V��� ڲSQ`o���D-aɖ���(Lei�=F�ŁE5 r���$�m�nH�K�����R��=Ϥ��9��1��.��45��><�?��m�*�܄,H1"Yb� � 7�yȚ�˴0�ȵo9�DQ��1���u�r�P�_:$:u�q�H��Wp#�kr�Wm��l�խ�������[���5MI=r񻵓7iFv��V�w������O������&斗�r���ps��b�P�pYH��������c��(���9hw�G���{iߋNhяVԀ�zB�����T��F�!�vi,1סr'��*�;�����@��7����������L�8a��F��3�Ƙqc�ù��ƀ�ZQ�vh8�#~^r7I��ХD(���~\ �}ٮ��/3)ӓ��c�d��@�_U�N���+�^*�����I�|�3��({�W�U]�H)�����N[-*y�_���KT�g��1�}H�_Zf'yK�:������.�.0��Ţ�2,�S� Ht���L[S^As;˄�z:�y����5j��mi�Zq/�}��>�����e�ɿ(��0��M���;d	p� g\"�՛�?�]<bmJ�H��v�K�I�|?���<.�g N��>����^r3�r�X�g>Ӫg5�*��J.�#���2�d�i��[�J}��ڑ�Q�,ɵ@�t�澃Y�0YcË��%i�Z��[�NQ'�Q�	]�����"pO)Y�9z�p��&\z��)(����F��Jn��~{|rrIcF���@�"3�����wtp�\:l�R{�i�����X,\�_�
A������z�r+�M������4[{o)���.�=p�t�������������2�������.ʝjdHV�E�+O�ʺ�K��)���<L-���}�p�.fĀ۲\���r��8����}��/.���Y8f�оw�4�DP�ߟ��&x�d�U�<;�	_�h��c?�����d4 �wu4�m9�
�SY:�Va��M�󢲀���_7�>ʢ�KA���>2����O�ܫ��6a�f���.4�U��iUf��p���Ր�=��R$��*V��d�KK?��] h�<��FY\lqK�������t�Ca�N��N+Ҝ/�������_M��4�u5���p�c�^yc�R���u�3�bW�*vLw������)>q�G�dʋ��;�T�*'}��L{����Ds�;�;�,�,~�s�Q$�Z�&J���l�D{'i�U�K[s��.����c#�h��=�
�����{��!֛^.ԣ���W�M��\=^[���ᚥ!�/���W>���Y��Ӏ���H\R[��J2j~�S�	�f�^	bA��M}S�G��R��Q���N��Ʊ`u��o���S�K�.�z�7��WZ�%���]���1��!���D:Lbᜭ�>�߄�5���7�������G�gj=c��_�Xt��L쵘�b�	dQ&N�q����Fx�,;�;�ڒk���.��`	� Cs���#�!5�-"q�%s��m�pK�W�3$���K��+��CX^�?��G��MW$ܐ�m�o1�K��&�9���1�\V8�?��Q�����or��5��<�vs�w�
��S��s�7���Ͻ�7Jwf[�T�[������C�ҭ�=KZ�����]�����_�Z��P����eEk9�`�3ьy�hs�u�#��D88�	�ID�OZ�X���V� �%?E��z�݇a�O�!ԠAZc_�q�(��b7K���a����a�a��`=r���A�5Q��$/5@��(@�Њ1��N��� X�*��~��m��u���tE�c9/�7`Ρ�n+��5���7�E���P��Xf\���*�z�ZF�D������+=����ݝZkL��]��D��KL5c}��s�3��%_��m�t��R�`���oWW|�Z�$f���`���7CXm١���S���C�ik��nw���خ)��#�y������=8�1(}%.u<sܠǧ1�Y�KL�Q��3���W�ADY۳
F�7RW�$�'�{������h�u�u�L1��t������o�)�̶4�S�8>T#]����l�ݥb]�np3��^ط藡�߆�&��j��Ǔ�����+�$X=7n�6Ah�S�E��&t�A��=�ή�q��â@�� MI�PK����LQ6�Z/s670�6҉2��>��AN�8U�ܢaQ|.��D�ê�H6��*��\i\��hR�C���>{H�t�2���5��إ�/��4�1zV����{�����鐟�z�,b�ѱ���Ȣ�	�]�)�CH��TT��[N�\�=OU��D*=�yD���$�>
i�^_s�N�s�'W+��d�n{�Qib�s܋ԯ8�jt����B�G)��^�	�b²��Kn�:o�̀�1�-�ئ^@5[1~}��?f�˿� ݽo<g[L-Z��&��6u�}��{��f�B;��V����5@[R#�"gr���@?C?}D���y�$,���`O�l����[���x��y�6�W�"J �9�b:��ڒ=�_����vQ�|�9+`k���n�f�������KC��r
uL�J<�>���˳=.>�ț-����b���8yv6�ǗS��<]5"���x�d��ϸ�H-60�R�L��X��%����F�Ƽzz�Ǯ̍�F�����됒���V,RX{xN}�9�^^A�!^�u0K��ߊ�1@�ǝj[��N�V�1�Aߘ��.A�T�6��&�I�#�A��ʥ㻌��$��T6�)/-8D�ǖ���>���h���aN̍�.l0{�^�u���7�q]�w��9 Akޭo���+�D
���
�Qge~l�j�PE\�'E`���n�b0K"ds(rv�$q8h���N������n�3j�M��p9R��<�EԲ�Q~*�<0h��cq)�'���&�7zRc�IR�G��&$:�m�����!��w�s��K�4<rXԜY������)��u7�F��'�8�qf-�����-%�i�:�tWӋq&�ޟC�Cʒ�}>��snoNv��s��X�p�����Llp$p�<7p*�;��^�^m���$	0��7�ޚ7��!�m�a��7���o�5�[������)���5��ˆǓXŕ�]���V�vc��ɂ]J�٥�~�/�>�*���ys�goЂ%J<wh��Ei$�n�5 q��{��덶<�z�{���%�k��H��?� ���U�c�:(���B9��&�r��/ڢ{N�j��Rc��8�I����2�C�.�K@��~���`���xj۪I��@z$�� �ěE=�KGp��Q��D~�y�	�u���@�B'��J$�h�����D�HX�۞,�u������l˂�	�њ�_�׏LZ�BCE�g�x�=5���nCd1�to�B����?��_#��2��h�����Q���ir%�J��Έh����I;N�x�S�9OI���h[�e} �^�9�iܵ��*�n2�?�X���9�L��J�0)�+��׬+����̅���� dLN������9�^��m�#�d���so�:d��ѯ�)]�!���;�*>�P _�K�j�� ,W�t ٱ�A�5�j���HņĪ݁�;���� &�&���{h L�@Ʈq��
�qI���OO��z�y�S_&&�D��o5��|��M�v�b*;u��/��k)��<�^Pc7��0�?�]���n��-�B,�����G\M�~v$2\���խ��6��#@k��a4��T�jK>��ـ/�;�{>=�8�MC��9��{(6��a�$��UG5΍���,`E�ɚ����=�{�4E�������݃��܆ ���Q�-�=	4��X]�y��Ca����D�ҵ������>`�\�|�S�G��_���-}y�l�P�-X�}�B����(w�w.��8��! >�|
K,�A�>Tt���O��4��_��|�[�[l���쁳Ϙe�3�$ȑ"2�Lhq�0���r��#=�H�i����8�ߡza����u)�j�g�У�MP���	������c���pɜE�u��Ǘi@�z?�'=�Q,:�_*��2¶�6�~*�i�^�s�*�s���7��a�������If����Q�H�4(�6��s��i�U��7f�D��!r��k���	�[d�|<�v2u����{y4�}U�����4��d��������l�\lX�֩bG�J�f�L����A	�Gw~�K�L��;��H7�h�&���)_�����?���a	+w�n_��}�TyC�<QP����:��g��rq.�>y������0�Z��B��wߍ"c�M�=�ܯL�[-I�M�eI
����i�C��?%����@���]a�%��:Pܖk�$܀�����T����-)/?��jD��
Ml[�_->����p�*�{�G�0ɍ~(�3��r
Q$g��`�R���ե����j��: ��cGp�1��Ev!�S�f��X<id�R��Z?}����(����C���s���8 �o�Q�U/��}����
� �֟�x&�_R`��"�c)>Ǖ�Wh�̗����X����S'|��7=��y��uB��k݆�Nz�7��	[/L��R%���]1��Y����	�\�n�b,��]?�R�ݑ�+w˹�����u��+A6�\k��k*�f�p�p	� Sڴ`�.=Ĥ}�>3b�/B��������=�5���>>AU���nJ�� ���g1�+������̐+M�Eg[�3$��,�����anB ڵ=t��:�ꖚ��Y���e��U���I�W��ܷvʹ���o��;��5�����fv,ĉ�F'{\M��x���6�R7�*�l�B`�FO��di�����Z�*,
g|�A]��
zԥ4����K�D�L��1���!4�A1+6ܳ�-���}�(h.b�!���P��"?��Ϯ⧹�]T����Ig���k�E2��gͬq��R�9�v=��
~g^�T#�5:W�Hx|�f�/?}�ڴ)����,�㚮�Ҷ���^�5$��L~�*���m,ja�ybW��mмj���S��	��2)ʙ�F�q)�m�Lu���;���!{���T� ���\d�9�y��.�V~��tV��(�^����戎����|6Ln��i�F�Y'R��IL�/��gC�g��
UH����t��i�?���Q��a�?(�ܘ��:��c��!�w`J4���v���:��W81bl�mMC.�ra�W����v���3��2K������+��\j-�k��������d$��r2O�Bl[#|�9
);�ܑ�θ{�����ǆ|�����Rj�k��I��̔A�ym!�֧�&\��������Km�Fs�Ľ��g����dh����z�j.���u|$_�uST� �\��N�i7Lb���ka�CؐG�%��dB��w���8��C+1�%����m*�>e����ۣ����DZ&v��֢�c�Ћ����P �q�"�w�OY��E�]��=�{��;7�˳��쿍�Lr��%~Y|�"��C�~0������Ӯ��.�G��5%�w��
c���L��Z�x�I��0~	+�z;��8Z���v�Qye!pK����k"la!��-R(q��WC��u�À����nR/�9��JHe����m-�QDop�|�k�'�S��F ���,�u�V��o�B�S�=�-5R80K9�Cei���������}\��"H�.W���ߝ�F�@�_��o���Iq��a��̆�#
�����ߦ{�9:Ӈ��K���d�U�:�A�pW��bh)�h]M_�{k���;*�U��D����/�� w]���Y�A)T��3��aWap��v�䰺г��Nʧ	R��,��c�����Rv@)K�ft	qT�d@ځ�ǟ�\��·�/형��#��v/C��?:�(88�a���Q[M��װM�CF�j]�D��R-T&��Z[#.]xV��֢�m]���G}_��:�O�Τ�e[��͝Ƴ�A�v�9�.��w�[�J]Ӌ�(�������I�-���5�#d����}�>QFf#+�q68���c,��WrI�9�a4�ߖ�r�mb\�l�9ώ����8�S��A�ѧIw��b�r2���^}��9�L�����C  �U�L愙��J�y"W�h`d�!��e�0N���d�I��U�tF ?�L�ˮ���In0������B#"�n��2��Qv/���)�|M�uгU g+���#��|�S��w��C2���I6,خoqQ	�|糬VQ�'��.)`�	/�:Ձ�e��f60g�sZ����v�#YIZ���D���X�@O��C�����֪l:;E���7*���qm(^��1���[2G,VL�	�U����ػe� ���f.c�� �&��������v����f�� �����[A����!�W��p��p$���r(A���6��{~b@���E�>��C��	0-�5
?�x��*mM!Ye�iy���-_b�rY�uB��Ch����8:�9S���T`3���Q�#�*�i�-�p.o:
�k%�^�gZ!��>�w���.�3�v�'W(c�
�0@'��]`k�g�"��2Qf�'���w?M�!T��)F��n!&h�k��M�<J�N�:9,>ո�M+�<;|ڀ7���.�_$���ޛ(�6�uhB����La�S��^�( e����#"BHW�j)��!��աj^�T�j���׹�|�1z"��M-)�C� �X�H�[�����;�q�z4G�L�S���WT�^�>)~�|�w���hm;_��@�����/��0��yN�����˜����q�D�ۿ�v�G�O�f6��u|T��?\�?���Vk�s9�U��/����#�?SÖ���ʞ��V�6U�:�mbtC�vd)b\w�ҁ��@�M%�f����ѳ3��f��'��9u��_6�5:��4ޘv���������{$��Z��a����6e�Ǎ�Q��Oz�3��#������E�����vTXA�cʭ[��t���1�t�?hz���-:���f��Ɵ��A�!)�E��G�y��_׼L\�����ch5C!� ����4��,te���B���bL口���������6�K���H�{��4�;��Q�nW�~�G���E������(�C�)��G�/wI�:�mo<|y*�����m� ��v4!�7��<�i�� zء\~v_BU���ɫ�C'pKP��	8,�����e�I.����*��Gj�U���j�ٓ��A�q=�_�-?�TB�k���R|?S������!���'mH ��Te�P���i�*r����OJtÓkç tuꮓYе������t��j�6>}��vQ�618g�;u�u��1�9I�I_-�ۣ�� �̟Z<s���8���)�)�����R�U�v'���oAv\L2���]�|/��I(���G���0f<����6�`�Ӓ�upF��jѝ���h�HMD��/�Z���ݶ�C��+�3ȭ��J��	Ό��1��t�1��!i	Xc�x�̆C��P��Ae��o�.�`:�Z��Qе��� �PٓI�@���n���E|���>��{�s��6�*>��x{N^��7 2:�}_%�����9�K@G�* ��4��\&��]���S�|ǈ��2��(�&� �����ٸ
��y�=�M��w��i�K�7,�pE"�0�k큪~� =���Y��جrzq���^�a�g��8�A����� 禍�{z�4%Fn�$q�u�k��N�j�Q���<�#q'׊�F�Уi��b��J �n�M����n��սz�Q��{?f!�=�V�g�h��#2p��${�F��#� 6�������@/�;�E�z���-w���c6�$/=��S1@�S�Gz/�eIG/o��R���d0e
�/��4��g[B�ٓ�m�8�[O%���3��y��VThuo��� ����m5��y;����ܠ�u0K�}-�"iЇ�u:����E���a�V�;y�X?�3
���2idι�C-�T3l�l�K�:WF��b�!uc/{�M���'�Uc�������k�-��������.�LI��"62o%��J�g���<�KC��h\ h�E^�6{X��oZ����U0�Ɯ�~����x�܉�Y������ُ���H[�bG7�z�y���P���g���a�4%p�0R8|�N���^7�ң!�}�̌�� ͻ���5Px���O_�Jn�r3C����^J�I��k����3���RY�4Ї[��ӱ%�Dף0��s�"?*0e��tT�˻#�h+8�#|��\l����+]x�tY�t���_R?V�V�E%�F@�X��q�:�E�[�U7}!�Ҫ��s����.ptɾy�n6��%L���ԧ�M~XV���.��I��͠%�_H�e�n��M
9>�ׯeK:X%8�<����݃B��(ԤgEA�H,.���'B�Wk5� BE\�B�*�9Y��O�N��(57�9}�ݵi� �#���tA�>����(���͹f%,�%�!Υ��%ZS�H�4�F��u�)΍�1��'�W�W�w��z��-6�'�f�7�*�!�_#��id�S�4r;T4Q�^�i�SsZ�+�g�� ��L�S��i<ٳL=���)`��e����Mhi� [VEG��-����m9�I�ޠ#�|/3N���+j�_O�)�CA耹�#&�(�E����?�I�L��/S����a�hu���y�s���w]��䅯2�p�������>1��kp�:�a����`�G���k�Ř���m����wd�:3��Mx��(3�'�Zn2��W�x����{�Z7��l�dtU8���(C�w�V�`.�CE�W9NJʆ�v����"��%��{�X�#�.�5l����=�p��$����!Z��e��NP��,�"l�:Y~D�/.���6%p�N(�40�h�\��yh�����df;�I�� A�����6���R���6#ک'�Hoo^łH�?I���d'�s�W��p�k����Q����L^7V\�y{Ю��K��8�-C��a#�R�v؀J�5���OȻ,���}�~Jj��@ł���^�-i)���q��+�bt��ĥ��_kK{�`�8!���`05&���?ވ����R,�4T��8�#�+��#Y�W"��)rN�����x��Ohg���I�H������;u�aчw
�|C_��o�1h�>�^%���F��Q�X����%z�~���nM*��-:��MO��^����Q�S�������}�>��*�"�����#6t��{rI�L�f9��t 8��B� �u���_���5z����l���a�u�Pc�����Q3}Ɨ����4��6�񈡯����6q���1 ,yh�dl��1Vn�n��B�E��L�7�ytܳ_�۳q	�-���ݲA�4���%�e�ќN����l�~˴w��b�˙�ue���.�4��]�]��pMٞ�����%�&��Щ�]w�R9?/꽠��+>�Z��t���ģ=��������3nS��� ڞx!�b��5����V����s~p��Y����7� #��e��R[CR���.��\��7�i� ���|O�He�}v`�>S�j9�!�t�����@���L6Ì�i�e��l&��S����󔜔zi� `���i�C�MJ�F�����Z2��G#�H��_Y��kI��� ;Yr���c�O�k��'�T��vp���;P���jCxRÕ�e9{�Ռ����UTMɵ]�H�ʥ�3�Z�����j��HP.F���!�Ȧ�z��2b�%T]�Q��WZ�E؎�-��fK��pJ=���7��� w5JC`�TU�o�xr����j��U>����#'�f*�ơ߿��>�����1�J]jMt+��Y�̔��� �&j�o�0[�.kn�%;�fb�@���1�>��i�4�̈́#��-S5>)MA-q�,5q�f��y����OܞRR��K �3J��t#���vD����h�1���X�ڮy���H����˽����'ȣ/Kh�_�0=)x9/�%����j�J��x��1]\�`�q��Ƒ�#�Q�N;T2���=���Jy;��ʟ���m���έ��q9��Rg�fM�X#��S�����a�^/�~�A/aƅ�1�uc[RĎ�@����x1����:T�ޏCU���Ԛ��+H"�
�RCț�ctr�ֽ�q�<$vK��D� �?wNM�y��ذ��+�$^�oa��$��ɕi={�z�mr_���\���ߺۃu�K�����)� �_4�-Q,�խk��Ι3s.PnaQ��҄^���OYr��� AG̬�0p�6?_q���H+4j�h���FE�2eY�)t�ӃF{3�Ѡmw�ۀ]P��y�^Zk�C�7���q�?/�����e-��j2�g�
\��a�Tx��U��B-B����rsjM&j��8�M�/��;��r��d��2>��,ƈڪG�cfB7?�B�7��/2;S��";�� 2��#Lv��(�{�od�ǋ�Hu�"(%$��E�.
���]j������DH�OL�V�̃�H;8]�㐤��I�ui�
>QeX���d�ײ]�(}�@jqn�������v?��$:��ߪ�A�t�Ӎ�%�z��7:�Ч%�k��ER�����r���X	��!R�p�3S��W�}z�ֲj(��{���r~��� ԅ�ᓔ�֑�k'����Oy��5~���,��DXOʺr����j˼0o*`��-E>��_���MX������r�0�	iM\�&�":9�H������5[n$sK��]鋅�1�:�l���F�aݗ����"M����n/�+���G����/��:/����g'���1��ӷ9�6����H����an��{S� ��QC�W�� G��Zڤ�R���c��@�D�� Ƒb$��}ͱ��H݇}R���Kޛ�f�.�An�ی�[���5��.L�6��2m�eP9b[J����D	�3	��Ss_mC��C�7{v`G.,����Q` C�'��H�ް#r_�� �ɰq��Ld�cZYu��7�1βy���	��&�-�, �ؾ&��oV��^&�K���B�d,�oF�v,�=v�Ŝ�u@����Mv�D`\��s2��ڣ��φ�bQ�y�w��|��=�^s�&��v2��@x�j��0p��S��~;S���#�.���U�S�)4�4�`�&ї�8�@�����9!���D*��m̱%����`�_�&^�7?��>]-.���~�`43�>�T�}n��rG6����(���ҭx�{����W���<y�П��*��!����)p�!ȇ̝3�Ϋ���:�� AJ�����4̼�4_��Hw�{��f�χ�rW��A��e�ŸQ�������犛P�����葷�FX+���aM�(`��t��MT���.�1��zS�J�Mx	�?�d�GKy��l�>m؎����f��R1Y�FZ����h��/DT�Aq�R��Y<���GXh��Y���	�CM�'-�g�=!�/�ӌC�[57��K�Mr�={��K��a+��s����)��92�k��?���{�j^w�8�IvYV�^��j�n�g�),^�*kz��[4���[1�u�I�J�9/�}N5��	NP"J�G�o�"�kVL��j��� � ��g��a(�����l"���Gql·�¶_���7߱�:�a�
1p9�>������7�����4h3����Weg�w?~�g���L����Lۇ���'L�<غ/��� o��>0^^���j`��^[��;�Vd������/�z/���ɖ��iPx|�&�u�4���s�pǤ������H���<c0��<� 5����·�������^�$����L֗X��_q8"j2�Rﴼ��ll63��)����F� #�i'�b�ػB��k�ek*�}F�"�W�.�/*�y�-�;����#�lg�l�Y���D㎶���['��3y�E�Z��Y��DrL$0#1�rGhǓc.���i�<��
�N��ʡ� �9��hn�;�m゙(Nq�����ٟ�L|��z�i }BÛR�*r�7}�t�W��n�N�ĨAO#��L������}��D> \f��:^w����|���������;����X�鈯B�pzc�K�\+�ib��5swO�}:�&\+�gHW ��A3���r�6l8Y|�j:�C	�x���Lyî�Mf��[<�1^dR�Qu�y����X��[_A�X5h��*=��u��t��Q6b�ዦI��F.�W��d�c*�(�HX�t��(��$��;Q���X<��ñ������^.[Z�±��K_
��Ym�o����L���d��[��X�l?�g��}9wߙ2P�o�qѲ������1�\=ܯ�;
bWT c�a&�N���Y�%w<�r��MU�e��,Gn}����mqbE�s�G?���5u��&沍y��|ٵ����%�v��ٜ�&������eS����e���{p��WOd���WD�8���R�6�]��1�LKb�M`R��&�`��%C�@��E���\�.)�M���/E3�����Ԩ��B@�ۭ"r2��:S�$�\J1a=��·��z�d����e��q�]0E�:��E��LJ/ �7����y�����*�ܓ-%���ɫQ�������2�T;�POL+;���kd}$�}��{��WD/jr8��(������g��#�I�g|�7^ga��$Z��������Ch}C2?�W�P��˿k��^��;�z+��X=7
mE���ƘF��Ƃ��}��Y�ɂ��<���	Ri�A�R��;�T�����jvSW��N@҈G���Nյ�wm�#����:��ղ�,Z�8��fܕf���MwR)&mB1��x@���>�C����B�|^}p'�p� pV�c��O�{��F�����VH�=��T���E����q�'#�ku؋S�vw�p�k��3C�Z��"���ا}ͽ56�xPL���s�*� .��lZ���
·��1�T��b��0r��Z���|��y�����}�~;�Ԏ|������G$�Q�FOW�ù���x���b+���a���#>�Т�Y��O�6m��X͖r;�A"�R��m�x<"n��bqj|?�T�G��Ϊ�gX�;V�0h�)|	�_��d�>��/���w(��
��m���(|X"���R<4�@h��k�b[�N���0V�.t#�ND�bW��:x˧7]Ȃ�}��I3�ـ�GO^lJ�>D��Q�t�ܕ^r�x�7sf��b���3{�b�b���!��t������iQ�5��H��k�� ���"I������w'�޶�Tt������Ǖ��>�snP�������ފ�5�!�n��`7���w�Q��8vqjpg?~K�Hr;�F#��a\۱�
� j��G�^�Z��+��L�$엦|f����r����>��s����{���ˎ�ȚBl��*7%_�N'���B8��F��HG�h��������+��m����O�h����1����KR�����巆�ޛ��[dm��������.W n�R:��t!vd��J�I�d$�L�o���G�]�4�v^%���x�=E�bRy-��R �|L�sL�g8Lq��SR-I��V�Vz��x�^D�{��b\�SH��:eix2���W��D�< �-{����?cN�	��a#�1�����t)�f���-h�QS����<:h!QÌ=Xl�v�\��?�O��G߹��5+L������������٩L:Q��15��{:^o�XB���X��:+� ��C���y���X?2��?��S�<5o�t{�S{HzX��-d�֞��jHpnȏ����M���͑��5R/��sZC�$V��H��n��]}@۱���%M[��{c����' ��ݏ
:��ی�x?b	CS���_����-��#g��y�?�*]�J�1�#��I�+��){v@Ԩ�V�"�m���!�Z��<�.V���)��Crl����ݛ%�p�=���G�+�M�dZ��Ӌ��c�b3j�w��Љ�-�t��<�bR����շ�\�� W˕
Qs��
ŧ
�˯���C�?���눣�c����m���ۄ%�`f/*�ư��t�A�� ��U$j7��Gr��v=��
�����]BQ3�h��H��]���!�fz�}�׷��H����U]$^���\0�y�*����^�S� .�(Ꭱ�3u)7Z��8ʛ�(_w�%ȣ�n�PI(K]`bJ�\�ư�4�`~�<Y�F
4p�R]��+�b���9c5av���rH*)�����9�����A��rF�k���X ���+d��/���(�hA��[��u� ��M��0�}͉���1D~��=4G�U�6��5U	�Mt��OS3�E�%F,��^�mޙ��W��I�M.!?�3ȵ1���=�u<p~'�.����^��&C����!#)�/�'z�����j!.V���hh�S��G~�I�#���<k�?;��C�#�1�u����7��#�a�(�
p|'N����U*3��-k��#{~�Ҍ���5�{Yt�*�k}3���9'8�>,���e�̘���#k�5��,���6f'���x䳋��8NK%/vfqD<hK���-�+ܾ3�x��R��򲳽�! �L�ϣ�(��~�2�uƎIha�O����Oሬ�%{�r$T�4�{���G�I,�F6��Պ�H#(�Hn�[[�%-��� U��I��m+?"ޅ�k�ڿ�X^�j�T���<Dd�M>���Xb��Z����׵��=*���*]
1V���Ȫ��#������5*��4�nWvi]R=���LC�ܒ�ָ���^���5�x��P���T�$������s[_���H��g��:4���ws����M&l�6Ux�Y�Iը���\.�a���(8l�B0Hh0�ǡ����^��S,w��*�7��ȳ�}�"읻��
g}	}�#g�,������ў��f�H�'��sq�	m��L��E���~M�t��@�V�U·s���NעM6�����*jk(m[��w%���Q��4m�4�f,����/G��
xX.���~`�/��1^̔�� ��<����Ў����̦�|�U4�>�l'�J,�٣�u�����Џ�=��E���0`���i�p�p�<}}�vK�^JmI�U�������«vO��-^(D
0F zi�_E���Fv�sҀ�E	�u~��O�i���|);��h*� �
GӢF�1۟�7{�x�;F�M�{��l,�;ɤ��.�$vU�lZ�i��+� M�����Oo���v�moӾ���G�����=Q̍���t�{2�dqޛ��Ί0u3o��i�
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
/*
* jQuery Form Plugin; v20130711
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=n,l&&l.call(this,e,t)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(D),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",d),u||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(k)},m.timeout));var o=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(e.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(w)[0]));m.iframeTarget||(v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1)),setTimeout(t,15);try{w.submit()}catch(c){var p=document.createElement("form").submit;p.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=D),t===k&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==D&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var l=(m.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(c){var d=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];d?x.responseText=d.textContent?d.textContent:d.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==l&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{L=_(x,l,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,L,"success",x),S.resolve(x.responseText,"success",x),p&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),p&&e.event.trigger("ajaxError",[x,m,r])),p&&e.event.trigger("ajaxComplete",[x,m]),p&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget||v.remove(),x.responseXML=null},100)}}}var l,c,m,p,d,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(r)for(c=0;h.length>c;c++)l=e(h[c]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,d="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?d=y:v.attr2("name",d)):(v=e('<iframe name="'+d+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),p&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},p=m.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var k=1,D=2,A=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&A&&(m.extraData=m.extraData||{},m.extraData[E]=A),m.forceSync?o():setTimeout(o,10);var L,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var d,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,d=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,p);d&&(g=g?g+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e('input[type=file]:enabled[value!=""]',this),w=j.length>0,S="multipart/form-data",k=f.attr("enctype")==S||f.attr("encoding")==S,D=n.fileapi&&n.formdata;a("fileAPI :"+D);var A,E=(w||k)&&!D;t.iframe!==!1&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||k)&&D?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var L=0;h.length>L;L++)h[L]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,l,c,f,m,p;for(s=0,m=o.length;m>s;s++)if(f=o[s],l=f.name,l&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:l,value:e(f).val(),type:f.type}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}));else if(c=e.fieldValue(f,!0),c&&c.constructor==Array)for(r&&r.push(f),u=0,p=c.length;p>u;u++)a.push({name:l,value:c[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var d=f.files;if(d.length)for(u=0;d.length>u;u++)a.push({name:l,value:d[u],type:f.type});else a.push({name:l,value:"",type:f.type})}else null!==c&&c!==void 0&&(r&&r.push(f),a.push({name:l,value:c,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];l=v.name,l&&!v.disabled&&"image"==v.type&&(a.push({name:l,value:h.val()}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var p=m.value;if(p||(p=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1})(jQuery);
/*! jQuery Validation Plugin - v1.12.0 - 4/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=d.attr("type");return"radio"===e||"checkbox"===e?a("input[name='"+d.attr("name")+"']:checked").val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c[0].toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},errorsFor:function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c[0].toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(a){var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})}(jQuery),function(a){a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.6.3.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */
(function($){function Countdown(){this.regional=[];this.regional['']={labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};this._defaults={until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1};$.extend(this._defaults,this.regional['']);this._serverSyncs=[];var c=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var d=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(d?(performance.now()+performance.timing.navigationStart):c()):a||c());if(b-f>=1000){x._updateTargets();f=b}e(timerCallBack)}var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var f=0;if(!e||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){x._updateTargets()},980)}else{f=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||c();e(timerCallBack)}}var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.extend(Countdown.prototype,{markerClassName:'hasCountdown',propertyName:'countdown',_rtlClass:'countdown_rtl',_sectionClass:'countdown_section',_amountClass:'countdown_amount',_rowClass:'countdown_row',_holdingClass:'countdown_holding',_showClass:'countdown_show',_descrClass:'countdown_descr',_timerTargets:[],setDefaults:function(a){this._resetExtraLabels(this._defaults,a);$.extend(this._defaults,a||{})},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},_attachPlugin:function(a,b){a=$(a);if(a.hasClass(this.markerClassName)){return}var c={options:$.extend({},this._defaults),_periods:[0,0,0,0,0,0,0]};a.addClass(this.markerClassName).data(this.propertyName,c);this._optionPlugin(a,b)},_addTarget:function(a){if(!this._hasTarget(a)){this._timerTargets.push(a)}},_hasTarget:function(a){return($.inArray(a,this._timerTargets)>-1)},_removeTarget:function(b){this._timerTargets=$.map(this._timerTargets,function(a){return(a==b?null:a)})},_updateTargets:function(){for(var i=this._timerTargets.length-1;i>=0;i--){this._updateCountdown(this._timerTargets[i])}},_optionPlugin:function(a,b,c){a=$(a);var d=a.data(this.propertyName);if(!b||(typeof b=='string'&&c==null)){var e=b;b=(d||{}).options;return(b&&e?b[e]:b)}if(!a.hasClass(this.markerClassName)){return}b=b||{};if(typeof b=='string'){var e=b;b={};b[e]=c}if(b.layout){b.layout=b.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(d.options,b);var f=(d.options.timezone!=b.timezone);$.extend(d.options,b);this._adjustSettings(a,d,b.until!=null||b.since!=null||f);var g=new Date();if((d._since&&d._since<g)||(d._until&&d._until>g)){this._addTarget(a[0])}this._updateCountdown(a,d)},_updateCountdown:function(a,b){var c=$(a);b=b||c.data(this.propertyName);if(!b){return}c.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var d=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(d)%b.options.tickInterval==0){b.options.onTick.apply(a,[d])}}var e=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(e&&!b._expiring){b._expiring=true;if(this._hasTarget(a)||b.options.alwaysExpire){this._removeTarget(a);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a,[])}if(b.options.expiryText){var f=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a,b);b.options.layout=f}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeTarget(a)}c.data(this.propertyName,b)},_resetExtraLabels:function(a,b){var c=false;for(var n in b){if(n!='whichLabels'&&n.match(/[Ll]abels/)){c=true;break}}if(c){for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=null}}}},_adjustSettings:function(a,b,c){var d;var e=0;var f=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){f=this._serverSyncs[i][1];break}}if(f!=null){e=(b.options.serverSync?f:0);d=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a,[]):null);d=new Date();e=(g?d.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-d.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,d));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_destroyPlugin:function(a){a=$(a);if(!a.hasClass(this.markerClassName)){return}this._removeTarget(a[0]);a.removeClass(this.markerClassName).empty().removeData(this.propertyName)},_pausePlugin:function(a){this._hold(a,'pause')},_lapPlugin:function(a){this._hold(a,'lap')},_resumePlugin:function(a){this._hold(a,null)},_hold:function(a,b){var c=$.data(a,this.propertyName);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addTarget(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.propertyName,c);this._updateCountdown(a,c)}},_getTimesPlugin:function(a){var b=$.data(a,this.propertyName);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var n=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,x._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,x._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var o=(k==null?l:(typeof k=='string'?n(k):(typeof k=='number'?m(k):k)));if(o)o.setMilliseconds(0);return o},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+x._sectionClass+'">'+'<span class="'+x._amountClass+'">'+d._translateDigits(c,c._periods[a])+'</span>'+(b?b[a]:k[a])+'</span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+n(Y)+n(O)+n(W)+n(D)+n(H)+n(M)+n(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=x._getDaysInMonth(f.getFullYear(),f.getMonth());var j=x._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=x._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}});var w=['getTimes'];function isNotChained(a,b){if(a=='option'&&(b.length==0||(b.length==1&&typeof b[0]=='string'))){return true}return $.inArray(a,w)>-1}$.fn.countdown=function(a){var b=Array.prototype.slice.call(arguments,1);if(isNotChained(a,b)){return x['_'+a+'Plugin'].apply(x,[this[0]].concat(b))}return this.each(function(){if(typeof a=='string'){if(!x['_'+a+'Plugin']){throw'Unknown command: '+a;}x['_'+a+'Plugin'].apply(x,[this].concat(b))}else{x._attachPlugin(this,a||{})}})};var x=$.countdown=new Countdown()})(jQuery);
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));
/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();
// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

(function(){
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 300, // [px]
    stepSize         : 120, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : false,
    pulseScale       : 8,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 8,  // 20
    accelerationMax   : 8,   // 1

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,     // [px]

    // Other
    touchpadSupport   : true,
    fixedBackground   : true, 
    excluded          : ""    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var deltaBuffer = [ 120, 120, 120 ];

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };


/***********************************************
 * SETTINGS
 ***********************************************/

var options = defaultOptions;


/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {

    var disableKeyboard = false; 
    
    // disable keyboard support if anything above requested it
    if (disableKeyboard) {
        removeEvent("keydown", keydown);
    }

    if (options.keyboardSupport && !disableKeyboard) {
        addEvent("keydown", keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (!document.body) return;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();
    initDone = true;

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        // DOMChange (throttle): fix height
        var pending = false;
        var refresh = function () {
            if (!pending && html.scrollHeight != document.height) {
                pending = true; // add a new pending action
                setTimeout(function () {
                    html.style.height = document.height + 'px';
                    pending = false;
                }, 500); // act rarely to stay fast
            }
        };
        html.style.height = 'auto';
        setTimeout(refresh, 10);

        // clearfix
        if (root.offsetHeight <= windowHeight) {
            var underlay = document.createElement("div");   
            underlay.style.clear = "both";
            body.appendChild(underlay);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = "scroll";
        html.style.backgroundAttachment = "scroll";
    }
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = +new Date;

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top, delay) {
    
    delay || (delay = 1000);
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = +new Date;
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (30 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = +new Date;
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: +new Date
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollWindow = (elem === document.body);
    
    var step = function (time) {
        
        var now = +new Date;
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (delay / options.frameRate + 1)); 
        } else { 
            pending = false;
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;
    var overflowing = overflowingAncestor(target);
    
    // use default if there's no overflowing
    // element or default action is prevented    
    if (!overflowing || event.defaultPrevented ||
        isNodeName(activeElement, "embed") ||
       (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
        return true;
    }

    var deltaX = event.wheelDeltaX || 0;
    var deltaY = event.wheelDeltaY || 0;
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = event.wheelDelta || 0;
    }

    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, -deltaX, -deltaY);
    event.preventDefault();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    if ( /input|textarea|select|embed/i.test(target.nodeName) ||
         target.isContentEditable || 
         event.defaultPrevented   ||
         modifier ) {
      return true;
    }
    // spacebar should trigger button press
    if (isNodeName(target, "button") &&
        event.keyCode === key.spacebar) {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt+10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/
 
var cache = {}; // cleared out every once in while
setInterval(function () { cache = {}; }, 10 * 1000);

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function overflowingAncestor(el) {
    var elems = [];
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                return setCache(elems, document.body); // scrolling root in WebKit
            }
        } else if (el.clientHeight + 10 < el.scrollHeight) {
            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
                return setCache(elems, el);
            }
        }
    } while (el = el.parentNode);
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, bubble) {
    window.addEventListener(type, fn, (bubble||false));
}

function removeEvent(type, fn, bubble) {
    window.removeEventListener(type, fn, (bubble||false));  
}

function isNodeName(el, tag) {
    return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

var deltaBufferTimer;

function isTouchpad(deltaY) {
    if (!deltaY) return;
    deltaY = Math.abs(deltaY)
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                        isDivisible(deltaBuffer[1], 120) &&
                        isDivisible(deltaBuffer[2], 120));
    return !allDivisable;
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

var requestFrame = (function () {
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              function (callback, element, delay) {
                  window.setTimeout(callback, delay || (1000/60));
              };
})();


/***********************************************
 * PULSE
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}

var isChrome = /chrome/i.test(window.navigator.userAgent);
var wheelEvent = null;
if ("onwheel" in document.createElement("div"))
    wheelEvent = "wheel";
else if ("onmousewheel" in document.createElement("div"))
    wheelEvent = "mousewheel";

if (wheelEvent && isChrome) {
    addEvent(wheelEvent, wheel);
    addEvent("mousedown", mousedown);
    addEvent("load", init);
}

})();
/*
 *	jQuery OwlCarousel v1.31
 *  
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel
 *
 *	Licensed under MIT
 *
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(B 3i.3E!=="9"){3i.3E=9(e){9 t(){}t.5v=e;q 5c t}}(9(e,t,n,r){b i={1J:9(t,n){b r=d;r.$k=e(n);r.6=e.3K({},e.3A.2c.6,r.$k.w(),t);r.29=t;r.3U()},3U:9(){b t=d;7(B t.6.2M==="9"){t.6.2M.P(d,[t.$k])}7(B t.6.2I==="2F"){b n=t.6.2I;9 r(e){7(B t.6.3F==="9"){t.6.3F.P(d,[e])}m{b n="";1C(b r 2f e["h"]){n+=e["h"][r]["1K"]}t.$k.2h(n)}t.2Y()}e.5G(n,r)}m{t.2Y()}},2Y:9(e){b t=d;t.$k.w("h-4p",t.$k.2s("2t")).w("h-4K",t.$k.2s("J"));t.$k.A({2z:0});t.2A=t.6.v;t.4L();t.5R=0;t.1M;t.1P()},1P:9(){b e=d;7(e.$k.1S().S===0){q c}e.1O();e.3H();e.$X=e.$k.1S();e.G=e.$X.S;e.4M();e.$I=e.$k.16(".h-1K");e.$L=e.$k.16(".h-1h");e.2H="Y";e.15=0;e.1W=[0];e.p=0;e.4I();e.4G()},4G:9(){b e=d;e.2V();e.31();e.4D();e.35();e.4C();e.4A();e.2x();e.4z();7(e.6.2w!==c){e.4w(e.6.2w)}7(e.6.Q===j){e.6.Q=5i}e.1e();e.$k.16(".h-1h").A("4v","4r");7(!e.$k.2p(":33")){e.34()}m{e.$k.A("2z",1)}e.56=c;e.2o();7(B e.6.39==="9"){e.6.39.P(d,[e.$k])}},2o:9(){b e=d;7(e.6.1I===j){e.1I()}7(e.6.1A===j){e.1A()}e.4n();7(B e.6.3n==="9"){e.6.3n.P(d,[e.$k])}},3o:9(){b e=d;7(B e.6.3p==="9"){e.6.3p.P(d,[e.$k])}e.34();e.2V();e.31();e.4m();e.35();e.2o();7(B e.6.3t==="9"){e.6.3t.P(d,[e.$k])}},4i:9(e){b t=d;19(9(){t.3o()},0)},34:9(){b e=d;7(e.$k.2p(":33")===c){e.$k.A({2z:0});18(e.1r);18(e.1M)}m{q c}e.1M=4g(9(){7(e.$k.2p(":33")){e.4i();e.$k.4f({2z:1},2J);18(e.1M)}},5O)},4M:9(){b e=d;e.$X.5N(\'<M J="h-1h">\').3G(\'<M J="h-1K"></M>\');e.$k.16(".h-1h").3G(\'<M J="h-1h-4d">\');e.1U=e.$k.16(".h-1h-4d");e.$k.A("4v","4r")},1O:9(){b e=d;b t=e.$k.1V(e.6.1O);b n=e.$k.1V(e.6.28);7(!t){e.$k.K(e.6.1O)}7(!n){e.$k.K(e.6.28)}},2V:9(){b t=d;7(t.6.2Z===c){q c}7(t.6.4b===j){t.6.v=t.2A=1;t.6.17=c;t.6.1q=c;t.6.21=c;t.6.24=c;t.6.25=c;t.6.26=c;q c}b n=e(t.6.4a).1m();7(n>(t.6.1q[0]||t.2A)){t.6.v=t.2A}7(B t.6.17!=="3b"&&t.6.17!==c){t.6.17.5x(9(e,t){q e[0]-t[0]});1C(b r 2f t.6.17){7(B t.6.17[r]!=="3b"&&t.6.17[r][0]<=n){t.6.v=t.6.17[r][1]}}}m{7(n<=t.6.1q[0]&&t.6.1q!==c){t.6.v=t.6.1q[1]}7(n<=t.6.21[0]&&t.6.21!==c){t.6.v=t.6.21[1]}7(n<=t.6.24[0]&&t.6.24!==c){t.6.v=t.6.24[1]}7(n<=t.6.25[0]&&t.6.25!==c){t.6.v=t.6.25[1]}7(n<=t.6.26[0]&&t.6.26!==c){t.6.v=t.6.26[1]}}7(t.6.v>t.G&&t.6.49===j){t.6.v=t.G}},4C:9(){b n=d,r;7(n.6.2Z!==j){q c}b i=e(t).1m();n.3f=9(){7(e(t).1m()!==i){7(n.6.Q!==c){18(n.1r)}5o(r);r=19(9(){i=e(t).1m();n.3o()},n.6.48)}};e(t).47(n.3f)},4m:9(){b e=d;e.2j(e.p);7(e.6.Q!==c){e.3l()}},46:9(){b t=d;b n=0;b r=t.G-t.6.v;t.$I.2i(9(i){b s=e(d);s.A({1m:t.N}).w("h-1K",3q(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-1L",n)})},45:9(){b e=d;b t=0;b t=e.$I.S*e.N;e.$L.A({1m:t*2,V:0});e.46()},31:9(){b e=d;e.44();e.45();e.43();e.3x()},44:9(){b e=d;e.N=1N.5a(e.$k.1m()/e.6.v)},3x:9(){b e=d;b t=(e.G*e.N-e.6.v*e.N)*-1;7(e.6.v>e.G){e.C=0;t=0;e.3D=0}m{e.C=e.G-e.6.v;e.3D=t}q t},42:9(){q 0},43:9(){b t=d;t.H=[0];t.2C=[];b n=0;b r=0;1C(b i=0;i<t.G;i++){r+=t.N;t.H.2D(-r);7(t.6.14===j){b s=e(t.$I[i]);b o=s.w("h-1L");7(o!==n){t.2C[n]=t.H[i];n=o}}}},4D:9(){b t=d;7(t.6.2b===j||t.6.1s===j){t.D=e(\'<M J="h-4R"/>\').4Q("4P",!t.F.13).5E(t.$k)}7(t.6.1s===j){t.3Z()}7(t.6.2b===j){t.3Y()}},3Y:9(){b t=d;b n=e(\'<M J="h-5h"/>\');t.D.1k(n);t.1w=e("<M/>",{"J":"h-1l",2h:t.6.2T[0]||""});t.1y=e("<M/>",{"J":"h-Y",2h:t.6.2T[1]||""});n.1k(t.1w).1k(t.1y);n.z("2W.D 1Z.D",\'M[J^="h"]\',9(e){e.1n()});n.z("2a.D 2n.D",\'M[J^="h"]\',9(n){n.1n();7(e(d).1V("h-Y")){t.Y()}m{t.1l()}})},3Z:9(){b t=d;t.1o=e(\'<M J="h-1s"/>\');t.D.1k(t.1o);t.1o.z("2a.D 2n.D",".h-1p",9(n){n.1n();7(3q(e(d).w("h-1p"))!==t.p){t.1i(3q(e(d).w("h-1p")),j)}})},3T:9(){b t=d;7(t.6.1s===c){q c}t.1o.2h("");b n=0;b r=t.G-t.G%t.6.v;1C(b i=0;i<t.G;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.G-t.6.v}b o=e("<M/>",{"J":"h-1p"});b u=e("<3Q></3Q>",{54:t.6.38===j?n:"","J":t.6.38===j?"h-5l":""});o.1k(u);o.w("h-1p",r===i?s:i);o.w("h-1L",n);t.1o.1k(o)}}t.3a()},3a:9(){b t=d;7(t.6.1s===c){q c}t.1o.16(".h-1p").2i(9(n,r){7(e(d).w("h-1L")===e(t.$I[t.p]).w("h-1L")){t.1o.16(".h-1p").Z("2d");e(d).K("2d")}})},3d:9(){b e=d;7(e.6.2b===c){q c}7(e.6.2e===c){7(e.p===0&&e.C===0){e.1w.K("1b");e.1y.K("1b")}m 7(e.p===0&&e.C!==0){e.1w.K("1b");e.1y.Z("1b")}m 7(e.p===e.C){e.1w.Z("1b");e.1y.K("1b")}m 7(e.p!==0&&e.p!==e.C){e.1w.Z("1b");e.1y.Z("1b")}}},35:9(){b e=d;e.3T();e.3d();7(e.D){7(e.6.v>=e.G){e.D.3N()}m{e.D.3L()}}},5g:9(){b e=d;7(e.D){e.D.3j()}},Y:9(e){b t=d;7(t.1G){q c}t.p+=t.6.14===j?t.6.v:1;7(t.p>t.C+(t.6.14==j?t.6.v-1:0)){7(t.6.2e===j){t.p=0;e="2k"}m{t.p=t.C;q c}}t.1i(t.p,e)},1l:9(e){b t=d;7(t.1G){q c}7(t.6.14===j&&t.p>0&&t.p<t.6.v){t.p=0}m{t.p-=t.6.14===j?t.6.v:1}7(t.p<0){7(t.6.2e===j){t.p=t.C;e="2k"}m{t.p=0;q c}}t.1i(t.p,e)},1i:9(e,t,n){b r=d;7(r.1G){q c}7(B r.6.1F==="9"){r.6.1F.P(d,[r.$k])}7(e>=r.C){e=r.C}m 7(e<=0){e=0}r.p=r.h.p=e;7(r.6.2w!==c&&n!=="4e"&&r.6.v===1&&r.F.1u===j){r.1B(0);7(r.F.1u===j){r.1H(r.H[e])}m{r.1x(r.H[e],1)}r.2q();r.4k();q c}b i=r.H[e];7(r.F.1u===j){r.1T=c;7(t===j){r.1B("1D");19(9(){r.1T=j},r.6.1D)}m 7(t==="2k"){r.1B(r.6.2u);19(9(){r.1T=j},r.6.2u)}m{r.1B("1j");19(9(){r.1T=j},r.6.1j)}r.1H(i)}m{7(t===j){r.1x(i,r.6.1D)}m 7(t==="2k"){r.1x(i,r.6.2u)}m{r.1x(i,r.6.1j)}}r.2q()},2j:9(e){b t=d;7(B t.6.1F==="9"){t.6.1F.P(d,[t.$k])}7(e>=t.C||e===-1){e=t.C}m 7(e<=0){e=0}t.1B(0);7(t.F.1u===j){t.1H(t.H[e])}m{t.1x(t.H[e],1)}t.p=t.h.p=e;t.2q()},2q:9(){b e=d;e.1W.2D(e.p);e.15=e.h.15=e.1W[e.1W.S-2];e.1W.55(0);7(e.15!==e.p){e.3a();e.3d();e.2o();7(e.6.Q!==c){e.3l()}}7(B e.6.3z==="9"&&e.15!==e.p){e.6.3z.P(d,[e.$k])}},W:9(){b e=d;e.3k="W";18(e.1r)},3l:9(){b e=d;7(e.3k!=="W"){e.1e()}},1e:9(){b e=d;e.3k="1e";7(e.6.Q===c){q c}18(e.1r);e.1r=4g(9(){e.Y(j)},e.6.Q)},1B:9(e){b t=d;7(e==="1j"){t.$L.A(t.2y(t.6.1j))}m 7(e==="1D"){t.$L.A(t.2y(t.6.1D))}m 7(B e!=="2F"){t.$L.A(t.2y(e))}},2y:9(e){b t=d;q{"-1R-1a":"2B "+e+"1z 2r","-27-1a":"2B "+e+"1z 2r","-o-1a":"2B "+e+"1z 2r",1a:"2B "+e+"1z 2r"}},3I:9(){q{"-1R-1a":"","-27-1a":"","-o-1a":"",1a:""}},3J:9(e){q{"-1R-O":"1g("+e+"T, E, E)","-27-O":"1g("+e+"T, E, E)","-o-O":"1g("+e+"T, E, E)","-1z-O":"1g("+e+"T, E, E)",O:"1g("+e+"T, E,E)"}},1H:9(e){b t=d;t.$L.A(t.3J(e))},3M:9(e){b t=d;t.$L.A({V:e})},1x:9(e,t){b n=d;n.2g=c;n.$L.W(j,j).4f({V:e},{59:t||n.6.1j,3O:9(){n.2g=j}})},4L:9(){b e=d;b r="1g(E, E, E)",i=n.5f("M");i.2t.3P="  -27-O:"+r+"; -1z-O:"+r+"; -o-O:"+r+"; -1R-O:"+r+"; O:"+r;b s=/1g\\(E, E, E\\)/g,o=i.2t.3P.5k(s),u=o!==1d&&o.S===1;b a="5z"2f t||5C.4U;e.F={1u:u,13:a}},4A:9(){b e=d;7(e.6.22!==c||e.6.23!==c){e.3R();e.3S()}},3H:9(){b e=d;b t=["s","e","x"];e.12={};7(e.6.22===j&&e.6.23===j){t=["2W.h 1Z.h","2P.h 3V.h","2a.h 3W.h 2n.h"]}m 7(e.6.22===c&&e.6.23===j){t=["2W.h","2P.h","2a.h 3W.h"]}m 7(e.6.22===j&&e.6.23===c){t=["1Z.h","3V.h","2n.h"]}e.12["3X"]=t[0];e.12["2O"]=t[1];e.12["2N"]=t[2]},3S:9(){b t=d;t.$k.z("5A.h",9(e){e.1n()});t.$k.z("1Z.40",9(t){q e(t.1f).2p("5F, 5H, 5Q, 5S")})},3R:9(){9 o(e){7(e.2L){q{x:e.2L[0].2K,y:e.2L[0].41}}m{7(e.2K!==r){q{x:e.2K,y:e.41}}m{q{x:e.52,y:e.53}}}}9 u(t){7(t==="z"){e(n).z(i.12["2O"],f);e(n).z(i.12["2N"],l)}m 7(t==="R"){e(n).R(i.12["2O"]);e(n).R(i.12["2N"])}}9 a(n){b n=n.3B||n||t.3w;7(n.5d===3){q c}7(i.G<=i.6.v){q}7(i.2g===c&&!i.6.3v){q c}7(i.1T===c&&!i.6.3v){q c}7(i.6.Q!==c){18(i.1r)}7(i.F.13!==j&&!i.$L.1V("3s")){i.$L.K("3s")}i.11=0;i.U=0;e(d).A(i.3I());b r=e(d).2l();s.3g=r.V;s.3e=o(n).x-r.V;s.3c=o(n).y-r.5y;u("z");s.2m=c;s.30=n.1f||n.4c}9 f(r){b r=r.3B||r||t.3w;i.11=o(r).x-s.3e;i.2S=o(r).y-s.3c;i.U=i.11-s.3g;7(B i.6.2R==="9"&&s.2Q!==j&&i.U!==0){s.2Q=j;i.6.2R.P(i,[i.$k])}7(i.U>8||i.U<-8&&i.F.13===j){r.1n?r.1n():r.5M=c;s.2m=j}7((i.2S>10||i.2S<-10)&&s.2m===c){e(n).R("2P.h")}b u=9(){q i.U/5};b a=9(){q i.3D+i.U/5};i.11=1N.3x(1N.42(i.11,u()),a());7(i.F.1u===j){i.1H(i.11)}m{i.3M(i.11)}}9 l(n){b n=n.3B||n||t.3w;n.1f=n.1f||n.4c;s.2Q=c;7(i.F.13!==j){i.$L.Z("3s")}7(i.U<0){i.1t=i.h.1t="V"}m{i.1t=i.h.1t="2G"}7(i.U!==0){b r=i.4h();i.1i(r,c,"4e");7(s.30===n.1f&&i.F.13!==j){e(n.1f).z("3u.4j",9(t){t.4S();t.4T();t.1n();e(n.1f).R("3u.4j")});b o=e.4O(n.1f,"4V")["3u"];b a=o.4W();o.4X(0,0,a)}}u("R")}b i=d;b s={3e:0,3c:0,4Y:0,3g:0,2l:1d,4Z:1d,50:1d,2m:1d,51:1d,30:1d};i.2g=j;i.$k.z(i.12["3X"],".h-1h",a)},4h:9(){b e=d,t;t=e.4l();7(t>e.C){e.p=e.C;t=e.C}m 7(e.11>=0){t=0;e.p=0}q t},4l:9(){b t=d,n=t.6.14===j?t.2C:t.H,r=t.11,i=1d;e.2i(n,9(s,o){7(r-t.N/20>n[s+1]&&r-t.N/20<o&&t.3m()==="V"){i=o;7(t.6.14===j){t.p=e.4o(i,t.H)}m{t.p=s}}m 7(r+t.N/20<o&&r+t.N/20>(n[s+1]||n[s]-t.N)&&t.3m()==="2G"){7(t.6.14===j){i=n[s+1]||n[n.S-1];t.p=e.4o(i,t.H)}m{i=n[s+1];t.p=s+1}}});q t.p},3m:9(){b e=d,t;7(e.U<0){t="2G";e.2H="Y"}m{t="V";e.2H="1l"}q t},4I:9(){b e=d;e.$k.z("h.Y",9(){e.Y()});e.$k.z("h.1l",9(){e.1l()});e.$k.z("h.1e",9(t,n){e.6.Q=n;e.1e();e.36="1e"});e.$k.z("h.W",9(){e.W();e.36="W"});e.$k.z("h.1i",9(t,n){e.1i(n)});e.$k.z("h.2j",9(t,n){e.2j(n)})},2x:9(){b e=d;7(e.6.2x===j&&e.F.13!==j&&e.6.Q!==c){e.$k.z("57",9(){e.W()});e.$k.z("58",9(){7(e.36!=="W"){e.1e()}})}},1I:9(){b t=d;7(t.6.1I===c){q c}1C(b n=0;n<t.G;n++){b i=e(t.$I[n]);7(i.w("h-1c")==="1c"){4q}b s=i.w("h-1K"),o=i.16(".5b"),u;7(B o.w("1X")!=="2F"){i.w("h-1c","1c");4q}7(i.w("h-1c")===r){o.3N();i.K("4s").w("h-1c","5e")}7(t.6.4t===j){u=s>=t.p}m{u=j}7(u&&s<t.p+t.6.v&&o.S){t.4u(i,o)}}},4u:9(e,t){9 s(){r+=1;7(n.2X(t.2U(0))||i===j){o()}m 7(r<=2v){19(s,2v)}m{o()}}9 o(){e.w("h-1c","1c").Z("4s");t.5j("w-1X");n.6.4x==="4y"?t.5m(5n):t.3L();7(B n.6.3r==="9"){n.6.3r.P(d,[n.$k])}}b n=d,r=0;7(t.5p("5q")==="5r"){t.A("5s-5t","5u("+t.w("1X")+")");b i=j}m{t[0].1X=t.w("1X")}s()},1A:9(){9 s(){i+=1;7(t.2X(n.2U(0))){o()}m 7(i<=2v){19(s,2v)}m{t.1U.A("3h","")}}9 o(){b n=e(t.$I[t.p]).3h();t.1U.A("3h",n+"T");7(!t.1U.1V("1A")){19(9(){t.1U.K("1A")},0)}}b t=d;b n=e(t.$I[t.p]).16("5w");7(n.2U(0)!==r){b i=0;s()}m{o()}},2X:9(e){7(!e.3O){q c}7(B e.4B!=="3b"&&e.4B==0){q c}q j},4n:9(){b t=d;7(t.6.37===j){t.$I.Z("2d")}t.1v=[];1C(b n=t.p;n<t.p+t.6.v;n++){t.1v.2D(n);7(t.6.37===j){e(t.$I[n]).K("2d")}}t.h.1v=t.1v},4w:9(e){b t=d;t.4E="h-"+e+"-5B";t.4F="h-"+e+"-2f"},4k:9(){9 u(e,t){q{2l:"5D",V:e+"T"}}b e=d;e.1G=j;b t=e.4E,n=e.4F,r=e.$I.1E(e.p),i=e.$I.1E(e.15),s=1N.4H(e.H[e.p])+e.H[e.15],o=1N.4H(e.H[e.p])+e.N/2;e.$L.K("h-1Y").A({"-1R-O-1Y":o+"T","-27-4J-1Y":o+"T","4J-1Y":o+"T"});b a="5I 5J 5K 5L";i.A(u(s,10)).K(t).z(a,9(){e.3C=j;i.R(a);e.32(i,t)});r.K(n).z(a,9(){e.2E=j;r.R(a);e.32(r,n)})},32:9(e,t){b n=d;e.A({2l:"",V:""}).Z(t);7(n.3C&&n.2E){n.$L.Z("h-1Y");n.3C=c;n.2E=c;n.1G=c}},4z:9(){b e=d;e.h={29:e.29,5P:e.$k,X:e.$X,I:e.$I,p:e.p,15:e.15,1v:e.1v,13:e.F.13,F:e.F,1t:e.1t}},4N:9(){b r=d;r.$k.R(".h h 1Z.40");e(n).R(".h h");e(t).R("47",r.3f)},1Q:9(){b e=d;7(e.$k.1S().S!==0){e.$L.3y();e.$X.3y().3y();7(e.D){e.D.3j()}}e.4N();e.$k.2s("2t",e.$k.w("h-4p")||"").2s("J",e.$k.w("h-4K"))},5T:9(){b e=d;e.W();18(e.1M);e.1Q();e.$k.5U()},5V:9(t){b n=d;b r=e.3K({},n.29,t);n.1Q();n.1J(r,n.$k)},5W:9(e,t){b n=d,i;7(!e){q c}7(n.$k.1S().S===0){n.$k.1k(e);n.1P();q c}n.1Q();7(t===r||t===-1){i=-1}m{i=t}7(i>=n.$X.S||i===-1){n.$X.1E(-1).5X(e)}m{n.$X.1E(i).5Y(e)}n.1P()},5Z:9(e){b t=d,n;7(t.$k.1S().S===0){q c}7(e===r||e===-1){n=-1}m{n=e}t.1Q();t.$X.1E(n).3j();t.1P()}};e.3A.2c=9(t){q d.2i(9(){7(e(d).w("h-1J")===j){q c}e(d).w("h-1J",j);b n=3i.3E(i);n.1J(t,d);e.w(d,"2c",n)})};e.3A.2c.6={v:5,17:c,1q:[60,4],21:[61,3],24:[62,2],25:c,26:[63,1],4b:c,49:c,1j:2J,1D:64,2u:65,Q:c,2x:c,2b:c,2T:["1l","Y"],2e:j,14:c,1s:j,38:c,2Z:j,48:2J,4a:t,1O:"h-66",28:"h-28",1I:c,4t:j,4x:"4y",1A:c,2I:c,3F:c,3v:j,22:j,23:j,37:c,2w:c,3p:c,3t:c,2M:c,39:c,1F:c,3z:c,3n:c,2R:c,3r:c}})(67,68,69)',62,382,'||||||options|if||function||var|false|this||||owl||true|elem||else|||currentItem|return|||||items|data|||on|css|typeof|maximumItem|owlControls|0px|browser|itemsAmount|positionsInArray|owlItems|class|addClass|owlWrapper|div|itemWidth|transform|apply|autoPlay|off|length|px|newRelativeX|left|stop|userItems|next|removeClass||newPosX|ev_types|isTouch|scrollPerPage|prevItem|find|itemsCustom|clearInterval|setTimeout|transition|disabled|loaded|null|play|target|translate3d|wrapper|goTo|slideSpeed|append|prev|width|preventDefault|paginationWrapper|page|itemsDesktop|autoPlayInterval|pagination|dragDirection|support3d|visibleItems|buttonPrev|css2slide|buttonNext|ms|autoHeight|swapSpeed|for|paginationSpeed|eq|beforeMove|isTransition|transition3d|lazyLoad|init|item|roundPages|checkVisible|Math|baseClass|setVars|unWrap|webkit|children|isCss3Finish|wrapperOuter|hasClass|prevArr|src|origin|mousedown||itemsDesktopSmall|mouseDrag|touchDrag|itemsTablet|itemsTabletSmall|itemsMobile|moz|theme|userOptions|touchend|navigation|owlCarousel|active|rewindNav|in|isCssFinish|html|each|jumpTo|rewind|position|sliding|mouseup|eachMoveUpdate|is|afterGo|ease|attr|style|rewindSpeed|100|transitionStyle|stopOnHover|addCssSpeed|opacity|orignalItems|all|pagesInArray|push|endCurrent|string|right|playDirection|jsonPath|200|pageX|touches|beforeInit|end|move|touchmove|dragging|startDragging|newPosY|navigationText|get|updateItems|touchstart|completeImg|logIn|responsive|targetElement|calculateAll|clearTransStyle|visible|watchVisibility|updateControls|hoverStatus|addClassActive|paginationNumbers|afterInit|checkPagination|undefined|offsetY|checkNavigation|offsetX|resizer|relativePos|height|Object|remove|apStatus|checkAp|moveDirection|afterAction|updateVars|beforeUpdate|Number|afterLazyLoad|grabbing|afterUpdate|click|dragBeforeAnimFinish|event|max|unwrap|afterMove|fn|originalEvent|endPrev|maximumPixels|create|jsonSuccess|wrap|eventTypes|removeTransition|doTranslate|extend|show|css2move|hide|complete|cssText|span|gestures|disabledEvents|updatePagination|loadContent|mousemove|touchcancel|start|buildButtons|buildPagination|disableTextSelect|pageY|min|loops|calculateWidth|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|srcElement|outer|drag|animate|setInterval|getNewPosition|reload|disable|singleItemTransition|closestItem|updatePosition|onVisibleItems|inArray|originalStyles|continue|block|loading|lazyFollow|lazyPreload|display|transitionTypes|lazyEffect|fade|owlStatus|moveEvents|naturalWidth|response|buildControls|outClass|inClass|onStartup|abs|customEvents|perspective|originalClasses|checkBrowser|wrapItems|clearEvents|_data|clickable|toggleClass|controls|stopImmediatePropagation|stopPropagation|msMaxTouchPoints|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|text|shift|onstartup|mouseover|mouseout|duration|round|lazyOwl|new|which|checked|createElement|destroyControls|buttons|5e3|removeAttr|match|numbers|fadeIn|400|clearTimeout|prop|tagName|DIV|background|image|url|prototype|img|sort|top|ontouchstart|dragstart|out|navigator|relative|appendTo|input|getJSON|textarea|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|returnValue|wrapAll|500|baseElement|select|wrapperWidth|option|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))

// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
// Modified by Stan Scates for https://github.com/StanScates/Tweet.js-Mod

(function (factory) {
	if (typeof define === 'function' && define.amd)
	define(['jquery'], factory); // AMD support for RequireJS etc.
	else
	factory(jQuery);
}(function ($) {
	$.fn.tweet = function(o){
		var s = $.extend({
			modpath: "php/twitter/",                     // [string]   relative URL to Tweet.js mod (see https://github.com/StanScates/Tweet.js-Mod)
			username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
			list_id: null,                            // [integer]  ID of list to fetch when using list functionality
			list: null,                               // [string]   optional slug of list belonging to username
			favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
			query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
			avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
			count: 3,                                 // [integer]  how many tweets to display?
			fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
			page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
			retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
			intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
			outro_text: null,                         // [string]   do you want text AFTER your tweets?
			join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
			auto_join_text_default: "i said,",        // [string]   auto text for non verb: "i said" bullocks
			auto_join_text_ed: "i",                   // [string]   auto text for past tense: "i" surfed
			auto_join_text_ing: "i am",               // [string]   auto tense for present tense: "i was" surfing
			auto_join_text_reply: "i replied to",     // [string]   auto tense for replies: "i replied to" @someone "with"
			auto_join_text_url: "i was looking at",   // [string]   auto tense for urls: "i was looking at" http:...
			loading_text: null,                       // [string]   optional loading text, displayed while tweets load
			refresh_interval: null ,                  // [integer]  optional number of seconds after which to reload tweets
			twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
			twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
			twitter_search_url: "twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
			template: "<div class='clearfix'><div class='twitter_logo'></div><div class='twitter_inner'>{time}{join}{text}</div></div>",   // [string or function] template used to construct each tweet <li> - see code for available vars
			comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
				return tweet2["tweet_time"] - tweet1["tweet_time"];
			},
			filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
				return true;
			}
		// You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
		//   "loaded" -- triggered when tweets have been fetched and rendered
		}, o);

		// See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
		var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

		// Expand values inside simple string templates with {placeholders}
		function t(template, info) {
			if (typeof template === "string") {
				var result = template;
				for(var key in info) {
					var val = info[key];
					result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
				}
				return result;
			} else return template(info);
		}
		// Export the t function for use when passing a function as the 'template' option
		$.extend({tweet: {t: t}});

		function replacer (regex, replacement) {
			return function() {
				var returning = [];
				this.each(function() {
					returning.push(this.replace(regex, replacement));
				});
				return $(returning);
			};
		}

		function escapeHTML(s) {
			return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
		}

		$.fn.extend({
			linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
			// Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
			linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
				' <a href="http://'+s.twitter_search_url+'/search?q=$1&src=hash'+((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+'" class="tweet_hashtag">#$1</a>'),
			makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
		});

		function linkURLs(text, entities) {
			return text.replace(url_regexp, function(match) {
				var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
				var text = match;
				for(var i = 0; i < entities.length; ++i) {
					var entity = entities[i];
					if (entity.url == url && entity.expanded_url) {
						url = entity.expanded_url;
						text = entity.display_url;
						break;
					}
				}
				return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
			});
		}

		function parse_date(date_str) {
			// The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
			// cannot handle in IE. We therefore perform the following transformation:
			// "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
			return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
		}

		function relative_time(date) {
			var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
			var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
			var r = '';
			if (delta < 1) {
				r = 'just now';
			} else if (delta < 60) {
				r = delta + ' seconds ago';
			} else if(delta < 120) {
				r = 'about a minute ago';
			} else if(delta < (45*60)) {
				r = 'about ' + (parseInt(delta / 60, 10)).toString() + ' minutes ago';
			} else if(delta < (2*60*60)) {
				r = 'about an hour ago';
			} else if(delta < (24*60*60)) {
				r = 'about ' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
			} else if(delta < (48*60*60)) {
				r = 'about a day ago';
			} else {
				r = 'about ' + (parseInt(delta / 86400, 10)).toString() + ' days ago';
			}
			return r;
		}

		function build_auto_join_text(text) {
			if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
				return s.auto_join_text_reply;
			} else if (text.match(url_regexp)) {
				return s.auto_join_text_url;
			} else if (text.match(/^((\w+ed)|just) .*/im)) {
				return s.auto_join_text_ed;
			} else if (text.match(/^(\w*ing) .*/i)) {
				return s.auto_join_text_ing;
			} else {
				return s.auto_join_text_default;
			}
		}

		function build_api_request() {
			var modpath = s.modpath,
				count = (s.fetch === null) ? s.count : s.fetch,
				defaults = {
					include_entities: 1
				};

			if (s.list) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/lists/statuses.json",
					parameters: $.extend({}, defaults, {
						list_id: s.list_id,
						slug: s.list,
						owner_screen_name: s.username,
						page: s.page,
						count: count,
						include_rts: (s.retweets ? 1 : 0)
					})
				};
			} else if (s.favorites) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/favorites/list.json",
					parameters: $.extend({}, defaults, {
						list_id: s.list_id,
						screen_name: s.username,
						page: s.page,
						count: count
					})
				};
			} else if (s.query === null && s.username.length === 1) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/statuses/user_timeline.json",
					parameters: $.extend({}, defaults, {
						screen_name: s.username,
						page: s.page,
						count: count,
						include_rts: (s.retweets ? 1 : 0)
					})
				};
			} else {
				var query = (s.query || 'from:'+s.username.join(' OR from:'));
				return {
					host: s.twitter_search_url,
					url: "/search.json",
					parameters: $.extend({}, defaults, {
						page: s.page,
						q: query,
						rpp: count
					})
				};
			}
		}

		function extract_avatar_url(item, secure) {
			if (secure) {
				return ('user' in item) ?
					item.user.profile_image_url_https :
					extract_avatar_url(item, false).
					replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
			} else {
				return item.profile_image_url || item.user.profile_image_url;
			}
		}

		// Convert twitter API objects into data available for
		// constructing each tweet <li> using a template
		function extract_template_data(item) {
			var o = {};
			o.item = item;
			o.source = item.source;
			// The actual user name is not returned by all Twitter APIs, so please do not file an issue if it is empty.
			o.name = item.from_user_name || item.user.name;
			o.screen_name = item.from_user || item.user.screen_name;
			o.avatar_size = s.avatar_size;
			o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
			o.retweet = typeof(item.retweeted_status) != 'undefined';
			o.tweet_time = parse_date(item.created_at);
			o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
			o.tweet_id = item.id_str;
			o.twitter_base = "http://"+s.twitter_url+"/";
			o.user_url = o.twitter_base+o.screen_name;
			o.tweet_url = o.user_url+"/status/"+o.tweet_id;
			o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
			o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
			o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
			o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
			o.tweet_relative_time = relative_time(o.tweet_time);
			o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
			o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
			o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
			o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

			// Default spans, and pre-formatted blocks for common layouts
			o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
			o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
			o.avatar = o.avatar_size ?
				t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
			o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
			o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
			o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
			o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
			o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
			return o;
		}

		return this.each(function(i, widget){
			var list = $('<ul class="tweet_list">');
			var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
			var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
			var loading = $('<p class="loading">'+s.loading_text+'</p>');

			if(s.username && typeof(s.username) == "string"){
				s.username = [s.username];
			}

			$(widget).unbind("tweet:load").bind("tweet:load", function(){
				if (s.loading_text) $(widget).empty().append(loading);

				$.ajax({
					dataType: "json",
					type: "post",
					async: false,
					url: s.modpath || "/twitter/",
					data: { request: build_api_request() },
					success: function(data, status) {

						if(data.message) {
							console.log(data.message);
						}

						var response = data.response;
						$(widget).empty().append(list);
						if (s.intro_text) list.before(intro);
						list.empty();

						if(response.statuses !== undefined) {
							resp = response.statuses;
						} else if(response.results !== undefined) {
							resp = response.results;
						} else {
							resp = response;
						}

						var tweets = $.map(resp, extract_template_data);
							tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);

						list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
							children('li:first').addClass('tweet_first').end().
							children('li:odd').addClass('tweet_even').end().
							children('li:even').addClass('tweet_odd');

						if (s.outro_text) list.after(outro);
						$(widget).trigger("loaded").trigger((tweets ? "empty" : "full"));
						if (s.refresh_interval) {
							window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
						}
					}
				});
			}).trigger("tweet:load");
		});
	};
}));

/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);
/* Javascript plotting library for jQuery, version 0.8.2.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && a.reserveSpace) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    var lastTick = axis.ticks[axis.ticks.length - 1];
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        if (lastTick.v <= axis.max) {
                            margins.right = Math.max(margins.right, axis.labelWidth / 2);
                        }
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        if (lastTick.v <= axis.max) {
                            margins.top = Math.max(margins.top, axis.labelHeight / 2);
                        }
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            // init axes
            $.each(axes, function (_, axis) {
                axis.show = axis.options.show;
                if (axis.show == null)
                    axis.show = axis.used; // by default an axis is visible if it's got data

                axis.reserveSpace = axis.show || axis.options.reserveSpace;

                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) { return axis.reserveSpace; });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, but since so many people use this
            // we'll add an especially friendly make sure they remembered to include it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    if (xrange.from == xrange.to && yrange.from == yrange.to)
                        continue;

                    // then draw
                    xrange.from = xrange.axis.p2c(xrange.from);
                    xrange.to = xrange.axis.p2c(xrange.to);
                    yrange.from = yrange.axis.p2c(yrange.from);
                    yrange.to = yrange.axis.p2c(yrange.to);

                    if (xrange.from == xrange.to || yrange.from == yrange.to) {
                        // draw line
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = m.lineWidth || options.grid.markingsLineWidth;
                        ctx.moveTo(xrange.from, yrange.from);
                        ctx.lineTo(xrange.to, yrange.to);
                        ctx.stroke();
                    }
                    else {
                        // fill area
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.2";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/

(function($) {

	// Maximum redraw attempts when fitting labels within the plot

	var REDRAW_ATTEMPTS = 10;

	// Factor by which to shrink the pie when fitting labels within the plot

	var REDRAW_SHRINK = 0.95;

	function init(plot) {

		var canvas = null,
			target = null,
			options = null,
			maxRadius = null,
			centerLeft = null,
			centerTop = null,
			processed = false,
			ctx = null;

		// interactive variables

		var highlights = [];

		// add hook to determine if pie plugin in enabled, and then perform necessary operations

		plot.hooks.processOptions.push(function(plot, options) {
			if (options.series.pie.show) {

				options.grid.show = false;

				// set labels.show

				if (options.series.pie.label.show == "auto") {
					if (options.legend.show) {
						options.series.pie.label.show = false;
					} else {
						options.series.pie.label.show = true;
					}
				}

				// set radius

				if (options.series.pie.radius == "auto") {
					if (options.series.pie.label.show) {
						options.series.pie.radius = 3/4;
					} else {
						options.series.pie.radius = 1;
					}
				}

				// ensure sane tilt

				if (options.series.pie.tilt > 1) {
					options.series.pie.tilt = 1;
				} else if (options.series.pie.tilt < 0) {
					options.series.pie.tilt = 0;
				}
			}
		});

		plot.hooks.bindEvents.push(function(plot, eventHolder) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				if (options.grid.hoverable) {
					eventHolder.unbind("mousemove").mousemove(onMouseMove);
				}
				if (options.grid.clickable) {
					eventHolder.unbind("click").click(onClick);
				}
			}
		});

		plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				processDatapoints(plot, series, data, datapoints);
			}
		});

		plot.hooks.drawOverlay.push(function(plot, octx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				drawOverlay(plot, octx);
			}
		});

		plot.hooks.draw.push(function(plot, newCtx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				draw(plot, newCtx);
			}
		});

		function processDatapoints(plot, series, datapoints) {
			if (!processed)	{
				processed = true;
				canvas = plot.getCanvas();
				target = $(canvas).parent();
				options = plot.getOptions();
				plot.setData(combine(plot.getData()));
			}
		}

		function combine(data) {

			var total = 0,
				combined = 0,
				numCombined = 0,
				color = options.series.pie.combine.color,
				newdata = [];

			// Fix up the raw data from Flot, ensuring the data is numeric

			for (var i = 0; i < data.length; ++i) {

				var value = data[i].data;

				// If the data is an array, we'll assume that it's a standard
				// Flot x-y pair, and are concerned only with the second value.

				// Note how we use the original array, rather than creating a
				// new one; this is more efficient and preserves any extra data
				// that the user may have stored in higher indexes.

				if ($.isArray(value) && value.length == 1) {
    				value = value[0];
				}

				if ($.isArray(value)) {
					// Equivalent to $.isNumeric() but compatible with jQuery < 1.7
					if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
						value[1] = +value[1];
					} else {
						value[1] = 0;
					}
				} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
					value = [1, +value];
				} else {
					value = [1, 0];
				}

				data[i].data = [value];
			}

			// Sum up all the slices, so we can calculate percentages for each

			for (var i = 0; i < data.length; ++i) {
				total += data[i].data[0][1];
			}

			// Count the number of slices with percentages below the combine
			// threshold; if it turns out to be just one, we won't combine.

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (value / total <= options.series.pie.combine.threshold) {
					combined += value;
					numCombined++;
					if (!color) {
						color = data[i].color;
					}
				}
			}

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
					newdata.push({
						data: [[1, value]],
						color: data[i].color,
						label: data[i].label,
						angle: value * Math.PI * 2 / total,
						percent: value / (total / 100)
					});
				}
			}

			if (numCombined > 1) {
				newdata.push({
					data: [[1, combined]],
					color: color,
					label: options.series.pie.combine.label,
					angle: combined * Math.PI * 2 / total,
					percent: combined / (total / 100)
				});
			}

			return newdata;
		}

		function draw(plot, newCtx) {

			if (!target) {
				return; // if no series were passed
			}

			var canvasWidth = plot.getPlaceholder().width(),
				canvasHeight = plot.getPlaceholder().height(),
				legendWidth = target.children().filter(".legend").children().width() || 0;

			ctx = newCtx;

			// WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

			// When combining smaller slices into an 'other' slice, we need to
			// add a new series.  Since Flot gives plugins no way to modify the
			// list of series, the pie plugin uses a hack where the first call
			// to processDatapoints results in a call to setData with the new
			// list of series, then subsequent processDatapoints do nothing.

			// The plugin-global 'processed' flag is used to control this hack;
			// it starts out false, and is set to true after the first call to
			// processDatapoints.

			// Unfortunately this turns future setData calls into no-ops; they
			// call processDatapoints, the flag is true, and nothing happens.

			// To fix this we'll set the flag back to false here in draw, when
			// all series have been processed, so the next sequence of calls to
			// processDatapoints once again starts out with a slice-combine.
			// This is really a hack; in 0.9 we need to give plugins a proper
			// way to modify series before any processing begins.

			processed = false;

			// calculate maximum radius and center point

			maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
			centerTop = canvasHeight / 2 + options.series.pie.offset.top;
			centerLeft = canvasWidth / 2;

			if (options.series.pie.offset.left == "auto") {
				if (options.legend.position.match("w")) {
					centerLeft += legendWidth / 2;
				} else {
					centerLeft -= legendWidth / 2;
				}
				if (centerLeft < maxRadius) {
					centerLeft = maxRadius;
				} else if (centerLeft > canvasWidth - maxRadius) {
					centerLeft = canvasWidth - maxRadius;
				}
			} else {
				centerLeft += options.series.pie.offset.left;
			}

			var slices = plot.getData(),
				attempts = 0;

			// Keep shrinking the pie's radius until drawPie returns true,
			// indicating that all the labels fit, or we try too many times.

			do {
				if (attempts > 0) {
					maxRadius *= REDRAW_SHRINK;
				}
				attempts += 1;
				clear();
				if (options.series.pie.tilt <= 0.8) {
					drawShadow();
				}
			} while (!drawPie() && attempts < REDRAW_ATTEMPTS)

			if (attempts >= REDRAW_ATTEMPTS) {
				clear();
				target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
			}

			if (plot.setSeries && plot.insertLegend) {
				plot.setSeries(slices);
				plot.insertLegend();
			}

			// we're actually done at this point, just defining internal functions at this point

			function clear() {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				target.children().filter(".pieLabel, .pieLabelBackground").remove();
			}

			function drawShadow() {

				var shadowLeft = options.series.pie.shadow.left;
				var shadowTop = options.series.pie.shadow.top;
				var edge = 10;
				var alpha = options.series.pie.shadow.alpha;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
					return;	// shadow would be outside canvas, so don't draw it
				}

				ctx.save();
				ctx.translate(shadowLeft,shadowTop);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "#000";

				// center and rotate to starting position

				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);

				//radius -= edge;

				for (var i = 1; i <= edge; i++) {
					ctx.beginPath();
					ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
					ctx.fill();
					radius -= i;
				}

				ctx.restore();
			}

			function drawPie() {

				var startAngle = Math.PI * options.series.pie.startAngle;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				// center and rotate to starting position

				ctx.save();
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

				// draw slices

				ctx.save();
				var currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i) {
					slices[i].startAngle = currentAngle;
					drawSlice(slices[i].angle, slices[i].color, true);
				}
				ctx.restore();

				// draw slice outlines

				if (options.series.pie.stroke.width > 0) {
					ctx.save();
					ctx.lineWidth = options.series.pie.stroke.width;
					currentAngle = startAngle;
					for (var i = 0; i < slices.length; ++i) {
						drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
					}
					ctx.restore();
				}

				// draw donut hole

				drawDonutHole(ctx);

				ctx.restore();

				// Draw the labels, returning true if they fit within the plot

				if (options.series.pie.label.show) {
					return drawLabels();
				} else return true;

				function drawSlice(angle, color, fill) {

					if (angle <= 0 || isNaN(angle)) {
						return;
					}

					if (fill) {
						ctx.fillStyle = color;
					} else {
						ctx.strokeStyle = color;
						ctx.lineJoin = "round";
					}

					ctx.beginPath();
					if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
						ctx.moveTo(0, 0); // Center of the pie
					}

					//ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
					ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
					ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
					ctx.closePath();
					//ctx.rotate(angle); // This doesn't work properly in Opera
					currentAngle += angle;

					if (fill) {
						ctx.fill();
					} else {
						ctx.stroke();
					}
				}

				function drawLabels() {

					var currentAngle = startAngle;
					var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

					for (var i = 0; i < slices.length; ++i) {
						if (slices[i].percent >= options.series.pie.label.threshold * 100) {
							if (!drawLabel(slices[i], currentAngle, i)) {
								return false;
							}
						}
						currentAngle += slices[i].angle;
					}

					return true;

					function drawLabel(slice, startAngle, index) {

						if (slice.data[0][1] == 0) {
							return true;
						}

						// format label text

						var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

						if (lf) {
							text = lf(slice.label, slice);
						} else {
							text = slice.label;
						}

						if (plf) {
							text = plf(text, slice);
						}

						var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
						var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
						var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

						var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
						target.append(html);

						var label = target.children("#pieLabel" + index);
						var labelTop = (y - label.height() / 2);
						var labelLeft = (x - label.width() / 2);

						label.css("top", labelTop);
						label.css("left", labelLeft);

						// check to make sure that the label is not outside the canvas

						if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
							return false;
						}

						if (options.series.pie.label.background.opacity != 0) {

							// put in the transparent background separately to avoid blended labels and label boxes

							var c = options.series.pie.label.background.color;

							if (c == null) {
								c = slice.color;
							}

							var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
							$("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
								.css("opacity", options.series.pie.label.background.opacity)
								.insertBefore(label);
						}

						return true;
					} // end individual label function
				} // end drawLabels function
			} // end drawPie function
		} // end draw function

		// Placed here because it needs to be accessed from multiple locations

		function drawDonutHole(layer) {
			if (options.series.pie.innerRadius > 0) {

				// subtract the center

				layer.save();
				var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
				layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
				layer.beginPath();
				layer.fillStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.fill();
				layer.closePath();
				layer.restore();

				// add inner stroke

				layer.save();
				layer.beginPath();
				layer.strokeStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.stroke();
				layer.closePath();
				layer.restore();

				// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
			}
		}

		//-- Additional Interactive related functions --

		function isPointInPoly(poly, pt) {
			for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
				((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
				&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
				&& (c = !c);
			return c;
		}

		function findNearbySlice(mouseX, mouseY) {

			var slices = plot.getData(),
				options = plot.getOptions(),
				radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
				x, y;

			for (var i = 0; i < slices.length; ++i) {

				var s = slices[i];

				if (s.pie.show) {

					ctx.save();
					ctx.beginPath();
					ctx.moveTo(0, 0); // Center of the pie
					//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
					ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
					ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
					ctx.closePath();
					x = mouseX - centerLeft;
					y = mouseY - centerTop;

					if (ctx.isPointInPath) {
						if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					} else {

						// excanvas for IE doesn;t support isPointInPath, this is a workaround.

						var p1X = radius * Math.cos(s.startAngle),
							p1Y = radius * Math.sin(s.startAngle),
							p2X = radius * Math.cos(s.startAngle + s.angle / 4),
							p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
							p3X = radius * Math.cos(s.startAngle + s.angle / 2),
							p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
							p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
							p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
							p5X = radius * Math.cos(s.startAngle + s.angle),
							p5Y = radius * Math.sin(s.startAngle + s.angle),
							arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
							arrPoint = [x, y];

						// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

						if (isPointInPoly(arrPoly, arrPoint)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					}

					ctx.restore();
				}
			}

			return null;
		}

		function onMouseMove(e) {
			triggerClickHoverEvent("plothover", e);
		}

		function onClick(e) {
			triggerClickHoverEvent("plotclick", e);
		}

		// trigger click or hover event (they send the same parameters so we share their code)

		function triggerClickHoverEvent(eventname, e) {

			var offset = plot.offset();
			var canvasX = parseInt(e.pageX - offset.left);
			var canvasY =  parseInt(e.pageY - offset.top);
			var item = findNearbySlice(canvasX, canvasY);

			if (options.grid.autoHighlight) {

				// clear auto-highlights

				for (var i = 0; i < highlights.length; ++i) {
					var h = highlights[i];
					if (h.auto == eventname && !(item && h.series == item.series)) {
						unhighlight(h.series);
					}
				}
			}

			// highlight the slice

			if (item) {
				highlight(item.series, eventname);
			}

			// trigger any hover bind events

			var pos = { pageX: e.pageX, pageY: e.pageY };
			target.trigger(eventname, [pos, item]);
		}

		function highlight(s, auto) {
			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i == -1) {
				highlights.push({ series: s, auto: auto });
				plot.triggerRedrawOverlay();
			} else if (!auto) {
				highlights[i].auto = false;
			}
		}

		function unhighlight(s) {
			if (s == null) {
				highlights = [];
				plot.triggerRedrawOverlay();
			}

			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i != -1) {
				highlights.splice(i, 1);
				plot.triggerRedrawOverlay();
			}
		}

		function indexOfHighlight(s) {
			for (var i = 0; i < highlights.length; ++i) {
				var h = highlights[i];
				if (h.series == s)
					return i;
			}
			return -1;
		}

		function drawOverlay(plot, octx) {

			var options = plot.getOptions();

			var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

			octx.save();
			octx.translate(centerLeft, centerTop);
			octx.scale(1, options.series.pie.tilt);

			for (var i = 0; i < highlights.length; ++i) {
				drawHighlight(highlights[i].series);
			}

			drawDonutHole(octx);

			octx.restore();

			function drawHighlight(series) {

				if (series.angle <= 0 || isNaN(series.angle)) {
					return;
				}

				//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
				octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
				octx.beginPath();
				if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
					octx.moveTo(0, 0); // Center of the pie
				}
				octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
				octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
				octx.closePath();
				octx.fill();
			}
		}
	} // end init (plugin body)

	// define pie specific options and their default values

	var options = {
		series: {
			pie: {
				show: false,
				radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
				innerRadius: 0, /* for donut */
				startAngle: 3/2,
				tilt: 1,
				shadow: {
					left: 5,	// shadow left offset
					top: 15,	// shadow top offset
					alpha: 0.02	// shadow alpha
				},
				offset: {
					top: 0,
					left: "auto"
				},
				stroke: {
					color: "#fff",
					width: 1
				},
				label: {
					show: "auto",
					formatter: function(label, slice) {
						return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
					},	// formatter function
					radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
					background: {
						color: null,
						opacity: 0
					},
					threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
				},
				combine: {
					threshold: -1,	// percentage at which to combine little slices into one larger slice
					color: null,	// color to give the new slice (auto-generated if null)
					label: "Other"	// label to give the new slice
				},
				highlight: {
					//color: "#fff",		// will add this functionality once parseColor is available
					opacity: 0.5
				}
			}
		}
	};

	$.plot.plugins.push({
		init: init,
		options: options,
		name: "pie",
		version: "1.1"
	});

})(jQuery);

/* Flot plugin for plotting textual data or categories.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

Consider a dataset like [["February", 34], ["March", 20], ...]. This plugin
allows you to plot such a dataset directly.

To enable it, you must specify mode: "categories" on the axis with the textual
labels, e.g.

	$.plot("#placeholder", data, { xaxis: { mode: "categories" } });

By default, the labels are ordered as they are met in the data series. If you
need a different ordering, you can specify "categories" on the axis options
and list the categories there:

	xaxis: {
		mode: "categories",
		categories: ["February", "March", "April"]
	}

If you need to customize the distances between the categories, you can specify
"categories" as an object mapping labels to values

	xaxis: {
		mode: "categories",
		categories: { "February": 1, "March": 3, "April": 4 }
	}

If you don't specify all categories, the remaining categories will be numbered
from the max value plus 1 (with a spacing of 1 between each).

Internally, the plugin works by transforming the input data through an auto-
generated mapping where the first category becomes 0, the second 1, etc.
Hence, a point like ["February", 34] becomes [0, 34] internally in Flot (this
is visible in hover and click events that return numbers rather than the
category labels). The plugin also overrides the tick generator to spit out the
categories as ticks instead of the values.

If you need to map a value back to its label, the mapping is always accessible
as "categories" on the axis object, e.g. plot.getAxes().xaxis.categories.

*/

(function ($) {
    var options = {
        xaxis: {
            categories: null
        },
        yaxis: {
            categories: null
        }
    };
    
    function processRawData(plot, series, data, datapoints) {
        // if categories are enabled, we need to disable
        // auto-transformation to numbers so the strings are intact
        // for later processing

        var xCategories = series.xaxis.options.mode == "categories",
            yCategories = series.yaxis.options.mode == "categories";
        
        if (!(xCategories || yCategories))
            return;

        var format = datapoints.format;

        if (!format) {
            // FIXME: auto-detection should really not be defined here
            var s = series;
            format = [];
            format.push({ x: true, number: true, required: true });
            format.push({ y: true, number: true, required: true });

            if (s.bars.show || (s.lines.show && s.lines.fill)) {
                var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                if (s.bars.horizontal) {
                    delete format[format.length - 1].y;
                    format[format.length - 1].x = true;
                }
            }
            
            datapoints.format = format;
        }

        for (var m = 0; m < format.length; ++m) {
            if (format[m].x && xCategories)
                format[m].number = false;
            
            if (format[m].y && yCategories)
                format[m].number = false;
        }
    }

    function getNextIndex(categories) {
        var index = -1;
        
        for (var v in categories)
            if (categories[v] > index)
                index = categories[v];

        return index + 1;
    }

    function categoriesTickGenerator(axis) {
        var res = [];
        for (var label in axis.categories) {
            var v = axis.categories[label];
            if (v >= axis.min && v <= axis.max)
                res.push([v, label]);
        }

        res.sort(function (a, b) { return a[0] - b[0]; });

        return res;
    }
    
    function setupCategoriesForAxis(series, axis, datapoints) {
        if (series[axis].options.mode != "categories")
            return;
        
        if (!series[axis].categories) {
            // parse options
            var c = {}, o = series[axis].options.categories || {};
            if ($.isArray(o)) {
                for (var i = 0; i < o.length; ++i)
                    c[o[i]] = i;
            }
            else {
                for (var v in o)
                    c[v] = o[v];
            }
            
            series[axis].categories = c;
        }

        // fix ticks
        if (!series[axis].options.ticks)
            series[axis].options.ticks = categoriesTickGenerator;

        transformPointsOnAxis(datapoints, axis, series[axis].categories);
    }
    
    function transformPointsOnAxis(datapoints, axis, categories) {
        // go through the points, transforming them
        var points = datapoints.points,
            ps = datapoints.pointsize,
            format = datapoints.format,
            formatColumn = axis.charAt(0),
            index = getNextIndex(categories);

        for (var i = 0; i < points.length; i += ps) {
            if (points[i] == null)
                continue;
            
            for (var m = 0; m < ps; ++m) {
                var val = points[i + m];

                if (val == null || !format[m][formatColumn])
                    continue;

                if (!(val in categories)) {
                    categories[val] = index;
                    ++index;
                }
                
                points[i + m] = categories[val];
            }
        }
    }

    function processDatapoints(plot, series, datapoints) {
        setupCategoriesForAxis(series, "xaxis", datapoints);
        setupCategoriesForAxis(series, "yaxis", datapoints);
    }

    function init(plot) {
        plot.hooks.processRawData.push(processRawData);
        plot.hooks.processDatapoints.push(processDatapoints);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'categories',
        version: '1.0'
    });
})(jQuery);

/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */


eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(17(e){"5v 5u";19 t=e.6h||e;1a(!t.5c){19 n,r,i,s,o,u=17(e){19 n,r=e.1s("."),i=t;1b(n=0;r.1c>n;n++)i[r[n]]=i=i[r[n]]||{};18 i},a=u("4F.4A"),f=1e-10,l=[].6G,c=17(){},h=17(){19 e=9h.1x.9i,t=e.1Z([]);18 17(n){18 n 2a 3K||"3T"==1j n&&!!n.28&&e.1Z(n)===t}}(),p={},d=17(n,r,i,s){15.4v=p[n]?p[n].4v:[],p[n]=15,15.5a=1d,15.76=i;19 o=[];15.5F=17(a){1b(19 f,l,c,h,v=r.1c,m=v;--v>-1;)(f=p[r[v]]||1g d(r[v],[])).5a?(o[v]=f.5a,m--):a&&f.4v.28(15);1a(0===m&&i)1b(l=("4F.4A."+n).1s("."),c=l.4G(),h=u(l.1G("."))[c]=15.5a=i.36(i,o),s&&(t[c]=h,"17"==1j 5V&&5V.9j?5V((e.8F?e.8F+"/":"")+n.1s(".").1G("/"),[],17(){18 h}):"9f"!=1j 5E&&5E.8A&&(5E.8A=h)),v=0;15.4v.1c>v;v++)15.4v[v].5F()},15.5F(!0)},v=e.3R=17(e,t,n,r){18 1g d(e,t,n,r)},m=a.7W=17(e,t,n){18 t=t||17(){},v(e,[],17(){18 t},n),t};v.97=t;19 g=[0,0,1,1],y=[],b=m("2j.7v",17(e,t,n,r){15.5B=e,15.6j=n||0,15.6g=r||0,15.5C=t?g.3U(t):g},!0),w=b.7Z={},E=b.7X=17(e,t,n,r){1b(19 i,s,o,u,f=t.1s(","),l=f.1c,c=(n||"5s,5R,5r").1s(",");--l>-1;)1b(s=f[l],i=r?m("2j."+s,1d,!0):a.2j[s]||{},o=c.1c;--o>-1;)u=c[o],w[s+"."+u]=w[u+s]=i[u]=e.2x?e:e[u]||1g e};1b(i=b.1x,i.3m=!1,i.2x=17(e){1a(15.5B)18 15.5C[0]=e,15.5B.36(1d,15.5C);19 t=15.6j,n=15.6g,r=1===t?1-e:2===t?e:.5>e?2*e:2*(1-e);18 1===n?r*=r:2===n?r*=r*r:3===n?r*=r*r*r:4===n&&(r*=r*r*r*r),1===t?1-r:2===t?r:.5>e?r/2:1-r/2},n=["8u","8w","9a","9c","9l,9x"],r=n.1c;--r>-1;)i=n[r]+",9y"+r,E(1g b(1d,1d,1,r),i,"5R",!0),E(1g b(1d,1d,2,r),i,"5s"+(0===r?",96":"")),E(1g b(1d,1d,3,r),i,"5r");w.9s=a.2j.8u.5s,w.9o=a.2j.8w.5r;19 S=m("8m.8q",17(e){15.40={},15.8r=e||15});i=S.1x,i.8M=17(e,t,n,r,i){i=i||0;19 u,a,f=15.40[e],l=0;1b(1d==f&&(15.40[e]=f=[]),a=f.1c;--a>-1;)u=f[a],u.c===t&&u.s===n?f.2W(a,1):0===l&&i>u.2s&&(l=a+1);f.2W(l,0,{c:t,s:n,8o:r,2s:i}),15!==s||o||s.3a()},i.9n=17(e,t){19 n,r=15.40[e];1a(r)1b(n=r.1c;--n>-1;)1a(r[n].c===t)18 r.2W(n,1),2u 0},i.8C=17(e){19 t,n,r,i=15.40[e];1a(i)1b(t=i.1c,n=15.8r;--t>-1;)r=i[t],r.8o?r.c.1Z(r.s||n,{2r:e,2v:n}):r.c.1Z(r.s||n)};19 x=e.9z,T=e.8S,N=8l.95||17(){18(1g 8l).92()},C=N();1b(n=["64","8W","91","o"],r=n.1c;--r>-1&&!x;)x=e[n[r]+"8Z"],T=e[n[r]+"93"]||e[n[r]+"8U"];m("52",17(e,t){19 n,r,i,u,a,f=15,l=N(),h=t!==!1&&x,p=17(e){C=N(),f.3u=(C-l)/8d;19 t,s=f.3u-a;(!n||s>0||e===!0)&&(f.41++,a+=s+(s>=u?.9t:u-s),t=!0),e!==!0&&(i=r(p)),t&&f.8C("5y")};S.1Z(f),f.3u=f.41=0,f.5y=17(){p(!0)},f.4X=17(){1d!=i&&(h&&T?T(i):aa(i),r=c,i=1d,f===s&&(o=!1))},f.3a=17(){1d!==i&&f.4X(),r=0===n?c:h&&x?x:17(e){18 6p(e,0|8d*(a-f.3u)+1)},f===s&&(o=!0),p(2)},f.6f=17(e){18 22.1c?(n=e,u=1/(n||60),a=15.3u+u,f.3a(),2u 0):n},f.8e=17(e){18 22.1c?(f.4X(),h=e,f.6f(n),2u 0):h},f.6f(e),6p(17(){h&&(!i||5>f.41)&&f.8e(!1)},af)}),i=a.52.1x=1g a.8m.8q,i.2M=a.52;19 k=m("5k.72",17(e,t){1a(15.1o=t=t||{},15.1N=15.2l=e||0,15.2J=1C(t.4y)||0,15.1y=1,15.2c=t.1V===!0,15.1z=t.1z,15.2G=t.43===!0,q){o||s.3a();19 n=15.1o.5Q?I:q;n.1P(15,n.1n),15.1o.34&&15.34(!0)}});s=k.8h=1g a.52,i=k.1x,i.2o=i.1I=i.2w=i.1A=!1,i.1K=i.1n=0,i.1O=-1,i.1f=i.3h=i.32=i.1p=i.1U=1d,i.1A=!1;19 L=17(){o&&N()-C>8p&&s.3a(),6p(L,8p)};L(),i.7w=17(e,t){18 22.1c&&15.4e(e,t),15.43(!1).34(!1)},i.6c=17(e,t){18 22.1c&&15.4e(e,t),15.34(!0)},i.aB=17(e,t){18 22.1c&&15.4e(e,t),15.34(!1)},i.4e=17(e,t){18 15.2Z(1C(e),t!==!1)},i.ar=17(e,t){18 15.43(!1).34(!1).2Z(e?-15.2J:0,t!==!1,!0)},i.as=17(e,t){18 22.1c&&15.4e(e||15.26(),t),15.43(!0).34(!1)},i.1B=17(){},i.5i=17(){18 15},i.4O=17(){19 e,t=15.1p,n=15.1i;18!t||!15.1I&&!15.1A&&t.4O()&&(e=t.3y())>=n&&n+15.26()/15.1y>e},i.1M=17(e,t){18 o||s.3a(),15.1I=!e,15.2c=15.4O(),t!==!0&&(e&&!15.1U?15.1p.1P(15,15.1i-15.2J):!e&&15.1U&&15.1p.3C(15,!0)),!1},i.2p=17(){18 15.1M(!1,!1)},i.4c=17(e,t){18 15.2p(e,t),15},i.35=17(e){1b(19 t=e?15:15.1U;t;)t.2o=!0,t=t.1U;18 15},i.5o=17(e){1b(19 t=e.1c,n=e.3U();--t>-1;)"{4t}"===e[t]&&(n[t]=15);18 n},i.aw=17(e,t,n,r){1a("a8"===(e||"").1t(0,2)){19 i=15.1o;1a(1===22.1c)18 i[e];1d==t?3L i[e]:(i[e]=t,i[e+"6o"]=h(n)&&-1!==n.1G("").1k("{4t}")?15.5o(n):n,i[e+"6l"]=r),"5q"===e&&(15.32=t)}18 15},i.4y=17(e){18 22.1c?(15.1p.2F&&15.8f(15.1i+e-15.2J),15.2J=e,15):15.2J},i.2C=17(e){18 22.1c?(15.1N=15.2l=e,15.35(!0),15.1p.2F&&15.1n>0&&15.1n<15.1N&&0!==e&&15.2Z(15.1K*(e/15.1N),!0),15):(15.2o=!1,15.1N)},i.26=17(e){18 15.2o=!1,22.1c?15.2C(e):15.2l},i.3u=17(e,t){18 22.1c?(15.2o&&15.26(),15.2Z(e>15.1N?15.1N:e,t)):15.1n},i.2Z=17(e,t,n){1a(o||s.3a(),!22.1c)18 15.1K;1a(15.1p){1a(0>e&&!n&&(e+=15.26()),15.1p.2F){15.2o&&15.26();19 r=15.2l,i=15.1p;1a(e>r&&!n&&(e=r),15.1i=(15.1A?15.4D:i.1n)-(15.2G?r-e:e)/15.1y,i.2o||15.35(!1),i.1p)1b(;i.1p;)i.1p.1n!==(i.1i+i.1K)/i.1y&&i.2Z(i.1K,!0),i=i.1p}15.1I&&15.1M(!0,!1),(15.1K!==e||0===15.1N)&&15.1B(e,t,!1)}18 15},i.9N=i.9P=17(e,t){18 22.1c?15.2Z(15.2C()*e,t):15.1n/15.2C()},i.8f=17(e){18 22.1c?(e!==15.1i&&(15.1i=e,15.1U&&15.1U.4J&&15.1U.1P(15,e-15.2J)),15):15.1i},i.5N=17(e){1a(!22.1c)18 15.1y;1a(e=e||f,15.1p&&15.1p.2F){19 t=15.4D,n=t||0===t?t:15.1p.2Z();15.1i=n-(n-15.1i)*15.1y/e}18 15.1y=e,15.35(!1)},i.43=17(e){18 22.1c?(e!=15.2G&&(15.2G=e,15.2Z(15.1K,!0)),15):15.2G},i.34=17(e){1a(!22.1c)18 15.1A;1a(e!=15.1A&&15.1p){o||e||s.3a();19 t=15.1p,n=t.3y(),r=n-15.4D;!e&&t.2F&&(15.1i+=r,15.35(!1)),15.4D=e?n:1d,15.1A=e,15.2c=15.4O(),!e&&0!==r&&15.2w&&15.2C()&&15.1B(t.2F?15.1K:(n-15.1i)/15.1y,!0,!0)}18 15.1I&&!e&&15.1M(!0,!1),15};19 A=m("5k.7n",17(e){k.1Z(15,0,e),15.4P=15.2F=!0});i=A.1x=1g k,i.2M=A,i.4c().1I=!1,i.27=i.3h=1d,i.4J=!1,i.1P=i.84=17(e,t){19 n,r;1a(e.1i=1C(t||0)+e.2J,e.1A&&15!==e.1p&&(e.4D=e.1i+(15.3y()-e.1i)/e.1y),e.1U&&e.1U.3C(e,!0),e.1U=e.1p=15,e.1I&&e.1M(!0,!0),n=15.3h,15.4J)1b(r=e.1i;n&&n.1i>r;)n=n.1l;18 n?(e.1f=n.1f,n.1f=e):(e.1f=15.27,15.27=e),e.1f?e.1f.1l=e:15.3h=e,e.1l=n,15.1p&&15.35(!0),15},i.3C=17(e,t){18 e.1U===15&&(t||e.1M(!1,!0),e.1U=1d,e.1l?e.1l.1f=e.1f:15.27===e&&(15.27=e.1f),e.1f?e.1f.1l=e.1l:15.3h===e&&(15.3h=e.1l),15.1p&&15.35(!0)),15},i.1B=17(e,t,n){19 r,i=15.27;1b(15.1K=15.1n=15.1O=e;i;)r=i.1f,(i.2c||e>=i.1i&&!i.1A)&&(i.2G?i.1B((i.2o?i.26():i.2l)-(e-i.1i)*i.1y,t,n):i.1B((e-i.1i)*i.1y,t,n)),i=r},i.3y=17(){18 o||s.3a(),15.1K};19 O=m("5c",17(t,n,r){1a(k.1Z(15,n,r),15.1B=O.1x.1B,1d==t)5W"87 6v a 1d 2v.";15.2v=t="1H"!=1j t?t:O.3w(t)||t;19 i,s,o,u=t.9I||t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3o&&t[0].1v&&!t.3o),a=15.1o.4L;1a(15.5S=a=1d==a?F[O.8i]:"2t"==1j a?a>>0:F[a],(u||t 2a 3K||t.28&&h(t))&&"2t"!=1j t[0])1b(15.2z=o=l.1Z(t,0),15.3A=[],15.2Y=[],i=0;o.1c>i;i++)s=o[i],s?"1H"!=1j s?s.1c&&s!==e&&s[0]&&(s[0]===e||s[0].3o&&s[0].1v&&!s.3o)?(o.2W(i--,1),15.2z=o=o.3U(l.1Z(s,0))):(15.2Y[i]=R(s,15,!1),1===a&&15.2Y[i].1c>1&&U(s,15,1d,1,15.2Y[i])):(s=o[i--]=O.3w(s),"1H"==1j s&&o.2W(i+1,1)):o.2W(i--,1);1m 15.3A={},15.2Y=R(t,15,!1),1===a&&15.2Y.1c>1&&U(t,15,1d,1,15.2Y);(15.1o.1V||0===n&&0===15.2J&&15.1o.1V!==!1)&&15.1B(-15.2J,!1,!0)},!0),M=17(t){18 t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3o&&t[0].1v&&!t.3o)},2q=17(e,t){19 n,r={};1b(n 1w e)j[n]||n 1w t&&"x"!==n&&"y"!==n&&"3M"!==n&&"3B"!==n&&"39"!==n&&"3X"!==n||!(!P[n]||P[n]&&P[n].9D)||(r[n]=e[n],3L e[n]);e.4s=r};i=O.1x=1g k,i.2M=O,i.4c().1I=!1,i.3i=0,i.1r=i.2z=i.3f=i.29=1d,i.4I=!1,O.3Z="1.11.2",O.6n=i.2H=1g b(1d,1d,1,1),O.8i="2n",O.8h=s,O.8J=!0,O.3w=e.$||e.9C||17(t){18 e.$?(O.3w=e.$,e.$(t)):e.69?e.69.9G("#"===t.1u(0)?t.1t(1):t):t};19 D=O.4p={7T:h,7U:M},P=O.9R={},H=O.a2={},B=0,j=D.7i={3Q:1,4y:1,4L:1,4i:1,61:1,62:1,5Q:1,4C:1,38:1,5q:1,67:1,6b:1,4B:1,5D:1,63:1,4j:1,7b:1,7o:1,a3:1,a4:1,a6:1,5p:1,a5:1,1V:1,a0:1,9Z:1,1z:1,34:1,43:1,5A:1},F={3r:0,3Y:1,2n:2,9U:3,9T:4,9S:5,"9V":1,"5O":0},I=k.6Y=1g A,q=k.9W=1g A;q.1i=s.3u,I.1i=s.41,q.2c=I.2c=!0,k.86=17(){1a(q.1B((s.3u-q.1i)*q.1y,!1,!1),I.1B((s.41-I.1i)*I.1y,!1,!1),!(s.41%9Y)){19 e,t,n;1b(n 1w H){1b(t=H[n].3x,e=t.1c;--e>-1;)t[e].1I&&t.2W(e,1);0===t.1c&&3L H[n]}1a(n=q.27,(!n||n.1A)&&O.8J&&!I.27&&1===s.40.5y.1c){1b(;n&&n.1A;)n=n.1f;n||s.4X()}}},s.8M("5y",k.86);19 R=17(e,t,n){19 r,i,s=e.7h;1a(H[s||(e.7h=s="t"+B++)]||(H[s]={2v:e,3x:[]}),t&&(r=H[s].3x,r[i=r.1c]=t,n))1b(;--i>-1;)r[i]===t&&r.2W(i,1);18 H[s].3x},U=17(e,t,n,r,i){19 s,o,u,a;1a(1===r||r>=4){1b(a=i.1c,s=0;a>s;s++)1a((u=i[s])!==t)u.1I||u.1M(!1,!1)&&(o=!0);1m 1a(5===r)7p;18 o}19 l,c=t.1i+f,h=[],p=0,d=0===t.1N;1b(s=i.1c;--s>-1;)(u=i[s])===t||u.1I||u.1A||(u.1p!==t.1p?(l=l||z(t,0,d),0===z(u,l,d)&&(h[p++]=u)):c>=u.1i&&u.1i+u.26()/u.1y+f>c&&((d||!u.2w)&&2e-10>=c-u.1i||(h[p++]=u)));1b(s=p;--s>-1;)u=h[s],2===r&&u.2p(n,e)&&(o=!0),(2!==r||!u.1r&&u.2w)&&u.1M(!1,!1)&&(o=!0);18 o},z=17(e,t,n){1b(19 r=e.1p,i=r.1y,s=e.1i;r.1p;){1a(s+=r.1i,i*=r.1y,r.1A)18-23;r=r.1p}18 s/=i,s>t?s-t:n&&s===t||!e.2w&&2*f>s-t?f:(s+=e.26()/e.1y/i)>t+f?0:s-t-f};i.7c=17(){19 e,t,n,r,i=15.1o,s=15.3f,o=15.1N,u=i.1V,a=i.3Q;1a(i.38){1a(15.29&&15.29.1B(-1,!0),i.38.4L=0,i.38.1V=!0,15.29=O.3v(15.2v,0,i.38),u)1a(15.1n>0)15.29=1d;1m 1a(0!==o)18}1m 1a(i.4C&&0!==o)1a(15.29)15.29.1B(-1,!0),15.29=1d;1m{n={};1b(r 1w i)j[r]&&"5A"!==r||(n[r]=i[r]);1a(n.4L=0,n.1z="7G",15.29=O.3v(15.2v,0,n),i.1V){1a(0===15.1n)18}1m 15.29.1B(-1,!0)}1a(15.2H=a?a 2a b?i.5p 2a 3K?a.3t.36(a,i.5p):a:"17"==1j a?1g b(a,i.5p):w[a]||O.6n:O.6n,15.5P=15.2H.6j,15.7f=15.2H.6g,15.1r=1d,15.2z)1b(e=15.2z.1c;--e>-1;)15.4o(15.2z[e],15.3A[e]={},15.2Y[e],s?s[e]:1d)&&(t=!0);1m t=15.4o(15.2v,15.3A,15.2Y,s);1a(t&&O.4U("4Z",15),s&&(15.1r||"17"!=1j 15.2v&&15.1M(!1,!1)),i.4C)1b(n=15.1r;n;)n.s+=n.c,n.c=-n.c,n=n.1f;15.32=i.5q,15.2w=!0},i.4o=17(t,n,r,i){19 s,o,u,a,f,l;1a(1d==t)18!1;15.1o.4s||t.1v&&t!==e&&t.3o&&P.4s&&15.1o.5A!==!1&&2q(15.1o,t);1b(s 1w 15.1o){1a(l=15.1o[s],j[s])l&&(l 2a 3K||l.28&&h(l))&&-1!==l.1G("").1k("{4t}")&&(15.1o[s]=l=15.5o(l,15));1m 1a(P[s]&&(a=1g P[s]).6M(t,15.1o[s],15)){1b(15.1r=f={1f:15.1r,t:a,p:"1X",s:0,c:1,f:!0,n:s,4M:!0,2s:a.5T},o=a.2E.1c;--o>-1;)n[a.2E[o]]=15.1r;(a.5T||a.4Z)&&(u=!0),(a.6q||a.89)&&(15.4I=!0)}1m 15.1r=n[s]=f={1f:15.1r,t:t,p:s,f:"17"==1j t[s],n:s,4M:!1,2s:0},f.s=f.f?t[s.1k("4h")||"17"!=1j t["7g"+s.1t(3)]?s:"7g"+s.1t(3)]():1q(t[s]),f.c="1H"==1j l&&"="===l.1u(1)?3q(l.1u(0)+"1",10)*1C(l.1t(2)):1C(l)-f.s||0;f&&f.1f&&(f.1f.1l=f)}18 i&&15.2p(i,t)?15.4o(t,n,r,i):15.5S>1&&15.1r&&r.1c>1&&U(t,15,n,15.5S,r)?(15.2p(n,t),15.4o(t,n,r,i)):u},i.1B=17(e,t,n){19 r,i,s,o,u=15.1n,a=15.1N;1a(e>=a)15.1K=15.1n=a,15.3i=15.2H.3m?15.2H.2x(1):1,15.2G||(r=!0,i="4i"),0===a&&(o=15.1O,(0===e||0>o||o===f)&&o!==e&&(n=!0,o>f&&(i="4j")),15.1O=o=!t||e?e:f);1m 1a(1e-7>e)15.1K=15.1n=0,15.3i=15.2H.3m?15.2H.2x(0):0,(0!==u||0===a&&15.1O>f)&&(i="4j",r=15.2G),0>e?(15.2c=!1,0===a&&(15.1O>=0&&(n=!0),15.1O=o=!t||e?e:f)):15.2w||(n=!0);1m 1a(15.1K=15.1n=e,15.5P){19 l=e/a,c=15.5P,h=15.7f;(1===c||3===c&&l>=.5)&&(l=1-l),3===c&&(l*=2),1===h?l*=l:2===h?l*=l*l:3===h?l*=l*l*l:4===h&&(l*=l*l*l*l),15.3i=1===c?1-l:2===c?l:.5>e/a?l/2:1-l/2}1m 15.3i=15.2H.2x(e/a);1a(15.1n!==u||n){1a(!15.2w){1a(15.7c(),!15.2w||15.1I)18;15.1n&&!r?15.3i=15.2H.2x(15.1n/a):r&&15.2H.3m&&(15.3i=15.2H.2x(0===15.1n?0:1))}1b(15.2c||!15.1A&&15.1n!==u&&e>=0&&(15.2c=!0),0===u&&(15.29&&(e>=0?15.29.1B(e,t,n):i||(i="a1")),15.1o.4B&&(0!==15.1n||0===a)&&(t||15.1o.4B.36(15.1o.63||15,15.1o.5D||y))),s=15.1r;s;)s.f?s.t[s.p](s.c*15.3i+s.s):s.t[s.p]=s.c*15.3i+s.s,s=s.1f;15.32&&(0>e&&15.29&&15.1i&&15.29.1B(e,t,n),t||n&&0===15.1n&&0===u||15.32.36(15.1o.6b||15,15.1o.67||y)),i&&(15.1I||(0>e&&15.29&&!15.32&&15.1i&&15.29.1B(e,t,n),r&&(15.1p.4P&&15.1M(!1,!1),15.2c=!1),!t&&15.1o[i]&&15.1o[i].36(15.1o[i+"6l"]||15,15.1o[i+"6o"]||y),0===a&&15.1O===f&&o!==f&&(15.1O=0)))}},i.2p=17(e,t){1a("3Y"===e&&(e=1d),1d==e&&(1d==t||t===15.2v))18 15.1M(!1,!1);t="1H"!=1j t?t||15.2z||15.2v:O.3w(t)||t;19 n,r,i,s,o,u,a,f;1a((h(t)||M(t))&&"2t"!=1j t[0])1b(n=t.1c;--n>-1;)15.2p(e,t[n])&&(u=!0);1m{1a(15.2z){1b(n=15.2z.1c;--n>-1;)1a(t===15.2z[n]){o=15.3A[n]||{},15.3f=15.3f||[],r=15.3f[n]=e?15.3f[n]||{}:"3Y";7p}}1m{1a(t!==15.2v)18!1;o=15.3A,r=15.3f=e?15.3f||{}:"3Y"}1a(o){a=e||o,f=e!==r&&"3Y"!==r&&e!==o&&("3T"!=1j e||!e.9Q);1b(i 1w a)(s=o[i])&&(s.4M&&s.t.2p(a)&&(u=!0),s.4M&&0!==s.t.2E.1c||(s.1l?s.1l.1f=s.1f:s===15.1r&&(15.1r=s.1f),s.1f&&(s.1f.1l=s.1l),s.1f=s.1l=1d),3L o[i]),f&&(r[i]=1);!15.1r&&15.2w&&15.1M(!1,!1)}}18 u},i.5i=17(){18 15.4I&&O.4U("6q",15),15.1r=1d,15.3f=1d,15.32=1d,15.29=1d,15.2w=15.2c=15.4I=!1,15.3A=15.2z?{}:[],15},i.1M=17(e,t){1a(o||s.3a(),e&&15.1I){19 n,r=15.2z;1a(r)1b(n=r.1c;--n>-1;)15.2Y[n]=R(r[n],15,!0);1m 15.2Y=R(15.2v,15,!0)}18 k.1x.1M.1Z(15,e,t),15.4I&&15.1r?O.4U(e?"89":"6q",15):!1},O.3v=17(e,t,n){18 1g O(e,t,n)},O.68=17(e,t,n){18 n.4C=!0,n.1V=0!=n.1V,1g O(e,t,n)},O.66=17(e,t,n,r){18 r.38=n,r.1V=0!=r.1V&&0!=n.1V,1g O(e,t,r)},O.6k=17(e,t,n,r,i){18 1g O(t,0,{4y:e,4i:t,61:n,62:r,4j:t,7b:n,7o:r,1V:!1,5Q:i,4L:0})},O.4h=17(e,t){18 1g O(e,0,t)},O.3W=17(e,t){1a(1d==e)18[];e="1H"!=1j e?e:O.3w(e)||e;19 n,r,i,s;1a((h(e)||M(e))&&"2t"!=1j e[0]){1b(n=e.1c,r=[];--n>-1;)r=r.3U(O.3W(e[n],t));1b(n=r.1c;--n>-1;)1b(s=r[n],i=n;--i>-1;)s===r[i]&&r.2W(n,1)}1m 1b(r=R(e).3U(),n=r.1c;--n>-1;)(r[n].1I||t&&!r[n].4O())&&r.2W(n,1);18 r},O.9J=O.9O=17(e,t,n){"3T"==1j t&&(n=t,t=!1);1b(19 r=O.3W(e,t),i=r.1c;--i>-1;)r[i].2p(n,e)};19 W=m("4z.7Q",17(e,t){15.2E=(e||"").1s(","),15.4N=15.2E[0],15.5T=t||0,15.9M=W.1x},!0);1a(i=W.1x,W.3Z="1.10.1",W.3J=2,i.1r=1d,i.9K=17(e,t,n,r,i,s){19 o,u;18 1d!=r&&(o="2t"==1j r||"="!==r.1u(1)?1C(r)-n:3q(r.1u(0)+"1",10)*1C(r.1t(2)))?(15.1r=u={1f:15.1r,t:e,p:t,s:n,c:o,f:"17"==1j e[t],n:i||t,r:s},u.1f&&(u.1f.1l=u),u):2u 0},i.1X=17(e){1b(19 t,n=15.1r,r=1e-6;n;)t=n.c*e+n.s,n.r?t=0|t+(t>0?.5:-.5):r>t&&t>-r&&(t=0),n.f?n.t[n.p](t):n.t[n.p]=t,n=n.1f},i.2p=17(e){19 t,n=15.2E,r=15.1r;1a(1d!=e[15.4N])15.2E=[];1m 1b(t=n.1c;--t>-1;)1d!=e[n[t]]&&n.2W(t,1);1b(;r;)1d!=e[r.n]&&(r.1f&&(r.1f.1l=r.1l),r.1l?(r.1l.1f=r.1f,r.1l=1d):15.1r===r&&(15.1r=r.1f)),r=r.1f;18!1},i.71=17(e,t){1b(19 n=15.1r;n;)(e[15.4N]||1d!=n.n&&e[n.n.1s(15.4N+"2q").1G("")])&&(n.r=t),n=n.1f},O.4U=17(e,t){19 n,r,i,s,o,u=t.1r;1a("4Z"===e){1b(;u;){1b(o=u.1f,r=i;r&&r.2s>u.2s;)r=r.1f;(u.1l=r?r.1l:s)?u.1l.1f=u:i=u,(u.1f=r)?r.1l=u:s=u,u=o}u=t.1r=i}1b(;u;)u.4M&&"17"==1j u.t[e]&&u.t[e]()&&(n=!0),u=u.1f;18 n},W.6P=17(e){1b(19 t=e.1c;--t>-1;)e[t].3J===W.3J&&(P[(1g e[t]).4N]=e[t]);18!0},v.2A=17(e){1a(!(e&&e.7a&&e.78&&e.3J))5W"9L 2A a7.";19 t,n=e.7a,r=e.5H||0,i=e.av,s={78:"6M",4h:"1X",4c:"2p",59:"71",au:"4Z"},o=m("4z."+n.1u(0).5h()+n.1t(1)+"8j",17(){W.1Z(15,n,r),15.2E=i||[]},e.aq===!0),u=o.1x=1g W(n);u.2M=o,o.3J=e.3J;1b(t 1w s)"17"==1j e[t]&&(u[s[t]]=e[t]);18 o.3Z=e.3Z,W.6P([o]),o},n=e.3b){1b(r=0;n.1c>r;r++)n[r]();1b(i 1w p)p[i].76||e.65.6U("ax ay aD aE: 4F.4A."+i)}o=!1}})(1T);(1T.3b||(1T.3b=[])).28(17(){"5v 5u";1T.3R("aC",["5k.72","5k.7n","5c"],17(e,t,n){19 r=17(e){t.1Z(15,e),15.2L={},15.4P=15.1o.4P===!0,15.2F=15.1o.2F===!0,15.4J=!0,15.32=15.1o.5q;19 n,r,i=15.1o;1b(r 1w i)n=i[r],o(n)&&-1!==n.1G("").1k("{4t}")&&(i[r]=15.5o(n));o(i.3x)&&15.1P(i.3x,0,i.aA,i.ap)},i=1e-10,s=n.4p.7U,o=n.4p.7T,u=[],a=17(e){19 t,n={};1b(t 1w e)n[t]=e[t];18 n},f=17(e,t,n,r){e.1p.6c(e.1i),t&&t.36(r||e.1p,n||u)},l=u.6G,c=r.1x=1g t;18 r.3Z="1.11.0",c.2M=r,c.4c().1I=!1,c.3v=17(e,t,r,i){18 t?15.1P(1g n(e,t,r),i):15.4h(e,r,i)},c.68=17(e,t,r,i){18 15.1P(n.68(e,t,r),i)},c.66=17(e,t,r,i,s){18 t?15.1P(n.66(e,t,r,i),s):15.4h(e,i,s)},c.5I=17(e,t,i,o,u,f,c,p){19 d,v=1g r({4i:f,61:c,62:p});1b("1H"==1j e&&(e=n.3w(e)||e),s(e)&&(e=l.1Z(e,0)),o=o||0,d=0;e.1c>d;d++)i.38&&(i.38=a(i.38)),v.3v(e[d],t,a(i),d*o);18 15.1P(v,u)},c.ac=17(e,t,n,r,i,s,o,u){18 n.1V=0!=n.1V,n.4C=!0,15.5I(e,t,n,r,i,s,o,u)},c.a9=17(e,t,n,r,i,s,o,u,a){18 r.38=n,r.1V=0!=r.1V&&0!=n.1V,15.5I(e,t,r,i,s,o,u,a)},c.1Z=17(e,t,r,i){18 15.1P(n.6k(0,e,t,r),i)},c.4h=17(e,t,r){18 r=15.3d(r,0,!0),1d==t.1V&&(t.1V=r===15.1n&&!15.1A),15.1P(1g n(e,0,t),r)},r.ab=17(e,t){e=e||{},1d==e.2F&&(e.2F=!0);19 i,s,o=1g r(e),u=o.1p;1b(1d==t&&(t=!0),u.3C(o,!0),o.1i=0,o.1O=o.1n=o.1K=u.1n,i=u.27;i;)s=i.1f,t&&i 2a n&&i.2v===i.1o.4i||o.1P(i,i.1i-i.2J),i=s;18 u.1P(o,0),o},c.1P=17(i,s,u,a){19 f,l,c,h,p,d;1a("2t"!=1j s&&(s=15.3d(s,0,!0,i)),!(i 2a e)){1a(i 2a 3K||i&&i.28&&o(i)){1b(u=u||"ag",a=a||0,f=s,l=i.1c,c=0;l>c;c++)o(h=i[c])&&(h=1g r({3x:h})),15.1P(h,f),"1H"!=1j h&&"17"!=1j h&&("9A"===u?f=h.1i+h.26()/h.1y:"ah"===u&&(h.1i-=h.4y())),f+=a;18 15.35(!0)}1a("1H"==1j i)18 15.80(i,s);1a("17"!=1j i)5W"87 1P "+i+" am an 1U; 3z al 8a a 6v, 1U, 17, ak 1H.";i=n.6k(0,i)}1a(t.1x.1P.1Z(15,i,s),15.1I&&!15.1A&&15.1N<15.2C())1b(p=15,d=p.3y()>i.1i;p.1I&&p.1p;)p.1p.2F&&d?p.2Z(p.1K,!0):p.1M(!0,!1),p=p.1p;18 15},c.51=17(t){1a(t 2a e)18 15.3C(t,!1);1a(t 2a 3K||t&&t.28&&o(t)){1b(19 n=t.1c;--n>-1;)15.51(t[n]);18 15}18"1H"==1j t?15.7P(t):15.4c(1d,t)},c.3C=17(e,n){t.1x.3C.1Z(15,e,n);19 r=15.3h;18 r?15.1n>r.1i+r.2l/r.1y&&(15.1n=15.2C(),15.1K=15.2l):15.1n=15.1K=0,15},c.aF=17(e,t){18 15.1P(e,15.3d(1d,t,!0,e))},c.84=c.8R=17(e,t,n,r){18 15.1P(e,t||0,n,r)},c.8T=17(e,t,n,r){18 15.1P(e,15.3d(1d,t,!0,e),n,r)},c.80=17(e,t){18 15.2L[e]=15.3d(t),15},c.94=17(e,t,n,r){18 15.1Z(f,["{4t}",t,n,r],15,e)},c.7P=17(e){18 3L 15.2L[e],15},c.8X=17(e){18 1d!=15.2L[e]?15.2L[e]:-1},c.3d=17(t,n,r,i){19 s;1a(i 2a e&&i.1U===15)15.51(i);1m 1a(i&&(i 2a 3K||i.28&&o(i)))1b(s=i.1c;--s>-1;)i[s]2a e&&i[s].1U===15&&15.51(i[s]);1a("1H"==1j n)18 15.3d(n,r&&"2t"==1j t&&1d==15.2L[n]?t-15.2C():0,r);1a(n=n||0,"1H"!=1j t||!5X(t)&&1d==15.2L[t])1d==t&&(t=15.2C());1m{1a(s=t.1k("="),-1===s)18 1d==15.2L[t]?r?15.2L[t]=15.2C()+n:n:15.2L[t]+n;n=3q(t.1u(s-1)+"1",10)*1C(t.1t(s+1)),t=s>1?15.3d(t.1t(0,s-1),0,r):15.2C()}18 1C(t)+n},c.4e=17(e,t){18 15.2Z("2t"==1j e?e:15.3d(e),t!==!1)},c.8V=17(){18 15.34(!0)},c.9r=17(e,t){18 15.7w(e,t)},c.9q=17(e,t){18 15.6c(e,t)},c.1B=17(e,t,n){15.1I&&15.1M(!0,!1);19 r,s,o,a,f,l=15.2o?15.26():15.2l,c=15.1n,h=15.1i,p=15.1y,d=15.1A;1a(e>=l?(15.1K=15.1n=l,15.2G||15.5U()||(s=!0,a="4i",0===15.1N&&(0===e||0>15.1O||15.1O===i)&&15.1O!==e&&15.27&&(f=!0,15.1O>i&&(a="4j"))),15.1O=15.1N||!t||e?e:i,e=l+1e-6):1e-7>e?(15.1K=15.1n=0,(0!==c||0===15.1N&&(15.1O>i||0>e&&15.1O>=0))&&(a="4j",s=15.2G),0>e?(15.2c=!1,0===15.1N&&15.1O>=0&&15.27&&(f=!0),15.1O=e):(15.1O=15.1N||!t||e?e:i,e=0,15.2w||(f=!0))):15.1K=15.1n=15.1O=e,15.1n!==c&&15.27||n||f){1a(15.2w||(15.2w=!0),15.2c||!15.1A&&15.1n!==c&&e>0&&(15.2c=!0),0===c&&15.1o.4B&&0!==15.1n&&(t||15.1o.4B.36(15.1o.63||15,15.1o.5D||u)),15.1n>=c)1b(r=15.27;r&&(o=r.1f,!15.1A||d);)(r.2c||r.1i<=15.1n&&!r.1A&&!r.1I)&&(r.2G?r.1B((r.2o?r.26():r.2l)-(e-r.1i)*r.1y,t,n):r.1B((e-r.1i)*r.1y,t,n)),r=o;1m 1b(r=15.3h;r&&(o=r.1l,!15.1A||d);)(r.2c||c>=r.1i&&!r.1A&&!r.1I)&&(r.2G?r.1B((r.2o?r.26():r.2l)-(e-r.1i)*r.1y,t,n):r.1B((e-r.1i)*r.1y,t,n)),r=o;15.32&&(t||15.32.36(15.1o.6b||15,15.1o.67||u)),a&&(15.1I||(h===15.1i||p!==15.1y)&&(0===15.1n||l>=15.26())&&(s&&(15.1p.4P&&15.1M(!1,!1),15.2c=!1),!t&&15.1o[a]&&15.1o[a].36(15.1o[a+"6l"]||15,15.1o[a+"6o"]||u)))}},c.5U=17(){1b(19 e=15.27;e;){1a(e.1A||e 2a r&&e.5U())18!0;e=e.1f}18!1},c.5g=17(e,t,r,i){i=i||-4Y;1b(19 s=[],o=15.27,u=0;o;)i>o.1i||(o 2a n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.3U(o.5g(!0,t,r)),u=s.1c))),o=o.1f;18 s},c.3W=17(e,t){1b(19 r=n.3W(e),i=r.1c,s=[],o=0;--i>-1;)(r[i].1U===15||t&&15.7A(r[i]))&&(s[o++]=r[i]);18 s},c.7A=17(e){1b(19 t=e.1U;t;){1a(t===15)18!0;t=t.1U}18!1},c.7l=17(e,t,n){n=n||0;1b(19 r,i=15.27,s=15.2L;i;)i.1i>=n&&(i.1i+=e),i=i.1f;1a(t)1b(r 1w s)s[r]>=n&&(s[r]+=e);18 15.35(!0)},c.2p=17(e,t){1a(!e&&!t)18 15.1M(!1,!1);1b(19 n=t?15.3W(t):15.5g(!0,!0,!1),r=n.1c,i=!1;--r>-1;)n[r].2p(e,t)&&(i=!0);18 i},c.9b=17(e){19 t=15.5g(!1,!0,!0),n=t.1c;1b(15.1n=15.1K=0;--n>-1;)t[n].1M(!1,!1);18 e!==!1&&(15.2L={}),15.35(!0)},c.5i=17(){1b(19 e=15.27;e;)e.5i(),e=e.1f;18 15},c.1M=17(e,n){1a(e===15.1I)1b(19 r=15.27;r;)r.1M(e,!0),r=r.1f;18 t.1x.1M.1Z(15,e,n)},c.2C=17(e){18 22.1c?(0!==15.2C()&&0!==e&&15.5N(15.1N/e),15):(15.2o&&15.26(),15.1N)},c.26=17(e){1a(!22.1c){1a(15.2o){1b(19 t,n,r=0,i=15.3h,s=9g;i;)t=i.1l,i.2o&&i.26(),i.1i>s&&15.4J&&!i.1A?15.1P(i,i.1i-i.2J):s=i.1i,0>i.1i&&!i.1A&&(r-=i.1i,15.1p.2F&&(15.1i+=i.1i/15.1y),15.7l(-i.1i,!1,-4Y),s=0),n=i.1i+i.2l/i.1y,n>r&&(r=n),i=t;15.1N=15.2l=r,15.2o=!1}18 15.2l}18 0!==15.26()&&0!==e&&15.5N(15.2l/e),15},c.cW=17(){1b(19 t=15.1p;t.1p;)t=t.1p;18 t===e.6Y},c.3y=17(){18 15.1A?15.1K:(15.1p.3y()-15.1i)*15.1y},r},!0)}),1T.3R&&1T.3b.4G()();(1T.3b||(1T.3b=[])).28(17(){"5v 5u";1T.3R("2j.7F",["2j.7v"],17(e){19 t,n,r,i=1T.6h||1T,s=i.4F.4A,o=2*1h.4l,u=1h.4l/2,a=s.7W,f=17(t,n){19 r=a("2j."+t,17(){},!0),i=r.1x=1g e;18 i.2M=r,i.2x=n,r},l=e.7X||17(){},c=17(e,t,n,r){19 i=a("2j."+e,{5R:1g t,5s:1g n,5r:1g r},!0);18 l(i,e),i},h=17(e,t,n){15.t=e,15.v=t,n&&(15.5t=n,n.5x=15,15.c=n.v-t,15.7x=n.t-e)},p=17(t,n){19 r=a("2j."+t,17(e){15.1R=e||0===e?e:1.c7,15.2k=1.ci*15.1R},!0),i=r.1x=1g e;18 i.2M=r,i.2x=n,i.3t=17(e){18 1g r(e)},r},d=c("7F",p("d3",17(e){18(e-=1)*e*((15.1R+1)*e+15.1R)+1}),p("d6",17(e){18 e*e*((15.1R+1)*e-15.1R)}),p("cU",17(e){18 1>(e*=2)?.5*e*e*((15.2k+1)*e-15.2k):.5*((e-=2)*e*((15.2k+1)*e+15.2k)+2)})),v=a("2j.5Z",17(e,t,n){t=t||0===t?t:.7,1d==e?e=.7:e>1&&(e=1),15.7V=1!==e?t:0,15.1R=(1-e)/2,15.2k=e,15.3c=15.1R+15.2k,15.3m=n===!0},!0),m=v.1x=1g e;18 m.2M=v,m.2x=17(e){19 t=e+(.5-e)*15.7V;18 15.1R>e?15.3m?1-(e=1-e/15.1R)*e:t-(e=1-e/15.1R)*e*e*e*t:e>15.3c?15.3m?1-(e=(e-15.3c)/15.1R)*e:t+(e-t)*(e=(e-15.3c)/15.1R)*e*e*e:15.3m?1:t},v.3Q=1g v(.7,.7),m.3t=v.3t=17(e,t,n){18 1g v(e,t,n)},t=a("2j.7S",17(e){e=e||1,15.1R=1/e,15.2k=e+1},!0),m=t.1x=1g e,m.2M=t,m.2x=17(e){18 0>e?e=0:e>=1&&(e=.cH),(15.2k*e>>0)*15.1R},m.3t=t.3t=17(e){18 1g t(e)},n=a("2j.7Y",17(t){t=t||{};1b(19 n,r,i,s,o,u,a=t.cT||"3r",f=[],l=0,c=0|(t.d4||20),p=c,d=t.d1!==!1,v=t.cX===!0,m=t.7J 2a e?t.7J:1d,g="2t"==1j t.7K?.4*t.7K:.4;--p>-1;)n=d?1h.7L():1/c*p,r=m?m.2x(n):n,"3r"===a?i=g:"cC"===a?(s=1-n,i=s*s*g):"1w"===a?i=n*n*g:.5>n?(s=2*n,i=.5*s*s*g):(s=2*(1-n),i=.5*s*s*g),d?r+=1h.7L()*i-.5*i:p%2?r+=.5*i:r-=.5*i,v&&(r>1?r=1:0>r&&(r=0)),f[l++]={x:n,y:r};1b(f.ch(17(e,t){18 e.x-t.x}),u=1g h(1,1,1d),p=c;--p>-1;)o=f[p],u=1g h(o.x,o.y,u);15.1l=1g h(0,0,0!==u.t?u:u.5t)},!0),m=n.1x=1g e,m.2M=n,m.2x=17(e){19 t=15.1l;1a(e>t.t){1b(;t.5t&&e>=t.t;)t=t.5t;t=t.5x}1m 1b(;t.5x&&t.t>=e;)t=t.5x;18 15.1l=t,t.v+(e-t.t)/t.7x*t.c},m.3t=17(e){18 1g n(e)},n.3Q=1g n,c("cm",f("cA",17(e){18 1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6i:7.2I*(e-=2.6d/2.75)*e+.6e}),f("cu",17(e){18 1/2.75>(e=1-e)?1-7.2I*e*e:2/2.75>e?1-(7.2I*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.2I*(e-=2.25/2.75)*e+.6i):1-(7.2I*(e-=2.6d/2.75)*e+.6e)}),f("co",17(e){19 t=.5>e;18 e=t?1-2*e:2*e-1,e=1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6i:7.2I*(e-=2.6d/2.75)*e+.6e,t?.5*(1-e):.5*e+.5})),c("cr",f("cs",17(e){18 1h.3l(1-(e-=1)*e)}),f("cp",17(e){18-(1h.3l(1-e*e)-1)}),f("cn",17(e){18 1>(e*=2)?-.5*(1h.3l(1-e*e)-1):.5*(1h.3l(1-(e-=2)*e)+1)})),r=17(t,n,r){19 i=a("2j."+t,17(e,t){15.1R=e||1,15.2k=t||r,15.3c=15.2k/o*(1h.cv(1/15.1R)||0)},!0),s=i.1x=1g e;18 s.2M=i,s.2x=n,s.3t=17(e,t){18 1g i(e,t)},i},c("cB",r("cz",17(e){18 15.1R*1h.3n(2,-10*e)*1h.2h((e-15.3c)*o/15.2k)+1},.3),r("cy",17(e){18-(15.1R*1h.3n(2,10*(e-=1))*1h.2h((e-15.3c)*o/15.2k))},.3),r("cw",17(e){18 1>(e*=2)?-.5*15.1R*1h.3n(2,10*(e-=1))*1h.2h((e-15.3c)*o/15.2k):.5*15.1R*1h.3n(2,-10*(e-=1))*1h.2h((e-15.3c)*o/15.2k)+1},.45)),c("cc",f("ca",17(e){18 1-1h.3n(2,-10*e)}),f("c8",17(e){18 1h.3n(2,10*(e-1))-.cd}),f("ce",17(e){18 1>(e*=2)?.5*1h.3n(2,10*(e-1)):.5*(2-1h.3n(2,-10*(e-1)))})),c("ck",f("cf",17(e){18 1h.2h(e*u)}),f("cJ",17(e){18-1h.2D(e*u)+1}),f("cZ",17(e){18-.5*(1h.2D(1h.4l*e)-1)})),a("2j.cV",{d0:17(t){18 e.7Z[t]}},!0),l(i.5Z,"5Z","3Q,"),l(n,"7Y","3Q,"),l(t,"7S","3Q,"),d},!0)}),1T.3R&&1T.3b.4G()();(1T.3b||(1T.3b=[])).28(17(){"5v 5u";1T.3R("4z.cE",["4z.7Q","5c"],17(e,t){19 n,r,i,s,o=17(){e.1Z(15,"4s"),15.2E.1c=0,15.1X=o.1x.1X},u={},a=o.1x=1g e("4s");a.2M=o,o.3Z="1.11.2",o.3J=2,o.8g=0,a="2d",o.6z={3k:a,7e:a,4x:a,4u:a,3M:a,3B:a,cP:a,6x:a,6w:a,33:a};19 f,l,c,h,p,d,v=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d)+/g,m=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d|\\+=\\d|\\-=\\d|\\+=.\\d|\\-=\\.\\d)+/g,g=/(?:\\+=|\\-=|\\-|\\b)[\\d\\-\\.]+[a-cN-cO-9]*(?:%|\\b)/3N,y=/[^\\d\\-\\.]/g,b=/(?:\\d|\\-|\\+|=|#|\\.)*/g,w=/1Y *= *([^)]*)/,E=/1Y:([^;]*)/,S=/3E\\(1Y *=.+?\\)/i,x=/^(5e|6m)/,T=/([A-Z])/g,N=/-([a-z])/3N,C=/(^(?:74\\(\\"|74\\())|(?:(\\"\\))$|\\)$)/3N,k=17(e,t){18 t.5h()},L=/(?:5Y|7s|7k)/i,A=/(8z|8O|8N|8L)=[\\d\\-\\.e]+/3N,O=/8x\\:5J\\.5L\\.5M\\(.+?\\)/i,M=/,(?=[^\\)]*(?:\\(|$))/3N,2q=1h.4l/31,D=31/1h.4l,P={},H=69,B=H.6a("77"),j=H.6a("ba"),F=o.4p={bb:u},I=b8.b7,q=17(){19 e,t=I.1k("b3"),n=H.6a("77");18 c=-1!==I.1k("b5")&&-1===I.1k("b6")&&(-1===t||1C(I.1t(t+8,1))>3),p=c&&6>1C(I.1t(I.1k("bc/")+8,1)),h=-1!==I.1k("bd"),/bk ([0-9]{1,}[\\.0-9]{0,})/.bl(I)&&(d=1q(4k.$1)),n.bm="<a 1v=\'3k:bj;1Y:.55;\'>a</a>",e=n.bi("a")[0],e?/^0.55/.2P(e.1v.1Y):!1}(),R=17(e){18 w.2P("1H"==1j e?e:(e.2R?e.2R.2i:e.1v.2i)||"")?1q(4k.$1)/23:1},U=17(e){1T.65&&65.6U(e)},z="",W="",X=17(e,t){t=t||B;19 n,r,i=t.1v;1a(2u 0!==i[e])18 e;1b(e=e.1u(0).5h()+e.1t(1),n=["O","be","64","bf","bg"],r=5;--r>-1&&2u 0===i[n[r]+e];);18 r>=0?(W=3===r?"64":n[r],z="-"+W.6R()+"-",W+e):1d},V=H.6Z?H.6Z.bh:17(){},$=o.c6=17(e,t,n,r,i){19 s;18 q||"1Y"!==t?(!r&&e.1v[t]?s=e.1v[t]:(n=n||V(e,1d))?(e=n.4m(t.1D(T,"-$1").6R()),s=e||n.1c?e:n[t]):e.2R&&(s=e.2R[t]),1d==i||s&&"3r"!==s&&"2n"!==s&&"2n 2n"!==s?s:i):R(e)},J=17(e,t,n,r,i){1a("2d"===r||!r)18 n;1a("2n"===r||!n)18 0;19 s,o=L.2P(t),u=e,a=B.1v,f=0>n;18 f&&(n=-n),"%"===r&&-1!==t.1k("3X")?s=n/23*(o?e.b2:e.b1):(a.37="3X:0 4S 8P;4q:"+$(e,"4q")+";aN-3B:0;","%"!==r&&u.7m?a[o?"aO":"70"]=n+r:(u=e.aP||H.aM,a[o?"3M":"3B"]=n+r),u.7m(B),s=1q(B[o?"4H":"4r"]),u.aL(B),0!==s||i||(s=J(e,t,n,r,!0))),f?-s:s},K=17(e,t,n){1a("8y"!==$(e,"4q",n))18 0;19 r="4u"===t?"5Y":"7r",i=$(e,"6w"+r,n);18 e["aH"+r]-(J(e,t,1q(i),i.1D(b,""))||0)},Q=17(e,t){19 n,r,i={};1a(t=t||V(e,1d))1a(n=t.1c)1b(;--n>-1;)i[t[n].1D(N,k)]=t.4m(t[n]);1m 1b(n 1w t)i[n]=t[n];1m 1a(t=e.2R||e.1v)1b(n 1w t)"1H"==1j n&&2u 0!==i[n]&&(i[n.1D(N,k)]=t[n]);18 q||(i.1Y=R(e)),r=44(e,t,!1),i.1F=r.1F,i.1S=r.1S,i.2f=r.2f,i.2g=r.2g,i.x=r.x,i.y=r.y,3j&&(i.z=r.z,i.1Q=r.1Q,i.21=r.21,i.2N=r.2N),i.7q&&3L i.7q,i},G=17(e,t,n,r,i){19 s,o,u,a={},f=e.1v;1b(o 1w n)"37"!==o&&"1c"!==o&&5X(o)&&(t[o]!==(s=n[o])||i&&i[o])&&-1===o.1k("aI")&&("2t"==1j s||"1H"==1j s)&&(a[o]="2n"!==s||"4u"!==o&&"3k"!==o?""!==s&&"2n"!==s&&"3r"!==s||"1H"!=1j t[o]||""===t[o].1D(y,"")?s:0:K(e,o),2u 0!==f[o]&&(u=1g ct(f,o,f[o],u)));1a(r)1b(o 1w r)"39"!==o&&(a[o]=r[o]);18{4T:a,42:u}},Y={3M:["5Y","7s"],3B:["7r","aK"]},Z=["7C","81","83","82"],3D=17(e,t,n){19 r=1q("3M"===t?e.4H:e.4r),i=Y[t],s=i.1c;1b(n=n||V(e,1d);--s>-1;)r-=1q($(e,"6x"+i[s],n,!0))||0,r-=1q($(e,"3X"+i[s]+"7k",n,!0))||0;18 r},3e=17(e,t){(1d==e||""===e||"2n"===e||"2n 2n"===e)&&(e="0 0");19 n=e.1s(" "),r=-1!==e.1k("4u")?"0%":-1!==e.1k("7e")?"23%":n[0],i=-1!==e.1k("3k")?"0%":-1!==e.1k("4x")?"23%":n[1];18 1d==i?i="0":"7d"===i&&(i="50%"),("7d"===r||5X(1q(r))&&-1===(r+"").1k("="))&&(r="50%"),t&&(t.8K=-1!==r.1k("%"),t.8H=-1!==i.1k("%"),t.aQ="="===r.1u(1),t.aR="="===i.1u(1),t.57=1q(r.1D(y,"")),t.5K=1q(i.1D(y,""))),r+" "+i+(n.1c>2?" "+n[2]:"")},3s=17(e,t){18"1H"==1j e&&"="===e.1u(1)?3q(e.1u(0)+"1",10)*1q(e.1t(2)):1q(e)-1q(t)},2B=17(e,t){18 1d==e?t:"1H"==1j e&&"="===e.1u(1)?3q(e.1u(0)+"1",10)*1C(e.1t(2))+t:1q(e)},3z=17(e,t,n,r){19 i,s,o,u,a=1e-6;18 1d==e?u=t:"2t"==1j e?u=e:(i=6r,s=e.1s("2q"),o=1C(s[0].1D(y,""))*(-1===e.1k("aY")?1:D)-("="===e.1u(1)?0:t),s.1c&&(r&&(r[n]=t+o),-1!==e.1k("aZ")&&(o%=i,o!==o%(i/2)&&(o=0>o?o+i:o-i)),-1!==e.1k("b0")&&0>o?o=(o+4Y*i)%i-(0|o/i)*i:-1!==e.1k("aX")&&o>0&&(o=(o-4Y*i)%i-(0|o/i)*i)),u=t+o),a>u&&u>-a&&(u=0),u},3G={aS:[0,1E,1E],aT:[0,1E,0],aU:[5j,5j,5j],8k:[0,0,0],aV:[2O,0,0],bn:[0,2O,2O],bo:[0,0,1E],bS:[0,0,2O],bT:[1E,1E,1E],bU:[1E,0,1E],bR:[2O,2O,0],bQ:[1E,1E,0],bM:[1E,bN,0],bO:[2O,2O,2O],bP:[2O,0,2O],bV:[0,2O,0],8P:[1E,0,0],c2:[1E,5j,c4],c1:[0,1E,1E],4a:[1E,1E,1E,0]},4W=17(e,t,n){18 e=0>e?e+1:e>1?e-1:e,0|1E*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},5d=17(e){19 t,n,r,i,s,o;18 e&&""!==e?"2t"==1j e?[e>>16,1E&e>>8,1E&e]:(","===e.1u(e.1c-1)&&(e=e.1t(0,e.1c-1)),3G[e]?3G[e]:"#"===e.1u(0)?(4===e.1c&&(t=e.1u(1),n=e.1u(2),r=e.1u(3),e="#"+t+t+n+n+r+r),e=3q(e.1t(1),16),[e>>16,1E&e>>8,1E&e]):"6m"===e.1t(0,3)?(e=e.2K(v),i=1C(e[0])%6r/6r,s=1C(e[1])/23,o=1C(e[2])/23,n=.5>=o?o*(s+1):o+s-o*s,t=2*o-n,e.1c>3&&(e[3]=1C(e[3])),e[0]=4W(i+1/3,t,n),e[1]=4W(i,t,n),e[2]=4W(i-1/3,t,n),e):(e=e.2K(v)||3G.4a,e[0]=1C(e[0]),e[1]=1C(e[1]),e[2]=1C(e[2]),e.1c>3&&(e[3]=1C(e[3])),e)):3G.8k},at="(?:\\\\b(?:(?:5e|6N|6m|bZ)\\\\(.+?\\\\))|\\\\B#.+?\\\\b";1b(a 1w 3G)at+="|"+a+"\\\\b";at=4k(at+")","3N");19 6I=17(e,t,n,r){1a(1d==e)18 17(e){18 e};19 i,s=t?(e.2K(at)||[""])[0]:"",o=e.1s(s).1G("").2K(g)||[],u=e.1t(0,e.1k(o[0])),a=")"===e.1u(e.1c-1)?")":"",f=-1!==e.1k(" ")?" ":",",l=o.1c,c=l>0?o[0].1D(v,""):"";18 l?i=t?17(e){19 t,h,p,d;1a("2t"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(d=e.1D(M,"|").1s("|"),p=0;d.1c>p;p++)d[p]=i(d[p]);18 d.1G(",")}1a(t=(e.2K(at)||[s])[0],h=e.1s(t).1G("").2K(g)||[],p=h.1c,l>p--)1b(;l>++p;)h[p]=n?h[0|(p-1)/2]:o[p];18 u+h.1G(f)+f+t+a+(-1!==e.1k("6D")?" 6D":"")}:17(e){19 t,s,h;1a("2t"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(s=e.1D(M,"|").1s("|"),h=0;s.1c>h;h++)s[h]=i(s[h]);18 s.1G(",")}1a(t=e.2K(g)||[],h=t.1c,l>h--)1b(;l>++h;)t[h]=n?t[0|(h-1)/2]:o[h];18 u+t.1G(f)+a}:17(e){18 e}},6A=17(e){18 e=e.1s(","),17(t,n,r,i,s,o,u){19 a,f=(n+"").1s(" ");1b(u={},a=0;4>a;a++)u[e[a]]=f[a]=f[a]||f[(a-1)/2>>0];18 i.2S(t,u,s,o)}},ct=(F.bL=17(e){15.2A.1X(e);1b(19 t,n,r,i,s=15.1z,o=s.8t,u=s.42,a=1e-6;u;)t=o[u.v],u.r?t=t>0?0|t+.5:0|t-.5:a>t&&t>-a&&(t=0),u.t[u.p]=t,u=u.1f;1a(s.8c&&(s.8c.1F=o.1F),1===e)1b(u=s.42;u;){1a(n=u.t,n.2r){1a(1===n.2r){1b(i=n.1W+n.s+n.3V,r=1;n.l>r;r++)i+=n["3g"+r]+n["2X"+(r+1)];n.e=i}}1m n.e=n.s+n.1W;u=u.1f}},17(e,t,n,r,i){15.t=e,15.p=t,15.v=n,15.r=i,r&&(r.1l=15,15.1f=r)}),24=(F.bK=17(e,t,n,r,i,s){19 o,u,a,f,l,c=r,h={},p={},d=n.3p,v=P;1b(n.3p=1d,P=t,r=l=n.2S(e,t,r,i),P=v,s&&(n.3p=d,c&&(c.1l=1d,c.1l&&(c.1l.1f=1d)));r&&r!==c;){1a(1>=r.2r&&(u=r.p,p[u]=r.s+r.c,h[u]=r.s,s||(f=1g ct(r,"s",u,f,r.r),r.c=0),1===r.2r))1b(o=r.l;--o>0;)a="3g"+o,u=r.p+"2q"+a,p[u]=r.1z[a],h[u]=r[a],s||(f=1g ct(r,a,u,f,r.5f[a]));r=r.1f}18{8t:h,bw:p,42:f,4f:l}},F.bx=17(e,t,r,i,o,u,a,f,l,c,h){15.t=e,15.p=t,15.s=r,15.c=i,15.n=a||t,e 2a 24||s.28(15.n),15.r=f,15.2r=u||0,l&&(15.2s=l,n=!0),15.b=2u 0===c?r:c,15.e=2u 0===h?r+i:h,o&&(15.1f=o,o.1l=15)}),4f=o.46=17(e,t,n,r,i,s,o,u,a,l){n=n||s||"",o=1g 24(e,t,0,0,o,l?2:1,1d,!1,u,n,r),r+="";19 c,h,p,d,g,y,b,w,E,S,T,N,C=n.1s(", ").1G(",").1s(" "),k=r.1s(", ").1G(",").1s(" "),L=C.1c,A=f!==!1;1b((-1!==r.1k(",")||-1!==n.1k(","))&&(C=C.1G(" ").1D(M,", ").1s(" "),k=k.1G(" ").1D(M,", ").1s(" "),L=C.1c),L!==k.1c&&(C=(s||"").1s(" "),L=C.1c),o.2A=a,o.1X=l,c=0;L>c;c++)1a(d=C[c],g=k[c],w=1q(d),w||0===w)o.3I("",w,3s(g,w),g.1D(m,""),A&&-1!==g.1k("2d"),!0);1m 1a(i&&("#"===d.1u(0)||3G[d]||x.2P(d)))N=","===g.1u(g.1c-1)?"),":")",d=5d(d),g=5d(g),E=d.1c+g.1c>6,E&&!q&&0===g[3]?(o["2X"+o.l]+=o.l?" 4a":"4a",o.e=o.e.1s(k[c]).1G("4a")):(q||(E=!1),o.3I(E?"6N(":"5e(",d[0],g[0]-d[0],",",!0,!0).3I("",d[1],g[1]-d[1],",",!0).3I("",d[2],g[2]-d[2],E?",":N,!0),E&&(d=4>d.1c?1:d[3],o.3I("",d,(4>g.1c?1:g[3])-d,N,!1)));1m 1a(y=d.2K(v)){1a(b=g.2K(m),!b||b.1c!==y.1c)18 o;1b(p=0,h=0;y.1c>h;h++)T=y[h],S=d.1k(T,p),o.3I(d.1t(p,S-p),1C(T),3s(b[h],T),"",A&&"2d"===d.1t(S+T.1c,2),0===h),p=S+T.1c;o["2X"+o.l]+=d.1t(p)}1m o["2X"+o.l]+=o.l?" "+d:d;1a(-1!==r.1k("=")&&o.1z){1b(N=o.1W+o.1z.s,c=1;o.l>c;c++)N+=o["2X"+c]+o.1z["3g"+c];o.e=N+o["2X"+c]}18 o.l||(o.2r=-1,o.1W=o.e),o.3H||o},2m=9;1b(a=24.1x,a.l=a.2s=0;--2m>0;)a["3g"+2m]=0,a["2X"+2m]="";a.1W="",a.1f=a.1l=a.3H=a.1z=a.2A=a.1X=a.5f=1d,a.3I=17(e,t,n,r,i,s){19 o=15,u=o.l;18 o["2X"+u]+=s&&u?" "+e:e||"",n||0===u||o.2A?(o.l++,o.2r=o.1X?2:1,o["2X"+o.l]=r||"",u>0?(o.1z["3g"+u]=t+n,o.5f["3g"+u]=i,o["3g"+u]=t,o.2A||(o.3H=1g 24(o,"3g"+u,t,n,o.3H||o,0,o.n,i,o.2s),o.3H.1W=0),o):(o.1z={s:t+n},o.5f={},o.s=t,o.c=n,o.r=i,o)):(o["2X"+u]+=t+(r||""),o)};19 5G=17(e,t){t=t||{},15.p=t.2T?X(e)||e:e,u[e]=u[15.p]=15,15.2U=t.4R||6I(t.2y,t.4g,t.by,t.47),t.2b&&(15.2S=t.2b),15.8D=t.4g,15.47=t.47,15.4V=t.4V,15.49=t.2y,15.2s=t.5H||0},1L=F.bv=17(e,t,n){"3T"!=1j t&&(t={2b:n});19 r,i,s=e.1s(","),o=t.2y;1b(n=n||[o],r=0;s.1c>r;r++)t.2T=0===r&&t.2T,t.2y=n[r]||o,i=1g 5G(s[r],t)},7H=17(e){1a(!u[e]){19 t=e.1u(0).5h()+e.1t(1)+"8j";1L(e,{2b:17(e,n,r,i,s,o,a){19 f=(1T.6h||1T).4F.4A.4z[t];18 f?(f.bu(),u[r].2S(e,n,r,i,s,o,a)):(U("bp: "+t+" bq br 8a bs."),s)}})}};a=5G.1x,a.46=17(e,t,n,r,i,s){19 o,u,a,f,l,c,h=15.4V;1a(15.47&&(M.2P(n)||M.2P(t)?(u=t.1D(M,"|").1s("|"),a=n.1D(M,"|").1s("|")):h&&(u=[t],a=[n])),a){1b(f=a.1c>u.1c?a.1c:u.1c,o=0;f>o;o++)t=u[o]=u[o]||15.49,n=a[o]=a[o]||15.49,h&&(l=t.1k(h),c=n.1k(h),l!==c&&(n=-1===c?a:u,n[o]+=" "+h));t=u.1G(", "),n=a.1G(", ")}18 4f(e,15.p,t,n,15.8D,15.49,r,15.2s,i,s)},a.2S=17(e,t,n,r,s,o){18 15.46(e.1v,15.2U($(e,15.p,i,!1,15.49)),15.2U(t),s,o)},o.bA=17(e,t,n){1L(e,{2b:17(e,r,i,s,o,u){19 a=1g 24(e,i,0,0,o,2,i,!1,n);18 a.2A=u,a.1X=t(e,r,s.2V,i),a},5H:n})};19 6K="2f,2g,2N,x,y,z,1S,1F,1Q,21,33".1s(","),bt=X("3P"),8B=z+"3P",5m=X("4Q"),3j=1d!==X("33"),44=17(e,t,n,r){1a(e.4b&&n&&!r)18 e.4b;19 i,s,u,a,f,l,c,h,p,d,v,m,g,y=n?e.4b||{30:0}:{30:0},b=0>y.2f,w=2e-5,E=54,S=bH.99,x=S*2q,T=3j?1q($(e,5m,t,!1,"0 0 0").1s(" ")[2])||y.2Q||0:0;1b(bt?i=$(e,8B,t,!0):e.2R&&(i=e.2R.2i.2K(A),i=i&&4===i.1c?[i[0].1t(4),1C(i[2].1t(4)),1C(i[1].1t(4)),i[3].1t(4),y.x||0,y.y||0].1G(","):""),s=(i||"").2K(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3N)||[],u=s.1c;--u>-1;)a=1C(s[u]),s[u]=(f=a-(a|=0))?(0|f*E+(0>f?-.5:.5))/E+a:a;1a(16===s.1c){19 N=s[8],C=s[9],k=s[10],L=s[12],O=s[13],M=s[14];1a(y.2Q&&(M=-y.2Q,L=N*M-s[12],O=C*M-s[13],M=k*M+y.2Q-s[14]),!n||r||1d==y.1Q){19 P,H,B,j,F,I,q,R=s[0],U=s[1],z=s[2],W=s[3],X=s[4],V=s[5],J=s[6],K=s[7],Q=s[11],G=1h.4w(J,k),Y=-x>G||G>x;y.1Q=G*D,G&&(j=1h.2D(-G),F=1h.2h(-G),P=X*j+N*F,H=V*j+C*F,B=J*j+k*F,N=X*-F+N*j,C=V*-F+C*j,k=J*-F+k*j,Q=K*-F+Q*j,X=P,V=H,J=B),G=1h.4w(N,R),y.21=G*D,G&&(I=-x>G||G>x,j=1h.2D(-G),F=1h.2h(-G),P=R*j-N*F,H=U*j-C*F,B=z*j-k*F,C=U*F+C*j,k=z*F+k*j,Q=W*F+Q*j,R=P,U=H,z=B),G=1h.4w(U,V),y.1F=G*D,G&&(q=-x>G||G>x,j=1h.2D(-G),F=1h.2h(-G),R=R*j+X*F,H=U*j+V*F,V=U*-F+V*j,J=z*-F+J*j,U=H),q&&Y?y.1F=y.1Q=0:q&&I?y.1F=y.21=0:I&&Y&&(y.21=y.1Q=0),y.2f=(0|1h.3l(R*R+U*U)*E+.5)/E,y.2g=(0|1h.3l(V*V+C*C)*E+.5)/E,y.2N=(0|1h.3l(J*J+k*k)*E+.5)/E,y.1S=0,y.33=Q?1/(0>Q?-Q:Q):0,y.x=L,y.y=O,y.z=M}}1m 1a(!(3j&&!r&&s.1c&&y.x===s[4]&&y.y===s[5]&&(y.1Q||y.21)||2u 0!==y.x&&"3r"===$(e,"6s",t))){19 Z=s.1c>=6,3D=Z?s[0]:1,3e=s[1]||0,3s=s[2]||0,2B=Z?s[3]:1;y.x=s[4]||0,y.y=s[5]||0,l=1h.3l(3D*3D+3e*3e),c=1h.3l(2B*2B+3s*3s),h=3D||3e?1h.4w(3e,3D)*D:y.1F||0,p=3s||2B?1h.4w(3s,2B)*D+h:y.1S||0,d=l-1h.56(y.2f||0),v=c-1h.56(y.2g||0),1h.56(p)>90&&bJ>1h.56(p)&&(b?(l*=-1,p+=0>=h?31:-31,h+=0>=h?31:-31):(c*=-1,p+=0>=p?31:-31)),m=(h-y.1F)%31,g=(p-y.1S)%31,(2u 0===y.1S||d>w||-w>d||v>w||-w>v||m>-S&&S>m&&5O|m*E||g>-S&&S>g&&5O|g*E)&&(y.2f=l,y.2g=c,y.1F=h,y.1S=p),3j&&(y.1Q=y.21=y.z=0,y.33=1q(o.8g)||0,y.2N=1)}y.2Q=T;1b(u 1w y)w>y[u]&&y[u]>-w&&(y[u]=0);18 n&&(e.4b=y),y},7O=17(e){19 t,n,r=15.1z,i=-r.1F*2q,s=i+r.1S*2q,o=54,u=(0|1h.2D(i)*r.2f*o)/o,a=(0|1h.2h(i)*r.2f*o)/o,f=(0|1h.2h(s)*-r.2g*o)/o,l=(0|1h.2D(s)*r.2g*o)/o,c=15.t.1v,h=15.t.2R;1a(h){n=a,a=-f,f=-n,t=h.2i,c.2i="";19 p,v,m=15.t.4H,g=15.t.4r,y="8y"!==h.4q,E="8x:5J.5L.5M(8z="+u+", 8O="+a+", 8N="+f+", 8L="+l,S=r.x,x=r.y;1a(1d!=r.57&&(p=(r.8K?.8I*m*r.57:r.57)-m/2,v=(r.8H?.8I*g*r.5K:r.5K)-g/2,S+=p-(p*u+v*a),x+=v-(p*f+v*l)),y?(p=m/2,v=g/2,E+=", 8E="+(p-(p*u+v*a)+S)+", 8G="+(v-(p*f+v*l)+x)+")"):E+=", bF=\'2n bB\')",c.2i=-1!==t.1k("5J.5L.5M(")?t.1D(O,E):E+" "+t,(0===e||1===e)&&1===u&&0===a&&0===f&&1===l&&(y&&-1===E.1k("8E=0, 8G=0")||w.2P(t)&&23!==1q(4k.$1)||-1===t.1k("bD("&&t.1k("bE"))&&c.6Q("2i")),!y){19 T,N,C,k=8>d?1:-1;1b(p=r.5l||0,v=r.58||0,r.5l=1h.59((m-((0>u?-u:u)*m+(0>a?-a:a)*g))/2+S),r.58=1h.59((g-((0>l?-l:l)*g+(0>f?-f:f)*m))/2+x),2m=0;4>2m;2m++)N=Z[2m],T=h[N],n=-1!==T.1k("2d")?1q(T):J(15.t,N,1q(T),T.1D(b,""))||0,C=n!==r[N]?2>2m?-r.5l:-r.58:2>2m?p-r.5l:v-r.58,c[N]=(r[N]=1h.59(n-C*(0===2m||2===2m?1:k)))+"2d"}}},7D=17(){19 e,t,n,r,i,s,o,u,a,f,l,c,p,d,v,m,g,y,b,w,E,S,x,T=15.1z,N=15.t.1v,C=T.1F*2q,k=T.2f,L=T.2g,A=T.2N,O=T.33;1a(h){19 M=1e-4;M>k&&k>-M&&(k=A=2e-5),M>L&&L>-M&&(L=A=2e-5),!O||T.z||T.1Q||T.21||(O=0)}1a(C||T.1S)y=1h.2D(C),b=1h.2h(C),e=y,i=b,T.1S&&(C-=T.1S*2q,y=1h.2D(C),b=1h.2h(C)),t=-b,s=y;1m{1a(!(T.21||T.1Q||1!==A||O))18 N[bt]="bC("+T.x+"2d,"+T.y+"2d,"+T.z+"2d)"+(1!==k||1!==L?" 48("+k+","+L+")":""),2u 0;e=s=1,t=i=0}l=1,n=r=o=u=a=f=c=p=d=0,v=O?-1/O:0,m=T.2Q,g=54,C=T.21*2q,C&&(y=1h.2D(C),b=1h.2h(C),a=l*-b,p=v*-b,n=e*b,o=i*b,l*=y,v*=y,e*=y,i*=y),C=T.1Q*2q,C&&(y=1h.2D(C),b=1h.2h(C),w=t*y+n*b,E=s*y+o*b,S=f*y+l*b,x=d*y+v*b,n=t*-b+n*y,o=s*-b+o*y,l=f*-b+l*y,v=d*-b+v*y,t=w,s=E,f=S,d=x),1!==A&&(n*=A,o*=A,l*=A,v*=A),1!==L&&(t*=L,s*=L,f*=L,d*=L),1!==k&&(e*=k,i*=k,a*=k,p*=k),m&&(c-=m,r=n*c,u=o*c,c=l*c+m),r=(w=(r+=T.x)-(r|=0))?(0|w*g+(0>w?-.5:.5))/g+r:r,u=(w=(u+=T.y)-(u|=0))?(0|w*g+(0>w?-.5:.5))/g+u:u,c=(w=(c+=T.z)-(c|=0))?(0|w*g+(0>w?-.5:.5))/g+c:c,N[bt]="bG("+[(0|e*g)/g,(0|i*g)/g,(0|a*g)/g,(0|p*g)/g,(0|t*g)/g,(0|s*g)/g,(0|f*g)/g,(0|d*g)/g,(0|n*g)/g,(0|o*g)/g,(0|l*g)/g,(0|v*g)/g,r,u,c,O?1+ -c/O:1].1G(",")+")"},7B=17(){19 e,t,n,r,i,s,o,u,a,f=15.1z,l=15.t,c=l.1v;h&&(e=c.3k?"3k":c.4x?"4x":1q($(l,"3k",1d,!1))?"4x":"3k",t=$(l,e,1d,!1),n=1q(t)||0,r=t.1t((n+"").1c)||"2d",f.6y=!f.6y,c[e]=(f.6y?n+.8v:n-.8v)+r),f.1F||f.1S?(i=f.1F*2q,s=i-f.1S*2q,o=54,u=f.2f*o,a=f.2g*o,c[bt]="8b("+(0|1h.2D(i)*u)/o+","+(0|1h.2h(i)*u)/o+","+(0|1h.2h(s)*-a)/o+","+(0|1h.2D(s)*a)/o+","+f.x+","+f.y+")"):c[bt]="8b("+f.2f+",0,0,"+f.2g+","+f.x+","+f.y+")"};1L("3P,48,2f,2g,2N,x,y,z,1F,1Q,21,6u,1S,30,6t,6B,6C,bI,4Q,8s,8n,8Q,4E",{2b:17(e,t,n,r,s,o,u){1a(r.3p)18 s;19 a,f,l,c,h,p,d,v=r.3p=44(e,i,!0,u.8Q),m=e.1v,g=1e-6,y=6K.1c,b=u,w={};1a("1H"==1j b.3P&&bt)l=m.37,m[bt]=b.3P,m.6s="bz",a=44(e,1d,!1),m.37=l;1m 1a("3T"==1j b){1a(a={2f:2B(1d!=b.2f?b.2f:b.48,v.2f),2g:2B(1d!=b.2g?b.2g:b.48,v.2g),2N:2B(1d!=b.2N?b.2N:b.48,v.2N),x:2B(b.x,v.x),y:2B(b.y,v.y),z:2B(b.z,v.z),33:2B(b.8s,v.33)},d=b.8n,1d!=d)1a("3T"==1j d)1b(l 1w d)b[l]=d[l];1m b.1F=d;a.1F=3z("1F"1w b?b.1F:"6t"1w b?b.6t+"6J":"6u"1w b?b.6u:v.1F,v.1F,"1F",w),3j&&(a.1Q=3z("1Q"1w b?b.1Q:"6B"1w b?b.6B+"6J":v.1Q||0,v.1Q,"1Q",w),a.21=3z("21"1w b?b.21:"6C"1w b?b.6C+"6J":v.21||0,v.21,"21",w)),a.1S=1d==b.1S?v.1S:3z(b.1S,v.1S),a.30=1d==b.30?v.30:3z(b.30,v.30),(f=a.30-v.30)&&(a.1S+=f,a.1F+=f)}1b(1d!=b.4E&&(v.4E=b.4E,p=!0),h=v.4E||v.z||v.1Q||v.21||a.z||a.1Q||a.21||a.33,h||1d==b.48||(a.2N=1);--y>-1;)n=6K[y],c=a[n]-v[n],(c>g||-g>c||1d!=P[n])&&(p=!0,s=1g 24(v,n,v[n],c,s),n 1w w&&(s.e=w[n]),s.1W=0,s.2A=o,r.2E.28(s.n));18 c=b.4Q,(c||3j&&h&&v.2Q)&&(bt?(p=!0,n=5m,c=(c||$(e,n,i,!1,"50% 50%"))+"",s=1g 24(m,n,0,0,s,-1,"4Q"),s.b=m[n],s.2A=o,3j?(l=v.2Q,c=c.1s(" "),v.2Q=(c.1c>2&&(0===l||"1J"!==c[2])?1q(c[2]):l)||0,s.1W=s.e=m[n]=c[0]+" "+(c[1]||"50%")+" 1J",s=1g 24(v,"2Q",0,0,s,-1,s.n),s.b=l,s.1W=s.e=v.2Q):s.1W=s.e=m[n]=c):3e(c+"",v)),p&&(r.3S=h||3===15.3S?3:2),s},2T:!0}),1L("bY",{2y:"1J 1J 1J 1J #6V",2T:!0,4g:!0,47:!0,4V:"6D"}),1L("bX",{2y:"1J",2b:17(e,t,n,s,o){t=15.2U(t);19 u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=["c0","c3","bW","aW"],T=e.1v;1b(v=1q(e.4H),m=1q(e.4r),u=t.1s(" "),a=0;x.1c>a;a++)15.p.1k("3X")&&(x[a]=X(x[a])),c=l=$(e,x[a],i,!1,"1J"),-1!==c.1k(" ")&&(l=c.1s(" "),c=l[0],l=l[1]),h=f=u[a],p=1q(c),y=c.1t((p+"").1c),b="="===h.1u(1),b?(d=3q(h.1u(0)+"1",10),h=h.1t(2),d*=1q(h),g=h.1t((d+"").1c-(0>d?1:0))||""):(d=1q(h),g=h.1t((d+"").1c)),""===g&&(g=r[n]||y),g!==y&&(w=J(e,"6X",p,y),E=J(e,"aJ",p,y),"%"===g?(c=23*(w/v)+"%",l=23*(E/m)+"%"):"4d"===g?(S=J(e,"6X",1,"4d"),c=w/S+"4d",l=E/S+"4d"):(c=w+"2d",l=E+"2d"),b&&(h=1q(c)+d+g,f=1q(l)+d+g)),o=4f(T,x[a],c+" "+l,h+" "+f,!1,"1J",o);18 o},2T:!0,4R:6I("1J 1J 1J 1J",!1,!0)}),1L("b4",{2y:"0 0",2b:17(e,t,n,r,s,o){19 u,a,f,l,c,h,p="b9-4q",v=i||V(e,1d),m=15.2U((v?d?v.4m(p+"-x")+" "+v.4m(p+"-y"):v.4m(p):e.2R.c5+" "+e.2R.cQ)||"0 0"),g=15.2U(t);1a(-1!==m.1k("%")!=(-1!==g.1k("%"))&&(h=$(e,"cS").1D(C,""),h&&"3r"!==h)){1b(u=m.1s(" "),a=g.1s(" "),j.cM("cG",h),f=2;--f>-1;)m=u[f],l=-1!==m.1k("%"),l!==(-1!==a[f].1k("%"))&&(c=0===f?e.4H-j.3M:e.4r-j.3B,u[f]=l?1q(m)/23*c+"2d":23*(1q(m)/c)+"%");m=u.1G(" ")}18 15.46(e.1v,m,g,s,o)},4R:3e}),1L("cI",{2y:"0 0",4R:3e}),1L("33",{2y:"1J",2T:!0}),1L("cK",{2y:"50% 50%",2T:!0}),1L("cY",{2T:!0}),1L("cj",{2T:!0}),1L("cx",{2T:!0}),1L("6w",{2b:6A("83,81,82,7C")}),1L("6x",{2b:6A("cq,cl,cb,cF")}),1L("c9",{2y:"7R(1J,1J,1J,1J)",2b:17(e,t,n,r,s,o){19 u,a,f;18 9>d?(a=e.2R,f=8>d?" ":",",u="7R("+a.aG+f+a.cg+f+a.cD+f+a.d2+")",t=15.2U(t).1s(",").1G(f)):(u=15.2U($(e,15.p,i,!1,15.49)),t=15.2U(t)),15.46(e.1v,u,t,s,o)}}),1L("d5",{2y:"1J 1J 1J #6V",4g:!0,47:!0}),1L("7N,85",{2b:17(e,t,n,r,i){18 i}}),1L("3X",{2y:"1J 4S #6O",2b:17(e,t,n,r,s,o){18 15.46(e.1v,15.2U($(e,"70",i,!1,"1J")+" "+$(e,"cL",i,!1,"4S")+" "+$(e,"cR",i,!1,"#6O")),15.2U(t),s,o)},4g:!0,4R:17(e){19 t=e.1s(" ");18 t[0]+" "+(t[1]||"4S")+" "+(e.2K(at)||["#6O"])[0]}}),1L("9E,6S,6W",{2b:17(e,t,n,r,i){19 s=e.1v,o="6S"1w s?"6S":"6W";18 1g 24(s,o,0,0,i,-1,n,!1,0,s[o],t)}});19 73=17(e){19 t,n=15.t,r=n.2i||$(15.1z,"2i"),i=0|15.s+15.c*e;23===i&&(-1===r.1k("9k(")&&-1===r.1k("9e(")&&-1===r.1k("98(")?(n.6Q("2i"),t=!$(15.1z,"2i")):(n.2i=r.1D(S,""),t=!0)),t||(15.3O&&(n.2i=r=r||"3E(1Y="+i+")"),-1===r.1k("1Y")?0===i&&15.3O||(n.2i=r+" 3E(1Y="+i+")"):n.2i=r.1D(w,"1Y="+i))};1L("1Y,3E,5n",{2y:"1",2b:17(e,t,n,r,s,o){19 u=1q($(e,"1Y",i,!1,"1")),a=e.1v,f="5n"===n;18"1H"==1j t&&"="===t.1u(1)&&(t=("-"===t.1u(0)?-1:1)*1q(t.1t(2))+u),f&&1===u&&"5z"===$(e,"6E",i)&&0!==t&&(u=0),q?s=1g 24(a,"1Y",u,t-u,s):(s=1g 24(a,"1Y",23*u,23*(t-u),s),s.3O=f?1:0,a.7z=1,s.2r=2,s.b="3E(1Y="+s.s+")",s.e="3E(1Y="+(s.s+s.c)+")",s.1z=e,s.2A=o,s.1X=73),f&&(s=1g 24(a,"6E",0,0,s,-1,1d,!1,0,0!==u?"6T":"5z",0===t?"5z":"6T"),s.1W="6T",r.2E.28(s.n),r.2E.28(n)),s}});19 53=17(e,t){t&&(e.88?e.88(t.1D(T,"-$1").6R()):e.6Q(t))},7M=17(e){1a(15.t.4K=15,1===e||0===e){15.t.39=0===e?15.b:15.e;1b(19 t=15.1z,n=15.t.1v;t;)t.v?n[t.p]=t.v:53(n,t.p),t=t.1f;1===e&&15.t.4K===15&&(15.t.4K=1d)}1m 15.t.39!==15.e&&(15.t.39=15.e)};1L("39",{2b:17(e,t,r,s,o,u,a){19 f,l,c,h,p,d=e.39,v=e.1v.37;1a(o=s.6F=1g 24(e,r,0,0,o,2),o.1X=7M,o.2s=-11,n=!0,o.b=d,l=Q(e,i),c=e.4K){1b(h={},p=c.1z;p;)h[p.p]=1,p=p.1f;c.1X(1)}18 e.4K=o,o.e="="!==t.1u(1)?t:d.1D(4k("\\\\s*\\\\b"+t.1t(2)+"\\\\b"),"")+("+"===t.1u(0)?" "+t.1t(2):""),s.2V.1N&&(e.39=o.e,f=G(e,l,Q(e),a,h),e.39=d,o.1z=f.42,e.1v.37=v,o=o.3H=s.2S(e,f.4T,o,u)),o}});19 7I=17(e){1a((1===e||0===e)&&15.1z.1K===15.1z.2l&&"7G"!==15.1z.1z){19 t,n,r,i,s=15.t.1v,o=u.3P.2S;1a("3Y"===15.e)s.37="",i=!0;1m 1b(t=15.e.1s(","),r=t.1c;--r>-1;)n=t[r],u[n]&&(u[n].2S===o?i=!0:n="4Q"===n?5m:u[n].p),53(s,n);i&&(53(s,bt),15.t.4b&&3L 15.t.4b)}};1b(1L("9d",{2b:17(e,t,r,i,s){18 s=1g 24(e,r,0,0,s,2),s.1X=7I,s.e=t,s.2s=-10,s.1z=i.2V,n=!0,s}}),a="9m,9v,9u,9w".1s(","),2m=a.1c;2m--;)7H(a[2m]);a=o.1x,a.1r=1d,a.6M=17(e,t,u){1a(!e.3o)18!1;15.7t=e,15.2V=u,15.7E=t,f=t.7N,n=!1,r=t.6z||o.6z,i=V(e,""),s=15.2E;19 a,h,d,v,m,g,y,b,w,S=e.1v;1a(l&&""===S.3F&&(a=$(e,"3F",i),("2n"===a||""===a)&&(S.3F=0)),"1H"==1j t&&(v=S.37,a=Q(e,i),S.37=v+";"+t,a=G(e,a,Q(e)).4T,!q&&E.2P(t)&&(a.1Y=1q(4k.$1)),t=a,S.37=v),15.1r=h=15.2S(e,t,1d),15.3S){1b(w=3===15.3S,bt?c&&(l=!0,""===S.3F&&(y=$(e,"3F",i),("2n"===y||""===y)&&(S.3F=0)),p&&(S.7y=15.7E.7y||(w?"9p":"5z"))):S.7z=1,d=h;d&&d.1f;)d=d.1f;b=1g 24(e,"3P",0,0,1d,2),15.5w(b,1d,d),b.1X=w&&3j?7D:bt?7B:7O,b.1z=15.3p||44(e,i,!0),s.4G()}1a(n){1b(;h;){1b(g=h.1f,d=v;d&&d.2s>h.2s;)d=d.1f;(h.1l=d?d.1l:m)?h.1l.1f=h:v=h,(h.1f=d)?d.1l=h:m=h,h=g}15.1r=v}18!0},a.2S=17(e,t,n,s){19 o,a,l,c,h,p,d,v,m,g,y=e.1v;1b(o 1w t)p=t[o],a=u[o],a?n=a.2S(e,p,o,15,n,s,t):(h=$(e,o,i)+"",m="1H"==1j p,"4g"===o||"8Y"===o||"aj"===o||-1!==o.1k("ai")||m&&x.2P(p)?(m||(p=5d(p),p=(p.1c>3?"6N(":"5e(")+p.1G(",")+")"),n=4f(y,o,h,p,!0,"4a",n,0,s)):!m||-1===p.1k(" ")&&-1===p.1k(",")?(l=1q(h),d=l||0===l?h.1t((l+"").1c):"",(""===h||"2n"===h)&&("3M"===o||"3B"===o?(l=3D(e,o,i),d="2d"):"4u"===o||"3k"===o?(l=K(e,o,i),d="2d"):(l="1Y"!==o?0:1,d="")),g=m&&"="===p.1u(1),g?(c=3q(p.1u(0)+"1",10),p=p.1t(2),c*=1q(p),v=p.1D(b,"")):(c=1q(p),v=m?p.1t((c+"").1c)||"":""),""===v&&(v=r[o]||d),p=c||0===c?(g?c+l:c)+v:t[o],d!==v&&""!==v&&(c||0===c)&&(l||0===l)&&(l=J(e,o,l,d),"%"===v?(l/=J(e,o,23,"%")/23,l>23&&(l=23),t.85!==!0&&(h=l+"%")):"4d"===v?l/=J(e,o,1,"4d"):(c=J(e,o,c,v),v="2d"),g&&(c||0===c)&&(p=c+l+v)),g&&(c+=l),!l&&0!==l||!c&&0!==c?2u 0!==y[o]&&(p||"ad"!=p+""&&1d!=p)?(n=1g 24(y,o,c||l||0,0,n,-1,o,!1,0,h,p),n.1W="3r"!==p||"6s"!==o&&-1===o.1k("ae")?p:h):U("ao "+o+" 6v az: "+t[o]):(n=1g 24(y,o,l,c-l,n,0,o,f!==!1&&("2d"===v||"3F"===o),0,h,p),n.1W=v)):n=4f(y,o,h,p,!0,1d,n,0,s)),s&&n&&!n.2A&&(n.2A=s);18 n},a.1X=17(e){19 t,n,r,i=15.1r,s=1e-6;1a(1!==e||15.2V.1n!==15.2V.1N&&0!==15.2V.1n)1a(e||15.2V.1n!==15.2V.1N&&0!==15.2V.1n||15.2V.1O===-1e-6)1b(;i;){1a(t=i.c*e+i.s,i.r?t=t>0?0|t+.5:0|t-.5:s>t&&t>-s&&(t=0),i.2r)1a(1===i.2r)1a(r=i.l,2===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b;1m 1a(3===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b+i.6L+i.6H;1m 1a(4===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b+i.6L+i.6H+i.79+i.7u;1m 1a(5===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b+i.6L+i.6H+i.79+i.7u+i.9B+i.9F;1m{1b(n=i.1W+t+i.3V,r=1;i.l>r;r++)n+=i["3g"+r]+i["2X"+(r+1)];i.t[i.p]=n}1m-1===i.2r?i.t[i.p]=i.1W:i.1X&&i.1X(e);1m i.t[i.p]=t+i.1W;i=i.1f}1m 1b(;i;)2!==i.2r?i.t[i.p]=i.b:i.1X(e),i=i.1f;1m 1b(;i;)2!==i.2r?i.t[i.p]=i.e:i.1X(e),i=i.1f},a.9H=17(e){15.3S=e||3===15.3S?3:2,15.3p=15.3p||44(15.7t,i,!0)},a.5w=17(e,t,n,r){18 e&&(t&&(t.1l=e),e.1f&&(e.1f.1l=e.1l),e.1l?e.1l.1f=e.1f:15.1r===e&&(15.1r=e.1f,r=!0),n?n.1f=e:r||1d!==15.1r||(15.1r=e),e.1f=t,e.1l=n),e},a.2p=17(t){19 n,r,i,s=t;1a(t.5n||t.3E){s={};1b(r 1w t)s[r]=t[r];s.1Y=1,s.5n&&(s.6E=1)}18 t.39&&(n=15.6F)&&(i=n.3H,i&&i.1l?15.5w(i.1l,n.1f,i.1l.1l):i===15.1r&&(15.1r=n.1f),n.1f&&15.5w(n.1f,n.1f.1f,i.1l),15.6F=1d),e.1x.2p.1Z(15,s)};19 4n=17(e,t,n){19 r,i,s,o;1a(e.6G)1b(i=e.1c;--i>-1;)4n(e[i],t,n);1m 1b(r=e.7j,i=r.1c;--i>-1;)s=r[i],o=s.2r,s.1v&&(t.28(Q(s)),n&&n.28(s)),1!==o&&9!==o&&11!==o||!s.7j.1c||4n(s,t,n)};18 o.9X=17(e,n,r){19 i,s,o,u=t.3v(e,n,r),a=[u],f=[],l=[],c=[],h=t.4p.7i;1b(e=u.2z||u.2v,4n(e,f,c),u.1B(n,!0),4n(e,l),u.1B(0,!0),u.1M(!0),i=c.1c;--i>-1;)1a(s=G(c[i],f[i],l[i]),s.42){s=s.4T;1b(o 1w r)h[o]&&(s[o]=r[o]);a.28(t.3v(c[i],n,s))}18 a},e.6P([o]),o},!0)}),1T.3R&&1T.3b.4G()()',62,813,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||function|return|var|if|for|length|null||_next|new|Math|_startTime|typeof|indexOf|_prev|else|_time|vars|_timeline|parseFloat|_firstPT|split|substr|charAt|style|in|prototype|_timeScale|data|_paused|render|Number|replace|255|rotation|join|string|_gc|0px|_totalTime|mt|_enabled|_duration|_rawPrevTime|add|rotationX|_p1|skewX|window|timeline|immediateRender|xs0|setRatio|opacity|call||rotationY|arguments|100|ht||totalDuration|_first|push|_startAt|instanceof|parser|_active|px||scaleX|scaleY|sin|filter|easing|_p2|_totalDuration|dt|auto|_dirty|_kill|_|type|pr|number|void|target|_initted|getRatio|defaultValue|_targets|plugin|rt|duration|cos|_overwriteProps|smoothChildTiming|_reversed|_ease|5625|_delay|match|_labels|constructor|scaleZ|128|test|zOrigin|currentStyle|parse|prefix|format|_tween|splice|xs|_siblings|totalTime|skewY|180|_onUpdate|perspective|paused|_uncache|apply|cssText|startAt|className|wake|_gsQueue|_p3|_parseTimeOrLabel|tt|_overwrittenProps|xn|_last|ratio|St|top|sqrt|_calcEnd|pow|nodeType|_transform|parseInt|none|nt|config|time|to|selector|tweens|rawTime|it|_propLookup|height|_remove|et|alpha|zIndex|st|xfirst|appendXtra|API|Array|delete|width|gi|xn1|transform|ease|_gsDefine|_transformType|object|concat|xs1|getTweensOf|border|all|version|_listeners|frame|firstMPT|reversed|xt||parseComplex|multi|scale|dflt|transparent|_gsTransform|kill|em|seek|pt|color|set|onComplete|onReverseComplete|RegExp|PI|getPropertyValue|Mt|_initProps|_internals|position|offsetHeight|css|self|left|sc|atan2|bottom|delay|plugins|greensock|onStart|runBackwards|_pauseTime|force3D|com|pop|offsetWidth|_notifyPluginsOfEnabled|_sortChildren|_gsClassPT|overwrite|pg|_propName|isActive|autoRemoveChildren|transformOrigin|formatter|solid|difs|_onPluginEvent|keyword|ot|sleep|9999999999|_onInitAllProps||remove|Ticker|Lt|1e5||abs|ox|ieOffsetY|round|gsClass|xs2|TweenLite|ut|rgb|rxp|getChildren|toUpperCase|invalidate|192|core|ieOffsetX|Et|autoAlpha|_swapSelfInParams|easeParams|onUpdate|easeInOut|easeIn|next|strict|use|_linkCSSP|prev|tick|hidden|autoCSS|_func|_params|onStartParams|module|check|vt|priority|staggerTo|DXImageTransform|oy|Microsoft|Matrix|timeScale|false|_easeType|useFrames|easeOut|_overwrite|_priority|_hasPausedChild|define|throw|isNaN|Left|SlowMo||onCompleteParams|onCompleteScope|onStartScope|ms|console|fromTo|onUpdateParams|from|document|createElement|onUpdateScope|pause|625|984375|fps|_power|GreenSockGlobals|9375|_type|delayedCall|Scope|hsl|defaultEase|Params|setTimeout|_onDisable|360|display|shortRotation|rotationZ|tween|margin|padding|_ffFix|suffixMap|lt|shortRotationX|shortRotationY|inset|visibility|_classNamePT|slice|xs3|ft|_short|yt|xn2|_onInitTween|rgba|000|activate|removeAttribute|toLowerCase|cssFloat|inherit|log|999|styleFloat|borderLeft|_rootFramesTimeline|defaultView|borderTopWidth|_roundProps|Animation|kt|url||func|div|init|xn3|propName|onReverseCompleteParams|_init|center|right|_easePower|get|_gsTweenID|reservedProps|childNodes|Width|shiftChildren|appendChild|SimpleTimeline|onReverseCompleteScope|break|filters|Top|Right|_target|xs4|Ease|play|gap|WebkitBackfaceVisibility|zoom|_contains|Ct|marginLeft|Nt|_vars|Back|isFromStart|gt|Ot|template|strength|random|At|autoRound|Tt|removeLabel|TweenPlugin|rect|SteppedEase|isArray|isSelector|_p|_class|register|RoughEase|map|addLabel|marginRight|marginBottom|marginTop|insert|strictUnits|_updateRoot|Cannot|removeProperty|_onEnable|not|matrix|autoRotate|1e3|useRAF|startTime|defaultTransformPerspective|ticker|defaultOverwrite|Plugin|black|Date|events|directionalRotation|up|2e3|EventDispatcher|_eventTarget|transformPerspective|proxy|Linear|05|Quad|progid|absolute|M11|exports|wt|dispatchEvent|clrs|Dx|GreenSockAMDPath|Dy|oyp|01|autoSleep|oxp|M22|addEventListener|M21|M12|red|parseTransform|insertMultiple|cancelAnimationFrame|appendMultiple|CancelRequestAnimationFrame|stop|moz|getLabelTime|fill|RequestAnimationFrame||webkit|getTime|CancelAnimationFrame|addPause|now|easeNone|globals|oader||Cubic|clear|Quart|clearProps|radient|undefined|999999999999|Object|toString|amd|atrix|Quint|bezier|removeEventListener|swing|visible|gotoAndStop|gotoAndPlay|linear|004|physicsProps|throwProps|physics2D|Strong|Power|requestAnimationFrame|sequence|xn4|jQuery|_autoCSS|float|xs5|getElementById|_enableTransforms|jquery|killTweensOf|_addTween|illegal|_super|progress|killDelayedCallsTo|totalProgress|_tempKill|_plugins|preexisting|allOnStart|concurrent|true|_rootTimeline|cascadeTo|120|repeatDelay|repeat|_dummyGS|_tweenLookup|onRepeat|onRepeatParams|yoyo|onRepeatScope|definition|on|staggerFromTo|clearTimeout|exportRoot|staggerFrom|NaN|Style|1500|normal|start|Color|stroke|or|is|into|the|invalid|stagger|global|restart|reverse||initAll|overwriteProps|eventCallback|GSAP|encountered|value|align|resume|TimelineLite|missing|dependency|append|clipTop|offset|Origin|borderTop|Bottom|removeChild|body|line|borderLeftWidth|parentNode|oxr|oyr|aqua|lime|silver|maroon|borderBottomLeftRadius|ccw|rad|short|_cw|clientHeight|clientWidth|Android|backgroundPosition|Safari|Chrome|userAgent|navigator|background|img|_specialProps|Version|Firefox|Moz|Ms|Webkit|getComputedStyle|getElementsByTagName|1px|MSIE|exec|innerHTML|teal|blue|Error|js|file|loaded||_cssRegister|_registerComplexSpecialProp|end|CSSPropTween|collapsible|block|registerSpecialProp|expand|translate3d|gradient|Alpha|sizingMethod|matrix3d|179|shortRotationZ|270|_parseToProxy|_setPluginRatio|orange|165|gray|purple|yellow|olive|navy|white|fuchsia|green|borderBottomRightRadius|borderRadius|boxShadow|hsla|borderTopLeftRadius|cyan|pink|borderTopRightRadius|203|backgroundPositionX|getStyle|70158|ExpoIn|clip|ExpoOut|paddingBottom|Expo|001|ExpoInOut|SineOut|clipRight|sort|525|backfaceVisibility|Sine|paddingRight|Bounce|CircInOut|BounceInOut|CircIn|paddingTop|Circ|CircOut||BounceIn|asin|ElasticInOut|userSelect|ElasticIn|ElasticOut|BounceOut|Elastic|out|clipBottom|CSSPlugin|paddingLeft|src|999999999|backgroundSize|SineIn|perspectiveOrigin|borderTopStyle|setAttribute|zA|Z0|fontSize|backgroundPositionY|borderTopColor|backgroundImage|taper|BackInOut|EaseLookup|usesFrames|clamp|transformStyle|SineInOut|find|randomize|clipLeft|BackOut|points|textShadow|BackIn'.split('|'),0,{}))


/*
	* 2D & 3D Transitions for LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* Licenses: 			http://codecanyon.net/licenses/
*/



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('20 1Z={27:[{j:"13 N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"r"}},{j:"13 N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"E"}},{j:"13 N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"J"}},{j:"13 N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"L"}},{j:"26",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"1e",a:G,h:"r"}},{j:"Z R o",d:[2,4],g:[4,7],f:{e:1k,i:"o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R D",d:[2,4],g:[4,7],f:{e:1k,i:"D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-o",d:[2,4],g:[4,7],f:{e:1k,i:"1j-o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-D",d:[2,4],g:[4,7],f:{e:1k,i:"1j-D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1k,i:"k"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"1y 1H N E",d:1,g:1s,f:{e:25,i:"D"},c:{n:"14",b:"1X",a:V,h:"r"}},{j:"1y 1H N r",d:1,g:1s,f:{e:25,i:"o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N L",d:1s,g:1,f:{e:25,i:"1j-D"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N J",d:1s,g:1,f:{e:25,i:"1j-o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y Y N E",d:1,g:25,f:{e:1k,i:"D"},c:{n:"W",b:"w",a:1g,h:"r"}},{j:"1y Y N r",d:1,g:25,f:{e:1k,i:"o"},c:{n:"W",b:"w",a:1g,h:"E"}},{j:"1y 1W N L",d:25,g:1,f:{e:1k,i:"1j-D"},c:{n:"W",b:"w",a:1g,h:"J"}},{j:"1y Y N J",d:25,g:1,f:{e:1k,i:"1j-o"},c:{n:"W",b:"w",a:1g,h:"L"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"r"}},{j:"13 R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"L"}},{j:"13 R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"J"}},{j:"13 k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"k"}},{j:"13 d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"Z v Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"E"}},{j:"Z v Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"r"}},{j:"Z v Y R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"L"}},{j:"Z v Y R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"J"}},{j:"Z v Y k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"k"}},{j:"Z v Y R N J-r (o)",d:[2,4],g:[4,7],f:{e:1f,i:"o"},c:{n:"Q",b:"z",a:1m,h:"1V"}},{j:"Z v Y R N L-E (D)",d:[2,4],g:[4,7],f:{e:1f,i:"D"},c:{n:"Q",b:"z",a:1m,h:"21"}},{j:"Z v Y R N J-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1T"}},{j:"Z v Y R N L-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1U"}},{j:"Z v Y d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"1u",d:1,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u R A",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u R F",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u-1I R A",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u-1I R F",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u 1I d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"E",1h:.5}},{j:"1u 1I g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1c f N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"E",y:x}},{j:"1c f N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"r",y:-x}},{j:"1c f N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"L",u:-x}},{j:"1c f N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"J",u:x}},{j:"1c R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1c R N E",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c R N J",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c R N L",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N J",d:[6,12],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N L",d:[6,12],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c g N r",d:1,g:[6,12],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c g N E",d:1,g:[6,12],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N r",d:[3,10],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N E",d:[3,10],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1v g N J",d:1,g:[3,10],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1v g N L",d:1,g:[3,10],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1v v 1z f N r",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1h:.1,1r:-x,y:x}},{j:"1v v 1z f N E",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1h:.1,1r:x,y:-x}},{j:"1v v 1z R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1r:-1w}},{j:"1v v 1z R N E",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1r:-1w}},{j:"1v v 1z R N k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{n:"Q",b:"z",a:V,h:"k",1r:-1w}},{j:"B f 1O",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"z",a:1a,h:"r",1h:.8}},{j:"B f N 1L",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"w",a:1a,h:"r",1h:1.2}},{j:"B R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1}},{j:"B R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2}},{j:"B 1O v 1z R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1,1r:x}},{j:"B v 1z R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2,1r:-x}},{j:"1D-Y R 24",d:3,g:4,f:{e:15,i:"o"},c:{n:"W",b:"w",a:1Y,h:"1T"}},{j:"1D-Y d A",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y d F",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}},{j:"1D-Y g A",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y g F",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}}],23:[{j:"1b f m E (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:1E},b:"1F",a:G,h:"A"},C:{c:{y:l},b:"z",a:G,h:"A"}},{j:"1b f m r (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-1E},b:"1F",a:G,h:"A"},C:{c:{y:-l},b:"z",a:G,h:"A"}},{j:"1b f m L (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-1E},b:"1F",a:1x,h:"F"},C:{c:{u:-l},b:"z",a:1x,h:"F"}},{j:"1b f m J (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:1E},b:"1F",a:1x,h:"F"},C:{c:{u:l},b:"z",a:1x,h:"F"}},{j:"1b R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:G,h:"A"}},{j:"1b R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},s:{c:{y:-l},b:"w",a:G,h:"A"}},{j:"1b R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1G,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{u:l},b:"w",a:1G,h:"F"}},{j:"B v S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,u:1k},a:1l,b:"18"},s:{c:{y:l,u:-1k},b:"H",a:1G,h:"A"},C:{c:{u:0},a:1g,b:"H"}},{j:"B v F S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,y:-15},a:1l,b:"18"},s:{c:{u:l,y:15},b:"H",a:1G,h:"F"},C:{c:{y:0},a:1g,b:"H"}},{j:"1b d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b d m L (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b d m J (l&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1C S d k (1J&#t;)",d:[3,7],g:1,f:{e:1Q,i:"k"},s:{c:{u:-1J},b:"w",a:1R,h:"F"}},{j:"B v S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m L (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m J (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1b P m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b P m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b P m L (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b P m J (l&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1B S P k (1J&#t;)",d:1,g:[4,9],f:{e:1Q,i:"k"},s:{c:{y:1J},b:"w",a:1R,h:"A"}},{j:"B v S P m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m L (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m J (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1N 1P 1M v S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:-1k,y:l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1N 1P 1M v S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:1k,y:-l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1c 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1c 1t m L (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:1a,h:"F"}},{j:"1c 1t m J (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:x},b:"w",a:1a,h:"F"}},{j:"B v 17 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:7,u:10,y:1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:x},a:1x,b:"1e"}},{j:"B v 17 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:-7,u:10,y:-1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:-x},a:1x,b:"1e"}},{j:"B v 17 1n m E (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m r (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m L (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v 17 1n m J (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,u:-15},a:1o,b:"18"},s:{c:{y:q,u:15},b:"H",a:1o,h:"A"},C:{c:{y:x,u:0},a:1o,b:"H"}},{j:"B v F 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,y:15},a:1o,b:"18"},s:{c:{u:q,y:-15},b:"H",a:1o,h:"F"},C:{c:{u:x,y:0},a:1o,b:"H"}},{j:"1c d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1B 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"B v 17 d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:22,u:0},b:"H",a:G,h:"A"},C:{c:{e:X,y:x},b:"K",a:p}},{j:"B v 17 d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m L (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m J (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 1K d m E (x&#t;)",d:[7,11],g:1,f:{e:q,i:"o"},s:{c:{I:.O,u:5,y:1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:x},b:"18",a:G}},{j:"B v A 17 1K d m r (x&#t;)",d:[7,11],g:1,f:{e:q,i:"D"},s:{c:{I:.O,u:5,y:-1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:-x},b:"18",a:G}},{j:"1c P m L (x&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"1c P m J (x&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:x},b:"w",a:G,h:"F"}},{j:"1C 17 P k (x&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"B v 17 P m L (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m J (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 1K P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},s:{c:{I:.O,u:1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:x,y:0},b:"18",a:G}},{j:"B v F 17 1K P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},s:{c:{I:.O,u:-1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:-x,y:0},b:"18",a:G}},{j:"1b 1t m E (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b 1t m r (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b 1t m L (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1b 1t m J (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:l},b:"w",a:1a,h:"F"}},{j:"B v S 1n m E (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m r (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m L (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S 1n m J (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{y:l},b:"H",a:1o,h:"A"},C:{a:1o,b:"H"}},{j:"B v F S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{u:l},b:"H",a:1o,h:"F"},C:{a:1o,b:"H"}},{j:"B v S d m E (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m r (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m L (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S d m J (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v F S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m L (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m J (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m E (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m r (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v F S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}}]}',62,132,'||||||||||duration|easing|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|type|forward|600|75|left|animation|176|rotateX|and|easeInOutQuart|90|rotateY|easeOutQuart|horizontal|Scaling|after|reverse|right|vertical|1e3|easeInOutBack|scale3d|top|easeOutBack|bottom|before|from|85|columns|mixed|tiles|spinning|large|depth|750|slide|200|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|1500|Spinning|Turning|100|easeInOutQuad|50|350|scale|65|col|30|450|500|cuboids|700|1200|400|rotate|35|cuboid|Carousel|Flying|45|800|Smooth|rotating|95|Horizontal|Vertical|Mirror|91|easeInQuart|1300|fading|mirror|540|drunk|out|scaling|Drunk|in|colums|150|2e3|directions|topright|bottomleft|topleft|sliging|linear|850|layerSliderTransitions|var|bottomright|87|t3d|diagonal||Crossfading|t2d'.split('|')))


/*
	* LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* licenses:				http://codecanyon.net/licenses/
*/



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('18 ad(e,t,n){16 r;6(1W e=="5T"){r=3A("#"+e)}19 6(1W e=="ai"){r=e}16 i,s;2p(t){1l"8N":i="bV 3A 99";s=\'96 98 4K bT ca b6 44 4O c5 c3 an c4 c2 2X 21 3A 9l c1 dG 23 2A 2e 64 4O de. <1Y>4P dd 4e 4O 5g dc db 2e 21 dj di 2X 2A 4Q da 21 "d3 bN d2 2e 3U" d1 d0 21 d4 & d5 d8 3K.</1Y>\';1j;1l"ae":i="5V 3A 99";s="96 98 4K d7 d6 ch an 5V 2s ("+n+\') 2X 21 3A 9l. 2A dk at dl 2s 1.7.0 44 dA. 4P b5 3A 2e 1.10.x 44 dz. dy: 4P do 2I dE 21 3A dD b6 4e 5g 4Q do 2I b5 2e 2.x 2s 2X 3A dx 4i 3m 2I bP b3 dw dq 4K dp 7 & 8. <a 2i="6P://dn.dm.5N/dv/4/69-23-du/#ap-13&ar-60">cZ cY cw cu cy cC 3A by cr cl.</a>\';1j}r.1r("12-3Z");r.3S(\'<p 1t="12-ck">!</p>\');r.3S(\'<p 1t="12-3Z-ci">2A: \'+i+"</p>");r.3S(\'<p 1t="12-3Z-8J">\'+s+"</p>")}(18(e){e.fn.2V=18(n){16 r="1.7.0";16 i=e.fn.8N;16 s=e(14);16 o=18(e,t){16 n=e.1E(".");16 r=t.1E(".");23(16 i=0;i<n.1k;++i){6(r.1k==i){1T 1g}6(1b(n[i])==1b(r[i])){cm}19 6(1b(n[i])>1b(r[i])){1T 1g}19{1T 1c}}6(n.1k!=r.1k){1T 1c}1T 1c};6(!o("1.8.0",i)){s.1r("12-aW")}6(!o(r,i)){ad(s,"ae",i)}19{6((1W n).3H("ai|2W")){1T 14.1O(18(e){1I t(14,n)})}19{6(n=="11"){16 u=e(14).11("2A").g;6(u){1T u}}19{1T 14.1O(18(t){16 r=e(14).11("2A");6(r){6(!r.g.36&&!r.g.48){6(1W n=="3V"){6(n>0&&n<r.g.2y+1&&n!=r.g.27){r.4C(n)}}19{2p(n){1l"1S":r.o.7v(r.g);r.1S("6j");1j;1l"1X":r.o.7l(r.g);r.1X("6j");1j;1l"22":6(!r.g.2w){r.o.b2(r.g);r.g.2t=1c;r.22()}1j}}}6(n=="4X"){r.d.64()}6((r.g.2w||!r.g.2w&&r.g.2t)&&n=="1x"){r.o.ax(r.g);r.g.2t=1g;r.g.1L.17(\'2b[1h*="66.53"], 2b[1h*="62.52"]\').1O(18(){2v(e(14).11("6C"))});r.1x()}6(n=="cn"){r.af()}}})}}}};16 t=18(u,a){16 f=14;f.$el=e(u).1r("12-2n");f.$el.11("2A",f);f.31=18(){f.o=e.4D({},t.9K,a);f.g=e.4D({},t.7q);f.1y=e.4D({},t.9Q);f.4Z=e.4D({},t.9H);f.g.co=e(u).30("12-aW")?1g:1c;6(f.g.2o){f.o.47=1g}6(f.o.2u==="cE"){f.o.2u=1c}6(f.o.2u==="av"){f.o.2u=1g}6(1W aY!=="2W"){f.t=e.4D({},aY)}6(1W aO!=="2W"){f.ct=e.4D({},aO)}6(!f.g.aN){f.g.aN=1c;f.4X();6(e("4u").17(\'aE[91*="5g"]\').1k){f.g.8v=e("4u").17(\'aE[91*="5g"]\').1f("91").1E("5g")[1]}6(e("4u").17(\'94[1h*="69"]\').1k){6(e("4u").17(\'94[1h*="69"]\').1f("1h").1i("?")!=-1){f.g.8x=e("4u").17(\'94[1h*="69"]\').1f("1h").1E("?")[1].1E("=")[1]}}f.d.aT("2A bq");f.d.aU(\'<a 2i="#">1S</a> | <a 2i="#">1X</a> | <a 2i="#">22</a> | <a 2i="#">1x</a> | <a 2i="#">cS 1x</a>\');f.d.3R.17("a").1O(18(){e(14).2k(18(t){t.3t();e(u).2V(e(14).8J())})});f.d.aT("2A 2s cR");f.d.aU("bN 2s: <1Y>"+f.g.2s+"</1Y>");6(f.g.8x){f.d.aL("cX 2s: <1Y>"+f.g.8x+"</1Y>")}6(f.g.8v){f.d.aL("5g 2s: <1Y>"+f.g.8v+"</1Y>")}f.d.aL("3A 2s: <1Y>"+e().8N+"</1Y>");6(e(u).1f("4N")){f.d.aT("2A 2n");f.d.aU("#"+e(u).1f("4N"))}6(!f.o.2r||f.o.2r==""||!f.o.3z||f.o.3z==""){f.d.aT("cW cV 2r. cP: cO 2r 4Q / 44 3z.");f.59()}19{f.d.aT("cI 2e 31 b3 2r: "+f.o.2r,1c);e(u).1r("12-"+f.o.2r);16 n=f.o.3z+f.o.2r+"/2r.1a";8w=e("bC");6(!e("bC").1k){8w=e("3U")}6(e(\'7c[2i="\'+n+\'"]\').1k){f.d.aU(\'cH "\'+f.o.2r+\'" 3m cG 2S.\');r=e(\'7c[2i="\'+n+\'"]\');6(!f.g.2S){f.g.2S=1c;f.g.a9=2g(18(){f.59()},7u)}}19{6(6c.bR){6c.bR(n);16 r=e(\'7c[2i="\'+n+\'"]\')}19{16 r=e(\'<7c 55="cF" 2i="\'+n+\'" 4y="8J/1a" />\').1w(8w)}}r.31(18(){6(!f.g.2S){f.d.aU("bl.31(); 8U");f.g.2S=1c;f.g.a8=2g(18(){f.59()},7u)}});e(2q).31(18(){6(!f.g.2S){f.d.aU("$(2q).31(); 8U");f.g.2S=1c;f.g.aa=2g(18(){f.59()},7u)}});f.g.ab=2g(18(){6(!f.g.2S){f.d.aT("cJ cK: cM bl.31(); 44 $(2q).31(); cL 8U");f.g.2S=1c;f.59()}},1P)}}};f.59=18(){6(!e("4u").1f("4N")){e("4u").1f("4N","12-7q")}19 6(!e("3U").1f("4N")){e("3U").1f("4N","12-7q")}f.g.1A=18(){1T e(u).1d()};f.g.1H=18(){1T e(u).1e()};e(u).17(".12-4G").2x("12-4G").1r("12-1p");e(u).17(\'.12-1p > *[1t*="12-s"]\').1O(18(){16 t=e(14).1f("1t").1E("12-s")[1].1E(" ")[0];e(14).2x("12-s"+t).1r("12-l"+t)});6(f.o.b8){f.o.33=f.o.b8}6(f.o.cN===1g){f.o.4B=1g}6(e(u).17(".12-1p").1k==1){f.o.7g=1g;f.o.8M=1g;f.o.7e=1g;f.o.7h=1g;f.o.4j=0;f.o.7m=1g;f.o.2u=1c;f.o.33=1;f.o.3e="av"}6(f.o.1d){f.g.8y=f.g.2E=""+f.o.1d}19{f.g.8y=f.g.2E=e(u)[0].1N.1d}6(f.o.1e){f.g.4m=""+f.o.1e}19{f.g.4m=e(u)[0].1N.1e}6(f.g.2E.1i("%")==-1&&f.g.2E.1i("1J")==-1){f.g.2E+="1J"}6(f.g.4m.1i("%")==-1&&f.g.4m.1i("1J")==-1){f.g.4m+="1J"}6(f.o.9L&&f.g.2E.1i("1J")!=-1&&f.g.4m.1i("1J")!=-1){f.g.4a=1c}19{f.g.4a=1g}e(u).17(\'*[1t*="12-l"], *[1t*="12-bg"]\').1O(18(){6(!e(14).24().30("12-1p")){e(14).cU(e(14).24())}});e(u).17(".12-1p").1O(18(){e(14).3h(\':2I([1t*="12-"])\').1O(18(){e(14).7a()});16 t=e("<1n>").1r("12-cT");6(e(14).17(".12-bg").1k){t.cQ(e(14).17(".12-bg").eq("0"))}19{t.6q(e(14))}});e(u).17(\'.12-1p, *[1t*="12-l"]\').1O(18(){6(e(14).11("12")||e(14).1f("55")||e(14).1f("1N")){6(e(14).11("12")){16 t=e(14).11("12").20().1E(";")}19 6(e(14).1f("55")&&e(14).1f("55").1i(":")!=-1&&e(14).1f("55").1i(";")!=-1){16 t=e(14).1f("55").20().1E(";")}19{16 t=e(14).1f("1N").20().1E(";")}23(x=0;x<t.1k;x++){3G=t[x].1E(":");6(3G[0].1i("4A")!=-1){3G[1]=f.ak(3G[1])}16 n="";6(3G[2]){n=":"+e.5A(3G[2])}6(3G[0]!=" "&&3G[0]!=""){e(14).11(e.5A(3G[0]),e.5A(3G[1])+n)}}}16 r=e(14);r.11("4h",r[0].1N.1m);r.11("4k",r[0].1N.1q);6(e(14).3m("a")&&e(14).3h().1k>0){r=e(14).3h()}16 i=r.1d();16 s=r.1e();6(r[0].1N.1d&&r[0].1N.1d.1i("%")!=-1){i=r[0].1N.1d}6(r[0].1N.1e&&r[0].1N.1e.1i("%")!=-1){s=r[0].1N.1e}r.11("2Z",i);r.11("2Y",s);r.11("7F",r.1a("28-1m"));r.11("7z",r.1a("28-1F"));r.11("8R",r.1a("28-1q"));r.11("8Q",r.1a("28-1o"));16 o=1W 3i(r.1a("2Q"))=="3V"?1C.cD(3i(r.1a("2Q"))*1D)/1D:1;e(14).11("7d",o);6(r.1a("3v-1m-1d").1i("1J")==-1){r.11("6H",r[0].1N.9d)}19{r.11("6H",r.1a("3v-1m-1d"))}6(r.1a("3v-1F-1d").1i("1J")==-1){r.11("6K",r[0].1N.97)}19{r.11("6K",r.1a("3v-1F-1d"))}6(r.1a("3v-1q-1d").1i("1J")==-1){r.11("6J",r[0].1N.9g)}19{r.11("6J",r.1a("3v-1q-1d"))}6(r.1a("3v-1o-1d").1i("1J")==-1){r.11("6I",r[0].1N.9V)}19{r.11("6I",r.1a("3v-1o-1d"))}r.11("9u",r.1a("9h-9j"));r.11("9n",r.1a("9k-1e"))});6(6c.4M.aV){23(16 t=0;t<e(u).17(".12-1p").1k;t++){6(e(u).17(".12-1p").eq(t).11("cp")==6c.4M.aV.1E("#")[1]){f.o.33=t+1}}}e(u).17(\'*[1t*="12-7K-"]\').1O(18(){16 t=e(14).1f("1t").1E(" ");23(16 n=0;n<t.1k;n++){6(t[n].1i("12-7K-")!=-1){16 r=1b(t[n].1E("12-7K-")[1]);e(14).1a({cq:"cj"}).2k(18(t){t.3t();e(u).2V(r)})}}});f.g.2y=e(u).17(".12-1p").1k;6(f.o.7k&&f.g.2y>2){f.o.33=="2h";f.o.92=1g}19{f.o.7k=1g}6(f.o.33=="2h"){f.o.33=1C.26(1C.2h()*f.g.2y+1)}f.o.5h=f.o.5h<f.g.2y+1?f.o.5h:1;f.o.5h=f.o.5h<1?1:f.o.5h;f.g.4r=1;6(f.o.4B){f.g.4r=0}16 n=6c.4M.2i.1i("cs:")===-1?"":"6P:";e(u).17(\'2b[1h*="66.53"], 2b[1h*="53.be"]\').1O(18(){e(14).24().1r("12-2M-4G");6(e(14).24(\'[1t*="12-l"]\')){16 t=e(14);16 r=n;e.bA(r+"//cA.8j.5N/cB/bH/cz/"+e(14).1f("1h").1E("89/")[1].1E("?")[0]+"?v=2&5J=bS&bQ=?",18(e){t.11("6Q",1b(e["ar"]["cv$ap"]["cx$2l"]["dt"])*1P)});16 i=e("<1n>").1r("12-67").1w(e(14).24());6(f.o.47){e("<1Z>").1w(i).1r("12-2F").1f("5J","6O 2M").11("1h",r+"//1Z.8j.5N/bx/"+e(14).1f("1h").1E("89/")[1].1E("?")[0]+"/"+f.o.87)}19{e("<1Z>").1w(i).1r("12-2F").1f("5J","6O 2M").1f("1h",r+"//1Z.8j.5N/bx/"+e(14).1f("1h").1E("89/")[1].1E("?")[0]+"/"+f.o.87)}e("<1n>").1w(i).1r("12-bM");e(14).24().1a({1d:e(14).1d(),1e:e(14).1e()}).2k(18(){f.g.36=1c;6(f.g.38){6(f.o.2u!=1g){f.g.38=1g}f.g.2t=1c}19{f.g.2t=f.g.2w}6(f.o.2u!=1g){f.1x()}f.g.5b=1c;r=e(14).17("2b").11("3X").1i("6P")===-1?n:"";e(14).17("2b").1f("1h",r+e(14).17("2b").11("3X"));e(14).17(".12-67").1M(f.g.v.d).3J(f.g.v.fo,18(){6(f.o.2u=="1U"&&f.g.2t==1c){16 e=2g(18(){f.22()},t.11("6Q")-f.g.v.d);t.11("6C",e)}f.g.36=1g;6(f.g.2T==1c){f.3s(f.g.1L,18(){f.g.2T=1g})}})});16 s="&";6(e(14).1f("1h").1i("?")==-1){s="?"}16 o="&ba=b4&ds=1";6(e(14).1f("1h").1i("4f")==-1){e(14).11("3X",e(14).1f("1h")+s+"4f=1"+o)}19{e(14).11("3X",e(14).1f("1h").2j("4f=0","4f=1")+o)}e(14).11("2Z",e(14).1f("1d"));e(14).11("2Y",e(14).1f("1e"));e(14).1f("1h","")}});e(u).17(\'2b[1h*="62.52"]\').1O(18(){e(14).24().1r("12-2M-4G");6(e(14).24(\'[1t*="12-l"]\')){16 t=e(14);16 r=n;16 i=e("<1n>").1r("12-67").1w(e(14).24());e.bA(r+"//52.5N/bH/dr/2M/"+e(14).1f("1h").1E("2M/")[1].1E("?")[0]+".bS?bQ=?",18(n){6(f.o.47){e("<1Z>").1w(i).1r("12-2F").1f("5J","6O 2M").11("1h",n[0]["bJ"])}19{e("<1Z>").1w(i).1r("12-2F").1f("5J","6O 2M").1f("1h",n[0]["bJ"])}t.11("6Q",1b(n[0]["2l"])*1P);e("<1n>").1w(i).1r("12-bM")});e(14).24().1a({1d:e(14).1d(),1e:e(14).1e()}).2k(18(){f.g.36=1c;6(f.g.38){6(f.o.2u!=1g){f.g.38=1g}f.g.2t=1c}19{f.g.2t=f.g.2w}6(f.o.2u!=1g){f.1x()}f.g.5b=1c;r=e(14).17("2b").11("3X").1i("6P")===-1?n:"";e(14).17("2b").1f("1h",r+e(14).17("2b").11("3X"));e(14).17(".12-67").1M(f.g.v.d).3J(f.g.v.fo,18(){6(f.o.2u=="1U"&&f.g.2t==1c){16 e=2g(18(){f.22()},t.11("6Q")-f.g.v.d);t.11("6C",e)}f.g.36=1g;6(f.g.2T==1c){f.3s(f.g.1L,18(){f.g.2T=1g})}})});16 s="&";6(e(14).1f("1h").1i("?")==-1){s="?"}16 o="&ba=b4";6(e(14).1f("1h").1i("4f")==-1){e(14).11("3X",e(14).1f("1h")+s+"4f=1"+o)}19{e(14).11("3X",e(14).1f("1h").2j("4f=0","4f=1")+o)}e(14).11("2Z",e(14).1f("1d"));e(14).11("2Y",e(14).1f("1e"));e(14).1f("1h","")}});e(u).17("2M, 6X").1O(18(){16 t=1W e(14).1f("1d")!=="2W"?e(14).1f("1d"):"dF";16 n=1W e(14).1f("1e")!=="2W"?e(14).1f("1e"):""+e(14).1e();6(t.1i("%")===-1){t=1b(t)}6(n.1i("%")===-1){n=1b(n)}6(t==="1D%"&&(n===0||n==="0"||n==="1D%")){e(14).1f("1e","1D%");n="1U"}e(14).24().1r("12-2M-4G").1a({1d:t,1e:n}).11({2Z:t,2Y:n});16 r=e(14);e(14).5E("1d").5E("1e").1a({1d:"1D%",1e:"1D%"}).2k(18(){6(1W r.1f("bq")==="2W"){14.dC=0;14.dB()}f.g.36=1c;6(f.g.38){6(f.o.2u!==1g){f.g.38=1g}f.g.2t=1c}19{f.g.2t=f.g.2w}6(f.o.2u!==1g){f.1x()}f.g.5b=1c;e(14).4e("d9",18(){6(f.o.2u==="1U"&&f.g.2t===1c){f.22()}});f.g.36=1g;6(f.g.2T===1c){f.3s(f.g.1L,18(){f.g.2T=1g})}})});6(f.o.4B){f.o.33=f.o.33-1===0?f.g.2y:f.o.33-1}f.g.27=f.o.33;f.g.1L=e(u).17(".12-1p:eq("+(f.g.27-1)+")");e(u).17(".12-1p").dh(\'<1n 1t="12-2c"></1n>\');6(f.o.9W){f.g.3u=e("<1n>").1r("12-dg-5Q").1w(e(u).17(".12-2c"))}6(f.o.a6&&!f.g.2o){f.g.3f=e("<1n>").1r("12-df-5Q").1w(e(u).17(".12-2c"));f.g.3f.3S(e(\'<1n 1t="12-ct-1m"><1n 1t="12-ct-3F"><1n 1t="12-ct-9N"><1n 1t="12-ct-a5"></1n></1n></1n></1n><1n 1t="12-ct-1F"><1n 1t="12-ct-3F"><1n 1t="12-ct-9N"><1n 1t="12-ct-a5"></1n></1n></1n></1n><1n 1t="12-ct-cc"></1n>\'))}f.g.3E=e("<1n>").1a({aD:-1,1K:"1Q"}).1r("12-9T-2n").1w(e(u));e("<1n>").1r("12-9T-c7").1w(f.g.3E);6(e(u).1a("3x")=="c8"){e(u).1a("3x","aq")}6(f.o.7p){e(u).17(".12-2c").1a({bX:"63("+f.o.7p+")"})}19{e(u).17(".12-2c").1a({bY:f.o.8q})}6(f.o.8q=="8p"&&f.o.7p==1g){e(u).17(".12-2c").1a({3l:"1Q 8p !bZ"})}e(u).17(".12-1p 1Z").1O(18(){e(14).5E("1d").5E("1e");6(f.o.43===1c&&f.o.47===1c){6(1W e(14).11("1h")!=="5T"){e(14).11("1h",e(14).1f("1h"));16 t=f.o.3z+"../1a/c0.c6";e(14).1f("1h",t)}}19{6(1W e(14).11("1h")==="5T"){e(14).1f("1h",e(14).11("1h"));e(14).5E("11-1h")}}});e(u).17(".12-1p").4e("cd",18(t){f.g.bG=t.8X-e(14).24().5m().1m;f.g.bF=t.bE-e(14).24().5m().1q});e(u).17(".12-1p").4e("aj",18(t){16 n=e(14).24().5m().1m+f.g.bG;16 r=e(14).24().5m().1q+f.g.bF;16 i=t.8X-n;16 s=t.bE-r;e(14).17("> *:2I(.12-bg)").1O(18(){6(1W e(14).11("4V")!=="2W"&&1b(e(14).11("4V"))!==0){e(14).1a({3p:-i/1D*1b(e(14).11("4V")),3O:-s/1D*1b(e(14).11("4V"))})}})});e(u).17(".12-1p").4e("ce",18(){e(14).17("> *:2I(.12-bg)").1O(18(){6(1W e(14).11("4V")!=="2W"&&1b(e(14).11("4V"))!==0){3a.2e(14,.4,{1a:{3p:0,3O:0}})}})});6(f.o.8M){e(\'<a 1t="12-1s-1S" 2i="#" />\').2k(18(t){t.3t();e(u).2V("1S")}).1w(e(u));e(\'<a 1t="12-1s-1X" 2i="#" />\').2k(18(t){t.3t();e(u).2V("1X")}).1w(e(u));6(f.o.9F){e(u).17(".12-1s-1S, .12-1s-1X").1a({1K:"1Q"});e(u).1R(18(){6(!f.g.8r){6(f.g.2o){e(u).17(".12-1s-1S, .12-1s-1X").1a("1K","2m")}19{e(u).17(".12-1s-1S, .12-1s-1X").1x(1c,1c).2J(2z)}}},18(){6(f.g.2o){e(u).17(".12-1s-1S, .12-1s-1X").1a("1K","1Q")}19{e(u).17(".12-1s-1S, .12-1s-1X").1x(1c,1c).3J(2z)}})}}6(f.o.7e||f.o.7h){16 r=e(\'<1n 1t="12-1o-1s-2R" />\').1w(e(u));f.g.3n=r;6(f.o.3e=="4R"){r.1r("12-aJ-5i")}6(f.o.7h&&f.o.3e!="4R"){e(\'<5G 1t="12-1o-4T" />\').1w(e(u).17(".12-1o-1s-2R"));6(f.o.3e=="1R"){16 i=e(\'<1n 1t="12-1G-1R"><1n 1t="12-1G-1R-2c"><1n 1t="12-1G-1R-bg"></1n><1n 1t="12-1G-1R-1Z"><1Z></1n><5G></5G></1n></1n>\').1w(e(u).17(".12-1o-4T"))}23(x=1;x<f.g.2y+1;x++){16 s=e(\'<a 2i="#" />\').1w(e(u).17(".12-1o-4T")).2k(18(t){t.3t();e(u).2V(e(14).5D()+1)});6(f.o.3e=="1R"){e(u).17(".12-1G-1R, .12-1G-1R-1Z").1a({1d:f.o.7V,1e:f.o.65});16 o=e(u).17(".12-1G-1R");16 a=o.17("1Z").1a({1e:f.o.65});16 l=e(u).17(".12-1G-1R-2c").1a({29:"2O",1K:"2m"});s.1R(18(){16 t=e(u).17(".12-1p").eq(e(14).5D());16 n;6(f.o.43===1c&&f.o.47===1c){6(t.17(".12-4l").1k){n=t.17(".12-4l").11("1h")}19 6(t.17(".12-2F").1k){n=t.17(".12-2F").11("1h")}19 6(t.17(".12-bg").1k){n=t.17(".12-bg").11("1h")}19{n=f.o.3z+f.o.2r+"/6D.4H"}}19{6(t.17(".12-4l").1k){n=t.17(".12-4l").1f("1h")}19 6(t.17(".12-2F").1k){n=t.17(".12-2F").1f("1h")}19 6(t.17(".12-bg").1k){n=t.17(".12-bg").1f("1h")}19{n=f.o.3z+f.o.2r+"/6D.4H"}}e(u).17(".12-1G-1R-1Z").1a({1m:1b(o.1a("28-1m")),1q:1b(o.1a("28-1q"))});a.31(18(){6(e(14).1d()==0){a.1a({3x:"aq",3j:"0 1U",1m:"1U"})}19{a.1a({3x:"cf",3p:-e(14).1d()/2,1m:"50%"})}}).1f("1h",n);o.1a({1K:"2m"}).1x().4s({1m:e(14).3x().1m+(e(14).1d()-o.3D())/2},8i);l.1a({1K:"1Q",29:"34"}).1x().2J(8i)},18(){l.1x().3J(8i,18(){o.1a({29:"2O",1K:"2m"})})})}}6(f.o.3e=="1R"){i.1w(e(u).17(".12-1o-4T"))}e(u).17(".12-1o-4T a:eq("+(f.o.33-1)+")").1r("12-1s-1V")}6(f.o.7e){16 c=e(\'<a 1t="12-1s-22" 2i="#" />\').2k(18(t){t.3t();e(u).2V("22")}).6q(e(u).17(".12-1o-1s-2R"));16 h=e(\'<a 1t="12-1s-1x" 2i="#" />\').2k(18(t){t.3t();e(u).2V("1x")}).1w(e(u).17(".12-1o-1s-2R"))}19 6(f.o.3e!="4R"){e(\'<5G 1t="12-1s-aw 12-1s-cb" />\').6q(e(u).17(".12-1o-1s-2R"));e(\'<5G 1t="12-1s-aw 12-1s-bW" />\').1w(e(u).17(".12-1o-1s-2R"))}6(f.o.7j&&f.o.3e!="4R"){r.1a({1K:"1Q"});e(u).1R(18(){6(!f.g.8r){6(f.g.2o){r.1a("1K","2m")}19{r.1x(1c,1c).2J(2z)}}},18(){6(f.g.2o){r.1a("1K","1Q")}19{r.1x(1c,1c).3J(2z)}})}}6(f.o.3e=="4R"){f.g.42=e(\'<1n 1t="12-1G-2R"></1n>\').1w(e(u));16 i=e(\'<1n 1t="12-1G"><1n 1t="12-1G-2c"><1n 1t="12-1G-1p-2n"><1n 1t="12-1G-1p"></1n></1n></1n></1n>\').1w(f.g.42);f.g.5i=e(u).17(".12-1G-1p-2n");6(!("6s"3M 2q)){f.g.5i.1R(18(){e(14).1r("12-1G-1p-1R")},18(){e(14).2x("12-1G-1p-1R");f.7y()}).aj(18(t){16 n=1b(t.8X-e(14).5m().1m)/e(14).1d()*(e(14).1d()-e(14).17(".12-1G-1p").1d());e(14).17(".12-1G-1p").1x().1a({3p:n})})}19{f.g.5i.1r("12-c9")}e(u).17(".12-1p").1O(18(){16 t=e(14).5D()+1;16 n;6(f.o.43===1c&&f.o.47===1c){6(e(14).17(".12-4l").1k){n=e(14).17(".12-4l").11("1h")}19 6(e(14).17(".12-2F").1k){n=e(14).17(".12-2F").11("1h")}19 6(e(14).17(".12-bg").1k){n=e(14).17(".12-bg").11("1h")}19{n=f.o.3z+f.o.2r+"/6D.4H"}}19{6(e(14).17(".12-4l").1k){n=e(14).17(".12-4l").1f("1h")}19 6(e(14).17(".12-2F").1k){n=e(14).17(".12-2F").1f("1h")}19 6(e(14).17(".12-bg").1k){n=e(14).17(".12-bg").1f("1h")}19{n=f.o.3z+f.o.2r+"/6D.4H"}}16 r=e(\'<a 2i="#" 1t="12-4g-\'+t+\'"><1Z 1h="\'+n+\'"></a>\');r.1w(e(u).17(".12-1G-1p"));6(!("6s"3M 2q)){r.1R(18(){e(14).3h().1x().6t(2z,f.o.7U/1D)},18(){6(!e(14).3h().30("12-4g-1V")){e(14).3h().1x().6t(2z,f.o.81/1D)}})}r.2k(18(n){n.3t();e(u).2V(t)})});6(c&&h){16 p=f.g.3n=e(\'<1n 1t="12-1o-1s-2R 12-cg-5i"></1n>\').1w(e(u));c.8c().2k(18(t){t.3t();e(u).2V("22")}).1w(p);h.8c().2k(18(t){t.3t();e(u).2V("1x")}).1w(p)}6(f.o.7j){f.g.42.1a("1K","1Q");6(p){f.g.3n=p.1a("1K")=="2m"?p:e(u).17(".12-aJ-5i");f.g.3n.1a("1K","1Q")}e(u).1R(18(){e(u).1r("12-1R");6(!f.g.8r){6(f.g.2o){f.g.42.1a("1K","2m");6(f.g.3n){f.g.3n.1a("1K","2m")}}19{f.g.42.1x(1c,1c).2J(2z);6(f.g.3n){f.g.3n.1x(1c,1c).2J(2z)}}}},18(){e(u).2x("12-1R");6(f.g.2o){f.g.42.1a("1K","1Q");6(f.g.3n){f.g.3n.1a("1K","1Q")}}19{f.g.42.1x(1c,1c).3J(2z);6(f.g.3n){f.g.3n.1x(1c,1c).3J(2z)}}})}}f.g.40=e(\'<1n 1t="12-40"></1n>\').1w(e(u));6(f.g.40.1a("1K")=="2m"&&!f.g.40.17("1Z").1k){f.g.6G=18(){f.g.40.1a({1K:"1Q",29:"34"}).2J(41,18(){f.g.6G=1g})};f.g.51=e("<1Z>").1f("1h",f.o.3z+f.o.2r+"/40.4H").1w(f.g.40);f.g.9B=1W 1b(e(u).1a("28-1o"))=="3V"?1b(e(u).1a("28-1o")):0}f.8t();6(f.o.9y&&e(u).17(".12-1p").1k>1){e("3U").6F("bU",18(e){6(!f.g.36&&!f.g.48){6(e.bm==37){f.o.7v(f.g);f.1S("6j")}19 6(e.bm==39){f.o.7l(f.g);f.1X("6j")}}})}6("6s"3M 2q&&e(u).17(".12-1p").1k>1&&f.o.9G){e(u).17(".12-2c").6F("ec",18(e){16 t=e.5a?e.5a:e.bf.5a;6(t.1k==1){f.g.6E=f.g.5z=t[0].bK}});e(u).17(".12-2c").6F("eD",18(e){16 t=e.5a?e.5a:e.bf.5a;6(t.1k==1){f.g.5z=t[0].bK}6(1C.49(f.g.6E-f.g.5z)>45){e.3t()}});e(u).17(".12-2c").6F("eV",18(t){6(1C.49(f.g.6E-f.g.5z)>45){6(f.g.6E-f.g.5z>0){f.o.7l(f.g);e(u).2V("1X")}19{f.o.7v(f.g);e(u).2V("1S")}}})}6(f.o.9M==1c&&e(u).17(".12-1p").1k>1){e(u).17(".12-2c").1R(18(){f.o.au(f.g);6(f.g.2w){f.g.38=1c;f.1x();6(f.g.3u){f.g.3u.1x()}6(f.g.3f){6(f.g.2P){f.g.2P.68()}}f.g.46=(1I 57).4U()}},18(){6(f.g.38==1c){f.22();f.g.38=1g}})}f.8z();6(f.o.1u){f.g.1u=e("<1Z>").1r("12-eU").1w(e(u)).1f("1N",f.o.bo).1a({29:"2O",1K:"eT"}).31(18(){16 t=0;6(!f.g.1u){t=1P}2g(18(){f.g.1u.11("2Z",f.g.1u.1d());f.g.1u.11("2Y",f.g.1u.1e());6(f.g.1u.1a("1m")!="1U"){f.g.1u.11("4h",f.g.1u[0].1N.1m)}6(f.g.1u.1a("1F")!="1U"){f.g.1u.11("6e",f.g.1u[0].1N.1F)}6(f.g.1u.1a("1q")!="1U"){f.g.1u.11("4k",f.g.1u[0].1N.1q)}6(f.g.1u.1a("1o")!="1U"){f.g.1u.11("6d",f.g.1u[0].1N.1o)}6(f.o.7Z!=1g){e("<a>").1w(e(u)).1f("2i",f.o.7Z).1f("eR",f.o.bp).1a({eS:"1Q",eW:"1Q"}).3S(f.g.1u)}f.g.1u.1a({1K:"1Q",29:"34"});f.8Z()},t)}).1f("1h",f.o.1u)}e(2q).2T(18(){f.g.2T=1c;6(!f.g.36){f.3s(f.g.1L,18(){6(f.g.2D){f.g.2D.5C()}f.g.2T=1g});6(f.g.1u){f.8Z()}}});f.g.9a=1c;6(f.o.4B==1c){6(f.o.7g){f.g.2w=1c;e(u).17(".12-1s-22").1r("12-1s-22-1V")}19{e(u).17(".12-1s-1x").1r("12-1s-1x-1V")}f.1X()}19{f.43(f.g.1L,18(){f.g.1L.2J(1P,18(){f.g.48=1g;e(14).1r("12-1V");6(f.o.86){e(14).1M(e(14).11("5d")+25).f1(18(){e(14).17(".12-2F, 2M, 6X").2k();e(14).8D()})}f.g.1L.17(\' > *[1t*="12-l"]\').1O(18(){6(e(14).11("5v")>0){16 t=e(14);t.11("6W",2g(18(){f.8H(t)},t.11("5v")))}})});f.7R(f.g.27);6(f.o.7g){f.g.48=1g;f.22()}19{e(u).17(".12-1s-1x").1r("12-1s-1x-1V")}})}f.o.bz(e(u))};f.22=18(){6(f.g.2w){6(f.g.2f=="1S"&&f.o.92){f.1S()}19{f.1X()}}19{f.g.2w=1c;6(!f.g.36&&!f.g.48){f.5Q()}}e(u).17(".12-1s-22").1r("12-1s-22-1V");e(u).17(".12-1s-1x").2x("12-1s-1x-1V")};f.5Q=18(){6(e(u).17(".12-1V").11("12")){16 t=f.4Z.7i}19{16 t=f.o.7i}16 n=e(u).17(".12-1V").11("5H")?1b(e(u).17(".12-1V").11("5H")):t;6(!f.o.4B&&!e(u).17(".12-1V").11("5H")){16 r=e(u).17(".12-1p:eq("+(f.o.33-1)+")").11("5H");n=r?r:t}2v(f.g.4o);6(f.g.46){6(!f.g.4d){f.g.4d=(1I 57).4U()}6(f.g.4d>f.g.46){f.g.46=(1I 57).4U()}6(!f.g.3I){f.g.3I=n}f.g.3I-=f.g.46-f.g.4d;f.g.46=1g;f.g.4d=(1I 57).4U()}19{f.g.3I=n;f.g.4d=(1I 57).4U()}f.g.3I=1b(f.g.3I);f.g.4o=2g(18(){f.g.4d=f.g.46=f.g.3I=1g;f.22()},f.g.3I);6(f.g.3u){f.g.3u.4s({1d:f.g.1A()},f.g.3I,"8b",18(){e(14).1a({1d:0})})}6(f.g.3f){16 i=f.g.3f.17(".12-ct-1F .12-ct-3F");16 s=f.g.3f.17(".12-ct-1m .12-ct-3F");6(f.g.3f.1a("1K")=="1Q"){i.1a({3F:0});s.1a({3F:0});f.g.3f.2J(b1)}6(!f.g.2P){f.g.2P=1I bD;f.g.2P.aZ(3a.6R(i[0],n/b0,{3g:0},{3T:7B.7A,3g:6N,f0:18(){f.g.2P=1g}}));f.g.2P.aZ(3a.6R(s[0],n/b0,{3g:0},{3T:7B.7A,3g:6N}))}19{f.g.2P.eZ()}}};f.1x=18(){f.g.46=(1I 57).4U();6(f.g.3u){f.g.3u.1x()}6(f.g.3f){6(f.g.2P){f.g.2P.68()}}6(!f.g.38&&!f.g.2t){e(u).17(".12-1s-1x").1r("12-1s-1x-1V");e(u).17(".12-1s-22").2x("12-1s-22-1V")}2v(f.g.4o);f.g.2w=1g};f.af=18(){2v(f.g.4o);f.g.2w=1g;2v(f.g.a9);2v(f.g.a8);2v(f.g.aa);2v(f.g.ab);2v(f.g.aB);6(f.g.3u){f.g.3u.1x()}6(f.g.3f){6(f.g.2P){f.g.2P.68()}}e(u).17("*").1x(1c,1g).8D();e(u).17(".12-1p >").1O(18(){6(e(14).11("3N")){e(14).11("3N").68()}});6(!f.g.38&&!f.g.2t){e(u).17(".12-1s-1x").1r("12-1s-1x-1V");e(u).17(".12-1s-22").2x("12-1s-22-1V")}};f.eY=18(){e(u).17("*").1x();2v(f.g.4o);f.4C(f.g.27,f.g.2f)};f.ak=18(t){6(e.5A(t.20())=="aR"||e.5A(t.20())=="8b"){1T t.20()}19{1T t.2j("7E","aS").2j("7J","ay").2j("7H","az").2j("eQ","eP").2j("eH","eG").2j("eF","eE").2j("eJ","eO").2j("eN","eM").2j("eK","eL").2j("f3","fp").2j("fm","fl").2j("5P","fj").2j("fk","fq")}};f.1S=18(e){6(f.g.27<2){f.g.4r+=1}6(f.g.4r>f.o.4j&&f.o.4j>0&&!e){f.g.4r=0;f.1x();6(f.o.7m==1g){f.o.4j=0}}19{16 t=f.g.27<2?f.g.2y:f.g.27-1;f.g.2f="1S";f.4C(t,f.g.2f)}};f.1X=18(e){6(!f.o.7k){6(!(f.g.27<f.g.2y)){f.g.4r+=1}6(f.g.4r>f.o.4j&&f.o.4j>0&&!e){f.g.4r=0;f.1x();6(f.o.7m==1g){f.o.4j=0}}19{16 t=f.g.27<f.g.2y?f.g.27+1:1;f.g.2f="1X";f.4C(t,f.g.2f)}}19 6(!e){16 t=f.g.27;16 n=18(){t=1C.26(1C.2h()*f.g.2y)+1;6(t==f.g.27){n()}19{f.g.2f="1X";f.4C(t,f.g.2f)}};n()}19 6(e){16 t=f.g.27<f.g.2y?f.g.27+1:1;f.g.2f="1X";f.4C(t,f.g.2f)}};f.4C=18(t,n){f.g.4d=f.g.46=f.g.3I=1g;6(f.g.3u){f.g.3u.1x().1M(2z).4s({1d:0},fr)}6(f.g.3f){f.g.3f.3J(41);6(f.g.2P){f.g.2P.5W().2l(.35)}}6(f.g.5b==1c){f.g.5b=1g;f.g.2w=f.g.2t;f.g.1L.17(\'2b[1h*="66.53"], 2b[1h*="62.52"]\').1O(18(){e(14).24().17(".12-67").2J(f.g.v.fi,18(){e(14).24().17("2b").1f("1h","")})});f.g.1L.17("2M, 6X").1O(18(){14.68()})}e(u).17(\'2b[1h*="66.53"], 2b[1h*="62.52"]\').1O(18(){2v(e(14).11("6C"))});2v(f.g.4o);f.g.61=t;f.g.1v=e(u).17(".12-1p:eq("+(f.g.61-1)+")");6(!n){6(f.g.27<f.g.61){f.g.2f="1X"}19{f.g.2f="1S"}}16 r=0;6(e(u).17(\'2b[1h*="66.53"], 2b[1h*="62.52"]\').1k>0){r=f.g.v.fi}f.43(f.g.1v,18(){f.4s()})};f.43=18(t,n){f.g.48=1c;6(f.g.9a){e(u).1a({29:"34"})}6(f.o.43){16 r=[];16 i=0;6(t.1a("3l-2K")!="1Q"&&t.1a("3l-2K").1i("63")!=-1&&!t.30("12-3w")&&!t.30("12-2I-3w")){16 s=t.1a("3l-2K");s=s.3H(/63\\((.*)\\)/)[1].2j(/"/9U,"");r[r.1k]=[s,t]}t.17("1Z:2I(.12-3w, .12-2I-3w)").1O(18(){6(f.o.47===1c){e(14).1f("1h",e(14).11("1h"))}r[r.1k]=[e(14).1f("1h"),e(14)]});t.17("*").1O(18(){6(e(14).1a("3l-2K")!="1Q"&&e(14).1a("3l-2K").1i("63")!=-1&&!e(14).30("12-3w")&&!e(14).30("12-2I-3w")){16 t=e(14).1a("3l-2K");t=t.3H(/63\\((.*)\\)/)[1].2j(/"/9U,"");r[r.1k]=[t,e(14)]}});6(r.1k==0){e(".12-1G-2R, .12-1s-1X, .12-1s-1S, .12-1o-1s-2R").1a({29:"34"});f.3s(t,n)}19{6(f.g.2o){f.g.3E.1a("1K","2m")}19{f.g.3E.1M(9A).2J(2z)}23(x=0;x<r.1k;x++){e("<1Z>").11("el",r[x]).31(18(){e(14).11("el")[1].1r("12-3w");6(++i==r.1k){f.g.3E.1x(1c,1c).1a({1K:"1Q"});e(".12-1G-2R, .12-1s-1X, .12-1s-1S, .12-1o-1s-2R").1a({29:"34"});6(3W.3Y.1i("fv/7")!==-1||f.g.2o){2g(18(){f.3s(t,n)},50)}19{f.3s(t,n)}}}).3Z(18(){16 t=e(14).11("el")[0].9D(e(14).11("el")[0].9O("/")+1,e(14).11("el")[0].1k);6(2q.4w){4w.ft(\'2A 3Z:\\r\\n\\r\\6x 6L 4K 21 6M 2X 21 2K 44 3l 2K "\'+t+\'" 3m 71 2e a 70 4M 4Q 4i 6Z be 2S. 4P 6Y 21 72 2X 4t 4O 73 76 3M 21 75.\')}19{9P(\'2A 3Z:\\r\\n\\r\\6x 6L 4K 21 6M 2X 21 2K 44 3l 2K "\'+t+\'" 3m 71 2e a 70 4M 4Q 4i 6Z be 2S. 4P 6Y 21 72 2X 4t 4O 73 76 3M 21 75.\')}e(14).1r("12-2I-3w");i++}).1f("1h",r[x][0])}}}19{e(".12-1G-2R, .12-1s-1X, .12-1s-1S, .12-1o-1s-2R").1a({29:"34"});f.3s(t,n)}};f.3s=18(t,n){t.1a({29:"2O",1K:"2m"});6(f.g.6G){f.g.6G()}f.8z();6(f.o.3e=="4R"){f.9J()}t.3h().1O(18(){16 t=e(14);16 n=t.11("4h")?t.11("4h"):"0";16 r=t.11("4k")?t.11("4k"):"0";6(t.3m("a")&&t.3h().1k>0){t.1a({1K:"2m"});t=t.3h()}16 i="1U";16 s="1U";6(t.11("2Z")){6(1W t.11("2Z")=="3V"){i=1b(t.11("2Z"))*f.g.1z}19 6(t.11("2Z").1i("%")!=-1){i=t.11("2Z")}}6(t.11("2Y")){6(1W t.11("2Y")=="3V"){s=1b(t.11("2Y"))*f.g.1z}19 6(t.11("2Y").1i("%")!=-1){s=t.11("2Y")}}16 o=t.11("7F")?1b(t.11("7F"))*f.g.1z:0;16 a=t.11("7z")?1b(t.11("7z"))*f.g.1z:0;16 l=t.11("8R")?1b(t.11("8R"))*f.g.1z:0;16 c=t.11("8Q")?1b(t.11("8Q"))*f.g.1z:0;16 h=t.11("6H")?1b(t.11("6H"))*f.g.1z:0;16 p=t.11("6K")?1b(t.11("6K"))*f.g.1z:0;16 d=t.11("6J")?1b(t.11("6J"))*f.g.1z:0;16 v=t.11("6I")?1b(t.11("6I"))*f.g.1z:0;16 m=t.11("9u");16 g=t.11("9n");6(f.g.4a||f.o.4E>0){6(t.3m("1Z")&&!t.30("12-bg")&&t.1f("1h")){t.1a({1d:"1U",1e:"1U"});6((i==0||i=="1U")&&1W s=="3V"&&s!=0){i=s/t.1e()*t.1d()}6((s==0||s=="1U")&&1W i=="3V"&&i!=0){s=i/t.1d()*t.1e()}6(i=="1U"){i=t.1d()*f.g.1z}6(s=="1U"){s=t.1e()*f.g.1z}t.1a({1d:i,1e:s})}6(!t.3m("1Z")){t.1a({1d:i,1e:s,"9h-9j":1b(m)*f.g.1z+"1J","9k-1e":1b(g)*f.g.1z+"1J"})}6(t.3m("1n")&&t.17("2b").11("3X")){16 y=t.17("2b");y.1f("1d",1b(y.11("2Z"))*f.g.1z).1f("1e",1b(y.11("2Y"))*f.g.1z);t.1a({1d:1b(y.11("2Z"))*f.g.1z,1e:1b(y.11("2Y"))*f.g.1z})}t.1a({28:l+"1J "+a+"1J "+c+"1J "+o+"1J ",9d:h+"1J",97:p+"1J",9g:d+"1J",9V:v+"1J"})}6(!t.30("12-bg")){16 b=t;6(t.24().3m("a")){t=t.24()}16 w=0;6(f.o.7f){w=f.o.7f>0?(f.g.1A()-f.o.7f)/2:0}19 6(f.o.8E){w=f.o.8E>0?(f.g.1A()-f.o.8E)/2:0}w=w<0?0:w;6(n.1i("%")!=-1){t.1a({1m:f.g.1A()/1D*1b(n)-b.1d()/2-o-h})}19 6(w>0||f.g.4a||f.o.4E>0){t.1a({1m:w+1b(n)*f.g.1z})}6(r.1i("%")!=-1){t.1a({1q:f.g.1H()/1D*1b(r)-b.1e()/2-l-d})}19 6(f.g.4a||f.o.4E>0){t.1a({1q:1b(r)*f.g.1z})}}19{16 E=e(u).17(".12-2c");t.1a({1d:"1U",1e:"1U"});i=t.1d();s=t.1e();16 S=f.g.1z;6(f.g.2E.1i("%")!=-1){6(f.g.1A()>i){S=f.g.1A()/i;6(f.g.1H()>s*S){S=f.g.1H()/s}}19 6(f.g.1H()>s){S=f.g.1H()/s;6(f.g.1A()>i*S){S=f.g.1A()/i}}}t.1a({1d:i*S,1e:s*S,3p:E.1d()/2-i*S/2,3O:E.1e()/2-s*S/2})}});t.1a({1K:"1Q",29:"34"});f.8t();n();e(14).8D()};f.8t=18(){6(f.g.51){16 e=18(){6(f.g.51.1e()>0){6(f.g.9B>0){f.g.40.1a({1e:f.g.51.1e()/2})}19{f.g.40.1a({1e:f.g.51.1e(),3O:-f.g.51.1e()/2})}}19{2g(18(){e()},50)}};e()}};f.8z=18(){6(f.o.4E>0){6(e(2q).1d()<f.o.4E){f.g.4a=1c;f.g.2E=f.o.4E+"1J"}19{f.g.4a=1g;f.g.2E=f.g.8y;f.g.1z=1}}6(f.g.4a){16 t=e(u).24();e(u).1a({1d:t.1d()-1b(e(u).1a("28-1m"))-1b(e(u).1a("28-1F"))});f.g.1z=e(u).1d()/1b(f.g.2E);e(u).1a({1e:f.g.1z*1b(f.g.4m)})}19{f.g.1z=1;e(u).1a({1d:f.g.2E,1e:f.g.4m})}6(e(u).6a(".12-6f-6g-2n").1k){e(u).6a(".12-6f-6g-9z").1a({1e:e(u).3y(1c)});e(u).6a(".12-6f-6g-2n").1a({1e:e(u).3y(1c)});e(u).6a(".12-6f-6g-9z").1a({1d:e(2q).1d(),1m:-e(u).6a(".12-6f-6g-2n").5m().1m});6(f.g.2E.1i("%")!=-1){16 n=1b(f.g.2E);16 r=e("3U").1d()/1D*n-(e(u).3D()-e(u).1d());e(u).1d(r)}}e(u).17(".12-2c, .12-1y-2n").1a({1d:f.g.1A(),1e:f.g.1H()});6(f.g.1L&&f.g.1v){f.g.1L.1a({1d:f.g.1A(),1e:f.g.1H()});f.g.1v.1a({1d:f.g.1A(),1e:f.g.1H()})}19{e(u).17(".12-1p").1a({1d:f.g.1A(),1e:f.g.1H()})}};f.8Z=18(){f.g.1u.1a({1d:f.g.1u.11("2Z")*f.g.1z,1e:f.g.1u.11("2Y")*f.g.1z});6(f.g.2o){f.g.1u.1a("1K","2m")}19{f.g.1u.2J(2z)}16 t=6B=6A=6u="1U";6(f.g.1u.11("4h")&&f.g.1u.11("4h").1i("%")!=-1){t=f.g.1A()/1D*1b(f.g.1u.11("4h"))-f.g.1u.1d()/2+1b(e(u).1a("28-1m"))}19{t=1b(f.g.1u.11("4h"))*f.g.1z}6(f.g.1u.11("6e")&&f.g.1u.11("6e").1i("%")!=-1){6B=f.g.1A()/1D*1b(f.g.1u.11("6e"))-f.g.1u.1d()/2+1b(e(u).1a("28-1F"))}19{6B=1b(f.g.1u.11("6e"))*f.g.1z}6(f.g.1u.11("4k")&&f.g.1u.11("4k").1i("%")!=-1){6A=f.g.1H()/1D*1b(f.g.1u.11("4k"))-f.g.1u.1e()/2+1b(e(u).1a("28-1q"))}19{6A=1b(f.g.1u.11("4k"))*f.g.1z}6(f.g.1u.11("6d")&&f.g.1u.11("6d").1i("%")!=-1){6u=f.g.1H()/1D*1b(f.g.1u.11("6d"))-f.g.1u.1e()/2+1b(e(u).1a("28-1o"))}19{6u=1b(f.g.1u.11("6d"))*f.g.1z}f.g.1u.1a({1m:t,1F:6B,1q:6A,1o:6u})};f.9J=18(){f.7N("4e");16 t=f.g.2E.1i("%")==-1?1b(f.g.2E):f.g.1A();e(u).17(".12-1G-1p a").1a({1d:1b(f.o.7V*f.g.1z),1e:1b(f.o.65*f.g.1z)});e(u).17(".12-1G-1p a:4n").1a({3j:0});e(u).17(".12-1G-1p").1a({1e:1b(f.o.65*f.g.1z)});16 n=e(u).17(".12-1G");16 r=f.o.7o.1i("%")==-1?1b(f.o.7o):1b(t/1D*1b(f.o.7o));n.1a({1d:r*1C.26(f.g.1z*1D)/1D});6(n.1d()>e(u).17(".12-1G-1p").1d()){n.1a({1d:e(u).17(".12-1G-1p").1d()})}f.7N("9I")};f.7R=18(t){16 n=t?t:f.g.61;e(u).17(".12-1G-1p a:2I(.12-4g-"+n+")").3h().1O(18(){e(14).2x("12-4g-1V").1x().6t(88,f.o.81/1D)});e(u).17(".12-1G-1p a.12-4g-"+n).3h().1r("12-4g-1V").1x().6t(88,f.o.7U/1D)};f.7y=18(){6(!e(u).17(".12-1G-1p-2n").30("12-1G-1p-1R")){16 t=e(u).17(".12-4g-1V").1k?e(u).17(".12-4g-1V").24():1g;6(t){16 n=t.3x().1m+t.1d()/2;16 r=e(u).17(".12-1G-1p-2n").1d()/2-n;r=r<e(u).17(".12-1G-1p-2n").1d()-e(u).17(".12-1G-1p").1d()?e(u).17(".12-1G-1p-2n").1d()-e(u).17(".12-1G-1p").1d():r;r=r>0?0:r;e(u).17(".12-1G-1p").4s({3p:r},fs)}}};f.7N=18(t){6(f.o.7j&&!e(u).30("12-1R")){2p(t){1l"4e":f.g.42.1a({29:"2O",1K:"2m"});1j;1l"9I":f.g.42.1a({29:"34",1K:"1Q"});1j}}};f.4s=18(){6(e(u).17(".12-1p").1k>1){f.g.36=1c}f.g.48=1g;2v(f.g.4o);2v(f.g.fh);f.g.9C=f.g.1L;f.o.ac(f.g);6(f.o.3e=="4R"){f.7R();6(!("6s"3M 2q)){f.7y()}}f.g.1v.1r("12-9e");16 t=7D=6w=8n=6z=8a=6y=8k=6r=fg=6v=f8="1U";16 a=8e=f.g.1A();16 l=8d=f.g.1H();16 c=f.g.2f=="1S"?f.g.1L:f.g.1v;16 h=c.11("3C")?c.11("3C"):f.o.8s;16 p=f.g.7W[f.g.2f][h];6(p=="1m"||p=="1F"){a=6w=8e=6y=0;6v=0}6(p=="1q"||p=="1o"){l=t=8d=6z=0;6r=0}2p(p){1l"1m":7D=6z=0;6r=-f.g.1A();1j;1l"1F":t=8a=0;6r=f.g.1A();1j;1l"1q":8n=6y=0;6v=-f.g.1H();1j;1l"1o":6w=8k=0;6v=f.g.1H();1j}f.g.1L.1a({1m:t,1F:7D,1q:6w,1o:8n});f.g.1v.1a({1d:8e,1e:8d,1m:6z,1F:8a,1q:6y,1o:8k});16 d=f.g.1L.11("5w")?1b(f.g.1L.11("5w")):f.o.7t;16 v=f.g.1L.11("4L")?1b(f.g.1L.11("4L")):f.o.4S;16 m=f.g.1L.11("4J")?f.g.1L.11("4J"):f.o.4F;16 g=f.g.1v.11("5d")?1b(f.g.1v.11("5d")):f.o.5r;16 y=f.g.1v.11("5t")?1b(f.g.1v.11("5t")):f.o.5y;16 b=f.g.1v.11("5K")?f.g.1v.11("5K"):f.o.5F;16 w=18(){f.g.1L.1M(d+v/15).4s({1d:a,1e:l},v,m,18(){E()})};16 E=18(){f.g.9C.17(\' > *[1t*="12-l"]\').1O(18(){6(e(14).11("3N")){e(14).11("3N").85()}e(14).1a({f7:"1Q"})});f.o.7Q(f.g);f.g.1L=f.g.1v;f.g.27=f.g.61;6(f.o.43&&f.o.47){16 t=f.g.27==f.g.2y?1:f.g.27+1;e(u).17(".12-1p").eq(t-1).17("1Z:2I(.12-3w)").1O(18(){e(14).31(18(){e(14).1r("12-3w")}).3Z(18(){16 t=e(14).11("1h").9D(e(14).11("1h").9O("/")+1,e(14).11("1h").1k);6(2q.4w){4w(\'2A 3Z:\\r\\n\\r\\6x 6L 4K 21 6M 2X 21 2K 44 3l 2K "\'+t+\'" 3m 71 2e a 70 4M 4Q 4i 6Z be 2S. 4P 6Y 21 72 2X 4t 4O 73 76 3M 21 75.\')}19{9P(\'2A 3Z:\\r\\n\\r\\6x 6L 4K 21 6M 2X 21 2K 44 3l 2K "\'+t+\'" 3m 71 2e a 70 4M 4Q 4i 6Z be 2S. 4P 6Y 21 72 2X 4t 4O 73 76 3M 21 75.\')}e(14).1r("12-2I-3w")}).1f("1h",e(14).11("1h"))})}e(u).17(".12-1p").2x("12-1V");e(u).17(".12-1p:eq("+(f.g.27-1)+")").1r("12-1V").2x("12-9e");e(u).17(".12-1o-4T a").2x("12-1s-1V");e(u).17(".12-1o-4T a:eq("+(f.g.27-1)+")").1r("12-1s-1V");6(f.g.2w){f.5Q()}f.g.36=1g;6(f.g.2T==1c){f.3s(f.g.1L,18(){f.g.2T=1g})}};16 S=18(t){f.g.1L.17(\' > *[1t*="12-l"]\').1O(18(){6(!e(14).11("2B")){f.5O(e(14))}e(14).2x("12-8F");16 r=e(14).11("3C")?e(14).11("3C"):p;16 i,s;2p(r){1l"1m":i=-f.g.1A();s=0;1j;1l"1F":i=f.g.1A();s=0;1j;1l"1q":s=-f.g.1H();i=0;1j;1l"1o":s=f.g.1H();i=0;1j;1l"3B":s=0;i=0;1j}6(e(14).11("2B")==="1I"){16 o="1I"}19{16 o=e(14).11("6b")?e(14).11("6b"):1g}2p(o){1l"1m":i=f.g.1A();s=0;1j;1l"1F":i=-f.g.1A();s=0;1j;1l"1q":s=f.g.1H();i=0;1j;1l"1o":s=-f.g.1H();i=0;1j;1l"3B":s=0;i=0;1j;1l"1I":6(e(14).11("3c")){6(e(14).11("3c")==="1m"){i=f.g.1A()}19 6(e(14).11("3c")==="1F"){i=-f.g.1A()}19{i=-1b(e(14).11("3c"))}}19{i=-f.1y.8l}6(e(14).11("3r")){6(e(14).11("3r")==="1q"){s=f.g.1H()}19 6(e(14).11("3r")==="1o"){s=-f.g.1H()}19{s=-1b(e(14).11("3r"))}}19{s=-f.1y.7C}1j}16 u=58=5o=4c=5p=5q=3k=3q="1Q";u=e(14).11("5U")?e(14).11("5U"):f.1y.7x;58=e(14).11("6p")?e(14).11("6p"):f.1y.7G;5o=e(14).11("6i")?e(14).11("6i"):f.1y.7P;4c=e(14).11("5M")?e(14).11("5M"):f.1y.7O;5p=e(14).11("6n")?e(14).11("6n"):f.1y.8T;5q=e(14).11("6o")?e(14).11("6o"):f.1y.8W;6(4c===1){3k=e(14).11("6m")?e(14).11("6m"):f.1y.8P;3q=e(14).11("6l")?e(14).11("6l"):f.1y.8O}19{3k=3q=4c}16 a=e(14).11("78")?e(14).11("78").1E(" "):f.1y.8V;23(16 l=0;l<a.1k;l++){6(a[l].1i("%")===-1&&a[l].1i("1m")!==-1&&a[l].1i("1F")!==-1&&a[l].1i("1q")!==-1&&a[l].1i("1o")!==-1){a[l]=""+1b(a[l])*f.g.1z+"1J"}}16 c=a.8Y(" ");16 h=e(14).11("6k")?e(14).11("6k"):f.1y.8S;16 d=1b(e(14).1a("1m"));16 v=1b(e(14).1a("1q"));16 m=1b(e(14).1f("1t").1E("12-l")[1]);16 g=e(14).3D()>e(14).3y()?e(14).3D():e(14).3y();16 y=1b(u)===0?e(14).3D():g;16 b=1b(u)===0?e(14).3y():g;6(m===-1&&o!=="1I"||e(14).11("3c")==="1m"||e(14).11("3c")==="1F"){6(i<0){i=-(f.g.1A()-d+(3k/2-.5)*y+1D)}19 6(i>0){i=d+(3k/2+.5)*y+1D}}19{i=i*f.g.1z}6(m===-1&&o!=="1I"||e(14).11("3r")==="1q"||e(14).11("3r")==="1o"){6(s<0){s=-(f.g.1H()-v+(3q/2-.5)*b+1D)}19 6(s>0){s=v+(3q/2+.5)*b+1D}}19{s=s*f.g.1z}6(m===-1||o==="1I"){16 w=1}19{16 E=f.g.1L.11("7w")?1b(f.g.1L.11("7w")):f.o.8L;16 w=m*E}6(e(14).11("2B")==="1I"){16 S=f.1y.7t;16 x=f.1y.4S;16 T=f.1y.4F}19{16 S=f.o.7t;16 x=f.o.4S;16 T=f.o.4F}16 N=e(14).11("5w")?1b(e(14).11("5w")):S;16 C=e(14).11("4L")?1b(e(14).11("4L")):x;16 k=e(14).11("4J")?e(14).11("4J"):T;6(t){N=0;C=t}6(e(14).11("6W")){2v(e(14).11("6W"))}16 L={29:"2O"};16 A=e(14);16 O={3g:u,4x:58,4z:5o,7s:5p,7r:5q,5k:3k,5j:3q,x:-i*w,y:-s*w,1M:N/1P,3T:n(k),8B:18(){A.1a(L)}};6(o=="3B"||!o&&r==="3B"||e(14).11("bO")!=="1g"&&e(14).11("2B")==="1I"){O["2Q"]=0;L["2Q"]=e(14).11("7d")}6(e(14).11("3N")){e(14).11("3N").85()}3a.8K(e(14)[0],{8C:c,8G:h});e(14).11("3N",3a.2e(e(14)[0],C/1P,O))})};16 x=18(){f.g.1v.1M(d+g).4s({1d:f.g.1A(),1e:f.g.1H()},y,b)};16 T=18(){6(f.g.3o){d=0}6(1W f.o.9w==="18"){f.o.9w(f.g,d+g)}f.g.1v.17(\' > *[1t*="12-l"]\').1O(18(){6(!e(14).11("2B")){f.5O(e(14))}6(e(14).11("2B")==="1I"){16 t="1I"}19{16 t=e(14).11("3C")?e(14).11("3C"):p}16 r,i;2p(t){1l"1m":r=-f.g.1A();i=0;1j;1l"1F":r=f.g.1A();i=0;1j;1l"1q":i=-f.g.1H();r=0;1j;1l"1o":i=f.g.1H();r=0;1j;1l"3B":i=0;r=0;1j;1l"1I":6(e(14).11("5e")){6(e(14).11("5e")==="1m"){r=-f.g.1A()}19 6(e(14).11("5e")==="1F"){r=f.g.1A()}19{r=1b(e(14).11("5e"))}}19{r=f.1y.9R}6(e(14).11("5f")){6(e(14).11("5f")==="1q"){i=-f.g.1H()}19 6(e(14).11("5f")==="1o"){i=f.g.1H()}19{i=1b(e(14).11("5f"))}}19{i=f.1y.9S}1j}16 s=83=82=74=84=7L=5n=5c="1Q";s=e(14).11("8I")?e(14).11("8I"):f.1y.9X;83=e(14).11("9r")?e(14).11("9r"):f.1y.9Y;82=e(14).11("9q")?e(14).11("9q"):f.1y.a4;74=e(14).11("8A")?e(14).11("8A"):f.1y.9x;84=e(14).11("9p")?e(14).11("9p"):f.1y.9Z;7L=e(14).11("9f")?e(14).11("9f"):f.1y.a0;6(74===1){5n=e(14).11("9t")?e(14).11("9t"):f.1y.a3;5c=e(14).11("9v")?e(14).11("9v"):f.1y.a2}19{5n=5c=74}16 o=e(14).11("9o")?e(14).11("9o").1E(" "):f.1y.a1;23(16 u=0;u<o.1k;u++){6(o[u].1i("%")===-1&&o[u].1i("1m")!==-1&&o[u].1i("1F")!==-1&&o[u].1i("1q")!==-1&&o[u].1i("1o")!==-1){o[u]=""+1b(o[u])*f.g.1z+"1J"}}16 a=o.8Y(" ");16 l=e(14).11("9i")?e(14).11("9i"):f.1y.9E;16 c=1b(e(14).1a("1m"));16 h=1b(e(14).1a("1q"));16 d=1b(e(14).1f("1t").1E("12-l")[1]);6(e(14)[0].1N.1d.1i("%")!==-1){e(14).1a({1d:f.g.1A()/1D*1b(e(14)[0].1N.1d)})}16 v=e(14).3D()>e(14).3y()?e(14).3D():e(14).3y();16 m=1b(s)===0?e(14).3D():v;16 g=1b(s)===0?e(14).3y():v;6(d===-1&&t!=="1I"||e(14).11("5e")==="1m"||e(14).11("5e")==="1F"){6(r<0){r=-(c+(5n/2+.5)*m+1D)}19 6(r>0){r=f.g.1A()-c+(5n/2-.5)*m+1D}}19{r=r*f.g.1z}6(d===-1&&t!=="1I"||e(14).11("5f")==="1q"||e(14).11("5f")==="1o"){6(i<0){i=-(h+(5c/2+.5)*g+1D)}19 6(i>0){i=f.g.1H()-h+(5c/2-.5)*g+1D}}19{i=i*f.g.1z}6(d===-1||t==="1I"){16 y=1}19{16 b=f.g.1v.11("9s")?1b(f.g.1v.11("9s")):f.o.ao;16 y=d*b}6(e(14).11("2B")==="1I"){16 w=f.1y.5r;16 E=f.1y.5y;16 S=f.1y.5F}19{16 w=f.o.5r;16 E=f.o.5y;16 S=f.o.5F}16 x=e(14).11("5d")?1b(e(14).11("5d")):w;16 T=e(14).11("5t")?1b(e(14).11("5t")):E;16 N=e(14).11("5K")?e(14).11("5K"):S;16 C=e(14);16 k=18(){6(C.30("12-2M-4G")){C.1r("12-8F")}6(f.o.86==1c){C.17(".12-2F, 2M, 6X").2k()}6(C.11("5v")>0){C.11("6W",2g(18(){f.8H(C)},C.11("5v")))}};e(14).1a({3p:0,3O:0});16 L={5k:5n,5j:5c,7s:84,7r:7L,3g:s,4x:83,4z:82,29:"34",x:r*y,y:i*y};16 A={3g:0,4x:0,4z:0,7s:0,7r:0,5k:1,5j:1,3T:n(N),1M:x/1P,x:0,y:0,8B:18(){k()}};6(t.1i("3B")!=-1||e(14).11("f4")!=="1g"&&e(14).11("2B")==="1I"){L["2Q"]=0;A["2Q"]=e(14).11("7d")}6(e(14).11("3N")){e(14).11("3N").85()}3a.8K(e(14)[0],{8G:l,8C:a});e(14).11("3N",3a.6R(e(14)[0],T/1P,L,A))})};16 N=18(){6(i(e(u))&&(f.g.1v.11("4W")||f.g.1v.11("5u"))){6(f.g.1v.11("4W")&&f.g.1v.11("5u")){16 t=1C.26(1C.2h()*2);16 n=[["3d",f.g.1v.11("4W")],["bj",f.g.1v.11("5u")]];k(n[t][0],n[t][1])}19 6(f.g.1v.11("4W")){k("3d",f.g.1v.11("4W"))}19{k("bj",f.g.1v.11("5u"))}}19{6(f.g.1v.11("5B")&&f.g.1v.11("5s")){16 t=1C.26(1C.2h()*2);16 n=[["2d",f.g.1v.11("5B")],["bn",f.g.1v.11("5s")]];k(n[t][0],n[t][1])}19 6(f.g.1v.11("5B")){k("2d",f.g.1v.11("5B"))}19 6(f.g.1v.11("5s")){k("bn",f.g.1v.11("5s"))}19{k("2d","1")}}};16 C=18(){6(i(e(u))&&5x.1i("3d")!=-1){k("3d",5x.1E(":")[1])}19{6(5x.1i("3d")!=-1){k("2d","4t")}19{k("2d",5x.1E(":")[1])}}};16 k=18(e,t){16 n=e.1i("f5")==-1?f.t:f.ct;16 r="3d",i,s;6(e.1i("2d")!=-1){r="2d"}6(t.1i("4n")!=-1){s=n["t"+r].1k-1;i="4n"}19 6(t.1i("4t")!=-1){s=1C.26(1C.2h()*o(n["t"+r]));i="2h bs 4t"}19{16 u=t.1E(",");16 a=u.1k;s=1b(u[1C.26(1C.2h()*a)])-1;i="2h bs f9"}L(r,n["t"+r][s])};16 L=18(t,i){16 o=e(u).17(".12-2c");16 a=f.g.1L.17(\'*[1t*="12-l"]\').1k>0?1P:0;16 l=i.6T.20().1i("fa")==-1?1g:1c;16 c=i.6T.20().1i("ff")==-1?1g:1c;16 h=1W i.4p;16 p=1W i.4b;2p(h){1l"3V":h=i.4p;1j;1l"5T":h=1C.26(1C.2h()*(1b(i.4p.1E(",")[1])-1b(i.4p.1E(",")[0])+1))+1b(i.4p.1E(",")[0]);1j;b7:h=1C.26(1C.2h()*(i.4p[1]-i.4p[0]+1))+i.4p[0];1j}2p(p){1l"3V":p=i.4b;1j;1l"5T":p=1C.26(1C.2h()*(1b(i.4b.1E(",")[1])-1b(i.4b.1E(",")[0])+1))+1b(i.4b.1E(",")[0]);1j;b7:p=1C.26(1C.2h()*(i.4b[1]-i.4b[0]+1))+i.4b[0];1j}6(f.g.9m()==1c&&f.o.bu==1c||f.g.2o&&f.o.bv==1c){6(h>=15){h=7}19 6(h>=5){h=4}19 6(h>=4){h=3}19 6(h>2){h=2}6(p>=15){p=7}19 6(p>=5){p=4}19 6(p>=4){p=3}19 6(p>2){p=2}6(p>2&&h>2){p=2;6(h>4){h=4}}}16 d=e(u).17(".12-2c").1d()/h;16 v=e(u).17(".12-2c").1e()/p;6(!f.g.2D){f.g.2D=e("<1n>").1r("12-1y-2n").1r("12-4q-2O").1a({1d:o.1d(),1e:o.1e()}).6q(o)}19{f.g.2D.1x(1c,1c).5C().1a({1K:"2m",1d:o.1d(),1e:o.1e()})}16 m=o.1d()-1C.26(d)*h;16 g=o.1e()-1C.26(v)*p;16 y=[];y.bc=18(){16 e=14.1k,t,n,r;6(e==0)1T 1g;bt(--e){t=1C.26(1C.2h()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1T 14};23(16 b=0;b<h*p;b++){y.7Y(b)}2p(i.3Q.fd){1l"5W":y.5W();1j;1l"bd-7X":y=s(p,h,"7X");1j;1l"bd-5W":y=s(p,h,"5W");1j;1l"2h":y.bc();1j}16 w=f.g.1L.17(".12-bg");16 x=f.g.1v.17(".12-bg");6(w.1k==0&&x.1k==0){t="2d";i=e.4D(1c,{},f.t["fb"][0]);i.1B.2l=1;i.3Q.1M=0}6(t=="3d"){f.g.3o=(h*p-1)*i.3Q.1M;16 N=0;6(i.2H&&i.2H.2l){N+=i.2H.2l}6(i.2a&&i.2a.2l){N+=i.2a.2l}6(i.2C&&i.2C.2l){N+=i.2C.2l}f.g.3o+=N;16 C=0;6(i.2H&&i.2H.1M){C+=i.2H.1M}6(i.2a&&i.2a.1M){C+=i.2a.1M}6(i.2C&&i.2C.1M){C+=i.2C.1M}f.g.3o+=C}19{f.g.3o=(h*p-1)*i.3Q.1M+i.1B.2l;f.g.54=e("<1n>").1r("12-fc").1w(f.g.2D);f.g.8f=e("<1n>").1r("12-f2").1w(f.g.2D)}16 k=f.g.2f;23(16 L=0;L<h*p;L++){16 A=L%h==0?m:0;16 O=L>(p-1)*h-1?g:0;16 M=e("<1n>").1r("12-1y-3Q").1a({1d:1C.26(d)+A,1e:1C.26(v)+O}).1w(f.g.2D);16 56,D;6(t=="3d"){M.1r("12-3d-2n");16 P=1C.26(d)+A;16 H=1C.26(v)+O;16 B;6(i.2a.5Z=="bB"){6(1C.49(i.2a.1B.3b)>90&&i.3Q.a7!="bL"){B=1C.26(P/7)+A}19{B=P}}19{6(1C.49(i.2a.1B.2U)>90&&i.3Q.a7!="bL"){B=1C.26(H/7)+O}19{B=H}}16 j=P/2;16 F=H/2;16 I=B/2;16 q=18(t,n,r,i,s,o,u,a,f){e("<1n>").1r(t).1a({1d:r,1e:i,3P:"5X("+s+"1J, "+o+"1J, "+u+"1J) 2U("+a+"3L) 3b("+f+"3L) 5R(5L) 4v(1, 1, 1)","-o-3P":"5X("+s+"1J, "+o+"1J, "+u+"1J) 2U("+a+"3L) 3b("+f+"3L) 5R(5L) 4v(1, 1, 1)","-bi-3P":"5X("+s+"1J, "+o+"1J, "+u+"1J) 2U("+a+"3L) 3b("+f+"3L) 5R(5L) 4v(1, 1, 1)","-bh-3P":"5X("+s+"1J, "+o+"1J, "+u+"1J) 2U("+a+"3L) 3b("+f+"3L) 5R(5L) 4v(1, 1, 1)","-5S-3P":"5X("+s+"1J, "+o+"1J, "+u+"1J) 2U("+a+"3L) 3b("+f+"3L) 5R(5L) 4v(1, 1, 1)"}).1w(n)};q("12-3d-3K",M,0,0,0,0,-I,0,0);16 R=0;16 U=0;16 z=0;6(i.2a.5Z=="dW"&&1C.49(i.2a.1B.2U)>90){q("12-3d-5P",M.17(".12-3d-3K"),P,H,-j,-F,-I,6N,0)}19{q("12-3d-5P",M.17(".12-3d-3K"),P,H,-j,-F,-I,0,6N)}q("12-3d-1o",M.17(".12-3d-3K"),P,B,-j,F-I,0,-90,0);q("12-3d-1q",M.17(".12-3d-3K"),P,B,-j,-F-I,0,90,0);q("12-3d-bw",M.17(".12-3d-3K"),P,H,-j,-F,I,0,0);q("12-3d-1m",M.17(".12-3d-3K"),B,H,-j-I,-F,0,0,-90);q("12-3d-1F",M.17(".12-3d-3K"),B,H,j-I,-F,0,0,90);56=M.17(".12-3d-bw");6(i.2a.5Z=="bB"){6(1C.49(i.2a.1B.3b)>90){D=M.17(".12-3d-5P")}19{D=M.17(".12-3d-1m, .12-3d-1F")}}19{6(1C.49(i.2a.1B.2U)>90){D=M.17(".12-3d-5P")}19{D=M.17(".12-3d-1q, .12-3d-1o")}}16 W=y[L]*i.3Q.1M;16 X=f.g.2D.17(".12-3d-2n:eq("+L+") .12-3d-3K");16 V=1I bD;6(i.2H&&i.2H.1B){i.2H.1B.1M=i.2H.1B.1M?(i.2H.1B.1M+W)/1P:W/1P;V.2e(X[0],i.2H.2l/1P,r(i.2H.1B,i.2H.4A))}19{i.2a.1B.1M=i.2a.1B.1M?(i.2a.1B.1M+W)/1P:W/1P}V.2e(X[0],i.2a.2l/1P,r(i.2a.1B,i.2a.4A));6(i.2C){6(!i.2C.1B){i.2C.1B={}}V.2e(X[0],i.2C.2l/1P,r(i.2C.1B,i.2C.4A,"2C"))}}19{16 J=32=2N=2G="1U";16 K=6U=1;6(i.1B.5Z=="2h"){16 Q=["1q","1o","1F","1m"];16 G=Q[1C.26(1C.2h()*Q.1k)]}19{16 G=i.1B.5Z}6(i.6T.20().1i("ag")!=-1&&L%2==0){6(k=="1S"){k="1X"}19{k="1S"}}6(k=="1S"){2p(G){1l"1q":G="1o";1j;1l"1o":G="1q";1j;1l"1m":G="1F";1j;1l"1F":G="1m";1j;1l"8m":G="7S";1j;1l"8h":G="8g";1j;1l"8g":G="8h";1j;1l"7S":G="8m";1j}}2p(G){1l"1q":J=2N=-M.1e();32=2G=0;1j;1l"1o":J=2N=M.1e();32=2G=0;1j;1l"1m":J=2N=0;32=2G=-M.1d();1j;1l"1F":J=2N=0;32=2G=M.1d();1j;1l"8m":J=M.1e();2N=0;32=M.1d();2G=0;1j;1l"8h":J=M.1e();2N=0;32=-M.1d();2G=0;1j;1l"8g":J=-M.1e();2N=0;32=M.1d();2G=0;1j;1l"7S":J=-M.1e();2N=0;32=-M.1d();2G=0;1j}f.g.4Y=i.1B.5I?i.1B.5I:1;6(l==1c&&f.g.4Y!=1){J=J/2;2N=2N/2;32=32/2;2G=2G/2}2p(i.1B.4y){1l"3B":J=2N=32=2G=0;K=0;6U=1;1j;1l"dH":K=0;6U=1;6(f.g.4Y==1){2N=2G=0}1j}6((i.1B.3F||i.1B.2U||i.1B.3b||f.g.4Y!=1)&&!f.g.2o&&i.1B.4y!="1p"){M.1a({4q:"34"})}19{M.1a({4q:"2O"})}6(l==1c){f.g.54.1a({4q:"34"})}19{f.g.54.1a({4q:"2O"})}6(c==1c||i.1B.4y=="1p"||l==1c){16 Y=M.1w(f.g.54);16 Z=M.8c().1w(f.g.8f);56=e("<1n>").1r("12-dN").1w(Y)}19{16 Z=M.1w(f.g.8f)}D=e("<1n>").1r("12-dT").1w(Z).1a({1q:-J,1m:-32,dP:"2m",2Q:K});16 et=y[L]*i.3Q.1M;16 5l=i.1B.3F?i.1B.3F:0;16 6S=i.1B.2U?i.1B.2U:0;16 6V=i.1B.3b?i.1B.3b:0;6(k=="1S"){5l=-5l;6S=-6S;6V=-6V}3a.6R(D[0],i.1B.2l/1P,{3g:5l,4x:6S,4z:6V,5I:f.g.4Y},{1M:et/1P,1q:0,1m:0,2Q:6U,3g:0,4x:0,4z:0,5I:1,3T:n(i.1B.4A)});6(c==1c&&(x.1k<1||x.1k>0&&(x.1f("1h").20().1i("4H")!=-1||x.1d()<f.g.1A()||x.1e()<f.g.1H()))){3a.2e(56[0],i.1B.2l/1P,{1M:et/1P,2Q:0,3T:n(i.1B.4A)})}6((i.1B.4y=="1p"||l==1c)&&i.6T.20().1i("ag")==-1){16 4i=0;6(5l!=0){4i=-5l}3a.2e(56[0],i.1B.2l/1P,{1M:et/1P,1q:2N,1m:2G,3g:4i,5I:f.g.4Y,2Q:K,3T:n(i.1B.4A)})}}6(w.1k){6(t=="3d"||t=="2d"&&(c==1c||i.1B.4y=="1p"||l==1c)){56.3S(e("<1Z>").1f("1h",w.1f("1h")).1a({1d:w[0].1N.1d,1e:w[0].1N.1e,3p:3i(w.1a("3j-1m"))-3i(M.3x().1m),3O:3i(w.1a("3j-1q"))-3i(M.3x().1q)}))}19 6(f.g.54.3h().1k==0){f.g.54.3S(e("<1Z>").1f("1h",w.1f("1h")).1a({1d:w[0].1N.1d,1e:w[0].1N.1e,3p:3i(w.1a("3j-1m")),3O:3i(w.1a("3j-1q"))}))}}6(x.1k){D.3S(e("<1Z>").1f("1h",x.1f("1h")).1a({1d:x[0].1N.1d,1e:x[0].1N.1e,3p:3i(x.1a("3j-1m"))-3i(M.3x().1m),3O:3i(x.1a("3j-1q"))-3i(M.3x().1q)}))}}16 4Z=f.g.1L;16 2L=f.g.1v;2g(18(){4Z.17(".12-bg").1a({29:"2O"})},50);2L.17(".12-bg").1a({29:"2O"});f.g.2D.2x("12-4q-2O");S(a);2g(18(){4Z.1a({1d:0})},a);16 95=1b(2L.11("77"))?1b(2L.11("77")):0;16 at=f.g.3o+95>0?f.g.3o+95:0;2g(18(){6(f.g.2T==1c){f.g.2D.5C();4Z.2x("12-1V");f.3s(2L,18(){f.g.2T=1g})}T();6(2L.17(".12-bg").1k<1||2L.17(".12-bg").1k>0&&2L.17(".12-bg").1f("1h").20().1i("4H")!=-1){f.g.2D.1M(b1).3J(2z,18(){e(14).5C().64()})}2L.1a({1d:f.g.1A(),1e:f.g.1H()})},at);6(f.g.3o<2z){f.g.3o=1P}2g(18(){f.g.2D.1r("12-4q-2O");2L.1r("12-1V");6(2L.17(".12-bg").1k){2L.17(".12-bg").1a({1K:"1Q",29:"34"});6(f.g.2o){2L.17(".12-bg").1a("1K","2m");2g(18(){E()},41)}19{2L.17(".12-bg").2J(41,18(){E()})}}19{E()}},f.g.3o)};16 A=(f.g.1v.11("4W")||f.g.1v.11("5B"))&&f.t||(f.g.1v.11("5u")||f.g.1v.11("5s"))&&f.ct?"1I":"5V";6(!f.g.1v.11("2B")){f.5O(f.g.1v)}6(f.g.1v.11("2B")==="1I"){A="1I"}6(f.o.8u){A="aA"}6(f.o.4B&&!f.g.aI){6(f.g.2y==1){16 d=0;f.o.7Q(f.g)}19{16 O=1b(f.g.1v.11("77"))?1b(f.g.1v.11("77")):0;16 M=A=="1I"?0:v;f.g.aB=2g(18(){E()},M+1C.49(O))}f.g.3o=1c;T();f.g.1v.1a({1d:f.g.1A(),1e:f.g.1H()});6(!f.g.2o){f.g.1v.17(".12-bg").1a({1K:"1Q"}).2J(41)}f.g.aI=1c;f.g.48=1g}19{2p(A){1l"5V":f.g.3o=1g;6(f.g.2D){f.g.2D.5C()}w();S();x();T();1j;1l"1I":6(1W 5x!="2W"){C()}19{N()}1j;1l"aA":L(f.o.8u.4y,f.o.8u.ev);1j}}};f.5O=18(e){16 t=e.11("12")||!e.11("12")&&!e.11("5H")&&!e.11("3C")&&!e.11("6b")&&!e.11("5d")&&!e.11("5w")&&!e.11("5t")&&!e.11("4L")&&!e.11("5v")&&!e.11("5K")&&!e.11("4J")&&!e.11("8A")&&!e.11("5M")&&!e.11("8I")&&!e.11("5U")?"1I":"5V";e.11("2B",t)};f.8H=18(e){6(!e.11("2B")){f.5O(e)}e.2x("12-8F");16 t=f.g.1L;6(f.g.2f!="1S"&&f.g.1v){t=f.g.1v}16 r=t.11("3C")?t.11("3C"):f.o.8s;16 i=f.g.7W[f.g.2f][r];16 s=e.11("3C")?e.11("3C"):i;16 o,u;2p(s){1l"1m":o=-f.g.1A();u=0;1j;1l"1F":o=f.g.1A();u=0;1j;1l"1q":u=-f.g.1H();o=0;1j;1l"1o":u=f.g.1H();o=0;1j;1l"3B":u=0;o=0;1j}6(e.11("2B")==="1I"){16 a="1I"}19{16 a=e.11("6b")?e.11("6b"):1g}2p(a){1l"1m":o=f.g.1A();u=0;1j;1l"1F":o=-f.g.1A();u=0;1j;1l"1q":u=f.g.1H();o=0;1j;1l"1o":u=-f.g.1H();o=0;1j;1l"3B":u=0;o=0;1j;1l"1I":6(e.11("3c")){6(e.11("3c")==="1m"){o=f.g.1A()}19 6(e.11("3c")==="1F"){o=-f.g.1A()}19{o=-1b(e.11("3c"))}}19{o=-f.1y.8l}6(e.11("3r")){6(e.11("3r")==="1q"){u=f.g.1H()}19 6(e.11("3r")==="1o"){u=-f.g.1H()}19{u=-1b(e.11("3r"))}}19{u=-f.1y.7C}1j}16 l=58=5o=4c=5p=5q=3k=3q="1Q";l=e.11("5U")?e.11("5U"):f.1y.7x;58=e.11("6p")?e.11("6p"):f.1y.7G;5o=e.11("6i")?e.11("6i"):f.1y.7P;4c=e.11("5M")?e.11("5M"):f.1y.7O;5p=e.11("6n")?e.11("6n"):f.1y.8T;5q=e.11("6o")?e.11("6o"):f.1y.8W;6(4c===1){3k=e.11("6m")?e.11("6m"):f.1y.8P;3q=e.11("6l")?e.11("6l"):f.1y.8O}19{3k=3q=4c}16 c=e.11("78")?e.11("78").1E(" "):f.1y.8V;23(16 h=0;h<c.1k;h++){6(c[h].1i("%")===-1&&c[h].1i("1m")!==-1&&c[h].1i("1F")!==-1&&c[h].1i("1q")!==-1&&c[h].1i("1o")!==-1){c[h]=""+1b(c[h])*f.g.1z+"1J"}}16 p=c.8Y(" ");16 d=e.11("6k")?e.11("6k"):f.1y.8S;16 v=1b(e.1a("1m"));16 m=1b(e.1a("1q"));16 g=1b(e.1f("1t").1E("12-l")[1]);16 y=e.3D()>e.3y()?e.3D():e.3y();16 b=1b(l)===0?e.3D():y;16 w=1b(l)===0?e.3y():y;6(g===-1&&a!=="1I"||e.11("3c")==="1m"||e.11("3c")==="1F"){6(o<0){o=-(f.g.1A()-v+(3k/2-.5)*b+1D)}19 6(o>0){o=v+(3k/2+.5)*b+1D}}19{o=o*f.g.1z}6(g===-1&&a!=="1I"||e.11("3r")==="1q"||e.11("3r")==="1o"){6(u<0){u=-(f.g.1H()-m+(3q/2-.5)*w+1D)}19 6(u>0){u=m+(3q/2+.5)*w+1D}}19{u=u*f.g.1z}6(g===-1||a==="1I"){16 E=1}19{16 S=f.g.1L.11("7w")?1b(f.g.1L.11("7w")):f.o.8L;16 E=g*S}6(e.11("2B")==="1I"){16 x=f.1y.4S;16 T=f.1y.4F}19{16 x=f.o.4S;16 T=f.o.4F}16 N=e.11("4L")?1b(e.11("4L")):x;16 C=e.11("4J")?e.11("4J"):T;16 k={29:"2O"};16 L={3g:l,4x:58,4z:5o,7s:5p,7r:5q,5k:3k,5j:3q,x:-o*E,y:-u*E,3T:n(C),8B:18(){e.1a(k)}};6(a=="3B"||!a&&s=="3B"||e.11("bO")!=="1g"&&e.11("2B")==="1I"){L["2Q"]=0;k["2Q"]=e.11("7d")}3a.8K(e[0],{8G:d,8C:p});3a.2e(e[0],N/1P,L)};f.4X=18(){f.d={3R:e("<1n>"),aT:18(t){e("<bI>"+t+"</bI>").1w(f.d.3R)},am:18(){e("<4I>").1w(f.d.3R)},aU:18(t){e("<4I><3E>"+t+"</3E></4I>").1w(f.d.3R)},aL:18(t){e("<3E>"+t+"</3E>").1w(f.d.3R.17("4I:4n"))},93:18(t){e("<4I>").1w(f.d.3R.17("4I:4n 3E:4n"))},aF:18(e){f.d.3R.17("4I:4n 3E:4n").1R(18(){e.1a({3v:"ej ei eg",3O:1b(e.1a("3j-1q"))-2,3p:1b(e.1a("3j-1m"))-2})},18(){e.1a({3v:"9b",3O:1b(e.1a("3j-1q"))+2,3p:1b(e.1a("3j-1m"))+2})})},64:18(){6(!e("3U").17(".12-4X-4w").1k){6(!f.d.aC){f.d.aT("eh eB");f.d.am();23(16 t 3M f.o){f.d.aL(t+": <1Y>"+f.o[t]+"</1Y>")}f.d.aT("2A ee");f.d.aU("en 2X ex ez: <1Y>"+e(u).17(".12-1p").1k+"</1Y>");e(u).17(\'.12-2c .12-1p, .12-2c *[1t*="12-l"]\').1O(18(){6(e(14).30("12-1p")){f.d.aU("<1Y>aK "+(e(14).5D()+1)+"</1Y>");f.d.93();f.d.aL("<1Y>aK "+(e(14).5D()+1)+" aG:</1Y><br><br>")}19{f.d.aU("&7b;&7b;&7b;&7b;ep ( "+e(14).aM("aH")+" )");f.d.aF(e(14));f.d.93();f.d.aL("<1Y>"+e(14).aM("aH")+" 4G aG:</1Y><br><br>");f.d.aL("es / 1t: <1Y>"+e(14).1f("1t")+"</1Y>")}e.1O(e(14).11(),18(e,t){f.d.aL(e+": <1Y>"+t+"</1Y>")})});f.d.aC=1c}16 n=e("<1n>").1r("12-4X-4w").1a({3x:"dI",aD:"dL",1q:"6h",1F:"6h",1d:"dU",28:"dV",3l:"e3","3v-e4":"6h",1e:e(2q).1e()-60,2Q:0,aX:7u}).1w(e("3U")).1a({aX:0,2Q:.9}).2k(18(t){6(t.aQ&&t.aP){e(14).7a()}});16 r=e("<1n>").1a({1d:"1D%",1e:"1D%",4q:"1U"}).1w(n);16 i=e("<1n>").1a({1d:"1D%"}).1w(r).3S(f.d.3R)}},e5:18(){e("3U").17(".12-4X-4w").7a()}};e(u).2k(18(e){6(e.aQ&&e.aP){f.d.64()}})};f.31()};16 n=18(e){16 t;6(e.20().1i("aR")!==-1||e.20().1i("8b")!==-1){t=7B.7A}19 6(e.20().1i("7E")!==-1){16 n=e.20().1E("7E")[1];t=2q[n.7I(0).8o()+n.7M(1)].aS}19 6(e.20().1i("7H")!==-1){16 n=e.20().1E("7H")[1];t=2q[n.7I(0).8o()+n.7M(1)].az}19 6(e.20().1i("7J")!==-1){16 n=e.20().1E("7J")[1];t=2q[n.7I(0).8o()+n.7M(1)].ay}1T t};16 r=18(e,t,r,i){6(1W t==="2W"){16 t="e1"}16 s={};6(e.3F!==i){s.3g=e.3F}6(e.3b!==i){s.4z=e.3b}6(e.2U!==i){s.4x=e.2U}6(r==="2C"){s.5k=s.5j=s.ah=1}19 6(e.4v!==i){s.5k=s.5j=s.ah=e.4v}6(e.1M){s.1M=r==="2C"?e.1M/1P:e.1M}s.3T=n(t);1T s};16 i=18(t){16 n=e("<1n>"),r=1g,i=1g,s=["dX","e0","eC","fw","dM"];3P=["eI","eX","e2","er","eo"];23(16 o=s.1k-1;o>=0;o--){r=r?r:n[0].1N[s[o]]!=2W}23(16 o=3P.1k-1;o>=0;o--){n.1a("3P-1N","al-3d");i=i?i:n[0].1N[3P[o]]=="al-3d"}6(r&&n[0].1N[s[4]]!=2W){n.1f("4N","12-ef").1w(t);r=n[0].ek===3&&n[0].ea===9;n.7a()}1T r&&i};16 s=18(e,t,n){16 r=[];6(n=="7X"){23(16 i=0;i<e;i++){23(16 s=0;s<t;s++){r.7Y(i+s*e)}}}19{23(16 i=e-1;i>-1;i--){23(16 s=t-1;s>-1;s--){r.7Y(i+s*e)}}}1T r};16 o=18(e){16 t=0;23(16 n 3M e){6(e.e9(n)){++t}}1T t};16 u=18(){bb=18(e){e=e.20();16 t=/(b9)[ \\/]([\\w.]+)/.5Y(e)||/(5S)[ \\/]([\\w.]+)/.5Y(e)||/(eb)(?:.*2s|)[ \\/]([\\w.]+)/.5Y(e)||/(9c) ([\\w.]+)/.5Y(e)||e.1i("bP")<0&&/(ed)(?:.*? em:([\\w.]+)|)/.5Y(e)||[];1T{7T:t[1]||"",2s:t[2]||"0"}};16 e=bb(3W.3Y),t={};6(e.7T){t[e.7T]=1c;t.2s=e.2s}6(t.b9){t.5S=1c}19 6(t.5S){t.ey=1c}1T t};eA=18(e,t){16 n=["5S","ew","bh","bi","o",""];16 r=0,i,s;bt(r<n.1k&&!e[i]){i=t;6(n[r]==""){i=i.bk(0,1).20()+i.bk(1)}i=n[r]+i;s=1W e[i];6(s!="2W"){n=[n[r]];1T s=="18"?e[i]():e[i]}r++}};t.7q={2s:"5.1.0",9m:18(){6(3W.3Y.3H(/eu/i)||3W.3Y.3H(/e8/i)||3W.3Y.3H(/e7/i)||3W.3Y.3H(/dQ/i)||3W.3Y.3H(/dR/i)||3W.3Y.3H(/dS/i)||3W.3Y.3H(/dO dJ/i)){1T 1c}19{1T 1g}},dK:18(e){6(e.1a("28-1o")=="1U"||e.1a("28-1o")=="1Q"||e.1a("28-1o")==0||e.1a("28-1o")=="9b"){1T 1c}19{1T 1g}},2o:u().9c&&u().2s<9?1c:1g,38:1g,5b:1g,2w:1g,36:1g,2y:79,2f:"1X",4o:79,1A:79,1H:79,7W:{1S:{1m:"1F",1F:"1m",1q:"1o",1o:"1q"},1X:{1m:"1m",1F:"1F",1q:"1q",1o:"1o"}},v:{d:41,fo:88,fi:41}};t.9Q={9R:80,9S:0,5y:1P,5r:0,5F:"7n",2J:1c,9X:0,9Y:0,a4:0,9x:1,a3:1,a2:1,9Z:0,a0:0,a1:["50%","50%","0"],9E:41,8l:-80,7C:0,4S:9A,e6:0,4F:"7n",3J:1c,7x:0,7G:0,7P:0,7O:1,8P:1,8O:1,8T:0,8W:0,8V:["50%","50%","0"],8S:41};t.9H={7i:as};t.9K={9L:1c,4E:0,7f:0,7g:1c,9M:1c,33:1,4B:1c,4j:0,7m:1c,92:1g,7k:1g,2r:"dY",3z:"/69/dZ/",8q:"8p",7p:1g,8M:1c,7e:1c,7h:1c,9y:1c,9G:1c,9F:1c,7j:1g,9W:1g,a6:1c,3e:"1R",7o:"60%",7V:1D,65:60,7U:35,81:1D,86:1c,2u:"1U",87:"fe.f6",43:1c,47:1c,1u:1g,bo:"1m: -6h; 1q: -6h;",7Z:1g,bp:"fu",bu:1c,bv:1c,bz:18(e){},b2:18(e){},ax:18(e){},au:18(e){},ac:18(e){},7Q:18(e){},7v:18(e){},7l:18(e){},7i:as,8s:"1F",ao:.45,8L:.45,5y:1P,4S:1P,5F:"7n",4F:"7n",5r:0,7t:0}})(3A)',62,963,'||||||if|||||||||||||||||||||||||||||||||||||||||||||||||||||||||data|ls||this||var|find|function|else|css|parseInt|true|width|height|attr|false|src|indexOf|break|length|case|left|div|bottom|slide|top|addClass|nav|class|yourLogo|nextLayer|appendTo|stop|lt|ratio|sliderWidth|transition|Math|100|split|right|thumbnail|sliderHeight|new|px|display|curLayer|delay|style|each|1e3|none|hover|prev|return|auto|active|typeof|next|strong|img|toLowerCase|the|start|for|parent||floor|curLayerIndex|padding|visibility|animation|iframe|inner||to|prevNext|setTimeout|random|href|replace|click|duration|block|container|ie78|switch|window|skin|version|originalAutoSlideshow|autoPauseSlideshow|clearTimeout|autoSlideshow|removeClass|layersNum|300|LayerSlider|transitiontype|after|ltContainer|sliderOriginalWidth|videopreview|L2|before|not|fadeIn|image|ot|video|T2|hidden|cttl|opacity|wrapper|loaded|resize|rotateX|layerSlider|undefined|of|originalHeight|originalWidth|hasClass|load|L1|firstSlide|visible||isAnimating||paused||TweenLite|rotateY|offsetxout||thumbnailNavigation|circleTimer|rotation|children|parseFloat|margin|curSubScaleX|background|is|bottomWrapper|totalDuration|marginLeft|curSubScaleY|offsetyout|makeResponsive|preventDefault|barTimer|border|preloaded|position|outerHeight|skinsPath|jQuery|fade|slidedirection|outerWidth|li|rotate|param|match|curSlideTime|fadeOut|box|deg|in|tr|marginTop|transform|tile|history|append|ease|body|number|navigator|videoSrc|userAgent|error|shadow|500|thumbsWrapper|imgPreload|or||pausedSlideTime|lazyLoad|isLoading|abs|responsiveMode|rows|curSubScale|startSlideTime|on|autoplay|thumb|originalLeft|it|loops|originalTop|tn|sliderOriginalHeight|last|slideTimer|cols|overflow|nextLoop|animate|all|html|scale3d|console|rotationX|type|rotationY|easing|animateFirstSlide|change|extend|responsiveUnder|easingOut|layer|png|ul|easingout|like|durationout|location|id|your|Please|and|always|durationOut|slidebuttons|getTime|parallaxlevel|transition3d|debug|scale2D|st||shadowImg|vimeo|youtu|curTiles|rel|_|Date|curSubRotateX|init|touches|pausedByVideo|nextSubScaleY|delayin|offsetxin|offsetyin|WordPress|fisrtSlide|thumbnails|scaleY|scaleX|tt|offset|nextSubScaleX|curSubRotateY|curSubSkewX|curSubSkewY|delayIn|customtransition2d|durationin|customtransition3d|showuntil|delayout|LSCustomTransition|durationIn|touchEndX|trim|transition2d|empty|index|removeAttr|easingIn|span|slidedelay|scale|alt|easingin|0deg|scaleout|com|transitionType|back|timer|rotateZ|webkit|string|rotateout|old|reverse|translate3d|exec|direction||nextLayerIndex|player|url|show|tnHeight|www|vpcontainer|pause|layerslider|closest|slideoutdirection|document|originalBottom|originalRight|wp|fullwidth|10px|rotateyout|clicked|perspectiveout|scaleyout|scalexout|skewxout|skewyout|rotatexout|prependTo|layerMarginLeft|ontouchstart|fadeTo|oB|layerMarginTop|curLayerTop|nIt|nextLayerTop|nextLayerLeft|oT|oR|videoTimer|nothumb|touchStartX|bind|showShadow|originalBorderLeft|originalBorderBottom|originalBorderTop|originalBorderRight|seems|URL|180|Play|http|videoDuration|fromTo|nt|name|O2|rt|showUntilTimer|audio|check|cannot|wrong|pointing|URLs|images|nextSubScale|slider|used|timeshift|transformoriginout|null|remove|nbsp|link|originalOpacity|navStartStop|layersContainer|autoStart|navButtons|slideDelay|hoverBottomNav|randomSlideshow|cbNext|forceLoopNum|easeInOutQuint|tnContainerWidth|globalBGImage|global|skewY|skewX|delayOut|150|cbPrev|parallaxout|rotateOut|scrollThumb|originalPaddingRight|easeNone|Linear|offsetYOut|curLayerRight|easeinout|originalPaddingLeft|rotateXOut|easeout|charAt|easein|linkto|nextSubSkewY|slice|bottomNavSizeHelper|scaleOut|rotateYOut|cbAnimStop|changeThumb|bottomright|browser|tnActiveOpacity|tnWidth|slideDirections|forward|push|yourLogoLink||tnInactiveOpacity|nextSubRotateY|nextSubRotateX|nextSubSkewX|kill|autoPlayVideos|youtubePreview|750|embed|nextLayerRight|linear|clone|nextLayerHeight|nextLayerWidth|nextTiles|bottomleft|topright|250|youtube|nextLayerBottom|offsetXOut|topleft|curLayerBottom|toUpperCase|transparent|globalBGColor|forceHideControls|slideDirection|resizeShadow|slideTransition|wpVersion|cssContainer|lswpVersion|sliderOriginalWidthRU|resizeSlider|scalein|onComplete|transformOrigin|dequeue|sublayerContainer|videohack|transformPerspective|sublayerShowUntil|rotatein|text|set|parallaxOut|navPrevNext|jquery|scaleYOut|scaleXOut|originalPaddingBottom|originalPaddingTop|perspectiveOut|skewXOut|fired|transformOriginOut|skewYOut|pageX|join|resizeYourLogo||content|twoWaySlideshow|aUU|script|ut|It|borderRightWidth|looks|issue|showSlider|0px|msie|borderLeftWidth|animating|skewyin|borderTopWidth|font|perspectivein|size|line|library|isMobile|originalLineHeight|transformoriginin|skewxin|rotateyin|rotatexin|parallaxin|scalexin|originalFontSize|scaleyin|cbTimeLineStart|scaleIn|keybNav|helper|400|shadowBtmMod|stopLayer|substring|perspectiveIn|hoverPrevNext|touchNav|slideTransitions|off|resizeThumb|options|responsive|pauseOnHover|hider|lastIndexOf|alert|layerTransitions|offsetXIn|offsetYIn|loading|gi|borderBottomWidth|showBarTimer|rotateIn|rotateXIn|skewXIn|skewYIn|transformOriginIn|scaleYIn|scaleXIn|rotateYIn|half|showCircleTimer|depth|t2|t1|t3|t4|cbAnimStart|lsShowNotice|oldjquery|forcestop|mirror|scaleZ|object|mousemove|ieEasing|preserve|aeU||parallaxIn|group|relative|entry|4e3||cbPause|disabled|sides|cbStop|easeIn|easeOut|forced|t5|putData|zIndex|meta||properties|tagName|firstSlideAnimated|above|SLIDE||prop|initialized|layerSliderCustomTransitions|altKey|shiftKey|swing|easeInOut|||hash|norotate|marginRight|layerSliderTransitions|add|2e3|350|cbStart|with|opaque|update|plugin|default|firstLayer|chrome|wmode|uaMatch|randomize|col||originalEvent||moz|ms|custom3d|substr|curSkin|which|custom2d|yourLogoStyle|yourLogoTarget|controls||from|while|optimizeForMobile|optimizeForIE78|front|vi||cbInit|getJSON|horizontal|head|TimelineLite|pageY|parallaxStartY|parallaxStartX|api|h1|thumbnail_large|clientX|large|playvideo|JS|fadeout|compatible|callback|createStyleSheet|json|that|keydown|multiple|sideright|backgroundImage|backgroundColor|important|blank|causing|copy|loads|extra|theme|gif|indicator|static|touchscroll|another|sideleft|center|mouseenter|mouseleave|absolute|below|using|title|pointer|exclam|here|continue|forceStop|enableCSS3|deeplink|cursor|clicking|file||more|media|read|yt|about|videos|gdata|feeds|updating|round|enabled|stylesheet|already|Skin|Trying|Fallback|mode|were|Neither|animateFirstLayer|mistyped|Possibilities|insertAfter|information|force|gpuhack|insertBefore|without|Loading|WP|can|You|within|option|includes|Put|Troubleshooting|Advanced|are|you|Settings|ended|enable|area|admin|navigate|sliders|circle|bar|wrapAll|page|main|requires|least|kreaturamedia|support||IE|browsers|v2|html5|seconds|wordpress|faq|older|because|Important|higher|newer|play|currentTime|Updater|use|640|problems|mixed|fixed|Phone|isHideOn3D|10000000000|WebkitPerspective|curtile|Windows|dispay|iPad|iPod|BlackBerry|nexttile|300px|20px|vertical|perspective|v5|skins|OPerspective|easeInOutQuart|msTransformStyle|black|radius|hide|showUntil|iPhone|webOS|hasOwnProperty|offsetLeft|opera|touchstart|mozilla|Content|test3d|red|Init|solid|2px|offsetHeight||rv|Number|WebkitTransformStyle|Layer||MozTransformStyle|distance||Android|obj|khtml|slides|safari|found|lsPrefixes|code|msPerspective|touchmove|Cubic|cubic|Quart|quart|transformStyle|quint|expo|Expo|Sine|sine|Quint|Quad|quad|target|textDecoration|bock|yourlogo|touchend|outline|OTransformStyle|restart|resume|onReverseComplete|queue|nexttiles|circ|fadein|custom|jpg|filter|layerMarginBottom|specified|carousel|t2d|curtiles|sequence|maxresdefault|crossfad|layerMarginRight|changeTimer||Back|bounce|Elastic|elastic|||Circ|Bounce|450|600|log|_self|Trident|MozPerspective'.split('|'),0,{}))

/**/
/* remove envato iframe */
/**/
if (undefined !== window.location.ancestorOrigins && undefined !== window.location.ancestorOrigins[0]) {
	if ( navigator.userAgent.match(/(iPod|iPhone|iPad)/) && (/themeforest/.test(window.location.ancestorOrigins[0])) ) {
		window.top.location.href = "http://html.creaws.com/the8/";
	}
}


/**/
/* google map */
/**/
var winWidth, winHeight;
var nua = navigator.userAgent;
var isAndroid = nua.indexOf("Android") > -1;

/**/
/* google map */
/**/
function init_map()
{
	var coordLat = -37.81261128155935;
	var coordLng = 144.96260404586792;
	if( jQuery(window).width() < 756 )
	{
		delta = 0;
	}
	
	var point = new google.maps.LatLng(coordLat,coordLng);
	var center = new google.maps.LatLng(coordLat,coordLng);
	
	var mapOptions = {	
		zoom: 15,
		center: center,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var image = 'images/gmap_default.png';
  var beachMarker = new google.maps.Marker({
  	map: map,
  	position: point
  });
}


/**/
/* next video slide */
/**/
function next_video_slide()
{
	$('#bgvideo li').each(function()
	{
		if( $(this).hasClass('active') )
		{
			var elem = $(this);
			elem.removeClass('active');
			if( elem.next().length )
				elem.next().addClass('active');
			else
				$('#bgvideo li:first-child').addClass('active');
			setTimeout(next_video_slide, 5000);
			return false;
		}
	});
}


/**/
/*  parallax  */
/**/
jQuery.fn.parallax = function (){
    winWidth = $(window).width();
    winHeight = $(window).height();

    this.each(function()
    {
      var bgobj = $(this);
      var bgContHeight = bgobj.outerHeight();
      var bgOfsTop = bgobj.offset().top

      var parallaxContainer = bgobj.find('.parallax-image');
      var imgContWidth = parallaxContainer.outerWidth();

      var img = bgobj.find('.parallax-image img');
      var imgHeight = img.outerHeight();
      var imgWidth = img.outerWidth();

      var leftCoef = parallaxContainer.attr("data-parallax-left");
      var topCoef = parallaxContainer.attr("data-parallax-top");
      var scrollCoef = parallaxContainer.attr("data-parallax-scroll-speed");

      function formula (a,b,c){
        return (a-b)*c
      }
      
      var leftOfs = -formula(imgWidth,imgContWidth,leftCoef)
      var topOfs  = -formula(imgHeight,bgContHeight,topCoef)

      var corectir = (((imgHeight - bgContHeight) - (imgHeight - bgContHeight)*(scrollCoef))*topCoef)

      var const_1 = formula(imgHeight,bgContHeight,scrollCoef)
      var const_2 = bgOfsTop - winHeight
      var const_3 = winHeight + bgContHeight
      var const_4 = const_1/const_3;
      var const_5 = const_4*const_2;
      var const_6 = const_5 - corectir;

      if (winWidth>1024){
        img.css({'height':'auto' , 'width':'auto' });
        var imgWidth = img.outerWidth();
        var imgContWidth = parallaxContainer.outerWidth();

        if (imgWidth != 0) {
          var leftOfs = -formula(imgWidth,imgContWidth,leftCoef)
          var parOfs = (const_6 - const_4*$(window).scrollTop()).toFixed(3); 
          parallaxContainer.css({'-webkit-transform':'translateY('+ parOfs + 'px)','-moz-transform':'translateY('+ parOfs + 'px)','-ms-transform':'translateY('+ parOfs + 'px)','transform':'translateY('+ parOfs + 'px)','left':+leftOfs+'px'});
        };

        if (imgWidth < bgobj.outerWidth()) {
          img.css('width', "100%");
          parallaxContainer.css({'left':'0px'});
        };

      }else{
        img.removeAttr('width');
        img.removeAttr('height');
        parallaxContainer.removeAttr('left');

        img.css({'width':+imgContWidth+'px' });
        parallaxContainer.css({'left':'0px','-webkit-transform':'translateY('+ parseInt((img.height() - bgobj.outerHeight())/-2) +'px)','-moz-transform':'translateY('+ parseInt((img.height() - bgobj.outerHeight())/-2) +'px)','-ms-transform':'translateY('+ parseInt((img.height() - bgobj.outerHeight())/-2) +'px)','transform':'translateY('+ parseInt((img.height() - bgobj.outerHeight())/-2) +'px)'});

        if (img.height() < parallaxContainer.height()) {
            img.css('width', img.width() * (bgobj.outerHeight() / img.height()));
            parallaxContainer.css({'left':+parseInt((img.width() - parallaxContainer.width())/-2) +'px','-webkit-transform':'translateY(0px)','-moz-transform':'translateY(0px)','-ms-transform':'translateY(0px)','transform':'translateY(0px)'});
        }   
      }

      $(window).scroll(function(){  
        if (winWidth>1024) {
          var parOfs = (const_6 - const_4*$(window).scrollTop()).toFixed(3); 
          parallaxContainer.css({'-webkit-transform':'translateY('+ parOfs + 'px)','-moz-transform':'translateY('+ parOfs + 'px)','-ms-transform':'translateY('+ parOfs + 'px)','transform':'translateY('+ parOfs + 'px)'});
        }     
      });
    });
};


/**/
/* on scroll */
/**/
$(window).scroll(function()
{
	if( $(this).scrollTop() > 200 )
	{
		$('#scroll-top').fadeIn();
	}
	else
	{
		$('#scroll-top').fadeOut();
	}

	if( winWidth < 768 )
		return false;

	if( $('#page-header-bottom').hasClass('fixed') )
	{
		if( $(this).scrollTop() < $('#page-header-bottom-holder').offset().top + 1 )
		{
			$('#page-header-bottom').removeClass('fixed');
		}
	}
	else
	{
		if( $(this).scrollTop() > $('#page-header-bottom-holder').offset().top - $('#page-header-bottom').outerHeight() )
		{
			$('#page-header-bottom').addClass('fixed');
		}
	}
});


/**/
/* on resize */
/**/
$(window).resize(function()
{
	winWidth = jQuery(window).width();
	winHeight = jQuery(window).height();
	
	
	/**/
	/* bgvideo */
	/**/	
	$('#bgvideo').height(winHeight);
	$('#bgvideo video').css('margin', '-' + $('#bgvideo video').height()/2 + 'px 0 0 -' + $('#bgvideo video').width()/2 + 'px');
	
	/* parallax */
	$('.parallaxed').parallax();
	
	/**/
	/* portfolio */
	/**/
	$('#portfolio .grid').isotope({
		masonry: {columnWidth: $('#portfolio .item').eq(0).outerWidth()}
	});
	
	
	/**/
	/* blog */
	/**/
	$('#blog .grid').isotope({
		masonry: {columnWidth: $('#blog .item').eq(0).outerWidth()}
	});
	
	
	/**/
	/* team */
	/**/
	$('#team ul').isotope({
		masonry: {columnWidth: $('#team .item').eq(0).outerWidth()}
	});
	
	
	/**/
	/* projects */
	/**/
	$('#projects ul').isotope({
		masonry: {columnWidth: $('#projects .item').eq(0).outerWidth()}
	});
});


/**/
/* on document load */
/**/
$(function()
{
	winWidth = jQuery(window).width();
	winHeight = jQuery(window).height();
	
	
	/**/
	/* scroll animations */
	/**/
	if( winWidth > 1024 )
	{
		new WOW().init();
	}

	/* parallax */
	$('.parallaxed').parallax();


	// parallax scene{
	if (document.getElementById('scene')) {
		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);
	};
	

	
	/**/
	/* bgvideo */
	/**/	
	$('#bgvideo').height(winHeight);
	$('#bgvideo video').css('margin', '-' + $('#bgvideo video').height()/2 + 'px 0 0 -' + $('#bgvideo video').width()/2 + 'px');
	$('#bgvideo').on('click', '.scroll', function()
	{
		$('html, body').animate({scrollTop: winHeight});
		return false;		
	});
	setTimeout(next_video_slide, 5000);   
	
	
	/**/
	/* fancybox */
	/**/
	$(".fancybox").fancybox();

	/**/
	/* background slider */
	/**/
	jQuery(document).ready( function (){
		window.slider_bg = {"ind":0, // index to start sliding at
							"source":["pic/slider/bg_slide1.jpg", //replace these slides with your own ones
									  "pic/slider/bg_slide2.jpg",
									  "pic/slider/bg_slide3.jpg",
									  "pic/slider/bg_slide4.jpg"],
							"bg_container":jQuery("#bg_container"),
							"bg_substrate":jQuery("#bg_substrate")};
		window.slider_bg.bg_container.css( "background-image","url(" + window.slider_bg.source[window.slider_bg.ind] + ")" );
	});
	
	function ifnext() {
			if ( window.slider_bg.ind < window.slider_bg.source.length-1 ){
				window.slider_bg.ind++;			
			}
			else{
				window.slider_bg.ind = 0;
			}		
			parallax_bg_controller ();
	};
	function ifprev() {
			if ( window.slider_bg.ind > 0 ){
				window.slider_bg.ind--;			
			}	
			else{
				window.slider_bg.ind = window.slider_bg.source.length-1;
			}
			parallax_bg_controller ();
	};
	function parallax_bg_controller (){
			window.slider_bg.bg_substrate.css( "background-image","url(" + window.slider_bg.source[window.slider_bg.ind] + ")" );
			window.slider_bg.bg_container.fadeOut(500, function (){
				window.slider_bg.bg_container.css( "background-image", "url(" + window.slider_bg.source[ window.slider_bg.ind ] + ")" );	
				window.slider_bg.bg_container.fadeIn(500);
			});			
	}
	
	/**/
	/* layerslider initialization */
	/**/
	var is_slider_first_run = true;
	var is_user_slide_nav = false;
	
	$('#layerslider').layerSlider({
		responsive: false,
		autoStart: true,
		slidedelay: 4000,
		responsiveUnder: 1201,
		layersContainer: 1201,
		skinsPath: 'js/layerslider/skins/',
		cbAnimStart: function() { 
			if (!is_user_slide_nav)
				if (!is_slider_first_run)
					ifnext();
			is_slider_first_run = false;
			is_user_slide_nav = false;
		},
		cbNext: function() { ifnext(); is_user_slide_nav = true; },
		cbPrev: function() { ifprev(); is_user_slide_nav = true; },
		navStartStop: false,
		navButtons: false	
	});
	
	
	/**/
	/* page header top */
	/**/
	$('#page-header-top-switcher').on('click', function()
	{		
		$(this).parent().parent().toggleClass('visible');		
		return false;
	});
	
	
	/**/
	/* mobile-nav */
	/**/
	$('#mobile-nav').on('click', '.switcher', function()
	{
		elem = $(this);
		elem.toggleClass('opened');
		
		if( elem.hasClass('opened') )
		{
			$(elem.attr('href')).addClass('opened');
		}
		else
		{
			$('#mobile-nav ul').removeClass('opened').removeClass('closed');
		}
		return false;
	});
	$('#mobile-nav').on('click', '.opener', function()
	{
		elem = $(this);
		elem.closest('ul').addClass('closed');
		$(elem.attr('href')).addClass('opened');
		return false;
	});
	$('#mobile-nav').on('click', '.back', function()
	{
		elem = $(this);
		elem.closest('ul').removeClass('opened');
		$(elem.attr('href')).removeClass('closed');
		return false;
	});
	
	
	/**/
	/* portfolio */
	/**/
	$('#portfolio .filter').on('click', 'a', function()
	{		
		$('#portfolio .grid').isotope(
	 	{
	 		filter: $(this).data('filter')
		});
		$(this).addClass('active').siblings().removeClass('active');		
		
		return false;
	});
	$('#portfolio .grid').isotope({
		itemSelector : '.item',
		masonry: {columnWidth: $('#portfolio .item').outerWidth()}
	});
	
	
	/**/
	/* portfolio carousel */
	/**/
	$('#portfolio-carousel').owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: false,
		slideSpeed: 300,
		paginationSpeed: 300,
		rewindSpeed: 300,
		autoHeight: true
  });
  $("#portfolio-carousel-prev").click(function()
  {
  	$('#portfolio-carousel').trigger('owl.prev');
  	return false;
  });
  $("#portfolio-carousel-next").click(function()
  {
  	$('#portfolio-carousel').trigger('owl.next');
  	return false;
  });
  
  
	/**/
	/* blog */
	/**/
	$('#blog .grid').isotope({
		itemSelector : '.item',
		masonry: {columnWidth: $('#blog .item').outerWidth()}
	});
	
	
	/**/
	/* team */
	/**/
	$('#team .filter').on('click', 'a', function()
	{		
		$('#team ul').isotope(
	 	{
	 		filter: $(this).data('filter')
		});
		$(this).addClass('active').siblings().removeClass('active');		
		
		return false;
	});
	$('#team ul').isotope({
		itemSelector : '.item',
		masonry: {columnWidth: $('#team .item').eq(0).outerWidth()}
	});
	
	
	/**/
	/* projects */
	/**/
	$('#projects .filter').on('click', 'a', function()
	{		
		$('#projects ul').isotope(
	 	{
	 		filter: $(this).data('filter')
		});
		$(this).addClass('active').siblings().removeClass('active');		
		
		return false;
	});
	$('#projects').imagesLoaded(function()
	{
		$('#projects ul').isotope({
			itemSelector : '.item',
			filter: $('#projects .filter .active').data('filter'),
			masonry: {columnWidth: $('#projects .item').eq(0).outerWidth()}
		});
	});
	
	
	/**/
	/* slider */
	/**/
	$('#slider').slider(
	{
		range: true,
		min: 0,
		max: 5000,
		values: [0, 5000],
		slide: function( event, ui )
		{
			$('#slider-label .from').text(ui.values[0]);
			$('#slider-label .to').text(ui.values[1]);
		}
	});
	
	
	/**/
	/* contact form */
	/**/
	
	/* validate the contact form fields */			
	$("#feedback-form").validate(
	{
		onkeyup: false,
		onfocusout: false,
		rules:
		{
			name:
			{
				required: true
			},
			email:
			{
				required: true,
				email: true
			},
			message:
			{
				required: true
			}
		},
		messages:
		{
			name:
			{
				required: 'Please enter your name',
			},
			email:
			{
				required: 'Please enter your email address',
				email: 'Please enter a VALID email address'
			},
			message:
			{
				required: 'Please enter your message'
			}
		},
		submitHandler: function(form)
		{			
			$form = $(form).ajaxSubmit();
			submit_handler($form, '#email_server_responce');
		}
	});

	/**/
	/* contact widget */
	/**/
	
	/* clear validation results on reset */	
	$("#widget-form").find("button[type='reset']").on("click", function (){
		validator.resetForm();
	});
	
	/* validate the widget form fields */		
	var validator = $("#widget-form").validate(
	{
		onkeyup: false,
		onfocusout: false,
		rules:
		{
			name:
			{
				required: true
			},
			email:
			{
				required: true,
				email: true
			},
			message:
			{
				required: true
			}
		},
		messages:
		{
			name:false,
			email:false,
			message:false
		},
		submitHandler: function(form)
		{			
			var $form = $(form);
			submit_handler($form, '#widget_server_responce');
		}
	});


	
	
	
	/* validate newsletter signup field */		
	$("#newsletter-form").validate(
	{
		onkeyup: false,
		onfocusout: false,
		rules:
		{
			email:
			{
				required: true,
				email: true
			}
		},
		messages:
		{
			email:
			{
				required: 'Please type in your email!',
				email: 'Please check your email!'
			}
		},
		submitHandler: function(form)
		{			
			var $form = $(form);
			submit_handler($form, '#signup_server_responce');
		}
	});
	
	/* Ajax, Server response */	
	function submit_handler (form, wrapper){
		var $wrapper = $(wrapper); //this class should be set in HTML code
		$wrapper.css("display","block");
		var data = {
			action: "email_server_responce",
			values: $(form).serialize()
		};
		//send data to server
		$.post("php/contacts-process.php", data, function(s_response) {
			s_response = $.parseJSON(s_response);
			if(s_response.info == 'success'){
				$wrapper.addClass("message message-success").append("<i class='fa fa-check'></i><h4>Your message has been successfully sent!</h4>");
				$wrapper.delay(5000).hide(500, function(){
					$(this).removeClass().text("").fadeIn(500);
					$wrapper.css("display","none");
				});
				$(form)[0].reset();	
			} else { 
				$wrapper.addClass("message message-error").append("<i class='fa fa-exclamation'></i><h4>Server fail! Please try again later!</h4>");
				$wrapper.delay(5000).hide(500, function(){
					$(this).removeClass().text("").fadeIn(500);
					$wrapper.css("display","none");
				});
			}
		});
	return false;
	}
	
	/**/
	/* countdown */
	/**/
	var date = new Date();
	date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10);
	$('#countdown').countdown({
		until: date,
		format: 'DHMS',
		layout: '<ul><li><span>{dnn}</span>{dl}</li><li><span>{hnn}</span>{hl}</li><li><span>{mnn}</span>{ml}</li><li><span>{snn}</span>{sl}</li></ul>'
	});
	
	
	/**/
	/* accordion */
	/**/
	$('.accordion .active').next().show();
	$('.accordion').on('click', 'dt', function()
	{
		$(this).toggleClass('active').siblings('dt').removeClass('active');
		$(this).siblings('dd').slideUp('fast');
		$(this).next().stop().slideDown('fast');
	});	
	
	
	/**/
	/* testimonial */
	/**/
	$('.testimonial-group').on('click', '.author', function()
	{
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().prev().find('.text').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
	$('#testimonials-carousel').owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 300,
		rewindSpeed: 300,
		autoHeight: true,
		afterUpdate :parallaxCarousel ,

  	});
  	//function to load parallax after carousel bild
  	function parallaxCarousel () {
  		setTimeout(function() { $('#testimonials-carousel').parent().parent().parallax(); }, 300)		
  	}
	
	
	
	/**/
	/* toggle */
	/**/
	$('.toggle .active').next().show();
	$('.toggle').on('click', 'dt', function()
	{
		$(this).toggleClass('active');
		$(this).next().stop().slideToggle('fast');
	});
	
	
	/**/
	/* twitter carousel */
	/**/
	if ($('#twitter-carousel').length) {
		$('#twitter-carousel').tweet({
			username: 'Creative_WS',
			count: 5,
			loading_text: 'loading twitter feed...',
			template: "<div class='item'><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p></div>"
		});
		$('#twitter-carousel .tweet_list').addClass("owl-carousel");
		twitter_carousel_init();
	};
	if ($('#twitter-carousel-alt').length) {
		$('#twitter-carousel-alt').tweet({
			username: 'Creative_WS',
			count: 5,
			loading_text: 'loading twitter feed...',
			template: "<div class='item'><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p></div>"
		});
		$('#twitter-carousel-alt .tweet_list').addClass("owl-carousel");
		twitter_carousel_init();
	};
	
	function twitter_carousel_init (){	
		$('#twitter-carousel .tweet_list').owlCarousel({
			singleItem: true,
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			pagination: false,
			slideSpeed: 300,
			paginationSpeed: 300,
			rewindSpeed: 300,
			autoHeight: true
	  });
		$('#twitter-carousel-alt .tweet_list').owlCarousel({
			singleItem: true,
			navigation: false,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			pagination: true,
			slideSpeed: 300,
			paginationSpeed: 300,
			rewindSpeed: 300,
			autoHeight: true
	  });
	};

	/* twitter feed */
	if ($('.twitter-feed').length) {
		$('.twitter-feed').tweet({
			username: 'Creative_WS',
			count: 5,
			loading_text: 'loading twitter feed...',
			template: "<li><i class='fa fa-twitter'></i><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p></li>"
		});
	};
	
	/**/
	/* widget sellers */
	/**/
	$('#sellers-carousel, #sales-carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 300,
		rewindSpeed: 300,
		autoHeight: true
  });
	
	
	/**/
	/* map */
	/**/
	if( document.getElementById('map') )
	{
		var script = document.createElement('script');
	 	script.type = 'text/javascript';
	 	script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=init_map';
	 	document.body.appendChild(script);
 	}
	
	
	/**/
	/* scroll top */
	/**/
	$('#scroll-top').click(function()
	{
		$('html, body').animate({scrollTop: 0});
		return false;
	});
});
/**/
/* on window load */
/**/
jQuery(window).load(function()
{
	/**/
	/* bgvideo */
	/**/
	$('#bgvideo video').css('margin', '-' + $('#bgvideo video').height()/2 + 'px 0 0 -' + $('#bgvideo video').width()/2 + 'px');
	setTimeout(function()
	{
		$('#bgvideo video').css('margin', '-' + $('#bgvideo video').height()/2 + 'px 0 0 -' + $('#bgvideo video').width()/2 + 'px');
	}, 1000);
	
	/* parallax */
	$('.parallaxed').parallax();

	
	
	/**/
	/* blog */
	/**/
	$('.blog .grid').isotope({
		masonry: {columnWidth: $('.blog .item').eq(0).outerWidth()}
	});
});

//# sourceMappingURL=frontend.js.map
