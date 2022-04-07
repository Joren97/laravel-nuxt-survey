<template>
  <slot />>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'h-full'
  },
  htmlAttrs: {
    class: 'h-full bg-gray-100'
  }
})
</script>