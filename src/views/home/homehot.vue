<template>
  <div id="list" v-if="movies">
    <List :movies="movies"></List>
  </div>
</template>

<script>
import List from "./List";

import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    List
  },
  computed: {
    ...mapState({
      movies: state => state.home.movies
    })
  },
  methods: {
    ...mapActions(["getMovies"])
  },
  created() {
    this.getMovies();
  },
  mounted() {
    // console.log(this.movies);
  }
};
</script>

<style>
#list {
  height: 100%;
  flex: 1;
  overflow: hidden;
}
</style>