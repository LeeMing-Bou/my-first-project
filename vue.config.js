const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // Call API from Server
  // devServer: {
    // proxy: "http://172.23.129.202",
    // proxy: "https://api.tfdevs.com",
    // proxy:'http://localhost:80/doc', With docker but failed :(
  // },
});
