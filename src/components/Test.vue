<template>
  <div id="app" class="container">
    <div class="angleterre">
        <h1>Matchs de Premier League - 1ère journée</h1>
        <div class="1">
            <h3>1ère journée</h3>
            <ul v-for="(matchs, i) in matchsPL" :key="'1' + i" >
                <li v-if="matchs.matchday === 1">
                    <p> {{ matchs.homeTeam.name }} {{ matchs.score.fullTime.homeTeam }} - {{ matchs.score.fullTime.awayTeam }} {{ matchs.awayTeam.name }}</p>
                </li>
            </ul>
        </div>
        <!-- <div class="2">
            <h3>2ème journée</h3>
            <ul v-for="(matchs, i) in matchsPL" :key="'2' + i" >
                <li v-if="matchs.matchday === 2">
                     <p> {{ matchs.homeTeam.name }} {{ matchs.score.fullTime.homeTeam }} - {{ matchs.score.fullTime.awayTeam }} {{ matchs.awayTeam.name }}</p>
                </li>
            </ul>
        </div>
        <div class="3">
            <h3>3ème journée</h3>
            <ul v-for="(matchs, i) in matchsPL" :key="'3' + i" >
                <li v-if="matchs.matchday === 3">
                     <p> {{ matchs.homeTeam.name }} {{ matchs.score.fullTime.homeTeam }} - {{ matchs.score.fullTime.awayTeam }} {{ matchs.awayTeam.name }}</p>
                </li>
            </ul>
        </div> -->
    </div> 

    <div class="clubs">
        <h1>Liste des Clubs Angleterre</h1>
        <div v-for="(englishTeam, i) in englishTeams" :key="i">
            <ul>
                <li> {{ englishTeam.name }} </li>
            </ul>
        </div>
    </div>

    <div class="buteurs">
        <h1>Classement des Meilleurs buteurs d'Angleterre</h1>
        <div v-for="(scorers, i) in englishScorers" :key="'S' + i">
            <ul>
                <li> {{ scorers.player.name }} : {{ scorers.numberOfGoals }} buts</li>
            </ul>
        </div>
    </div>

    <div class="classement">
        <h1> Classement Premier League</h1>
        <div v-for="(standing, i) in englishStanding" :key="'C' + i">
            <p> {{ standing.position }} : {{ standing.team.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Test',
    data() {
        return {
            matchsPL : null,
            matchsL1: null,
            matchsSA: null,
            matchsLiga: null,
            matchsBundesliga: null,
            englishTeams: null,
            englishScorers: null,
            englishStanding: null,
        }
    },

    props: {
    },

    computed: {

    },

    mounted() {

        // Matchs Premiere League 
        axios.get('https://api.football-data.org/v2/competitions/PL/matches', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.matches)
        .then((response) => {
            this.matchsPL = response;
        })
        .catch(error => console.log(error));

        // Matchs Ligue 1 (38 journées)
        // axios.get('https://api.football-data.org/v2/competitions/FL1/matches?matchday=1', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        // .then(response => response.data.matches)
        // .then((response) => {
        //     this.matchsL1 = response;
        // });

        // Matchs Serie A (38 journées)
        // axios.get('https://api.football-data.org/v2/competitions/SA/matches?matchday=1', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        // .then(response => response.data.matches)
        // .then((response) => {
        //     this.matchsSA = response;
        // });

        // Matchs Liga (38 journées)
        // axios.get('https://api.football-data.org/v2/competitions/PD/matches?matchday=1', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        // .then(response => response.data.matches)
        // .then((response) => {
        //     this.matchsLiga = response;
        // });

        // Matchs Bundesliga (34 journées)
        // axios.get('https://api.football-data.org/v2/competitions/BL1/matches?matchday=1', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        // .then(response => response.data.matches)
        // .then((response) => {
        //     this.matchsBundesliga = response;
        // });

        // Equipes Premiere ligue
        axios.get('https://api.football-data.org/v2/competitions/2021/teams', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.teams)
        .then((response) => {
            this.englishTeams = response;
        })
        .catch(error => console.log(error));

        // Meilleurs buteurs
        axios.get('https://api.football-data.org/v2/competitions/PL/scorers', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.scorers)
        .then((response) => {
            this.englishScorers = response;
        })
        .catch(error => console.log(error));

        // Classement
        axios.get('https://api.football-data.org/v2/competitions/2021/standings', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.standings[0].table)
        .then((response) => {
            this.englishStanding = response;
        })
    }
}

</script>

<style>

</style>