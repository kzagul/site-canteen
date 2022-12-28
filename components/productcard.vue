<template>
  <div>
    <!-- <b-card :img-src="sportObjects.image" img-alt="Image" img-top tag="article" style="width: 16rem; height: 200px" class="mb-2"> -->
    <!-- <b-card style="width: 16rem; height: 250px;" class="mb-2"> -->
    <b-card
      img-top
      tag="article"
      style="width: 16rem; height: 250px"
      class="mb-2 p-0"
    >
      <b-card-img :src="sportObjects.image" style="width: 100%; height: 150px; padding: -1rem" alt="Image" class="rounded-0 p-0"></b-card-img>
      <!-- <b-img src="../assets/food/salad1.png" style="width: 100%; height: 150px" alt="Responsive image"></b-img> -->
      <!-- <b-card-title> {{ sportObjects.name }} </b-card-title> -->
      <!-- <b-list-group flush>
        <b-list-group-item>Горячее блюдо</b-list-group-item>
      </b-list-group> -->
      <b-card-text style="padding: 1rem;"> {{ sportObjects.name }} </b-card-text>

    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    sportObjects: {
      type: Object,
      required: true,
      id: {
        type: Number,
        default: 0,
      },
      name: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>


<style>
.card-body {
  padding: 0px;
}
</style>