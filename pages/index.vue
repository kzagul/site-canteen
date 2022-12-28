<template>
  <div class="w-100">
    <div class="mt-5">
      <b-card
        overlay
        img-src="../assets/back_photo.jpeg"
        img-alt="Card Image"
        text-variant="white"
      >
        <b-card-text style="background: rgba(0, 0, 0, 0.05);">
          <h1 style="font-size: min(max(16px, 5vw), 6vw);">Вкусно, быстро, рядом с дорогой! </h1>
        </b-card-text>
      </b-card>
      <div>
      <b-jumbotron class="text-dark d-flex flex-column flex-md-row align-items-center py-5 justify-content-center" bg-variant="transparent">
        <p class="lead m-0">Узнать актуальную информацию по еде</p>
        <b-button variant="primary" class="mt-3 mt-md-0 ml-3">
          <b-link to="price" style="color: white;">Перейти к ценам</b-link>
        </b-button>
      </b-jumbotron>
    </div>
    </div>

    <div class="mt-5 pb-0 pb-md-5">
      <AboutBlockVue />
    </div>

    <!-- <div class="mt-5 mb-2"> -->
      <!-- <h1>Еда</h1> -->
      <!-- <TheMenu /> -->
    <!-- </div> -->

    <SliderVue :sportObjects="items"/>

    <b-media class="mt-1 mt-md-5 mb-5 pb-5">
      <h5 class="mt-2 mt-md-4 mb-1">Все по-домашнему</h5>
      <p class="my-4">
        Мы страемся, чтобы у каждый наш клиент мог найти для себя свою любимую еду!
        А после визита к нам оставались хорошее впечатление и приятное послевкусие! <b>С заботой о вас!</b>
      </p>
    </b-media>

    <div class="my-5 pb-5">
      <h1 class="my-4">Только цены</h1>
      <PriceTable :items="items"/>
    </div>
  </div>
</template>

<script>
import TheMenu from "../components/TheMenu.vue";
import PriceTable from "../components/tables/PriceTable.vue";
import SliderVue from "../components/Slider.vue";
import AboutBlockVue from "../components/blocks/AboutBlock.vue";

