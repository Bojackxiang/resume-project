]<template>
  <div>
    <PageWrapper>
      <el-row>
        <!-- left column -->
        <el-col :sm="17" :xs="24">
          <div class="left-col">
            <NameContainer
              :firstName="firstName | uppercase"
              :lastName="lastName | uppercase"
              :title="title"
            />
            <intro :title="'Education'">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </intro>
          </div>
        </el-col>
        <!-- right column -->
        <el-col :sm="7" :xs="24">
          <div class="right-col">
            
          </div>
        </el-col>
      </el-row>
    </PageWrapper>
  </div>
</template>

<script>
import PageWrapper from "../page-wrapper/PageWrapper.vue";
import NameContainer from "../components/NameContainer.vue";
import Intro from '../components/Intro.vue';

export default {
  components: {
    PageWrapper,
    NameContainer,
    Intro,
  },
  data() {
    return {
      firstName: "Alex",
      lastName: "Xiang",
      title: "Full Stack Engineer",
    };
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
.left-col {
}
.right-col {
  background-color: aquamarine;
}
</style>