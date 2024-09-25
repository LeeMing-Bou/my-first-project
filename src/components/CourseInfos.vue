<template>
  <h1 style="margin-top: 100px; text-align: center; text-transform: uppercase; font-weight: bold; color: rosybrown;">WELCOME TO MY COURSE</h1>
  <Courses
    v-for="(book, index) in courseData"
    :key="index"
    :title="book.title"
    :link="book.link"
    :img="book.image"
    class="control"
  >
  </Courses>
</template>

<script>
import axios from "axios";
import Courses from "./Courses.vue";
export default {
  components: {
    Courses,
  },

  data() {
    return {
      courseData: [],
    };
  },

  async created() {
    //Call API to get course data
    // const url = "v1/courses";
    //Promise and Async
    // const response = await axios.get(url);
    console.log("A");
    // const response = await axios.get("/v1/courses");
    const response = await axios.get("v1/courses");
    console.log("A1");
    const course = response.data;
    this.courseData = course;
    console.log("courseData", this.courseData);
  },
};
</script>


