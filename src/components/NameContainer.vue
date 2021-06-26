<template>
  <div class="name-wrapper">
    <div class="large-text-wrapper">
      <span class="large-text">{{ firstName }}</span>
    </div>
    <div class="large-text-wrapper">
      <span class="large-text">{{ lastName }}</span>
    </div>
    <div class="small-text-wrapper">
      <span class="small-text">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.name-wrapper {
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $color_E;
  font-weight: bold;
  .large-text-wrapper {
    margin-bottom: -3rem;
    .large-text {
      color: $color_E;
      font-size: 6rem;
    }
  }
  .small-text-wrapper {
    margin-top: 4rem;
    .small-text {
      color: $color_E;
      font-size: 3rem;
    }
  }
}
</style>