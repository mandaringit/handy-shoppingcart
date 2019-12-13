<template>
  <div>
    <v-dialog v-model="aboutDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template #activator="{on}">
        <v-btn v-on="on" small fab text>
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </template>
      <v-card class="d-flex flex-column">
        <div>
          <v-toolbar dark color="deep-purple accent-4">
            <v-toolbar-title>ABOUT</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="aboutDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <v-container class="flex-grow-1 d-flex flex-column align-center justify-center">
          <h1 class="display-2 mb-2">🛒</h1>
          <h1
            class="display-1 font-italic font-weight-bold mb-2 deep-purple--text"
          >HANDY SHOPPING CART</h1>
          <h4 class="mb-2 caption">동아리 여행갈때, MT 갈때 🚌</h4>
          <h4 class="mb-2 caption">계산기 들고 고생하면서 장보던 총무들 이제는 안녕👋</h4>
          <h4 class="mb-2 caption">뭐든지 담을 수 있는 간단한 카트.</h4>

          <v-btn text fab href="https://github.com/mandaringit">
            <v-icon>mdi-github-box</v-icon>
          </v-btn>
          <h4 class="mb-2 caption">기타 요청은 GITHUB으로 와주세요.</h4>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutDialog: false
    };
  }
};
</script>

<style>
</style>