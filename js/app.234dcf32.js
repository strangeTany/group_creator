(function(t){function e(e){for(var a,s,l=e[0],i=e[1],u=e[2],p=0,d=[];p<l.length;p++)s=l[p],o[s]&&d.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=n("bb71");n("da64");a["default"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-light"},[t._v("Группы")])]),n("v-spacer"),n("span",{staticClass:"mr-2"},[t._v("До следующего обновления "+t._s(t.updateTime)+" сек.")])],1),n("v-content",[n("Groups")],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-text-field",{staticClass:"font-weight-light ",attrs:{label:"Название группы",clearable:"",outline:"",color:"orange lighten-1"},model:{value:t.newGroupName,callback:function(e){t.newGroupName=e},expression:"newGroupName"}})],1),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-btn",{attrs:{outline:""},on:{click:t.addNewGroup}},[t._v("Создать")])],1),n("v-expansion-panel",{attrs:{expand:""}},t._l(t.getGroups,function(e,a){return n("v-expansion-panel-content",{key:a},[n("div",{attrs:{slot:"header"},slot:"header"},[n("v-layout",{attrs:{"fill-height":"",wrap:""}},[n("v-flex",{staticClass:"name"},[n("span",{staticClass:"font-weight-light"},[t._v(t._s(e))])]),n("v-flex",{attrs:{xs1:"","aling-self-end":""}},[n("v-btn",{staticClass:"delete-btn",attrs:{flat:"",icon:""},nativeOn:{click:function(e){return e.stopPropagation(),t.removeGroup(a)}}},[n("v-icon",[t._v("delete")])],1)],1)],1)],1),n("v-card",{staticClass:"grey darken-2"},[n("v-layout",{attrs:{"align-content-space-around":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-text-field",{staticClass:"font-weight-light new-note",attrs:{color:"orange lighten-1",clearable:"",label:"Новая запись"},model:{value:t.newNotes[a],callback:function(e){t.$set(t.newNotes,a,e)},expression:"newNotes[index]"}})],1),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-btn",{staticClass:"create-btn",attrs:{outline:""},on:{click:function(e){return t.addNewNote(a)}}},[t._v("Создать")])],1)],1)],1),t._l(t.allNotes[a],function(e,o){return n("v-card",{key:o,staticClass:"grey darken-2"},[n("v-divider",{attrs:{light:""}}),n("v-layout",{attrs:{"fill-height":"",wrap:""}},[n("v-flex",{attrs:{xs11:""}},[n("v-card-text",{staticClass:"notes"},[t._v(t._s(e))])],1),n("v-flex",{attrs:{xs1:"","aling-self-end":""}},[n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return t.removeNote(a,o)}}},[n("v-icon",[t._v("close")])],1)],1)],1)],1)})],2)}),1)],1)],1)},i=[],u=n("2f62"),c=n("0e44");a["default"].use(u["a"]);var p=new u["a"].Store({plugins:[Object(c["a"])()],state:{updateTime:5,groups:[],notes:new Array},mutations:{countDown(t){0!=t.updateTime?t.updateTime--:(this.commit("mixUp"),t.updateTime=5)},addNewGroup(t,e){t.groups.push(e),t.notes.push(new Array)},addNewNote(t,e){t.notes[e.groupId].push(e.note),console.log(e.note)},deleteGroup(t,e){t.groups.splice(e,1),t.notes.splice(e,1)},deleteNote(t,e){t.notes.splice(e.noteId,1)},mixUp(t){t.notes.length>0&&(t.notes.push(t.notes[0]),t.notes.splice(0,1))}},actions:{}}),d={data:()=>({newGroupName:null,newNotes:{},allGroups:[],allNotes:[]}),methods:{addNewGroup(){p.commit("addNewGroup",this.newGroupName),this.newGroupName=null,this.allGroups=p.state.groups,this.allNotes=p.state.notes},removeGroup(t){p.commit("deleteGroup",t),this.allGroups=p.state.groups,this.allNotes=p.state.notes},removeNote(t,e){p.commit("deleteNote",{groupName:t,noteId:e}),this.allGroups=p.state.groups,this.allNotes=p.state.notes},addNewNote(t){p.commit("addNewNote",{groupId:t,note:this.newNotes[t]}),this.newNotes[t]=null,this.allGroups=p.state.groups,this.allNotes=p.state.notes}},computed:{getGroups(){return this.allGroups},getNotes(){return this.allNotes}},mounted:function(){this.allGroups=p.state.groups,this.allNotes=p.state.notes}},f=d,v=(n("93dd"),n("2877")),m=n("6544"),h=n.n(m),g=n("8336"),w=n("b0af"),x=n("99d9"),b=n("a523"),N=n("ce7e"),y=n("cd55"),G=n("49e2"),_=n("0e8f"),C=n("132d"),V=n("a722"),T=n("2677"),k=Object(v["a"])(f,l,i,!1,null,null,null),O=k.exports;h()(k,{VBtn:g["a"],VCard:w["a"],VCardText:x["a"],VContainer:b["a"],VDivider:N["a"],VExpansionPanel:y["a"],VExpansionPanelContent:G["a"],VFlex:_["a"],VIcon:C["a"],VLayout:V["a"],VTextField:T["a"]});var j={name:"App",components:{Groups:O},data(){return{}},mounted:function(){setInterval(()=>p.commit("countDown"),1e3)},computed:{updateTime(){return p.state.updateTime}}},P=j,S=n("7496"),I=n("549c"),A=n("9910"),E=n("71d9"),M=n("2a7f"),$=Object(v["a"])(P,r,s,!1,null,null,null),D=$.exports;h()($,{VApp:S["a"],VContent:I["a"],VSpacer:A["a"],VToolbar:E["a"],VToolbarTitle:M["a"]});n("d1e7");var F=n("ce5b"),J=n.n(F);a["default"].use(J.a,{iconfont:"md"}),a["default"].config.productionTip=!1,new a["default"]({store:p,render:function(t){return t(D)}}).$mount("#app")},"93dd":function(t,e,n){"use strict";var a=n("ee4c"),o=n.n(a);o.a},ee4c:function(t,e,n){}});
//# sourceMappingURL=app.234dcf32.js.map