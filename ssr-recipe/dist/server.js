!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=14)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){e.exports=n(11)},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r);function u(e,t,n,r,o,u,a){try{var c=e[u](a),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){u(a,r,o,c,i,"next",e)}function i(e){u(a,r,o,c,i,"throw",e)}c(void 0)}))}}var c=n(0),i=n.n(c),s=n(5),l=n.n(s),f=n(6),p=n.n(f),d=n(1),m=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/red"},"Red")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/blue"},"Blue")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/users"},"Users")))},v=(n(12),function(){return i.a.createElement("div",{className:"Red"},"Red")}),E=function(){return i.a.createElement(v,null)},b=(n(13),function(){return i.a.createElement("div",{className:"Blue"},"Blue")}),h=function(){return i.a.createElement(b,null)},y=function(e){var t=e.users;return t?i.a.createElement("div",null,i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},x=n(4);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=n(8),P=n.n(S),w=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},R={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/GET_USERS_PENDING":return j({},e,{loading:j({},e.loading,{users:!0})});case"users/GET_USERS_SUCCESS":return j({},e,{loading:j({},e.loading,{users:!1}),users:t.payload.data});case"users/GET_USERS_FAILURE":return j({},e,{loading:j({},e.loading,{users:!1}),error:j({},e.error,{users:t.payload})});default:return e}},k=Object(c.createContext)(null),U=k,q=function(e){var t=e.resolve,n=Object(c.useContext)(k);return n?(n.done||n.promises.push(Promise.resolve(t())),null):null},T=Object(x.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=a(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"users/GET_USERS_PENDING"}),e.next=4,P.a.get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,t({type:"users/GET_USERS_SUCCESS",payload:n}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),t(w(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.users,n=e.getUsers;return Object(c.useEffect)((function(){t||n()}),[n,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{users:t}),";",i.a.createElement(q,{resolve:n}))})),G=function(){return i.a.createElement(T,null)},C=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement("hr",null),i.a.createElement(d.Route,{path:"/red",component:E}),i.a.createElement(d.Route,{path:"/blue",component:h}),i.a.createElement(d.Route,{path:"/users",component:G}))},D=n(7),N=n.n(D),L=n(9),M=n.n(L),F=n(3),I=n(10),A=n.n(I),B=Object(F.combineReducers)({users:_}),J=JSON.parse(M.a.readFileSync(N.a.resolve("./build/asset-manifest.json"),"utf8")),Y=Object.keys(J.files).filter((function(e){return/chunk\.js$ /.exec(e)})).map((function(e){return'<script src="'.concat(J.files[e],'"><\/script>')})).join("");function $(e,t){return'<!DOCTYPE html>\n  <html lang="en">\n            <head>\n                <meta charset="utf-8" />\n                <link rel="shortcut icon" href="/favicon.ico" />\n                <meta\n                    name="viewport"\n                    content="width=device-width,initial-scale=1,shrink-to-fit=no"\n                />\n                <meta name="theme-color" content="#000000" />\n                <title>React App</title>\n                <link gref="'.concat(J.files["main.css"],'" rel="stylesheet" />\n            </head>\n            <body>\n                <noscript>You need to enable JavaScript to run this app.</noscript>\n                <div id="root">\n                    ').concat(e,"\n                </div>\n                ").concat(t,'\n                <script src="').concat(J.files["runtime~main.js"],'"><\/script>\n                ').concat(Y,'\n                <script src="').concat(J.files["main.js"],'"><\/script>\n            </body>\n        </html>\n  ')}var z=p()(),H=function(){var e=a(o.a.mark((function e(t,n,r){var u,a,c,s,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},a=Object(F.createStore)(B,Object(F.applyMiddleware)(A.a)),c={done:!1,promises:[]},s=i.a.createElement(U.Provider,{value:c},i.a.createElement(x.Provider,{store:a},i.a.createElement(d.StaticRouter,{location:t.url,context:u},i.a.createElement(C,null)))),l.a.renderToStaticMarkup(s),e.prev=5,e.next=8,Promise.all(c.promises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",n.status(500));case 13:c.done=!0,f=l.a.renderToString(s),n.send($(f));case 16:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),K=p.a.static(N.a.resolve("./build"),{index:!1});z.use(K),z.use(H),z.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);