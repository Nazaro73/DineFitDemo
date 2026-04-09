<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeDay = ref('all')

const days = [
  { key: 'all', label: 'Tous' },
  { key: 'lun', label: 'Lun' },
  { key: 'mar', label: 'Mar' },
  { key: 'mer', label: 'Mer' },
  { key: 'jeu', label: 'Jeu' },
  { key: 'ven', label: 'Ven' },
  { key: 'sam', label: 'Sam' },
]

const sessions = [
  { id: 1, time: '07:00', title: 'HIIT Express', type: 'Collectif', coach: 'Yassine', duration: '45 min', capacity: 12, booked: 10, day: 'lun', active: true },
  { id: 2, time: '08:30', title: 'Musculation Guidee', type: 'Collectif', coach: 'Karim', duration: '60 min', capacity: 10, booked: 8, day: 'lun', active: true },
  { id: 3, time: '10:00', title: 'Coaching Personnel', type: 'Individuel', coach: 'Sarah', duration: '60 min', capacity: 1, booked: 1, day: 'mer', active: true },
  { id: 4, time: '12:15', title: 'Yoga & Stretching', type: 'Collectif', coach: 'Amina', duration: '45 min', capacity: 15, booked: 12, day: 'mer', active: true },
  { id: 5, time: '14:00', title: 'Duo Boxing', type: 'Binome', coach: 'Karim', duration: '60 min', capacity: 2, booked: 1, day: 'jeu', active: true },
  { id: 6, time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', capacity: 15, booked: 14, day: 'mer', active: true },
  { id: 7, time: '19:30', title: 'Cardio Blast', type: 'Collectif', coach: 'Sarah', duration: '45 min', capacity: 12, booked: 6, day: 'ven', active: false },
  { id: 8, time: '09:00', title: "Lady'ne Boxing", type: 'Collectif', coach: 'Amina', duration: '60 min', capacity: 15, booked: 0, day: 'sam', active: true },
]

const filteredSessions = ref(sessions)

const typeColor = (type) => {
  if (type === 'Individuel') return 'var(--warning)'
  if (type === 'Binome') return '#e53935'
  return 'var(--primary)'
}

const filterDay = (key) => {
  activeDay.value = key
  filteredSessions.value = key === 'all' ? sessions : sessions.filter(s => s.day === key)
}

const fillPercent = (s) => Math.round(s.booked / s.capacity * 100)
</script>

<template>
  <div class="screen admin-sessions">
    <div class="screen-header">
      <h1 class="screen-title">Seances</h1>
      <button class="add-btn" @click="router.push('/admin/sessions/create')">
        <span class="mi" style="font-size:20px">add</span>
        Creer
      </button>
    </div>

    <!-- Stats -->
    <div class="stats-row">
      <div class="stat-card card">
        <span class="stat-val display-title">{{ sessions.length }}</span>
        <span class="stat-label">Total</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title" style="color:var(--primary)">{{ sessions.filter(s => s.active).length }}</span>
        <span class="stat-label">Actives</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title">4</span>
        <span class="stat-label">Coaches</span>
      </div>
    </div>

    <!-- Day filter -->
    <div class="filter-row">
      <button v-for="d in days" :key="d.key" :class="['chip', { active: activeDay === d.key }]" @click="filterDay(d.key)">
        {{ d.label }}
      </button>
    </div>

    <!-- Sessions list -->
    <div class="sessions-list">
      <div v-for="s in filteredSessions" :key="s.id" class="session-item card">
        <div class="session-left">
          <div class="session-color-bar" :style="{ background: typeColor(s.type) }"></div>
          <div class="session-time-block">
            <span class="session-time">{{ s.time }}</span>
            <span class="session-duration">{{ s.duration }}</span>
          </div>
        </div>
        <div class="session-center">
          <div class="session-title-row">
            <h3 class="session-title">{{ s.title }}</h3>
            <span v-if="!s.active" class="inactive-badge">Inactive</span>
          </div>
          <div class="session-meta">
            <span class="meta-coach"><span class="mi" style="font-size:13px">person</span> {{ s.coach }}</span>
            <span class="meta-type" :style="{ color: typeColor(s.type) }">{{ s.type }}</span>
          </div>
          <div class="session-capacity">
            <div class="cap-bar">
              <div class="cap-fill" :style="{ width: fillPercent(s) + '%', background: s.booked >= s.capacity ? 'var(--danger)' : typeColor(s.type) }"></div>
            </div>
            <span class="cap-text" :style="{ color: s.booked >= s.capacity ? 'var(--danger)' : 'var(--gray-400)' }">{{ s.booked }}/{{ s.capacity }}</span>
          </div>
        </div>
        <div class="session-actions">
          <button class="action-btn"><span class="mi">edit</span></button>
          <button class="action-btn delete"><span class="mi">delete</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-primary);
  transition: all 0.3s var(--ease-out);
}

.add-btn:active { transform: scale(0.95); }

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 14px 8px;
}

.stat-val { font-size: 28px; color: var(--navy); }
.stat-label { font-size: 9px; color: var(--gray-400); text-transform: uppercase; font-weight: 700; }

.filter-row {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
  overflow-x: auto;
}

.sessions-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.session-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
}

.session-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.session-color-bar {
  width: 4px;
  height: 44px;
  border-radius: 2px;
  flex-shrink: 0;
}

.session-time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 42px;
}

.session-time {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 800;
  color: var(--navy);
}

.session-duration {
  font-size: 9px;
  color: var(--gray-400);
  font-weight: 700;
}

.session-center {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.session-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.session-title {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.inactive-badge {
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--gray-400);
  background: var(--gray-100);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.session-meta {
  display: flex;
  gap: 10px;
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

.meta-coach {
  display: flex;
  align-items: center;
  gap: 3px;
}

.meta-type {
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
}

.session-capacity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cap-bar {
  flex: 1;
  height: 3px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
}

.cap-fill {
  height: 100%;
  border-radius: 2px;
}

.cap-text {
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.session-actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}

.action-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn .mi { font-size: 16px; }

.action-btn.delete { color: var(--danger); }
.action-btn:active { background: var(--gray-100); }
</style>
