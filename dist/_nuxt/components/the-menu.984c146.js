(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{319:function(t,e,r){"use strict";r.r(e);r(22),r(112);var n={name:"AppCard",props:{sportObjects:{type:Object,required:!0,id:{type:Number,default:0},name:{type:String,default:"Учреждение"},image:{type:String,default:""}}},data:function(){return{}},methods:{}},c=r(35),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{width:"16rem",height:"350px"},attrs:{"img-src":t.sportObjects.image,"img-alt":"Image","img-top":"",tag:"article"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("em",[t._v(t._s(t.sportObjects.name))])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);r(22);var n={name:"DefaultLayout",components:{ProductCard:r(319).default},data:function(){return{sportObjects:[{id:1,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:2,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:3,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:4,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:5,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:6,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:7,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"}]}}},c=r(35),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",{attrs:{cols:"1","cols-sm":"2","cols-md":"3","cols-lg":"4"}},t._l(t.sportObjects,(function(t){return e("b-col",{key:t.name,staticClass:"d-flex justify-content-center"},[e("ProductCard",{attrs:{sportObjects:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);