<template>
  <div id="show-blogs" v-theme:column=" 'narrow' ">
    <h1>All posts</h1>
    
    <input type="text" v-model="search" placeholder="search" @keyup="filterByTitle">
    
    <div class="posts-wrapper">
      <template v-for="post in filteredPosts">
        <post
          :post="post"         
        />        
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex';
import searchMixin from '../mixins/searchMixin';
import Post from './Post';

export default {
  components: {
    Post
  },

  data () {
    return {
      search: ''
    }
  },

  methods: {
    ...mapActions('post', [
        'fetchPosts',
    ]),

     ...mapMutations('post', [
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
</style>
