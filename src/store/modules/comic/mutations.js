const mutations = {
  SET_COMIC (state, payload) {
    state.comic = { ...payload };
  },

  SET_LOADING (state, payload) {
    state.loading = payload;
  },

  SET_VOTED_COMIC (state, payload) {
    const votedComicFound = state.votedComic.find(comic => comic.num === payload.num);
    !votedComicFound && state.votedComic.push(payload);
  },

  SET_STAR_NUMBER (state, payload = 0) {
    state.starConfig.star = payload;
  },

  DELETE_BY_INDEX_VOTED_COMIC(state, payload) {
    state.votedComic = state.votedComic.filter(comic => comic.num !== payload.num);
  }
};

export default mutations;
