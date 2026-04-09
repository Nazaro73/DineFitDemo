<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const notifications = [
  { icon: 'check_circle', color: 'var(--primary)', title: 'Reservation confirmee', desc: 'Cross Training - Mer. 2 Avril a 18h', time: 'Il y a 5 min', unread: true },
  { icon: 'alarm', color: 'var(--warning)', title: 'Rappel de seance', desc: 'HIIT Express demain a 08h00', time: 'Il y a 1h', unread: true },
  { icon: 'chat_bubble', color: 'var(--navy)', title: 'Nouveau message', desc: 'Coach Yassine vous a envoye un message', time: 'Il y a 2h', unread: true },
  { icon: 'local_activity', color: '#e53935', title: 'Nouvel evenement', desc: 'Stage CrossFit Weekend - Sam. 12 Avril', time: 'Hier', unread: false },
  { icon: 'credit_card', color: 'var(--primary)', title: 'Paiement recu', desc: 'Pack 10 seances Collectif - 120 EUR', time: 'Lun.', unread: false },
  { icon: 'autorenew', color: 'var(--warning)', title: 'Renouvellement', desc: 'Votre pack expire dans 5 jours', time: 'Dim.', unread: false },
]
</script>

<template>
  <div class="screen notif-screen">
    <div class="paint-splash paint-splash--green" style="width:220px;height:220px;top:-80px;left:-80px;opacity:0.07"></div>

    <div class="screen-header">
      <button class="back-btn" @click="router.back()">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Notifications</h1>
      <button class="mark-read">Tout lire</button>
    </div>

    <div class="notif-list">
      <div
        v-for="n in notifications"
        :key="n.title"
        :class="['notif-item', { unread: n.unread }]"
      >
        <div class="notif-icon-wrap" :style="{ background: n.color + '10', borderColor: n.color + '20' }">
          <span class="mi" :style="{ color: n.color, fontSize: '20px' }">{{ n.icon }}</span>
        </div>
        <div class="notif-body">
          <h4 class="notif-title">{{ n.title }}</h4>
          <p class="notif-desc">{{ n.desc }}</p>
        </div>
        <div class="notif-right">
          <span class="notif-time">{{ n.time }}</span>
          <span v-if="n.unread" class="notif-dot-small"></span>
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

.mark-read {
  background: none;
  border: none;
  color: var(--primary);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.notif-list {
  display: flex;
  flex-direction: column;
}

.notif-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 4px;
  border-bottom: 1px solid var(--gray-100);
  transition: all 0.2s var(--ease-out);
  border-radius: var(--radius-sm);
}

.notif-item.unread {
  background: rgba(255, 64, 0, 0.03);
  margin: 0 -16px;
  padding: 18px 16px;
  border-radius: var(--radius-md);
  border-bottom: none;
  margin-bottom: 4px;
}

.notif-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid;
}

.notif-body {
  flex: 1;
}

.notif-title {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 3px;
}

.notif-desc {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 500;
}

.notif-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.notif-time {
  font-size: 10px;
  color: var(--gray-400);
  white-space: nowrap;
  font-weight: 600;
}

.notif-dot-small {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 8px rgba(255, 64, 0, 0.3);
}
</style>
