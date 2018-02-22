<template>
    <div id="add-blog">
        <h2>Add a new post</h2>

        <form v-if="!submitted">
            <label>Title:</label>
            <input type="text" required v-model.lazy="post.title">
            
            <label>Content:</label>
            <textarea
                cols="30"
                rows="10"
                v-model.lazy="post.content">
            </textarea>

            <label>Categories:</label>
            <div id="checkboxes">
              <div v-for="category in categories">
                  <label>{{ category }}</label>
                  <input type="checkbox" :value="category" v-model="post.categories">
              </div>
            </div>

            <label>Author:</label>
            <select v-model="post.author">
              <option v-for="(author, index) in authors" :key="index">{{ author }}</option>
            </select>
            <button @click.prevent="savePost">Add post</button>
        </form>

        <div v-if="submitted">
          <h3>Thanks for adding a post!</h3>
        </div>

        <div id="preview">
            <p>Post title: {{ post.title }}</p>
            <p>Post content:</p>
            <p>{{ post.content }}</p>
            <p>Post categories:</p>
            <ul>
              <li v-for="(category, index) in post.categories" :key="index">{{ category }}</li>
            </ul>
            <p>Post author: {{ post.author }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex'

export default {
    name: "add-blog",
    
    data() {
        return {
            post: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            submitted: false
        }
    },

    computed: {
      ...mapState('post', [
          'authors',
          'categories'
      ])
    },

    methods: {
      ...mapActions('post', [
        'addPost',
        'backToList'
      ]),

      savePost() {
        this.addPost(this.post)
          .then(() => {
            this.backToList();
          });
      },

      backToList() {
        this.$router.push('/posts');
      }   

    }
}
</script>

<style scoped>
    #add-blog {
        margin: 20px auto;
        max-width: 500px;
    }

    label {
        display: block;
        margin: 20px 0 10px;
    }

    input[type="text"], textarea {
        display: block;
        width: 100%;
        padding: 8px;
    }

    #preview {
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }

    h3 {
        margin-top: 10px;
    }

    #checkboxes input {
      display: inline-block;
      margin-right: 10px;
    }

    #checkboxes label {
      display: inline-block;
    }
</style>
