<template>
  <div class="box">
    <form @submit.prevent="uploadFile">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">Upload File</label>
          <input
            @change="onChangeFile"
            type="file"
            class="form-control"
            id="inputCity"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Upload</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectFile: "",
    };
  },
  methods: {
    async uploadFile() {
      if (this.selectFile) {
        const formData = new FormData();
        formData.append("file", this.selectFile);
        try {
          const result = await axios.post(
            "http://172.23.128.93:3000/upload-single",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("The Result", result);
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("No File Uploaded!!!");
      }
    },

    onChangeFile(event) {
      this.selectFile = event.target.files[0];
      console.log("The file has been uploaded!" + this.selectFile);
    },
  },
};
</script>

<style scoped>
.box {
  padding: 50px;
}
</style>
