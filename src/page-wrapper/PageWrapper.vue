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
  color: green;
  // 小于1000 px 的时候
  width: 100%;
  padding: 0 15px;
  background-color: lightblue;
  width: 100%;
  padding: 0 15px;
  @media screen and (min-width: 1200px) {
    // 大于 1000 px 的时候
    margin: 0 auto;
    background-color: lightgoldenrodyellow;
    width: 100%;

    max-width: 1000px;
    color: red;
  }
}
</style>