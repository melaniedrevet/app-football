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
            <b-nav-item-dropdown class="navbar-item" text="Europe" right>
              <b-dropdown-item>
                <router-link class="dropdown-item" to="">Champions League</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="dropdown-item" to="">Europa League</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="dropdown-item" to="">Conference League</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item>
              <router-link class="navbar-item" to="/ligue1">Ligue 1</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/liga">Liga</router-link>  
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/premierleague">Premier League</router-link> 
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/bundesliga">Bundesliga</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="navbar-item" to="/serieA">Serie A</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- <router-link to="/test">Test</router-link> -->
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
  margin-left: 2rem;
  margin-right: 20rem;
  color: rgba(255, 255, 255, 0.75);
}

.navbar-item {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
  margin-right: 1.2rem;
}

.dropdown-item, .navbar-item {
  color: rgba(255, 255, 255, 0.75);
}



</style>
