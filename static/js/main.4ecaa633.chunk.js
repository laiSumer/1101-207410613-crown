(this.webpackJsonpreact_crown_13=this.webpackJsonpreact_crown_13||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i,c,r=n(0),s=n(15),l=n.n(s),a=n(7),o=(n(22),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))}),m=(n(23),n(10)),b=n(1),d=function(e){var t=e.name,n=e.remoteUrl,i=e.size;return Object(b.jsxs)("div",{className:"".concat(i,"  menu-item"),children:[Object(b.jsx)("img",{className:"background-image",src:n,alt:""}),Object(b.jsxs)("a",{href:"./hats.html",className:"content",children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})},j=(n(25),[{id:1,name:"HATS",remoteUrl:"https://i.ibb.co/cvpntL1/hats.png",size:""},{id:2,name:"JACKETS",remoteUrl:"https://i.ibb.co/px2tCc3/jackets.png",size:""},{id:3,name:"SNEAKERS",remoteUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",size:""},{id:4,name:"WOMENS",remoteUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large"},{id:5,name:"HMENS",remoteUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large"}]),p=function(){var e=Object(r.useState)(j),t=Object(m.a)(e,2),n=t[0];t[1];return console.log("menuItems",n),Object(b.jsx)("div",{className:"directory-menu",children:n.map((function(e){var t=e.id,n=e.name,i=e.remoteUrl,c=e.size;return Object(b.jsx)(d,{id:t,name:n,remoteUrl:i,size:c})}))})},h=(n(26),function(){return Object(b.jsx)("div",{className:"homepage",children:Object(b.jsx)(p,{})})}),u=n(2),O=function(e){var t=e.title,n=e.name,i=e.remoteUrl,c=e.size;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"collection-preview",children:[Object(b.jsx)("h2",{className:"title",children:t}),Object(b.jsx)("div",{className:"preview",children:Object(b.jsxs)("div",{className:"collection-item",children:[Object(b.jsx)("img",{className:"image",src:i}),Object(b.jsxs)("div",{className:"collection-footer",children:[Object(b.jsx)("span",{className:"name",children:n}),Object(b.jsx)("span",{className:"price",children:c})]}),Object(b.jsx)("button",{className:"custom-button",children:"Add to Cart"})]})})]})})},x=(n(27),[{id:1,title:"Hats",name:"Brown Brim",remoteUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",size:"25"},{id:2,title:"*",name:"Blue Beanie",remoteUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",size:"18"},{id:3,title:"*",name:"Brown Cowboy",remoteUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",size:"35"},{id:4,title:"*",name:"Grey Brim",remoteUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",size:"25"},{id:5,title:"Jackets",name:"Adidas NMD",remoteUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",size:"220"},,{id:6,title:"*",name:"Adidas Yeezy",remoteUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",size:"280"},,{id:7,title:"*",name:"Black Converse",remoteUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",size:"110"},,{id:8,title:"*",name:"Nike White AirForce",remoteUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",size:"160"}]),g=function(){var e=Object(r.useState)(x),t=Object(m.a)(e,2),n=t[0];t[1];return console.log("menuItems",n),Object(b.jsx)("div",{className:"directory-menu",children:n.map((function(e){var t=e.id,n=e.title,i=e.name,c=e.remoteUrl,r=e.size;return Object(b.jsx)(O,{id:t,title:n,name:i,remoteUrl:c,size:r})}))})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{})})},v=function(){return Object(b.jsx)("h2",{children:"Contact Page"})},w=function(){return Object(b.jsx)("h2",{children:"Signin Page"})},y=["title","titleId"];function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},N.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function z(e,t){var n=e.title,s=e.titleId,l=E(e,y);return r.createElement("svg",N({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":s},l),void 0===n?r.createElement("title",{id:s},"Group"):n?r.createElement("title",{id:s},n):null,i||(i=r.createElement("desc",null,"Created with Sketch.")),c||(c=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var U=r.forwardRef(z),k=(n.p,n(28),function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(a.b,{to:"/",className:"logo-container",children:Object(b.jsx)(U,{})}),Object(b.jsxs)("div",{className:"options",children:[Object(b.jsx)(a.b,{to:"./shop_13",className:"option",children:"Shop"}),Object(b.jsx)(a.b,{to:"/contact_13",className:"option",children:"Contact"}),Object(b.jsx)(a.b,{to:"/signin_13",className:"option",children:"Sign In"})]})]})})});var S=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(u.a,{exact:!0,path:"/shop_13",component:f}),Object(b.jsx)(u.a,{exact:!0,path:"/contact_13",component:v}),Object(b.jsx)(u.a,{exact:!0,path:"/Signin_13",component:w})]})]})};l.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),o()}},[[34,1,2]]]);
//# sourceMappingURL=main.4ecaa633.chunk.js.map