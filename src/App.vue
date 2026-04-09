<script setup>
import { useRoute } from 'vue-router'
import BottomNav from './components/BottomNav.vue'
import { computed } from 'vue'

const route = useRoute()
const hideNav = computed(() => ['splash', 'login'].includes(route.name))
const isAdmin = computed(() => route.name === 'admin')
</script>

<template>
  <div class="app-shell">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <BottomNav v-if="!hideNav" :admin="isAdmin" />
  </div>
</template>

<style scoped>
.app-shell {
  max-width: 430px;
  margin: 0 auto;
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  background: var(--bg);
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
