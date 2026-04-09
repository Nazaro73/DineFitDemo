<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeFilter = ref('all')
const activeDay = ref(2)

const days = [
  { day: 'Lun', num: '31', past: true },
  { day: 'Mar', num: '1' },
  { day: 'Mer', num: '2' },
  { day: 'Jeu', num: '3' },
  { day: 'Ven', num: '4' },
  { day: 'Sam', num: '5' },
  { day: 'Dim', num: '6' },
]

const filters = [
  { key: 'all', label: 'Tous' },
  { key: 'collectif', label: 'Collectif' },
  { key: 'individuel', label: 'Individuel' },
  { key: 'binome', label: 'Binome' },
]

const slots = [
  { time: '07:00', title: 'HIIT Express', type: 'Collectif', coach: 'Yassine', duration: '45 min', spots: 4, total: 12, booked: false, img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&q=80' },
  { time: '08:30', title: 'Musculation Guidee', type: 'Collectif', coach: 'Karim', duration: '60 min', spots: 7, total: 10, booked: false, img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&q=80' },
  { time: '10:00', title: 'Coaching Personnel', type: 'Individuel', coach: 'Sarah', duration: '60 min', spots: 1, total: 1, booked: true, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=80' },
  { time: '12:15', title: 'Yoga & Stretching', type: 'Collectif', coach: 'Amina', duration: '45 min', spots: 10, total: 15, booked: false, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&q=80' },
  { time: '14:00', title: 'Duo Boxing', type: 'Binome', coach: 'Karim', duration: '60 min', spots: 1, total: 2, booked: false, img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=300&q=80' },
  { time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', spots: 2, total: 15, booked: true, img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300&q=80' },
  { time: '19:30', title: 'Cardio Blast', type: 'Collectif', coach: 'Sarah', duration: '45 min', spots: 6, total: 12, booked: false, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&q=80' },
]

const typeColor = (type) => {
  if (type === 'Individuel') return 'var(--warning)'
  if (type === 'Binome') return '#e53935'
  return 'var(--primary)'
}

const filteredSlots = computed(() => {
  if (activeFilter.value === 'all') return slots
  return slots.filter(s => s.type.toLowerCase() === activeFilter.value)
})
</script>

<template>
  <div class="screen calendar-screen">
    <div class="paint-splash paint-splash--green" style="width:240px;height:240px;top:-80px;left:-80px;opacity:0.07"></div>

    <div class="screen-header">
      <h1 class="screen-title">Planning</h1>
      <span class="badge badge-green">Avril 2026</span>
    </div>

    <!-- Day selector -->
    <div class="day-strip">
      <button
        v-for="(d, i) in days"
        :key="i"
        :class="['day-item', { active: activeDay === i, past: d.past }]"
        @click="activeDay = i"
      >
        <span class="day-name">{{ d.day }}</span>
        <span class="day-num">{{ d.num }}</span>
      </button>
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

    <!-- Time slots -->
    <div class="timeline">
      <div v-for="s in filteredSlots" :key="s.time" :class="['slot-card', { booked: s.booked }]" @click="router.push(s.booked ? '/booking-detail' : '/booking')">
        <!-- Image -->
        <div class="slot-img-wrap">
          <img :src="s.img" :alt="s.title" class="slot-img" />
          <div class="slot-img-overlay"></div>
          <span class="slot-time-badge">{{ s.time }}</span>
          <span v-if="s.booked" class="slot-booked-check">
            <span class="mi" style="font-size:16px">check</span>
          </span>
        </div>

        <!-- Content -->
        <div class="slot-body">
          <div class="slot-head">
            <h3 class="slot-title">{{ s.title }}</h3>
            <span class="slot-badge" :style="{ background: typeColor(s.type) + '10', color: typeColor(s.type), borderColor: typeColor(s.type) + '20' }">
              {{ s.type }}
            </span>
          </div>
          <div class="slot-meta">
            <span><span class="mi" style="font-size:13px">person</span> {{ s.coach }}</span>
            <span><span class="mi" style="font-size:13px">schedule</span> {{ s.duration }}</span>
          </div>
          <div class="slot-footer">
            <div class="spots-bar">
              <div class="spots-fill" :style="{ width: ((s.total - s.spots) / s.total * 100) + '%', background: s.booked ? 'var(--primary)' : typeColor(s.type) }"></div>
            </div>
            <span class="spots-text" :style="{ color: s.spots <= 2 ? 'var(--danger)' : 'var(--gray-400)' }">
              {{ s.spots }} place{{ s.spots > 1 ? 's' : '' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Day strip */
.day-strip {
  display: flex;
  gap: 6px;
  padding: 4px 0 18px;
  overflow-x: auto;
}

.day-item {
  flex: 1;
  min-width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 8px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  color: var(--navy);
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.35s var(--ease-out);
}

.day-item.active {
  background: var(--primary-gradient);
  border-color: var(--primary);
  color: var(--white);
  box-shadow: var(--shadow-primary);
  transform: scale(1.05);
}

.day-item.past {
  opacity: 0.35;
}

.day-name {
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.day-num {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
}

/* Filters */
.filter-row {
  display: flex;
  gap: 8px;
  padding-bottom: 22px;
  overflow-x: auto;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slot-card {
  display: flex;
  gap: 14px;
  cursor: pointer;
  transition: all 0.35s var(--ease-out);
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 10px;
  border: 1.5px solid var(--gray-100);
  box-shadow: var(--shadow-sm);
}

.slot-card.booked {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px rgba(255, 64, 0, 0.08), 0 4px 20px rgba(255, 64, 0, 0.10);
}

.slot-card:active {
  transform: scale(0.98);
}

/* Image */
.slot-img-wrap {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.slot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slot-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10,46,91,0.05) 0%, rgba(10,46,91,0.25) 100%);
}

.slot-time-badge {
  position: absolute;
  bottom: 6px;
  left: 6px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 2px 8px;
  border-radius: 6px;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.01em;
}

.slot-booked-check {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(255, 64, 0, 0.3);
}

/* Body */
.slot-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  min-width: 0;
}

.slot-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.slot-title {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 800;
  color: var(--navy);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.slot-badge {
  padding: 3px 8px;
  border-radius: var(--radius-full);
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border: 1px solid;
  white-space: nowrap;
  flex-shrink: 0;
}

.slot-meta {
  display: flex;
  gap: 12px;
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

.slot-meta span {
  display: flex;
  align-items: center;
  gap: 3px;
}

.slot-footer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spots-bar {
  flex: 1;
  height: 3px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
}

.spots-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s var(--ease-out);
}

.spots-text {
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}
</style>
