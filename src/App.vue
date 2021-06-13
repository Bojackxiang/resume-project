<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__header">
        <Header/>
      </div>
      <div class="wrapper__body">
        <div class="wrapper__body__content">
          <router-view/>
        </div>
      </div>
      <div class="wrapper__footer">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Header, 
    Footer
  }
};
</script>

<style lang="scss">
body{
  margin: 0; 
  padding: 0;
}
#app{
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
