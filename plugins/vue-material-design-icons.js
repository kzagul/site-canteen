import Vue from 'vue';
import 'vue-material-design-icons/styles.css';
import Account from 'vue-material-design-icons/Account.vue';
import Feather from 'vue-material-design-icons/Feather.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';

export default function materialIcons() {
  Vue.component('AccountMdi', Account);
  Vue.component('FeatherMdi', Feather);
  Vue.component('MapMarker', MapMarker);
}
