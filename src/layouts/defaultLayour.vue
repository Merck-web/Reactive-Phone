<template>
  <div class="container">
    <slot></slot>
    <NavBar />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'defaultLayout',
  components: {NavBar}
}
</script>
