<template>
  <div class="auth-page">
    <div class="auth-card">
      <section class="auth-brand">
        <div>
          <h1 class="brand-logo">Mini-12306</h1>
          <p class="brand-subtitle">一站式火车票预订原型系统</p>
        </div>
        <ul class="brand-list">
          <li>快速登录与注册</li>
          <li>订单查询与管理</li>
          <li>车次实时查询</li>
        </ul>
      </section>

      <section class="auth-panel">
        <div class="panel-head">
          <h2>账号注册</h2>
          <p>欢迎加入，完善信息即可注册</p>
        </div>
        <form class="auth-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <label>真实姓名</label>
            <input v-model.trim="form.realName" type="text" placeholder="请输入真实姓名" />
            <p v-if="realNameError" class="form-hint error">{{ realNameError }}</p>
          </div>
          <div class="form-row">
            <label>手机号（需11位有效手机号）</label>
            <input v-model.trim="form.phone" type="text" placeholder="请输入11位手机号" />
            <p v-if="phoneError" class="form-hint error">{{ phoneError }}</p>
          </div>
          <div class="form-row">
            <label>身份证号</label>
            <input v-model.trim="form.idCard" type="text" placeholder="请输入18位身份证号" />
            <p v-if="idCardError" class="form-hint error">{{ idCardError }}</p>
          </div>
          <div class="form-row">
            <label>银行卡号</label>
            <input v-model.trim="form.bankCard" type="text" placeholder="请输入常用银行卡号" />
            <p v-if="bankCardError" class="form-hint error">{{ bankCardError }}</p>
          </div>
          <div class="form-row">
            <label>设置密码（需8-16位，含字母+数字）</label>
            <input v-model.trim="form.password" type="password" placeholder="请输入8-16位密码" />
            <p v-if="passwordError" class="form-hint error">{{ passwordError }}</p>
          </div>
          <div class="form-row">
            <label>确认密码</label>
            <input v-model.trim="form.confirmPassword" type="password" placeholder="请再次输入密码" />
            <p v-if="confirmError" class="form-hint error">{{ confirmError }}</p>
          </div>
          <button class="btn btn-primary btn-login" type="submit" :disabled="!allValid">提交注册</button>
          <div class="form-foot">
            已有账号？
            <router-link class="link-btn" to="/login">立即登录</router-link>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  realName: "",
  phone: "",
  idCard: "",
  bankCard: "",
  password: "",
  confirmPassword: ""
});

const realNameValid = computed(() => form.realName.trim().length > 0);
const phoneValid = computed(() => /^\d{11}$/.test(form.phone.trim()));
const idCardValid = computed(() => /^\d{17}(\d|X)$/.test(form.idCard.trim().toUpperCase()));
const bankCardValid = computed(() => /^\d{12,19}$/.test(form.bankCard.trim()));
const passwordValid = computed(() => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(form.password));
const confirmValid = computed(
  () => form.confirmPassword.trim().length > 0 && form.confirmPassword === form.password
);

const realNameError = computed(() => {
  if (!form.realName.trim()) {
    return "";
  }

  return realNameValid.value ? "" : "请输入真实姓名";
});

const phoneError = computed(() => {
  if (!form.phone.trim()) {
    return "";
  }

  return phoneValid.value ? "" : "手机号格式错误，请输入11位数字";
});

const idCardError = computed(() => {
  if (!form.idCard.trim()) {
    return "";
  }

  return idCardValid.value ? "" : "身份证号格式错误";
});

const bankCardError = computed(() => {
  if (!form.bankCard.trim()) {
    return "";
  }

  return bankCardValid.value ? "" : "银行卡号格式错误";
});

const passwordError = computed(() => {
  if (!form.password) {
    return "";
  }

  return passwordValid.value ? "" : "密码需8-16位，包含字母和数字";
});

const confirmError = computed(() => {
  if (!form.confirmPassword) {
    return "";
  }

  return form.confirmPassword === form.password ? "" : "两次输入的密码不一致";
});

const allValid = computed(
  () =>
    realNameValid.value &&
    phoneValid.value &&
    idCardValid.value &&
    bankCardValid.value &&
    passwordValid.value &&
    confirmValid.value
);

