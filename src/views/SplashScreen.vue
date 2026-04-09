<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="splash">
    <!-- Mesh gradient bg -->
    <div class="mesh-bg"></div>

    <!-- Paint splash decorations -->
    <div class="paint-splash paint-splash--green" style="width:350px;height:350px;top:-100px;right:-120px;opacity:0.08"></div>
    <div class="paint-splash paint-splash--gray" style="width:220px;height:220px;bottom:80px;left:-80px;opacity:0.04"></div>
    <div class="paint-splash paint-splash--white" style="width:180px;height:180px;bottom:250px;right:-50px;opacity:0.03"></div>

    <div class="splash-content">
      <div class="logo-container">
        <div class="logo-ring">
          <div class="logo-inner">
            <img src="https://www.dinefit.fr/wp-content/uploads/2025/01/DineFit-Logo-bleu-1-1_lwsoptimized-scaled_lwsoptimized-1947x2048.webp" alt="DineFit" class="logo-img" />
          </div>
        </div>
        <p class="brand-tagline">Votre salle de sport, dans votre poche</p>
      </div>

      <div class="splash-actions">
        <button class="btn btn-primary btn-block btn-lg" @click="router.push('/login')">
          <span class="mi" style="font-size:20px">arrow_forward</span>
          Commencer
        </button>
        <p class="splash-hint">Reservez, payez, progressez</p>
      </div>
    </div>

    <div class="splash-footer">
      <div class="splash-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
  background: var(--white);
}

.mesh-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,64,0,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 80%, rgba(10,46,91,0.04) 0%, transparent 50%);
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  z-index: 1;
  flex: 1;
  justify-content: center;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.logo-ring {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, var(--primary), var(--primary-dark), var(--primary-light), var(--primary), transparent);
  padding: 3px;
  filter: drop-shadow(0 0 20px rgba(255, 64, 0, 0.15));
}

.logo-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-tagline {
  font-size: 14px;
  color: var(--gray-400);
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.splash-actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 15px;
}

.splash-hint {
  font-size: 12px;
  color: var(--gray-400);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.splash-footer {
  z-index: 1;
  padding-top: 24px;
}

.splash-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gray-200);
  transition: all 0.3s var(--ease-out);
}

.dot.active {
  background: var(--primary);
  width: 28px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 64, 0, 0.2);
}
</style>
