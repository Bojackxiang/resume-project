]<template>
  <div>
    <PageWrapper>
      <div>what ever</div>
      <AppButton :type="'primary'">
        <template v-slot:text="props">
          <!-- REVIEW 这边外面多封装了一层  -->
          {{props.btnData.text}}
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
    AppButton
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
</style>