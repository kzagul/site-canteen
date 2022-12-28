<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide " v-for="sportObject in sportObjects" :key="sportObject.id">
            <ProductCard :sportObjects="sportObject"/>
          </div> -->
          <div class="swiper-slide " v-for="obj in objs" :key="obj.id">
            <b-card
              tag="article"
              style="width: 80%; height: auto"
              class="mb-2 p-0"
            >
              <b-card-img :src="obj.image" style="width: 100%; height: auto; padding: -1rem" alt="Image" class="rounded-0 p-0"></b-card-img>
            </b-card>
          </div>
        </div>
      </div>
    </div>
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
      objs: [
        {
          id: 1,
          image: "https://3.downloader.disk.yandex.ru/preview/846d6be9b794042e5ea15dc8dc30e52347f05b278f1b67455bd70d4774d6e2f5/inf/F2sXYmMNH1yHK9VDeqFpoNJ09jbCzvd8dXNP-sJ1CCGoF4peRRrWngNOa7vObyGsPs9YHJZDX73c7RnvRNqeuA%3D%3D?uid=591156921&filename=outlook1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=591156921&tknv=v2&size=2994x1690",
        },
        {
          id: 2,
          image: 'https://2.downloader.disk.yandex.ru/preview/7dfd63a6f00dc56dea2091376854dfd963d4d1e4e01937e8fea9b2d67f0d72ab/inf/t7ah81Nngc2pJHeTIiv0cWAG06QTcOfaLaqMaD9FEunn65FBEYIIBXQdLvTL3GUyPJPr-DdDEYIHx55Rthh6_Q%3D%3D?uid=591156921&filename=outlook2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=591156921&tknv=v2&size=2994x1690',
        },
      ]
    }
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
        delay: 4000,
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
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
    });
    // you can use different options later
    // swiper.on("activeIndexChange", (swiper) => {
    //   // console.log(swiper)
    // });
  },
};
</script>

<style lang="css" scoped>

/* для карточек */
/* .swiper {
  width: 100%;
  height: 270px;
} */

.swiper {
  width: 100%;
  height: 400px;
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