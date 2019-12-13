<template>
  <!-- 삭제 -->
  <div class="text-center">
    <v-dialog v-model="clearDialog" width="300px">
      <template #activator="{on}">
        <v-btn v-on="on" text fab>
          <v-icon color="cyan lighten-3">mdi-cached</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="display-5">항목 초기화</v-card-title>
        <v-card-text>
          <v-spacer></v-spacer>
          <div class="mb-3">정말 모든 아이템을 초기화합니까?</div>
          <v-btn small color="error" @click="clearCarts">초기화</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clearDialog: false
    };
  },
  methods: {
    clearCarts() {
      this.$store.dispatch("clearCartsAction");
      this.clearDialog = false;
    }
  }
};
</script>

<style>
</style>