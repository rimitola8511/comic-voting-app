<template>
  <div class="card">
    <figure>
      <p class="image is-120x120">
        <img :src="votedComic.img" :alt="votedComic.alt" />
      </p>
    </figure>
    <div class="container">
      <h4><b>{{ votedComic.title }}</b></h4>
      <comic-rating :starConfig="starConfig" />
    </div>
    <button class="button" @click="$emit('delete', votedComic)">X</button>
  </div>
</template>

<script>
import ComicRating from '@/components/ComicRating';
export default {
  name: 'ComicVotedItem',
  components: {
    ComicRating
  },
  props: {
    votedComic: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
      starConfig: {
        star: this.votedComic.stars,
        maxStars: 5,
        disabled: true,
        starSize: '1x',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .image {
    &.is-120x120 {
      width: 120px;
      height: 120px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .container {
    padding: 2px 16px;
  }

  button {
    position: absolute;
    background-color: rgb(204, 204, 204);
    border: none;
    border-radius: 50%;
    padding: 5px 8px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    top: 10px;
    right: 10px;

    &:hover {
      background-color: rgb(172, 172, 172);
    }

    &:active {
      background-color: rgb(102, 102, 102);
    }
  }
}

@media (min-width: 768px) {
  .card {
    flex-direction: column;
  }
}

@media (min-width: 1023px) {
  .card {
    width: 45%;
    flex-direction: row;
  }
}
</style>