<template>
  <div class="full-width-wrapper">
    <slot/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.full-width-wrapper{
  position: relative;
left: 0; 
  right: 0;
  min-height: 100px;
  background-color: aquamarine;
}
</style>