<template>
  <div id="comic-rating">
    <div class="comic-rating__list" :class="{'disabled': starConfig.star > 1}">
      <button 
        v-for="star in starConfig.maxStars" 
        :key="star"
        @click="rate(star)"
        class="comic-rating__star"
        :class="[{ 'active': star <= stars }]"
        :disabled="starConfig.star > 0"
      >
        <font-awesome-icon 
          class="comic-rating__icon" 
          :class="`fa-${starConfig.starSize}`" 
          :icon="['fas', 'star']" 
        />
      </button>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas);
library.add(far);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: 'ComicRating',

  components: {
    FontAwesomeIcon
  },

  data () {
    return {
      stars: this.starConfig.star,
      star_desc: ''
    }
  },

  props: {
    starConfig: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  watch: {
    'starConfig.star' () {
      if (this.starConfig.star === 0) {
        this.stars = 0
        this.star_desc = ''
      } else {
        this.stars = this.starConfig.star
      }
    }
  },


  methods: {
    rate(star) {
      if (this.starConfig.disabled) {
        return;
      }
      if (star <= this.starConfig.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star;
        console.log(star <= this.stars)
        this.$emit('votedComic', this.stars)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$active-color: #f3d23e;
#comic-rating {
  margin: 10px 0 20px 0;

  .comic-rating__list {
    &:hover{
      .comic-rating__star {
        cursor: pointer;
      }
    }

    .comic-rating__star {
      border: none;
      background-color: transparent;
      cursor: pointer;
      &:not(.active) {
        color: #ccc;
      }
      &[disabled] {
        cursor: not-allowed;
      }
    }
  }

  .active {
    color: $active-color;
  }
}
</style>