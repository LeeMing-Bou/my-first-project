<template>
  <div class="card control" style="width: 18rem">
    <img :src="img" class="card-img-top book-image item" :alt="title" />
    <div class="card-body">
      <h5 class="book-title">{{ title }}</h5>
      <p class="card-text">WELCOME TO MY LIBRARY</p>
      <a :href="link" class="btn btn-primary" target="_blank">Purchase</a>
    </div>
  </div>
</template>
<script>
export default {
  //get value from other components
  props: ["link", "title", "img"],
};
</script>

<style>
.item {
  display: block;
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 5px;
}
.control {
  display: inline-block;
  text-align: center;
  margin: 50px;
}

.book-image {
  height: auto;
  display: block;
  margin: 0 auto;
}

.book-title {
  display: block;
  margin-top: 10px;
  color: brown;
  font-size: 2rem;
}
</style>
