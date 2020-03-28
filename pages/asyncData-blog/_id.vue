<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div>{{ post.body }}</div>
    <nuxt-link to="/asyncData-blog">back to list</nuxt-link>
  </div>
</template>
<script>
export default {
  asyncData: ({ $http, params, error }) => $http
      .$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(post => { return { post } })
}
</script>
