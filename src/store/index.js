import { createStore } from 'vuex'
import ComicModule from './modules/comic';

export default createStore({
  modules: {
    ComicModule,
  }
});
