(function(a){function b(){return a(this).is(":appeared")}function c(){return!a(this).data("_appear_triggered")}function d(){h=!1;for(var a,d=0,e=f.length;d<e;d++){if(a=f[d].filter(b),a.filter(c).data("_appear_triggered",!0).trigger("appear",[a]),k[d]){var g=k[d].not(a);g.data("_appear_triggered",!1).trigger("disappear",[g])}k[d]=a}}function e(a){f.push(a),k.push()}var f=[],g=!1,h=!1,i={interval:250,force_process:!1},j=a(window),k=[];a.expr.pseudos.appeared=a.expr.createPseudo(function(){return function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=j.scrollLeft(),e=j.scrollTop(),f=c.offset(),g=f.left,h=f.top;return!!(h+c.height()>=e&&h-(c.data("appear-top-offset")||0)<=e+j.height()&&g+c.width()>=d&&g-(c.data("appear-left-offset")||0)<=d+j.width())}}),a.fn.extend({appear:function(b,c){return a.appear(this,c),this}}),a.extend({appear:function(b,c){var f=a.extend({},i,c||{});if(!g){var j=function(){h||(h=!0,setTimeout(d,f.interval))};a(window).scroll(j).resize(j),g=!0}f.force_process&&setTimeout(d,f.interval),e(b)},force_appear:function(){return!!g&&(d(),!0)}})})(function(){return"undefined"==typeof module?jQuery:require("jquery")}());