<template>
  <!-- 수정 -->

  <v-dialog v-model="editDialog" max-width="600px" scrollable>
    <template #activator="{on}">
      <v-btn v-on="on" small text fab color="orange">
        <v-icon color="orange">mdi-square-edit-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <div>
        <v-toolbar dark color="deep-purple accent-4">
          <v-toolbar-title>아이템 수정</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="editDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
      <v-card-text>
        <ItemInput :edit="true" :editItem="item" @itemEdited="editDialog = false" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ItemInput from "./ItemInput";
export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      editDialog: false
    };
  },
  components: {
    ItemInput
  }
};
</script>

<style>
</style>