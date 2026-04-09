<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const articles = {
  'boxing-class-annulee': {
    title: 'Boxing Class Annulee',
    subtitle: 'Du 20 avril au 25 mai 2026',
    tag: 'Important',
    tagColor: 'var(--danger)',
    date: '2 Avril 2026',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    paragraphs: [
      'Nous vous informons que les cours de Boxing Class seront suspendus du 20 avril au 25 mai 2026.',
      'Cette interruption est due a des travaux de renovation de la salle de boxe. Nous en profitons pour installer de nouveaux equipements : ring, sacs de frappe et zone de shadow boxing.',
      'Pendant cette periode, nous vous encourageons a participer aux autres cours collectifs disponibles, notamment le Conditioning Boxing et le Circuit Training qui restent maintenus.',
      'Les seances deja reservees sur cette periode seront automatiquement annulees et les credits restitues sur votre compte.',
    ],
    info: [
      { icon: 'event_busy', label: 'Debut suspension', value: 'Lundi 20 Avril' },
      { icon: 'event_available', label: 'Reprise prevue', value: 'Lundi 25 Mai' },
      { icon: 'swap_horiz', label: 'Alternative', value: 'Conditioning Boxing' },
      { icon: 'replay', label: 'Credits', value: 'Restitution auto.' },
    ],
  },
  'ladyne-boxing-reouverture': {
    title: 'Lady\'ne Boxing est de retour !',
    subtitle: 'Inscriptions ouvertes jusqu\'a fin avril',
    tag: 'Nouveau',
    tagColor: 'var(--primary)',
    date: '1 Avril 2026',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80',
    paragraphs: [
      'Grande nouvelle ! Le cours Lady\'ne Boxing fait son grand retour chez DineFit !',
      'Ce cours reserve aux femmes est encadre par Coach Amina. Au programme : technique de boxe, renforcement musculaire, cardio et surtout beaucoup de fun dans une ambiance bienveillante.',
      'Les seances auront lieu tous les samedis de 09h00 a 10h00. Les places sont limitees a 15 participantes par cours.',
      'Les inscriptions sont ouvertes des maintenant et jusqu\'a fin avril. Ne tardez pas, les places partent vite !',
    ],
    info: [
      { icon: 'calendar_today', label: 'Jour', value: 'Tous les samedis' },
      { icon: 'schedule', label: 'Horaire', value: '09:00 - 10:00' },
      { icon: 'person', label: 'Coach', value: 'Amina' },
      { icon: 'group', label: 'Places', value: '15 max' },
    ],
  },
}

const article = computed(() => articles[route.params.id] || articles['boxing-class-annulee'])
</script>

<template>
  <div class="news-screen">
    <div class="paint-splash paint-splash--green" style="width:260px;height:260px;top:-80px;right:-100px;opacity:0.07"></div>

    <!-- Hero image -->
    <div class="hero">
      <img :src="article.image" :alt="article.title" class="hero-img" />
      <div class="hero-overlay"></div>
      <button class="back-btn" @click="router.push('/home')">
        <span class="mi">arrow_back</span>
      </button>
      <div class="hero-content">
        <span class="hero-tag" :style="{ background: article.tagColor + '18', color: article.tagColor, borderColor: article.tagColor + '30' }">
          {{ article.tag }}
        </span>
        <h1 class="hero-title display-title">{{ article.title }}</h1>
        <p class="hero-subtitle">{{ article.subtitle }}</p>
      </div>
    </div>

    <!-- Body -->
    <div class="news-body">
      <div class="meta-row">
        <span class="mi" style="font-size:16px;color:var(--gray-400)">calendar_today</span>
        <span class="meta-date">{{ article.date }}</span>
        <span class="meta-sep">·</span>
        <span class="meta-author">DineFit</span>
      </div>

      <!-- Info cards -->
      <div class="info-grid">
        <div v-for="i in article.info" :key="i.label" class="info-item card">
          <span class="mi info-icon">{{ i.icon }}</span>
          <div class="info-text">
            <span class="info-label">{{ i.label }}</span>
            <span class="info-value">{{ i.value }}</span>
          </div>
        </div>
      </div>

      <!-- Article text -->
      <div class="article-text">
        <p v-for="(p, idx) in article.paragraphs" :key="idx" class="article-p">{{ p }}</p>
      </div>

      <!-- CTA -->
      <button class="btn btn-primary btn-block cta" @click="router.push('/calendar')">
        <span class="mi" style="font-size:18px">calendar_month</span>
        Voir le planning
      </button>
    </div>
  </div>
</template>

<style scoped>
.news-screen {
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
  padding-bottom: 120px;
  background: var(--white);
}

/* Hero */
.hero {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--white) 0%, rgba(255,255,255,0.4) 40%, transparent 70%);
}

.back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(10, 46, 91, 0.1);
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px 24px;
  z-index: 1;
}

.hero-tag {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid;
  margin-bottom: 10px;
}

.hero-title {
  font-size: 32px;
  color: var(--navy);
  line-height: 1;
  margin-bottom: 6px;
}

.hero-subtitle {
  font-size: 14px;
  color: var(--gray-500);
  font-weight: 600;
}

/* Body */
.news-body {
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0 20px;
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 600;
}

.meta-sep {
  color: var(--gray-300);
}

.meta-author {
  color: var(--primary);
  font-weight: 700;
}

/* Info grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 24px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
}

.info-icon {
  font-size: 20px;
  color: var(--primary);
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 9px;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.info-value {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}

/* Article */
.article-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.article-p {
  font-size: 14px;
  line-height: 1.65;
  color: var(--gray-500);
  font-weight: 500;
}

.article-p:first-child {
  font-size: 15px;
  color: var(--navy);
  font-weight: 600;
}

/* CTA */
.cta {
  padding: 16px;
  font-size: 15px;
}
</style>