export default {
  name: "IndexPage",
  components: {
    TheMenu,
    PriceTable,
    SliderVue,
    AboutBlockVue
  },
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Холодные закуски",
          name: "Салат Гастрономический",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://downloader.disk.yandex.ru/preview/8486befb68cb589186d78f951495a2eb97a8ba44ee7c09ad112e96252a0a8e9f/63acbb7d/op_W-a8glYLpby79kbSTsCI-a3Vs8zQvD_3B8nOHGg3ffUAd7zLepKVbqqtSlesVwJYlPwDQQpKXcOpOwweuCA%3D%3D?uid=0&filename=salad1a.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
        },
        {
          id: 2,
          type: "Холодные закуски",
          name: "Салат Купеческий",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: 'https://3.downloader.disk.yandex.ru/preview/846d6be9b794042e5ea15dc8dc30e52347f05b278f1b67455bd70d4774d6e2f5/inf/F2sXYmMNH1yHK9VDeqFpoNJ09jbCzvd8dXNP-sJ1CCGoF4peRRrWngNOa7vObyGsPs9YHJZDX73c7RnvRNqeuA%3D%3D?uid=591156921&filename=outlook1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=591156921&tknv=v2&size=2994x1690',
        },
        {
          id: 3,
          type: "Холодные закуски",
          name: "Салат Ермак",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 4,
          type: "Холодные закуски",
          name: "Салат Восторг",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 5,
          type: "Холодные закуски",
          name: "Салат Крабик",
          weight: "100г",
          price: "50-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 6,
          type: "Холодные закуски",
          name: "Салат Сельдь под шубой",
          weight: "150г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 7,
          type: "Холодные закуски",
          name: "Закуска Русская",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 8,
          type: "Холодные закуски",
          name: "Салат из свеклы с сыром",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 9,
          type: "Холодные закуски",
          name: "Винегрет",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 10,
          type: "Холодные закуски",
          name: "Салат из капусты с огурцом",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 11,
          type: "Первые блюда",
          name: "Харчо",
          weight: "300г",
          price: "75-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 12,
          type: "Первые блюда",
          name: "Солянка по-домашнему",
          weight: "300г",
          price: "75-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 13,
          type: "Первые блюда",
          name: "Борщ",
          weight: "300г",
          price: "70-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 14,
          type: "Первые блюда",
          name: "Рассольник",
          weight: "300г",
          price: "70-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 15,
          type: "Первые блюда",
          name: "Суп гороховый с копченостями",
          weight: "300г",
          price: "70-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 16,
          type: "Первые блюда",
          name: "Суп-лапша с курицей",
          weight: "300г",
          price: "60-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 17,
          type: "Вторые блюда",
          name: "Котлета домашняя",
          weight: "100г",
          price: "90-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 18,
          type: "Вторые блюда",
          name: "Тефтели мясные в томатном соусе",
          weight: "100г",
          price: "100-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 19,
          type: "Вторые блюда",
          name: "Жаркое по-домашнему",
          weight: "250г",
          price: "120-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 20,
          type: "Вторые блюда",
          name: "Манты по-казахски",
          weight: "100г",
          price: "85-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 21,
          type: "Вторые блюда",
          name: "Гуляш из говядины",
          weight: "75г",
          price: "120-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 22,
          type: "Вторые блюда",
          name: "Печень говяжья жаренная с луком",
          weight: "100г",
          price: "90-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 23,
          type: "Вторые блюда",
          name: "Плов из свинины",
          weight: "270г",
          price: "130-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 24,
          type: "Вторые блюда",
          name: "Отбивная из свинины",
          weight: "100г",
          price: "120-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 25,
          type: "Вторые блюда",
          name: "Куриная отбивная запеченная",
          weight: "100г",
          price: "95-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 26,
          type: "Вторые блюда",
          name: "Желудки, печень, сердечки куриные жареные с луком",
          weight: "100г",
          price: "85-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 27,
          type: "Вторые блюда",
          name: "Окорочок запеченный",
          weight: "100г",
          price: "85-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 28,
          type: "Вторые блюда",
          name: "Котлета рыбная",
          weight: "100г",
          price: "75-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 29,
          type: "Вторые блюда",
          name: "Минтай жареный",
          weight: "100г",
          price: "65-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 30,
          type: "Вторые блюда",
          name: "Камбала жареная",
          weight: "100г",
          price: "65-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 31,
          type: "Гарниры",
          name: "Картофельное пюре",
          weight: "200г",
          price: "45-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 32,
          type: "Гарниры",
          name: "Макароны отварные",
          weight: "150г",
          price: "35-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 33,
          type: "Гарниры",
          name: "Каша гречневая",
          weight: "150г",
          price: "50-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 34,
          type: "Гарниры",
          name: "Перловка с овощами",
          weight: "150г",
          price: "35-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 35,
          type: "Гарниры",
          name: "Капуста тушенная",
          weight: "150г",
          price: "45-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 36,
          type: "Гарниры",
          name: "Горошница",
          weight: "150г",
          price: "35-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 37,
          type: "Гарниры",
          name: "Рис с овощами",
          weight: "150г",
          price: "45-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 38,
          type: "Гарниры",
          name: "Овощи",
          weight: "100г",
          price: "40-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 39,
          type: "Выпечка",
          name: "Самса с мясом",
          weight: "140г",
          price: "60-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 40,
          type: "Выпечка",
          name: "Чебурек",
          weight: "110г",
          price: "50-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 41,
          type: "Выпечка",
          name: "Беляш",
          weight: "100г",
          price: "50-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 42,
          type: "Выпечка",
          name: "Пицца с колбасой",
          weight: "150г",
          price: "55-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 43,
          type: "Выпечка",
          name: "Сосиска в тесте",
          weight: "100г",
          price: "40-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 44,
          type: "Выпечка",
          name: "Хачапури",
          weight: "100г",
          price: "50-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 45,
          type: "Выпечка",
          name: "Пирожок с яйцом и луком",
          weight: "100г",
          price: "30-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 46,
          type: "Выпечка",
          name: "Пирожок с рисом и грибами",
          weight: "100г",
          price: "30-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 47,
          type: "Выпечка",
          name: "Пирожок с картофелем",
          weight: "100г",
          price: "25-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 48,
          type: "Выпечка",
          name: "Пирожок с капустой",
          weight: "100г",
          price: "25-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 49,
          type: "Выпечка",
          name: "Конвертик творожный",
          weight: "80г",
          price: "40-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 50,
          type: "Выпечка",
          name: "Брауни",
          weight: "100г",
          price: "40-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 51,
          type: "Напитки",
          name: "Компот с вишней",
          weight: "200г",
          price: "25-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 52,
          type: "Напитки",
          name: "Компот с сухофруктами",
          weight: "200г",
          price: "25-00",
          recipe: "",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
      ],
      itemsTypes: [
        { type: "Холодные закуски"},
        { type: "Первые блюда"},
        { type: "Вторые блюда"},
        { type: "Гарниры"},
        { type: "Выпечка"},
        { type: "Напитки"}
      ],
    };
  }
};
</script>

<style>
</style>