<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const activeSub = {
  type: 'Pack 10 Seances',
  category: 'Collectif',
  purchased: '12 Mars 2026',
  expires: '12 Juillet 2026',
  total: 10,
  used: 7,
  remaining: 3,
  price: '120 EUR',
  status: 'Actif',
}

const pastSubs = [
  { type: 'Pack 5 Seances', category: 'Collectif', period: 'Nov. 2025 - Jan. 2026', price: '65 EUR', status: 'Termine', used: 5, total: 5 },
  { type: 'Seance unique', category: 'Individuel', period: 'Oct. 2025', price: '45 EUR', status: 'Termine', used: 1, total: 1 },
  { type: 'Seance unique', category: 'Collectif', period: 'Sep. 2025', price: '15 EUR', status: 'Termine', used: 1, total: 1 },
]

const availableOffers = [
  { name: 'Abonnement Illimite', desc: 'Cours collectifs illimites', price: '59', unit: 'EUR/mois', highlight: true },
  { name: 'Pack 10 Individuel', desc: '10 coachings prives', price: '120', unit: 'EUR', highlight: false },
  { name: 'Pack 5 Binome', desc: '5 coachings duo', price: '130', unit: 'EUR/pers', highlight: false },
]
</script>

<template>
  <div class="screen subs-screen">
    <div class="paint-splash paint-splash--green" style="width:280px;height:280px;top:-100px;right:-100px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--gray" style="width:180px;height:180px;bottom:250px;left:-80px;opacity:0.03"></div>

    <div class="screen-header">
      <button class="back-btn" @click="router.push('/profile')">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Abonnements</h1>
      <div style="width:44px"></div>
    </div>

    <!-- Active subscription -->
    <div class="section">
      <span class="section-label">Abonnement Actif</span>
      <div class="active-card card card-glow">
        <div class="active-top">
          <div>
            <h2 class="active-name display-title">{{ activeSub.type }}</h2>
            <span class="active-cat">{{ activeSub.category }}</span>
          </div>
          <span class="status-badge active-status">{{ activeSub.status }}</span>
        </div>

        <!-- Progress ring -->
        <div class="ring-section">
          <div class="ring-container">
            <svg class="ring-svg" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(10,46,91,0.06)" stroke-width="8" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="url(#primaryGrad)" stroke-width="8"
                stroke-linecap="round" stroke-dasharray="326.7" :stroke-dashoffset="326.7 * (1 - activeSub.used / activeSub.total)"
                transform="rotate(-90 60 60)" />
              <defs>
                <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ff4000" />
                  <stop offset="100%" stop-color="#ff6633" />
                </linearGradient>
              </defs>
            </svg>
            <div class="ring-center">
              <span class="ring-value display-title">{{ activeSub.remaining }}</span>
              <span class="ring-label">restantes</span>
            </div>
          </div>
          <div class="ring-stats">
            <div class="ring-stat">
              <span class="ring-stat-val display-title">{{ activeSub.used }}</span>
              <span class="ring-stat-label">Utilisees</span>
            </div>
            <div class="ring-stat">
              <span class="ring-stat-val display-title">{{ activeSub.total }}</span>
              <span class="ring-stat-label">Total</span>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="active-details">
          <div class="detail-row">
            <span class="mi" style="font-size:16px;color:var(--primary)">calendar_today</span>
            <span class="detail-key">Achat</span>
            <span class="detail-val">{{ activeSub.purchased }}</span>
          </div>
          <div class="detail-row">
            <span class="mi" style="font-size:16px;color:var(--primary)">event</span>
            <span class="detail-key">Expiration</span>
            <span class="detail-val">{{ activeSub.expires }}</span>
          </div>
          <div class="detail-row">
            <span class="mi" style="font-size:16px;color:var(--primary)">payments</span>
            <span class="detail-key">Prix</span>
            <span class="detail-val">{{ activeSub.price }}</span>
          </div>
        </div>

        <button class="btn btn-outline btn-block btn-sm" style="margin-top:14px">
          <span class="mi" style="font-size:16px">refresh</span>
          Renouveler le pack
        </button>
      </div>
    </div>

    <!-- Offers -->
    <div class="section">
      <span class="section-label">Changer de Formule</span>
      <div class="offers-list">
        <div v-for="o in availableOffers" :key="o.name" :class="['offer-card card', { highlight: o.highlight }]">
          <div class="offer-info">
            <span class="offer-name">{{ o.name }}</span>
            <span class="offer-desc">{{ o.desc }}</span>
          </div>
          <div class="offer-right">
            <div class="offer-price-row">
              <span class="offer-price display-title">{{ o.price }}</span>
              <span class="offer-unit">{{ o.unit }}</span>
            </div>
            <button :class="['btn btn-sm', o.highlight ? 'btn-primary' : 'btn-outline']">Choisir</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Past subscriptions -->
    <div class="section">
      <span class="section-label">Historique Abonnements</span>
      <div class="past-list">
        <div v-for="p in pastSubs" :key="p.period" class="past-card card">
          <div class="past-top">
            <div>
              <span class="past-name">{{ p.type }}</span>
              <span class="past-cat">{{ p.category }} · {{ p.period }}</span>
            </div>
            <span class="past-status">{{ p.status }}</span>
          </div>
          <div class="past-bottom">
            <div class="past-bar">
              <div class="past-bar-fill" style="width:100%"></div>
            </div>
            <span class="past-info">{{ p.used }}/{{ p.total }} · {{ p.price }}</span>
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

.section {
  margin-top: 28px;
}

.section:first-of-type {
  margin-top: 8px;
}

/* Active card */
.active-card {
  padding: 22px;
}

.active-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.active-name {
  font-size: 28px;
  color: var(--navy);
  line-height: 1;
  margin-bottom: 4px;
}

.active-cat {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 600;
}

.status-badge {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 2px 12px;
  border-radius: 4px;
  transform: rotate(-4deg);
  box-shadow: 0 0 14px rgba(255, 64, 0, 0.12);
}

/* Ring */
.ring-section {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 20px;
}

.ring-container {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.ring-svg {
  width: 100%;
  height: 100%;
}

.ring-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ring-value {
  font-size: 42px;
  color: var(--primary);
  line-height: 1;
}

.ring-label {
  font-size: 10px;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.ring-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ring-stat {
  display: flex;
  flex-direction: column;
}

.ring-stat-val {
  font-size: 32px;
  color: var(--navy);
  line-height: 1;
}

.ring-stat-label {
  font-size: 10px;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
}

/* Details */
.active-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
  border-top: 1.5px solid var(--gray-100);
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.detail-key {
  color: var(--gray-400);
  flex: 1;
  font-weight: 600;
}

.detail-val {
  font-weight: 700;
  color: var(--navy);
}

/* Offers */
.offers-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.offer-card {
  display: flex;
  align-items: center;
  gap: 14px;
}

.offer-card.highlight {
  border-color: rgba(255, 64, 0, 0.20);
  box-shadow: 0 0 0 1px rgba(255, 64, 0, 0.08), var(--shadow-primary);
}

.offer-info {
  flex: 1;
}

.offer-name {
  display: block;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.offer-desc {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

.offer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.offer-price-row {
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.offer-price {
  font-size: 26px;
  color: var(--navy);
}

.offer-unit {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 700;
}

/* Past subs */
.past-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.past-card {
  padding: 16px;
}

.past-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
}

.past-name {
  display: block;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.past-cat {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

.past-status {
  font-size: 10px;
  color: var(--gray-400);
  text-transform: uppercase;
  font-weight: 800;
}

.past-bottom {
  display: flex;
  align-items: center;
  gap: 10px;
}

.past-bar {
  flex: 1;
  height: 3px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
}

.past-bar-fill {
  height: 100%;
  background: var(--gray-300);
  border-radius: 2px;
}

.past-info {
  font-size: 10px;
  color: var(--gray-400);
  white-space: nowrap;
  font-weight: 700;
}
</style>
