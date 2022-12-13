<template>
  <div class="w-100">
    <div class="mt-5">
      <b-card
        overlay
        img-src="https://im.kommersant.ru/Issues.photo/WEEKLY/2014/047/KMO_141084_00004_1_t218_055842.jpg"
        img-alt="Card Image"
        text-variant="white"
      >
        <b-card-text style="background: rgba(0, 0, 0, 0.2);">
          <h1 style="font-size: min(max(16px, 5vw), 6vw);">Вкусно, быстро, рядом с дорогой! </h1>
        </b-card-text>
      </b-card>
      <div>
      <b-jumbotron class="text-dark" bg-variant="transparent" lead="Узнать актуальную информацию по еде">
        <b-button variant="primary" href="#">Перейти к меню</b-button>
      </b-jumbotron>
    </div>
    </div>

    <div class="mt-5">
      <AboutBlockVue />
    </div>

    <div class="mt-5">
      <h1><b-badge>Меню</b-badge></h1>
      <!-- <TheMenu /> -->
    </div>


    <SliderVue :sportObjects="items"/>

    <div class="mt-5 mb-5">
      <h1><b-badge>Только цены</b-badge></h1>
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
      // items: [
      //   { age: 40, first_name: "Куринный суп", last_name: "50 руб" },
      //   { age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   { age: 89, first_name: "Geneva", last_name: "Wilson" },
      //   { age: 38, first_name: "Jami", last_name: "Carney" },
      // ],
      items: [
        {
          id: 1,
          type: "Холодные закуски",
          name: "Салат Гастрономический",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 2,
          type: "Холодные закуски",
          name: "Салат Купеческий",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
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
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 12,
          type: "Первые блюда",
          name: "Солянка по-домашнему",
          weight: "300г",
          price: "75-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 13,
          type: "Первые блюда",
          name: "Борщ",
          weight: "300г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 14,
          type: "Первые блюда",
          name: "Рассольник",
          weight: "300г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 15,
          type: "Первые блюда",
          name: "Суп гороховый с копченостями",
          weight: "300г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 16,
          type: "Первые блюда",
          name: "Суп-лапша с курицей",
          weight: "300г",
          price: "60-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
          image: "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
        },
        {
          id: 17,
          type: "Вторые блюда",
          name: "Котлета домашняя",
          weight: "100г",
          price: "90-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
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
  },
};
</script>

<style>
</style>