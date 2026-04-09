<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const conversations = [
  { name: 'Coach Yassine', avatar: 'Y', lastMsg: 'Super seance aujourd\'hui ! On se voit mercredi ?', time: '14:32', unread: 2, online: true },
  { name: 'Coach Sarah', avatar: 'S', lastMsg: 'Votre programme personnalise est pret', time: '11:15', unread: 1, online: true },
  { name: 'Coach Karim', avatar: 'K', lastMsg: 'N\'oubliez pas votre gourde demain', time: 'Hier', unread: 0, online: false },
  { name: 'Groupe - Cross Training', avatar: 'CT', lastMsg: 'Karim: Qui est motive pour samedi ?', time: 'Hier', unread: 5, online: false, group: true },
  { name: 'Groupe - Motivation', avatar: 'M', lastMsg: 'Amina: 3eme semaine consecutive !', time: 'Lun.', unread: 0, online: false, group: true },
  { name: 'DineFit - Info', avatar: 'DF', lastMsg: 'Nouveaux horaires a partir du 7 avril', time: 'Dim.', unread: 0, online: false, system: true },
]
</script>

<template>
  <div class="screen messages-screen">
    <div class="paint-splash paint-splash--green" style="width:240px;height:240px;top:-80px;right:-100px;opacity:0.07"></div>

    <div class="screen-header">
      <h1 class="screen-title">Messages</h1>
      <button class="icon-btn">
        <span class="mi">edit</span>
      </button>
    </div>

    <!-- Search -->
    <div class="search-bar">
      <span class="mi search-icon">search</span>
      <input class="input search-input" placeholder="Rechercher une conversation..." />
    </div>

    <!-- Filter chips -->
    <div class="msg-filters">
      <span class="chip active">Tous</span>
      <span class="chip">Coaches</span>
      <span class="chip">Groupes</span>
      <span class="chip">Info</span>
    </div>

    <!-- Conversation list -->
    <div class="convo-list">
      <div
        v-for="c in conversations"
        :key="c.name"
        class="convo-item"
        @click="router.push('/chat')"
      >
        <div class="convo-avatar-wrap">
          <div :class="['avatar', { group: c.group, system: c.system }]">
            {{ c.avatar }}
          </div>
          <span v-if="c.online" class="online-dot"></span>
        </div>
        <div class="convo-body">
          <div class="convo-top">
            <span class="convo-name">{{ c.name }}</span>
            <span class="convo-time">{{ c.time }}</span>
          </div>
          <div class="convo-bottom">
            <p class="convo-msg">{{ c.lastMsg }}</p>
            <span v-if="c.unread" class="unread-badge">{{ c.unread }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  box-shadow: var(--shadow-sm);
}

.search-bar {
  position: relative;
  margin-bottom: 16px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray-400);
  font-size: 20px;
}

.search-input {
  padding-left: 44px;
}

.msg-filters {
  display: flex;
  gap: 8px;
  margin-bottom: 22px;
  overflow-x: auto;
}

.convo-list {
  display: flex;
  flex-direction: column;
}

.convo-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 4px;
  border-bottom: 1px solid var(--gray-100);
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
  border-radius: var(--radius-sm);
}

.convo-item:active {
  background: var(--gray-50);
}

.convo-avatar-wrap {
  position: relative;
}

.avatar.group {
  background: var(--gray-100);
  font-size: 11px;
  color: var(--navy);
  font-weight: 800;
}

.avatar.system {
  background: rgba(255, 64, 0, 0.06);
  color: var(--primary);
  border-color: rgba(255, 64, 0, 0.12);
}

.online-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid var(--white);
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.4);
}

.convo-body {
  flex: 1;
  min-width: 0;
}

.convo-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.convo-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.convo-time {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 600;
}

.convo-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
}

.convo-msg {
  flex: 1;
  font-size: 12px;
  color: var(--gray-400);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}

.unread-badge {
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  background: var(--primary-gradient);
  color: var(--white);
  font-size: 10px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(255, 64, 0, 0.15);
}
</style>
