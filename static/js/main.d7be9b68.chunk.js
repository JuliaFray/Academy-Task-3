(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{16:function(e,t,a){e.exports={allTasksWrapper:"AllTasks_allTasksWrapper__1UheL",allTasks:"AllTasks_allTasks__3jm6-",header:"AllTasks_header__YzbYR",headerText:"AllTasks_headerText__3foYd",headerLink:"AllTasks_headerLink__2oSo_",inputForm:"AllTasks_inputForm__1y5iu",tasks:"AllTasks_tasks__1glog"}},19:function(e,t,a){e.exports={allTasksWrapper:"Lists_allTasksWrapper__2REvb",allTasks:"Lists_allTasks__3M8dN",header:"Lists_header__1VL64",headerText:"Lists_headerText__3WRBx",headerLink:"Lists_headerLink__1qIC1",inputForm:"Lists_inputForm__2SpqJ",tasks:"Lists_tasks__2lp69"}},20:function(e,t,a){e.exports={form:"LoginForm_form__IPpdV",formWrapper:"LoginForm_formWrapper__1cpaO",text:"LoginForm_text__3Brut",checkbox:"LoginForm_checkbox__1mSLW",btn:"LoginForm_btn__IM4EY",linkWrapper:"LoginForm_linkWrapper__hxDC4",link:"LoginForm_link__ZZRpn"}},24:function(e,t,a){e.exports={list:"List_list__3-ERM",link:"List_link__YbwRo",btns:"List_btns__1cdxj"}},28:function(e,t,a){e.exports={task:"Task_task__2i8xg",state:"Task_state__3ZMHM",deleteBtn:"Task_deleteBtn__17owL",checkBtn:"Task_checkBtn__2ZdP8",text:"Task_text__Xthyq",high:"Task_high___AUQL",low:"Task_low__29NL3",done:"Task_done__1oz61"}},32:function(e,t,a){e.exports={header:"Header_header__3uznX",logout:"Header_logout__36Qlm",logoutText:"Header_logoutText__1wuky",logoutBtn:"Header_logoutBtn__dE7fp"}},37:function(e,t,a){e.exports={form:"InputForm_form__K2ZVr",text:"InputForm_text__3Icxu",addBtn:"InputForm_addBtn__1129H",isNow:"InputForm_isNow__1B2Di"}},38:function(e,t,a){e.exports={form:"RegForm_form__3CT8P",text:"RegForm_text__2OYST",checkbox:"RegForm_checkbox__aFTbp",btn:"RegForm_btn__39lHG"}},45:function(e,t,a){e.exports={form:"InputFormList_form__1PVH_",text:"InputFormList_text__1KX87",addBtn:"InputFormList_addBtn__3w8m6"}},57:function(e,t,a){e.exports={todo:"ToDoList_todo__1yxY9"}},59:function(e,t,a){e.exports=a(89)},64:function(e,t,a){},68:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(41),c=a.n(s),o=(a(64),a(7)),l=a(18),i=(a(68),a(4)),u=a(3),m=a.n(u),d=a(6),p=a(22),f=a(8),h={tasks:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TASK":return Object(p.a)(Object(p.a)({},e),{},{tasks:t.tasks.task});default:return e}},k=function(e){return{type:"SET-TASK",tasks:e}},b=a(21),E=a(37),v=a.n(E),g=function(e){var t=Object(b.useForm)(),a=t.register,n=t.handleSubmit,s=t.setValue;return r.a.createElement("form",{className:v.a.form,onSubmit:n((function(t){var a={taskText:t.taskText,isNow:t.isNow,isDone:"false"};e.useNewTask(a),s("taskText","")}))},r.a.createElement("input",{className:v.a.text,name:"taskText",ref:a,placeholder:"Enter your task"}),r.a.createElement("div",{className:v.a.isNow},r.a.createElement("label",{for:"isNow"},"\u0421\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c"),r.a.createElement("input",{name:"isNow",ref:a,id:"isNow",type:"checkbox"})),r.a.createElement("input",{className:v.a.addBtn,type:"submit",value:"ADD"}))},N=a(28),w=a.n(N),T=function(e){var t=e.task;if("false"==t.isDone){if(t.isNow)var a=w.a.high;else if(!t.isNow)a=w.a.low}else a=w.a.done;return Object(o.c)((function(e){return e.authPage.isAuth}))?r.a.createElement("div",{className:"".concat(w.a.task," + ").concat(a)},r.a.createElement("div",{className:w.a.text},t.taskText),"true"==t.isDone?r.a.createElement("button",{onClick:function(){return e.deleteTask(t.id)},className:w.a.deleteBtn},"Delete"):r.a.createElement("button",{onClick:function(){return function(t){var a=window.location.href,n=(a=a.split("/"))[a.length-1];t.isDone="true",e.checkTask(n,t)}(e.task)},className:w.a.checkBtn},"Check done")):r.a.createElement(i.a,{to:"/login"})},x=a(16),L=a.n(x),O=function(){var e=Object(o.c)((function(e){return e.taskPage.tasks})),t=Object(o.c)((function(e){return e.authPage.isAuth})),a=Object(o.b)();function s(e){var t=window.location.href,n=(t=t.split("/"))[t.length-1];a(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:f.database().ref("taskList").child(e).child("task").child(t).remove();case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,e))}function c(e,t){a(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r={},s=t.id,r[s]=t,f.database().ref("taskList").child(e).child("task").update(r);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,t))}function u(e){var t=window.location.href,n=(t=t.split("/"))[t.length-1];a(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=f.database().ref("task").push().key,s={},t.id=r,s[r]=t,f.database().ref("taskList").child(e).child("task").update(s);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,e))}if(Object(n.useEffect)((function(){var e=window.location.href,t=(e=e.split("/"))[e.length-1];a(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.database().ref("taskList/").on("value",(function(t){var n=t.val()[e];a(k(n))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]),!t)return r.a.createElement(i.a,{to:"/login"});var p=[];return p=e?Object.values(e):[],r.a.createElement("div",{className:L.a.allTasksWrapper},p.length>0?r.a.createElement("div",{className:L.a.allTasks},r.a.createElement("div",{className:L.a.header},r.a.createElement("h2",{className:L.a.headerText},"Active Tasks: ",p.filter((function(e){return!e.isDone})).length,r.a.createElement(l.b,{className:L.a.headerLink,to:"/taskList"},"back")," "),r.a.createElement("div",{className:L.a.inputForm},r.a.createElement(g,{useNewTask:u}))),r.a.createElement("div",{className:L.a.tasks},p.map((function(e){return r.a.createElement(T,{task:e,deleteTask:s,checkTask:c})})))):r.a.createElement("div",{className:L.a.allTasks},r.a.createElement("div",{className:L.a.header},r.a.createElement("h2",{className:L.a.headerText},"\u041f\u043e\u0434\u0437\u0430\u0434\u0430\u0447 \u043d\u0435\u0442",r.a.createElement(l.b,{className:L.a.headerLink,to:"/taskList"}," back ")),r.a.createElement("div",{className:L.a.inputForm},r.a.createElement(g,{useNewTask:u})))))},j={login:"login",isAuth:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},A=function(e,t){return{type:"SET-USER-DATA",payload:{login:e,isAuth:t}}},S=a(32),F=a.n(S),B=function(){var e=Object(o.c)((function(e){return e.authPage.isAuth})),t=Object(o.c)((function(e){return e.authPage.login})),a=Object(o.b)();return r.a.createElement("div",{className:F.a.header},r.a.createElement("div",{className:F.a.headerText},r.a.createElement("h1",null,"ToDoList")),r.a.createElement("div",{className:F.a.logoutBlock},e?r.a.createElement("div",{className:F.a.logout},r.a.createElement("p",{className:F.a.logoutText},t),r.a.createElement("div",null,r.a.createElement("button",{className:F.a.logoutBtn,onClick:function(){return a(function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.auth().signOut().then((function(){t(A("",!1))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"LogOut"))):r.a.createElement("p",null)))},D=a(45),I=a.n(D),P=function(e){var t=Object(b.useForm)(),a=t.register,n=t.handleSubmit,s=t.setValue;return r.a.createElement("form",{className:I.a.form,onSubmit:n((function(t){var a={taskListName:t.taskText};e.useNewTask(a),s("taskText","")}))},r.a.createElement("input",{className:I.a.text,name:"taskText",ref:a,placeholder:"Enter your task"}),r.a.createElement("input",{className:I.a.addBtn,value:"ADD",type:"submit"}))},W={lists:[{}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LIST":return Object(p.a)(Object(p.a)({},e),{},{lists:t.lists});default:return e}},C=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.database().ref("taskList").on("value",(function(e){var a=e.val();t({type:"SET-LIST",lists:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=a(13),U=a(24),V=a.n(U),q=function(e){return r.a.createElement("div",{className:"".concat(V.a.list)},r.a.createElement(l.b,{className:"".concat(V.a.link),to:"/taskList/".concat(e.list.id)},r.a.createElement("div",{className:V.a.text},e.list.taskListName)),r.a.createElement("div",{className:V.a.btns},r.a.createElement("button",Object(H.a)({className:V.a.update,onClick:function(){return e.updateList(e.list)}},"className",V.a.deleteBtn),"Update"),r.a.createElement("button",Object(H.a)({className:V.a.delete,onClick:function(){return e.deleteList(e.list.id)}},"className",V.a.deleteBtn),"Delete")))},M=a(19),Y=a.n(M),K=function(){var e=Object(o.c)((function(e){return e.listPage.lists})),t=Object(o.b)();function a(e){t(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.database().ref("taskList"),n=f.database().ref("taskList").push().key,r={},e.id=n,r[n]=e,f.database().ref("taskList").update(r),a(C());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}function s(e){t(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),f.database().ref("taskList").child(e).remove(),a(C());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}function c(){}if(Object(n.useEffect)((function(){t(C())}),[e.length]),!Object(o.c)((function(e){return e.authPage.isAuth})))return r.a.createElement(i.a,{to:"/login"});var l=[];return l=Object.values(e),r.a.createElement("div",{className:Y.a.allTasksWrapper},l.length>0?r.a.createElement("div",{className:Y.a.allTasks},r.a.createElement("div",{className:Y.a.header},r.a.createElement("h2",{className:Y.a.headerText},"All Tasks"),r.a.createElement("div",{className:Y.a.inputForm},r.a.createElement(P,{useNewTask:a}))),r.a.createElement("div",{className:Y.a.tasks},l.length>1?l.map((function(e){return r.a.createElement(q,{list:e,deleteList:s,updateList:c})})):r.a.createElement(q,{list:l[0],deleteList:s,updateList:c}))):r.a.createElement("div",{className:Y.a.allTasks},r.a.createElement("div",{className:Y.a.header},r.a.createElement("h2",null,"All Tasks: 0"),r.a.createElement("div",{className:Y.a.inputForm},r.a.createElement(P,{useNewTask:a})))))},Z=a(44),z=a(27),X=a(20),J=a.n(X),Q=z.a().shape({login:z.b().required(),password:z.b().required()}),G=function(){var e,t,a=Object(o.c)((function(e){return e.authPage.isAuth})),n=Object(o.b)(),s=Object(b.useForm)({resolver:Object(Z.yupResolver)(Q)}),c=s.register,u=s.handleSubmit,p=s.setValue,h=s.errors;return a?r.a.createElement(i.a,{to:"/taskList"}):r.a.createElement("form",{className:J.a.form,onSubmit:u((function(e){var t,a;n((t=e.login,a=e.password,e.rememberme,function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.auth().signInWithEmailAndPassword(t,a).catch((function(e){console.log(e)})),f.auth().onAuthStateChanged((function(e){console.log(e),e?e.email==t&&n(A(t,!0)):n(A("",!1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),p("login",""),p("password","")}))},r.a.createElement("div",{className:J.a.formWrapper},r.a.createElement("input",{name:"login",ref:c,className:J.a.text,type:"text",placeholder:"Enter login"}),r.a.createElement("p",null,null===(e=h.login)||void 0===e?void 0:e.message),r.a.createElement("input",{name:"password",ref:c,className:J.a.text,type:"password",placeholder:"Enter password"}),r.a.createElement("p",null,null===(t=h.password)||void 0===t?void 0:t.message),r.a.createElement("div",{className:J.a.checkbox},r.a.createElement("label",{for:"rememberme"},"Remember me"),r.a.createElement("input",{name:"rememberme",ref:c,className:J.a.check,type:"checkbox",id:"rememberme"})),r.a.createElement("input",{className:J.a.btn,type:"submit",value:"Login"})),r.a.createElement("div",{className:J.a.linkWrapper},r.a.createElement(l.b,{className:J.a.link,to:"/registration"},"Create account?")))},$=a(57),ee=a.n($),te=a(38),ae=a.n(te),ne=z.a().shape({login:z.b().required(),password:z.b().required()}),re=function(){var e,t,a=Object(o.c)((function(e){return e.authPage.isAuth})),n=Object(o.b)(),s=Object(b.useForm)({resolver:Object(Z.yupResolver)(ne)}),c=s.register,l=s.handleSubmit,u=s.setValue,p=s.errors;return a?r.a.createElement(i.a,{to:"/taskList"}):r.a.createElement("form",{className:ae.a.form,onSubmit:l((function(e){var t,a;n((t=e.login,a=e.password,function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.auth().createUserWithEmailAndPassword(t,a).catch((function(e){console.log(e)})),f.auth().onAuthStateChanged((function(e){console.log(e),e?e.email==t&&n(A(t,!0)):n(A("",!1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),u("login",""),u("password","")}))},r.a.createElement("h2",null,"Create account"),r.a.createElement("input",{name:"login",ref:c,className:ae.a.text,type:"text",placeholder:"Enter login"}),r.a.createElement("p",null,null===(e=p.login)||void 0===e?void 0:e.message),r.a.createElement("input",{name:"password",ref:c,className:ae.a.text,type:"password",placeholder:"Enter password"}),r.a.createElement("p",null,null===(t=p.password)||void 0===t?void 0:t.message),r.a.createElement("input",{className:ae.a.btn,type:"submit",value:"Create account"}))},se=Object(i.f)((function(){return r.a.createElement("div",{className:ee.a.todo},r.a.createElement(B,null),r.a.createElement(i.b,{path:"/taskList/:taskId",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(i.b,{exact:!0,path:"/taskList",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(i.b,{path:"/login",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(i.b,{path:"/registration",render:function(){return r.a.createElement(re,null)}}))})),ce=a(31),oe=a(58),le=Object(ce.c)({taskPage:_,listPage:R,authPage:y}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,ue=Object(ce.e)(le,ie(Object(ce.a)(oe.a))),me=function(){return r.a.createElement(o.a,{store:ue},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.initializeApp({apiKey:"AIzaSyBwbpTx7d1a0DUP2jHqAaKkZhl7sjW6QPA",authDomain:"todolist-3009f.firebaseapp.com",databaseURL:"https://todolist-3009f.firebaseio.com",projectId:"todolist-3009f",storageBucket:"todolist-3009f.appspot.com",messagingSenderId:"907810208879",appId:"1:907810208879:web:6d6bd6059a7bb44c3ce19a"}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.d7be9b68.chunk.js.map