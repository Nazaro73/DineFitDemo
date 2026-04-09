<script setup>
import { useRoute, useRouter } from 'vue-router'

defineProps({ admin: Boolean })
const route = useRoute()
const router = useRouter()

const clientTabs = [
  { name: 'home', icon: 'home', label: 'Accueil' },
  { name: 'calendar', icon: 'calendar_month', label: 'Planning' },
  { name: 'messages', icon: 'chat_bubble', label: 'Messages' },
  { name: 'events', icon: 'local_activity', label: 'Events' },
  { name: 'profile', icon: 'person', label: 'Profil' },
]

const adminTabs = [
  { name: 'admin', icon: 'dashboard', label: 'Board' },
  { name: 'calendar', icon: 'calendar_month', label: 'Planning' },
  { name: 'messages', icon: 'chat_bubble', label: 'Messages' },
  { name: 'events', icon: 'local_activity', label: 'Events' },
  { name: 'profile', icon: 'settings', label: 'Config' },
]

const go = (name) => router.push({ name })
</script>

<template>
  <nav class="bottom-nav">
    <div class="nav-bg"></div>
    <div class="nav-items">
      <button
        v-for="tab in (admin ? adminTabs : clientTabs)"
        :key="tab.name"
        :class="['nav-item', { active: route.name === tab.name }]"
        @click="go(tab.name)"
      >
        <div class="nav-icon-wrap">
          <span class="mi nav-icon">{{ tab.icon }}</span>
          <span v-if="tab.name === 'messages'" class="notif-dot"></span>
        </div>
        <span class="nav-label">{{ tab.label }}</span>
        <span v-if="route.name === tab.name" class="nav-indicator"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  z-index: 100;
  padding: 0 8px 6px;
  padding-bottom: max(6px, env(safe-area-inset-bottom));
}

.nav-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px) saturate(1.4);
  -webkit-backdrop-filter: blur(24px) saturate(1.4);
  border-top: 1px solid var(--gray-100);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 20px rgba(10, 46, 91, 0.06);
}

.nav-items {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0 6px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: 4px 16px;
  border-radius: var(--radius-md);
  transition: all 0.35s var(--ease-out);
  position: relative;
  font-family: var(--font-body);
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  transition: all 0.35s var(--ease-out);
}

.nav-item.active .nav-icon-wrap {
  background: rgba(255, 64, 0, 0.08);
}

.nav-item.active .nav-icon {
  filter: drop-shadow(0 0 6px rgba(255, 64, 0, 0.3));
}

.nav-icon {
  font-size: 24px;
  transition: all 0.35s var(--ease-out);
}

.nav-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.nav-indicator {
  position: absolute;
  bottom: -2px;
  width: 16px;
  height: 2.5px;
  border-radius: 2px;
  background: var(--primary);
  box-shadow: 0 0 8px rgba(255, 64, 0, 0.3);
}
</style>
