<template>
  <div id="comic-pagination">
    <button class="button comic-pagination__prev" @click="subtractOneToComicNumber" :disabled="comicNumberToSearch === 1">
      <font-awesome-icon class="fa-1sx" :icon="['fas', 'chevron-left']" /> Prev
    </button>
    <button class="button comic-pagination__random" @click="getRandomComicNumber">
      Random <font-awesome-icon class="fa-1x" :icon="['fas', 'random']" />
    </button>
    <button class="button comic-pagination__next" @click="addOneToComicNumber" :disabled="comicNumberToSearch === 2000">
      Next <font-awesome-icon class="fa-1x" :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas)
export default {
  name: 'SimpleComicPagination',
  components: {
    FontAwesomeIcon
  },
  props: {
    comicNumber: {
      type: Number,
    },

    comicNumberMax: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      comicNumberToSearch: this.comicNumber
    }
  },
  methods: {
    addOneToComicNumber() {
      this.setComicNumberToSearch()
      this.comicNumberToSearch++;
      this.$emit('getComicByNumber', this.comicNumberToSearch)
    },

    subtractOneToComicNumber() {
      this.setComicNumberToSearch()
      this.comicNumberToSearch--;
      this.$emit('getComicByNumber', this.comicNumberToSearch)
    },
    getRandomComicNumber() {
      const comicNumber = Math.random() * this.comicNumberMax;
      this.$emit('getComicByNumber', Number(comicNumber.toFixed(0)))
    },
    setComicNumberToSearch() {
      this.comicNumberToSearch = this.comicNumber
    }
  }
}
</script>

<style lang="scss" scoped>
#comic-pagination {
  button {
    padding: 10px 30px;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    background-color: #42b983;
    margin: 0 5px 20px 5px;
    color: #fff;

    &[disabled] {
      cursor: not-allowed;
      background-color: #ccc;
    }
  }
}
</style>