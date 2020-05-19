(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e){e.exports=[{key:1,size:"small",title:"Freshman Year",date:"Fall 2017 - Spring 2018",language:["Education","#bb5826"],imageUrl:"https://i.imgur.com/8onyBu4.jpg",additionalText:"Classes taken:",details:["Differential Equations with Linear Algebra","Statics","Engineering Design Graphics","Sequences, Series and Multivariable Calculus","Intro to Computer Programming","Principles of Chemistry I"]},{key:2,size:"small",title:"Sophomore Year",date:"Fall 2018 - Spring 2019",language:["Education","#bb5826"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/1280px-Texas_Longhorns_logo.svg.png",additionalText:"Classes taken:",details:["Spacecraft Dynamics","Low-Speed Aerodynamics","Mechanics of Solids","Vector Calculus","Dynamics","Thermodynamics","Engineering Computation","Foundations of Accounting","Engineering Communication"]},{key:3,size:"normal",title:"ColorCube Class for UAVA",date:"Spring 2019",language:["Python","#fbbd08"],githubUrl:"https://github.com/uavaustin/target-finder/blob/master/target_finder/color_cube.py",imageUrl:"https://uavaustin.org/assets/img/uava_logo_two_tone_dark.png",details:["Improved accuracy of the color classification component of our competition plane","Used HSV instead of RBG color model to make a 3-D coordinate system","Created cubes for various colors and checked whether input color was contained in cubes"],expandedDetails:"I joined the image recognition team of the Unmanned Aerial Vehicle Austin team in the Spring of 2019 to increase my proficiency with Python. Prior to the this, our software used the distance formula to classify colors. This made the color classification system because, for instance, it would classify both pink and purple as red because they were equidistant from \"true\" red, even though they were neither red. I improved this by converting input colors to the HSV system, and setting up a 3-D coordinate system with Hue, Saturation, and Vibrance on the axes. I then made 'Color Cubes' which were areas in the 3-D coordinate space which corresponded to different colors."},{key:4,size:"normal",title:"This website",date:"Summer 2019",language:["ReactJS","#00d8ff"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",githubUrl:"https://github.com/kadhirumasankar/kadhirumasankar.github.io",details:["Made entirely from scratch using ReactJS","Implemented SCSS in some places","Extensively used Grid and Flexbox"],expandedDetails:"I stayed in Austin over the summer to help the Texas Rocket Engineering Lab with some work, and since I had recently learned React, I wanted to use that knowledge to make a website to showcase my projects. I also learned Grid and Flexbox to help me design the website."},{key:5,size:"small",title:"Junior Year - Fall 2019",date:"Fall 2019",language:["Education","#bb5826"],imageUrl:"https://i.imgur.com/orTHsos.png",additionalText:"Classes taken:",details:["Linear Systems Analysis","Electromechanical Systems","Attitude Dynamics","Rocket Engineering Practicum","Foundations of Management"]},{key:6,size:"normal",title:"Manual Image Rec UI for UAVA",date:"Spring 2019 - Spring 2020",language:["ReactJS","#00d8ff"],imageUrl:"https://i.imgur.com/Afkwqf3.gif",githubUrl:"https://github.com/uavaustin/manual-image-rec",details:["Using ReactJS and Semantic UI React to develop the Manual Image Recognition UI for competition"],expandedDetails:"In Spring 2019, I was tasked to use my knowledge with web development to make a manual image recognition interface that would be used at competition. I also had to learn React to make this interface. The interface would need to have an Explorer page which would show pictures taken by the flight camera, where the user could select an image, and a Classifier page where the user would be able to select targets and send them to the our automatic object classifier model and then to the competition server."},{key:7,size:"normal",title:"Parachute Drift Model for TREL",date:"Fall 2019",language:["MATLAB","#842613"],imageUrl:"https://i.imgur.com/Auw8L43.png",githubUrl:"https://gist.github.com/kadhirumasankar/43e64613d691f331b2f8273c45dedbd9",details:["Used the Monte Carlo simulation to predict drift area for the Texas Rocket Engineering Lab rocket after the parachutes are deployed"],expandedDetails:"In Fall 2019, I was made the Responsible Engineer of a team tasked with making a computational model in MATLAB to predict the range that the TREL rocket would drift after its parachutes were deployed. We used the Monte Carlo simulation to approximate the unpredictable nature of the rocket due to random wind conditions. The model took atmospheric conditions into account, and the model was ensured to be versatile and work with different variable values."},{key:8,size:"small",title:"Junior Year - Spring 2020",date:"Spring 2020",language:["Education","#bb5826"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/1200px-University_of_Texas_at_Austin_seal.svg.png",additionalText:"Classes taken:",details:["Applied Orbital Mechanics","Feedback Control Systems","Compressible Flow","Flight Dynamics","Foundations of Marketing"]}]},111:function(e,a,t){e.exports=t.p+"static/media/img1.3f18215a.png"},123:function(e,a,t){e.exports=t(241)},129:function(e,a,t){},130:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(92),l=t.n(r),o=(t(128),t(129),t(18)),s=(t(130),t(5)),c=t(6),d=t(8),m=t(7),u=t(39),h=t(9),p=(t(65),t(243)),g=t(16),b=t(93),E=t.n(b),f=t(94),v=t.n(f),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(){t.setState(function(e){return{clickCount:e.clickCount+1}}),console.log(t.state.clickCount)},t.state={clickCount:1},t.handleClick=t.handleClick.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"header-container"},i.a.createElement("div",null),i.a.createElement("div",{id:"header-text"},i.a.createElement("div",null,i.a.createElement("img",{id:"header-image",src:this.state.clickCount<13?E.a:v.a,alt:"Kadhir Umasankar",onClick:this.handleClick}),i.a.createElement("br",null),i.a.createElement("div",{id:"text"},"Hi, I'm\xa0",i.a.createElement("b",null,"Kadhir Umasankar"),".",i.a.createElement("br",null),i.a.createElement("div",{style:{fontSize:"90%"}},"Aerospace Engineering student"," ",i.a.createElement("a",{href:"https://www.utexas.edu/",target:"_blank",rel:"noopener noreferrer",style:{color:"#bb5826",fontWeight:"bold"}},"@UTAustin"),".",i.a.createElement("br",null),"Interning"," ",i.a.createElement("a",{href:"https://www.sandia.gov/",target:"_blank",rel:"noopener noreferrer",style:{color:"#00add0",fontWeight:"bold"}},"@SandiaNationalLabs"),".",i.a.createElement("br",null))))),i.a.createElement("a",{id:"header-bottom-text",href:"#PageBody"},"Scroll to see"," ",i.a.createElement(g.a,{exact:!0,path:"/",render:function(){return i.a.createElement("span",null,"my work")}}),i.a.createElement(g.a,{path:"/about",render:function(){return i.a.createElement("span",null,"more about me")}}),i.a.createElement("br",null),i.a.createElement(p.a,{name:"caret down"})))}}]),a}(i.a.Component),w=(t(237),function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("a",{id:"PageBody"}),i.a.createElement("div",{id:"navbar-grid"},i.a.createElement("div",null,i.a.createElement(o.b,{activeStyle:{color:"inherit",background:"#556070"},to:"/about",className:"navbar-link"},i.a.createElement(p.a,{name:"user",circular:!0}),"About Me")),i.a.createElement("div",null,i.a.createElement(o.b,{activeStyle:{color:"inherit",background:"#556070"},exact:!0,to:"/",className:"navbar-link"},i.a.createElement(p.a,{name:"clipboard list",circular:!0}),"My Work")),i.a.createElement("div",{className:"tooltip",href:"mailto:kadhirus99@gmail.com"},i.a.createElement("a",{className:"navbar-link",href:"mailto:kadhirus99@gmail.com"},i.a.createElement("span",{className:"navbar-link",onClick:function(){navigator.clipboard.writeText("kadhirus99@gmail.com"),console.log(e.state.emailCopied),e.setState({emailCopied:!0})},onMouseEnter:function(){e.setState({emailCopied:!1})}},i.a.createElement(p.a,{name:"mail",circular:!0}),"kadhirus99@gmail.com"),i.a.createElement("span",{className:"tooltiptext"},"Click to send me an email"))),i.a.createElement("div",{className:"tooltip"},i.a.createElement("a",{className:"navbar-link",href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{name:"linkedin",circular:!0}),i.a.createElement("span",{className:"navbar-link-text"},"linkedin.com/in/kadhirus99")),i.a.createElement("span",{className:"tooltiptext"},"Click to go to my LinkedIn page")),i.a.createElement("div",{className:"tooltip"},i.a.createElement("a",{className:"navbar-link",href:"https://github.com/kadhirumasankar",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{name:"github",circular:!0}),i.a.createElement("span",{className:"navbar-link-text"},"github.com/kadhirumasankar")),i.a.createElement("span",{className:"tooltiptext"},"Click to go to my Github page"))))}}]),a}(n.Component)),y=(t(238),t(239),t(91),t(240),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={isExpanded:!1,size:t.props.size},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.details,t=[];a&&(t=a.map(function(e,a){return i.a.createElement("li",{key:a},e)}));var n="";this.props.language&&(n=this.props.language[1]);var r="";return r=this.props.githubUrl?"private"===this.props.githubUrl?i.a.createElement("a",{title:"The code for this project is in a private repository",className:"card-buttons",href:this.props.githubUrl,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{disabled:!0,name:"github",size:"big"})):i.a.createElement("a",{className:"card-buttons",href:this.props.githubUrl,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{name:"github",size:"big"})):null,"small"===this.state.size?i.a.createElement("div",{className:"card small"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title"},this.props.title),i.a.createElement("div",{className:"card-header-details"},i.a.createElement("div",{className:"card-header-language",style:{backgroundColor:n}},this.props.language[0]))),i.a.createElement("div",{className:"card-date"},this.props.date),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-details"},this.props.additionalText?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.additionalText):null,i.a.createElement("ul",null,t)),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title})))):"normal"===this.state.size?i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title"},this.props.title),i.a.createElement("div",{className:"card-header-details"},this.props.language?i.a.createElement("div",{className:"card-header-language",style:{backgroundColor:n}},this.props.language[0]):null,r)),this.props.date?i.a.createElement("div",{className:"card-date"},this.props.date):null,i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-details"},i.a.createElement("div",{className:"expanded-text"},this.props.expandedDetails?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.expandedDetails):null),i.a.createElement("div",{className:"normal-text"},this.props.additionalText?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.additionalText):null,i.a.createElement("ul",this.props.noBullets?{style:{listStyleType:"none",paddingLeft:0,marginLeft:0,lineHeight:"250%"}}:null,t,this.props.expandedDetails?i.a.createElement("a",{href:"javascript:void(0)",onClick:function(){e.props.expandedDetails&&e.setState({size:"large"})},style:{cursor:"pointer"}},"Read more..."):null))),this.props.imageUrl?i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title})):null)):"large"===this.state.size?i.a.createElement("div",{className:"card large"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title"},this.props.title),i.a.createElement("div",{className:"card-header-details"},this.props.language?i.a.createElement("div",{className:"card-header-language",style:{backgroundColor:n}},this.props.language[0]):null,r)),this.props.date?i.a.createElement("div",{className:"card-date"},this.props.date):null,i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-details"},i.a.createElement("div",{className:"expanded-text"},this.props.expandedDetails?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.expandedDetails):null,this.props.expandedDetails?i.a.createElement("a",{href:"javascript:void(0)",onClick:function(){e.props.expandedDetails&&e.setState({size:"normal"})},style:{cursor:"pointer"}},"Show less..."):null),i.a.createElement("div",{className:"normal-text"},this.props.additionalText?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.additionalText):null,i.a.createElement("ul",this.props.noBullets?{style:{listStyleType:"none",paddingLeft:0,marginLeft:0,lineHeight:"250%"}}:null,t))),this.props.imageUrl?i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title})):null)):void 0}}]),a}(i.a.Component)),x=t(110),N=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"about-title"},"My Work"),i.a.createElement("div",{id:"projects"},x.map(function(e){return i.a.createElement(y,{key:e.key,size:e.size,title:e.title,date:e.date,language:e.language,imageUrl:e.imageUrl,details:e.details,githubUrl:e.githubUrl,additionalText:e.additionalText,expandedDetails:e.expandedDetails})})))}}]),a}(i.a.Component),C=t(111),S=t.n(C),U=t(242),j=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=i.a.createElement("div",null,i.a.createElement("p",null,"I\u2019m currently a third-year Aerospace Engineering Honors student at the"," ",i.a.createElement("span",{style:{color:"#bb5826"}},"University of Texas at Austin"),", and I will also be minoring in Business. My interest in photography and videography, as well as my love for the planet and nature, has driven me to concentrate on satellites and autonomy within Aerospace Engineering. I'm happy to share that I will be interning with the Austonomy New Mexico team at"," ",i.a.createElement("span",{style:{color:"#00add0"}},"Sandia National Labs")," this summer."),i.a.createElement("p",null,"I made my first website from scratch when I was 9, and I\u2019ve been building on web development skills ever since. I\u2019m also interested in computer vision and machine learning, so you should be seeing some more projects related to that in my Work section soon."),i.a.createElement("p",null,"If you\u2019d like to chat with me, feel free to email me at"," ",i.a.createElement("span",{style:{color:"#374457"}},"kadhirus99@gmail.com"),"."));return this.props.isMobile?i.a.createElement("div",{id:"about-container"},i.a.createElement("div",{className:"about-title"},"About Me"),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-table"},e),i.a.createElement(y,{title:"Contact Information",size:"normal",date:"Get in touch with me",details:[[i.a.createElement(p.a,{name:"mail",circular:!0})," kadhirus99@gmail.com"],[i.a.createElement(p.a,{name:"linkedin",circular:!0}),i.a.createElement("a",{href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank",rel:"noopener noreferrer"}," ","/in/kadhirus99/")],[i.a.createElement(p.a,{name:"facebook",circular:!0}),i.a.createElement("a",{href:"https://www.facebook.com/kadhir1999",target:"_blank",rel:"noopener noreferrer"}," ","/kadhir1999")]],noBullets:!0})),i.a.createElement(U.a,null)):i.a.createElement("div",{id:"about-container"},i.a.createElement("div",{className:"about-title"},"About Me"),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-table"},i.a.createElement("div",{style:{paddingRight:"5em"}},e),i.a.createElement("img",{id:"header-image",src:S.a})," ",i.a.createElement("br",null)),i.a.createElement(y,{title:"Contact Information",size:"normal",date:"Get in touch with me",details:[[i.a.createElement(p.a,{name:"mail",circular:!0})," kadhirus99@gmail.com"],[i.a.createElement(p.a,{name:"linkedin",circular:!0}),i.a.createElement("a",{href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank",rel:"noopener noreferrer"}," ","/in/kadhirus99/")],[i.a.createElement(p.a,{name:"facebook",circular:!0}),i.a.createElement("a",{href:"https://www.facebook.com/kadhir1999",target:"_blank",rel:"noopener noreferrer"}," ","/kadhir1999")]],noBullets:!0})))}}]),a}(i.a.Component),T=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(m.a)(a).call(this))).handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e.state={width:window.innerWidth},e}return Object(h.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=1100;return e?i.a.createElement("div",{id:"page-body",name:"PageBody"},i.a.createElement(j,{isMobile:e}),i.a.createElement(N,null)):i.a.createElement("div",{id:"page-body",name:"PageBody"},i.a.createElement(g.a,{path:"/",exact:!0,component:N}),i.a.createElement(g.a,{path:"/about",component:j}))}}]),a}(i.a.Component);var I=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{id:"page-container"},i.a.createElement(k,null),i.a.createElement(w,null),i.a.createElement(T,null)))};var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){e.exports=t.p+"static/media/ProfilePicture.421d75ca.png"},94:function(e,a,t){e.exports=t.p+"static/media/kwwPicture.e571eaf7.png"}},[[123,1,2]]]);
//# sourceMappingURL=main.9930da07.chunk.js.map