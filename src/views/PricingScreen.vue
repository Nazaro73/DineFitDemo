<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeType = ref('collectif')

const types = [
  { key: 'collectif', label: 'Collectif', icon: 'groups' },
  { key: 'individuel', label: 'Individuel', icon: 'person' },
  { key: 'binome', label: 'Binome', icon: 'group' },
]

const pricing = {
  collectif: [
    { name: 'Seance unique', price: '15', unit: 'EUR', desc: 'Paiement a l\'unite', features: ['1 cours collectif', 'Reservation flexible', 'Annulation 24h'] },
    { name: 'Pack 5 seances', price: '65', unit: 'EUR', desc: '13 EUR / seance', features: ['5 cours collectifs', 'Validite 2 mois', '-13% vs unite'], highlight: false },
    { name: 'Pack 10 seances', price: '120', unit: 'EUR', desc: '12 EUR / seance', features: ['10 cours collectifs', 'Validite 4 mois', '-20% vs unite'], highlight: true },
    { name: 'Abonnement', price: '59', unit: 'EUR/mois', desc: 'Illimite', features: ['Cours illimites', 'Sans engagement', 'Acces prioritaire'], highlight: false },
  ],
  individuel: [
    { name: 'Seance unique', price: '45', unit: 'EUR', desc: '1h avec coach dedie', features: ['1 coaching prive', 'Programme sur mesure', 'Suivi personnalise'] },
    { name: 'Pack 5 seances', price: '200', unit: 'EUR', desc: '40 EUR / seance', features: ['5 coachings prives', 'Validite 3 mois', '-11% vs unite'], highlight: false },
    { name: 'Pack 10 seances', price: '120', unit: 'EUR', desc: '12 EUR / seance', features: ['10 coachings prives', 'Validite 6 mois', '-73% vs unite'], highlight: true },
    { name: 'Abonnement', price: '149', unit: 'EUR/mois', desc: '4 seances/mois', features: ['4 coachings / mois', 'Bilan mensuel', 'Programme evolutif'] },
  ],
  binome: [
    { name: 'Seance unique', price: '30', unit: 'EUR/pers', desc: '1h coaching duo', features: ['1 coaching duo', 'Motivation a deux', 'Programme partage'] },
    { name: 'Pack 5 seances', price: '130', unit: 'EUR/pers', desc: '26 EUR / seance', features: ['5 coachings duo', 'Validite 3 mois', '-13% vs unite'], highlight: false },
    { name: 'Pack 10 seances', price: '240', unit: 'EUR/pers', desc: '24 EUR / seance', features: ['10 coachings duo', 'Validite 6 mois', '-20% vs unite'], highlight: true },
    { name: 'Abonnement', price: '99', unit: 'EUR/mois/pers', desc: '4 seances/mois', features: ['4 coachings duo / mois', 'Partenaire fixe ou variable', 'Suivi partage'] },
  ],
}
</script>

<template>
  <div class="screen pricing-screen">
    <div class="paint-splash paint-splash--green" style="width:280px;height:280px;top:-100px;left:-100px;opacity:0.07"></div>
    <div class="paint-splash paint-splash--white" style="width:200px;height:200px;bottom:200px;right:-80px;opacity:0.03"></div>

    <div class="screen-header">
      <h1 class="screen-title">Tarifs</h1>
    </div>

    <!-- Type selector -->
    <div class="type-selector">
      <button
        v-for="t in types"
        :key="t.key"
        :class="['type-btn', { active: activeType === t.key }]"
        @click="activeType = t.key"
      >
        <span class="mi" style="font-size:18px">{{ t.icon }}</span>
        {{ t.label }}
      </button>
    </div>

    <!-- Cards -->
    <div class="pricing-list">
      <div
        v-for="p in pricing[activeType]"
        :key="p.name"
        :class="['pricing-card card', { highlight: p.highlight }]"
      >
        <div v-if="p.highlight" class="popular-badge">
          <span class="mi" style="font-size:12px">star</span>
          Populaire
        </div>
        <h3 class="pricing-name">{{ p.name }}</h3>
        <div class="pricing-price-row">
          <span class="pricing-price display-title">{{ p.price }}</span>
          <span class="pricing-unit">{{ p.unit }}</span>
        </div>
        <p class="pricing-desc">{{ p.desc }}</p>
        <ul class="pricing-features">
          <li v-for="f in p.features" :key="f">
            <span class="mi" style="font-size:14px;color:var(--primary)">check_circle</span>
            {{ f }}
          </li>
        </ul>
        <button :class="['btn btn-block btn-sm', p.highlight ? 'btn-primary' : 'btn-outline']">
          Choisir
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Type selector */
.type-selector {
  display: flex;
  gap: 4px;
  margin-bottom: 26px;
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: 4px;
  border: 1.5px solid var(--gray-100);
}

.type-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 8px;
  border-radius: var(--radius-md);
  background: transparent;
  border: none;
  color: var(--gray-400);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.35s var(--ease-out);
}

.type-btn.active {
  background: var(--primary-gradient);
  color: var(--white);
  box-shadow: var(--shadow-primary);
}

/* Pricing cards */
.pricing-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pricing-card {
  position: relative;
  overflow: hidden;
  padding: 22px;
}

.pricing-card.highlight {
  border-color: rgba(255, 64, 0, 0.20);
  box-shadow: 0 0 0 1px rgba(255, 64, 0, 0.08), var(--shadow-primary);
}

.popular-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 64, 0, 0.08);
  color: var(--primary);
  border: 1px solid rgba(255, 64, 0, 0.15);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  margin-bottom: 10px;
}

.pricing-name {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-500);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.pricing-price-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 4px;
}

.pricing-price {
  font-size: 48px;
  color: var(--navy);
}

.pricing-unit {
  font-size: 13px;
  color: var(--gray-400);
  font-weight: 600;
}

.pricing-desc {
  font-size: 12px;
  color: var(--gray-400);
  margin-bottom: 18px;
  font-weight: 600;
}

.pricing-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--gray-500);
  font-weight: 600;
}
</style>
