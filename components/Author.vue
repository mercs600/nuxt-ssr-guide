<template>
  <div>
    <div v-if="$fetchState.pending">
      <content-placeholders-text :lines="1" />
    </div>
    <div v-else-if="author">
      <p>{{ author.name }} / {{ author.email }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    authorId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      author: null
    }
  },
  async fetch () {
    if (this.authorId) {
      this.author = await this.$http
      .$get(`https://jsonplaceholder.typicode.com/users/${this.authorId}`)
    }
  },
  fetchOnServer: false
}
</script>
