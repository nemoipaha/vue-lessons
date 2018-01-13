<template>
    <div id="add-blog">
        <h2>Add a new post</h2>

        <form action="">
            <label>Blog title:</label>
            <input type="text" required v-model.lazy="blog.title">
            <label>Blog content:</label>
            <textarea name="" id="" cols="30" rows="10" v-model.lazy="blog.content"></textarea>
        </form>

        <div id="preview">
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-blog",
        data() {
            return {
                blog: {
                    title: '',
                    content: ''
                }
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
</style>