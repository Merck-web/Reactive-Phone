<template>
  <div class="router_wrapper">
    <router-link
        :to="to"
    >
      <div
          class="route_image"
      >
        <slot name="image"></slot>
        <div class="backdrop"/>
      </div>
      <p class="route_text">{{name}}</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'RouterItem',
  props: {
    to: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
  }
}
</script>
