<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__header"></div>
      <div class="wrapper__body">
        <div class="wrapper__body__content">

        </div>
      </div>
      <div class="wrapper__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
    height: 50px;
    background-color: red;
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
