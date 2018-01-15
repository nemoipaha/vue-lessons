<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'
import listBlogs from './components/listBlogs'

export default {
  name: 'app',
  components: {
    addBlog,
    showBlogs,
    listBlogs
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
</style>
