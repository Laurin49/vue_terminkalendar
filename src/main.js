import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
