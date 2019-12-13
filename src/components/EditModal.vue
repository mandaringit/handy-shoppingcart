<template>
  <!-- 수정 -->
  <v-btn small text fab color="orange">
    <v-icon color="orange">mdi-square-edit-outline</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>