<template>
  <div>
    <div :class="`${ position } animate-pulse w-36 h-12 border-solid border-4 border-yellow-400 flex justify-center items-center`"><span class="text-lg font-medium text-yellow-500">LOADING...</span></div>
  </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
      position: {
        type: String,
        required: true
      },
    }
}
</script>

<style>

</style>