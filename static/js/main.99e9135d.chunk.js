(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){e.exports={task:"Task_task__2i8xg",state:"Task_state__3ZMHM",deleteBtn:"Task_deleteBtn__17owL",checkBtn:"Task_checkBtn__2ZdP8",text:"Task_text__Xthyq",high:"Task_high___AUQL",medium:"Task_medium__1XVW3",low:"Task_low__29NL3",done:"Task_done__1oz61"}},20:function(e,t,n){e.exports={form:"InputForm_form__K2ZVr",text:"InputForm_text__3Icxu",select:"InputForm_select__2tnXU",btn:"InputForm_btn__2sksK"}},23:function(e,t,n){e.exports={links:"Nav_links__1Qew5",navLink:"Nav_navLink__O2BDE"}},40:function(e,t,n){e.exports={allTasks:"AllTasks_allTasks__3jm6-"}},41:function(e,t,n){e.exports={todo:"ToDoList_todo__1yxY9"}},45:function(e,t,n){e.exports=n(75)},50:function(e,t,n){},55:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(21),c=n.n(s),i=(n(50),n(17)),o=(n(55),n(42)),l=n(4),u=n(2),m=n.n(u),k=n(6),f=n(3),d=n(12),p=n(39).create({baseURL:"http://localhost:3000",credentials:"include"}),_=function(){return p.get("list").then((function(e){return e.data}))},h=function(e){return p.post("list",e).then((function(e){return e.data}))},T=function(e,t){return p.put("list/".concat(e),t).then((function(e){return e.data}))},E=function(e){return p.delete("list/".concat(e)).then((function(e){return e.data}))},v={tasks:[{id:1,taskText:"write 1 task",done:"true",priority:"high"},{id:2,taskText:"check 1 task",done:"false",priority:"medium"}],newTaskText:"",lists:[{id:1,listText:"first list"},{id:2,listText:"second list"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TASK":return Object(d.a)(Object(d.a)({},e),{},{tasks:t.tasks});case"ADD-TASK":var n={id:3,taskText:t.newTaskText,priority:t.priority};return Object(d.a)(Object(d.a)({},e),{},{tasks:[].concat(Object(f.a)(e.tasks),[n])});case"UPDATE-TASK-TEXT":return Object(d.a)(Object(d.a)({},e),{},{newTaskText:t.newTaskText});case"ADD-LIST":var a={id:3,listText:t.newListText};return Object(d.a)(Object(d.a)({},e),{},{lists:[].concat(Object(f.a)(e.lists),[a])});default:return e}},w=function(){return function(){var e=Object(k.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,t({type:"SET-TASK",tasks:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=n(44),O=n(20),j=n.n(O),g=function(e){var t=Object(b.a)(),n=t.register,a=t.handleSubmit,s=(t.getValues,t.setValue);return r.a.createElement("form",{className:j.a.form,onSubmit:a((function(t){var n={taskText:t.taskText,priority:t.priority,done:"false"};e.useNewTask(n),s("taskText","")}))},r.a.createElement("input",{className:j.a.text,name:"taskText",ref:n,placeholder:"enter your task"}),r.a.createElement("select",{className:j.a.select,name:"priority",ref:n},r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"medium"},"medium"),r.a.createElement("option",{value:"low"},"low")),r.a.createElement("input",{className:j.a.btn,type:"submit"}))},y=n(13),N=n.n(y),A=function(e){if("false"==e.task.done)if("high"==e.task.priority)var t=N.a.high;else if("medium"==e.task.priority)t=N.a.medium;else t=N.a.low;else t=N.a.done;return r.a.createElement("div",{className:"".concat(N.a.task," + ").concat(t)},r.a.createElement("div",{className:N.a.text},e.task.taskText),"true"==e.task.done?r.a.createElement("button",{onClick:function(){return e.deleteTask(e.task.id)},className:N.a.deleteBtn},"Delete"):r.a.createElement("button",{onClick:function(){return e.task.done="true",void e.checkTask(e.task.id,e.task)},className:N.a.checkBtn},"Check done"))},L=n(40),S=n.n(L),D=function(){var e=Object(i.c)((function(e){return e.taskPage.tasks})),t=Object(i.b)();function n(e){t(function(e){return function(){var t=Object(k.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:t.sent,n(w());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}function s(e,n){t(function(e,t){return function(){var n=Object(k.a)(m.a.mark((function n(a){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e,t);case 2:n.sent,a(w());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,n))}return Object(a.useEffect)((function(){t(w())}),[]),r.a.createElement("div",{className:S.a.allTasks},r.a.createElement("h2",null,"Active Tasks: ",e.filter((function(e){return"false"==e.done})).length," "),r.a.createElement(g,{useNewTask:function(e){t(function(e){return function(){var t=Object(k.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:t.sent,n(w());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}}),e.map((function(e){return r.a.createElement(A,{task:e,deleteTask:n,checkTask:s})})))},B=function(e){return r.a.createElement("div",null,r.a.createElement(A,null))},I=n(23),C=n.n(I),K=function(e){return r.a.createElement("div",{className:C.a.links},r.a.createElement("a",{className:C.a.navLink,href:"/AllTasks"},"AllTasks"),r.a.createElement("a",{className:C.a.navLink,href:"/AllCollections"},"AllCollections"))},X=n(41),P=n.n(X),U=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:P.a.todo},r.a.createElement("h1",null,"ToDoList"),r.a.createElement(K,null),r.a.createElement(l.a,{path:"/allTasks",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(l.a,{path:"/allLists",render:function(){return r.a.createElement(B,null)}})))},V=n(14),F=n(43),M=Object(V.c)({taskPage:x}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,Z=Object(V.e)(M,W(Object(V.a)(F.a)));var J=function(){return r.a.createElement(i.a,{store:Z},r.a.createElement("div",{className:"App"},r.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.99e9135d.chunk.js.map