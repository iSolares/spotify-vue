/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { VueQueryPlugin } from '@tanstack/vue-query'


const app = createApp(App)

registerPlugins(app)

app.use(VueQueryPlugin)
app.mount('#app')
