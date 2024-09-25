<template>
  <!-- header section strats -->
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> Finexo </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <!-- <a class="nav-link" href="index.html"
                >Home <span class="sr-only">(current)</span></a
              > -->
              <router-link to="/" class="nav-link"
                >{{$t('home')}}<span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/About' }">
              <!-- <a class="nav-link" href="about.html"> About</a> -->
              <!-- In Vue Language Link page we use router-link -->
              <router-link to="/About" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="why.html">Why Us</a>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/Team' }">
              <router-link to="/Team" class="nav-link">Team</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/Courses' }">
              <router-link to="/Courses" class="nav-link">Courses</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/Repository' }">
              <router-link to="/Repository" class="nav-link">Repository</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/RegisterForm' }">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-primary" @click="changeLanguage">CHANGE LANGUAGE</button>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-user" aria-hidden="true"></i> Login</a
              >
            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <!-- end header section -->
</template>

<script>
export default {
  data(){
    return({

    })
  },
  methods:{
    changeLanguage(){
      if ( this.$i18n.locale == 'en' ){
        this.$i18n.locale = 'khm';
      }else{
        this.$i18n.locale = 'en';
      }
    }
  }
}
</script>
