<template>
  <div>
    <p>{{ count }}</p>
    <button @click="reset">reset</button>
  </div>
</template>

<script setup lang="ts">
import useAutoCount from '../composeables/useAutoCount'

interface  Props {
  initialCount: number
}

const props = withDefaults(defineProps<Props>(), {
  initialCount: 0,
})

const { count } = useAutoCount(props.initialCount)

function reset() {
  count.value = 0
}
  
</script>

<style>

</style>