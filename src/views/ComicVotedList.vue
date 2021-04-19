<template>
  <div id="comic-voted-list">
    <h1 class="comic-voted-list__title">Comics Voted List</h1>
    <div class="comic-voted-list__comic-item" v-if="getVotedComic.length">
      <comic-voted-item 
        v-for="comic in paginate(getVotedComic)" 
        :key="comic.id" 
        :votedComic="comic" 
        @delete="deleteComic"
      />
    </div>
    <div class="comic-voted-list__buttons" v-if="getVotedComic.length">
      <button 
        class="comic-voted-list__button" 
        @click="toPage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Prev <font-awesome-icon class="fa-1x" :icon="['fas', 'chevron-left']" />
      </button>
      <button 
        class="comic-voted-list__button" 
        @click="toPage(currentPage + 1)" 
        :disabled="currentPage === pagination.totalPages"
      >
        Next <font-awesome-icon class="fa-1x" :icon="['fas', 'chevron-right']" />
      </button>
    </div>
    <alert v-if="!getVotedComic.length" :alertMessage="alertMessage" :alertType="alertType" />
  </div>
</template>

<script>
import ComicVotedItem from '@/components/ComicVotedItem';
import Alert from '../components/commons/Alert.vue';
import { mapGetters, mapActions } from 'vuex';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas)

export default {
  name: 'ComicVotedList',
  components: { ComicVotedItem, FontAwesomeIcon, Alert },
  data () {
    return {
      currentPage: 1,
      perPage: 4,
      alertMessage: 'There are no voted comics',
      alertType: 'warning'
    }
  },
  computed: {
    ...mapGetters([
      'votedComic'
    ]),
    getVotedComic () {
      return this.votedComic.slice(0, this.votedComic.length)
    },
    pagination () {
      let totalVotedComic = this.getVotedComic.length;
      let pageFrom = (this.currentPage * this.perPage) - this.perPage;
      return  {
        totalVotedComic,
        totalPages: Math.ceil(totalVotedComic / this.perPage),
        range: {
          from: pageFrom,
          to: pageFrom + this.perPage
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'deleteVotedComic' 
    ]),
    deleteComic(comic) {
      this.deleteVotedComic(comic);
    },
    toPage (page) {
      this.currentPage = page
    },
    paginate (comicVotedlist) {
      let comicVotedListPart = comicVotedlist.slice(
        this.pagination.range.from,
        this.pagination.range.to
      )
      return comicVotedListPart
    },
  }
}
</script>

<style lang="scss" scoped>
#comic-voted-list {
  width: 70%;
  margin: 0 auto;

  .comic-voted-list__title {
    text-align: center;
  }

  .comic-voted-list__comic-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .comic-voted-list__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .comic-voted-list__button {
      padding: 10px 30px;
      border-radius: 60px;
      border: none;
      cursor: pointer;
      background-color: rgb(66, 185, 131);
      margin: 0 5px 20px 5px;
      color: #fff;

      &[disabled] {
        cursor: not-allowed;
        background-color: #ccc;
      }
    }
  }
}
</style>
