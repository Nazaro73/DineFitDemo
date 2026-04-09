<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const showCancel = ref(false)
</script>

<template>
  <div class="screen detail-screen">
    <div class="paint-splash paint-splash--green" style="width:260px;height:260px;top:-80px;right:-100px;opacity:0.08"></div>

    <!-- Header -->
    <div class="screen-header">
      <button class="back-btn" @click="router.back()">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Ma Reservation</h1>
      <div style="width:44px"></div>
    </div>

    <!-- Status banner -->
    <div class="status-banner">
      <span class="mi status-icon">check_circle</span>
      <div class="status-text">
        <span class="status-title display-title" style="font-size:22px;color:var(--primary)">Confirmee</span>
        <span class="status-sub">Votre place est reservee</span>
      </div>
    </div>

    <!-- Course card -->
    <div class="course-card card card-glow">
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
            <span class="mi">schedule</span>
          </div>
          <div>
            <span class="detail-label">Duree</span>
            <span class="detail-value">60 min</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-icon-wrap">
            <span class="mi">local_offer</span>
          </div>
          <div>
            <span class="detail-label">Formule</span>
            <span class="detail-value">Pack 10 seances</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-icon-wrap">
            <span class="mi">group</span>
          </div>
          <div>
            <span class="detail-label">Type</span>
            <span class="detail-value">Collectif</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Reminder -->
    <div class="reminder card">
      <span class="mi" style="font-size:20px;color:var(--warning)">notifications_active</span>
      <div class="reminder-text">
        <span class="reminder-title">Rappels actives</span>
        <span class="reminder-sub">Vous serez notifie J-1 et H-1 avant la seance</span>
      </div>
    </div>

    <!-- Info -->
    <div class="info-section">
      <span class="section-label">Informations</span>
      <div class="info-list">
        <div class="info-row">
          <span class="mi" style="font-size:16px;color:var(--gray-400)">info</span>
          <span>Annulation gratuite jusqu'a 24h avant la seance</span>
        </div>
        <div class="info-row">
          <span class="mi" style="font-size:16px;color:var(--gray-400)">replay</span>
          <span>En cas d'annulation, votre seance sera recreditee sur votre pack</span>
        </div>
        <div class="info-row">
          <span class="mi" style="font-size:16px;color:var(--gray-400)">location_on</span>
          <span>Salle principale - DineFit</span>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="actions">
      <button class="btn btn-outline btn-block cancel-btn" @click="showCancel = true">
        <span class="mi" style="font-size:18px;color:var(--danger)">cancel</span>
        <span style="color:var(--danger)">Annuler la reservation</span>
      </button>
    </div>

    <!-- Cancel modal -->
    <Teleport to="body">
      <div v-if="showCancel" class="modal-overlay" @click="showCancel = false">
        <div class="modal" @click.stop>
          <div class="modal-icon-wrap">
            <span class="mi" style="font-size:32px;color:var(--danger)">warning</span>
          </div>
          <h3 class="modal-title display-title" style="font-size:26px">Annuler ?</h3>
          <p class="modal-desc">Etes-vous sur de vouloir annuler votre reservation pour le Cross Training du Mer. 2 Avril a 18h ?</p>
          <p class="modal-note">Votre seance sera recreditee sur votre pack.</p>
          <div class="modal-actions">
            <button class="btn btn-outline modal-btn" @click="showCancel = false">Non, garder</button>
            <button class="btn btn-danger modal-btn" @click="showCancel = false; router.push('/calendar')">Oui, annuler</button>
          </div>
        </div>
      </div>
    </Teleport>
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

/* Status */
.status-banner {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  background: rgba(255, 64, 0, 0.05);
  border: 1.5px solid rgba(255, 64, 0, 0.12);
  border-radius: var(--radius-md);
  margin-bottom: 20px;
}

.status-icon {
  font-size: 32px;
  color: var(--primary);
}

.status-text {
  display: flex;
  flex-direction: column;
}

.status-sub {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 600;
}

/* Course card */
.course-card {
  padding: 22px;
  margin-bottom: 14px;
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

/* Reminder */
.reminder {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.reminder-text {
  display: flex;
  flex-direction: column;
}

.reminder-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}

.reminder-sub {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 500;
}

/* Info */
.info-section {
  margin-bottom: 28px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  color: var(--gray-500);
  line-height: 1.4;
  font-weight: 500;
}

/* Actions */
.actions {
  margin-bottom: 20px;
}

.cancel-btn {
  border-color: rgba(229, 57, 53, 0.2);
}

.cancel-btn:active {
  background: rgba(229, 57, 53, 0.04);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 46, 91, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 24px;
}

.modal {
  background: var(--white);
  border: 1.5px solid var(--gray-100);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  max-width: 360px;
  width: 100%;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.modal-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(229, 57, 53, 0.08);
  border: 1.5px solid rgba(229, 57, 53, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.modal-title {
  margin-bottom: 12px;
  color: var(--navy);
}

.modal-desc {
  font-size: 13px;
  color: var(--gray-500);
  line-height: 1.5;
  margin-bottom: 8px;
  font-weight: 500;
}

.modal-note {
  font-size: 12px;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 22px;
}

.modal-actions {
  display: flex;
  gap: 10px;
}

.modal-btn {
  flex: 1;
  padding: 12px;
  font-size: 13px;
}

.btn-danger {
  background: var(--danger);
  color: var(--white);
  border: none;
  box-shadow: 0 4px 16px rgba(229, 57, 53, 0.2);
}

.btn-danger:active {
  transform: scale(0.97);
}
</style>