const handleSubmit = () => {
  if (!allValid.value) {
    return;
  }

  const payload = {
    name: form.realName.trim(),
    phone: form.phone.trim(),
    account: form.phone.trim(),
    idCard: form.idCard.trim().toUpperCase(),
    bankCard: form.bankCard.trim(),
    password: form.password
  };

  localStorage.setItem("mini12306User", JSON.stringify(payload));
  router.push("/login");
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 18px;
  position: relative;
  overflow: hidden;
  --primary: #2f89ff;
  --primary-soft: #4aa0ff;
  --primary-focus: #7bb4ff;
  --text-main: #1d2b3a;
  --text-strong: #1e2f44;
  --text-subtle: #5c6f84;
  --text-muted: #7a8aa0;
  --text-brand: #40606d;
  --border: #e1e8f0;
  --border-soft: #e2ebf5;
  --card-glass: rgba(255, 255, 255, 0.76);
  --brand-grad: linear-gradient(160deg, rgba(218, 238, 255, 0.95), rgba(222, 249, 239, 0.95));
  color: var(--text-main);
  background:
    radial-gradient(520px 380px at 12% 10%, rgba(120, 190, 255, 0.45), transparent 70%),
    radial-gradient(520px 380px at 88% 78%, rgba(140, 235, 205, 0.45), transparent 70%),
    linear-gradient(135deg, #e8f2ff 0%, #eefbf5 56%, #e6f0ff 100%);
}

.auth-page::before,
.auth-page::after {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(18px);
  opacity: 0.75;
  pointer-events: none;
  z-index: 0;
}

.auth-page::before {
  top: -160px;
  left: -120px;
  background: radial-gradient(circle, rgba(120, 190, 255, 0.55), transparent 70%);
}

.auth-page::after {
  bottom: -180px;
  right: -120px;
  background: radial-gradient(circle, rgba(138, 232, 205, 0.55), transparent 70%);
}

.auth-card {
  width: min(1040px, 92%);
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  background: var(--card-glass);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(22px);
  box-shadow: 0 24px 60px rgba(15, 46, 90, 0.15);
  overflow: hidden;
  position: relative;
  z-index: 1;
  animation: cardIn 0.7s ease;
}

.auth-brand {
  padding: 48px 44px;
  background: var(--brand-grad);
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
}

.brand-logo {
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #1a3752;
}

.brand-subtitle {
  margin: 8px 0 0;
  font-size: 15px;
  color: var(--text-subtle);
}

.brand-list {
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.brand-list li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  color: var(--text-brand);
  animation: fadeUp 0.6s ease both;
}

.brand-list li:nth-child(1) {
  animation-delay: 0.1s;
}

.brand-list li:nth-child(2) {
  animation-delay: 0.2s;
}

.brand-list li:nth-child(3) {
  animation-delay: 0.3s;
}

.brand-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #32c676;
  box-shadow: 0 0 0 4px rgba(50, 198, 118, 0.18);
}

.auth-panel {
  padding: 44px 40px 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  animation: panelIn 0.7s ease 0.1s both;
}

.panel-head h2 {
  margin: 0 0 6px;
  font-size: 22px;
  color: var(--text-strong);
}

.panel-head p {
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
}

.auth-form {
  display: grid;
  gap: 14px;
}

.form-row label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  color: var(--text-muted);
}

.form-row input {
  width: 100%;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 0 14px;
  font-size: 14px;
  background: #fff;
  color: var(--text-strong);
  outline: none;
  transition: 0.2s ease;
}

.form-row input:focus {
  border-color: var(--primary-focus);
  box-shadow: 0 0 0 3px rgba(47, 137, 255, 0.15);
}

.form-row input::placeholder {
  color: #b1bccb;
}

.form-hint {
  margin: 6px 0 0;
  font-size: 12px;
  color: #9aa7b8;
}

.form-hint.error {
  color: #c75a5a;
}

.form-hint.ok {
  color: #2f9f6f;
}

.form-foot {
  font-size: 13px;
  color: var(--text-muted);
}

.link-btn {
  border: none;
  background: none;
  color: var(--primary);
  cursor: pointer;
  font-weight: 600;
  padding: 0 4px;
  text-decoration: none;
}

.btn {
  height: 44px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn-login {
  margin-top: 4px;
}

.btn-primary {
  color: #fff;
  background: linear-gradient(90deg, var(--primary), var(--primary-soft));
  box-shadow: 0 8px 18px rgba(47, 137, 255, 0.35);
}

.btn-primary:hover {
  filter: brightness(1.03);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
  box-shadow: none;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes panelIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 920px) {
  .auth-card {
    grid-template-columns: 1fr;
  }

  .auth-brand {
    padding: 34px 28px;
    align-items: center;
    text-align: center;
  }

  .auth-panel {
    padding: 30px 26px 32px;
  }

  .brand-list {
    justify-items: center;
  }

  .brand-list li {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .auth-card {
    border-radius: 24px;
  }

  .auth-panel {
    padding: 28px 20px 30px;
  }

  .auth-brand {
    padding: 30px 22px;
  }

  .brand-logo {
    font-size: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .auth-card,
  .auth-panel,
  .brand-list li {
    animation: none;
  }
}
</style>
