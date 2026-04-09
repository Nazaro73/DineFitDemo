<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const menuItems = [
  { icon: 'people', label: 'Gestion Clients', count: '67', route: '' },
  { icon: 'local_offer', label: 'Prestations & Tarifs', count: '9', route: '' },
  { icon: 'payments', label: 'Suivi Paiements', count: '', route: '' },
  { icon: 'campaign', label: 'Notifications Push', count: '', route: '' },
  { icon: 'bar_chart', label: 'Statistiques', count: '', route: '' },
  { icon: 'settings', label: 'Parametres Salle', count: '', route: '' },
]
</script>

<template>
  <div class="screen settings-screen">
    <div class="screen-header">
      <h1 class="screen-title">Configuration</h1>
      <button class="icon-btn" @click="router.push('/login')">
        <span class="mi">logout</span>
      </button>
    </div>

    <!-- Menu -->
    <div class="menu-list">
      <div v-for="item in menuItems" :key="item.label" class="menu-item" @click="item.route && router.push(item.route)">
        <div class="menu-icon-wrap">
          <span class="mi menu-icon">{{ item.icon }}</span>
        </div>
        <span class="menu-label">{{ item.label }}</span>
        <span v-if="item.count" class="badge badge-green" style="margin-left:auto;margin-right:8px">{{ item.count }}</span>
        <span class="mi menu-arrow">chevron_right</span>
      </div>
    </div>

    <!-- Logout -->
    <button class="btn btn-outline btn-block logout-btn" @click="router.push('/login')">
      <span class="mi" style="font-size:18px;color:var(--danger)">logout</span>
      <span style="color:var(--danger)">Se deconnecter</span>
    </button>
  </div>
</template>

<style scoped>
.icon-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.menu-list {
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1.5px solid var(--gray-100);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--gray-100);
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:active {
  background: var(--gray-50);
}

.menu-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-xs);
  background: rgba(255, 64, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.menu-icon {
  color: var(--primary);
  font-size: 20px;
}

.menu-label {
  font-size: 13px;
  font-weight: 700;
  flex: 1;
  color: var(--navy);
}

.menu-arrow {
  color: var(--gray-300);
}

.logout-btn {
  margin-top: 26px;
  border-color: rgba(229, 57, 53, 0.2);
}
</style>
