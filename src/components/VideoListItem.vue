<template>
  <div>
		<li class="list-group-item media" @click="onVideoSelect">
			<img class="mr-3" :src="thumbnailUrl" alt="Thumbnail of video"/>
			<div class="media-body titleP">
				{{ video.snippet.title }}
			</div>
		</li>
	</div>
</template>

<script>
	export default{
		name: 'VideoListItem',
		props: ['video'],
		computed:{ //format data
			thumbnailUrl(){
				return this.video.snippet.thumbnails.default.url;
			}
		},
		methods:{
			onVideoSelect(){
				this.$emit('videoSelect', this.video);
			}
		}
	}
</script>

<style scoped>
	li{
		display: flex;
		cursor: pointer;
	}
	li:hover{
		background-color: #eee ;
	}
	.titleP{
		margin-left:1rem;
	}

</style>