<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Группы</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2">До следующего обновления {{updateTime}} сек.</span>
    </v-toolbar>

    <v-content>
      <Groups/>
    </v-content>
  </v-app>
</template>

<script>
import Groups from "./components/Groups";
import store from "./store";

export default {
  name: "App",
  components: {
    Groups
  },
  data() {
    return {};
  },
  mounted: 
    function() {
      setInterval(() => store.commit("countDown"), 1000);
    
  },
  computed: {
    updateTime() {
      return store.state.updateTime;
    }
  }
};
</script>
