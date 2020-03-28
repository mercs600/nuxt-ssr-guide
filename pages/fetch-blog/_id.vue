<template>
  <div>
    <div v-if="$fetchState.pending">
      <content-placeholders>
        <content-placeholders-heading/>
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </div>
    <div v-if="$fetchState.error">
      <h1>{{ $fetchState.error.statusCode }} An error occurred: {{ $fetchState.error.message }}</h1>
    </div>
    <div v-else-if="post">
      <h1>{{ post.title }}</h1>
      <div>{{ post.body }}</div>
      <author :author-id="post.userId"/>
    </div>
    <nuxt-link to="/fetch-blog">back to list</nuxt-link>
  </div>
</template>
<script>
import Author from '@/components/Author'
export default {
  components: {
    Author
  },
  data () {
    return {
      post: null
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch () {
    this.post = await this.$http
      .$get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
  }
}
</script>
