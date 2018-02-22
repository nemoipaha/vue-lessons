<template>
  <div id="show-blogs">
    <h1>All posts</h1>
    
    <input type="text" v-model="search" placeholder="search">
    
    <div class="posts-wrapper">
      <template v-for="post in posts">
        <post
          :post="post"  
          :key="post.id"       
        />        
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
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

  computed: {
      ...mapGetters('post', [
          'filteredPosts',
      ]),

      posts() {
          return this.filteredPosts(this.search);
      }
  },

  methods: {
    ...mapActions('post', [
        'fetchPosts',
    ]),
  },

  created() {
    this.fetchPosts();
  }
}
</script>

<style scoped>
 #show-blogs {
    max-width: 800px;
    margin: 0 auto;
    padding: 25px;
 }
</style>
