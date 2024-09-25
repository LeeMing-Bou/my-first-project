<template>
  <div class="sub_page header">
    <div class="hero_area">
      <MainHeader></MainHeader>
    </div>
  </div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import MainHeader from "./components/MainHeader.vue";
export default {
  components: {
    Footer,
    MainHeader,
  },
};
</script>

<!-- Set Position Fixed for Header when the customer scroll down the page -->
<!-- <style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style> -->
