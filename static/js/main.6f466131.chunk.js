(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(37)},27:function(t,e,n){},28:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(3),l=(n(27),n(7)),s=n(8),u=n(10),d=n(9),h=n(11),m=(n(28),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).renderChildren=function(t){return t.url&&t.preview?r.a.createElement("img",{src:t.url,alt:"",style:{width:"100%"}}):t.url&&t.duration?r.a.createElement("audio",{ref:function(t){n.audioEl.push(t)},src:t.url,controls:!0,style:{width:"100%"}}):t.preview?r.a.createElement("p",null,t.text):void 0},n.audioEl=[],n.state={theCurrentBroadcast:null,content:{list:[],title:""}},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params;fetch("/json/".concat(e.url)).then(function(t){return t.json()}).then(function(e){t.setState({content:{list:e.content,title:e.name}});var n=t.audioEl;n.map(function(e,a){return e.addEventListener("playing",function(n){t.state.theCurrentBroadcast&&e!==t.state.theCurrentBroadcast&&t.state.theCurrentBroadcast.pause(),t.setState({theCurrentBroadcast:e})}),e.addEventListener("ended",function(t){n[a+1]&&n[a+1].play()}),null})})}},{key:"render",value:function(){var t=this,e=this.state.content;return r.a.createElement("div",{className:"App"},r.a.createElement("h4",null,e.title),e.list.map(function(e,n){return r.a.createElement("div",{key:n},t.renderChildren(e))}))}}]),e}(a.Component)),p=n(19),f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={lessonList:[]},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("/json/menu.json").then(function(t){return t.json()}).then(function(e){t.setState({lessonList:e})})}},{key:"render",value:function(){var t=this.state.lessonList;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map(function(t,e){return r.a.createElement("li",{key:e},r.a.createElement(p.a,{to:"/details/".concat(t.url)},t.title))})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(2),E=r.a.createElement(i.b,{history:Object(v.a)()},r.a.createElement(i.a,{path:"/",exact:!0,component:f}),r.a.createElement(i.a,{path:"/details/:url",component:m}));c.a.render(E,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.6f466131.chunk.js.map