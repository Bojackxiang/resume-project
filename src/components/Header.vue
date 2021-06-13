<template>
  <div class="header-wrapper">
    <el-row>
      <el-col :span="24" class="hidden-sm-and-down">
        <div class="header-wrapper__header">
          <span>desktop</span>
        </div>
      </el-col>
      <el-col :span="24" class="hidden-md-and-up">
        <div class="header-wrapper__header_mobile">
          <div>
            <i class="el-icon-s-home header-wrapper__header-icon" />
          </div>
          <div>
            <i class="el-icon-s-grid header-wrapper__header-icon"></i>
          </div>
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
  min-height: 30px;
  background-color: $color_D;
  padding: 10px 20px;
  &__header {
    display: flex;
    color: $color_A;
    font-size: 16px;
  }
  &__header_mobile {
    display: flex;
    align-items: center;
    color: $color_A;
    justify-content: space-between;
  }
  &__header-icon {
    font-size: 3rem;
    cursor: pointer;
    padding: 0px;
  }
}
</style>