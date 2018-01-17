<template>
  <div id="show-blogs" v-theme:column=" 'narrow' ">
    <h1>All posts</h1>
    <input type="text" v-model="search" placeholder="search">
    <div class="single-post" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'blogs/' + blog.id">
        <h2>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    this.$http
      .get('https://test-project-5bc2d.firebaseio.com/posts.json')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let newBlogs = [];
        
        for (let key in data) {
          data[key].id = key;
          newBlogs.push(data[key]);
        }

        this.blogs = newBlogs;
      });
  },
  computed: {
    
  },
  filters: {
    toUppercase(value) {
      return value.toString().toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        // console.log(el, binding, vnode);
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
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
