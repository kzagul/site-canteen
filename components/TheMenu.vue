<template>
  <div>
    <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
      <b-col v-for="item in sportObjects" :key="item.name" class="d-flex justify-content-center">
      <ProductCard :sportObjects="item" />
    </b-col>
    </b-row>
  </div>
</template>


<script>
  import ProductCard from '@/components/productcard'
  export default {
    name: 'DefaultLayout',
    components: {ProductCard},
    data() {
      return {
        sportObjects: [
          {
            id: 1,
            name: 'Гречка',
            image:
              'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
          {
            id: 2,
            name: 'Гречка',
            image:
            'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
          {
            id: 3,
            name: 'Гречка',
            image:
            'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
          {
            id: 4,
            name: 'Гречка',
            image:
            'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
          {
            id: 5,
            name: 'Гречка',
            image:
            'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
          {
            id: 6,
            name: 'Гречка',
            image:
            'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
          {
            id: 7,
            name: 'Гречка',
            image:
            'https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg',
          },
        ],
      }
    },
  }
  </script>
  
