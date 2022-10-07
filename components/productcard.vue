<template>
  <div>
    <b-card :img-src="sportObjects.image" img-alt="Image" img-top tag="article" style="max-width: 40rem" class="mb-2">
      <b-card-title> {{ sportObjects.name }} </b-card-title>
      <b-card-text> Краткое описание спортивного объекта </b-card-text>

      <b-list-group flush>
        <b-list-group-item>Направление:</b-list-group-item>
        <b-list-group-item>Адрес</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Посмотреть на карте</a>
      </b-card-body>

      <small class="text-muted">Last updated 3 mins ago</small>
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
