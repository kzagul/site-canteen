<template>
  <b-tabs pills small>
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
          <!-- <template v-if="el.type === `Холодные закуски`" #cell(actions)="row">
            <b-button size="sm" @click="row.toggleDetails">
              {{ row.detailsShowing ? "Спрятать" : "Показать" }}
            </b-button>
          </template>
          
          <template #row-details="row">
            <b-card>
              {{ row.item.recipe }}
            </b-card>
          </template> -->
        </b-table>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
    props: {
      items: {
        type: Array,
      },
    },
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "name", label: "Название" },
        { key: "weight", label: "Выход порции" },
        { key: "price", label: "Цена: руб", sortable: true },
        // { key: "actions", label: "Состав" },
      ],
      itemsTypes: [
        { type: "Холодные закуски"},
        { type: "Первые блюда"},
        { type: "Вторые блюда"},
        { type: "Гарниры"},
        { type: "Выпечка"},
        { type: "Напитки"}
      ],
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
    totalRows() {
      return this.items.length;
    },
  },
  mounted() {
    // Set the initial number of items
    // this.totalRows = this.items.length;
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
    },
  },
};
</script>
