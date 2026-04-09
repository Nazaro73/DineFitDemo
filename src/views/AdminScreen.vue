<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const kpis = [
  { label: 'Reservations', value: '24', change: '+8%', icon: 'event_available', color: 'var(--primary)' },
  { label: 'Revenus', value: '1 840', unit: 'EUR', change: '+12%', icon: 'payments', color: 'var(--warning)' },
  { label: 'Clients actifs', value: '67', change: '+3', icon: 'people', color: 'var(--navy)' },
  { label: 'Remplissage', value: '78%', change: '+5%', icon: 'trending_up', color: '#e53935' },
]

const todaySchedule = [
  { time: '07:00', title: 'HIIT Express', coach: 'Yassine', booked: 10, capacity: 12 },
  { time: '08:30', title: 'Musculation', coach: 'Karim', booked: 8, capacity: 10 },
  { time: '10:00', title: 'Coaching - Abdel', coach: 'Sarah', booked: 1, capacity: 1 },
  { time: '12:15', title: 'Yoga', coach: 'Amina', booked: 12, capacity: 15 },
  { time: '18:00', title: 'Cross Training', coach: 'Yassine', booked: 14, capacity: 15 },
  { time: '19:30', title: 'Cardio Blast', coach: 'Sarah', booked: 9, capacity: 12 },
]

const recentClients = [
  { name: 'Mehdi Bouali', plan: 'Abo Collectif', status: 'Actif' },
  { name: 'Lina Cherif', plan: 'Pack 10 Individuel', status: 'Actif' },
  { name: 'Omar Kaddouri', plan: 'Seance unique', status: 'Expire' },
  { name: 'Sofia Amrani', plan: 'Abo Binome', status: 'Actif' },
]

const adminMenu = [
  { icon: 'people', label: 'Gestion Clients', count: '67' },
  { icon: 'local_offer', label: 'Prestations & Tarifs', count: '9' },
  { icon: 'payments', label: 'Suivi Paiements', count: '' },
  { icon: 'calendar_month', label: 'Planning Complet', count: '' },
  { icon: 'local_activity', label: 'Evenements', count: '4' },
  { icon: 'campaign', label: 'Notifications Push', count: '' },
]
</script>

<template>
  <div class="screen admin-screen">
    <div class="paint-splash paint-splash--green" style="width:340px;height:340px;top:-140px;right:-120px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--gray" style="width:220px;height:220px;bottom:200px;left:-100px;opacity:0.03"></div>

    <div class="screen-header">
      <div>
        <p class="admin-sub">Dashboard</p>
        <h1 class="screen-title" style="font-family:var(--font-display);font-size:30px">DineFit Admin</h1>
      </div>
      <div style="display:flex;gap:8px">
        <button class="icon-btn" @click="router.push('/notifications')">
          <span class="mi">notifications</span>
          <span class="notif-dot"></span>
        </button>
        <button class="icon-btn" @click="router.push('/login')">
          <span class="mi">logout</span>
        </button>
      </div>
    </div>

    <!-- KPIs -->
    <div class="kpi-grid">
      <div v-for="k in kpis" :key="k.label" class="kpi-card card">
        <div class="kpi-top">
          <div class="kpi-icon" :style="{ background: k.color + '10', borderColor: k.color + '20' }">
            <span class="mi" :style="{ color: k.color, fontSize: '18px' }">{{ k.icon }}</span>
          </div>
          <span class="kpi-change">{{ k.change }}</span>
        </div>
        <div class="kpi-value-row">
          <span class="kpi-value display-title">{{ k.value }}</span>
          <span v-if="k.unit" class="kpi-unit">{{ k.unit }}</span>
        </div>
        <span class="kpi-label">{{ k.label }}</span>
      </div>
    </div>

    <!-- Today schedule -->
    <div class="section">
      <div class="section-head">
        <span class="section-label">Planning Du Jour</span>
        <span class="badge badge-green">{{ todaySchedule.length }} cours</span>
      </div>
      <div class="schedule-list">
        <div v-for="s in todaySchedule" :key="s.time" class="schedule-item card">
          <span class="sched-time">{{ s.time }}</span>
          <div class="sched-info">
            <span class="sched-title">{{ s.title }}</span>
            <span class="sched-coach">{{ s.coach }}</span>
          </div>
          <div class="sched-fill-wrap">
            <div class="sched-bar">
              <div class="sched-bar-fill" :style="{ width: (s.booked/s.capacity*100)+'%', background: s.booked >= s.capacity ? 'var(--danger)' : 'var(--primary)' }"></div>
            </div>
            <span class="sched-count" :style="{ color: s.booked >= s.capacity ? 'var(--danger)' : 'var(--gray-400)' }">{{ s.booked }}/{{ s.capacity }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent clients -->
    <div class="section">
      <div class="section-head">
        <span class="section-label">Derniers Clients</span>
        <button class="see-all">Voir tous</button>
      </div>
      <div class="clients-list">
        <div v-for="c in recentClients" :key="c.name" class="client-item">
          <div class="avatar">{{ c.name[0] }}</div>
          <div class="client-info">
            <span class="client-name">{{ c.name }}</span>
            <span class="client-plan">{{ c.plan }}</span>
          </div>
          <span :class="['badge', c.status === 'Actif' ? 'badge-green' : 'badge-gray']">{{ c.status }}</span>
        </div>
      </div>
    </div>

    <!-- Admin menu -->
    <div class="section">
      <span class="section-label">Administration</span>
      <div class="admin-menu">
        <div v-for="m in adminMenu" :key="m.label" class="admin-menu-item card">
          <div class="admin-menu-icon-wrap">
            <span class="mi" style="font-size:22px;color:var(--primary)">{{ m.icon }}</span>
          </div>
          <span class="admin-menu-label">{{ m.label }}</span>
          <span v-if="m.count" class="badge badge-green" style="margin-left:auto">{{ m.count }}</span>
          <span class="mi" style="color:var(--gray-300);margin-left:auto">chevron_right</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-sub {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

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
  position: relative;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

/* KPIs */
.kpi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 4px;
}

.kpi-card {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 18px;
}

.kpi-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.kpi-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
}

.kpi-change {
  font-size: 11px;
  font-weight: 800;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.kpi-value-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.kpi-value {
  font-size: 28px;
  color: var(--navy);
}

.kpi-unit {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 700;
}

.kpi-label {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 700;
}

/* Schedule */
.section {
  margin-top: 28px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.see-all {
  background: none;
  border: none;
  color: var(--primary);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
}

.sched-time {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-500);
  min-width: 44px;
}

.sched-info {
  flex: 1;
}

.sched-title {
  display: block;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.sched-coach {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 600;
}

.sched-fill-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  min-width: 60px;
}

.sched-bar {
  width: 100%;
  height: 3px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
}

.sched-bar-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s var(--ease-out);
}

.sched-count {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
}

/* Clients */
.clients-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.client-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 4px;
  border-bottom: 1px solid var(--gray-100);
  transition: all 0.2s var(--ease-out);
}

.client-info {
  flex: 1;
}

.client-name {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}

.client-plan {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

/* Admin menu */
.admin-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.admin-menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  padding: 16px;
}

.admin-menu-item:active {
  border-color: rgba(255, 64, 0, 0.15);
}

.admin-menu-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(255, 64, 0, 0.06);
  border: 1.5px solid rgba(255, 64, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.admin-menu-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}
</style>
