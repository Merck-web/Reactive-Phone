<template>
  <div class="card_wrapper d-flex items-center justify-start cursor-pointer">
    <slot></slot>
    <p>{{cardName}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>