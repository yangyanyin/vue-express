(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)r=o[f],i[r]&&p.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={passport:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([6,"chunk-vendors","chunk-common"]),n()})({"331e":function(t,e,n){"use strict";var s=n("a1d0"),i=n.n(s);i.a},"3e0c":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[t.loadingSuccess?n("div",{staticClass:"passport"},[n("div",{staticClass:"pc-max-width"},[n("div",{staticClass:"passport-list"},[n("ul",{staticClass:"clearfix"},t._l(t.passportList,function(e,s){return n("li",{key:s,on:{click:function(e){return t.tabClick(s)}}},[n("strong",{staticClass:"name"},[t._v(t._s(e.name))]),n("img",{attrs:{src:e.passport_img}}),n("div",{staticClass:"clearfix info"},[n("div",{staticClass:"left"},[n("strong",[t._v(t._s(e.visa_free_number))]),n("i",[t._v("免签国家")])]),n("div",{staticClass:"right"},[n("strong",[t._v("31")]),n("i",[t._v("全球排名")])])])])}),0)]),n("div",{staticClass:"country"},t._l(t.passportList,function(e,s){return n("div",{key:s,staticClass:"list clearfix animation-show"},[n("div",{staticClass:"left name-img clearfix"},[n("strong",{staticClass:"name"},[t._v(t._s(e.name))]),n("img",{attrs:{src:e.passport_img}}),n("div",{staticClass:"clearfix info"},[n("div",{staticClass:"left"},[n("strong",[t._v(t._s(e.visa_free_number))]),n("i",[t._v("免签国家")])]),n("div",{staticClass:"right"},[n("strong",[t._v("31")]),n("i",[t._v("全球排名")])])])]),n("div",{staticClass:"right exemption"},[n("div",{staticClass:"title"},[t._v("免签国家"),n("strong",[t._v(t._s(e.visa_free_number))]),n("i",[t._v("(个)")])]),n("div",t._l(e.visa_countries,function(e,s){return n("ul",{key:s,staticClass:"clearfix"},[n("li",[n("img",{attrs:{src:e.flag}}),t._v(t._s(e.name))]),n("li",{class:t.countryClass(e.type)},[t._v(t._s(e.type))])])}),0)])])}),0)])]):n("loadingPage")],1)},a=[],r=n("08cd"),o=n("b21a"),c=n("185b"),l={name:"app",components:{Layout:r["a"],loadingPage:c["a"]},data:function(){return{passportList:"",loadingSuccess:!1}},methods:{tabClick:function(t){var e=document.getElementsByClassName("list"),n=e[t].offsetTop-100;document.body.scrollTop=n,document.documentElement.scrollTop=n},countryClass:function(t){var e;return t&&(t.indexOf("签证入境")>=0?e="type1":t.indexOf("落地签入境")>=0||t.indexOf("电子签证")>=0?e="type2":t.indexOf("免签目的国")>=0?e="type3":(t.indexOf("eVisa")>=0||t.indexOf("旅行")>=0||t.indexOf("enrolment")>=0||t.indexOf("tourist")>=0||t.indexOf("预注册")>=0)&&(e="type4")),e}},mounted:function(){var t=this;this.$http({method:"get",url:"https://cms.aicassets.com/v1/passportsInfo"}).then(function(e){200===e.data.code&&(t.passportList=e.data.data,t.loadingSuccess=!0,setTimeout(function(){var t=document.documentElement.scrollTop||document.body.scrollTop;Object(o["a"])(t),Object(o["c"])()},10))})}},u=l,f=(n("331e"),n("2877")),p=Object(f["a"])(u,i,a,!1,null,"13209ce0",null),d=p.exports,v=n("bc3a"),m=n.n(v);s["a"].prototype.$http=m.a,new s["a"]({render:function(t){return t(d)}}).$mount("#app")},6:function(t,e,n){t.exports=n("3e0c")},a1d0:function(t,e,n){}});
//# sourceMappingURL=passport.b736e7ff.js.map