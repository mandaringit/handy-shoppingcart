<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template #activator="{on}">
      <v-btn v-on="on" text icon color="red">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <div>
        <v-toolbar dark color="primary">
          <v-toolbar-title>아이템 추가</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
      <v-card-text>
        <ItemInput @itemAdded="dialog = false" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ItemInput from "./ItemInput";
export default {
  components: {
    ItemInput
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
</style>