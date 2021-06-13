<template>
  <div>
    signin 
  </div>
</template>

<script>
  export default {
    beforeRouteLeave (to, from, next) {
      to.meta.keepAlive = false;      
      next()
    },
    created() {
      console.log('[SignIn] IS CREATED');
    },    
    destroyed() {
      console.log('[SignIn] IS DESTROYED');
    },
  }
</script>

<style lang="scss" scoped>

</style>