]<template>
  <div>
    <PageWrapper> 
      <el-row>
        <!-- left column -->
        <el-col :sm="17" :xs="24">
          <div class="left-col">
            <NameContainer :firstName="firstName" :lastName="lastName" :title="title"/>
          </div>
        </el-col>
        <!-- right column -->
        <el-col :sm="7" :xs="24">
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
import NameContainer from '../components/NameContainer.vue'

export default {
  components: {
    PageWrapper,
    AppButton,
    NameContainer,
  },
  data(){
    return {
      firstName: 'Alex',
      lastName: 'Xiang',
      title: "Full Stack Engineer"
    }
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
  background-color: antiquewhite;
  padding-left: 4rem;
}
.right-col{
  background-color:aquamarine;
}
</style>