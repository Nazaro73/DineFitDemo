<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const messages = [
  { from: 'coach', text: 'Salut Abdel ! Comment tu te sens apres la seance de lundi ?', time: '10:30' },
  { from: 'me', text: 'Super bien ! Un peu de courbatures mais ca passe', time: '10:45' },
  { from: 'coach', text: 'Parfait ! C\'est bon signe. N\'oublie pas de bien t\'hydrater et t\'etirer.', time: '11:02' },
  { from: 'coach', text: 'Au fait, j\'ai mis a jour ton programme. Tu peux le consulter dans ton espace.', time: '11:03' },
  { from: 'me', text: 'Top merci ! Je regarde ca ce soir', time: '14:20' },
  { from: 'coach', text: 'Super seance aujourd\'hui ! On se voit mercredi ?', time: '14:32' },
]
</script>

<template>
  <div class="chat-screen">
    <div class="paint-splash paint-splash--green" style="width:200px;height:200px;top:-60px;left:-80px;opacity:0.06"></div>

    <!-- Chat header -->
    <div class="chat-header">
      <button class="back-btn" @click="router.push('/messages')">
        <span class="mi">arrow_back</span>
      </button>
      <div class="chat-user">
        <div class="avatar" style="width:38px;height:38px;font-size:13px">Y</div>
        <div>
          <span class="chat-name">Coach Yassine</span>
          <span class="chat-status">En ligne</span>
        </div>
      </div>
      <button class="icon-btn-sm">
        <span class="mi">more_vert</span>
      </button>
    </div>

    <!-- Messages -->
    <div class="messages-area">
      <div class="date-separator">
        <span>Aujourd'hui</span>
      </div>
      <div
        v-for="(m, i) in messages"
        :key="i"
        :class="['message', m.from === 'me' ? 'sent' : 'received']"
      >
        <div class="bubble">
          <p>{{ m.text }}</p>
        </div>
        <span class="msg-time">{{ m.time }}</span>
      </div>
    </div>

    <!-- Input -->
    <div class="chat-input-bar">
      <button class="icon-btn-sm">
        <span class="mi">add</span>
      </button>
      <input class="input chat-input" placeholder="Votre message..." />
      <button class="send-btn">
        <span class="mi">send</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

.chat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--gray-100);
  z-index: 10;
}

.back-btn, .icon-btn-sm {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--gray-50);
  border: 1.5px solid var(--gray-200);
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-user {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-name {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.chat-status {
  font-size: 10px;
  color: #22c55e;
  font-weight: 700;
}

/* Messages */
.messages-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0 12px;
}

.date-separator span {
  font-size: 10px;
  color: var(--gray-400);
  background: var(--white);
  padding: 4px 14px;
  border-radius: var(--radius-full);
  border: 1px solid var(--gray-200);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.message {
  display: flex;
  flex-direction: column;
  max-width: 80%;
}

.message.sent {
  align-self: flex-end;
  align-items: flex-end;
}

.message.received {
  align-self: flex-start;
  align-items: flex-start;
}

.bubble {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 13px;
  line-height: 1.45;
  font-weight: 500;
}

.sent .bubble {
  background: var(--primary-gradient);
  color: var(--white);
  border-bottom-right-radius: 4px;
  box-shadow: 0 4px 16px rgba(255, 64, 0, 0.12);
}

.received .bubble {
  background: var(--white);
  border: 1.5px solid var(--gray-100);
  color: var(--navy);
  border-bottom-left-radius: 4px;
  box-shadow: var(--shadow-sm);
}

.msg-time {
  font-size: 9px;
  color: var(--gray-400);
  margin-top: 3px;
  padding: 0 4px;
  font-weight: 600;
}

/* Input bar */
.chat-input-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  padding-bottom: max(12px, env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--gray-100);
}

.chat-input {
  flex: 1;
  padding: 10px 16px;
  border-radius: var(--radius-full);
}

.send-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--primary-gradient);
  border: none;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-primary);
  flex-shrink: 0;
  transition: all 0.3s var(--ease-out);
}

.send-btn:active {
  transform: scale(0.9);
}
</style>
