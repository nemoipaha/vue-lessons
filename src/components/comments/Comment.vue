<template>
    <div class="comment">
        <div class="comment-text">{{ comment.text }}</div>    
    </div>    
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true
        }
    }
}    
</script>

<style scoped>
.comment {
    padding: 15px;
    background: #fff;
    margin-bottom: 10px;
    border: 1px solid #eee;
}
</style>

