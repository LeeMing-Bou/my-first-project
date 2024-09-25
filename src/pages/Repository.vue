<template>
  <h1
    style="
      margin-top: 100px;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      color: rosybrown;
    "
  >
    WELCOME TO REPOSITORY
  </h1>
  <Courses
    v-for="(book, index) in repositories"
    :key="index"
    :title="book.title"
    :link="book.link"
    :img="book.image"
    class="control"
  >
  </Courses>
</template>
<script>
import useRepositoryStore from "@/Store/Repository.js";
import { mapActions, mapState } from "pinia";
import Courses from "@/components/Courses.vue";

export default {
  components: {
    Courses,
  },

  //Load Auto
  async created() {
    await this.getAllRepositories();
    console.log(this.repositories);
    this.testing();
  },
  //
  computed: {
    // ...mapState(useRepositoryStore, "repositories"),
    // Get States from file Repository.js You can check that file and "state"
    //"State" is being used to retrieve data from API from one place and able to share to any components

    ...mapState(useRepositoryStore, ["repositories"]),
    //Call in array bec in state there will be many var
  },
  methods: {
    ...mapActions(useRepositoryStore, ["getAllRepositories", "testing"]),
    // Get/Call Actions from file Repository.js You can check that file and "actions"
  },
};
</script>
