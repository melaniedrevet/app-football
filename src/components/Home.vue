<template>
  <div class="container home">
    <div class="row text-center">
      <h1> Football App </h1>
      <h2>Results, matches, standings, teams and top scorers of the 5 European championships !</h2>
      <div class="col-2">
        <b-link to="/FL1">
          <img style="width: 180px; margin-bottom:30px;" src="../assets/FL1.png" alt="ligue1">
        </b-link>
      </div>
      <div class="col-2">
        <b-link to="/PD">
          <img style="width: 170px; margin-bottom:30px;" src="../assets/PD.png" alt="liga">
        </b-link>
      </div>
      <div class="col-2">
        <b-link to="/PL">
          <img style="width: 147px; margin-bottom:30px;" src="../assets/PL.png" alt="premierleague">
        </b-link>
      </div>
      <div class="col-2">
        <b-link to="/BL1">
          <img style="width: 225px; margin-bottom:30px;" src="../assets/BL1.png" alt="bundesliga">
        </b-link>
      </div>
      <div class="col-2">
        <b-link to="/SA">
          <img style="width: 255px; margin-bottom:30px;" src="../assets/SA.png" alt="seriea">
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>

h1 {
  margin-top: 80px;
  font-weight: 500;
  font-size: 40px;
  border-bottom: 2px solid black;
  padding-bottom: 60px;
}

h2 {
  margin-top: 70px;
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
}

.col-2 {
  margin: 90px 20px 0 20px;
}

</style>