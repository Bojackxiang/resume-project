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
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
}
#app {
  padding: 0;
  margin: 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__header {
  }
  &__body {
    flex: 1;
    background-color: azure;
    padding: 100px;
  }
  &__footer {
    height: 150px;
    background-color: lightcoral;
  }
}
</style>
