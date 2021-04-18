<template>
  <div id="home">
    <comic-item :comic="comicItem" />
    <div class="rating">
      <comic-rating :starConfig="startConfig" @votedComic="votedComic" />
    </div>
    <div class="pagination">
      <simple-comic-pagination :comicNumber="comicItem.num" @getComicByNumber="getComicByNumber"/>
    </div>
  </div>
  <loading :loading="loading" />
</template>

<script>
import ComicItem from '@/components/Comic.vue';
import loading from '@/components/commons/loading';
import ComicRating from '@/components/ComicRating';
import SimpleComicPagination from '@/components/SimpleComicPagination';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    ComicItem,
    loading,
    ComicRating,
    SimpleComicPagination
  },
  created() {
    this.getRandomComic(this.randomNumber());
  },
  computed: {
    ...mapGetters([
      'comicItem', 'loading', 'startConfig'
    ]),
  },
  methods: {
    ...mapActions({ 
      getRandomComic: 'getRandomComic', 
      saveVotedComic: 'saveVotedComic'
    }),
    getComicByNumber(comicNumber) {
      this.getRandomComic(comicNumber);
    },
    randomNumber () {
      return Number (Math.random() * 2000).toFixed(0);
    },
    votedComic(stars) {
      const votedComic = { ...this.comicItem, stars: stars };
      this.saveVotedComic(votedComic);
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
