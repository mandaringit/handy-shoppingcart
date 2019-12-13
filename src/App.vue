<template>
  <v-app>
    <!-- nave -->
    <div class="overflow-hidden">
      <v-app-bar color="deep-purple accent-4" absoulute dark scroll-target="#app-contents" fixed>
        <v-toolbar-title class="app-title">HANDY SHOPPING CART</v-toolbar-title>
        <v-spacer class="wide-spacer">
          <!-- 화면너비가 600px보다 클때 나타납니다 -->
        </v-spacer>
        <ClearModal />
        <v-toolbar-title class="mx-1">
          {{
          totalPrice | numbering
          }}
        </v-toolbar-title>
        <v-spacer class="small-spacer">
          <!-- 화면너비가 600px 보다 작아지면 나타납니다 -->
        </v-spacer>
        <!-- 모달창 -->
        <div class="app-wide">
          <InputModalScroll />
        </div>
        <div class="app-small">
          <InputModalFullScreen />
        </div>
      </v-app-bar>
    </div>
    <!-- content -->
    <v-sheet id="app-contents" class="over-flow-y-auto">
      <CartList />
    </v-sheet>
    <!-- footer -->
    <v-footer absolute>
      <v-spacer></v-spacer>
      <div>
        {{new Date().getFullYear()}},
        <a href="https://github.com/mandaringit">MANDARIN</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import CartList from "./components/CartList";
import InputModalFullScreen from "./components/InputModalFullScreen";
import InputModalScroll from "./components/InputModalScroll";
import ClearModal from "./components/ClearModal";
import { mapGetters } from "vuex";
import numeral from "numeral";
export default {
  name: "app",
  components: {
    CartList,
    ClearModal,
    InputModalFullScreen,
    InputModalScroll
  },
  mounted() {
    this.$store.dispatch("initialize");
  },
  computed: {
    ...mapGetters(["globalCarts"]),
    totalPrice() {
      const total = this.globalCarts.reduce(
        (acc, item) => (acc += item.price * item.count),
        0
      );
      return total;
    }
  },
  filters: {
    numbering(value) {
      return `TOTAL ₩ ${numeral(value).format("0,0")}`;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.small-spacer {
  display: none;
}

.app-small {
  display: none;
}

@media (max-width: 600px) {
  .app-title {
    display: none;
  }

  .wide-spacer {
    display: none;
  }

  .small-spacer {
    display: inline;
  }

  .app-small {
    display: block;
  }

  .app-wide {
    display: none;
  }
}
</style>
