(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{195:function(e,a){},197:function(e,a){},207:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(69),l=t.n(c),s=t(1);t(79);function i(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Events in Turku"),r.a.createElement("h2",{className:"card-category"},"Find all events in Turku")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/images/event.png",alt:"event"}))))}function o(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Top drinks place"),r.a.createElement("h2",{className:"card-category"},"Approval places for drinking in Finland")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/images/drinks.png",alt:"drinks"}))))}function m(){return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Famous name"),r.a.createElement("h2",{className:"card-category"},"Find out if your name or family name popular in Finland ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/images/name.png",alt:"famous name"}))))}var u=t(3),d=t.n(u),p=t(7),g=t(12),v=t.n(g),f=t(70),E=t.n(f),b=t(71),h=t(24),N=t.n(h),y=Object(b.a)((function(){var e=n.useState([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=n.useState([]),l=Object(s.a)(c,2),i=l[0],o=l[1],m=n.useState([]),u=Object(s.a)(m,2),g=u[0],f=u[1],b=n.useState(0),h=Object(s.a)(b,2),y=h[0],x=h[1],k=n.useState("https://api.turku.fi/linkedevents/v1/event/?page=1"),j=Object(s.a)(k,2),C=j[0],O=j[1],w=n.useState([]),S=Object(s.a)(w,2),P=S[0],D=S[1],L=n.useState(""),A=Object(s.a)(L,2),F=A[0],z=A[1],I=n.useState(""),_=Object(s.a)(I,2),T=_[0],G=_[1],M=new Headers({Accept:"application/json","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0"}),Y=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(a||C);case 2:return t=e.sent,D(t.data.data),t.data.meta.next&&z(t.data.meta.next),t.data.meta.previous&&G(t.data.meta.previous),e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function U(e,a,t,n){var c=[],l=[];if(e.length>0){e.forEach((function(e){v()(e.Date).isAfter(n)&&(c.push(e.Cases),l.push(v()(e.Date).format("YYYY/MM/DD")))}));var s=E.a.map(c,(function(e,a){return c[a+1]-e<0?0:c[a+1]-e}));s.pop(),c.pop(),l.pop(),o(s),r(c),f(l),x(s[s.length-1])}}return{data:t,dataDiff:i,labels:g,headers:M,events:P,nextEvents:F,previousEvents:T,lastCases:y,getDataCovid:function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"finland","confirmed",a="".concat(v()().subtract(2,"months").format()),e.next=6,fetch("https://api.covid19api.com/country/".concat("finland","/status/").concat("confirmed","/live?from=").concat(a,"&to=").concat(v()().format("YYYY-MM-DDT00:00:00")),{method:"GET",redirect:"follow",headers:M}).then((function(e){return e.json()})).then((function(e){U(e,0,0,a)})).catch((function(e){return alert(e)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),fetchEventsUrl:Y,setEventUrl:O,setNextEvents:z,setPreviousEvents:G}}));function x(){var e=y.useContainer();return r.a.createElement("div",{className:"card card-chart homeCard"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h3",{className:"card-title "},r.a.createElement("i",{className:"tim-icons icon-bell-55 text-primary"}),"Covid 19 Stats"),r.a.createElement("h2",{className:"card-category"},"Evolution Covid19 in Finland - last info : ",e.lastCases," new cases")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-area text-center"},r.a.createElement("img",{src:"/images/virus.png",alt:"virus"}))))}function k(e){var a=y.useContainer();return Object(n.useEffect)((function(){a.fetchEventsUrl(null),a.getDataCovid()}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"alert alert-dismissable border border-default text-center",style:{backgroundImage:"url(/images/turku.jpg)",backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},r.a.createElement("button",{className:"close mb-0",type:"button","data-dismiss":"alert"},"\xd7"),r.a.createElement("p",{className:"pt-2 text-capitalize",style:{fontSize:"2em",color:"white",fontWeight:400,textShadow:"1px 1px black"}},"Turku DashBoard : Top OpenData")),r.a.createElement("div",{className:"d-flex row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("event")}},r.a.createElement(i,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("place")}},r.a.createElement(o,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("covid")}},r.a.createElement(x,null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",onClick:function(){return e.setPage("name")}},r.a.createElement(m,null))))}var j=t(72);function C(e){var a=r.a.useRef(null),t=r.a.useState(0),n=Object(s.a)(t,2),c=n[0],l=n[1];r.a.useEffect((function(){l(a.current?a.current.offsetWidth:0)}),[]);var i={labels:e.labels,datasets:[{label:"COVID-19 confirmed cases - last 2 months",data:e.data,backgroundColor:"lightgreen",color:"rgba(009,009,250,0.75)",hoverBackgroundColor:"rgb(255,255,153,1)"}]},o={legend:{display:!0,fontColor:"white"},title:{display:!0,text:"Finland - Covid19 - last 2 months",fontColor:"white"},scales:{yAxes:[{ticks:{fontColor:"white",fontSize:9,color:"rgba(2, 2, 2, 0.1)",display:!(c<500)},scaleLabel:{display:!(c>=500),color:"rgba(2, 2, 2, 0.1)",fontColor:"white",labelString:c>=500?"":"Rotate \u2935\ufe0f"}}],xAxes:[{ticks:{fontColor:"white",fontSize:14}}],responsive:!0}};return r.a.createElement("div",{style:{backgroundColor:"#555555"},ref:a}," ",c<500&&r.a.createElement("div",{style:{textAlign:"center",color:"white"}},r.a.createElement("img",{src:"/images/Use_Landscape_Mode.jpg",height:"40",alt:"use Landscape Mode"}),r.a.createElement("span",null," Turn you device ")),r.a.createElement(j.Bar,{data:i,options:o}))}function O(){var e=y.useContainer(),a=r.a.useState(!1),t=Object(s.a)(a,2),n=t[0],c=t[1];return r.a.useEffect((function(){c(!0),e.dataDiff&&0!==e.dataDiff.length||e.getDataCovid(),c(!1)}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Evolution Coronavirus in Finland"),r.a.createElement("h2",{className:"text-center pt-2"},"last info : ",e.lastCases," new cases ")),r.a.createElement("div",{className:"card-body"}),n&&r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("img",{height:"50",width:"50",src:"turku/images/loading.gif",alt:"LOADING"})),r.a.createElement(C,{data:e.dataDiff,labels:e.labels}),r.a.createElement("p",{style:{textAlign:"center"}},"you can click on one bar of the graph to display more details")))}var w=t(25);function S(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],g=d[1],v=Object(n.useState)("Places"),f=Object(s.a)(v,2),E=f[0],b=f[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),y=N[0],x=N[1],k=Object(n.useState)(!0),j=Object(s.a)(k,2),C=j[0],O=j[1];function S(){return p?o.filter((function(e){var a=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(p.toLowerCase())>-1)return a=!0,null})),a?e:null})):o}return Object(n.useEffect)((function(){var e;e="/images/alkoholilupa_toimipaikkatiedot_34.csv",Object(w.a)(e,{complete:function(e){e&&(c(e.data.shift()),m(e.data))}}),O(!1),b("Places")}),[]),Object(n.useEffect)((function(){o&&o.length>0&&O(!1)}),[o]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Approval alcohol consumption : ",E)),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search a place...",value:p,onChange:function(e){return g(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),r.a.createElement("div",{className:"card-body"},C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,t&&t.map((function(e,a){return r.a.createElement("th",{key:a,onClick:function(){return a=e,x(-1*y),void m(o.sort((function(e,t){return(1===y?e[a]>t[a]:e[a]<t[a])?1:-1})));var a}},e,"\u2195")})))),r.a.createElement("tbody",null,S()&&S().map((function(e,a){return r.a.createElement("tr",{key:a},e.map((function(e,a){return r.a.createElement("td",{key:a},e)})))}))))))))}function P(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],g=d[1],v=Object(n.useState)("first names"),f=Object(s.a)(v,2),E=f[0],b=f[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),y=N[0],x=N[1],k=Object(n.useState)(!0),j=Object(s.a)(k,2),C=j[0],O=j[1];function S(){return p?o.filter((function(e){var a=!1;return Object.values(e).forEach((function(e){if(String(e?e.toLowerCase():e).indexOf(p.toLowerCase())>-1)return a=!0,null})),a?e:null})):o}var P=function(e){O(!0),Object(w.a)(e,{complete:function(e){e&&(c(e.data.shift()),m(e.data))}}),O(!1)};return Object(n.useEffect)((function(){P("images/first_name.csv"),b("First names")}),[]),Object(n.useEffect)((function(){o&&o.length>0&&O(!1)}),[o]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Popular names : ",E," ")),r.a.createElement("div",{className:"d-flex mt-2 mb-2 justify-content-center"},r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1 ml-1",onClick:function(){P("images/first_name.csv"),O(!0),b("First names")}},"name"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("images/year_name.csv"),O(!0),b("Names by Years")}},"year"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("images/family_name.csv"),O(!0),b("Family names")}},"family"),r.a.createElement("button",{className:"badge badge-pill badge-secondary mr-1",onClick:function(){P("images/location_name.csv"),O(!0),b("Names by location")}},"location")),r.a.createElement("div",{className:"input-group-prepend pb-0 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search ...",value:p,onChange:function(e){return g(e.target.value)},"aria-label":"search place","aria-describedby":"alcohol"})),C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"images/logo.png",alt:"LOADING"}),r.a.createElement("h2",null,"LOADING...")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table tablesorter ",id:""},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,t&&t.map((function(e,a){return r.a.createElement("th",{key:a,onClick:function(){return a=e,x(-1*y),void m(o.sort((function(e,t){return(1===y?e[a]>t[a]:e[a]<t[a])?1:-1})));var a}},e,"\u2195")})))),r.a.createElement("tbody",null,S()&&S().map((function(e,a){return r.a.createElement("tr",{key:a},e.map((function(e,a){return r.a.createElement("td",{key:a},e)})))}))))))))}var D=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(a||"https://api.turku.fi/linkedevents/v1/event/?page=1");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();function L(){var e=y.useContainer(),a=Object(n.useState)(e.events),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],g=Object(n.useState)("https://api.turku.fi/linkedevents/v1/event/?page=1"),v=Object(s.a)(g,2),f=v[0],E=v[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),N=h[0],x=h[1],k=Object(n.useState)(!0),j=Object(s.a)(k,2),C=j[0],O=j[1],w=function(){var a=Object(p.a)(d.a.mark((function a(t){var n,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return O(!0),a.next=3,D(t);case 3:(n=a.sent)&&(n.data.meta.next&&e.setNextEvents(n.data.meta.next),n.data.meta.previous&&e.setPreviousEvents(n.data.meta.previous),l(n.data.data)),E(t),null!=(r=m?t.match(/=(.*)&q/):t.match(/=(.*)/))&&(r=r[1]),x(r||"1"),O(!1);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===a.key&&(m.trim()?w("https://api.turku.fi/linkedevents/v1/search/?type=event&q="+m):(w("https://api.turku.fi/linkedevents/v1/event/?page=1"),u("")));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O(!0),0===e.events.length&&w(f),O(!1)}),[]);return Object(n.useEffect)((function(){c&&c.length>0&&O(!1)}),[c]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:" card-title text-center pt-1"},"Events in TURKU")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm mr-1",onClick:function(){return w(e.previousEvents)}},"Previous"),r.a.createElement("span",null,"Page ",N),r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm ml-1",onClick:function(){return w(e.nextEvents)}},"Next")),r.a.createElement("div",{className:"input-group-prepend mb-3 pl-2 pr-2"},r.a.createElement("input",{type:"text",className:"form-control border search",placeholder:"Search an event in Turku...",value:m,onChange:function(e){return u(e.target.value)},"aria-label":"search events","aria-describedby":"events",onKeyPress:S}))),r.a.createElement("div",{className:"d-flex row"},C&&r.a.createElement("div",{className:"col-12 text-center full-page-loader"},r.a.createElement("img",{height:"50",width:"50",src:"images/logo.png",alt:"LOADING"}),r.a.createElement("h3",null,"LOADING...")),c?c.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-lg-4 col-md-6 col-sm-6 "},r.a.createElement("div",{className:"card clearfix"},e.images&&(e.images.length>0?r.a.createElement("img",{className:"card-img-top img-fluid ",src:e.images[0].url,alt:"event",style:{width:"100%",height:"15vw",objectFit:"cover"}}):r.a.createElement("img",{className:"card-img-top img-fluid ",src:"images/logo.png",alt:"nothing",style:{height:"15vw",objectFit:"cover"}})),r.a.createElement("div",{className:"card-block"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.name?e.name.fi:"no name"),r.a.createElement("p",{className:"card-title"},"end at : ",e.end_time?e.end_time.substr(0,10):"no date"),e.description&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-default btn-sm","data-toggle":"collapse","data-target":"#detail_event".concat(a)},e.description.fi?"Details":"No details"),r.a.createElement("div",{id:"detail_event".concat(a),className:"collapse card-text",style:{color:"white"}},e.description?function(e){if(e)return e.replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/<br>/g,"").replace(/<\/br>/g,"").replace(/<br \/>/g,"").replace(/<li>/g,"").replace(/<\/li>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"").replace(/<a>/g,"").replace(/<\/a>/g,"")}(e.description.fi?e.description.fi:""):""))))))})):r.a.createElement("div",null,r.a.createElement("h2",null,"Loading"),r.a.createElement("img",{src:"images/logo.png",alt:"loading"}))))}function A(e){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"logo homeCard"},r.a.createElement("div",{onClick:function(){return e.setPage("turku")}},r.a.createElement("img",{src:"/logo.png",alt:"meow"}))),r.a.createElement("ul",{className:"nav",style:{fontSize:"2em"}},r.a.createElement("li",{className:"tim-icons icon-pin homeCard ",onClick:function(){return e.setPage("place")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Places")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard",onClick:function(){return e.setPage("event")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Events")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard ",onClick:function(){return e.setPage("covid")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Covid19")),r.a.createElement("li",{className:"tim-icons icon-pin homeCard",onClick:function(){return e.setPage("name")}},r.a.createElement("button",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",style:{all:"unset",color:"white",textDecoration:"inherit",paddingLeft:"15px",fontSize:"1em"}},"Popular")))))}function F(){return r.a.createElement("footer",{className:"footer",style:{bottom:0,position:"fixed",right:0}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/rim31",className:"nav-link"},"rim31.github.io")),r.a.createElement("span",{className:"copyright"},"\xa9 2020 made by",r.a.createElement("a",{href:"https://linkedin.com/in/rim31"}," oseng ")," \ud83d\ude00")))}var z={myHeader:{display:"flex",justifyContent:"center",height:"4em",width:"100%",backgroundColor:"#525f7f",top:0,zIndex:10,position:"fixed",verticalAlign:"middle",border:"solid 1px"}};function I(e){return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-absolute",style:z.myHeader},r.a.createElement("div",{className:"d-flex inline",onClick:function(){return e.setPage("turku")}},r.a.createElement("img",{style:{zIndex:10},src:"/images/meow.png",height:"40",alt:"meow logo"}),r.a.createElement("img",{style:{zIndex:10},src:"/apple-icon-114x114.png",height:"36",alt:"meow logo"})),r.a.createElement("div",{id:"home",className:"container-fluid"},r.a.createElement("div",{className:"navbar-wrapper align-middle",style:{position:"fixed",float:"left",top:0}},r.a.createElement("div",{className:"navbar-toggle d-inline"},r.a.createElement("span",{className:"navbar-toggler navbar-absolute","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}," "),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}," ")))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navigation",style:{backgroundColor:"black"}},r.a.createElement("ul",{className:"navbar-nav ml-auto","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("turku")}},"Home ",r.a.createElement("img",{className:"",src:"/images/meow.png",height:"30",alt:"meow logo"}))),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("event")}},"Events")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("place")}},"Places")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("covid")}},"Covid19")),r.a.createElement("li",{className:"dropdown nav-item"},r.a.createElement("button",{className:"homeCard d-lg-none",style:{all:"unset"},onClick:function(){return e.setPage("name")}},"Popularity"))))))}var _=function(){var e=r.a.useState("turku"),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.createElement(y.Provider,null,r.a.createElement("div",null,r.a.createElement(I,{setPage:n}),r.a.createElement(A,{setPage:n}),r.a.createElement("div",{className:"main-panel mt-30"},"event"===t&&r.a.createElement(L,null),"name"===t&&r.a.createElement(P,null),"place"===t&&r.a.createElement(S,null),"covid"===t&&r.a.createElement(O,null),"turku"===t&&r.a.createElement(k,{setPage:n})),r.a.createElement(F,null)))};l.a.render(r.a.createElement(_,null),document.getElementById("root"))},74:function(e,a,t){e.exports=t(207)},79:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.49296082.chunk.js.map