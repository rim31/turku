(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{198:function(e,t){},200:function(e,t){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),l=a.n(c),s=a(1);a(82);function i(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Events in Turku"),r.a.createElement("h2",{className:"card-category"},"Find all events in Turku")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/event.png",alt:"event"}))))}function o(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Top drinks place"),r.a.createElement("h2",{className:"card-category"},"Approval places for drinking in Finland")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/drinks.png",alt:"drinks"}))))}function m(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Famous name"),r.a.createElement("h2",{className:"card-category"},"Find out if your name or family name popular in Finland ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/name.png",alt:"famous name"}))))}var u=a(76),d=a(3),p=a.n(d),f=a(7),v=a(10),g=a.n(v),E=a(72),b=a.n(E),h=a(73),N=a(26),k=a.n(N),y=Object(h.a)((function(){var e=n.useState([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.useState([]),l=Object(s.a)(c,2),i=l[0],o=l[1],m=n.useState([]),d=Object(s.a)(m,2),v=d[0],E=d[1],h=n.useState(0),N=Object(s.a)(h,2),y=N[0],x=N[1],w=n.useState("https://api.turku.fi/linkedevents/v1/event/?page=1"),C=Object(s.a)(w,2),j=C[0],O=C[1],S=n.useState([]),P=Object(s.a)(S,2),D=P[0],z=P[1],L=n.useState(""),A=Object(s.a)(L,2),F=A[0],I=A[1],M=n.useState(""),_=Object(s.a)(M,2),T=_[0],G=_[1],Y=n.useState(window.innerWidth),W=Object(s.a)(Y,2),U=W[0],V=W[1],B=n.useState(0),H=Object(s.a)(B,2),R=H[0],q=H[1],J=new Headers({Accept:"application/json","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0"}),K=function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(t||j);case 2:return a=e.sent,z(a.data.data),a.data.meta.next&&I(a.data.meta.next),a.data.meta.previous&&G(a.data.meta.previous),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function X(e,t,a,n){var c=[],l=[];if(e.length>0){e.forEach((function(e){g()(e.Date).isAfter(n)&&(c.push(e.Cases),l.push(g()(e.Date).format("YYYY/MM/DD")))}));var s=b.a.map(c,(function(e,t){return c[t+1]-e<0?0:c[t+1]-e}));s.pop(),c.pop(),l.pop(),s&&q(Math.max.apply(Math,Object(u.a)(s.map((function(e){return e}))).concat([0]))),o(s),r(c),E(l),x(s[s.length-1])}}return{data:a,dataDiff:i,labels:v,headers:J,events:D,nextEvents:F,previousEvents:T,lastCases:y,windowSize:U,maxValueCases:R,getDataCovid:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"finland","confirmed",t="".concat(U<500?g()().subtract(1,"months").format():g()().subtract(2,"months").format()),e.next=6,fetch("https://api.covid19api.com/country/".concat("finland","/status/").concat("confirmed","/live?from=").concat(t,"&to=").concat(g()().format("YYYY-MM-DDT00:00:00")),{method:"GET",redirect:"follow",headers:J}).then((function(e){return e.json()})).then((function(e){X(e,0,0,t)})).catch((function(e){return alert(e)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),fetchEventsUrl:K,setEventUrl:O,setNextEvents:I,setPreviousEvents:G,setWindowSize:V}}));function x(){var e=y.useContainer();return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Covid 19 Stats"),r.a.createElement("h2",{className:"card-category"},"Evolution Covid19 in Finland - last info : ",e.lastCases," new cases")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/virus.png",alt:"virus"}))))}function w(e){var t=y.useContainer();return Object(n.useEffect)((function(){t.fetchEventsUrl(null),t.getDataCovid()}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"alert alert-dismissable border border-default text-center",style:{backgroundImage:"url(/turku/images/turku.jpg)",backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},r.a.createElement("button",{className:"close mb-0",type:"button","data-dismiss":"alert"},"\xd7"),r.a.createElement("p",{className:"pt-2 text-capitalize",style:{fontSize:"2em",color:"white",fontWeight:400,textShadow:"1px 1px black"}},"Turku DashBoard : Top OpenData")),r.a.createElement("div",{className:"d-flex row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("event")}},r.a.createElement(i,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("place")}},r.a.createElement(o,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("covid")}},r.a.createElement(x,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("name")}},r.a.createElement(m,null))))}var C=a(74);function j(e){var t=y.useContainer(),a=r.a.useRef(null),n="object"===typeof window,c=t.dataDiff;r.a.useEffect((function(){function e(){t.setWindowSize(window.innerWidth)}if(n)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n,t.setWindowSize,t]),r.a.useEffect((function(){t.setWindowSize(a.current?a.current.offsetWidth:0),console.log(Math.max(),c)}),[]);var l={labels:e.labels,datasets:[{label:"COVID-19 confirmed cases - last ".concat(t.windowSize<500?1:2," months"),data:t.dataDiff,backgroundColor:"lightgreen",color:"rgba(009,009,250,0.75)",hoverBackgroundColor:"rgb(255,255,153,1)"}]},s={legend:{display:!0,fontColor:"white"},title:{display:!0,text:"Finland - Covid19 - last ".concat(t.windowSize<500?1:2," months"),fontColor:"white"},scales:{yAxes:[{ticks:{fontColor:"white",fontSize:10,color:"rgba(2, 2, 2, 0.1)",display:!0,min:0,max:t.maxValueCases,stepSize:t.windowSize<500?t.maxValueCases/2:Math.round(t.maxValueCases/3)},scaleLabel:{display:!(t.windowSize>=500),color:"rgba(2, 2, 2, 0.1)",fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white",fontSize:14}}],responsive:!0}};return r.a.createElement("div",{style:{backgroundColor:"#555555"},ref:a}," ",t.windowSize<500&&r.a.createElement("div",{style:{textAlign:"center",color:"white"}},r.a.createElement("img",{src:"/turku/images/Use_Landscape_Mode.jpg",height:"40",alt:"use Landscape Mode"}),r.a.createElement("span",null," Turn you device ")),r.a.createElement(C.Bar,{data:l,options:s}))}function O(){var e=y.useContainer(),t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){c(!0),e.dataDiff&&0!==e.dataDiff.length||e.getDataCovid(),c(!1)}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Evolution Coronavirus in Finland"),r.a.createElement("h2",{className:"text-center pt-2"},"last info : ",e.lastCases," new cases "),r.a.createElement("div",{className:"alert alert-dismissable border border-default text-center"},r.a.createElement("button",{className:"close mb-0",type:"button","data-dismiss":"alert"},"\xd7"),r.a.createElement("p",{style:{textAlign:"center"}},"you can click on one bar of the graph to display more details"))),r.a.createElement("div",{className:"card-body"}),n&&r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/loading.gif",alt:"LOADING"})),r.a.createElement(j,{data:e.dataDiff,labels:e.labels})))}var S=a(27);function P(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],f=d[1],v=Object(n.useState)("Places"),g=Object(s.a)(v,2),E=g[0],b=g[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),k=N[0],y=N[1],x=Object(n.useState)(!0),w=Object(s.a)(x,2),C=w[0],j=w[1];function O(){return p?o.filter((function(e){var t=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(p.toLowerCase())>-1)return t=!0,null})),t?e:null})):o}return Object(n.useEffect)((function(){var e;e="/turku/images/alkoholilupa_toimipaikkatiedot_34.csv",Object(S.a)(e,{complete:function(e){e&&(c(e.data.shift()),m(e.data))}}),j(!1),b("Places")}),[]),Object(n.useEffect)((function(){o&&o.length>0&&j(!1)}),[o]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Approval alcohol consumption : ",E)),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search a place...",value:p,onChange:function(e){return f(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),r.a.createElement("div",{className:"card-body"},C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,a&&a.map((function(e,t){return r.a.createElement("th",{key:t,onClick:function(){return t=e,y(-1*k),void m(o.sort((function(e,a){return(1===k?e[t]>a[t]:e[t]<a[t])?1:-1})));var t}},e,"\u2195")})))),r.a.createElement("tbody",null,O()&&O().map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))))))))}function D(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],f=d[1],v=Object(n.useState)("first names"),g=Object(s.a)(v,2),E=g[0],b=g[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),k=N[0],y=N[1],x=Object(n.useState)(!0),w=Object(s.a)(x,2),C=w[0],j=w[1];function O(){return p?o.filter((function(e){var t=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(p.toLowerCase())>-1)return t=!0,null})),t?e:null})):o}var P=function(e){j(!0),Object(S.a)(e,{complete:function(e){e&&(c(e.data.shift()),m(e.data))}}),j(!1)};return Object(n.useEffect)((function(){P("turku/images/first_name.csv"),b("First names")}),[]),Object(n.useEffect)((function(){o&&o.length>0&&j(!1)}),[o]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Popular names : ",E," ")),r.a.createElement("div",{className:"d-flex mt-2 mb-2 justify-content-center"},r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1 ml-1",onClick:function(){P("/turku/images/first_name.csv"),j(!0),b("First names")}},"name"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("/turku/images/year_name.csv"),j(!0),b("Names by Years")}},"year"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("/turku/images/family_name.csv"),j(!0),b("Family names")}},"family"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("/turku/images/location_name.csv"),j(!0),b("Names by location")}},"location")),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search ...",value:p,onChange:function(e){return f(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"/turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,a&&a.map((function(e,t){return r.a.createElement("th",{key:t,onClick:function(){return t=e,y(-1*k),void m(o.sort((function(e,a){return(1===k?e[t]>a[t]:e[t]<a[t])?1:-1})));var t}},e,"\u2195")})))),r.a.createElement("tbody",null,O()&&O().map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))))))))}var z=function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(t||"https://api.turku.fi/linkedevents/v1/event/?page=1");case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();function L(){var e=y.useContainer(),t=Object(n.useState)(e.events),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)("https://api.turku.fi/linkedevents/v1/event/?page=1"),v=Object(s.a)(d,2),g=v[0],E=v[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),N=h[0],k=h[1],x=Object(n.useState)(!0),w=Object(s.a)(x,2),C=w[0],j=w[1],O=function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,z(a);case 3:(n=t.sent)&&(n.data.meta.next&&e.setNextEvents(n.data.meta.next),n.data.meta.previous&&e.setPreviousEvents(n.data.meta.previous),l(n.data.data)),E(a),null!=(r=m?a.match(/=(.*)&q/):a.match(/=(.*)/))&&(r=r[1]),k(r||"1"),j(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(m.trim()?O("https://api.turku.fi/linkedevents/v1/search/?type=event&q="+m):(O("https://api.turku.fi/linkedevents/v1/event/?page=1"),u("")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){j(!0),0===e.events.length&&O(g),j(!1)}),[]);return Object(n.useEffect)((function(){c&&c.length>0&&j(!1)}),[c]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Events in TURKU")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm mr-1",onClick:function(){return O(e.previousEvents)}},"Previous"),r.a.createElement("span",null,"Page ",N),r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm ml-1",onClick:function(){return O(e.nextEvents)}},"Next")),r.a.createElement("div",{className:"input-group-prepend mb-3 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search an event in Turku...",value:m,onChange:function(e){return u(e.target.value)},"aria-label":"search events","aria-describedby":"events",onKeyPress:S}))),r.a.createElement("div",{className:"d-flex row"},C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h3",null,"LOADING...")),c?c.map((function(e,t){return r.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-6 "},r.a.createElement("div",{className:"card clearfix"},e.images&&(e.images.length>0?r.a.createElement("img",{className:"card-img-top img-fluid ",src:e.images[0].url,alt:"event",style:{width:"100%",height:"15vw",objectFit:"cover"}}):r.a.createElement("img",{className:"card-img-top img-fluid ",src:"turku/images/logo.png",alt:"nothing",style:{height:"15vw",objectFit:"cover"}})),r.a.createElement("div",{className:"card-block"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.name?e.name.fi:"no name"),r.a.createElement("p",{className:"card-title"},"end at : ",e.end_time?e.end_time.substr(0,10):"no date"),e.description&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm","data-toggle":"collapse","data-target":"#detail_event".concat(t)},e.description.fi?"Details":"No details"),r.a.createElement("div",{id:"detail_event".concat(t),className:"collapse card-text",style:{color:"white"}},e.description?function(e){if(e)return e.replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/<br>/g,"").replace(/<\/br>/g,"").replace(/<br \/>/g,"").replace(/<li>/g,"").replace(/<\/li>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"").replace(/<a>/g,"").replace(/<\/a>/g,"")}(e.description.fi?e.description.fi:""):""))))))})):r.a.createElement("div",null,r.a.createElement("h2",null,"Loading"),r.a.createElement("img",{src:"images/logo.png",alt:"loading"}))))}function A(e){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"logo homeCard"},r.a.createElement("div",{onClick:function(){return e.setPage("turku")}},r.a.createElement("img",{src:"/turku/logo.png",alt:"meow"}))),r.a.createElement("ul",{className:"nav",style:{fontSize:"2em"}},r.a.createElement("li",{className:"tim-icons icon-pin homeCard ",onClick:function(){return e.setPage("place")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Places")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard",onClick:function(){return e.setPage("event")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Events")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard ",onClick:function(){return e.setPage("covid")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Covid19")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard",onClick:function(){return e.setPage("name")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Popular")))))}function F(){return r.a.createElement("footer",{className:"footer",style:{bottom:0,position:"fixed",right:0}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/rim31",className:"nav-link"},"rim31.github.io")),r.a.createElement("span",{className:"copyright"},"\xa9 2020 made by",r.a.createElement("a",{href:"https://linkedin.com/in/rim31"}," oseng ")," \ud83d\ude00")))}var I={myHeader:{display:"flex",justifyContent:"center",height:"4em",width:"100%",backgroundColor:"#525f7f",top:0,zIndex:10,position:"fixed",verticalAlign:"middle",border:"solid 1px"}};function M(e){return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-absolute",style:I.myHeader},r.a.createElement("div",{className:"d-flex inline",onClick:function(){return e.setPage("turku")}},r.a.createElement("img",{style:{zIndex:10},src:"/turku/images/meow.png",height:"40",alt:"meow logo"}),r.a.createElement("img",{style:{zIndex:10},src:"/turku/apple-icon-114x114.png",height:"36",alt:"meow logo"})),r.a.createElement("div",{id:"home",className:"container-fluid"},r.a.createElement("div",{className:"navbar-wrapper align-middle",style:{position:"fixed",float:"left",top:0}},r.a.createElement("div",{className:"navbar-toggle d-inline"},r.a.createElement("span",{className:"navbar-toggler navbar-absolute","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}," ")))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navigation",style:{backgroundColor:"black"}},r.a.createElement("ul",{className:"navbar-nav ml-auto","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("turku")}},"Home ",r.a.createElement("img",{className:"",src:"/turku/images/meow.png",height:"30",alt:"meow logo"}))),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("event")}},"Events")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("place")}},"Places")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("covid")}},"Covid19")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("name")}},"Popularity"))))))}var _=function(){var e=r.a.useState("turku"),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement(y.Provider,null,r.a.createElement("div",null,r.a.createElement(M,{setPage:n}),r.a.createElement(A,{setPage:n}),r.a.createElement("div",{className:"main-panel mt-30"},"event"===a&&r.a.createElement(L,null),"name"===a&&r.a.createElement(D,null),"place"===a&&r.a.createElement(P,null),"covid"===a&&r.a.createElement(O,null),"turku"===a&&r.a.createElement(w,{setPage:n})),r.a.createElement(F,null)))};l.a.render(r.a.createElement(_,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(210)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.241170ff.chunk.js.map