<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    
    <article>{{ blog.content }}</article>
    
    <p>Author: {{ blog.author }}</p>
    
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  
  computed: {
    ...mapState('blogs', {
      blog: 'postItem'
    })    
  },

  methods: {
    ...mapActions('blogs', [
        'fetchPost',
    ]),
  },

  created() {
    this.fetchPost(this.id);
  },
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
