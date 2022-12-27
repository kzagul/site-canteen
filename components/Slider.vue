<template>
  <div class="flex items-center justify-center h-screen">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide " v-for="sportObject in sportObjects" :key="sportObject.id">
          <ProductCard :sportObjects="sportObject"/>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" style="bottom: auto;"></div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import ProductCard from "@/components/productcard";
export default {
  components: { ProductCard },
  props: {
    sportObjects: {
      type: Array
    }
  },
  data() {
    return {
      // sportObjects: [
      //   {
      //     id: 1,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      //   {
      //     id: 2,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      //   {
      //     id: 3,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      //   {
      //     id: 4,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      //   {
      //     id: 5,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      //   {
      //     id: 6,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      //   {
      //     id: 7,
      //     name: "Гречка",
      //     image:
      //       "https://cdn.lifehacker.ru/wp-content/uploads/2017/01/Kak-pravilno-varit-grechku_1586299544_1586323930.jpg",
      //   },
      // ],
    };
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      loop: true,
      effect: "cards",
      grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
    // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
    // you can use different options later
    swiper.on("activeIndexChange", (swiper) => {
      // console.log(swiper)
    });
  },
};
</script>

<style lang="css" scoped>
.swiper {
  width: 100%;
  height: 250px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 200px; */

  /* border-radius: 18px; */
  /* font-size: 22px; */
  /* font-weight: bold; */
  /* color: #fff; */
}

</style>
§§