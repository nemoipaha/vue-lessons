<template>
  <div id="app">
    <app-header></app-header>  
    <transition name="fade" mode="out-in">      
      <router-view></router-view>
    </transition>    
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  
  components: {
    'app-header': Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
  
