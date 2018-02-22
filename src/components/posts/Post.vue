<template>
	<div class="single-post">
		<router-link :to="'posts/' + post.id" class="post-item-link">
			<span>{{ post.title | capitalize }}</span>
		</router-link>
      
    	<article>{{ post.content }}</article>

		<div>
			<button @click="toggleCommentForm">Add comment</button>        			
			<add-comment-form 
				v-if="showCommentForm" 
				v-on:saveComment="saveComment"
			/>
		</div>

		<div>
			<button type="button" @click="toggleComments">Toggle comments</button>
			<template v-if="showComments">
				<CommentList 
					:comments="comments"
				/>
			</template>
		</div>
	</div>
</template>

<script>
import AddCommentForm from '../comments/AddCommentForm';
import CommentList from '../comments/CommentList';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	components: {
		AddCommentForm,
		CommentList
	},

	props: {
		post: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			showComments: false,
			showCommentForm: false,
			commentsLoaded: false,
		};
	},

	computed: {
		...mapGetters('comment', [
			'commentsByPost'
		]),

		comments() {
			return this.commentsByPost(this.post.id);
		}
	},

	methods: {
		...mapActions('comment', [
	        'addComment',
	        'fetchComments'
      	]),

		toggleComments() {
			if (this.commentsLoaded) {
				this.showComments = !this.showComments;
				return;
			}

			this.fetchComments(this.post.id)
				.then(() => {
					this.showComments = true;
					this.commentsLoaded = true;
				});
		},

		toggleCommentForm() {
			this.showCommentForm = !this.showCommentForm;
		},

		saveComment(commentBody) {
			this.addComment({
				postId: this.post.id,
				text: commentBody.text,
				comments: []
			})
			.then(() => {
				this.showCommentForm = false;
			});
		}
	}
}	
</script>

<style scoped>
.single-post {
    box-sizing: border-box;
    margin: 20px 0;
    background: #eee;
    padding: 45px;
}

article {
	margin-bottom: 15px;
}

.post-item-link {
	color: darkgreen;;
	font-size: 22px;
}
</style>