<template>
  <div>
    <div :class="`${ position } animate-bounce w-20 h-20 bg-yellow-200 border-solid border-2 border-yellow-500 rounded-full flex justify-center items-center`"><span class=" text-sm">Loading</span></div>
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