<template lang='pug'>
  .cards
    .card(
      v-for="(item, index) in items"
      :key="item.id"
      @click="onClick(item.url)"
    )
      .card__image
        img(:src="item.image.url.medium")
      .card__description
        .title {{ item.title }}
        .published
        .price {{ item.price.human }}
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
  methods: {
    onClick(url) {
      const fullUrl = `https://www.urlaubspiraten.de${url}`;
      window.open(fullUrl);
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

        .title {
          font-size: 13px;
        }

        .price {
          margin-top: 10px;
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
  }
</style>
