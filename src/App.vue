<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__header">
        <Header />
      </div>
      <div class="wrapper__body">
        <div class="wrapper__body__content">
          <!-- 保留数据页面 -->
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <!-- 不保留数据页面 -->
          <router-view v-if="!$route.meta.keepAlive" />
        </div>
      </div>
      <div class="wrapper__footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import actions from "./store/actions";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch(actions.LOGIN);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import url("https://fonts.googleapis.com/css2?family=Castoro&display=swap");
@import "./assets/scss/config.scss";
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}
#app {
  padding: 0;
  margin: 0;
  position: relative;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__header {
  }
  &__body {
    flex: 1;
    background-color: $color_G;
  }
  &__footer {
    height: 150px;
    background-color: lightcoral;
  }
}
</style>
