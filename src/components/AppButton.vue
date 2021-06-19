<template>
  <button
    class="app-button"
    :class="{
      primary: type === 'primary',
      warning: type === 'warning',
      error: type === 'error',
    }"
  >
    <!-- text -->
    <!-- 我们先把 子组建里面的 数据传给子组建的 slot  -->
    <slot name="text" :btnData="btnData"></slot>
    <!-- icon -->
    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  props: {
    name: { type: String },
    type: { type: String },
  },
  data(){
    return {
      btnData: {
        text: 'deault text',
      }
      
    }
  }, 
  created() {
    console.log(this.type);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.primary {
  background-color: $color_D;
  color: $color_A;
}
.app-button {
  border: 0;
  padding: 8px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;

}
</style>