(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[1571],{11571:function(t,e,n){"use strict";n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(71843),i=function(t){var e,n,i,l,v=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,h=function(t){v=(0,o.o)(t),g(t)},E=function(){clearTimeout(l),l=void 0,n&&(S(!1),n=void 0)},w=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,T(a(t),t))},g=function(t){T(void 0,t)},T=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var i=(0,o.p)(e),a=i.x,c=i.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||k(n,a,c),S(!0)}if(t){var d=m.get(t);d&&(clearTimeout(d),m.delete(t));var f=r(t)?0:u;t.classList.remove(s),l=setTimeout(function(){k(t,a,c),l=void 0},f)}n=t}},k=function(t,e,n){p=Date.now(),t.classList.add(s);var o=L&&c(t);o&&o.addRipple&&(b(),i=o.addRipple(e,n))},b=function(){void 0!==i&&(i.then(function(t){return t()}),i=void 0)},S=function(t){b();var e=n;if(e){var o=d-Date.now()+p;if(t&&o>0&&!r(e)){var i=setTimeout(function(){e.classList.remove(s),m.delete(e)},d);m.set(e,i)}else e.classList.remove(s)}},C=document;C.addEventListener("ionScrollStart",function(t){e=t.target,E()}),C.addEventListener("ionScrollEnd",function(){e=void 0}),C.addEventListener("ionGestureCaptured",E),C.addEventListener("touchstart",function(t){v=(0,o.o)(t),w(t)},!0),C.addEventListener("touchcancel",h,!0),C.addEventListener("touchend",h,!0),C.addEventListener("mousedown",function(t){var e=(0,o.o)(t)-f;v<e&&w(t)},!0),C.addEventListener("mouseup",function(t){var e=(0,o.o)(t)-f;v<e&&g(t)},!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(o.classList&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);