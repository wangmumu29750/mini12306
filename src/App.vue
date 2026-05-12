<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap");

:root {
  --blue-900: #0b4ea2;
  --blue-700: #1f6fd2;
  --blue-500: #4a94ff;
  --blue-100: #eaf3ff;
  --bg: #f3f7fc;
  --card: #ffffff;
  --text: #1c2f4a;
  --muted: #5e7088;
  --line: #d6e2f1;
  --ok: #1b8f4b;
  --danger: #c33a3a;
  --shadow: 0 10px 24px rgba(16, 45, 88, 0.08);
  --radius: 14px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Noto Sans SC", "HarmonyOS Sans SC", "MiSans", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: var(--text);
  background:
    radial-gradient(900px 280px at 20% -10%, #dcecff 0%, transparent 60%),
    radial-gradient(800px 260px at 100% 0%, #e8f2ff 0%, transparent 60%),
    var(--bg);
  min-height: 100vh;
}

a {
  color: inherit;
}

.container {
  width: min(1120px, 92%);
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(90deg, var(--blue-900), var(--blue-700));
  box-shadow: 0 6px 18px rgba(9, 40, 84, 0.24);
}

.topbar-inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.nav {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.nav a,
.nav .nav-link,
.nav .nav-btn {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  transition: 0.2s ease;
  border: none;
}

.nav a:hover,
.nav .nav-link:hover,
.nav .nav-btn:hover {
  background: rgba(255, 255, 255, 0.24);
}

.hero {
  margin: 18px auto 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background: linear-gradient(120deg, #ffffff 0%, #f2f8ff 100%);
  padding: 22px;
}

.hero h1 {
  margin: 0 0 8px;
  color: var(--blue-900);
  font-size: 28px;
}

.hero p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.card {
  margin: 14px 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background: var(--card);
  padding: 18px;
}

.card h2 {
  margin: 0 0 14px;
  color: var(--blue-900);
  font-size: 20px;
}

.grid {
  display: grid;
  gap: 12px;
}

.query-grid {
  grid-template-columns: repeat(6, minmax(110px, 1fr));
  align-items: end;
}

.auth-grid {
  grid-template-columns: 1fr 1fr;
}

.three-grid {
  grid-template-columns: repeat(3, 1fr);
}

label {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  font-size: 13px;
}

input,
select {
  width: 100%;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 0 12px;
  font-size: 14px;
  background: #fff;
  outline: none;
}

input:focus,
select:focus {
  border-color: var(--blue-500);
  box-shadow: 0 0 0 3px rgba(74, 148, 255, 0.15);
}

.btn {
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s ease;
}

.btn-primary {
  color: #fff;
  background: linear-gradient(90deg, var(--blue-700), var(--blue-500));
}

.btn-primary:hover {
  filter: brightness(1.05);
}

.btn-light {
  color: var(--blue-900);
  background: var(--blue-100);
  border: 1px solid #c8ddff;
}

.panel {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  padding: 14px;
}

.panel h3 {
  margin: 0 0 10px;
  color: var(--blue-700);
  font-size: 17px;
}

.stack > * + * {
  margin-top: 10px;
}

.tip {
  margin-top: 10px;
  font-size: 13px;
  color: var(--ok);
  min-height: 20px;
}

.tip.error {
  color: var(--danger);
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
}

thead {
  background: #edf4ff;
}

th,
td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid #e8eef7;
  font-size: 14px;
}

th {
  color: #274a79;
}

tbody tr:hover {
  background: #f7fbff;
}

.status {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #edf5ff;
  color: #2b5a96;
}

.status.success {
  background: #eaf9f0;
  color: #197943;
}

.status.warn {
  background: #fff3e8;
  color: #a15a1f;
}

.footer {
  text-align: center;
  color: #6b7f98;
  font-size: 13px;
  padding: 18px 0 24px;
}

@media (max-width: 980px) {
  .query-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .auth-grid {
    grid-template-columns: 1fr;
  }

  .three-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .container {
    width: 94%;
  }

  .nav a,
  .nav .nav-link,
  .nav .nav-btn {
    font-size: 13px;
    padding: 7px 10px;
  }

  .hero h1 {
    font-size: 23px;
  }

  .query-grid {
    grid-template-columns: 1fr;
  }

  th,
  td {
    font-size: 13px;
    padding: 10px 8px;
  }
}
</style>
