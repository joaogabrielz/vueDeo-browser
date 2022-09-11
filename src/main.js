import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App) // h => createElement
})
.$mount('#app'); //Like el: '#app'