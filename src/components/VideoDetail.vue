<template>
	<div v-if="video" class="col-md-8">
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item frame" :src="videoUrl"
				>
			</iframe>
		</div>
		<div class="details">
			<h4> {{ video.snippet.title }} </h4>
			<p> {{ video.snippet.description }} </p>
		</div>
	
	</div>
</template>

<script>
	export default{
		name: 'VideoDetail',
		props:['video'],
		computed: {
			videoUrl() {
				//const videoId = this.video.id.videoId;
				const { videoId } = this.video.id;
				return `https://www.youtube.com/embed/${videoId}`;
			}
		}
	}
</script>

<style scoped>
	.details {
		margin-top: 10px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
	.frame{
		min-width: 100%;
		min-height: 55vh;
	}
	@media screen and (max-width: 390px) {
	.frame{
		width: 100%;
	}
	}
</style>