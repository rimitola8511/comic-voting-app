<template>
  <div id="comic">
    <h1 class="title">{{ comic.title }}</h1>
    <figure class="image">
      <img :src="comic.img" :alt="comic.alt">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ComicItem',

  props: {
    comic: { 
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
#comic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    text-align: center;
  }

  .image > img {
    max-width: 100%;
    height: auto;
    display: block;
  }
}
</style>