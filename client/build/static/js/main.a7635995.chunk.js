(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports=a(50)},25:function(e,t,a){},26:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(25),a(26),a(1)),u=a(2),m=a(3),i=a.n(m);function s(){return l.a.createElement("button",{onClick:function(e){i.a.delete("http://localhost:8000/api/users/logout",{withCredentials:!0}).then((function(){return Object(o.b)("/")})).catch(console.log)}},"Log Out")}var p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/pirates",{withCredentials:!0}).then((function(e){r(e.data)})).catch((function(){return Object(o.b)("/")}))}),[a]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Pirate Crew")," "," ",l.a.createElement("button",{onClick:function(){return Object(o.b)("/pirate/new")}},"Add Pirate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Pic"),l.a.createElement("th",null,"Pirate Name"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,0!==a.length?a.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l})).map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null," ",l.a.createElement("img",{src:e.imageUrl,alt:e.name,width:"200"})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(t){return a=e._id,void Object(o.b)("/pirate/"+a);var a}},"View Profile"),l.a.createElement("button",{onClick:function(t){return n=e._id,void i.a.delete("http://localhost:8000/api/pirates/delete/"+n).then((function(){var e=a.filter((function(e){return e._id!==n}));r(e)}));var n}},"Walk the Plank")))})):l.a.createElement("tr",null,l.a.createElement("td",null,"Please add pirates")))))},E=a(6),b=a(5),h=function(e){var t=e.id,a=Object(n.useState)(null),r=Object(u.a)(a,2),c=r[0],m=r[1];Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/pirates/"+t,{withCredentials:!0}).then((function(e){m(e.data)})).catch(console.log)}),[]);var s=function(e){var t=e.target,a=t.name,n=t.value;m(Object(b.a)({},c,Object(E.a)({},a,n))),i.a.put("http://localhost:8000/api/pirates/edit/"+c._id,c,{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))};return null===c?"Loading...":l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return Object(o.b)("/pirates")}},"Crew Board"),l.a.createElement("h1",null,c.name),l.a.createElement("img",{src:c.imageUrl,alt:c.name,width:"300"}),l.a.createElement("h2",null,'" ',c.catchPhrase,'  "'),l.a.createElement("br",null),l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"Position: ",c.position," "),l.a.createElement("p",null,"Treasures: ",c.treasures," "),"true"===c.pegLeg?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Peg Leg: Yes"),l.a.createElement("button",{style:{backgroundColor:"red"},name:"pegLeg",value:"false",onClick:s},"No")):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Peg Leg: No"),l.a.createElement("button",{style:{backgroundColor:"green"},name:"pegLeg",value:"true",onClick:s},"Yes")),"true"===c.eyePatch?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Eye Patch: Yes"),l.a.createElement("button",{name:"eyePatch",value:"false",style:{backgroundColor:"red"},onClick:s},"No")):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null," Eye Patch: No "),l.a.createElement("button",{name:"eyePatch",value:"true",onClick:s,style:{backgroundColor:"green"}},"Yes")),"true"===c.hookHand?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Hook Hand: Yes "),l.a.createElement("button",{name:"hookHand",value:"false",onClick:s,style:{backgroundColor:"red"}},"No")):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Hook Hand: No "),l.a.createElement("button",{name:"hookHand",value:"true",onClick:s,style:{backgroundColor:"green"}},"Yes")))},d=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),m=Object(u.a)(c,2),s=m[0],p=m[1],h=Object(n.useState)("no"),d=Object(u.a)(h,2),g=d[0],f=d[1];Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/pirates",{withCredentials:!0}).then((function(e){for(var t=e.data,a=0;a<t.length;a++)"Captain"===t[a].position&&f("yes")})).catch((function(){return Object(o.b)("/")}))}),[]);var v=function(e){var t=e.target,n=t.name,l=t.value;r(Object(b.a)({},a,Object(E.a)({},n,l)))};return void 0===s?"Loading...":l.a.createElement("div",null,l.a.createElement("h1",null,"Lets Add Pirate"),l.a.createElement("button",{onClick:function(){return Object(o.b)("/pirates")}},"Crew Board"),l.a.createElement("br",null),l.a.createElement("br",null),s.map((function(e,t){return l.a.createElement("p",{style:{color:"red"},key:t},e)})),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p([]),i.a.post("http://localhost:8000/api/pirates",a,{withCredentials:!0}).then((function(){return Object(o.b)("/pirates")})).catch((function(e){var t=[],a=e.response.data.errors;for(var n in console.log(a),a)t.push(a[n].message);p(t)}))}},l.a.createElement("label",null,"Pirate Name:"),l.a.createElement("input",{name:"name",type:"text",onChange:v})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Image url: "),l.a.createElement("input",{name:"imageUrl",type:"text",onChange:v})," ",l.a.createElement("br",null),l.a.createElement("label",null,"# of Treasure Chests:"),l.a.createElement("input",{name:"treasures",type:"number",onChange:v})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Pirate Catch Phrases: "),l.a.createElement("input",{name:"catchPhrase",type:"text",onChange:v})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Crew Position:"),"no"===g?l.a.createElement("select",{name:"position",onChange:v},l.a.createElement("option",null,"Captain"),l.a.createElement("option",null,"First Mate"),l.a.createElement("option",null,"Quarter master"),l.a.createElement("option",null,"Bootswain"),l.a.createElement("option",null,"Powder Monkey")):l.a.createElement("select",{name:"position",onChange:v},l.a.createElement("option",null,"First Mate"),l.a.createElement("option",null,"Quarter master"),l.a.createElement("option",null,"Bootswain"),l.a.createElement("option",null,"Powder Monkey")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",name:"pegLeg"}),l.a.createElement("label",null," Peg leg"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",name:"eyePatch"}),l.a.createElement("label",null," Eye Patch"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",name:"hookHand"}),l.a.createElement("label",null," Hook Hand"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Add Pirate")))};function g(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),m=Object(u.a)(c,2),s=m[0],p=m[1],h=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",passwordMatch:""}),d=Object(u.a)(h,2),g=d[0],f=d[1];function v(e){var t=e.target,n=t.name,l=t.value;r(Object(b.a)({},a,Object(E.a)({},n,l))),"firstName"===n&&l.length<2&&f(Object(b.a)({},g,{firstName:"First Name must be greater than 2 characters"})),"lastName"===n&&l.length<2&&f(Object(b.a)({},g,{lastName:"Last Name must be greater than 2 characters"})),"email"===n&&l.length<2&&f(Object(b.a)({},g,{email:"Email must be greater than 2 characters"})),"password"===n&&l.length<5&&f(Object(b.a)({},g,{password:"Password must be greater than 5 characters"})),"confirmPassword"===n&&a.password!==l&&f(Object(b.a)({},g,{passwordMatch:"Password and password confirmation should match "}))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p(0),i.a.post("http://localhost:8000/api/users/register",a,{withCredentials:!0}).then((function(){return Object(o.b)("/pirates")})).catch((function(e){var t=[];console.log(e.response);for(var a=e.response.data.errors,n=0,l=Object.keys(a);n<l.length;n++){var r=l[n];t.push(a[r].message)}p(t)}))}},0!==s&&s.map((function(e,t){return l.a.createElement("p",{style:{color:"red"},key:t},e)})),l.a.createElement("p",null,l.a.createElement("p",null," ",g.firstName),l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{name:"firstName",value:a.firstName,onChange:v})),l.a.createElement("p",null,l.a.createElement("p",null," ",g.lastName),l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{name:"lastName",value:a.lastName,onChange:v})),l.a.createElement("p",null,l.a.createElement("p",null," ",g.email),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{name:"email",value:a.email,onChange:v})),l.a.createElement("p",null,l.a.createElement("p",null," ",g.password),l.a.createElement("label",null,"Password"),l.a.createElement("input",{name:"password",type:"password",value:a.password,onChange:v})),l.a.createElement("p",null,l.a.createElement("label",null,"Confirm password"),l.a.createElement("input",{name:"confirmPassword",type:"password",value:a.confirmPassword,onChange:v})),l.a.createElement("button",null,"Register")))}function f(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),s=m[0],p=m[1],E=Object(n.useState)(""),b=Object(u.a)(E,2),h=b[0],d=b[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Login"),h&&l.a.createElement("p",{style:{color:"red"}}," ",h," "),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(""),i.a.post("http://localhost:8000/api/users/login",{email:a,password:s},{withCredentials:!0}).then((function(){return Object(o.b)("/pirates")})).catch((function(){return d("Please enter valid email or password")}))}},l.a.createElement("p",null,l.a.createElement("label",null,"Email:"),l.a.createElement("input",{name:"email",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{name:"password",type:"password",value:s,onChange:function(e){return p(e.target.value)}})),l.a.createElement("input",{type:"submit",value:"Login"})),l.a.createElement("div",null,l.a.createElement("h1",null,"Register!"),l.a.createElement(g,null)))}var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(f,{path:"/"}),l.a.createElement(p,{path:"pirates"}),l.a.createElement(h,{path:"pirate/:id"}),l.a.createElement(d,{path:"pirate/new"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a7635995.chunk.js.map