<template>
  <!-- 삭제 -->
  <div class="text-center">
    <v-dialog v-model="deleteDialog" width="300px">
      <template #activator="{on}">
        <v-btn v-on="on" small text fab color="red">
          <v-icon color="red">mdi-trash-can</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="display-5">항목삭제</v-card-title>
        <v-card-text>
          <v-spacer></v-spacer>
          <div class="mb-3">"{{item.name}}" 아이템을 정말 삭제합니까?</div>
          <v-btn small color="error" @click="deleteItem(item)">삭제</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteDialog: false
    };
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItemAction", item);
      this.deleteDialog = false;
    }
  }
};
</script>

<style>
</style>