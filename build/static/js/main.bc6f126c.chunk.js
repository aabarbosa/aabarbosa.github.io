(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e){e.exports={name:"file",title:"Hi,\n This is my Portfolio!",presentation:"I like intelectual work with tons of personal stuff."}},25:function(e,t,a){e.exports=a(68)},39:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=a(5),s=a(6),i=a(8),u=a(7),m=a(9),f=a(69),h=a(53),p=a(13),d=(a(39),a(41)),E=a(21),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={avatar_url:"",username:"",url:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getUser",value:function(e){var t=this;return fetch("https://api.github.com/users/".concat(e)).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{avatar_url:"$user.avatar_url",username:"$user.login",url:"$user.url"}})}).then(function(e){return t.setState({contacts:e,isLoading:!1})}).catch(function(e){return console.log("parsing failed",e)})}},{key:"renderUser",value:function(e){return r.a.createElement("div",{className:"resultBadge"},r.a.createElement("img",{alt:"skilledProgrammer",src:e.avatar_url}),r.a.createElement("p",{className:"userInfo"},"Username: ",r.a.createElement("br",null),e.username))}},{key:"render",value:function(){var e=this.state.user;return console.log(e),r.a.createElement("div",{className:"User"},e&&this.renderUser(e))}}]),t}(r.a.Component),b=function(e){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"presentation-title"},"Welcome!"),r.a.createElement(v,null),r.a.createElement("div",{className:"presentation-text"},E.presentation),r.a.createElement("div",{className:"linkContainer"},r.a.createElement(d.a,{to:"/projects"},"Check Out")))},g=(a(42),a(44),function(e){return r.a.createElement("div",{className:"Blogs"},r.a.createElement("h1",null,r.a.createElement("a",{rel:"noopener noreferrer",href:"/",target:"_blank"},"Letter1 ",r.a.createElement("i",{className:"icon-link-ext"}))),r.a.createElement("h1",null,r.a.createElement("a",{rel:"noopener noreferrer",href:"/",target:"_blank"},"Letter2",r.a.createElement("i",{className:"icon-link-ext"}))))}),k=(a(46),a(48),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleClick=function(){var t=!e.state.expanded;e.setState({expanded:t})},e.state={expanded:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.features,l=e.techStack,c=e.link,o=e.repo,s=e.aspectRatioOfsetClass,i=l.map(function(e,a){return r.a.createElement("li",{key:"".concat(t.trim()).concat(a)},e)}),u=this.state.expanded?"icon-right-open rotate":"icon-right-open",m=this.state.expanded?"expanded":"";return r.a.createElement("div",{className:"projectDiv"},r.a.createElement("h2",{onClick:this.handleClick},r.a.createElement("i",{className:u})," ",t),r.a.createElement("div",{className:"info-container ".concat(m)},r.a.createElement("div",{className:"screenshot ".concat(s)},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"}," "),r.a.createElement("div",{className:"ss-fake-content"})),r.a.createElement("h3",null,"Environment: "),r.a.createElement("p",{className:"description"},a),r.a.createElement("p",{className:"features"},n),r.a.createElement("ul",{className:"techStack"},i),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Live Version"),r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Github Repo"))))}}]),t}(n.Component)),w=[{title:"Portfolio",description:"Personal Portfolio.",features:"Technology",techStack:["ReactJS"],link:"",repo:"",aspectRatioOfsetClass:""},{title:"Website Consulting Online",description:"This was 0% luck. I got dec 2010 and jan of 2011 100% unestoppable hard work",features:"Technology",techStack:["ReactJS"],link:"",repo:"",aspectRatioOfsetClass:""}],N=function(e){var t=w.map(function(e){return r.a.createElement("div",{className:"quicklink"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title,r.a.createElement("i",{className:"icon-link-ext"})))});return r.a.createElement("div",{className:"Projects"},r.a.createElement("div",{className:"quicklinks"},r.a.createElement("h2",null,"Quick Links: "),t),w.map(function(e,t){return r.a.createElement(k,Object.assign({key:"project".concat(t)},e))}))},j=a(14),y=a.n(j),O=a(22),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={user:null,repos:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getUser",value:function(e){return fetch("https://api.github.com/users/".concat(e)).then(function(e){return e.json()}).then(function(e){return e})}},{key:"getUserRepo",value:function(e){return fetch("https://api.github.com/users/".concat(e,"/repos")).then(function(e){return e.json()}).then(function(e){return e})}},{key:"handleSubmit",value:function(){var e=Object(O.a)(y.a.mark(function e(t){var a,n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),t.preventDefault(),a=this.refs.username.value,e.next=5,this.getUser(a);case 5:return n=e.sent,e.next=8,this.getUserRepo(a);case 8:r=e.sent,this.setState({user:{avatar_url:n.avatar_url,username:n.login,followers:n.followers,following:n.following,url:n.url},repos:r});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderRepos",value:function(e){return e.map(function(e){return r.a.createElement("div",{key:e.id,className:"repoResults"},r.a.createElement("p",null,e.name,r.a.createElement("b",null),e.description))})}},{key:"renderUser",value:function(e){return r.a.createElement("div",{className:"resultBadge"},r.a.createElement("p",{className:"userInfo"},"Username: ",r.a.createElement("br",null),e.username),r.a.createElement("p",{className:"followerInfo"},e.followers," Followers"),r.a.createElement("p",{className:"followingInfo"},"Following ",e.following," users"))}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.repos;return r.a.createElement("div",{className:"GitHubSearch"},r.a.createElement("header",{className:"Search-header"},r.a.createElement("h1",null,"Github User Search ")),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{ref:"username",type:"text",placeholder:"username"})),r.a.createElement("div",{className:"Search-intro"},r.a.createElement("h4",null," User info: "),a&&this.renderUser(a)),r.a.createElement("div",null,r.a.createElement("h4",null," Repos: "),n&&this.renderRepos(n)))}}]),t}(r.a.Component),C=function(e){return r.a.createElement("div",null,r.a.createElement(S,null))},x=function(e){return r.a.createElement("main",null,r.a.createElement(p.TransitionGroup,{className:"switch-routes"},r.a.createElement(p.CSSTransition,{key:e.location.key,classNames:"fade",timeout:350},r.a.createElement("div",{className:"switch-wrapper"},r.a.createElement(f.a,{location:e.location},r.a.createElement(h.a,{path:"/letter",component:g}),r.a.createElement(h.a,{path:"/projects",component:N}),r.a.createElement(h.a,{path:"/skills",component:C}),r.a.createElement(h.a,{path:"/",component:b}))))))},U=a(71),R=function(){return r.a.createElement("h1",null,r.a.createElement("span",null," A. B, Alekssandro "),r.a.createElement("span",null," Mastery Pursuer "))},_=(a(54),function(e){return r.a.createElement("header",null,r.a.createElement(R,null),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(U.a,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/letter"},"Letter")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/skills"},"Skills")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/contact"},"Contact")))))}),A=(a(57),a(59),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"row-social",style:{margin:0}},r.a.createElement("div",{className:"social-button"},r.a.createElement("a",{href:"https://www.github.com/aabarbosa",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://stackoverflow.com/u/10448918",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-stack-overflow"})),r.a.createElement("a",{href:"mailto:aabarbosa.cs@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-google"})),r.a.createElement("a",{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-medium"}))),r.a.createElement("br",null)),r.a.createElement("div",{className:"row",id:"copyleft",style:{margin:0}},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"small"},"\xa9 2019 A.A., ReactJS"))))}}]),t}(n.Component)),P=(a(61),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(h.a,{component:x}),r.a.createElement(A,null))}}]),t}(n.Component)),W=a(70),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(64),a(66);var I=r.a.createElement(W.a,null,r.a.createElement("div",{className:"bgOverlay"},r.a.createElement(P,null)));c.a.render(I,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");L?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(t,e)})}}()}},[[25,2,1]]]);
//# sourceMappingURL=main.bc6f126c.chunk.js.map