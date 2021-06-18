]<template>
  <div>
    <PageWrapper>
      <div>what ever</div>
    </PageWrapper>
  </div>
</template>

<script>
import PageWrapper from "../page-wrapper/PageWrapper.vue";
export default {
  components: {
    PageWrapper,
  },
  created() {
    console.log;
    console.log("[HOME] IS CREATED");
  },
  destroyed() {
    console.log("[HOME] IS DESTROYED");
  },
};
</script>

<style lang="scss" scoped>
</style>