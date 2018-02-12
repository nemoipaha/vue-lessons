<template>
	<div class="single-post">
		<router-link v-bind:to="'posts/' + post.id">
			<h2>{{ post.title | to-uppercase }}</h2>
		</router-link>
      
    	<article>{{ post.content | snippet }}</article>

		<div>
			<button @click="toggleCommentForm">Add comment</button>        
			
			<add-comment-form 
				v-if="showCommentForm" 
				v-on:saveComment="saveComment"
			/>
		</div>

		<div>
			<button type="button" @click="toggleComments">Toggle comments</button>
			<div v-if="showComments" class="comments-wrapper">     
				<template v-for="comment in postComments">
					<!-- <comment 
						:comment="comment" 
					/> -->
					<div>{{ comment.text }}</div>
				</template>				
			</div>
		</div>
	</div>
</template>

<script>
import AddCommentForm from './comments/AddCommentForm';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	components: {
		AddCommentForm
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
			loaded: false
		};
	},

	computed: {
		...mapGetters('comment', [
			'commentsByPost'
		]),

		postComments() {
			return this.commentsByPost(this.post.id);
		}
	},

	methods: {
		...mapActions('comment', [
	        'addComment',
	        'fetchComments'
      	]),

		toggleComments() {
			if (this.loaded) {
				this.showComments = !this.showComments;
				return;
			}

			this.fetchComments(this.post.id)
				.then(() => {
					this.showComments = true;
					this.loaded = true;
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
    padding: 20px;
 }

 .comments-wrapper {
 	min-height: 70px;
 	border: 1px dotted black;
 	padding-left: 15px;
 }
</style>