import './index.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(ToastPlugin);

app.mount("#app");
