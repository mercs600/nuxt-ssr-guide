<template>
  <div>
    <h1> Blog posts </h1>
    <div v-if="posts && posts.length">
      <div
        v-for="post in posts"
        :key="post.id">
        <nuxt-link :to="`/fetch-blog/${post.id}`">{{ post.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  watch: {
    '$fetchState.error' (error) {
      // do something with error
      console.log(error)
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    this.posts = await this.$http.$get(`https://jsonplaceholder.typicode.com/posts`)
  },
};
</script>
