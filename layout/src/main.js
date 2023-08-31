import { createApp} from "vue";
import { createPinia } from 'pinia'
import Layout from "./Layout.vue";

import Formulario from "home/Formulario";
import Tabla from "microfrontend-3-tabla/Tabla";
import Analytica from  "microfrontend-2-analytica/Analytica";

const app = createApp(Layout);

app.component("formulario", Formulario);
app.component("tabla", Tabla);
app.component("analytica", Analytica);

app.use(createPinia());
app.mount("#root");
