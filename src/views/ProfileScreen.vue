<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const menuItems = [
  { icon: 'credit_card', label: 'Mes paiements', badge: '', route: '' },
  { icon: 'local_offer', label: 'Mes abonnements', badge: 'Actif', route: '/subscriptions' },
  { icon: 'history', label: 'Historique seances', badge: '24', route: '/history' },
  { icon: 'receipt_long', label: 'Factures', badge: '', route: '' },
  { icon: 'notifications', label: 'Preferences notifications', badge: '', route: '' },
  { icon: 'help', label: 'Aide & Support', badge: '', route: '' },
]

const sessions = [
  { date: 'Aujourd\'hui', time: '18:00', title: 'Cross Training', status: 'upcoming' },
  { date: 'Demain', time: '10:30', title: 'Coaching Individuel', status: 'upcoming' },
  { date: 'Ven. 4 Avril', time: '08:00', title: 'HIIT Express', status: 'upcoming' },
]
</script>

<template>
  <div class="screen profile-screen">
    <div class="paint-splash paint-splash--green" style="width:280px;height:280px;top:-80px;right:-100px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--gray" style="width:180px;height:180px;bottom:300px;left:-80px;opacity:0.03"></div>

    <div class="screen-header">
      <h1 class="screen-title">Profil</h1>
      <button class="icon-btn" @click="router.push('/notifications')">
        <span class="mi">settings</span>
      </button>
    </div>

    <!-- Profile card -->
    <div class="profile-card card card-glow">
      <div class="profile-top">
        <div class="profile-avatar">
          <span>AR</span>
        </div>
        <div class="profile-info">
          <h2 class="profile-name display-title" style="font-size:26px">Abdel-Rahim</h2>
          <p class="profile-email">abdel@example.com</p>
          <span class="badge badge-green">Membre depuis Jan. 2026</span>
        </div>
      </div>
      <div class="profile-stats">
        <div class="p-stat">
          <span class="p-stat-val display-title">7</span>
          <span class="p-stat-label">Restantes</span>
        </div>
        <div class="p-stat">
          <span class="p-stat-val display-title primary">24</span>
          <span class="p-stat-label">Total</span>
        </div>
        <div class="p-stat">
          <span class="p-stat-val-text">Pack 10</span>
          <span class="p-stat-label">Formule</span>
        </div>
      </div>
    </div>

    <!-- Upcoming -->
    <div class="section">
      <span class="section-label">Seances A Venir</span>
      <div class="upcoming-list">
        <div v-for="s in sessions" :key="s.title" class="upcoming-item card">
          <div class="upcoming-date">
            <span class="up-time">{{ s.time }}</span>
            <span class="up-day">{{ s.date }}</span>
          </div>
          <div class="upcoming-info">
            <span class="up-title">{{ s.title }}</span>
          </div>
          <button class="btn btn-sm btn-outline">Annuler</button>
        </div>
      </div>
    </div>

    <!-- Menu -->
    <div class="section">
      <span class="section-label">Parametres</span>
      <div class="menu-list">
        <div v-for="item in menuItems" :key="item.label" class="menu-item" @click="item.route && router.push(item.route)">
          <div class="menu-icon-wrap">
            <span class="mi menu-icon">{{ item.icon }}</span>
          </div>
          <span class="menu-label">{{ item.label }}</span>
          <span v-if="item.badge" class="badge badge-green" style="margin-left:auto;margin-right:8px">{{ item.badge }}</span>
          <span class="mi menu-arrow">chevron_right</span>
        </div>
      </div>
    </div>

    <!-- Logout -->
    <button class="btn btn-outline btn-block logout-btn" @click="router.push('/')">
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

.profile-card {
  margin-top: 8px;
  padding: 22px;
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;
}

.profile-avatar {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--primary-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 800;
  color: var(--white);
  flex-shrink: 0;
  box-shadow: 0 0 24px rgba(255, 64, 0, 0.15);
}

.profile-name {
  margin-bottom: 4px;
  color: var(--navy);
}

.profile-email {
  font-size: 12px;
  color: var(--gray-400);
  margin-bottom: 8px;
  font-weight: 500;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  padding-top: 18px;
  border-top: 1.5px solid var(--gray-100);
}

.p-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.p-stat-val {
  font-size: 32px;
  color: var(--navy);
}

.p-stat-val.primary {
  color: var(--primary);
}

.p-stat-val-text {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 800;
  color: var(--navy);
}

.p-stat-label {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 700;
}

.section {
  margin-top: 30px;
}

.upcoming-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.upcoming-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.upcoming-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
}

.up-time {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 800;
  color: var(--navy);
}

.up-day {
  font-size: 9px;
  color: var(--gray-400);
  text-transform: uppercase;
  font-weight: 700;
}

.upcoming-info {
  flex: 1;
}

.up-title {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

/* Menu */
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
  font-weight: 600;
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

.logout-btn:active {
  background: rgba(229, 57, 53, 0.04);
}
</style>
