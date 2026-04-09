<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeFilter = ref('all')

const filters = [
  { key: 'all', label: 'Toutes' },
  { key: 'collectif', label: 'Collectif' },
  { key: 'individuel', label: 'Individuel' },
  { key: 'binome', label: 'Binome' },
]

const months = [
  {
    label: 'Avril 2026',
    sessions: [
      { date: 'Mer. 2', time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', status: 'upcoming' },
      { date: 'Mar. 1', time: '08:00', title: 'HIIT Express', type: 'Collectif', coach: 'Yassine', duration: '45 min', status: 'done' },
    ]
  },
  {
    label: 'Mars 2026',
    sessions: [
      { date: 'Lun. 31', time: '10:00', title: 'Coaching Personnel', type: 'Individuel', coach: 'Sarah', duration: '60 min', status: 'done' },
      { date: 'Sam. 29', time: '09:00', title: 'Circuit Training', type: 'Collectif', coach: 'Karim', duration: '60 min', status: 'done' },
      { date: 'Jeu. 27', time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', status: 'done' },
      { date: 'Mar. 25', time: '12:15', title: 'Boxing Class', type: 'Collectif', coach: 'Karim', duration: '45 min', status: 'done' },
      { date: 'Lun. 24', time: '10:00', title: 'Coaching Personnel', type: 'Individuel', coach: 'Sarah', duration: '60 min', status: 'cancelled' },
      { date: 'Sam. 22', time: '09:00', title: 'Conditioning Boxing', type: 'Collectif', coach: 'Karim', duration: '60 min', status: 'done' },
      { date: 'Mer. 19', time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', status: 'done' },
    ]
  },
  {
    label: 'Fevrier 2026',
    sessions: [
      { date: 'Ven. 27', time: '14:00', title: 'Duo Boxing', type: 'Binome', coach: 'Karim', duration: '60 min', status: 'done' },
      { date: 'Mer. 25', time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', status: 'done' },
      { date: 'Lun. 23', time: '10:00', title: 'Coaching Personnel', type: 'Individuel', coach: 'Sarah', duration: '60 min', status: 'done' },
      { date: 'Sam. 21', time: '09:00', title: 'Lady\'ne Boxing', type: 'Collectif', coach: 'Amina', duration: '45 min', status: 'done' },
      { date: 'Jeu. 19', time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', status: 'noshow' },
    ]
  },
]

const statusConfig = {
  done: { label: 'Effectuee', color: '#22c55e', icon: 'check_circle' },
  upcoming: { label: 'A venir', color: 'var(--navy)', icon: 'schedule' },
  cancelled: { label: 'Annulee', color: 'var(--warning)', icon: 'cancel' },
  noshow: { label: 'Absent', color: 'var(--danger)', icon: 'highlight_off' },
}

const typeColor = (type) => {
  if (type === 'Individuel') return 'var(--warning)'
  if (type === 'Binome') return '#e53935'
  return 'var(--primary)'
}

const totalDone = months.reduce((acc, m) => acc + m.sessions.filter(s => s.status === 'done').length, 0)
const totalSessions = months.reduce((acc, m) => acc + m.sessions.length, 0)
</script>

<template>
  <div class="screen history-screen">
    <div class="paint-splash paint-splash--green" style="width:260px;height:260px;top:-100px;left:-80px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--gray" style="width:180px;height:180px;bottom:200px;right:-80px;opacity:0.03"></div>

    <div class="screen-header">
      <button class="back-btn" @click="router.push('/profile')">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Historique</h1>
      <div style="width:44px"></div>
    </div>

    <!-- Stats overview -->
    <div class="stats-row">
      <div class="stat-card card">
        <span class="stat-val display-title">{{ totalDone }}</span>
        <span class="stat-label">Effectuees</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title" style="color:var(--primary)">{{ totalSessions }}</span>
        <span class="stat-label">Total</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title">{{ Math.round(totalDone / totalSessions * 100) }}%</span>
        <span class="stat-label">Assiduite</span>
      </div>
    </div>

    <!-- Filters -->
    <div class="filter-row">
      <button
        v-for="f in filters"
        :key="f.key"
        :class="['chip', { active: activeFilter === f.key }]"
        @click="activeFilter = f.key"
      >
        {{ f.label }}
      </button>
    </div>

    <!-- Month groups -->
    <div v-for="month in months" :key="month.label" class="month-group">
      <div class="month-header">
        <span class="month-label display-title">{{ month.label }}</span>
        <span class="month-count">{{ month.sessions.length }} seances</span>
      </div>

      <div class="session-list">
        <div v-for="s in month.sessions" :key="s.date + s.time" class="session-item card">
          <div class="session-left">
            <div class="session-status-icon" :style="{ background: statusConfig[s.status].color + '10', borderColor: statusConfig[s.status].color + '20' }">
              <span class="mi" :style="{ color: statusConfig[s.status].color, fontSize: '18px' }">{{ statusConfig[s.status].icon }}</span>
            </div>
          </div>
          <div class="session-center">
            <div class="session-title-row">
              <h3 class="session-title">{{ s.title }}</h3>
              <span class="type-dot" :style="{ background: typeColor(s.type) }"></span>
            </div>
            <div class="session-meta">
              <span>{{ s.date }} · {{ s.time }}</span>
              <span>{{ s.coach }} · {{ s.duration }}</span>
            </div>
          </div>
          <div class="session-right">
            <span class="session-status-text" :style="{ color: statusConfig[s.status].color }">
              {{ statusConfig[s.status].label }}
            </span>
            <span class="session-type">{{ s.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-btn {
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
}

/* Stats */
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
  padding: 16px 8px;
}

.stat-val {
  font-size: 30px;
  color: var(--navy);
  line-height: 1;
}

.stat-label {
  font-size: 9px;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
}

/* Filters */
.filter-row {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
}

/* Month groups */
.month-group {
  margin-bottom: 28px;
}

.month-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
}

.month-label {
  font-size: 22px;
  color: var(--navy);
}

.month-count {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 700;
}

/* Session items */
.session-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.session-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
}

.session-left {
  flex-shrink: 0;
}

.session-status-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
}

.session-center {
  flex: 1;
  min-width: 0;
}

.session-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
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

.type-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.session-meta {
  display: flex;
  flex-direction: column;
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 600;
  line-height: 1.5;
}

.session-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  flex-shrink: 0;
}

.session-status-text {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.session-type {
  font-size: 9px;
  color: var(--gray-400);
  text-transform: uppercase;
  font-weight: 700;
}
</style>
