<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeFilter = ref('all')

const filters = [
  { key: 'all', label: 'Toutes' },
  { key: 'confirmed', label: 'Confirmees' },
  { key: 'pending', label: 'En attente' },
  { key: 'cancelled', label: 'Annulees' },
]

const reservations = [
  { id: 1, client: 'Abdel-Rahim', avatar: 'AR', session: 'Cross Training', coach: 'Yassine', date: 'Mer. 2 Avril', time: '18:00', status: 'confirmed', formula: 'Pack 10' },
  { id: 2, client: 'Mehdi Bouali', avatar: 'MB', session: 'HIIT Express', coach: 'Yassine', date: 'Mer. 2 Avril', time: '07:00', status: 'confirmed', formula: 'Abo Illimite' },
  { id: 3, client: 'Lina Cherif', avatar: 'LC', session: 'Coaching Personnel', coach: 'Sarah', date: 'Mer. 2 Avril', time: '10:00', status: 'confirmed', formula: 'Pack 10 Indiv.' },
  { id: 4, client: 'Omar Kaddouri', avatar: 'OK', session: 'Cross Training', coach: 'Yassine', date: 'Mer. 2 Avril', time: '18:00', status: 'pending', formula: 'Seance unique' },
  { id: 5, client: 'Sofia Amrani', avatar: 'SA', session: 'Duo Boxing', coach: 'Karim', date: 'Jeu. 3 Avril', time: '14:00', status: 'confirmed', formula: 'Abo Binome' },
  { id: 6, client: 'Youssef Tazi', avatar: 'YT', session: 'Yoga & Stretching', coach: 'Amina', date: 'Mer. 2 Avril', time: '12:15', status: 'cancelled', formula: 'Pack 5' },
  { id: 7, client: 'Nadia Fassi', avatar: 'NF', session: 'Cardio Blast', coach: 'Sarah', date: 'Ven. 4 Avril', time: '19:30', status: 'pending', formula: 'Seance unique' },
  { id: 8, client: 'Karim Idrissi', avatar: 'KI', session: 'HIIT Express', coach: 'Yassine', date: 'Mer. 2 Avril', time: '07:00', status: 'confirmed', formula: 'Abo Illimite' },
]

const statusConfig = {
  confirmed: { label: 'Confirmee', color: '#22c55e', icon: 'check_circle' },
  pending: { label: 'En attente', color: 'var(--warning)', icon: 'schedule' },
  cancelled: { label: 'Annulee', color: 'var(--danger)', icon: 'cancel' },
}

const filtered = ref(reservations)
const filterStatus = (key) => {
  activeFilter.value = key
  filtered.value = key === 'all' ? reservations : reservations.filter(r => r.status === key)
}

const confirmed = reservations.filter(r => r.status === 'confirmed').length
const pending = reservations.filter(r => r.status === 'pending').length
</script>

<template>
  <div class="screen admin-reservations">
    <div class="screen-header">
      <h1 class="screen-title">Reservations</h1>
      <span class="badge badge-green">{{ reservations.length }} total</span>
    </div>

    <!-- Stats -->
    <div class="stats-row">
      <div class="stat-card card">
        <span class="stat-val display-title" style="color:#22c55e">{{ confirmed }}</span>
        <span class="stat-label">Confirmees</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title" style="color:var(--warning)">{{ pending }}</span>
        <span class="stat-label">En attente</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title">{{ reservations.length }}</span>
        <span class="stat-label">Total jour</span>
      </div>
    </div>

    <!-- Filters -->
    <div class="filter-row">
      <button v-for="f in filters" :key="f.key" :class="['chip', { active: activeFilter === f.key }]" @click="filterStatus(f.key)">
        {{ f.label }}
      </button>
    </div>

    <!-- Reservations list -->
    <div class="reservations-list">
      <div v-for="r in filtered" :key="r.id" class="resa-card card">
        <div class="resa-top">
          <div class="resa-client">
            <div class="resa-avatar">{{ r.avatar }}</div>
            <div class="resa-client-info">
              <span class="resa-name">{{ r.client }}</span>
              <span class="resa-formula">{{ r.formula }}</span>
            </div>
          </div>
          <div class="resa-status" :style="{ background: statusConfig[r.status].color + '10', color: statusConfig[r.status].color, borderColor: statusConfig[r.status].color + '20' }">
            <span class="mi" :style="{ fontSize: '14px' }">{{ statusConfig[r.status].icon }}</span>
            {{ statusConfig[r.status].label }}
          </div>
        </div>
        <div class="resa-session">
          <div class="resa-detail">
            <span class="mi" style="font-size:14px;color:var(--primary)">fitness_center</span>
            <span>{{ r.session }}</span>
          </div>
          <div class="resa-detail">
            <span class="mi" style="font-size:14px;color:var(--gray-400)">calendar_today</span>
            <span>{{ r.date }} · {{ r.time }}</span>
          </div>
          <div class="resa-detail">
            <span class="mi" style="font-size:14px;color:var(--gray-400)">person</span>
            <span>{{ r.coach }}</span>
          </div>
        </div>
        <div class="resa-actions" v-if="r.status !== 'cancelled'">
          <button v-if="r.status === 'pending'" class="action-pill confirm"><span class="mi" style="font-size:14px">check</span> Confirmer</button>
          <button class="action-pill cancel"><span class="mi" style="font-size:14px">close</span> Annuler</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.reservations-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.resa-card {
  padding: 16px;
}

.resa-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.resa-client {
  display: flex;
  align-items: center;
  gap: 12px;
}

.resa-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gray-50);
  border: 1.5px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: var(--primary);
  flex-shrink: 0;
}

.resa-client-info {
  display: flex;
  flex-direction: column;
}

.resa-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.resa-formula {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

.resa-status {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  border: 1px solid;
  flex-shrink: 0;
}

.resa-session {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  background: var(--gray-50);
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
}

.resa-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--navy);
  font-weight: 600;
}

.resa-actions {
  display: flex;
  gap: 8px;
}

.action-pill {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.action-pill.confirm {
  background: rgba(34, 197, 94, 0.08);
  color: #22c55e;
  border: 1.5px solid rgba(34, 197, 94, 0.2);
}

.action-pill.cancel {
  background: rgba(229, 57, 53, 0.06);
  color: var(--danger);
  border: 1.5px solid rgba(229, 57, 53, 0.15);
}

.action-pill:active { transform: scale(0.97); }
</style>
