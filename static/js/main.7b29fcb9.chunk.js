(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){},213:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(70),l=t.n(i);t(102),t(103),t(104),t(105);var c=function(){return r.a.createElement("div",{id:"header-container"},r.a.createElement("div",{id:"header-text"},r.a.createElement("img",{id:"header-image",src:"https://lh3.googleusercontent.com/sCTXfyQa_rVvfutbHIMa_-yEaanhCKka6zgrR5Ww2AMl0rbfniHA2rQtZwj9yG4kwopcVDk-TEFjkPzjTdt_JgpNCaS5Jp3SPpbadTP-JJ7Tfj8CNMAQMnczh_7EUPtufkLUDwnfxg0nDPru4kRc18OSwjbnxkBFmzEEYRBwjQ4ipsytJqPOZHqe8Ow5WK77ZOATotT0L2zu4DyPsfuEZRS_xBntyWAbaoRwhzrv9OqI4j0Q1aduMo56HXHfl65TBbcjCHkI_c5XTRAyECZAlYLJirPxTsjT7UqiVU1s4uCZ13fDnR7YOzuw4tRFdMhn5m5jsey3l0P0OzjJLkPBJDB508vzhsC6dyjqu88zXvkVmv5Ehcv0LmWE3eY5pYbKqIdqVjpMu3two9SV8OvJ-qOYIEO6xDTOOQS_o6eDUJEXsVytB9gGYYUgBM9wm9BIY1n8oclNfbGpJFRr7P3bSf7UvNQ16PVshuFEEY6faVizJwnF45bilUPUeijVrq-x3i9dS3IyNUiSCqOqrufOguziE-dnZIobEiPQ_L8jPe7PBJdYxeaXMhSJO_6D9f76wWxnwe9egfJ7OS19dHrOeoEj1x7QBin1bCNGP1Q8feWrK1JboD10OWLzY8-BfwH__Ow-lMvNO7hadIe1ThQNP5zjA8cq0vhl=s739-no"}),r.a.createElement("br",null),"Hi, I'm\xa0",r.a.createElement("b",null,"Kadhir Umasankar"),".",r.a.createElement("br",null),"ASE student ",r.a.createElement("b",{style:{color:"#bb5826"}},"@UTAustin"),"."))},o=(t(106),t(215));var d=function(){return r.a.createElement("div",{id:"navbar-grid"},r.a.createElement("div",null,r.a.createElement("span",{id:"navbar-email"},r.a.createElement(o.a,{name:"mail",circular:!0}),"kadhirus99@gmail.com")),r.a.createElement("div",null,r.a.createElement("a",{id:"navbar-link",href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank"},r.a.createElement(o.a,{name:"linkedin",circular:!0}),"linkedin.com/in/kadhirus99")),r.a.createElement("div",null,r.a.createElement("a",{id:"navbar-link",href:"https://github.com/kadhirumasankar",target:"_blank"},r.a.createElement(o.a,{name:"github",circular:!0}),"github.com/kadhirumasankar")))},u=t(9),s=t(10),m=t(12),h=t(11),g=t(13),p=(t(211),t(84)),b=(t(212),t(213),function(e){function a(){return Object(u.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.details,a=e.map(function(e,a){return r.a.createElement("li",{key:a},e)}),t=this.props.language[1];return console.log(e),r.a.createElement("div",{id:"card"},r.a.createElement("div",{id:"card-header"},r.a.createElement("div",{id:"card-title"},this.props.title),r.a.createElement("div",{id:"card-header-details"},r.a.createElement("div",{id:"card-header-language",style:{backgroundColor:t}},this.props.language[0]),this.props.githubUrl?r.a.createElement("a",{id:"card-buttons",href:this.props.githubUrl,target:"_blank"},r.a.createElement(o.a,{name:"github",size:"big"})):null)),r.a.createElement("div",{id:"card-date"},this.props.date),r.a.createElement("div",{id:"card-content"},r.a.createElement("div",{id:"card-details"},r.a.createElement("ul",null,a)),r.a.createElement("div",{id:"image-container"},r.a.createElement("img",{src:this.props.imageUrl}))))}}]),a}(r.a.Component)),f=function(e){function a(){return Object(u.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.info.map(function(e){return r.a.createElement(b,{key:e.key,title:e.title,date:e.date,language:e.language,imageUrl:e.imageUrl,details:e.details,githubUrl:e.githubUrl})});return r.a.createElement("div",{id:"projects"},e)}}]),a}(r.a.Component),E=function(e){function a(){return Object(u.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-body"},r.a.createElement(f,{info:p}))}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement(c,null),r.a.createElement(d,null),r.a.createElement(E,null))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e){e.exports=[{key:1,title:"ColorCube Class for UAVA",date:"Spring 2019",language:["Python","#fbbd08"],imageUrl:"https://uavaustin.org/assets/img/uava_logo_two_tone_dark.png",details:["Improved accuracy of the color classification component of our competition plane","Used HSV instead of RBG color model to make a 3-D coordinate system","Created cubes for various colors and checked whether input color was contained in cubes"]},{key:2,title:"Manual Image Rec UI for UAVA",date:"Spring 2019",language:["ReactJS","#00d8ff"],imageUrl:"https://i.imgur.com/ogYYHiL.png",details:["Used ReactJS and Semantic UI React to develop the Manual Image Recognition UI for competition"]},{key:3,title:"My website",date:"June 2019",language:["ReactJS","#00d8ff"],imageUrl:"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",githubUrl:"https://github.com/kadhirumasankar/kadhirumasankar.github.io",details:["Made entirely from scratch using ReactJS","Implemented SCSS in some places","Extensively used Grid and Flexbox"]}]},97:function(e,a,t){e.exports=t(214)}},[[97,1,2]]]);
//# sourceMappingURL=main.7b29fcb9.chunk.js.map