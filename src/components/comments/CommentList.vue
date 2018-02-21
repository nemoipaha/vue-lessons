<template>
    <div class="comments-wrapper">     
        <template v-if="comments.length">
            <comment 
                v-for="comment in comments"
                :comment="comment" 
                :key="comment.id"
            />
        </template>
        <p v-else class="no-comments">No comments</p>
    </div>
</template>

<script>
import Comment from './Comment';

export default {
    props: {
        comments: {
            type: Array,
            required: true
        }
    },

    components: {
        Comment
    }
}
</script>

<style scoped>
.comments-wrapper {
 	padding-left: 35px;
    margin-top: 15px;
}

.no-comments {
    background: #fff;
    text-align: center;
    padding: 15px;
}
</style>

