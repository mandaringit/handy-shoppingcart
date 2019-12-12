<template>
  <div style="padding: 64px 0 32px 0;">
    <v-container>
      <v-data-table
        :headers="headers"
        :items="globalCarts"
        :sort-by="['name', 'price', 'count']"
        hide-default-footer
        :items-per-page="30"
      >
        <template #item.price="{ item }">{{ item.price | numbering }}</template>
        <template #item.count="{ item }">{{ item.count }} 개</template>
        <!-- 아이템 개별 총합 가격 -->
        <template #item.priceSum="{ item }">{{ sumPrice(item.price, item.count) | numbering }}</template>
        <!-- 아이템 액션 -->
        <template #item.action="{ item }">
          <v-btn small color="error" @click="deleteItem(item)">delete</v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import numeral from "numeral";
export default {
  name: "CartList",
  data() {
    return {
      headers: [
        {
          text: "상품명",
          value: "name",
          align: "center"
        },
        {
          text: "개별가격",
          value: "price",
          align: "center"
        },
        {
          text: "갯수",
          value: "count",
          align: "center"
        },
        {
          text: "총가격",
          value: "priceSum",
          align: "center",
          sortable: false
        },
        {
          text: "액션",
          value: "action",
          align: "center",
          sortable: false
        }
      ]
    };
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItemAction", item);
    }
  },
  computed: {
    globalCarts() {
      return this.$store.getters.globalCarts;
    },
    sumPrice() {
      return (count, price) => count * price;
    }
  },
  filters: {
    numbering(value) {
      return `₩ ${numeral(value).format("0,0")}`;
    }
  }
};
</script>

<style></style>
