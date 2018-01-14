<template>
  <div id="show-blogs" v-theme:column=" 'narrow' ">
    <h1>All posts</h1>
    <div class="single-post" v-for="blog in blogs">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: []
    }
  },
  created() {
    this.$http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  }
}
</script>

<style scoped>
 #show-blogs {
    max-width: 800px;
    margin: 0 auto;
 }

 .single-post {
    box-sizing: border-box;
    margin: 20px 0;
    background: #eee;
    padding: 20px;
 }
</style>
