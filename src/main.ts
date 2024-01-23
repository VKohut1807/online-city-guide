// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "@/App.vue";
import store from "@/store";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
// Composables
import { createApp } from "vue";

const app = createApp(App);

app.use(store);
app.use(mdiVue, {
  icons: mdijs,
});
registerPlugins(app);

app.mount("#app");
