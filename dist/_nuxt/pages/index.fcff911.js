(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5,6,7],{320:function(t,e,n){"use strict";n.r(e);n(22),n(112);var r={name:"AppCard",props:{sportObjects:{type:Object,required:!0,id:{type:Number,default:0},name:{type:String,default:"Учреждение"},image:{type:String,default:""}}},data:function(){return{}},methods:{}},c=n(35),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{width:"16rem",height:"200px"},attrs:{"img-src":t.sportObjects.image,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" "+t._s(t.sportObjects.name)+" ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("00417cd6",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";n.r(e);var r=n(0),c=(n(15),n(2),n(1),{props:{items:{type:Array}},data:function(){var t;return t={sortBy:"age",sortDesc:!1,fields:[{key:"name",label:"Название"},{key:"weight",label:"Выход порции"},{key:"price",label:"Цена: руб",sortable:!0}],itemsTypes:[{type:"Холодные закуски"},{type:"Первые блюда"},{type:"Вторые блюда"},{type:"Гарниры"},{type:"Выпечка"},{type:"Напитки"}]},Object(r.a)(t,"sortBy",""),Object(r.a)(t,"sortDesc",!1),Object(r.a)(t,"sortDirection","asc"),Object(r.a)(t,"filter",null),Object(r.a)(t,"filterOn",[]),Object(r.a)(t,"infoModal",{id:"info-modal",title:"",content:""}),t},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},totalRows:function(){return this.items.length}},mounted:function(){},methods:{info:function(t,e,button){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,button)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},filterMenu:function(t,e){return t.filter((function(t){return t.type==e}))}}}),o=n(35),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("b-tabs",{attrs:{pills:"",small:""}},t._l(t.itemsTypes,(function(n){return e("b-tab",{key:n.type,attrs:{"no-body":"",title:n.type}},[e("div",{staticClass:"mt-4"},[e("b-table",{attrs:{hover:"",fields:t.fields,items:t.filterMenu(t.items,n.type),"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-icon-left":""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}})],1)])})),1)}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";n(321)},324:function(t,e,n){var r=n(70)(!1);r.push([t.i,".swiper[data-v-10a66330]{width:100%;height:250px}.swiper-slide[data-v-10a66330]{display:flex;align-items:center;justify-content:center}",""]),t.exports=r},327:function(t,e,n){"use strict";n.r(e);n(22);var r={name:"DefaultLayout",components:{ProductCard:n(320).default},data:function(){return{sportObjects:[{id:1,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:2,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:3,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:4,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:5,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:6,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:7,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"}]}}},c=n(35),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",{attrs:{cols:"1","cols-sm":"2","cols-md":"3","cols-lg":"4"}},t._l(t.sportObjects,(function(t){return e("b-col",{key:t.name,staticClass:"d-flex justify-content-center"},[e("ProductCard",{attrs:{sportObjects:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);var r=n(326),c=(n(325),{components:{ProductCard:n(320).default},props:{sportObjects:{type:Array}},data:function(){return{}},mounted:function(){new r.d(".swiper",{loop:!0,effect:"cards",grabCursor:!0,modules:[r.b,r.c,r.a],pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:3e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},480:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:3,spaceBetween:40}}}).on("activeIndexChange",(function(t){}))}}),o=(n(323),n(35)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-center h-screen"},[e("div",{staticClass:"swiper mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.sportObjects,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("ProductCard",{attrs:{sportObjects:t}})],1)})),0)]),t._v(" "),e("div",{staticClass:"swiper-pagination",staticStyle:{bottom:"auto"}})])}),[],!1,null,"10a66330",null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var r=n(35),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"list-unstyled"},[e("b-media",{attrs:{tag:"li"},scopedSlots:t._u([{key:"aside",fn:function(){return[e("b-img",{attrs:{src:"https://cdn-icons-png.flaticon.com/512/810/810478.png",width:"64",alt:"placeholder"}})]},proxy:!0}])},[t._v(" "),e("h5",{staticClass:"mt-0 mb-1"},[t._v("Заказы на вынос")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n            Позвоните нам, мы сделаем и упакуем вам заказ заранее\n            ")])]),t._v(" "),e("b-media",{staticClass:"my-5",attrs:{tag:"li"},scopedSlots:t._u([{key:"aside",fn:function(){return[e("b-img",{attrs:{src:"https://cdn-icons-png.flaticon.com/512/2490/2490764.png",width:"64",alt:"placeholder"}})]},proxy:!0}])},[t._v(" "),e("h5",{staticClass:"mt-0 mb-1"},[t._v("Поминальные обеды")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n                У нас вы можете собрать всех родных\n            ")])]),t._v(" "),e("b-media",{attrs:{tag:"li"},scopedSlots:t._u([{key:"aside",fn:function(){return[e("b-img",{attrs:{src:"https://cdn-icons-png.flaticon.com/512/6143/6143607.png",width:"64",alt:"placeholder"}})]},proxy:!0}])},[t._v(" "),e("h5",{staticClass:"mt-0 mb-1"},[t._v("Проведение банкетов")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n                Мы подготовим для вас наш зал, для проведения вашего праздника\n            ")])])],1)])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){t.exports=n.p+"img/back_photo.165ee18.jpeg"},333:function(t,e,n){"use strict";n.r(e);var r=n(327),c=n(322),o=n(328),l=n(329),d={name:"IndexPage",components:{TheMenu:r.default,PriceTable:c.default,SliderVue:o.default,AboutBlockVue:l.default},data:function(){return{items:[{id:1,type:"Холодные закуски",name:"Салат Гастрономический",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:2,type:"Холодные закуски",name:"Салат Купеческий",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:3,type:"Холодные закуски",name:"Салат Ермак",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:4,type:"Холодные закуски",name:"Салат Восторг",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:5,type:"Холодные закуски",name:"Салат Крабик",weight:"100г",price:"50-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:6,type:"Холодные закуски",name:"Салат Сельдь под шубой",weight:"150г",price:"70-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:7,type:"Холодные закуски",name:"Закуска Русская",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:8,type:"Холодные закуски",name:"Салат из свеклы с сыром",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:9,type:"Холодные закуски",name:"Винегрет",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:10,type:"Холодные закуски",name:"Салат из капусты с огурцом",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:11,type:"Первые блюда",name:"Харчо",weight:"300г",price:"75-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:12,type:"Первые блюда",name:"Солянка по-домашнему",weight:"300г",price:"75-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:13,type:"Первые блюда",name:"Борщ",weight:"300г",price:"70-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:14,type:"Первые блюда",name:"Рассольник",weight:"300г",price:"70-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:15,type:"Первые блюда",name:"Суп гороховый с копченостями",weight:"300г",price:"70-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:16,type:"Первые блюда",name:"Суп-лапша с курицей",weight:"300г",price:"60-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:17,type:"Вторые блюда",name:"Котлета домашняя",weight:"100г",price:"90-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"}],itemsTypes:[{type:"Холодные закуски"},{type:"Первые блюда"},{type:"Вторые блюда"},{type:"Гарниры"},{type:"Выпечка"},{type:"Напитки"}]}},computed:{zacuski:function(){},firstFood:function(){},secondFood:function(){},garniry:function(){},vypechka:function(){},drinks:function(){}}},m=n(35),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100"},[e("div",{staticClass:"mt-5"},[e("b-card",{attrs:{overlay:"","img-src":n(330),"img-alt":"Card Image","text-variant":"white"}},[e("b-card-text",{staticStyle:{background:"rgba(0, 0, 0, 0.05)"}},[e("h1",{staticStyle:{"font-size":"min(max(16px, 5vw), 6vw)"}},[t._v("Вкусно, быстро, рядом с дорогой! ")])])],1),t._v(" "),e("div",[e("b-jumbotron",{staticClass:"text-dark d-flex flex-column flex-md-row align-items-center py-5 justify-content-center",attrs:{"bg-variant":"transparent"}},[e("p",{staticClass:"lead m-0"},[t._v("Узнать актуальную информацию по еде")]),t._v(" "),e("b-button",{staticClass:"mt-3 mt-md-0 ml-3",attrs:{variant:"primary"}},[e("b-link",{staticStyle:{color:"white"},attrs:{to:"menu"}},[t._v("Перейти к меню")])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"mt-5"},[e("AboutBlockVue")],1),t._v(" "),t._m(0),t._v(" "),e("SliderVue",{attrs:{sportObjects:t.items}}),t._v(" "),e("b-media",[e("h5",{staticClass:"mt-4 mb-1"},[t._v("Горячие блюда")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n      Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n      ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    ")])]),t._v(" "),e("div",{staticClass:"mt-5 mb-5"},[e("h1",{staticClass:"my-4"},[t._v("Только цены")]),t._v(" "),e("PriceTable",{attrs:{items:t.items}})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"mt-5 mb-2"},[t("h1",[this._v("Еда")])])}],!1,null,null,null);e.default=component.exports}}]);