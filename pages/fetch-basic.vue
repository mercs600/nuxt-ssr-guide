<template>
  <div>
    <h1> {{ title }} </h1>
    <p> Just check HTML source or inspect window.__NUXT__ </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: null
    }
  },
  fetch () {
    this.title = 'fetch method'
  }
}
</script>
