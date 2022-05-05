<template>
  <div class="about">
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const msg = ref('about');

    return {msg}
  }
}
</script>

<style>

</style>