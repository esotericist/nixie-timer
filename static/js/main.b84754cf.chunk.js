(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={header:"App_header__2420M",title:"App_title__31Czt",githubIcon:"App_githubIcon__2SdMQ",main:"App_main__276pR",buttonContainer:"App_buttonContainer__lGBYN"}},,,,,,,function(e,t,a){e.exports={digit:"Digit_digit__1m6n_"}},function(e,t,a){e.exports={arrow:"Arrow_arrow__1eD-1"}},function(e,t,a){e.exports={clock:"Clock_clock__2z7Ep"}},function(e,t,a){e.exports={startButton:"StartButton_startButton__321BK",button:"StartButton_button__1KX4S"}},,,function(e,t,a){e.exports=a(25)},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=a(1),s=(a(24),a(7)),u=a(13),o=a(8),m=a(3),E=a(14),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).getMSec=function(){var e=36e6*a.state.h10+36e5*a.state.h1+6e5*a.state.m10+6e4*a.state.m1+1e4*a.state.s10+1e3*a.state.s1;if(isNaN(e))throw new Error("Invalid param");return e},a.setTimeFromMsec=function(e){if(isNaN(e))throw new Error("Invalid param");var t=Math.floor(e/1e3);a.setState({h10:Math.floor(t%36e4/36e3),h1:Math.floor(t%36e3/3600),m10:Math.floor(t%3600/600),m1:Math.floor(t%600/60),s10:Math.floor(t%60/10),s1:t%10})},a.action=function(e,t){switch(e){case"START":a.setState({status:"RUNNING"}),a.endMSec=(new Date).getTime()+a.getMSec(),a.tick();break;case"STOP":a.setState({status:"STOPPED"}),a.requestId&&window.cancelAnimationFrame(a.requestId);break;case"INCREMENT":var n={};"STOPPED"===a.state.status&&(n[t]="m10"===t||"s10"===t?(a.state[t]+1)%6:(a.state[t]+1)%10,a.setState(n));break;case"DECREMENT":var l={};"STOPPED"===a.state.status&&(l[t]="m10"===t||"s10"===t?(a.state[t]+5)%6:(a.state[t]+9)%10,a.setState(l))}},a.tick=function(){var e=(new Date).getTime(),t=a.1670338800-e;t<0?a.setState({status:"STARTED",h10:0,h1:0,m10:0,m1:0,s10:0,s1:0}):(a.setTimeFromMsec(t),a.requestId=window.requestAnimationFrame(a.tick.bind(Object(m.a)(a))))},a.state={status:"STOPPED",h10:0,h1:0,m10:0,m1:0,s10:0,s1:0},window.onclick=function(){a.action("STOP")},a.requestId=null,a}return Object(E.a)(t,e),t}(i.a),p=a(9),h=a.n(p),v=function(e){var t="/nixie-timer/images/"+e.value+".png";return l.a.createElement("div",null,l.a.createElement("img",{className:h.a.digit,src:t,alt:e.value}))},N=a(10),f=a.n(N),T=function(e){var t="INCREMENT"===e.type?"/nixie-timer/images/arrow-up.png":"/nixie-timer/images/arrow-down.png";return l.a.createElement(i.c,{to:[d]},function(a){return l.a.createElement("img",{className:f.a.arrow,style:{visibility:"STOPPED"===a.state.status?"":"hidden",opacity:"STOPPED"===a.state.status?1:0},src:t,alt:e.type,onClick:function(){a.action(e.type,e.value)}})})},S=a(11),w=a.n(S),g=function(){return l.a.createElement(i.c,{to:[d]},function(e){return l.a.createElement("div",{className:w.a.clock},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(T,{type:"INCREMENT",value:"h10"})),l.a.createElement("td",null,l.a.createElement(T,{type:"INCREMENT",value:"h1"})),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(T,{type:"INCREMENT",value:"m10"})),l.a.createElement("td",null,l.a.createElement(T,{type:"INCREMENT",value:"m1"})),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(T,{type:"INCREMENT",value:"s10"})),l.a.createElement("td",null,l.a.createElement(T,{type:"INCREMENT",value:"s1"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(v,{value:String(e.state.h10)})),l.a.createElement("td",null,l.a.createElement(v,{value:String(e.state.h1)})),l.a.createElement("td",null,l.a.createElement(v,{value:":"})),l.a.createElement("td",null,l.a.createElement(v,{value:String(e.state.m10)})),l.a.createElement("td",null,l.a.createElement(v,{value:String(e.state.m1)})),l.a.createElement("td",null,l.a.createElement(v,{value:":"})),l.a.createElement("td",null,l.a.createElement(v,{value:String(e.state.s10)})),l.a.createElement("td",null,l.a.createElement(v,{value:String(e.state.s1)}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(T,{type:"DECREMENT",value:"h10"})),l.a.createElement("td",null,l.a.createElement(T,{type:"DECREMENT",value:"h1"})),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(T,{type:"DECREMENT",value:"m10"})),l.a.createElement("td",null,l.a.createElement(T,{type:"DECREMENT",value:"m1"})),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(T,{type:"DECREMENT",value:"s10"})),l.a.createElement("td",null,l.a.createElement(T,{type:"DECREMENT",value:"s1"}))))))})},_=a(12),M=a.n(_),b=function(){return l.a.createElement(i.c,{to:[d]},function(e){return l.a.createElement("div",{className:M.a.startButton,onClick:function(t){t.stopPropagation(),e.action("START")}},"START")})},y=a(2),P=a.n(y),C=function(){return l.a.createElement(i.c,{to:[d]},function(e){return l.a.createElement("div",null,l.a.createElement("header",{className:P.a.header,style:{visibility:"STOPPED"===e.state.status?"":"hidden",opacity:"STOPPED"===e.state.status?1:0}},l.a.createElement("h1",{className:P.a.title},"nixie-timer",l.a.createElement("i",{className:"fab fa-github "+P.a.githubIcon,onClick:function(){window.location.href="https://github.com/koirand/nixie-timer"}}))),l.a.createElement("div",{className:P.a.main},l.a.createElement(g,null),l.a.createElement("div",{className:P.a.buttonContainer,style:{visibility:"STOPPED"===e.state.status?"":"hidden",opacity:"STOPPED"===e.state.status?1:0}},l.a.createElement(b,null))))})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.b,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.b84754cf.chunk.js.map
