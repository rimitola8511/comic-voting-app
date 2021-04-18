import apiService from '@/services/ComicService';

const actions = {
  async getRandomComic ({ commit, state }, comicNumber) {
    const foundVotedComic = state.votedComic.find(
      comic => comic.num === comicNumber
    );
    commit('SET_LOADING', true)
    try {
      const { data } = await apiService.getRandomComic(comicNumber);
      commit('SET_COMIC', data);
      !foundVotedComic 
        ? commit('SET_STAR_NUMBER') 
        : commit('SET_STAR_NUMBER', foundVotedComic.stars);
      commit('SET_LOADING', false);
    } catch (error) {
      commit('SET_LOADING', false)
      console.log(error)
    }
  },

  saveVotedComic ({ commit }, votedComic) {
    commit('SET_VOTED_COMIC', votedComic);
    commit('SET_STAR_NUMBER', votedComic.stars);
  },

  deleteVotedComic({ commit }, votedComic) {
    //const index = state.votedComic.indexOf(votedComic);
    commit('DELETE_BY_INDEX_VOTED_COMIC', votedComic);
  }
};

export default actions;
