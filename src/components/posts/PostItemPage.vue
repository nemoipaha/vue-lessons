<template>
  <div id="single-blog">
    <h1>{{ post.title | capitalize }}</h1>
    
    <article>{{ post.content }}</article>
    
    <p>Author: {{ post.author }}</p>
    
    <ul>
      <li v-for="(category, index) in post.categories" :key="index">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  data () {
    return {
      id: this.$route.params.id,
    }
  },
  
  computed: {
    ...mapState('post', {
      post: 'postItem'
    })    
  },

  methods: {
    ...mapActions('post', [
        'fetchPost',
    ]),
  },

  created() {
    this.fetchPost(this.id);
  },

  beforeRouteUpdate (to, from, next) {
    this.fetchPost(this.$route.params.id);
    next();
  }
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 45px;
}
</style>
