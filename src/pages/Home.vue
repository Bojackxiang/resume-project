]<template>
  <div>
    <PageWrapper> 
      <el-row>
        <!-- left column -->
        <el-col :sm="16" :xs="24">
          <div class="left-col"></div>
        </el-col>
        <!-- right column -->
        <el-col :sm="8" :xs="24">
          <div class="right-col"></div>
        </el-col>
      </el-row>

      <div>what ever</div>
      <AppButton :type="'primary'">
        <template v-slot:text="slotProps">
          <!-- REVIEW 这边外面多封装了一层  -->
          {{slotProps.btnData.text}}
        </template>
        <template v-slot:icon>
          icon
        </template>
      </AppButton>
    </PageWrapper>
  </div>
</template>

<script>
import AppButton from '../components/AppButton.vue';
import PageWrapper from "../page-wrapper/PageWrapper.vue";

export default {
  components: {
    PageWrapper,
    AppButton,
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
.left-col{
  width: 100%;
  background-color: antiquewhite;
  height: 20px;
}
.right-col{
  width: 100%;
  background-color:aquamarine;
  height: 20px;
}
</style>