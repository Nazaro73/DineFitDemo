<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const events = [
  { id: 1, title: 'Circuit Training', date: 'Sam. 12 Avril', time: '09:00 - 17:00', spots: 8, total: 20, tag: 'Stage', status: 'active', img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80' },
  { id: 2, title: 'Boxing Class', date: '1 - 30 Avril', time: 'Tout le mois', spots: 45, total: 50, tag: 'Competition', status: 'active', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80' },
  { id: 3, title: 'Conditioning Boxing', date: 'Ven. 18 Avril', time: '19:00 - 21:00', spots: 3, total: 15, tag: 'Special', status: 'active', img: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&q=80' },
  { id: 4, title: "Lady'ne Boxing", date: 'Dim. 20 Avril', time: '08:00 - 09:30', spots: 12, total: 25, tag: 'Plein air', status: 'draft', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
]
</script>

<template>
  <div class="screen admin-events">
    <div class="screen-header">
      <h1 class="screen-title">Events</h1>
      <button class="add-btn" @click="router.push('/admin/events/create')">
        <span class="mi" style="font-size:20px">add</span>
        Creer
      </button>
    </div>

    <!-- Stats -->
    <div class="stats-row">
      <div class="stat-card card">
        <span class="stat-val display-title" style="color:var(--primary)">{{ events.filter(e => e.status === 'active').length }}</span>
        <span class="stat-label">Actifs</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title">{{ events.reduce((a, e) => a + (e.total - e.spots), 0) }}</span>
        <span class="stat-label">Inscrits</span>
      </div>
      <div class="stat-card card">
        <span class="stat-val display-title">{{ events.length }}</span>
        <span class="stat-label">Total</span>
      </div>
    </div>

    <!-- Events list -->
    <div class="events-list">
      <div v-for="e in events" :key="e.id" class="event-card">
        <div class="event-img-wrap">
          <img :src="e.img" :alt="e.title" class="event-img" />
          <div class="event-img-overlay"></div>
          <span class="event-tag">{{ e.tag }}</span>
          <span v-if="e.status === 'draft'" class="draft-badge">Brouillon</span>
        </div>
        <div class="event-body">
          <div class="event-head">
            <h3 class="event-title">{{ e.title }}</h3>
            <div class="event-actions">
              <button class="action-btn"><span class="mi">edit</span></button>
              <button class="action-btn delete"><span class="mi">delete</span></button>
            </div>
          </div>
          <div class="event-meta">
            <span><span class="mi" style="font-size:13px;color:var(--primary)">calendar_today</span> {{ e.date }}</span>
            <span><span class="mi" style="font-size:13px;color:var(--primary)">schedule</span> {{ e.time }}</span>
          </div>
          <div class="event-capacity">
            <div class="cap-bar">
              <div class="cap-fill" :style="{ width: ((e.total - e.spots) / e.total * 100) + '%' }"></div>
            </div>
            <span class="cap-text" :style="{ color: e.spots <= 3 ? 'var(--danger)' : 'var(--gray-400)' }">
              {{ e.total - e.spots }}/{{ e.total }} inscrits · {{ e.spots }} places restantes
            </span>
          </div>
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

.events-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.event-card {
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1.5px solid var(--gray-100);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.event-img-wrap {
  height: 120px;
  position: relative;
  overflow: hidden;
}

.event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10,46,91,0.05) 0%, rgba(10,46,91,0.25) 100%);
}

.event-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--navy);
}

.draft-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--warning);
  color: var(--white);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
}

.event-body {
  padding: 14px 16px 16px;
}

.event-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.event-title {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 800;
  color: var(--navy);
}

.event-actions {
  display: flex;
  gap: 4px;
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
}

.action-btn .mi { font-size: 16px; }
.action-btn.delete { color: var(--danger); }

.event-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
}

.event-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--gray-500);
  font-weight: 600;
}

.event-capacity {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cap-bar {
  height: 4px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
}

.cap-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 2px;
}

.cap-text {
  font-size: 10px;
  font-weight: 700;
}
</style>
