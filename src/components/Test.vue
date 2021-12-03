<template>
  <div id="app">
    Bonjour
    <ul>
        <li v-for="(match, index) in allMatchs" :key="index">
            {{ match.awayTeam.name }}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Test',
    data() {
        return {
            allMatchs: null,
        }
    },

    mounted() {
        axios.get('https://api.football-data.org/v2/competitions/CL/matches', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.matches)
        .then((response) => {
            this.allMatchs = response;
            console.log(this.allMatchs)
        });
        // .then(response => console.log(response));
    }
}

</script>

<style>

</style>