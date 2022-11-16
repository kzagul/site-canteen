<template>
  <div>
    <div class="mt-5">
      <b-img src="https://im.kommersant.ru/Issues.photo/WEEKLY/2014/047/KMO_141084_00004_1_t218_055842.jpg" fluid-grow></b-img>
      <b-jumbotron header="Вкусно, быстро, рядом с дорогой" lead="Узнать актуальную информацию по еде">
        <b-button variant="primary" href="#">Перейти к меню</b-button>
      </b-jumbotron>
    </div>

    <div class="mt-5">
      <h1><b-badge>Меню</b-badge></h1>
      <b-button variant="primary" href="#">Карточки</b-button>
      <b-button variant="primary" href="#">Таблица</b-button>
      <TheMenu />
    </div>

    <div class="mt-5 mb-5">
      <h1><b-badge>Только цены</b-badge></h1>
      <PriceTable />
    </div>
  </div>
</template>

<script>
import TheMenu from "../components/TheMenu.vue";
import PriceTable from "../components/tables/PriceTable.vue";
export default {
  name: "IndexPage",
  components: {
    TheMenu,
    PriceTable
  },
  data() {
    return {
      items: [
        { age: 40, first_name: "Куринный суп", last_name: "50 руб" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>
