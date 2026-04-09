<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const upcomingSessions = [
  { time: '10:00', title: 'Coaching Personnel', type: 'Individuel', coach: 'Sarah', duration: '60 min', spots: 0, total: 1, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', date: 'Aujourd\'hui', countdown: 'Dans 1h' },
  { time: '18:00', title: 'Cross Training', type: 'Collectif', coach: 'Yassine', duration: '60 min', spots: 2, total: 15, img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80', date: 'Aujourd\'hui', countdown: 'Dans 9h' },
]

const typeColor = (type) => {
  if (type === 'Individuel') return 'var(--warning)'
  if (type === 'Binome') return '#e53935'
  return 'var(--primary)'
}

const quickActions = [
  { icon: 'calendar_month', label: 'Reserver', route: 'calendar', color: '#ff4000', bg: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80' },
  { icon: 'local_offer', label: 'Tarifs', route: 'pricing', color: '#f59e0b', bg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80' },
  { icon: 'local_activity', label: 'Events', route: 'events', color: '#e53935', bg: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80' },
  { icon: 'chat_bubble', label: 'Messages', route: 'messages', color: '#0a2e5b', bg: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
]

const news = [
  { id: 'boxing-class-annulee', title: 'Boxing Class annulee', desc: 'Pas de Boxing Class du 20 avril au 25 mai', time: 'Il y a 2h', urgent: true },
  { id: 'ladyne-boxing-reouverture', title: 'Lady\'ne Boxing est de retour !', desc: 'Inscriptions ouvertes jusqu\'a fin avril', time: 'Hier', urgent: false },
]
</script>

<template>
  <div class="screen home-screen">
    <!-- Paint splashes -->
    <div class="paint-splash paint-splash--green" style="width:320px;height:320px;top:-120px;right:-140px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--gray" style="width:200px;height:200px;bottom:200px;left:-100px;opacity:0.04"></div>

    <!-- Header -->
    <div class="home-header">
      <div class="header-top-row">
        <div class="header-right">
          <button class="icon-btn" @click="router.push('/notifications')">
            <span class="mi">notifications</span>
            <span class="notif-dot"></span>
          </button>
          <div class="avatar avatar-lg" @click="router.push('/profile')">AR</div>
        </div>
      </div>
      <div class="header-logo">
        <img src="https://www.dinefit.fr/wp-content/uploads/2025/01/DineFit-Logo-bleu-1-1_lwsoptimized-scaled_lwsoptimized-1947x2048.webp" alt="DineFit" class="logo-img" />
      </div>

      <div class="header-greeting">
        <p class="greeting-sub">Bonjour</p>
        <h1 class="greeting-name display-title">Abdel-Rahim</h1>
      </div>
    </div>

    <!-- Stats card -->
    <div class="stats-card card card-glow">
      <div class="stats-row">
        <div class="stat">
          <span class="stat-value display-title">3</span>
          <span class="stat-label">Restantes</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value display-title primary">7</span>
          <span class="stat-label">Ce mois</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value-text">Pack</span>
          <span class="stat-label">10 seances</span>
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 70%"></div>
      </div>
      <p class="progress-label">7/10 seances utilisees - 3 restantes</p>
    </div>

    <!-- Quick actions -->
    <div class="quick-actions">
      <button
        v-for="action in quickActions"
        :key="action.label"
        class="quick-action"
        @click="router.push({ name: action.route })"
      >
        <img :src="action.bg" :alt="action.label" class="qa-bg" />
        <div class="qa-overlay"></div>
        <div class="qa-content">
          <span class="mi qa-icon">{{ action.icon }}</span>
          <span class="qa-label">{{ action.label }}</span>
        </div>
      </button>
    </div>

    <!-- Upcoming sessions -->
    <div class="section">
      <div class="section-head">
        <span class="section-label">Mes Prochaines Seances</span>
        <button class="see-all" @click="router.push('/calendar')">Voir tout</button>
      </div>

      <div class="sessions-scroll">
        <div v-for="s in upcomingSessions" :key="s.time" class="session-card" @click="router.push('/booking-detail')">
          <img :src="s.img" :alt="s.title" class="session-bg" />
          <div class="session-overlay"></div>
          <div class="session-content">
            <div class="session-top-row">
              <span class="session-countdown">{{ s.countdown }}</span>
              <span class="session-type-pill">{{ s.type }}</span>
            </div>
            <div class="session-bottom">
              <h3 class="session-title">{{ s.title }}</h3>
              <div class="session-details">
                <div class="session-detail">
                  <span class="mi" style="font-size:14px">schedule</span>
                  <span>{{ s.time }} · {{ s.duration }}</span>
                </div>
                <div class="session-detail">
                  <span class="mi" style="font-size:14px">person</span>
                  <span>Coach {{ s.coach }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News -->
    <div class="section">
      <span class="section-label">Actualites</span>
      <div class="news-list">
        <div v-for="n in news" :key="n.id" class="news-card card" @click="router.push('/news/' + n.id)">
          <div :class="['news-dot', { urgent: n.urgent }]"></div>
          <div class="news-content">
            <h4 class="news-title">{{ n.title }}</h4>
            <p class="news-desc">{{ n.desc }}</p>
          </div>
          <div class="news-right">
            <span class="news-time">{{ n.time }}</span>
            <span class="mi" style="font-size:16px;color:var(--gray-300)">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-screen {
  padding-top: 10px;
}

.home-header {
  padding: 16px 0 8px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-top-row {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

.header-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-img {
  height: 140px;
  width: auto;
  object-fit: contain;
}

.header-greeting {
  display: flex;
  flex-direction: column;
}

.greeting-sub {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--gray-400);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1;
  margin-bottom: 2px;
}

.greeting-name {
  font-size: 44px;
  color: var(--navy);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
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
  transition: all 0.3s var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.avatar-lg {
  width: 48px;
  height: 48px;
  font-size: 16px;
  cursor: pointer;
}

/* Stats card */
.stats-card {
  margin-top: 12px;
  padding: 22px;
}

.stats-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 18px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-value {
  font-size: 38px;
  color: var(--navy);
}

.stat-value.primary {
  color: var(--primary);
}

.stat-value-text {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
}

.stat-label {
  font-size: 10px;
  color: var(--gray-400);
  text-align: center;
  font-weight: 700;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--gray-200);
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--gray-100);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 3px;
  position: relative;
}

.progress-label {
  font-size: 10px;
  color: var(--gray-400);
  margin-top: 8px;
  text-align: right;
  font-weight: 600;
}

/* Quick actions */
.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 28px 0;
}

.quick-action {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  height: 90px;
  font-family: var(--font-body);
  transition: all 0.3s var(--ease-out);
}

.quick-action:active {
  transform: scale(0.96);
}

.qa-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qa-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10,46,91,0.75) 0%, rgba(10,46,91,0.45) 100%);
}

.qa-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  padding: 14px 16px;
  gap: 4px;
}

