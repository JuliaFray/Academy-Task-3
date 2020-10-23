(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(41),c=a.n(s),i=(a(76),a(10)),o=a(15),u=(a(80),a(4)),l=a(3),m=a.n(l),d=a(7),f=a(6),p=a(12),k=a(64).create({baseURL:"http://localhost:3000",credentials:"include"}),h=function(e){return k.post("list",e).then((function(e){return e.data}))},_=function(e,t){return k.put("list/".concat(e),t).then((function(e){return e.data}))},b=function(e){return k.delete("list/".concat(e)).then((function(e){return e.data}))},E=function(e,t){return k.patch("taskList/".concat(e),t).then((function(e){return e.data}))},v=a(20),w={tasks:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TASK":return Object(p.a)(Object(p.a)({},e),{},{tasks:t.tasks.task});case"ADD-TASK":var a={id:3,taskName:t.newTaskText,isNow:t.isNow};return Object(p.a)(Object(p.a)({},e),{},{tasks:[].concat(Object(f.a)(e.tasks),[a])});case"UPDATE-TASK-TEXT":return Object(p.a)(Object(p.a)({},e),{},{newTaskText:t.newTaskText});default:return e}},N=function(e){return{type:"SET-TASK",tasks:e}},x=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.database().ref("taskList/").on("value",(function(t){var n=t.val()[e];a(N(n))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=a(28),L=a(44),O=a.n(L),j=function(e){var t=Object(g.useForm)(),a=t.register,n=t.handleSubmit,s=t.setValue;return r.a.createElement("form",{className:O.a.form,onSubmit:n((function(t){var a={taskText:t.taskText,isNow:t.isNow,done:"false"};e.useNewTask(a),s("taskText","")}))},r.a.createElement("input",{className:O.a.text,name:"taskText",ref:a,placeholder:"enter your task"}),r.a.createElement("label",{for:"isNow"},"\u0421\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c"),r.a.createElement("input",{name:"isNow",ref:a,id:"isNow",type:"checkbox"}),r.a.createElement("input",{className:O.a.addBtn,value:"ADD",type:"submit"}))},A=a(26),y=a.n(A),D=function(e){var t=e.task;if(t.isDone)a=y.a.done;else if(t.isNow)var a=y.a.high;else if(!t.isNow)var a=y.a.low;return Object(i.c)((function(e){return e.authPage.isAuth}))?r.a.createElement("div",{className:"".concat(y.a.task," + ").concat(a)},r.a.createElement("div",{className:y.a.text},t.taskName),t.isDone?r.a.createElement("button",{onClick:function(){return e.deleteTask(t.id)},className:y.a.deleteBtn},"Delete"):r.a.createElement("button",{onClick:function(){return function(t){t.isDone="true",e.checkTask(t.id,t)}(e.task)},className:y.a.checkBtn},"Check done")):r.a.createElement(u.a,{to:"/login"})},S=a(22),I=a.n(S),F=function(){var e=Object(i.c)((function(e){return e.taskPage.tasks})),t=Object(i.c)((function(e){return e.authPage.isAuth})),a=Object(i.b)();function s(e){a(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:a(x());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}function c(e,t){a(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_(e,t);case 2:n(x());case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,t))}return Object(n.useEffect)((function(){var e=window.location.href,t=(e=e.split("/"))[e.length-1];a(x(t))}),[]),t?r.a.createElement("div",{className:I.a.allTasks},r.a.createElement("div",{className:I.a.header},e?r.a.createElement("h2",{className:I.a.headerText},"Active Tasks: ",e.filter((function(e){return!e.isDone})).length,r.a.createElement(o.b,{className:I.a.headerLink,to:"/taskList"},"back")," "):r.a.createElement("h2",{className:I.a.headerText},"\u041f\u043e\u0434\u0437\u0430\u0434\u0430\u0447 \u043d\u0435\u0442",r.a.createElement(o.b,{className:I.a.headerLink,to:"/taskList"}," back "))),r.a.createElement("div",{className:I.a.inputForm},r.a.createElement(j,{useNewTask:function(e){a(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:a(x());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}})),r.a.createElement("div",{className:I.a.tasks},e?e.map((function(e){return r.a.createElement(D,{task:e,deleteTask:s,checkTask:c})})):r.a.createElement("p",null))):r.a.createElement(u.a,{to:"/login"})},B=a(45),P=a.n(B),C=function(e){var t=Object(g.useForm)(),a=t.register,n=t.handleSubmit,s=t.setValue;return r.a.createElement("form",{className:P.a.form,onSubmit:n((function(t){var a={taskListName:t.taskText};e.useNewTask(a),s("taskText","")}))},r.a.createElement("input",{className:P.a.text,name:"taskText",ref:a,placeholder:"enter your task"}),r.a.createElement("input",{className:P.a.addBtn,value:"ADD",type:"submit"}))},U={lists:[{id:0,taskListName:"firstTaskList",task:[{id:1,taskName:"write 1 task",isDone:"true",isNow:"high"},{taskName:"Chek all tasks",isNow:"high",isDone:"true",id:2},{taskName:"repair task adding",isNow:"medium",isDone:"true",id:3},{taskName:"clear input",isNow:"low",isDone:"true",id:4}]},{id:1,taskListName:"secondTaskList",task:[{id:1,taskName:"write 1 task",isDone:"true",isNow:"high"},{taskName:"Chek all tasks",isNow:"high",isDone:"true",id:2}]}],newListText:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LIST":return Object(p.a)(Object(p.a)({},e),{},{lists:t.lists});case"ADD-LIST":var a={id:3,listText:t.newListText};return Object(p.a)(Object(p.a)({},e),{},{lists:[].concat(Object(f.a)(e.lists),[a])});case"UPDATE-LIST-TEXT":return Object(p.a)(Object(p.a)({},e),{},{newListText:t.newListText});default:return e}},V=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.database().ref("taskList").on("value",(function(e){var a=e.val();t({type:"SET-LIST",lists:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=a(14),M=a(23),W=a.n(M),X=function(e){return r.a.createElement("div",{className:"".concat(W.a.list)},r.a.createElement(o.b,{className:"".concat(W.a.link),to:"/taskList/".concat(e.list.id)},r.a.createElement("div",{className:W.a.text},e.list.taskListName)),r.a.createElement("div",{className:W.a.btns},r.a.createElement("button",Object(K.a)({className:W.a.update,onClick:function(){return e.updateList(e.list)}},"className",W.a.deleteBtn),"Update"),r.a.createElement("button",Object(K.a)({className:W.a.delete,onClick:function(){return e.deleteList(e.list.id)}},"className",W.a.deleteBtn),"Delete")))},Y=a(38),q=a.n(Y),Z=function(){var e=Object(i.c)((function(e){return e.authPage.isAuth})),t=Object(i.c)((function(e){return e.listPage.lists})),a=Object(i.b)();function s(e){a(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.database().ref("taskList").child(e).remove(),a(V());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}function c(e){a(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,E(n,e);case 3:a(V());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}return Object(n.useEffect)((function(){a(V())}),[]),e?r.a.createElement("div",{className:q.a.allTasks},r.a.createElement("div",{className:q.a.header},r.a.createElement("h2",null,"Active Tasks")),r.a.createElement("div",{className:q.a.inputForm},r.a.createElement(C,{useNewTask:function(e){a(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.database().ref("taskList").once("value",(function(t){var a=t.val().length;console.log(a),e.id=a;var n={};n[a]=e,v.database().ref("taskList").update(n)})),a(V());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}})),r.a.createElement("div",{className:q.a.tasks},t.length>1?t.map((function(e){return r.a.createElement(X,{list:e,deleteList:s,updateList:c})})):r.a.createElement(X,{list:t[0],deleteList:s,updateList:c}))):r.a.createElement(u.a,{to:"/login"})},z=(a(46),a(65)),H=a.n(z),J=a(69),Q=a(47),$={login:null,isAuth:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},ee=function(e,t){return{type:"SET-USER-DATA",payload:{login:e,isAuth:t}}},te=a(31),ae=a.n(te),ne=Q.a().shape({login:Q.b().required(),password:Q.b().required()}),re=function(){var e,t,a=Object(i.c)((function(e){return e.authPage.isAuth}));console.log(a);var n=Object(i.b)(),s=Object(g.useForm)({resolver:Object(J.yupResolver)(ne)}),c=s.register,o=s.handleSubmit,l=s.setValue,f=s.errors;return a?r.a.createElement(u.a,{to:"/taskList"}):r.a.createElement("form",{className:ae.a.form,onSubmit:o((function(e){var t,a;n((t=e.login,a=e.password,e.rememberme,function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.auth().signInWithEmailAndPassword(t,a).catch((function(e){return console.log(e)})),n(ee(t,!0));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),l("login",""),l("password","")}))},r.a.createElement("p",null,"login : mail@mail.mail"),r.a.createElement("p",null,"password : password"),r.a.createElement("input",{name:"login",ref:c,className:ae.a.text,type:"text",placeholder:"Enter login"}),r.a.createElement("p",null,null===(e=f.login)||void 0===e?void 0:e.message),r.a.createElement("input",{name:"password",ref:c,className:ae.a.text,type:"password",placeholder:"Enter password"}),r.a.createElement("p",null,null===(t=f.password)||void 0===t?void 0:t.message),r.a.createElement("div",{className:ae.a.checkbox},r.a.createElement("label",{for:"rememberme"},"Remember me"),r.a.createElement("input",{name:"rememberme",ref:c,className:ae.a.check,type:"checkbox",id:"rememberme"})),r.a.createElement("input",{className:ae.a.btn,type:"submit",value:"Login"}))},se=function(){var e=Object(i.c)((function(e){return e.authPage.isAuth})),t=Object(i.b)();return r.a.createElement("div",null,e?r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t(function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ee(null,!1));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"LogOut")," "):r.a.createElement(o.b,{to:"/login"},"LogIn"))},ce=Object(u.f)((function(){return r.a.createElement("div",{className:H.a.todo},r.a.createElement(se,null),r.a.createElement("h1",null,"ToDoList"),r.a.createElement(u.b,{path:"/taskList/:taskId",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(u.b,{exact:!0,path:"/taskList",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(u.b,{path:"/login",render:function(){return r.a.createElement(re,null)}}))})),ie=a(30),oe=a(70),ue=Object(ie.c)({taskPage:T,listPage:R,authPage:G}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,me=Object(ie.e)(ue,le(Object(ie.a)(oe.a))),de=function(){return r.a.createElement(i.a,{store:me},r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.initializeApp({apiKey:"AIzaSyBwbpTx7d1a0DUP2jHqAaKkZhl7sjW6QPA",authDomain:"todolist-3009f.firebaseapp.com",databaseURL:"https://todolist-3009f.firebaseio.com",projectId:"todolist-3009f",storageBucket:"todolist-3009f.appspot.com",messagingSenderId:"907810208879",appId:"1:907810208879:web:6d6bd6059a7bb44c3ce19a"}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,a){e.exports={allTasks:"AllTasks_allTasks__3jm6-",header:"AllTasks_header__YzbYR",headerText:"AllTasks_headerText__3foYd",headerLink:"AllTasks_headerLink__2oSo_",inputForm:"AllTasks_inputForm__1y5iu",tasks:"AllTasks_tasks__1glog"}},23:function(e,t,a){e.exports={list:"List_list__3-ERM",link:"List_link__YbwRo",text:"List_text__1TZrC",btns:"List_btns__1cdxj"}},26:function(e,t,a){e.exports={task:"Task_task__2i8xg",state:"Task_state__3ZMHM",deleteBtn:"Task_deleteBtn__17owL",checkBtn:"Task_checkBtn__2ZdP8",text:"Task_text__Xthyq",high:"Task_high___AUQL",medium:"Task_medium__1XVW3",low:"Task_low__29NL3",done:"Task_done__1oz61"}},31:function(e,t,a){e.exports={form:"LoginForm_form__IPpdV",text:"LoginForm_text__3Brut",checkbox:"LoginForm_checkbox__1mSLW",btn:"LoginForm_btn__IM4EY"}},38:function(e,t,a){e.exports={allTasks:"Lists_allTasks__3M8dN",lists:"Lists_lists__ws7ll",header:"Lists_header__1VL64",inputForm:"Lists_inputForm__2SpqJ",tasks:"Lists_tasks__2lp69"}},44:function(e,t,a){e.exports={form:"InputForm_form__K2ZVr",text:"InputForm_text__3Icxu",select:"InputForm_select__2tnXU",addBtn:"InputForm_addBtn__1129H"}},45:function(e,t,a){e.exports={form:"InputForm_form__1Vu1C",text:"InputForm_text__3PjtO",select:"InputForm_select__2W8f7",addBtn:"InputForm_addBtn__3AOlK"}},46:function(e,t,a){e.exports={links:"Nav_links__1Qew5",navLink:"Nav_navLink__O2BDE"}},65:function(e,t,a){e.exports={todo:"ToDoList_todo__1yxY9"}},71:function(e,t,a){e.exports=a(117)},76:function(e,t,a){},80:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.a826f71c.chunk.js.map