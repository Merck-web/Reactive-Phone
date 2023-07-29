<template>
  <section class="learning_wrapper">
    <div class="learning_top d-flex items-center justify-between">
      <div class="learning_description d-flex items-center justify-start">
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M29 58C45.0163 58 58 45.0163 58 29C58 12.9837 45.0163 0 29 0C12.9837 0 0 12.9837 0 29C0 45.0163 12.9837 58 29 58Z" fill="#FFE3DD"/>
          <path opacity="0.4" d="M27.0465 33.0254L21.0173 29.736H21V35.2666C21 36.1973 21.4919 37.0587 22.2799 37.5547C26.7599 40.372 31.2387 40.372 35.7187 37.5547C36.5067 37.0587 36.9987 36.1986 36.9987 35.2666V29.736H36.9814L30.9521 33.0254C29.7361 33.6894 28.2639 33.6894 27.0465 33.0254Z" fill="#FF7355"/>
          <path d="M38.6667 27.228V34.3333C38.6667 34.8853 39.1147 35.3333 39.6667 35.3333C40.2187 35.3333 40.6667 34.8853 40.6667 34.3333V27.228H38.6667Z" fill="#FF7355"/>
          <path d="M39.5821 23.54L30.9541 18.832C29.7368 18.168 28.2646 18.168 27.0459 18.832L18.418 23.54C16.5273 24.5707 16.5273 27.2853 18.418 28.3173L27.0459 33.0253C28.2633 33.6893 29.7355 33.6893 30.9541 33.0253L39.5821 28.3173C40.0727 28.0493 40.43 27.6653 40.666 27.2293C41.338 25.9853 40.9807 24.3027 39.5821 23.54Z" fill="#FF7355"/>
        </svg>
        <div class="learning_text d-flex justify-start column">
          <div class="title">Learning</div>
          <div class="category">Category В</div>
        </div>
      </div>
      <div
          class="btn_tests cursor-pointer"
          @click="$emit('updateShowTest')"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.5C6.76 2.5 2.5 6.76 2.5 12C2.5 17.24 6.76 21.5 12 21.5C17.24 21.5 21.5 17.24 21.5 12C21.5 6.76 17.24 2.5 12 2.5ZM14.71 12.71L11.71 15.71C11.51 15.9 11.26 16 11 16C10.74 16 10.49 15.9 10.29 15.71C9.89998 15.32 9.89998 14.68 10.29 14.29L12.59 12L10.29 9.70996C9.89998 9.31996 9.89998 8.68004 10.29 8.29004C10.68 7.90004 11.32 7.90004 11.71 8.29004L14.71 11.29C15.1 11.68 15.1 12.32 14.71 12.71Z" fill="#87898F"/>
        </svg>
      </div>
    </div>
    <div class="learning_progress d-flex column justify-start">
      <p>{{$store.getters.getCheckQuestion}} questions out of {{$store.getters.getAllQuestions}} passed</p>
      <div>
        <ProgressBar
            :allQuestion="$store.getters.getAllQuestions"
            :checkedQuestion="$store.getters.getCheckQuestion"
            :count="7"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "Learning",
  components: {ProgressBar},
}
</script>

<style scoped>

</style>