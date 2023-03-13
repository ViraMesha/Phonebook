"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[798],{8445:function(n,e,r){r.d(e,{z:function(){return a}});var o,t=r(168),a=r(7691).ZP.button(o||(o=(0,t.Z)(["\n  font-size: large;\n  display: inline-block;\n  padding: 15px 25px;\n  color: white;\n  background-color: #654ea3;\n  background-image: rgb(101, 78, 163);\n  border: 1px solid #654ea3;\n  border-radius: 1rem;\n  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,\n    rgba(46, 54, 80, 0.075) 0 1px 1px;\n  cursor: pointer;\n  width: 200px;\n  align-self: center;\n  transition: color 500ms ease-in-out, background-color 500ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #654ea3;\n    background-color: white;\n  }\n"])))},9798:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var o,t,a,i,s,c,d=r(2791),u=r(9434),l=r(1780),p=r(5206),x=r(168),b=r(7691),m=b.ZP.form(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  gap: 30px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  border-radius: 5px;\n  margin: 40px 0px;\n"]))),h=r(8445),g=r(3634),f=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},y=function(n){return n.filter},j=r(3329),k=function(){var n=(0,u.I0)(),e=(0,u.v9)(f);return(0,j.jsxs)(m,{onSubmit:function(r){r.preventDefault();var o=r.target;e.find((function(n){return n.name.toLowerCase()===o.elements.name.value.toLowerCase()}))?p.Am.warn("".concat(o.elements.name.value," is already in contacts.")):(n((0,g.uK)({name:o.elements.name.value,number:o.elements.number.value})),p.Am.success("Successully added to your phonebook"),o.reset())},children:[(0,j.jsx)(l.Z,{label:"Name",variant:"outlined",color:"secondary",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,j.jsx)(l.Z,{label:"Number",variant:"outlined",color:"secondary",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,j.jsx)(h.z,{type:"submit",children:"Add contact"})]})},Z=b.ZP.label(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #1a3b5d;\n"]))),C=b.ZP.input(a||(a=(0,x.Z)(["\n  width: 311px;\n  height: 20px;\n  padding: 5px;\n  box-shadow: none;\n  border: 1px solid #ced6e0;\n  border-radius: 5px;\n  background: none;\n  color: #1a3b5d;\n  outline: none;\n  margin-bottom: 20px;\n  transition: border-color 0.3s ease-in-out;\n\n  &:hover,\n  &:focus {\n    border-color: #654ea3;\n  }\n  &:focus {\n    box-shadow: 0px 10px 20px -13px rgb(32 56 117 / 35%);\n  }\n"]))),P=r(4808),z=function(){var n=(0,u.I0)(),e=(0,u.v9)(y);return(0,j.jsxs)(Z,{children:["Find contacts by name",(0,j.jsx)(C,{type:"text",onChange:function(e){n((0,P.T)(e.target.value))},value:e})]})},A=b.ZP.li(i||(i=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),_=b.ZP.button(s||(s=(0,x.Z)(["\n  padding: 5px;\n  width: 70px;\n  color: white;\n  background-color: #4d4ae8;\n  background-image: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.15),\n    rgba(255, 255, 255, 0)\n  );\n  border: 1px solid #4d4ae8;\n  border-radius: 1rem;\n  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,\n    rgba(46, 54, 80, 0.075) 0 1px 1px;\n  cursor: pointer;\n  align-self: center;\n  transition: color 500ms ease-in-out, background-color 500ms ease-in-out;\n  &:hover,\n  &:focus {\n    color: #4d4ae8;\n    background-color: white;\n  }\n"]))),L=function(n){var e=n.name,r=n.number,o=n.onDelete;return(0,j.jsxs)(A,{children:[(0,j.jsxs)("div",{children:[e,": ",r]}),(0,j.jsx)(_,{onClick:o,children:"Delete"})]})},D=b.ZP.ul(c||(c=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 323px;\n  gap: 10px;\n  border-radius: 5px;\n"]))),F=function(){var n=(0,u.v9)(f),e=(0,u.v9)(y),r=(0,u.I0)(),o=function(){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}();return(0,j.jsx)(j.Fragment,{children:n.length>0?(0,j.jsx)(D,{children:o.map((function(n){var e=n.id,o=n.name,t=n.number;return(0,j.jsx)(L,{name:o,number:t,onDelete:function(){return r((0,g.GK)(e))}},e)}))}):(0,j.jsx)("p",{children:" Your phonebook is empty. Please add a contact."})})},I=function(){var n=(0,u.I0)(),e=(0,u.v9)(v),r=(0,u.v9)(w);return(0,d.useEffect)((function(){n((0,g.yF)())}),[n]),(0,j.jsxs)("div",{style:{maxWidth:"450px",margin:"0 auto"},children:[e&&!r&&(0,j.jsx)("b",{children:"Request in progress..."}),(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(k,{}),(0,j.jsx)("h2",{style:{fontSize:"34px",marginBottom:"10px"},children:"Contacts"}),(0,j.jsx)(z,{}),(0,j.jsx)(F,{})]})}}}]);
//# sourceMappingURL=798.aee80913.chunk.js.map