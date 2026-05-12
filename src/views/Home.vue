<template>
  <div>
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="logo">Mini-12306</div>
        <nav class="nav">
          <router-link class="nav-link" to="/home">首页</router-link>
          <router-link class="nav-link" :to="{ path: '/home', hash: '#search' }">车次查询</router-link>
          <router-link class="nav-link" :to="{ path: '/home', hash: '#orders' }">我的订单</router-link>
          <button class="nav-btn" type="button" @click="logout">退出登录</button>
        </nav>
      </div>
    </header>

    <main class="container" id="home">
      <section class="hero">
        <h1>Mini-12306 火车票预订系统</h1>
        <p>原型演示范围：登录注册、车次查询、车票预订、订单管理、退票改签。</p>
      </section>

      <section class="card" id="search">
        <h2>车次查询</h2>
        <div class="grid query-grid">
          <div>
            <label>出发地</label>
            <input type="text" placeholder="例如：北京" />
          </div>
          <div>
            <label>目的地</label>
            <input type="text" placeholder="例如：上海" />
          </div>
          <div>
            <label>日期</label>
            <input type="date" />
          </div>
          <div>
            <label>车次类型</label>
            <select>
              <option>全部</option>
              <option>高铁/动车</option>
              <option>城际</option>
              <option>普速</option>
            </select>
          </div>
          <div>
            <label>席别</label>
            <select>
              <option>二等座</option>
              <option>一等座</option>
              <option>商务座</option>
              <option>硬座</option>
            </select>
          </div>
          <div>
            <label>&nbsp;</label>
            <button class="btn btn-primary" type="button" style="width: 100%;" @click="showTip('search', '查询演示：已加载预置车次')">
              查询车次
            </button>
          </div>
        </div>
        <div class="tip">{{ tips.search }}</div>
      </section>

      <section class="card">
        <h2>车次列表展示</h2>
        <table>
          <thead>
            <tr>
              <th>车次号</th>
              <th>出发时间</th>
              <th>到达时间</th>
              <th>出发站</th>
              <th>到达站</th>
              <th>票价</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>G102</td>
              <td>08:10</td>
              <td>12:35</td>
              <td>北京南</td>
              <td>上海虹桥</td>
              <td>¥553</td>
              <td><button class="btn btn-light" type="button" @click="showTip('buy', '预订演示：G102 下单成功')">预订</button></td>
            </tr>
            <tr>
              <td>D2281</td>
              <td>10:06</td>
              <td>15:22</td>
              <td>南京南</td>
              <td>厦门北</td>
              <td>¥389</td>
              <td><button class="btn btn-light" type="button" @click="showTip('buy', '预订演示：D2281 下单成功')">预订</button></td>
            </tr>
            <tr>
              <td>K45</td>
              <td>13:40</td>
              <td>22:18</td>
              <td>郑州</td>
              <td>武汉</td>
              <td>¥121</td>
              <td><button class="btn btn-light" type="button" @click="showTip('buy', '预订演示：K45 下单成功')">预订</button></td>
            </tr>
            <tr>
              <td>G7615</td>
              <td>18:20</td>
              <td>20:03</td>
              <td>杭州东</td>
              <td>宁波</td>
              <td>¥86</td>
              <td><button class="btn btn-light" type="button" @click="showTip('buy', '预订演示：G7615 下单成功')">预订</button></td>
            </tr>
          </tbody>
        </table>
        <div class="tip">{{ tips.buy }}</div>
      </section>

      <section class="card" id="orders">
        <h2>订单管理</h2>
        <table>
          <thead>
            <tr>
              <th>订单号</th>
              <th>车次</th>
              <th>乘客</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MO20260421001</td>
              <td>G102</td>
              <td>张三</td>
              <td>¥553</td>
              <td><span class="status success">已出票</span></td>
              <td>
                <button class="btn btn-light" type="button" @click="showTip('order', '改签演示：订单 MO20260421001 已提交改签')">改签</button>
                <button class="btn btn-light" type="button" @click="showTip('order', '退票演示：订单 MO20260421001 已提交退票')">退票</button>
              </td>
            </tr>
            <tr>
              <td>MO20260421002</td>
              <td>D2281</td>
              <td>李四</td>
              <td>¥389</td>
              <td><span class="status warn">待支付</span></td>
              <td>
                <button class="btn btn-light" type="button" @click="showTip('order', '改签演示：订单 MO20260421002 已提交改签')">改签</button>
                <button class="btn btn-light" type="button" @click="showTip('order', '退票演示：订单 MO20260421002 已提交退票')">退票</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="tip">{{ tips.order }}</div>
      </section>

      <section class="card">
        <h2>三大功能区</h2>
        <div class="grid three-grid">
          <div class="panel">
            <h3>在线购票</h3>
            <div class="stack">
              <div>
                <label>车次号</label>
                <input type="text" placeholder="例如：G102" />
              </div>
              <div>
                <label>乘客姓名</label>
                <input type="text" placeholder="请输入乘客姓名" />
              </div>
              <button class="btn btn-primary" type="button" @click="showTip('f1', '在线购票演示：提交成功')">确认购票</button>
              <div class="tip">{{ tips.f1 }}</div>
            </div>
          </div>

          <div class="panel">
            <h3>车票改签</h3>
            <div class="stack">
              <div>
                <label>订单号</label>
                <input type="text" placeholder="请输入订单号" />
              </div>
              <div>
                <label>新日期</label>
                <input type="date" />
              </div>
              <button class="btn btn-primary" type="button" @click="showTip('f2', '车票改签演示：提交成功')">提交改签</button>
              <div class="tip">{{ tips.f2 }}</div>
            </div>
          </div>

          <div class="panel">
            <h3>车票退票</h3>
            <div class="stack">
              <div>
                <label>订单号</label>
                <input type="text" placeholder="请输入订单号" />
              </div>
              <div>
                <label>退票原因</label>
                <select>
                  <option>行程变更</option>
                  <option>时间冲突</option>
                  <option>个人原因</option>
                </select>
              </div>
              <button class="btn btn-primary" type="button" @click="showTip('f3', '车票退票演示：提交成功')">确认退票</button>
              <div class="tip">{{ tips.f3 }}</div>
            </div>
          </div>
        </div>
      </section>

      <div class="footer">Mini-12306 课程作业原型页面（纯前端静态实现）</div>
    </main>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tips = reactive({
  search: "",
  buy: "",
  order: "",
  f1: "",
  f2: "",
  f3: ""
});

const tipTimers = {};

const showTip = (key, text) => {
  tips[key] = text;

  if (tipTimers[key]) {
    clearTimeout(tipTimers[key]);
  }

  tipTimers[key] = setTimeout(() => {
    tips[key] = "";
  }, 2400);
};

const logout = () => {
  localStorage.clear();
  router.push("/login");
};
</script>
