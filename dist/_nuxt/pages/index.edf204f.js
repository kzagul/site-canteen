(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5,6,7],{320:function(e,t,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("c333fa96",content,!0,{sourceMap:!1})},321:function(e,t,r){"use strict";r(320)},322:function(e,t,r){var n=r(70)(!1);n.push([e.i,".card-body{padding:0}",""]),e.exports=n},323:function(e,t,r){"use strict";r.r(t);r(22),r(112);var n={name:"AppCard",props:{sportObjects:{type:Object,required:!0,id:{type:Number,default:0},name:{type:String,default:""},image:{type:String,default:""}}},data:function(){return{}},methods:{}},c=(r(321),r(35)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("b-card",{staticClass:"mb-2 p-0",staticStyle:{width:"16rem",height:"250px"},attrs:{"img-top":"",tag:"article"}},[t("b-card-img",{staticClass:"rounded-0 p-0",staticStyle:{width:"100%",height:"150px",padding:"-1rem"},attrs:{src:e.sportObjects.image,alt:"Image"}}),e._v(" "),t("b-card-text",{staticStyle:{padding:"1rem"}},[e._v(" "+e._s(e.sportObjects.name)+" ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},324:function(e,t,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("003632fa",content,!0,{sourceMap:!1})},325:function(e,t,r){"use strict";r.r(t);var n=r(0),c=(r(15),r(2),r(1),{props:{items:{type:Array}},data:function(){var e;return e={sortBy:"age",sortDesc:!1,fields:[{key:"name",label:"Название"},{key:"weight",label:"Выход порции"},{key:"price",label:"Цена: руб",sortable:!0}],itemsTypes:[{type:"Холодные закуски"},{type:"Первые блюда"},{type:"Вторые блюда"},{type:"Гарниры"},{type:"Выпечка"},{type:"Напитки"}]},Object(n.a)(e,"sortBy",""),Object(n.a)(e,"sortDesc",!1),Object(n.a)(e,"sortDirection","asc"),Object(n.a)(e,"filter",null),Object(n.a)(e,"filterOn",[]),Object(n.a)(e,"infoModal",{id:"info-modal",title:"",content:""}),e},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))},totalRows:function(){return this.items.length}},mounted:function(){},methods:{info:function(e,t,button){this.infoModal.title="Row index: ".concat(t),this.infoModal.content=JSON.stringify(e,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,button)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},filterMenu:function(e,t){return e.filter((function(e){return e.type==t}))}}}),o=r(35),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("b-tabs",{attrs:{pills:"",small:""}},e._l(e.itemsTypes,(function(r){return t("b-tab",{key:r.type,attrs:{"no-body":"",title:r.type}},[t("div",{staticClass:"mt-4"},[t("b-table",{attrs:{hover:"",fields:e.fields,items:e.filterMenu(e.items,r.type),"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-icon-left":""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}}})],1)])})),1)}),[],!1,null,null,null);t.default=component.exports},326:function(e,t,r){e.exports=r.p+"img/outlook1.f0581cd.png"},327:function(e,t,r){e.exports=r.p+"img/outlook2.7f9541a.png"},328:function(e,t,r){"use strict";r(324)},329:function(e,t,r){var n=r(70)(!1);n.push([e.i,".swiper[data-v-78c7c9b8]{width:100%;height:400px}.swiper-slide[data-v-78c7c9b8]{display:flex;align-items:center;justify-content:center}",""]),e.exports=n},330:function(e,t,r){e.exports=r.p+"img/about-pic1.79b44ba.png"},331:function(e,t,r){e.exports=r.p+"img/about-pic3.9a35bc8.png"},332:function(e,t,r){e.exports=r.p+"img/about-pic2.95bc8b1.png"},335:function(e,t,r){"use strict";r.r(t);r(22);var n={name:"DefaultLayout",components:{ProductCard:r(323).default},data:function(){return{sportObjects:[{id:1,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:2,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:3,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:4,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:5,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:6,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:7,name:"Гречка",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"}]}}},c=r(35),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("b-row",{attrs:{cols:"1","cols-sm":"2","cols-md":"3","cols-lg":"4"}},e._l(e.sportObjects,(function(e){return t("b-col",{key:e.name,staticClass:"d-flex justify-content-center"},[t("ProductCard",{attrs:{sportObjects:e}})],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports},336:function(e,t,r){"use strict";r.r(t);var n=r(334),c=(r(333),{components:{ProductCard:r(323).default},props:{sportObjects:{type:Array}},data:function(){return{objs:[{id:1,image:"https://3.downloader.disk.yandex.ru/preview/846d6be9b794042e5ea15dc8dc30e52347f05b278f1b67455bd70d4774d6e2f5/inf/F2sXYmMNH1yHK9VDeqFpoNJ09jbCzvd8dXNP-sJ1CCGoF4peRRrWngNOa7vObyGsPs9YHJZDX73c7RnvRNqeuA%3D%3D?uid=591156921&filename=outlook1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=591156921&tknv=v2&size=2994x1690"},{id:2,image:"https://2.downloader.disk.yandex.ru/preview/7dfd63a6f00dc56dea2091376854dfd963d4d1e4e01937e8fea9b2d67f0d72ab/inf/t7ah81Nngc2pJHeTIiv0cWAG06QTcOfaLaqMaD9FEunn65FBEYIIBXQdLvTL3GUyPJPr-DdDEYIHx55Rthh6_Q%3D%3D?uid=591156921&filename=outlook2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=591156921&tknv=v2&size=2994x1690"}]}},mounted:function(){new n.d(".swiper",{loop:!0,effect:"cards",grabCursor:!0,modules:[n.b,n.c,n.a],pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:4e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},480:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:1,spaceBetween:40}}})}}),o=(r(328),r(35)),component=Object(o.a)(c,(function(){var e=this._self._c;return e("div",[e("div",{staticClass:"flex items-center justify-center h-screen"},[e("div",{staticClass:"swiper mySwiper"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("b-card",{staticClass:"mb-2 p-0",staticStyle:{width:"80%",height:"auto"},attrs:{tag:"article"}},[e("b-card-img",{staticClass:"rounded-0 p-0",staticStyle:{width:"100%",height:"auto",padding:"-1rem"},attrs:{src:r(326),alt:"Image"}})],1)],1),this._v(" "),e("div",{staticClass:"swiper-slide"},[e("b-card",{staticClass:"mb-2 p-0",staticStyle:{width:"80%",height:"auto"},attrs:{tag:"article"}},[e("b-card-img",{staticClass:"rounded-0 p-0",staticStyle:{width:"100%",height:"auto",padding:"-1rem"},attrs:{src:r(327),alt:"Image"}})],1)],1)])])])])}),[],!1,null,"78c7c9b8",null);t.default=component.exports},337:function(e,t,r){"use strict";r.r(t);var n=r(35),component=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("div",[t("ul",{staticClass:"list-unstyled"},[t("b-media",{attrs:{tag:"li"},scopedSlots:e._u([{key:"aside",fn:function(){return[t("b-img",{attrs:{src:r(330),width:"64",height:"64",alt:"placeholder"}})]},proxy:!0}])},[e._v(" "),t("h5",{staticClass:"mt-0 mb-1"},[e._v("Заказы на вынос")]),e._v(" "),t("p",{staticClass:"mb-0"},[e._v("\n            Позвоните нам, мы сделаем и упакуем вам заказ заранее\n            ")])]),e._v(" "),t("b-media",{staticClass:"my-5",attrs:{tag:"li"},scopedSlots:e._u([{key:"aside",fn:function(){return[t("b-img",{attrs:{src:r(331),width:"64",height:"64",alt:"placeholder"}})]},proxy:!0}])},[e._v(" "),t("h5",{staticClass:"mt-0 mb-1"},[e._v("Проведение банкетов")]),e._v(" "),t("p",{staticClass:"mb-0"},[e._v("\n                Мы подготовим для вас наш зал, для проведения вашего праздника\n            ")])]),e._v(" "),t("b-media",{staticClass:"my-5",attrs:{tag:"li"},scopedSlots:e._u([{key:"aside",fn:function(){return[t("b-img",{attrs:{src:r(332),width:"64",height:"64",alt:"placeholder"}})]},proxy:!0}])},[e._v(" "),t("h5",{staticClass:"mt-0 mb-1"},[e._v("Поминальные обеды")]),e._v(" "),t("p",{staticClass:"mb-0"},[e._v("\n                У нас вы можете собрать всех родных\n            ")])])],1)])}),[],!1,null,null,null);t.default=component.exports},338:function(e,t,r){e.exports=r.p+"img/back_photo.165ee18.jpeg"},342:function(e,t,r){"use strict";r.r(t);var n=r(335),c=r(325),o=r(336),l=r(337),d={name:"IndexPage",components:{TheMenu:n.default,PriceTable:c.default,SliderVue:o.default,AboutBlockVue:l.default},data:function(){return{items:[{id:1,type:"Холодные закуски",name:"Салат Гастрономический",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://downloader.disk.yandex.ru/preview/8486befb68cb589186d78f951495a2eb97a8ba44ee7c09ad112e96252a0a8e9f/63acbb7d/op_W-a8glYLpby79kbSTsCI-a3Vs8zQvD_3B8nOHGg3ffUAd7zLepKVbqqtSlesVwJYlPwDQQpKXcOpOwweuCA%3D%3D?uid=0&filename=salad1a.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048"},{id:2,type:"Холодные закуски",name:"Салат Купеческий",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://3.downloader.disk.yandex.ru/preview/846d6be9b794042e5ea15dc8dc30e52347f05b278f1b67455bd70d4774d6e2f5/inf/F2sXYmMNH1yHK9VDeqFpoNJ09jbCzvd8dXNP-sJ1CCGoF4peRRrWngNOa7vObyGsPs9YHJZDX73c7RnvRNqeuA%3D%3D?uid=591156921&filename=outlook1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=591156921&tknv=v2&size=2994x1690"},{id:3,type:"Холодные закуски",name:"Салат Ермак",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:4,type:"Холодные закуски",name:"Салат Восторг",weight:"100г",price:"55-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:5,type:"Холодные закуски",name:"Салат Крабик",weight:"100г",price:"50-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:6,type:"Холодные закуски",name:"Салат Сельдь под шубой",weight:"150г",price:"70-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:7,type:"Холодные закуски",name:"Закуска Русская",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:8,type:"Холодные закуски",name:"Салат из свеклы с сыром",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:9,type:"Холодные закуски",name:"Винегрет",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:10,type:"Холодные закуски",name:"Салат из капусты с огурцом",weight:"100г",price:"45-00",recipe:"Колбаса п/к, сыр, яйцо, помидор, майонез",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:11,type:"Первые блюда",name:"Харчо",weight:"300г",price:"75-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:12,type:"Первые блюда",name:"Солянка по-домашнему",weight:"300г",price:"75-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:13,type:"Первые блюда",name:"Борщ",weight:"300г",price:"70-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:14,type:"Первые блюда",name:"Рассольник",weight:"300г",price:"70-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:15,type:"Первые блюда",name:"Суп гороховый с копченостями",weight:"300г",price:"70-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:16,type:"Первые блюда",name:"Суп-лапша с курицей",weight:"300г",price:"60-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:17,type:"Вторые блюда",name:"Котлета домашняя",weight:"100г",price:"90-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:18,type:"Вторые блюда",name:"Тефтели мясные в томатном соусе",weight:"100г",price:"100-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:19,type:"Вторые блюда",name:"Жаркое по-домашнему",weight:"250г",price:"120-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:20,type:"Вторые блюда",name:"Манты по-казахски",weight:"100г",price:"85-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:21,type:"Вторые блюда",name:"Гуляш из говядины",weight:"75г",price:"120-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:22,type:"Вторые блюда",name:"Печень говяжья жаренная с луком",weight:"100г",price:"90-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:23,type:"Вторые блюда",name:"Плов из свинины",weight:"270г",price:"130-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:24,type:"Вторые блюда",name:"Отбивная из свинины",weight:"100г",price:"120-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:25,type:"Вторые блюда",name:"Куриная отбивная запеченная",weight:"100г",price:"95-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:26,type:"Вторые блюда",name:"Желудки, печень, сердечки куриные жареные с луком",weight:"100г",price:"85-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:27,type:"Вторые блюда",name:"Окорочок запеченный",weight:"100г",price:"85-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:28,type:"Вторые блюда",name:"Котлета рыбная",weight:"100г",price:"75-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:29,type:"Вторые блюда",name:"Минтай жареный",weight:"100г",price:"65-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:30,type:"Вторые блюда",name:"Камбала жареная",weight:"100г",price:"65-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:31,type:"Гарниры",name:"Картофельное пюре",weight:"200г",price:"45-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:32,type:"Гарниры",name:"Макароны отварные",weight:"150г",price:"35-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:33,type:"Гарниры",name:"Каша гречневая",weight:"150г",price:"50-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:34,type:"Гарниры",name:"Перловка с овощами",weight:"150г",price:"35-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:35,type:"Гарниры",name:"Капуста тушенная",weight:"150г",price:"45-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:36,type:"Гарниры",name:"Горошница",weight:"150г",price:"35-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:37,type:"Гарниры",name:"Рис с овощами",weight:"150г",price:"45-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:38,type:"Гарниры",name:"Овощи",weight:"100г",price:"40-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:39,type:"Выпечка",name:"Самса с мясом",weight:"140г",price:"60-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:40,type:"Выпечка",name:"Чебурек",weight:"110г",price:"50-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:41,type:"Выпечка",name:"Беляш",weight:"100г",price:"50-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:42,type:"Выпечка",name:"Пицца с колбасой",weight:"150г",price:"55-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:43,type:"Выпечка",name:"Сосиска в тесте",weight:"100г",price:"40-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:44,type:"Выпечка",name:"Хачапури",weight:"100г",price:"50-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:45,type:"Выпечка",name:"Пирожок с яйцом и луком",weight:"100г",price:"30-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:46,type:"Выпечка",name:"Пирожок с рисом и грибами",weight:"100г",price:"30-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:47,type:"Выпечка",name:"Пирожок с картофелем",weight:"100г",price:"25-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:48,type:"Выпечка",name:"Пирожок с капустой",weight:"100г",price:"25-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:49,type:"Выпечка",name:"Конвертик творожный",weight:"80г",price:"40-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:50,type:"Выпечка",name:"Брауни",weight:"100г",price:"40-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:51,type:"Напитки",name:"Компот с вишней",weight:"200г",price:"25-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"},{id:52,type:"Напитки",name:"Компот с сухофруктами",weight:"200г",price:"25-00",recipe:"",image:"https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg"}],itemsTypes:[{type:"Холодные закуски"},{type:"Первые блюда"},{type:"Вторые блюда"},{type:"Гарниры"},{type:"Выпечка"},{type:"Напитки"}]}}},h=r(35),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-100"},[t("div",{staticClass:"mt-5"},[t("b-card",{attrs:{overlay:"","img-src":r(338),"img-alt":"Card Image","text-variant":"white"}},[t("b-card-text",{staticStyle:{background:"rgba(0, 0, 0, 0.05)"}},[t("h1",{staticStyle:{"font-size":"min(max(16px, 5vw), 6vw)"}},[e._v("Вкусно, быстро, рядом с дорогой! ")])])],1),e._v(" "),t("div",[t("b-jumbotron",{staticClass:"text-dark d-flex flex-column flex-md-row align-items-center py-5 justify-content-center",attrs:{"bg-variant":"transparent"}},[t("p",{staticClass:"lead m-0"},[e._v("Узнать актуальную информацию по еде")]),e._v(" "),t("b-button",{staticClass:"mt-3 mt-md-0 ml-3",attrs:{variant:"primary"}},[t("b-link",{staticStyle:{color:"white"},attrs:{to:"price"}},[e._v("Перейти к ценам")])],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"mt-5 pb-0 pb-md-5"},[t("AboutBlockVue")],1),e._v(" "),t("SliderVue",{attrs:{sportObjects:e.items}}),e._v(" "),t("b-media",{staticClass:"mt-1 mt-md-5 mb-5 pb-5"},[t("h5",{staticClass:"mt-2 mt-md-4 mb-1"},[e._v("Все по-домашнему")]),e._v(" "),t("p",{staticClass:"my-4"},[e._v("\n      Мы страемся, чтобы у каждый наш клиент мог найти для себя свою любимую еду!\n      А после визита к нам оставались хорошее впечатление и приятное послевкусие! "),t("b",[e._v("С заботой о вас!")])])]),e._v(" "),t("div",{staticClass:"my-5 pb-5"},[t("h1",{staticClass:"my-4"},[e._v("Только цены")]),e._v(" "),t("PriceTable",{attrs:{items:e.items}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);