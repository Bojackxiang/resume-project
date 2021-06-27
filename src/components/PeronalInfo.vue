<template>
  <div class="personal-info-wrapper">
    <div class="avatar-wrapper">
      <img class="avatar" src="../assets/images/avatar.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";

.personal-info-wrapper {
  background-color: $color_B;
  .avatar-wrapper {
    padding-top: 5rem;
    text-align: center;
    .avatar{
      height: 17rem;
      width: 17rem;
      border-radius: 10rem;
    }
    
  }
}
</style>