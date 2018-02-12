<template>
	<div class="comment-wrapper">
		<div>
			<label>Text: </label>
			<br>
			<textarea v-model="comment.text" placeholder="text here"></textarea>			
		</div>
		<button @click="saveComment">Add comment</button>
	</div>		
</template>

<script>
export default {
	name: 'AddCommentForm',

	data() {
		return {
			comment: {
				text: ''
			}			
		};
	},

	methods: {
		saveComment() {
			this.$emit('saveComment', this.comment);
		}
	}
}
</script>

<style scoped>
.comment-wrapper {
	border: 1px dotted orange;
	padding: 15px;
	margin: 10px 0;
}	
</style>