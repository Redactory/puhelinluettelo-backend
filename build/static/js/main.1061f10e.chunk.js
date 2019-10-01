(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),i=(t(21),t(4)),u=t(15),s=t(2);function l(e){var n={display:"inline",marginLeft:"1em"};return a.a.createElement("div",{style:{marginBottom:"1em"}},a.a.createElement("p",{style:n},e.person.name," ",e.person.number),a.a.createElement("button",{style:n,onClick:function(){return e.deletePerson(e.person.id,e.person.name)}},"delete"))}function p(e){for(var n=[],t=0;t<e.persons.length;t++)n.push(a.a.createElement(l,{key:e.persons[t].name,person:e.persons[t],deletePerson:e.deletePerson}));return n=function(e,n){var t=[];n=n.toLowerCase();for(var r=0;r<e.length;r++){var a=e[r].props.person.name;void 0!==a&&(a.toLowerCase().includes(n)&&t.push(e[r]))}return t}(n,e.searchString),a.a.createElement("div",null,n)}function d(e){return a.a.createElement("div",null,"search: ",a.a.createElement("input",{value:e.value,onChange:e.handleSearchChange}))}function m(e){return a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))}var f=t(3),b=t.n(f);var h={populatePersonListState:function(e,n){b.a.get("/api/persons").then((function(n){e(n.data)})).catch((function(e){n("Fetching person listing failed for some reason.","error")}))},newPerson:function(e,n,t,r){return b.a.post("/api/persons",e).then((function(a){var o=[];o.push(a.data);var c=n.concat(o);return t(c),r("".concat(e.name," was added to the number list"),"passing"),a.data})).catch((function(e){r(e.response.data.message,"error")}))},deletePerson:function(e,n,t){return b.a.delete("/api/persons/".concat(e)).then((function(e){return t("".concat(n," was removed from the number list"),"passing"),e.data})).catch((function(e){t(e.response.data.message,"error")}))},updateNumber:function(e,n,t,r){return b.a.put("api/persons/".concat(e.id),e).then((function(a){var o=[];o.push(e);var c=n.concat(o);return t(c),r("".concat(e.name," number was updated"),"passing"),a.data})).catch((function(n){404===n.response.status&&r("".concat(e.name," has already been removed from the list"),"error")}))}};function g(e){return a.a.createElement("div",{style:(n=e.notificationType,"passing"===n?{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}:"error"===n?{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}:{})},e.notificationMessage);var n}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var w=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),l=Object(s.a)(c,2),f=l[0],b=l[1],w=Object(r.useState)(""),O=Object(s.a)(w,2),y=O[0],E=O[1],j=Object(r.useState)(""),P=Object(s.a)(j,2),S=P[0],C=P[1],N=Object(r.useState)(""),k=Object(s.a)(N,2),x=k[0],D=k[1],L=Object(r.useState)(""),B=Object(s.a)(L,2),T=B[0],z=B[1];function J(e,n){D(e),z(n),setTimeout((function(){z(""),D("")}),5e3)}return Object(r.useEffect)((function(){h.populatePersonListState(o,J)}),[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{notificationType:T,notificationMessage:x}),a.a.createElement(d,{value:S,handleSearchChange:function(e){C(e.target.value)}}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(m,{handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){E(e.target.value)},newName:f,newNumber:y,addPerson:function(e){var n;if(e.preventDefault(),0===(n=t.filter((function(e){if(e.name===f)return f}))).length){var r={name:f,number:y};h.newPerson(r,t,o,J)}else if(window.confirm("".concat(f," is already added to phonebook, do you want to replace the old number with a new one?"))){for(var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(t,!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n[0],{number:y}),c=Object(i.a)(t),s=0;s<c.length;s++)c[s].name===f&&c.splice(s,1);h.updateNumber(a,c,o,J)}}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(p,{persons:t,searchString:S,deletePerson:function(e,n){if(window.confirm("Do you want to remove ".concat(n,"?"))){h.deletePerson(e,n,J);for(var r=Object(i.a)(t),a=0;a<r.length;a++)r[a].id===e&&(r.splice(a,1),o(r))}}}))};c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1061f10e.chunk.js.map