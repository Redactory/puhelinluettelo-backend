(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),u=(n(21),n(4)),i=n(15),s=n(2);function l(e){var t={display:"inline",marginLeft:"1em"};return a.a.createElement("div",{style:{marginBottom:"1em"}},a.a.createElement("p",{style:t},e.person.name," ",e.person.number),a.a.createElement("button",{style:t,onClick:function(){return e.deletePerson(e.person.id,e.person.name)}},"delete"))}function d(e){for(var t=[],n=0;n<e.persons.length;n++)t.push(a.a.createElement(l,{key:e.persons[n].name,person:e.persons[n],deletePerson:e.deletePerson}));return t=function(e,t){var n=[];t=t.toLowerCase();for(var r=0;r<e.length;r++){var a=e[r].props.person.name;void 0!==a&&(a.toLowerCase().includes(t)&&n.push(e[r]))}return n}(t,e.searchString),a.a.createElement("div",null,t)}function m(e){return a.a.createElement("div",null,"search: ",a.a.createElement("input",{value:e.value,onChange:e.handleSearchChange}))}function p(e){return a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))}var f=n(3),h=n.n(f);var b={populatePersonListState:function(e,t){h.a.get("/api/persons").then((function(t){e(t.data)})).catch((function(e){t("Fetching person listing failed for some reason.","error")}))},newPerson:function(e,t,n,r){return h.a.post("/api/persons",e).then((function(a){var o=[];o.push(a.data);var c=t.concat(o);return n(c),r("".concat(e.name," was added to the number list"),"passing"),a.data})).catch((function(t){r("Adding ".concat(e.name," to the system caused a problem with message ").concat(t),"error")}))},deletePerson:function(e,t,n){return h.a.delete("/api/persons/".concat(e)).then((function(e){return n("".concat(t," was removed from the number list"),"passing"),e.data})).catch((function(e){console.log("SAATU VIRHE"),console.log(e),404===e.response.status&&n("Deleting ".concat(t," from the list caused an error."),"error"),400===e.response.status&&n(e.message,"error")}))},updateNumber:function(e,t,n,r){return h.a.put("/".concat(e.id),e).then((function(a){var o=[];o.push(e);var c=t.concat(o);return n(c),r("".concat(e.name," number was updated"),"passing"),a.data})).catch((function(t){404===t.response.status&&r("".concat(e.name," has already been removed from the list"),"error")}))}};function g(e){return a.a.createElement("div",{style:(t=e.notificationType,"passing"===t?{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}:"error"===t?{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}:{})},e.notificationMessage);var t}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),l=Object(s.a)(c,2),f=l[0],h=l[1],w=Object(r.useState)(""),O=Object(s.a)(w,2),y=O[0],E=O[1],j=Object(r.useState)(""),P=Object(s.a)(j,2),S=P[0],C=P[1],N=Object(r.useState)(""),k=Object(s.a)(N,2),x=k[0],D=k[1],L=Object(r.useState)(""),A=Object(s.a)(L,2),B=A[0],T=A[1];function R(e,t){D(e),T(t),setTimeout((function(){T(""),D("")}),5e3)}return Object(r.useEffect)((function(){b.populatePersonListState(o,R)}),[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{notificationType:B,notificationMessage:x}),a.a.createElement(m,{value:S,handleSearchChange:function(e){C(e.target.value)}}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(p,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){E(e.target.value)},newName:f,newNumber:y,addPerson:function(e){var t;if(e.preventDefault(),0===(t=n.filter((function(e){if(e.name===f)return f}))).length){var r={name:f,number:y};b.newPerson(r,n,o,R)}else if(window.confirm("".concat(f," is already added to phonebook, do you want to replace the old number with a new one?"))){for(var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t[0],{number:y}),c=Object(u.a)(n),s=0;s<c.length;s++)c[s].name===f&&c.splice(s,1);b.updateNumber(a,c,o,R)}}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(d,{persons:n,searchString:S,deletePerson:function(e,t){if(window.confirm("Do you want to remove ".concat(t,"?"))){b.deletePerson(e,t,R);for(var r=Object(u.a)(n),a=0;a<r.length;a++)r[a].id===e&&(r.splice(a,1),o(r))}}}))};c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7fccc49f.chunk.js.map