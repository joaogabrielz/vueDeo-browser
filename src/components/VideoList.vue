<template>
		<ul class="list-group col-md-4">
			<VideoListItem
				v-for="video in videos" 
				:key="video.etag"
				v-bind:video="video"
				@videoSelect="onVideoSelect"
			>
			</VideoListItem>
		</ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue';

	export default{
		name: 'VideoList',
		components:{
			VideoListItem
		},
		props: {
			videos:{
				type: Array,
				required: true
			},
		},
		methods:{
			onVideoSelect(video){
				this.$emit('videoSelect', video)
			}
		}
	}
</script>

<style scoped>

</style>