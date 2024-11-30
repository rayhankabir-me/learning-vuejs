<script setup>
import NavigationComponent from './components/NavigationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <NavigationComponent />
    <main>
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>
