(this["webpackJsonpshishi-eyal"]=this["webpackJsonpshishi-eyal"]||[]).push([[0],{25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(19),i=c.n(s),r=(c(25),c(6)),l=c(1),o=function(e){var t=e.data,c=e.url,n=(e.defaultImage,t[0].imageUrl);return Object(l.jsx)("div",{className:"flex",children:Object(l.jsx)("div",{className:"custom-grid",children:t.map((function(e,t){return Object(l.jsx)(r.b,{to:"".concat(c,"/").concat(e.title),children:Object(l.jsxs)("div",{className:"grid-item-preview",children:[Object(l.jsx)("img",{src:e.imageUrl?e.imageUrl:n,alt:"not found"}),e.title&&Object(l.jsx)("p",{children:e.title})]})},t)}))})})},j=c(5),u=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!0),r=Object(j.a)(i,2),l=r[0],o=r[1],u=Object(n.useState)(null),d=Object(j.a)(u,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal,mode:"no-cors"}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){s(e),o(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(h(e.message),o(!1))})),function(){return t.abort()}}),[e]),{data:a,isPending:l,error:b}},d=function(){var e=u("https://github.com/eyalhub/shishi/releases/download/0/data.json").data;return console.log(e),e&&Object(l.jsxs)("div",{className:"categories",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("p",{children:":\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d5\u05ea"})}),Object(l.jsx)(o,{data:e,url:"/categories"})]})},b=function(){return Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("div",{className:"appBar",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("p",{className:"orangeBox",children:"\u05d0\u05d9\u05d9\u05dc"}),Object(l.jsx)("p",{children:"\u05e9\u05d9\u05e9\u05d9"})]})})})})},h=c(2),O=c(20),x=c.n(O),p=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),i=Object(j.a)(s,2),r=i[0],o=i[1];return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(l.jsx)("p",{style:{color:"white"},children:"upload a new photo"}),Object(l.jsx)("input",{type:"file",id:"img",name:"img",accept:"image/*",onChange:function(e){o(e.target.files[0])}}),Object(l.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)}}),Object(l.jsx)("button",{type:"submit",onClick:function(){console.log("submit");var e=new FormData;e.append("image",r),e.append("text",c),x.a.post("http://localhost:8000/uploadImage",e)},children:"submit"})]})};var m=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/",element:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(b,{})}),Object(l.jsx)(d,{})]})}),Object(l.jsx)(h.a,{path:"/categories/:type",element:Object(l.jsx)(p,{})})]})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.367614fe.chunk.js.map