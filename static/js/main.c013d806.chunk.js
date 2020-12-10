(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{195:function(e,t){},197:function(e,t){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),l=a.n(c),s=a(1);a(79);function i(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Events in Turku"),r.a.createElement("h2",{className:"card-category"},"Find all events in Turku")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/event.png",alt:"event"}))))}function o(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Top drinks place"),r.a.createElement("h2",{className:"card-category"},"Approval places for drinking in Finland")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/drinks.png",alt:"drinks"}))))}function m(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Famous name"),r.a.createElement("h2",{className:"card-category"},"Find out if your name or family name popular in Finland ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/name.png",alt:"famous name"}))))}var u=a(3),d=a.n(u),p=a(7),v=a(12),g=a.n(v),f=a(70),E=a.n(f),b=a(71),h=a(24),N=a.n(h),k=Object(b.a)((function(){var e=n.useState([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.useState([]),l=Object(s.a)(c,2),i=l[0],o=l[1],m=n.useState([]),u=Object(s.a)(m,2),v=u[0],f=u[1],b=n.useState(0),h=Object(s.a)(b,2),k=h[0],y=h[1],x=n.useState("https://api.turku.fi/linkedevents/v1/event/?page=1"),j=Object(s.a)(x,2),C=j[0],O=j[1],w=n.useState([]),S=Object(s.a)(w,2),P=S[0],D=S[1],L=n.useState(""),A=Object(s.a)(L,2),z=A[0],F=A[1],I=n.useState(""),_=Object(s.a)(I,2),T=_[0],G=_[1],M=new Headers({Accept:"application/json","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0"}),Y=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(t||C);case 2:return a=e.sent,D(a.data.data),a.data.meta.next&&F(a.data.meta.next),a.data.meta.previous&&G(a.data.meta.previous),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function U(e,t,a,n){var c=[],l=[];if(e.length>0){e.forEach((function(e){g()(e.Date).isAfter(n)&&(c.push(e.Cases),l.push(g()(e.Date).format("YYYY/MM/DD")))}));var s=E.a.map(c,(function(e,t){return c[t+1]-e<0?0:c[t+1]-e}));s.pop(),c.pop(),l.pop(),o(s),r(c),f(l),y(s[s.length-1])}}return{data:a,dataDiff:i,labels:v,headers:M,events:P,nextEvents:z,previousEvents:T,lastCases:k,getDataCovid:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"finland","confirmed",t="".concat(g()().subtract(2,"months").format()),e.next=6,fetch("https://api.covid19api.com/country/".concat("finland","/status/").concat("confirmed","/live?from=").concat(t,"&to=").concat(g()().format("YYYY-MM-DDT00:00:00")),{method:"GET",redirect:"follow",headers:M}).then((function(e){return e.json()})).then((function(e){U(e,0,0,t)})).catch((function(e){return alert(e)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),fetchEventsUrl:Y,setEventUrl:O,setNextEvents:F,setPreviousEvents:G}}));function y(){var e=k.useContainer();return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Covid 19 Stats"),r.a.createElement("h2",{className:"card-category"},"Evolution Covid19 in Finland - last info : ",e.lastCases," new cases")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/turku/images/virus.png",alt:"virus"}))))}function x(e){var t=k.useContainer();return Object(n.useEffect)((function(){t.fetchEventsUrl(null),t.getDataCovid()}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"alert alert-dismissable border border-default text-center",style:{backgroundImage:"url(/turku/images/turku.jpg)",backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},r.a.createElement("button",{className:"close mb-0",type:"button","data-dismiss":"alert"},"\xd7"),r.a.createElement("p",{className:"pt-2 text-capitalize",style:{fontSize:"2em",color:"white",fontWeight:400,textShadow:"1px 1px black"}},"Turku DashBoard : Top OpenData")),r.a.createElement("div",{className:"d-flex row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("event")}},r.a.createElement(i,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("place")}},r.a.createElement(o,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("covid")}},r.a.createElement(y,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("name")}},r.a.createElement(m,null))))}var j=a(72);function C(e){var t=r.a.useRef(null),a="object"===typeof window,n=r.a.useState(window.innerWidth),c=Object(s.a)(n,2),l=c[0],i=c[1];r.a.useEffect((function(){function e(){i(window.innerWidth)}if(a)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[a,i]),r.a.useEffect((function(){i(t.current?t.current.offsetWidth:0)}),[]);var o={labels:e.labels,datasets:[{label:"COVID-19 confirmed cases - last 2 months",data:e.data,backgroundColor:"lightgreen",color:"rgba(009,009,250,0.75)",hoverBackgroundColor:"rgb(255,255,153,1)"}]},m={legend:{display:!0,fontColor:"white"},title:{display:!0,text:"Finland - Covid19 - last 2 months",fontColor:"white"},scales:{yAxes:[{ticks:{fontColor:"white",fontSize:9,color:"rgba(2, 2, 2, 0.1)",display:!(l<500)},scaleLabel:{display:!(l>=500),color:"rgba(2, 2, 2, 0.1)",fontColor:"white",labelString:l>=500?"":"Rotate \u2935\ufe0f"}}],xAxes:[{ticks:{fontColor:"white",fontSize:14}}],responsive:!0}};return r.a.createElement("div",{style:{backgroundColor:"#555555"},ref:t}," ",l<500&&r.a.createElement("div",{style:{textAlign:"center",color:"white"}},r.a.createElement("img",{src:"/turku/images/Use_Landscape_Mode.jpg",height:"40",alt:"use Landscape Mode"}),r.a.createElement("span",null," Turn you device ")),r.a.createElement(j.Bar,{data:o,options:m}))}function O(){var e=k.useContainer(),t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){c(!0),e.dataDiff&&0!==e.dataDiff.length||e.getDataCovid(),c(!1)}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Evolution Coronavirus in Finland"),r.a.createElement("h2",{className:"text-center pt-2"},"last info : ",e.lastCases," new cases "),r.a.createElement("div",{className:"alert alert-dismissable border border-default text-center"},r.a.createElement("button",{className:"close mb-0",type:"button","data-dismiss":"alert"},"\xd7"),r.a.createElement("p",{style:{textAlign:"center"}},"you can click on one bar of the graph to display more details"))),r.a.createElement("div",{className:"card-body"}),n&&r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/loading.gif",alt:"LOADING"})),r.a.createElement(C,{data:e.dataDiff,labels:e.labels})))}var w=a(25);function S(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],v=d[1],g=Object(n.useState)("Places"),f=Object(s.a)(g,2),E=f[0],b=f[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),k=N[0],y=N[1],x=Object(n.useState)(!0),j=Object(s.a)(x,2),C=j[0],O=j[1];function S(){return p?o.filter((function(e){var t=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(p.toLowerCase())>-1)return t=!0,null})),t?e:null})):o}return Object(n.useEffect)((function(){var e;e="/turku/images/alkoholilupa_toimipaikkatiedot_34.csv",Object(w.a)(e,{complete:function(e){e&&(c(e.data.shift()),m(e.data))}}),O(!1),b("Places")}),[]),Object(n.useEffect)((function(){o&&o.length>0&&O(!1)}),[o]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Approval alcohol consumption : ",E)),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search a place...",value:p,onChange:function(e){return v(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),r.a.createElement("div",{className:"card-body"},C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,a&&a.map((function(e,t){return r.a.createElement("th",{key:t,onClick:function(){return t=e,y(-1*k),void m(o.sort((function(e,a){return(1===k?e[t]>a[t]:e[t]<a[t])?1:-1})));var t}},e,"\u2195")})))),r.a.createElement("tbody",null,S()&&S().map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))))))))}function P(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],v=d[1],g=Object(n.useState)("first names"),f=Object(s.a)(g,2),E=f[0],b=f[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),k=N[0],y=N[1],x=Object(n.useState)(!0),j=Object(s.a)(x,2),C=j[0],O=j[1];function S(){return p?o.filter((function(e){var t=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(p.toLowerCase())>-1)return t=!0,null})),t?e:null})):o}var P=function(e){O(!0),Object(w.a)(e,{complete:function(e){e&&(c(e.data.shift()),m(e.data))}}),O(!1)};return Object(n.useEffect)((function(){P("turku/images/first_name.csv"),b("First names")}),[]),Object(n.useEffect)((function(){o&&o.length>0&&O(!1)}),[o]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Popular names : ",E," ")),r.a.createElement("div",{className:"d-flex mt-2 mb-2 justify-content-center"},r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1 ml-1",onClick:function(){P("/turku/images/first_name.csv"),O(!0),b("First names")}},"name"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("/turku/images/year_name.csv"),O(!0),b("Names by Years")}},"year"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("/turku/images/family_name.csv"),O(!0),b("Family names")}},"family"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("/turku/images/location_name.csv"),O(!0),b("Names by location")}},"location")),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search ...",value:p,onChange:function(e){return v(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"/turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,a&&a.map((function(e,t){return r.a.createElement("th",{key:t,onClick:function(){return t=e,y(-1*k),void m(o.sort((function(e,a){return(1===k?e[t]>a[t]:e[t]<a[t])?1:-1})));var t}},e,"\u2195")})))),r.a.createElement("tbody",null,S()&&S().map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))))))))}var D=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(t||"https://api.turku.fi/linkedevents/v1/event/?page=1");case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();function L(){var e=k.useContainer(),t=Object(n.useState)(e.events),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],v=Object(n.useState)("https://api.turku.fi/linkedevents/v1/event/?page=1"),g=Object(s.a)(v,2),f=g[0],E=g[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),N=h[0],y=h[1],x=Object(n.useState)(!0),j=Object(s.a)(x,2),C=j[0],O=j[1],w=function(){var t=Object(p.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,D(a);case 3:(n=t.sent)&&(n.data.meta.next&&e.setNextEvents(n.data.meta.next),n.data.meta.previous&&e.setPreviousEvents(n.data.meta.previous),l(n.data.data)),E(a),null!=(r=m?a.match(/=(.*)&q/):a.match(/=(.*)/))&&(r=r[1]),y(r||"1"),O(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(m.trim()?w("https://api.turku.fi/linkedevents/v1/search/?type=event&q="+m):(w("https://api.turku.fi/linkedevents/v1/event/?page=1"),u("")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O(!0),0===e.events.length&&w(f),O(!1)}),[]);return Object(n.useEffect)((function(){c&&c.length>0&&O(!1)}),[c]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Events in TURKU")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm mr-1",onClick:function(){return w(e.previousEvents)}},"Previous"),r.a.createElement("span",null,"Page ",N),r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm ml-1",onClick:function(){return w(e.nextEvents)}},"Next")),r.a.createElement("div",{className:"input-group-prepend mb-3 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search an event in Turku...",value:m,onChange:function(e){return u(e.target.value)},"aria-label":"search events","aria-describedby":"events",onKeyPress:S}))),r.a.createElement("div",{className:"d-flex row"},C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/logo.png",alt:"LOADING"}),r.a.createElement("h3",null,"LOADING...")),c?c.map((function(e,t){return r.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-6 "},r.a.createElement("div",{className:"card clearfix"},e.images&&(e.images.length>0?r.a.createElement("img",{className:"card-img-top img-fluid ",src:e.images[0].url,alt:"event",style:{width:"100%",height:"15vw",objectFit:"cover"}}):r.a.createElement("img",{className:"card-img-top img-fluid ",src:"turku/images/logo.png",alt:"nothing",style:{height:"15vw",objectFit:"cover"}})),r.a.createElement("div",{className:"card-block"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.name?e.name.fi:"no name"),r.a.createElement("p",{className:"card-title"},"end at : ",e.end_time?e.end_time.substr(0,10):"no date"),e.description&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm","data-toggle":"collapse","data-target":"#detail_event".concat(t)},e.description.fi?"Details":"No details"),r.a.createElement("div",{id:"detail_event".concat(t),className:"collapse card-text",style:{color:"white"}},e.description?function(e){if(e)return e.replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/<br>/g,"").replace(/<\/br>/g,"").replace(/<br \/>/g,"").replace(/<li>/g,"").replace(/<\/li>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"").replace(/<a>/g,"").replace(/<\/a>/g,"")}(e.description.fi?e.description.fi:""):""))))))})):r.a.createElement("div",null,r.a.createElement("h2",null,"Loading"),r.a.createElement("img",{src:"images/logo.png",alt:"loading"}))))}function A(e){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"logo homeCard"},r.a.createElement("div",{onClick:function(){return e.setPage("turku")}},r.a.createElement("img",{src:"/turku/logo.png",alt:"meow"}))),r.a.createElement("ul",{className:"nav",style:{fontSize:"2em"}},r.a.createElement("li",{className:"tim-icons icon-pin homeCard ",onClick:function(){return e.setPage("place")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Places")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard",onClick:function(){return e.setPage("event")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Events")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard ",onClick:function(){return e.setPage("covid")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Covid19")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard",onClick:function(){return e.setPage("name")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Popular")))))}function z(){return r.a.createElement("footer",{className:"footer",style:{bottom:0,position:"fixed",right:0}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/rim31",className:"nav-link"},"rim31.github.io")),r.a.createElement("span",{className:"copyright"},"\xa9 2020 made by",r.a.createElement("a",{href:"https://linkedin.com/in/rim31"}," oseng ")," \ud83d\ude00")))}var F={myHeader:{display:"flex",justifyContent:"center",height:"4em",width:"100%",backgroundColor:"#525f7f",top:0,zIndex:10,position:"fixed",verticalAlign:"middle",border:"solid 1px"}};function I(e){return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-absolute",style:F.myHeader},r.a.createElement("div",{className:"d-flex inline",onClick:function(){return e.setPage("turku")}},r.a.createElement("img",{style:{zIndex:10},src:"/turku/images/meow.png",height:"40",alt:"meow logo"}),r.a.createElement("img",{style:{zIndex:10},src:"/turku/apple-icon-114x114.png",height:"36",alt:"meow logo"})),r.a.createElement("div",{id:"home",className:"container-fluid"},r.a.createElement("div",{className:"navbar-wrapper align-middle",style:{position:"fixed",float:"left",top:0}},r.a.createElement("div",{className:"navbar-toggle d-inline"},r.a.createElement("span",{className:"navbar-toggler navbar-absolute","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}," ")))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navigation",style:{backgroundColor:"black"}},r.a.createElement("ul",{className:"navbar-nav ml-auto","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("turku")}},"Home ",r.a.createElement("img",{className:"",src:"/turku/images/meow.png",height:"30",alt:"meow logo"}))),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("event")}},"Events")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("place")}},"Places")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("covid")}},"Covid19")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("name")}},"Popularity"))))))}var _=function(){var e=r.a.useState("turku"),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement(k.Provider,null,r.a.createElement("div",null,r.a.createElement(I,{setPage:n}),r.a.createElement(A,{setPage:n}),r.a.createElement("div",{className:"main-panel mt-30"},"event"===a&&r.a.createElement(L,null),"name"===a&&r.a.createElement(P,null),"place"===a&&r.a.createElement(S,null),"covid"===a&&r.a.createElement(O,null),"turku"===a&&r.a.createElement(x,{setPage:n})),r.a.createElement(z,null)))};l.a.render(r.a.createElement(_,null),document.getElementById("root"))},74:function(e,t,a){e.exports=a(207)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.c013d806.chunk.js.map