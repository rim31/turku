(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,a){},221:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(81),l=t.n(c),s=(t(92),t(3));function i(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement(s.b,{to:"/turku"},r.a.createElement("img",{src:"/turku/logo.png",alt:"meow"}))),r.a.createElement("ul",{className:"nav",style:{fontSize:"2em"}},r.a.createElement("li",null,r.a.createElement("i",{className:"tim-icons icon-pin"}),r.a.createElement(s.b,{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"},to:"/place"},"Places")),r.a.createElement("li",null,r.a.createElement("i",{className:"tim-icons icon-pin"}),r.a.createElement(s.b,{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"},to:"/event"},"Events")),r.a.createElement("li",{className:"tim-icons icon-pin "},r.a.createElement("i",{className:"tim-icons icon-chart-pie-36"}),r.a.createElement(s.b,{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"},to:"/covid"},"Covid19")),r.a.createElement("li",null,r.a.createElement("i",{className:"tim-icons icon-pin"}),r.a.createElement(s.b,{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"},to:"/name"},"Popular")))))}function o(){return r.a.createElement("footer",{className:"footer",style:{bottom:0,position:"fixed",right:0}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/rim31",className:"nav-link"},"rim31.github.io")),r.a.createElement("span",{className:"copyright"},"\xa9",r.a.createElement("script",null,"document.write(new Date().getFullYear())"),"2020 made by",r.a.createElement("a",{href:"https://github.com/rim31"}," oseng ")," \ud83d\ude00")))}var m={myHeader:{display:"flex",justifyContent:"center",height:"4em",width:"100%",backgroundColor:"#525f7f",top:0,zIndex:10,position:"fixed",verticalAlign:"middle",border:"solid 1px"}};function u(){return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-absolute",style:m.myHeader},r.a.createElement(s.b,{className:"d-flex inline",to:"/turku"},r.a.createElement("img",{style:{zIndex:10},src:"/turku/images/meow.png",height:"40",alt:"meow logo"}),r.a.createElement("img",{style:{zIndex:10},src:"/turku/apple-icon-114x114.png",height:"36",alt:"meow logo"})),r.a.createElement("div",{id:"home",className:"container-fluid"},r.a.createElement("div",{className:"navbar-wrapper align-middle",style:{position:"fixed",float:"left",top:0}},r.a.createElement("div",{className:"navbar-toggle d-inline"},r.a.createElement("span",{className:"navbar-toggler navbar-absolute","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}," ")))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navigation",style:{backgroundColor:"black"}},r.a.createElement("ul",{className:"navbar-nav ml-auto","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement(s.b,{className:"d-lg-none",to:"/turku"},"Home ",r.a.createElement("img",{className:"",src:"/turku/images/meow.png",height:"30",alt:"meow logo"}))),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement(s.b,{className:"d-lg-none",to:"/event"},"Events")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement(s.b,{className:"d-lg-none",to:"/place"},"Places")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement(s.b,{className:"d-lg-none",to:"/covid"},"Covid19")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement(s.b,{className:"d-lg-none",to:"/name"},"Popularity"))))))}var d=t(1),p=t(33);function v(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),i=s[0],o=s[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),v=u[0],f=u[1],E=Object(n.useState)(1),g=Object(d.a)(E,2),b=g[0],h=g[1],N=Object(n.useState)("Places"),y=Object(d.a)(N,2),x=y[0],k=y[1],j=Object(n.useState)(!0),O=Object(d.a)(j,2),w=O[0],S=O[1];function C(){return v?i.filter((function(e){var a=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(v.toLowerCase())>-1)return a=!0,null})),a?e:null})):i}return Object(n.useEffect)((function(){var e;e="turku/images/alkoholilupa_toimipaikkatiedot_34.csv",Object(p.a)(e,{complete:function(e){e&&(c(e.data.shift()),o(e.data))}}),S(!1),k("Places")}),[]),Object(n.useEffect)((function(){i&&i.length>0&&S(!1)}),[i]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Approval alcohol consumption : ",x)),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search a place...",value:v,onChange:function(e){return f(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),r.a.createElement("div",{className:"card-body"},w&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,t&&t.map((function(e,a){return r.a.createElement("th",{key:a,onClick:function(){return a=e,h(-1*b),void o(i.sort((function(e,t){return(1===b?e[a]>t[a]:e[a]<t[a])?1:-1})));var a}},e,"\u2195")})))),r.a.createElement("tbody",null,C()&&C().map((function(e,a){return r.a.createElement("tr",{key:a},e.map((function(e,a){return r.a.createElement("td",{key:a},e)})))}))))))))}var f=t(4),E=t.n(f),g=t(9),b=t(20),h=t.n(b),N=function(){var e=Object(g.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(a||"https://api.turku.fi/linkedevents/v1/event/?page=1");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),y=t(21),x=t.n(y),k=t(84),j=t.n(k),O=t(85),w=Object(O.a)((function(){var e=n.useState([]),a=Object(d.a)(e,2),t=a[0],r=a[1],c=n.useState([]),l=Object(d.a)(c,2),s=l[0],i=l[1],o=n.useState([]),m=Object(d.a)(o,2),u=m[0],p=m[1],v=n.useState("https://api.turku.fi/linkedevents/v1/event/?page=1"),f=Object(d.a)(v,2),b=f[0],N=f[1],y=n.useState([]),k=Object(d.a)(y,2),O=k[0],w=k[1],S=n.useState(""),C=Object(d.a)(S,2),D=C[0],A=C[1],P=n.useState(""),F=Object(d.a)(P,2),L=F[0],I=F[1],z=new Headers({Accept:"application/json","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0"}),_=function(){var e=Object(g.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(a||b);case 2:return t=e.sent,w(t.data.data),t.data.meta.next&&A(t.data.meta.next),t.data.meta.previous&&I(t.data.meta.previous),e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function T(e,a,t,n){var c=[],l=[];if(e.length>0){e.forEach((function(e){x()(e.Date).isAfter(n)&&(c.push(e.Cases),l.push(x()(e.Date).format("YYYY/MM/DD")))}));var s=j.a.map(c,(function(e,a){return c[a+1]-e<0?0:c[a+1]-e}));s.pop(),c.pop(),l.pop(),i(s),r(c),p(l)}}return{data:t,dataDiff:s,labels:u,headers:z,events:O,nextEvents:D,previousEvents:L,getDataCovid:function(){var e=Object(g.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"finland","confirmed",a="".concat(x()().subtract(3,"months").format()),e.next=6,fetch("https://api.covid19api.com/country/".concat("finland","/status/").concat("confirmed","/live?from=").concat(a,"&to=").concat(x()().format("YYYY-MM-DDT00:00:00")),{method:"GET",redirect:"follow",headers:z}).then((function(e){return e.json()})).then((function(e){T(e,0,0,a)})).catch((function(e){return alert(e)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),fetchEventsUrl:_,setEventUrl:N,setNextEvents:A,setPreviousEvents:I}}));function S(){var e=w.useContainer(),a=Object(n.useState)(e.events),t=Object(d.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),o=i[0],m=i[1],u=Object(n.useState)("https://api.turku.fi/linkedevents/v1/event/?page=1"),p=Object(d.a)(u,2),v=p[0],f=p[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),y=h[0],x=h[1],k=Object(n.useState)(!0),j=Object(d.a)(k,2),O=j[0],S=j[1],C=function(){var a=Object(g.a)(E.a.mark((function a(t){var n,r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return S(!0),a.next=3,N(t);case 3:(n=a.sent)&&(n.data.meta.next&&e.setNextEvents(n.data.meta.next),n.data.meta.previous&&e.setPreviousEvents(n.data.meta.previous),l(n.data.data)),f(t),null!=(r=o?t.match(/=(.*)&q/):t.match(/=(.*)/))&&(r=r[1]),x(r||"1"),S(!1);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),D=function(){var e=Object(g.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===a.key&&(o.trim()?C("https://api.turku.fi/linkedevents/v1/search/?type=event&q="+o):(C("https://api.turku.fi/linkedevents/v1/event/?page=1"),m("")));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){S(!0),0===e.events.length&&C(v),S(!1)}),[]);return Object(n.useEffect)((function(){c&&c.length>0&&S(!1)}),[c]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Events in TURKU")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm mr-1",onClick:function(){return C(e.previousEvents)}},"Previous"),r.a.createElement("span",null,"Page ",y),r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm ml-1",onClick:function(){return C(e.nextEvents)}},"Next")),r.a.createElement("div",{className:"input-group-prepend mb-3 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search an event in Turku...",value:o,onChange:function(e){return m(e.target.value)},"aria-label":"search events","aria-describedby":"events",onKeyPress:D}))),r.a.createElement("div",{className:"d-flex row"},O&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),c?c.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-lg-4 col-md-6 col-sm-6 "},r.a.createElement("div",{className:"card clearfix"},e.images&&(e.images.length>0?r.a.createElement("img",{className:"card-img-top img-fluid ",src:e.images[0].url,alt:"event",style:{width:"100%",height:"15vw",objectFit:"cover"}}):r.a.createElement("img",{className:"card-img-top img-fluid ",src:"turku/images/logo.png",alt:"nothing",style:{height:"15vw",objectFit:"cover"}})),r.a.createElement("div",{className:"card-block"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name?e.name.fi:"no name"),r.a.createElement("h5",{className:"card-title"},e.end_time?e.end_time.substr(0,10):"no date"),e.description&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm","data-toggle":"collapse","data-target":"#detail_event".concat(a)},e.description.fi?"Details":"No details"),r.a.createElement("div",{id:"detail_event".concat(a),className:"collapse card-text"},e.description?function(e){if(e)return e.replaceAll("<p>","").replaceAll("<br>","").replaceAll("</br>","\n").replaceAll("</p>","\n")}(e.description.fi?e.description.fi:""):""))))))})):r.a.createElement("div",null,r.a.createElement("p",null,"Loading"),r.a.createElement("img",{src:"turku/images/logo.png",alt:"loading"}))))}var C=function(){var e=Object(g.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:a,units:"metric",APPID:"f33a484cf794d08d0148764789aaba32"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function D(){var e,a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),o=i[0],m=i[1],u=function(){var e=Object(g.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==a.key){e.next=6;break}return e.next=3,C(c.toLowerCase());case 3:t=e.sent,m(t.data),l("");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",null,r.a.createElement("label",{className:"text-center"},"Search",r.a.createElement("input",{id:"search",name:"search",type:"text",className:"search",placeholder:"Search...",value:c,onChange:function(e){return l(e.target.value)},onKeyPress:u}))),o.main&&r.a.createElement("div",{className:"city"},r.a.createElement("h2",{className:"city-name"},r.a.createElement("span",null,o.name),r.a.createElement("sup",null,o.sys.country," ",(e=o.sys.country,"undefined"!==typeof String.fromCodePoint?e.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):e))),r.a.createElement("div",{className:"city-temp"},Math.round(o.main.temp),r.a.createElement("sup",null,"\xb0C")),r.a.createElement("div",{className:"info"},r.a.createElement("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(o.weather[0].icon,"@2x.png"),alt:o.weather[0].description}),r.a.createElement("p",{style:{color:"black"}},o.weather[0].description))))}function A(){}function P(){return r.a.createElement("div",{className:"card card-chart"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Events in Turku"),r.a.createElement("h5",{className:"card-category"},"Find all events in Turku")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/event.png",alt:"event"}))))}function F(){return r.a.createElement("div",{className:"card card-chart"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Top drinks place"),r.a.createElement("h5",{className:"card-category"},"Approval places for drinking in Finland")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/drinks.png",alt:"drinks"}))))}function L(){return r.a.createElement("div",{className:"card card-chart"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Famous name"),r.a.createElement("h5",{className:"card-category"},"Find out if your name or family name popular in Finland ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/name.png",alt:"famous name"}))))}function I(){return r.a.createElement("div",{className:"card card-chart"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Covid 19 Stats"),r.a.createElement("h5",{className:"card-category"},"Evolution of coronavirus' contamination in Finland")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/virus.png",alt:"virus"}))))}function z(){var e=w.useContainer();return Object(n.useEffect)((function(){e.fetchEventsUrl(null),e.getDataCovid()}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"alert alert-dismissable border border-default text-center",style:{backgroundImage:"url(/turku/images/turku.jpg)",backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},r.a.createElement("button",{className:"close mb-0",type:"button","data-dismiss":"alert"},"\xd7"),r.a.createElement("p",{className:"pt-2 text-capitalize",style:{fontSize:"2em",color:"white",fontWeight:400,textShadow:"1px 1px black"}},"Turku DashBoard : Top OpenData")),r.a.createElement("div",{className:"d-flex row"},r.a.createElement(s.b,{className:"col-lg-6 col-md-6 col-sm-6",to:"/event"},r.a.createElement(P,null)),r.a.createElement(s.b,{className:"col-lg-6 col-md-6 col-sm-6",to:"/place"},r.a.createElement(F,null)),r.a.createElement(s.b,{className:"col-lg-6 col-md-6 col-sm-6",to:"/covid"},r.a.createElement(I,null)),r.a.createElement(s.b,{className:"col-lg-6 col-md-6 col-sm-6",to:"/name"},r.a.createElement(L,null))))}var _=t(86);function T(e){var a={labels:e.labels,datasets:[{label:"COVID-19 confirmed cases - last 2 months",data:e.data,backgroundColor:"lightgreen",color:"rgba(009,009,250,0.75)",hoverBackgroundColor:"rgb(255,255,153,1)"}]};return r.a.createElement("div",{style:{backgroundColor:"#555555"}},r.a.createElement(_.Bar,{data:a,options:{legend:{display:!0,fontColor:"white"},title:{display:!0,text:"Finland - Covid19 - last 2 months",fontColor:"white"},scales:{yAxes:[{ticks:{fontColor:"white",fontSize:18,color:"rgba(2, 2, 2, 0.1)"}}],xAxes:[{ticks:{fontColor:"white",fontSize:14}}]}}}))}function Y(){var e=w.useContainer(),a=r.a.useState(!1),t=Object(d.a)(a,2),n=t[0],c=t[1];return r.a.useEffect((function(){c(!0),e.dataDiff&&0!==e.dataDiff.length||e.getDataCovid(),c(!1)}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Evolution Coronavirus in Finland")),r.a.createElement("div",{className:"card-body"}),n&&r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/loading.gif",alt:"LOADING"})),r.a.createElement(T,{data:e.dataDiff,labels:e.labels})))}function G(e){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(i,null),r.a.createElement("div",{className:"main-panel mt-30"},e.children),r.a.createElement(o,null))}function M(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),i=s[0],o=s[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),v=u[0],f=u[1],E=Object(n.useState)("first names"),g=Object(d.a)(E,2),b=g[0],h=g[1],N=Object(n.useState)(1),y=Object(d.a)(N,2),x=y[0],k=y[1],j=Object(n.useState)(!0),O=Object(d.a)(j,2),w=O[0],S=O[1];function C(){return v?i.filter((function(e){var a=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(v.toLowerCase())>-1)return a=!0,null})),a?e:null})):i}var D=function(e){S(!0),Object(p.a)(e,{complete:function(e){e&&(c(e.data.shift()),o(e.data))}}),S(!1)};return Object(n.useEffect)((function(){D("turku/images/first_name.csv"),h("First names")}),[]),Object(n.useEffect)((function(){i&&i.length>0&&S(!1)}),[i]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Popular names : ",b," ")),r.a.createElement("div",{className:"d-flex mt-2 mb-2 justify-content-center"},r.a.createElement("span",{className:"badge badge-pill badge-secondary mr-1 ml-1",onClick:function(){D("turku/images/first_name.csv"),S(!0),h("First names")}},"name"),r.a.createElement("span",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){D("turku/images/year_name.csv"),S(!0),h("Names by Years")}},"year"),r.a.createElement("span",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){D("turku/images/family_name.csv"),S(!0),h("Family names")}},"family"),r.a.createElement("span",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){D("turku/images/location_name.csv"),S(!0),h("Names by location")}},"location")),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search ...",value:v,onChange:function(e){return f(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),w&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,t&&t.map((function(e,a){return r.a.createElement("th",{key:a,onClick:function(){return a=e,k(-1*x),void o(i.sort((function(e,t){return(1===x?e[a]>t[a]:e[a]<t[a])?1:-1})));var a}},e,"\u2195")})))),r.a.createElement("tbody",null,C()&&C().map((function(e,a){return r.a.createElement("tr",{key:a},e.map((function(e,a){return r.a.createElement("td",{key:a},e)})))}))))))))}var U=t(2);function B(){return r.a.createElement("h1",null,"Page Not Found")}var H=function(){return r.a.createElement(s.a,null,r.a.createElement(w.Provider,null,r.a.createElement(G,null,r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/turku",component:z}),r.a.createElement(U.a,{exact:!0,path:"/forecast",component:D}),r.a.createElement(U.a,{exact:!0,path:"/dashboard",component:A}),r.a.createElement(U.a,{exact:!0,path:"/place",component:v}),r.a.createElement(U.a,{exact:!0,path:"/event",component:S}),r.a.createElement(U.a,{exact:!0,path:"/name",component:M}),r.a.createElement(U.a,{exact:!0,path:"/covid",component:Y}),r.a.createElement(U.a,{path:"*"},r.a.createElement(B,null))))))};l.a.render(r.a.createElement(H,null),document.getElementById("root"))},87:function(e,a,t){e.exports=t(221)},92:function(e,a,t){},99:function(e,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.ec361136.chunk.js.map