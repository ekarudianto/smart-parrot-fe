<template lang='pug'>
  .cards
    .card(
      v-for="(item, index) in items"
      :key="item.id"
    )
      .card__image
        //img(:src="`https://media.urlaubspiraten.de${item.image.url['medium-retina']}`")
        img(src="https://www.visitberlin.de/system/files/styles/visitberlin_teaser_single_visitberlin_mobile_1x/private/image/_SCH6057_c_Scholvien_PSR_SC_STD_V2_DL_PPT_0.jpg?h=32462309&itok=Xi0CMgn5")
      .card__description
        .title {{ item.short_title }}
</template>

<script>
export default {
  name: 'Card',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  .cards {
    .card {
      background: #FFF;
      margin: 5px 0;
      border-radius: 3px;

      &:hover {
        cursor: pointer;
        color: #2EB5E5;
      }

      .card__image {
        img {
          width: 100%;
          border-radius: 3px 3px 0 0;
        }
      }

      .card__description {
        padding: 10px;
      }
    }
  }
</style>
