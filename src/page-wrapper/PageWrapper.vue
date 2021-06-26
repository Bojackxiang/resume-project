<template>
  <div>
    <div class="page-wrapper">
      <slot />
      <!-- REVIEW 这个 slot 就相当于 react 中的children -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-wrapper {
  // 小于1000 px 的时候
  width: 100%;
  background-color: lightblue;
  box-sizing: border-box;
  @media screen and (min-width: 1200px) {
    // 大于 1200 px 的时候
    margin: 0 auto;
    background-color: lightgoldenrodyellow;
    width: 100%;
    max-width: 1200px;
  }
}
</style>