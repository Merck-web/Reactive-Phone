<template>
  <div class="item_wrapper d-flex items-center justify-center column cursor-pointer">
    <slot></slot>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'PagesItem',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>