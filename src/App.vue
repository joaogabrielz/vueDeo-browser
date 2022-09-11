<template>
<div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail class="" :video="selectedVideo"/>
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
</div>
</template>

<script>


//Components
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';

import axios from 'axios';
const API_KEY = process.env.APIKEY; //API from youtube Data Api

export default {
  name: 'App', //Easier to bebbug inside browser;
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data(){
    return{
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    onVideoSelect(video){
      this.selectedVideo = video;
    },
    onTermChange(searchTerm){
      axios.get('https://www.googleapis.com/youtube/v3/search',{
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
      .then((response) => {
        this.videos = response.data.items;
      })
      .catch(e => console.log(e));
    }
  }
};
</script>

<style scoped>

</style>