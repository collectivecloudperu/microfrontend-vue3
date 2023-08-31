import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";

// Importamos el archivo CSS y JavaScript de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const app = createApp(App);

app.use(createPinia());
app.mount("#root");
