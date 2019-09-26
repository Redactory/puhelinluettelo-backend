(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=(n(21),n(4)),i=n(15),s=n(2);function l(e){var t={display:"inline",marginLeft:"1em"};return r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement("p",{style:t},e.person.name," ",e.person.number),r.a.createElement("button",{style:t,onClick:function(){return e.deletePerson(e.person.id,e.person.name)}},"delete"))}function p(e){for(var t=[],n=0;n<e.persons.length;n++)t.push(r.a.createElement(l,{key:e.persons[n].name,person:e.persons[n],deletePerson:e.deletePerson}));return t=function(e,t){var n=[];t=t.toLowerCase();for(var a=0;a<e.length;a++){e[a].props.person.name.toLowerCase().includes(t)&&n.push(e[a])}return n}(t,e.searchString),r.a.createElement("div",null,t)}function m(e){return r.a.createElement("div",null,"search: ",r.a.createElement("input",{value:e.value,onChange:e.handleSearchChange}))}function d(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))}var f=n(3),h=n.n(f),b="http://localhost:3001";var g={populatePersonListState:function(e,t){h.a.get("".concat(b,"/api/persons")).then((function(t){return e(t.data)})).catch((function(e){t("Fetching person listing failed for some reason.","error")}))},newPerson:function(e,t,n,a){return h.a.post("".concat(b,"/api/persons"),e).then((function(r){var o=[];o.push(e);var c=t.concat(o);return n(c),a("".concat(e.name," was added to the number list"),"passing"),r.data})).catch((function(t){a("Adding ".concat(e.name," to the system caused a problem with message ").concat(t),"error")}))},deletePerson:function(e,t,n){return h.a.delete("".concat(b,"/api/persons/").concat(e)).then((function(e){return n("".concat(t," was removed from the number list"),"passing"),e.data})).catch((function(e){404===e.response.status&&n("Deleting ".concat(t," from the list caused an error."),"error")}))},updateNumber:function(e,t,n,a){return h.a.put("".concat(b,"/").concat(e.id),e).then((function(r){var o=[];o.push(e);var c=t.concat(o);return n(c),a("".concat(e.name," number was updated"),"passing"),r.data})).catch((function(t){404===t.response.status&&a("".concat(e.name," has already been removed from the list"),"error")}))}};function v(e){return r.a.createElement("div",{style:(t=e.notificationType,"passing"===t?{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}:"error"===t?{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}:{})},e.notificationMessage);var t}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),f=l[0],h=l[1],b=Object(a.useState)(""),O=Object(s.a)(b,2),y=O[0],E=O[1],j=Object(a.useState)(""),P=Object(s.a)(j,2),S=P[0],C=P[1],N=Object(a.useState)(""),k=Object(s.a)(N,2),x=k[0],D=k[1],L=Object(a.useState)(""),B=Object(s.a)(L,2),T=B[0],z=B[1];function A(e,t){D(e),z(t),setTimeout((function(){z(""),D("")}),5e3)}return Object(a.useEffect)((function(){g.populatePersonListState(o,A)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{notificationType:T,notificationMessage:x}),r.a.createElement(m,{value:S,handleSearchChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(d,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){E(e.target.value)},newName:f,newNumber:y,addPerson:function(e){var t;if(e.preventDefault(),0===(t=n.filter((function(e){if(e.name===f)return f}))).length){var a={name:f,number:y};g.newPerson(a,n,o,A)}else{if(window.confirm("".concat(f," is already added to phonebook, do you want to replace the old number with a new one?"))){for(var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t[0],{number:y}),c=Object(u.a)(n),s=0;s<c.length;s++)c[s].name===f&&c.splice(s,1);g.updateNumber(r,c,o,A)}}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{persons:n,searchString:S,deletePerson:function(e,t){if(window.confirm("Do you want to remove ".concat(t,"?"))){g.deletePerson(e,t,A);for(var a=Object(u.a)(n),r=0;r<a.length;r++)a[r].id===e&&(a.splice(r,1),o(a))}}}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.54c7060a.chunk.js.map