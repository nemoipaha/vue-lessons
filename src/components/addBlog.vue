<template>
    <div id="add-blog">
        <h2>Add a new post</h2>

        <form v-if="!submitted">
            <label>Blog title:</label>
            <input type="text" required v-model.lazy="blog.title">
            
            <label>Blog content:</label>
            <textarea name=""
                      id=""
                      cols="30"
                      rows="10"
                      v-model.lazy="blog.content">
            </textarea>
            
            <div id="checkboxes">
              <label>Ninjas</label>
              <input type="checkbox" value="ninjas" v-model="blog.categories">
              <label>Wizards</label>
              <input type="checkbox" value="wizards" v-model="blog.categories">
              <label>Mario</label>
              <input type="checkbox" value="mario" v-model="blog.categories">
              <label>Cheese</label>
              <input type="checkbox" value="chesee" v-model="blog.categories">
            </div>
            
            <select v-model="blog.author">
              <option v-for="author in authors">{{ author }}</option>
            </select>
            <button v-on:click.prevent="savePost">Add post</button>
        </form>

        <div v-if="submitted">
          <h3>Thanks for adding a post!</h3>
        </div>

        <div id="preview">
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog categories:</p>
            <ul>
              <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Blog author: {{ blog.author }}</p>
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
            blog: {
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
          'authors'
      ])
    },

    methods: {
      ...mapActions('post', [
        'addPost',
        'backToList'
      ]),

      savePost() {
        this.addPost(this.blog)
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
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
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
