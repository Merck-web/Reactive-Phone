<template>
  <DefaultLayout>
    <div class="content">

      <Header/>

      <Learning
          @updateShowTest="showTest = true"
      />

      <TestsList
          :showTest.sync="showTest"
      />

      <Actions />

      <PagesList />

    </div>
  </DefaultLayout>
</template>

<script>
import Header from "@/components/Header.vue";
import Learning from "@/components/Learning.vue";
import DefaultLayout from "@/layouts/defaultLayour.vue";
import TestsList from "@/components/TestsList.vue";
import Actions from "@/components/Actions.vue";
import PagesList from "@/components/PagesList.vue";

export default {
  name: 'HomeView',
  components: {PagesList, Actions, TestsList, DefaultLayout, Learning, Header},
  data() {
    return {
      showTest: false,
    }
  }
}
</script>
