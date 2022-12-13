<template>
  <div class="main-vh">
    <TheHeader />
    <b-container>
      <Nuxt />
    </b-container>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
  components: { TheHeader, TheFooter },
};
</script>

<style>
.main-vh{
  height: 100vh;
}
</style>