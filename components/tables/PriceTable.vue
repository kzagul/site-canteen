<template>
  <b-tabs pills>
    <b-tab v-for="el in itemsTypes" :key="el.type" no-body :title="el.type">
      <div class="mt-4">
        <b-table
          hover
          :fields="fields"
          :items="filterMenu(items, el.type)"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          sort-icon-left
        >
          <template #cell(actions)="row">
            <b-button size="sm" @click="row.toggleDetails">
              {{ row.detailsShowing ? "Спрятать" : "Показать" }}
            </b-button>
          </template>
          <template #row-details="row">
            <b-card>
              {{ row.item.recipe }}
            </b-card>
          </template>
        </b-table>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  //   props: {
  //     items: {
  //       type: Array,
  //     },
  //   },
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "name", label: "Название" },
        { key: "weight", label: "Выход порции" },
        { key: "price", label: "Цена: руб", sortable: true },
        { key: "actions", label: "Состав" },
      ],
      itemsTypes: [
        { type: "Холодные закуски"},
        { type: "Первые блюда"},
        { type: "Вторые блюда"},
        { type: "Гарниры"},
        { type: "Выпечка"},
        { type: "Напитки"}
      ],
      items: [
        {
          id: 1,
          type: "Холодные закуски",
          name: "Салат Гастрономический",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 2,
          type: "Холодные закуски",
          name: "Салат Купеческий",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 3,
          type: "Холодные закуски",
          name: "Салат Ермак",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 4,
          type: "Холодные закуски",
          name: "Салат Восторг",
          weight: "100г",
          price: "55-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 5,
          type: "Холодные закуски",
          name: "Салат Крабик",
          weight: "100г",
          price: "50-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 6,
          type: "Холодные закуски",
          name: "Салат Сельдь под шубой",
          weight: "150г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 7,
          type: "Холодные закуски",
          name: "Закуска Русская",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 8,
          type: "Холодные закуски",
          name: "Салат из свеклы с сыром",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 9,
          type: "Холодные закуски",
          name: "Винегрет",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 10,
          type: "Холодные закуски",
          name: "Салат из капусты с огурцом",
          weight: "100г",
          price: "45-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 11,
          type: "Первые блюда",
          name: "Харчо",
          weight: "300г",
          price: "75-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 12,
          type: "Первые блюда",
          name: "Солянка по-домашнему",
          weight: "300г",
          price: "75-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 13,
          type: "Первые блюда",
          name: "Борщ",
          weight: "300г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 14,
          type: "Первые блюда",
          name: "Рассольник",
          weight: "300г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 15,
          type: "Первые блюда",
          name: "Суп гороховый с копченостями",
          weight: "300г",
          price: "70-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 16,
          type: "Первые блюда",
          name: "Суп-лапша с курицей",
          weight: "300г",
          price: "60-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
        {
          id: 17,
          type: "Вторые блюда",
          name: "Котлета домашняя",
          weight: "100г",
          price: "90-00",
          recipe: "Колбаса п/к, сыр, яйцо, помидор, майонез",
        },
      ],
    //   totalRows: 1,
    //   currentPage: 1,
    //   perPage: 5,
    //   pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },

    filterMenu(items, type){
        return items.filter(item => item.type == type);
    }
  },
};
</script>
