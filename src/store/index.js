import { createStore } from "vuex";

import account from './modules/account.js';
import users from './modules/users.js';

export default createStore({
  modules: {
    account,
    users
  }
});
