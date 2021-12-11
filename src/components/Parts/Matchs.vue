<template>
  <div v-if="match.status === 'SCHEDULED'">
    <b-card-group deck>
      <b-card class="match">
        <b-card-text class="journee">Day {{ match.matchday }} <span> {{ matchDate }} </span> </b-card-text>
        <b-card-text class="pt-2"> 
          <b-icon-house> </b-icon-house>
           {{ match.homeTeam.name }}  <span> {{ match.score.fullTime.homeTeam }} </span> 
          </b-card-text>
        <b-card-text>
          <b-icon-cursor></b-icon-cursor>
          {{ match.awayTeam.name }} <span> {{ match.score.fullTime.awayTeam }} </span> 
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>

export default {
    name: 'Matchs',
    props: {
        match: Object
    },
    computed: {
      matchDate() {
        let date = this.match.utcDate.substr(0, 10);
        return date.split('-').reverse().join('/');
      }
    }
}
</script>

<style scoped>

.match {
  font-size: 16px;
}

span {
  float: right;
  font-weight: 500;
}

.journee {
  text-align: left;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  font-weight: 600;
}

</style>