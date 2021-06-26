<template>
  <div class="intro-wrapper" :class="{ dark: theme === 'dark' }">
    <div class="title">
      <span class="title_text">{{ title | uppercase }}</span>
      <div class="divider" />
    </div>
    <div class="body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: false,
      default: "dark",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.dark {
  background-color: $color_F;
}
.intro-wrapper {
  padding: 4rem;
  .title {
    display: block;
    .title_text {
      display: block;
      font-size: 3.5rem;
      font-weight: bold;
      font-family: "Castoro", serif;
      color: $color_E;
    }
    .divider {
      margin-top: 0.5rem;
      border: 2px solid $color_E;
      width: 8rem;
      height: 0.2rem;
      background-color: $color_E;
    }
  }
  .body {
    margin-top: 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
}
</style>