<template>
  <div id="show-blogs" v-theme:column=" 'narrow' ">
    <h1>All posts</h1>
    
    <input type="text" v-model="search" placeholder="search" @keyup="filterByTitle">
    
    <div class="single-post" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'blogs/' + blog.id">
        <h2>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex';

import searchMixin from '../mixins/searchMixin'

export default {
  data () {
    return {
      search: ''
    }
  },

  methods: {
    ...mapActions('blogs', [
        'fetchPosts',
    ]),

     ...mapMutations('blogs', [
      'SEARCH_BY_TITLE',
    ]),

     filterByTitle() {
        this['SEARCH_BY_TITLE'](this.search);
     }
  },

  created() {
    this.fetchPosts();
  },
  
  mixins: [
    searchMixin
  ]
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
