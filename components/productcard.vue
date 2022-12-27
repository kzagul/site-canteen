<template>
  <div>
    <b-card :img-src="sportObjects.image" img-alt="Image" img-top tag="article" style="width: 16rem; height: 200px" class="mb-2">
      <!-- <b-card-title> {{ sportObjects.name }} </b-card-title> -->
      <!-- <b-list-group flush>
        <b-list-group-item>Горячее блюдо</b-list-group-item>
      </b-list-group> -->
      <b-card-text> {{ sportObjects.name }} </b-card-text>

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
        default: 'Учреждение',
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
