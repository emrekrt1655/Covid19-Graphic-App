(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{67:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(0),a=n.n(c),i=n(11),o=n.n(i),s=(n(67),n(34)),u=n(14),l=n.n(u),d=n(22),j=n(27),p=n(134),b=n(136),v=n(137),h=n(140),O=n(141),f=n(131),x=n.p+"static/media/virus.b7d2e085.svg",m=n(37),g=n.n(m),y="http://api.covid19api.com",w=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(y,"/countries"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(y,"/dayone/country/").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(49),S=n.n(C);function D(e){var t=e.country,n=Object(c.useState)([]),a=Object(j.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(),u=Object(j.a)(s,2),p=u[0],b=u[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:n=e.sent,o(n),b(n[n.length-1]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsxs)("h1",{style:{color:"blue"},children:[" ",null===p||void 0===p?void 0:p.Country," "]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{color:"blue"},children:"Active:"})," ",null===p||void 0===p?void 0:p.Active]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{color:"blue"},children:"Total:"})," ",null===p||void 0===p?void 0:p.Confirmed]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{color:"blue"},children:"Recoverd:"})," ",null===p||void 0===p?void 0:p.Recovered]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{color:"blue"},children:"Deaths"})," ",null===p||void 0===p?void 0:p.Deaths]})]}),Object(r.jsx)("div",{id:"chart",children:Object(r.jsx)(S.a,{options:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(e){return null===e||void 0===e?void 0:e.Date}))},tooltip:{x:{format:"dd/MM/yy"}}},series:[{name:"Cases",data:null===i||void 0===i?void 0:i.map((function(e){return null===e||void 0===e?void 0:e.Confirmed}))},{name:"Recovered",data:null===i||void 0===i?void 0:i.map((function(e){return null===e||void 0===e?void 0:e.Recovered}))},{name:"Deaths",data:null===i||void 0===i?void 0:i.map((function(e){return null===e||void 0===e?void 0:e.Deaths}))}],style:{marginTop:100},height:400})})]})}var R=Object(f.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}}),A=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)("turkey"),u=Object(j.a)(o,2),f=u[0],m=u[1],g=R();Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=null===n||void 0===n?void 0:n.map((function(e){return{label:e.Country,slug:e.Slug}}));return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(p.a,{}),Object(r.jsxs)(b.a,{maxWidth:"lg",children:[Object(r.jsxs)(v.a,{container:!0,children:[Object(r.jsx)("img",{src:x,alt:"Covid19",style:{width:100,height:100,marginTop:20}}),Object(r.jsx)(O.a,{id:"country-select-demo",style:{width:"50%",margin:"50px auto"},value:null,onChange:function(e,t){m(t.slug)},options:y,classes:{option:g.option},autoHighlight:!0,getOptionLabel:function(e){return e.label},renderOption:function(e){return Object(r.jsx)(a.a.Fragment,{children:e.label})},renderInput:function(e){return Object(r.jsx)(h.a,Object(s.a)(Object(s.a)({},e),{},{label:"Choose a country",variant:"outlined",inputProps:Object(s.a)({},e.inputProps)}))}})]}),Object(r.jsx)(v.a,{item:!0,xs:12,children:Object(r.jsx)("h4",{children:" "})}),Object(r.jsx)(v.a,{item:!0,xs:12,children:Object(r.jsx)(D,{country:f})})]})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.40fcd57c.chunk.js.map