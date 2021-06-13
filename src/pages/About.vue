<template>
  <div>
    about
  </div>
</template>

<script>
  export default {
    created() {
      console.log('[ABOUT] IS CREATED');
    },    
    destroyed() {
      console.log('[ABOUT] IS DESTROYED');
    },    
    beforeRouteLeave (to, from, next) {
      // 设置下一个页面是不是要刷新
      // true ： 刷新
      to.meta.keepAlive = true;
      next()
    }
  }
</script>

<style lang="scss" scoped>

</style>