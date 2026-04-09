<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="login-screen">
    <div class="paint-splash paint-splash--green" style="width:280px;height:280px;top:-80px;left:-100px;opacity:0.08"></div>
    <div class="paint-splash paint-splash--gray" style="width:200px;height:200px;bottom:40px;right:-80px;opacity:0.04"></div>

    <div class="login-content">
      <button class="back-btn" @click="router.push('/')">
        <span class="mi">arrow_back</span>
      </button>

      <div class="login-header">
        <h1 class="display-title" style="font-size:42px">Connexion</h1>
        <p>Accedez a votre espace DineFit</p>
      </div>

      <div class="login-form">
        <div class="input-group">
          <label class="input-label">Email</label>
          <div class="input-wrapper">
            <span class="mi input-icon">mail</span>
            <input class="input" type="email" placeholder="votre@email.com" />
          </div>
        </div>

        <div class="input-group">
          <label class="input-label">Mot de passe</label>
          <div class="input-wrapper">
            <span class="mi input-icon">lock</span>
            <input class="input" type="password" placeholder="Votre mot de passe" />
          </div>
        </div>

        <div class="login-options">
          <label class="checkbox-label">
            <span class="checkbox"><span class="mi" style="font-size:14px;color:var(--primary)">check</span></span>
            Se souvenir de moi
          </label>
          <a class="forgot-link">Mot de passe oublie ?</a>
        </div>

        <button class="btn btn-primary btn-block" @click="router.push('/home')">
          Se connecter
        </button>

        <div class="divider">
          <span class="divider-line"></span>
          <span class="divider-text">ou</span>
          <span class="divider-line"></span>
        </div>

        <button class="btn btn-outline btn-block magic-btn" @click="router.push('/home')">
          <span class="mi" style="font-size:18px;color:var(--primary)">auto_awesome</span>
          Connexion par Magic Link
        </button>

        <div class="signup-row">
          <span>Pas encore de compte ?</span>
          <a class="signup-link">S'inscrire</a>
        </div>
      </div>

      <!-- Admin shortcut for demo -->
      <button class="admin-shortcut" @click="router.push('/admin')">
        <span class="mi" style="font-size:16px">admin_panel_settings</span>
        Demo Admin
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-screen {
  min-height: 100vh;
  min-height: 100dvh;
  padding: 20px 24px 40px;
  position: relative;
  overflow: hidden;
  background: var(--white);
}

.login-content {
  position: relative;
  z-index: 1;
}

.back-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--gray-50);
  border: 1.5px solid var(--gray-200);
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.login-header {
  margin-top: 36px;
  margin-bottom: 40px;
}

.login-header h1 {
  margin-bottom: 10px;
  color: var(--navy);
}

.login-header p {
  color: var(--gray-400);
  font-size: 14px;
  font-weight: 500;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.input-wrapper {
  position: relative;
}

.input-wrapper .input {
  padding-left: 48px;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: var(--gray-400);
}

.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--gray-500);
  cursor: pointer;
  font-weight: 600;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 1.5px solid var(--gray-200);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.forgot-link {
  font-size: 12px;
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
}

.divider {
  display: flex;
  align-items: center;
  gap: 14px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--gray-200);
}

.divider-text {
  font-size: 11px;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.signup-row {
  text-align: center;
  font-size: 13px;
  color: var(--gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
}

.signup-link {
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
}

.admin-shortcut {
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  border-radius: var(--radius-md);
  background: var(--gray-50);
  border: 1.5px dashed var(--gray-200);
  color: var(--gray-400);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
}

.admin-shortcut:active {
  background: var(--gray-100);
}
</style>
