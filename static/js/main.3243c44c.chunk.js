(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(e,t,a){e.exports={task:"Task_task__2i8xg",state:"Task_state__3ZMHM",btns:"Task_btns__3FJDc",text:"Task_text__Xthyq",high:"Task_high___AUQL",low:"Task_low__29NL3",done:"Task_done__1oz61",newName:"Task_newName__1piZk"}},17:function(e,t,a){e.exports={allTasksWrapper:"AllTasks_allTasksWrapper__1UheL",allTasks:"AllTasks_allTasks__3jm6-",header:"AllTasks_header__YzbYR",headerText:"AllTasks_headerText__3foYd",headerLink:"AllTasks_headerLink__2oSo_",inputForm:"AllTasks_inputForm__1y5iu",tasks:"AllTasks_tasks__1glog"}},207:function(e,t,a){e.exports={todo:"ToDoList_todo__1yxY9"}},208:function(e,t,a){e.exports=a(396)},22:function(e,t,a){e.exports={list:"List_list__3-ERM",link:"List_link__YbwRo",btns:"List_btns__1cdxj",newName:"List_newName__19D8Q",high:"List_high__3_aHN",low:"List_low__1W-K6"}},26:function(e,t,a){e.exports={allTasksWrapper:"Lists_allTasksWrapper__2REvb",allTasks:"Lists_allTasks__3M8dN",header:"Lists_header__1VL64",headerText:"Lists_headerText__3WRBx",headerLink:"Lists_headerLink__1qIC1",inputForm:"Lists_inputForm__2SpqJ",tasks:"Lists_tasks__2lp69"}},34:function(e,t,a){e.exports={form:"LoginForm_form__IPpdV",formWrapper:"LoginForm_formWrapper__1cpaO",text:"LoginForm_text__3Brut",checkbox:"LoginForm_checkbox__1mSLW",btn:"LoginForm_btn__IM4EY",linkWrapper:"LoginForm_linkWrapper__hxDC4",link:"LoginForm_link__ZZRpn"}},35:function(e,t,a){e.exports={form:"RegForm_form__3CT8P",formWrapper:"RegForm_formWrapper__1yt4d",text:"RegForm_text__2OYST",checkbox:"RegForm_checkbox__aFTbp",btn:"RegForm_btn__39lHG",linkWrapper:"RegForm_linkWrapper__2iD1h",link:"RegForm_link__3uK-D"}},384:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(87),l=a.n(s),i=a(129),o=a.n(i),c=(a(213),a(215),a(3)),u=a(89),m=a(2),d=a(20),f=(a(384),a(41)),h=a(21),p=function(e){return{type:"SET-TASK",tasks:e}};function _(e,t,a){return function(n,r,s){e||(e=localStorage.getItem("uid"));var l={};return l[a.id]=a,s().database().ref(e).child("taskList").child(t).child("task").update(l)}}var g={tasks:p.SET_TASK},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TASK":return Object.assign({},e,Object(h.a)(Object(h.a)({},e),{},{tasks:t.tasks.task}));default:return e}},b=function(e){return{type:"SET-LIST",lists:e}};function E(e,t){return function(a,n,r){e||(e=localStorage.getItem("uid"));var s={};return s[t.id]=t,r().database().ref(e).child("taskList").update(s)}}var v={lists:b.SET_LIST},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LIST":return Object.assign({},e,Object(h.a)(Object(h.a)({},e),{},{lists:t.lists}));default:return e}},T=function(e,t,a){return{type:"SET-USER-DATA",payload:{login:e,isAuth:t,userUid:a}}},w=function(e){return{type:"SET-IS-AUTH",isAuth:e}};function x(e,t){return function(a,n,r){return r().auth().signInWithEmailAndPassword(e,t).then((function(){a(function(e){return function(t,a,n){var r=n().auth().currentUser;r&&r.email===e&&(localStorage.setItem("uid",r.uid),localStorage.setItem("isAuth","true"),localStorage.setItem("login",e),t(T(e,!0,r.uid)),t(w(!0)))}}(e))}))}}var S={payload:T.SET_USER_DATA,login:"",isAuth:T.SET_IS_AUTH,userUid:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object.assign({},e,Object(h.a)(Object(h.a)({},e),t.payload));case"SET-IS-AUTH":return Object.assign({},e,Object(h.a)(Object(h.a)({},e),{},{isAuth:t.isAuth}));default:return e}},j=[a(203).a.withExtraArgument(u.getFirebase)],O=Object(f.c)({taskPage:k,listPage:N,authPage:L}),I=window&&window.__INITIAL_STATE__||f.d,A=Object(f.e)(O,I(f.a.apply(void 0,j))),y=a(42),F=a.n(y),B=function(){var e=localStorage.getItem("isAuth"),t=localStorage.getItem("login"),a=Object(c.b)(),n=function(){a((function(e,t,a){return localStorage.setItem("uid",""),localStorage.setItem("isAuth","false"),localStorage.setItem("login",""),a().auth().signOut().then((function(){e(T("",!1,"")),e(w(!1))}))}))};return r.a.createElement("div",{className:F.a.header},r.a.createElement("div",{className:F.a.headerText},r.a.createElement("h1",null,"ToDoList")),r.a.createElement("div",{className:F.a.logoutBlock},"true"===e?r.a.createElement("div",{className:F.a.logout},r.a.createElement("p",{className:F.a.logoutText},t),r.a.createElement("div",null,r.a.createElement("button",{className:F.a.logoutBtn,onClick:function(){return n()}},"LogOut"))):r.a.createElement("p",null)))},R=a(19),D=a(63),W=a.n(D),C=a(7),P=a(25),U=C.a().shape({taskText:C.b().required().max("20").min("1")}),H=function(e){var t,a,n=Object(R.useForm)({resolver:Object(P.yupResolver)(U)}),s=n.register,l=n.handleSubmit,i=n.setValue,o=n.errors;return r.a.createElement("form",{className:W.a.form,onSubmit:l((function(t){e.onSubmit(t),i("taskText","")}))},r.a.createElement("input",{className:W.a.text,name:"taskText",ref:s,placeholder:"Enter your task"}),r.a.createElement("div",{className:W.a.isNow},r.a.createElement("label",{for:"isNow"},"\u0421\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c"),r.a.createElement("input",{name:"isNow",ref:s,id:"isNow",type:"checkbox"})),(null===(t=o.taskText)||void 0===t?void 0:t.message)?r.a.createElement("p",null,null===(a=o.taskText)||void 0===a?void 0:a.message):r.a.createElement("input",{className:W.a.addBtn,value:"ADD",type:"submit"}))},q=a(14),K=a(10),V=a.n(K),Y=C.a().shape({newText:C.b().required().min("1").max("10")}),M=function(e){var t=e.task,a=Object(R.useForm)({resolver:Object(P.yupResolver)(Y),defaultValues:{newText:t.taskText}}),s=a.register,l=a.handleSubmit,i=(a.errors,Object(n.useState)(!1)),o=Object(q.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)(e.taskName),f=Object(q.a)(d,2),h=f[0],p=f[1],g=Object(c.b)(),k=function(){m(!0)};if(t.isDone)b=V.a.done;else if(t.isNow)var b=V.a.high;else if(!t.isNow)var b=V.a.low;return r.a.createElement("div",null,u?r.a.createElement("form",{onBlur:l((function(t){var a=e.task,n=window.location.href,r=(n=n.split("/"))[n.length-1];a.taskText=h||t.newText,g(_(e.uid,r,a))}))},r.a.createElement("input",{ref:s,name:"newText",className:V.a.newName,onChange:function(e){var t=e.target.value;p(t)},autoFocus:!0,value:h,onBlur:function(){m(!1)}})):r.a.createElement("div",{className:"".concat(V.a.task," + ").concat(b)},r.a.createElement("div",{className:"".concat(V.a.text)},t.taskText),"true"===t.isDone?r.a.createElement("div",{className:V.a.btns},r.a.createElement("button",{className:V.a.checkBtn,onClick:function(){return k()}},"Rename"),r.a.createElement("button",{className:V.a.changeBtn,onClick:function(){return e.changeIsDone(t)}},"Check Undone"),r.a.createElement("button",{onClick:function(){return e.deleteTask(t.id)},className:V.a.deleteBtn},"Delete")):r.a.createElement("div",{className:V.a.btns},r.a.createElement("button",{className:V.a.checkBtn,onClick:function(){return k()}},"Rename"),r.a.createElement("button",{className:V.a.changeBtn,onClick:function(){return e.changeIsNow(t)}},"Change Priority"),r.a.createElement("button",{onClick:function(){return function(t){var a=window.location.href,n=(a=a.split("/"))[a.length-1];t.isDone="true",e.checkTask(n,t)}(e.task)},className:V.a.checkBtn},"Check done"))))},Z=a(17),z=a.n(Z),J=function(){var e=Object(c.c)((function(e){return e.taskPage.tasks})),t=Object(c.c)((function(e){return e.authPage.userUid})),a=localStorage.getItem("isAuth"),s=Object(c.b)();function l(e){var a=window.location.href,n=(a=a.split("/"))[a.length-1];s(function(e,t,a){return function(n,r,s){return e||(e=localStorage.getItem("uid")),s().database().ref(e).child("taskList").child(t).child("task").child(a).remove()}}(t,n,e))}function i(e,a){s(function(e,t,a){return function(n,r,s){e||(e=localStorage.getItem("uid"));var l={};return l[a.id]=a,s().database().ref(e).child("taskList").child(t).child("task").update(l)}}(t,e,a))}function o(e){var a=!e.isNow;e.isNow=a;var n=window.location.href,r=(n=n.split("/"))[n.length-1];s(_(t,r,e))}function u(e){var a=!e.isDone;e.isDone=a;var n=window.location.href,r=(n=n.split("/"))[n.length-1];s(_(t,r,e))}Object(n.useEffect)((function(){var e=window.location.href,a=(e=e.split("/"))[e.length-1];s(function(e,t){return function(a,n,r){return e||(e=localStorage.getItem("uid")),r().database().ref(e).child("taskList").child(t).on("value",(function(e){var t=e.val();a(p(t))}))}}(t,a))}),[]);var f=Object(m.f)();"false"===a&&f.push("/");var h=[];h=e?Object.values(e):[];var g=function(e){var a={taskText:e.taskText,isNow:e.isNow,isDone:!1},n=window.location.href,r=(n=n.split("/"))[n.length-1];s(function(e,t,a){return function(n,r,s){e||(e=localStorage.getItem("uid"));var l=s().database().ref("task").push().key,i={};return a.id=l,i[l]=a,s().database().ref(e).child("taskList").child(t).child("task").update(i)}}(t,r,a))};return r.a.createElement("div",{className:z.a.allTasksWrapper},h.length>0?r.a.createElement("div",{className:z.a.allTasks},r.a.createElement("div",{className:z.a.header},r.a.createElement("h2",{className:z.a.headerText},"Active Tasks: ",h.filter((function(e){return"false"===e.isDone})).length,r.a.createElement(d.b,{className:z.a.headerLink,to:"/taskList"},"back")," "),r.a.createElement("div",{className:z.a.inputForm},r.a.createElement(H,{onSubmit:g}))),r.a.createElement("div",{className:z.a.tasks},h.map((function(e){return r.a.createElement(M,{task:e,changeIsNow:o,deleteTask:l,checkTask:i,changeIsDone:u,uid:t})})))):r.a.createElement("div",{className:z.a.allTasks},r.a.createElement("div",{className:z.a.header},r.a.createElement("h2",{className:z.a.headerText}," Active Tasks: 0",r.a.createElement(d.b,{className:z.a.headerLink,to:"/taskList"}," back ")),r.a.createElement("div",{className:z.a.inputForm},r.a.createElement(H,{onSubmit:g})))))},Q=a(22),X=a.n(Q),G=C.a().shape({newText:C.b().required().max("20").min("1")}),$=function(e){var t=Object(R.useForm)({resolver:Object(P.yupResolver)(G),defaultValues:{newText:e.list.taskListName}}),a=t.register,s=t.handleSubmit,l=(t.errors,Object(c.c)((function(e){return e.listPage.lists.taskListName}))),i=Object(n.useState)(!1),o=Object(q.a)(i,2),u=o[0],m=o[1],f=Object(n.useState)(l),h=Object(q.a)(f,2),p=h[0],_=h[1],g=Object(c.b)(),k=e.list;if(k.isNow)var b=X.a.high;else if(!k.isNow)b=X.a.low;return r.a.createElement("form",{onBlur:s((function(t){var a=e.list;a.taskListName=p||t.newText,g(E(e.uid,a))}))},u?r.a.createElement("input",{ref:a,name:"newText",className:X.a.newName,onChange:function(e){var t=e.target.value;_(t)},autoFocus:!0,value:p,onBlur:function(){m(!1)},type:"text"}):r.a.createElement("div",{className:"".concat(X.a.list," + ").concat(b)},r.a.createElement(d.b,{className:"".concat(X.a.link),to:"/taskList/".concat(e.list.id)},r.a.createElement("div",{className:X.a.text},e.list.taskListName,e.list.task?" ( "+Object.values(e.list.task).length+" )":"")),r.a.createElement("div",{className:X.a.btns},r.a.createElement("button",{className:X.a.updateBtn,onClick:function(){return e.list.taskListName,void m(!0)}},"Rename"),r.a.createElement("button",{className:X.a.changeBtn,onClick:function(){return e.changeIsNow(e.list)}},"Change Priority"),r.a.createElement("button",{className:X.a.deleteBtn,onClick:function(){return e.deleteList(e.list.id)}},"Delete"))))},ee=a(26),te=a.n(ee),ae=function(){var e=Object(c.c)((function(e){return e.listPage.lists})),t=localStorage.getItem("uid"),a=localStorage.getItem("isAuth"),s=Object(c.c)((function(e){return e.authPage.login})),l=Object(m.f)(),i=Object(c.b)();function o(e){i(function(e,t){return function(a,n,r){return e||(e=localStorage.getItem("uid")),r().database().ref(e).child("taskList").child(t).remove()}}(t,e))}function u(e){var a=!e.isNow;e.isNow=a,i(E(t,e))}Object(n.useEffect)((function(){i(function(e){return function(t,a,n){return e||(e=localStorage.getItem("uid")),n().database().ref(e).child("taskList").on("value",(function(e){var a=e.val();t(b(a))}))}}(t))}),[]),Object(n.useEffect)((function(){"false"===a&&l.push("/")}),[s]),"false"===a&&l.push("/");var d=[];d=e?Object.values(e):[];var f=function(e){var a={taskListName:e.taskText,isNow:e.isNow};i(function(e,t){return function(a,n,r){e||(e=localStorage.getItem("uid")),r().database().ref(e).child("taskList");var s=r().database().ref(e).child("taskList").push().key,l={};return t.id=s,l[s]=t,r().ref(e).child("taskList").update(l)}}(t,a))};return r.a.createElement("div",{className:te.a.allTasksWrapper},d.length>0?r.a.createElement("div",{className:te.a.allTasks},r.a.createElement("div",{className:te.a.header},r.a.createElement("h2",{className:te.a.headerText},"All Tasks"),r.a.createElement("div",{className:te.a.inputForm},r.a.createElement(H,{onSubmit:f}))),r.a.createElement("div",{className:te.a.tasks},d.length>1?d.map((function(e){return r.a.createElement($,{list:e,changeIsNow:u,deleteList:o,uid:t})})):r.a.createElement($,{list:d[0],changeIsNow:u,deleteList:o,uid:t}))):r.a.createElement("div",{className:te.a.allTasks},r.a.createElement("div",{className:te.a.header},r.a.createElement("h2",null,"All Tasks: 0"),r.a.createElement("div",{className:te.a.inputForm},r.a.createElement(H,{onSubmit:f})))))},ne=a(34),re=a.n(ne),se=C.a().shape({login:C.b().required().email().max("20"),password:C.b().required().min("6").max("20")}),le=function(){var e,t,a=localStorage.getItem("isAuth"),n=Object(c.b)(),s=Object(R.useForm)({resolver:Object(P.yupResolver)(se)}),l=s.register,i=s.handleSubmit,o=s.setValue,u=s.errors;return"true"===a?r.a.createElement(m.a,{to:"/taskList"}):r.a.createElement("form",{className:re.a.form,onSubmit:i((function(e){n(x(e.login,e.password,e.rememberme)),o("login",""),o("password","")}))},r.a.createElement("div",{className:re.a.formWrapper},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{name:"login",ref:l,className:re.a.text,type:"text",placeholder:"Enter login"}),r.a.createElement("p",null,null===(e=u.login)||void 0===e?void 0:e.message),r.a.createElement("input",{name:"password",ref:l,className:re.a.text,type:"password",placeholder:"Enter password"}),r.a.createElement("p",null,null===(t=u.password)||void 0===t?void 0:t.message),r.a.createElement("input",{className:re.a.btn,type:"submit",value:"Login"}),r.a.createElement("div",{className:re.a.linkWrapper},r.a.createElement(d.b,{className:re.a.link,to:"/registration"},"Create account?"))))},ie=a(13),oe=a(35),ce=a.n(oe),ue=C.a().shape(Object(ie.a)({llogin:C.b().required(),password:C.b().required(),login:C.b().email()},"password",C.b().min("6"))),me=function(){var e,t,a=Object(c.c)((function(e){return e.authPage.isAuth})),n=Object(c.b)(),s=Object(R.useForm)({resolver:Object(P.yupResolver)(ue)}),l=s.register,i=s.handleSubmit,o=s.setValue,u=s.errors;return a?r.a.createElement(m.a,{to:"/taskList"}):r.a.createElement("form",{className:ce.a.form,onSubmit:i((function(e){var t,a;n((t=e.login,a=e.password,function(e,n,r){return r().auth().createUserWithEmailAndPassword(t,a).then((function(){e(x(t,a))}))})),o("login",""),o("password","")}))},r.a.createElement("div",{className:ce.a.formWrapper},r.a.createElement("h2",null,"Create account"),r.a.createElement("input",{name:"login",ref:l,className:ce.a.text,type:"text",placeholder:"Enter login"}),r.a.createElement("p",null,null===(e=u.login)||void 0===e?void 0:e.message),r.a.createElement("input",{name:"password",ref:l,className:ce.a.text,type:"password",placeholder:"Enter password"}),r.a.createElement("p",null,null===(t=u.password)||void 0===t?void 0:t.message),r.a.createElement("input",{className:ce.a.btn,type:"submit",value:"Create account"}),r.a.createElement("div",{className:ce.a.linkWrapper},r.a.createElement(d.b,{className:ce.a.link,to:"/"},"Login?"))))},de=a(207),fe=a.n(de),he={apiKey:"AIzaSyBwbpTx7d1a0DUP2jHqAaKkZhl7sjW6QPA",authDomain:"todolist-3009f.firebaseapp.com",databaseURL:"https://todolist-3009f.firebaseio.com",projectId:"todolist-3009f",storageBucket:"todolist-3009f.appspot.com",messagingSenderId:"907810208879",appId:"1:907810208879:web:6d6bd6059a7bb44c3ce19a"};o.a.initializeApp(he);var pe=Object(m.g)((function(){return r.a.createElement("div",{className:fe.a.todo},r.a.createElement(B,null),r.a.createElement(m.b,{path:"/taskList/:taskId",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(m.b,{exact:!0,path:"/taskList",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(m.b,{path:"/registration",render:function(){return r.a.createElement(me,null)}}))})),_e=function(){return r.a.createElement(c.a,{store:A},r.a.createElement(u.ReactReduxFirebaseProvider,{firebase:o.a,config:he,dispatch:A.dispatch},r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(pe,null)))))};a(395),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports={header:"Header_header__3uznX",logout:"Header_logout__36Qlm",logoutText:"Header_logoutText__1wuky",logoutBtn:"Header_logoutBtn__dE7fp"}},63:function(e,t,a){e.exports={form:"InputForm_form__K2ZVr",text:"InputForm_text__3Icxu",addBtn:"InputForm_addBtn__1129H",isNow:"InputForm_isNow__1B2Di"}}},[[208,1,2]]]);
//# sourceMappingURL=main.3243c44c.chunk.js.map