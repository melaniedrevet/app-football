<template>
  <div id="app">
    <div id="menu">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <router-link class="navbar-brand" to="/">Home</router-link>     
        </b-navbar-brand>
       
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav> 
            <b-nav-item>
              <router-link class="navbar-item" to="/FL1">Ligue 1</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/PD">Liga</router-link>  
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/PL">Premier League</router-link> 
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/BL1">Bundesliga</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/SA">Serie A</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}

#menu .navbar-brand {
  margin-left: 1rem;
  margin-right: 0rem;
  color: rgba(255, 255, 255, 0.75);

}

.navbar-item {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
  margin-left: 2rem;
}

.navbar-item:hover, .navbar-brand:hover {
  color: white;
}

.dropdown-item, .navbar-item {
  color: rgba(255, 255, 255, 0.75);
}

/* Responsive */

/* Tablette */
@media screen and (min-width: 768px) {
  #menu .navbar-brand {
    margin-left: 1rem;
    margin-right: 10rem;
  }

  .navbar-item {
    margin-right: 1.2rem;
  }
}

/* Ordinateur */
@media screen and (min-width: 1024px) {
  #menu .navbar-brand {
    margin-left: 2rem;
    margin-right: 22rem;
  }

  .navbar-item {
    margin-left: 0.5rem;
  }
  
}

</style>
