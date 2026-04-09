<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const events = [
  {
    title: 'Circuit Training',
    desc: 'Enchainez les ateliers pour un entrainement complet et intense.',
    date: 'Sam. 12 Avril',
    time: '09:00 - 17:00',
    spots: 8,
    total: 20,
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80',
    tag: 'Stage',
    tagColor: '#e53935',
  },
  {
    title: 'Boxing Class',
    desc: 'Cours de boxe collectif : technique, cardio et renforcement.',
    date: '1 - 30 Avril',
    time: 'Tout le mois',
    spots: 45,
    total: 50,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    tag: 'Competition',
    tagColor: 'var(--warning)',
  },
  {
    title: 'Conditioning Boxing',
    desc: 'Preparation physique orientee boxe : endurance, explosivite, gainage.',
    date: 'Ven. 18 Avril',
    time: '19:00 - 21:00',
    spots: 3,
    total: 15,
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&q=80',
    tag: 'Special',
    tagColor: 'var(--primary)',
  },
  {
    title: 'Lady\'ne Boxing',
    desc: 'Cours de boxe reserve aux femmes : technique et confiance en soi.',
    date: 'Dim. 20 Avril',
    time: '08:00 - 09:30',
    spots: 12,
    total: 25,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    tag: 'Plein air',
    tagColor: 'var(--navy)',
  },
]
</script>

<template>
  <div class="screen events-screen">
    <div class="paint-splash paint-splash--green" style="width:300px;height:300px;top:-120px;right:-120px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--gray" style="width:200px;height:200px;bottom:300px;left:-100px;opacity:0.03"></div>

    <div class="screen-header">
      <h1 class="screen-title">Events</h1>
      <span class="badge badge-green">4 a venir</span>
    </div>

    <!-- Events -->
    <div class="events-list">
      <div v-for="e in events" :key="e.title" class="event-card card">
        <div class="event-visual">
          <img :src="e.image" :alt="e.title" class="event-img" />
          <div class="event-img-overlay"></div>
          <span class="event-tag" :style="{ background: e.tagColor + '12', color: e.tagColor, borderColor: e.tagColor + '25' }">
            {{ e.tag }}
          </span>
        </div>
        <div class="event-body">
          <h3 class="event-title display-title">{{ e.title }}</h3>
          <p class="event-desc">{{ e.desc }}</p>
          <div class="event-meta">
            <div class="meta-item">
              <span class="mi" style="font-size:15px;color:var(--primary)">calendar_today</span>
              <span>{{ e.date }}</span>
            </div>
            <div class="meta-item">
              <span class="mi" style="font-size:15px;color:var(--primary)">schedule</span>
              <span>{{ e.time }}</span>
            </div>
          </div>
          <div class="event-footer">
            <div class="event-spots">
              <div class="spots-bar">
                <div class="spots-fill" :style="{ width: ((e.total - e.spots) / e.total * 100) + '%' }"></div>
              </div>
              <span :class="['spots-text', { danger: e.spots <= 3 }]">{{ e.spots }} places restantes</span>
            </div>
            <button class="btn btn-primary btn-sm">S'inscrire</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.event-card {
  padding: 0;
  overflow: hidden;
}

.event-visual {
  height: 140px;
  position: relative;
  overflow: hidden;
}

.event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.event-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10,46,91,0.05) 0%, rgba(10,46,91,0.20) 100%);
}

.event-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid;
  z-index: 1;
}

.event-body {
  padding: 16px 18px 18px;
}

.event-title {
  font-size: 22px;
  color: var(--navy);
  margin-bottom: 6px;
}

.event-desc {
  font-size: 12px;
  color: var(--gray-400);
  line-height: 1.45;
  font-weight: 500;
}

.event-meta {
  display: flex;
  gap: 20px;
  padding: 14px 0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--gray-500);
  font-weight: 600;
}

.event-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.event-spots {
  flex: 1;
}

.spots-bar {
  height: 3px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}

.spots-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 2px;
}

.spots-text {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 600;
}

.spots-text.danger {
  color: var(--danger);
  font-weight: 700;
}
</style>
