<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = ref({
  title: '',
  tag: 'Stage',
  dateStart: '',
  dateEnd: '',
  timeStart: '',
  timeEnd: '',
  capacity: '20',
  description: '',
  imageUrl: '',
})

const tags = ['Stage', 'Competition', 'Special', 'Plein air', 'Workshop']
</script>

<template>
  <div class="screen create-screen">
    <div class="screen-header">
      <button class="back-btn" @click="router.back()">
        <span class="mi">arrow_back</span>
      </button>
      <h1 class="screen-title">Nouvel Event</h1>
      <div style="width:44px"></div>
    </div>

    <div class="form">
      <!-- Title -->
      <div class="field">
        <label class="field-label">Nom de l'evenement</label>
        <input class="input" v-model="form.title" placeholder="Ex: Stage Cross Training" />
      </div>

      <!-- Tag -->
      <div class="field">
        <label class="field-label">Categorie</label>
        <div class="tags-row">
          <button v-for="t in tags" :key="t" :class="['tag-btn', { active: form.tag === t }]" @click="form.tag = t">
            {{ t }}
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="field">
        <label class="field-label">Image (URL)</label>
        <input class="input" v-model="form.imageUrl" placeholder="https://..." />
        <div v-if="form.imageUrl" class="img-preview">
          <img :src="form.imageUrl" alt="Preview" />
        </div>
      </div>

      <!-- Dates -->
      <div class="field-row">
        <div class="field" style="flex:1">
          <label class="field-label">Date debut</label>
          <input class="input" type="date" v-model="form.dateStart" />
        </div>
        <div class="field" style="flex:1">
          <label class="field-label">Date fin</label>
          <input class="input" type="date" v-model="form.dateEnd" />
        </div>
      </div>

      <!-- Time -->
      <div class="field-row">
        <div class="field" style="flex:1">
          <label class="field-label">Heure debut</label>
          <input class="input" type="time" v-model="form.timeStart" />
        </div>
        <div class="field" style="flex:1">
          <label class="field-label">Heure fin</label>
          <input class="input" type="time" v-model="form.timeEnd" />
        </div>
      </div>

      <!-- Capacity -->
      <div class="field">
        <label class="field-label">Capacite max</label>
        <input class="input" type="number" v-model="form.capacity" />
      </div>

      <!-- Description -->
      <div class="field">
        <label class="field-label">Description</label>
        <textarea class="input textarea" v-model="form.description" placeholder="Decrivez l'evenement..." rows="4"></textarea>
      </div>

      <!-- Submit -->
      <div class="btn-row">
        <button class="btn btn-outline" style="flex:1" @click="router.back()">
          Brouillon
        </button>
        <button class="btn btn-primary" style="flex:1" @click="router.push('/admin/events')">
          <span class="mi" style="font-size:18px">check</span>
          Publier
        </button>
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

.textarea {
  resize: none;
  line-height: 1.5;
}

/* Tags */
.tags-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag-btn {
  padding: 8px 16px;
  border-radius: var(--radius-full);
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  color: var(--gray-500);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
}

.tag-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  box-shadow: 0 4px 16px rgba(255, 64, 0, 0.2);
}

/* Image preview */
.img-preview {
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 120px;
  border: 1.5px solid var(--gray-200);
}

.img-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Buttons */
.btn-row {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}
</style>
