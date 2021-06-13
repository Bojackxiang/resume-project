<template>
  <div class="header-wrapper">
    <!-- icon -->
    <div>
      <i class="el-icon-s-home header-wrapper__header-icon" />
    </div>

    <!-- Desktop -->
    <div>
      <el-row :span="24" class="hidden-sm-and-down">
        <div class="header-wrapper__row_links">
          <router-link class="router-link" to="/">Home</router-link>
          <router-link class="router-link" to="/about">About</router-link>
          <router-link class="router-link" to="/sign-in">Sign In</router-link>
        </div>
      </el-row>

      <!-- Mobile -->
      <el-row :span="24" class="hidden-md-and-up">
        <div>
          <i class="el-icon-s-grid header-wrapper__header-icon"></i>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.header-wrapper {
  display: flex;
  align-items: center;
  min-height: 30px;
  background-color: $color_D;
  padding: 10px 20px;
  color: $color_A;
  justify-content: space-between;
  &__header-icon {
    font-size: 3rem;
    cursor: pointer;
  }
  &__row_links {
    display: flex;
    .router-link{
      margin-left: 20px;
      text-decoration: none;
      color: $color_A;
      font-size: 1.4rem;
      font-weight: bold;;
    }
  }

}
</style>