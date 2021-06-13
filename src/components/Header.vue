<template>
  <div class="header-wrapper">
    <el-row>
      <el-col :span="24" class="hidden-sm-and-down">
        <div class="header-wrapper__header">
          <p>hello</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.header-wrapper {
  min-height: 60px;
  background-color: $color_D;
  display: flex;
  align-items: center;
  &__header {
    color: $color_A;
  }
}
</style>