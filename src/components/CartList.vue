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
          <div class="d-flex align-center justify-center">
            <EditModal :item="item" />
            <DeleteModal :item="item" />
          </div>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import numeral from "numeral";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
export default {
  name: "CartList",
  components: {
    EditModal,
    DeleteModal
  },
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
          text: "#",
          value: "action",
          align: "center",
          sortable: false
        }
      ]
    };
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
