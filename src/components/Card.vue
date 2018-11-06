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
        .destination {{ item.destination }}
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

        .card__image {
          img {
            transform: scale(1.2);
          }
        }
      }

      .card__image {
        overflow: hidden;
        img {
          width: 100%;
          border-radius: 3px 3px 0 0;
          transition: transform .2s;
        }
      }

      .card__description {
        padding: 10px;

        .title {
          font-size: 13px;
        }

        .destination {
          margin-top: 10px;
          font-size: 10px;
          font-style: italic;
        }

        .price {
          margin-top: 10px;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }
</style>
