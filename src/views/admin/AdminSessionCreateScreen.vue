<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = ref({
  title: '',
  type: 'Collectif',
  coach: '',
  day: 'lun',
  time: '',
  duration: '60',
  capacity: '12',
  description: '',
})

const types = ['Collectif', 'Individuel', 'Binome']
const coaches = ['Yassine', 'Sarah', 'Karim', 'Amina']
const daysOptions = [
  { key: 'lun', label: 'Lundi' },
  { key: 'mar', label: 'Mardi' },
  { key: 'mer', label: 'Mercredi' },
  { key: 'jeu', label: 'Jeudi' },
  { key: 'ven', label: 'Vendredi' },
  { key: 'sam', label: 'Samedi' },
  { key: 'dim', label: 'Dimanche' },
]
</script>

<template>
  <div class="screen create-screen">
    <div class="screen-header">
      <button class="back-btn" @click="router.back()">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Nouvelle Seance</h1>
      <div style="width:44px"></div>
    </div>

    <div class="form">
      <!-- Title -->
      <div class="field">
        <label class="field-label">Nom de la seance</label>
        <input class="input" v-model="form.title" placeholder="Ex: Cross Training" />
      </div>

      <!-- Type -->
      <div class="field">
        <label class="field-label">Type</label>
        <div class="type-selector">
          <button v-for="t in types" :key="t" :class="['type-btn', { active: form.type === t }]" @click="form.type = t">
            {{ t }}
          </button>
        </div>
      </div>

      <!-- Coach -->
      <div class="field">
        <label class="field-label">Coach</label>
        <div class="coach-grid">
          <button v-for="c in coaches" :key="c" :class="['coach-card', { active: form.coach === c }]" @click="form.coach = c">
            <div class="coach-avatar">{{ c[0] }}</div>
            <span class="coach-name">{{ c }}</span>
          </button>
        </div>
      </div>

      <!-- Day & Time -->
      <div class="field-row">
        <div class="field" style="flex:1">
          <label class="field-label">Jour</label>
          <select class="input select" v-model="form.day">
            <option v-for="d in daysOptions" :key="d.key" :value="d.key">{{ d.label }}</option>
          </select>
        </div>
        <div class="field" style="flex:1">
          <label class="field-label">Heure</label>
          <input class="input" type="time" v-model="form.time" />
        </div>
      </div>

      <!-- Duration & Capacity -->
      <div class="field-row">
        <div class="field" style="flex:1">
          <label class="field-label">Duree (min)</label>
          <input class="input" type="number" v-model="form.duration" />
        </div>
        <div class="field" style="flex:1">
          <label class="field-label">Capacite</label>
          <input class="input" type="number" v-model="form.capacity" />
        </div>
      </div>

      <!-- Description -->
      <div class="field">
        <label class="field-label">Description (optionnel)</label>
        <textarea class="input textarea" v-model="form.description" placeholder="Details de la seance..." rows="3"></textarea>
      </div>

      <!-- Submit -->
      <button class="btn btn-primary btn-block cta" @click="router.push('/admin/sessions')">
        <span class="mi" style="font-size:20px">check</span>
        Creer la seance
      </button>
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

.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 8px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.field-row {
  display: flex;
  gap: 12px;
}

.select {
  appearance: none;
  cursor: pointer;
}

.textarea {
  resize: none;
  line-height: 1.5;
}

/* Type selector */
.type-selector {
  display: flex;
  gap: 4px;
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: 4px;
  border: 1.5px solid var(--gray-100);
}

.type-btn {
  flex: 1;
  padding: 10px 8px;
  border-radius: var(--radius-md);
  background: transparent;
  border: none;
  color: var(--gray-400);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
}

.type-btn.active {
  background: var(--primary-gradient);
  color: var(--white);
  box-shadow: var(--shadow-primary);
}

/* Coach grid */
.coach-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.coach-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 4px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
  font-family: var(--font-body);
}

.coach-card.active {
  border-color: var(--primary);
  background: rgba(255, 64, 0, 0.04);
  box-shadow: 0 0 0 1px rgba(255, 64, 0, 0.1);
}

.coach-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gray-50);
  border: 1.5px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
  color: var(--primary);
}

.coach-card.active .coach-avatar {
  background: var(--primary-gradient);
  color: var(--white);
  border-color: var(--primary);
}

.coach-name {
  font-size: 11px;
  font-weight: 700;
  color: var(--navy);
}

.cta {
  margin-top: 8px;
  padding: 16px;
  font-size: 15px;
}
</style>