.qa-icon {
  font-size: 26px;
  color: var(--white);
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.qa-label {
  font-size: 14px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.01em;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

/* Sections */
.section {
  margin-top: 32px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
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

/* Session cards — immersive horizontal scroll */
.sessions-scroll {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 4px;
  margin: 0 -20px;
  padding-left: 20px;
  padding-right: 20px;
}

.sessions-scroll::-webkit-scrollbar {
  display: none;
}

.session-card {
  position: relative;
  min-width: 280px;
  height: 160px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;
  flex-shrink: 0;
  transition: all 0.35s var(--ease-out);
}

.session-card:active {
  transform: scale(0.97);
}

.session-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.session-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10,46,91,0.15) 0%, rgba(10,46,91,0.80) 100%);
}

.session-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 14px 16px;
}

.session-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.session-countdown {
  background: var(--primary);
  color: var(--white);
  font-size: 11px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  letter-spacing: -0.01em;
  box-shadow: 0 2px 10px rgba(255, 64, 0, 0.3);
}

.session-type-pill {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--white);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.session-bottom {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.session-title {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 800;
  color: var(--white);
  text-shadow: 0 1px 6px rgba(0,0,0,0.2);
}

.session-details {
  display: flex;
  gap: 16px;
}

.session-detail {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

/* News */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.news-card {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.news-card:active {
  border-color: rgba(255, 64, 0, 0.15);
}

.news-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(255, 64, 0, 0.2);
}

.news-dot.urgent {
  background: var(--danger);
  box-shadow: 0 0 8px rgba(229, 57, 53, 0.3);
}

.news-content {
  flex: 1;
}

.news-title {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 2px;
}

.news-desc {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 500;
}

.news-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.news-time {
  font-size: 10px;
  color: var(--gray-400);
  white-space: nowrap;
  font-weight: 600;
}
</style>
