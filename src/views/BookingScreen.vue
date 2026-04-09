<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const selectedFormula = ref('pack')
</script>

<template>
  <div class="screen booking-screen">
    <div class="paint-splash paint-splash--green" style="width:260px;height:260px;top:-80px;right:-100px;opacity:0.08"></div>

    <!-- Header -->
    <div class="screen-header">
      <button class="back-btn" @click="router.back()">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Reservation</h1>
      <div style="width:44px"></div>
    </div>

    <!-- Course info -->
    <div class="course-hero card card-glow">
      <div class="course-badge-row">
        <span class="badge badge-green">Collectif</span>
        <span class="course-duration"><span class="mi" style="font-size:14px">schedule</span> 60 min</span>
      </div>
      <h2 class="course-name display-title">Cross Training</h2>
      <div class="course-details">
        <div class="detail-item">
          <div class="detail-icon-wrap">
            <span class="mi">person</span>
          </div>
          <div>
            <span class="detail-label">Coach</span>
            <span class="detail-value">Yassine</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-icon-wrap">
            <span class="mi">calendar_today</span>
          </div>
          <div>
            <span class="detail-label">Date</span>
            <span class="detail-value">Mer. 2 Avril</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-icon-wrap">
            <span class="mi">schedule</span>
          </div>
          <div>
            <span class="detail-label">Horaire</span>
            <span class="detail-value">18:00 - 19:00</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-icon-wrap">
            <span class="mi">group</span>
          </div>
          <div>
            <span class="detail-label">Places</span>
            <span class="detail-value" style="color:var(--primary)">2 restantes</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Formula selection -->
    <div class="section">
      <span class="section-label">Formule de paiement</span>
      <div class="formula-cards">
        <div :class="['formula-card card', { selected: selectedFormula === 'unit' }]" @click="selectedFormula = 'unit'">
          <div class="formula-radio"><span v-if="selectedFormula === 'unit'" class="radio-dot"></span></div>
          <div class="formula-info">
            <span class="formula-name">Seance unique</span>
            <span class="formula-desc">Paiement a l'unite</span>
          </div>
          <span class="formula-price">15 EUR</span>
        </div>

        <div :class="['formula-card card', { selected: selectedFormula === 'pack' }]" @click="selectedFormula = 'pack'">
          <div class="formula-radio"><span v-if="selectedFormula === 'pack'" class="radio-dot"></span></div>
          <div class="formula-info">
            <span class="formula-name">Pack 10 seances</span>
            <span class="formula-desc">7 seances restantes</span>
          </div>
          <div class="formula-right">
            <span class="formula-price primary">Inclus</span>
            <span class="mi" style="color:var(--primary);font-size:18px">check_circle</span>
          </div>
        </div>

        <div :class="['formula-card card', { selected: selectedFormula === 'abo' }]" @click="selectedFormula = 'abo'">
          <div class="formula-radio"><span v-if="selectedFormula === 'abo'" class="radio-dot"></span></div>
          <div class="formula-info">
            <span class="formula-name">Abonnement</span>
            <span class="formula-desc">Acces illimite / mois</span>
          </div>
          <span class="formula-price">59 EUR/mois</span>
        </div>
      </div>
    </div>

    <!-- Summary -->
    <div class="booking-summary card">
      <div class="summary-row">
        <span>Cross Training</span>
        <span class="summary-val">Mer. 2 Avril - 18h</span>
      </div>
      <div class="summary-row">
        <span>Formule</span>
        <span class="summary-val primary">Pack (seance incluse)</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-row total">
        <span>Total</span>
        <span class="summary-val primary display-title" style="font-size:24px">0 EUR</span>
      </div>
    </div>

    <!-- CTA -->
    <button class="btn btn-primary btn-block cta-btn">
      <span class="mi" style="font-size:20px">check</span>
      Confirmer la reservation
    </button>
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

/* Course hero */
.course-hero {
  margin-top: 8px;
  padding: 22px;
}

.course-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.course-duration {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 600;
}

.course-name {
  font-size: 32px;
  color: var(--navy);
  margin-bottom: 18px;
}

.course-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.detail-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-xs);
  background: rgba(255, 64, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.detail-icon-wrap .mi {
  font-size: 18px;
  color: var(--primary);
}

.detail-label {
  display: block;
  font-size: 9px;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.detail-value {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}

/* Formula cards */
.section {
  margin-top: 28px;
}

.formula-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formula-card {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.formula-card.selected {
  border-color: rgba(255, 64, 0, 0.3);
  box-shadow: 0 0 0 1px rgba(255, 64, 0, 0.15), 0 4px 16px rgba(255, 64, 0, 0.06);
}

.formula-radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s var(--ease-out);
}

.formula-card.selected .formula-radio {
  border-color: var(--primary);
}

.radio-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 8px rgba(255, 64, 0, 0.3);
}

.formula-info {
  flex: 1;
}

.formula-name {
  display: block;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.formula-desc {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 600;
}

.formula-price {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 800;
  color: var(--gray-500);
}

.formula-price.primary {
  color: var(--primary);
}

.formula-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Summary */
.booking-summary {
  margin-top: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 600;
}

.summary-val {
  font-weight: 700;
  color: var(--navy);
}

.summary-val.primary {
  color: var(--primary);
}

.summary-divider {
  height: 1px;
  background: var(--gray-100);
  margin: 8px 0;
}

.summary-row.total {
  font-size: 15px;
  font-weight: 800;
  color: var(--navy);
}

/* CTA */
.cta-btn {
  margin-top: 22px;
  padding: 16px;
  font-size: 15px;
}
</style>
