<template>
    <div id="app" class="container">
        <div v-if="loading">
            <p class="loading">Loading data</p>
        </div>
        <div class="championnat row" v-else>
            <div class="drapeau col-2">
                <img src="../../assets/angleterre.png" alt="">
            </div>
            <div class="nom col-7">
                <h3> {{ championnat.name }} </h3>
                <h4> {{ championnat.area.name }} </h4>
            </div>
            <div class="saison col-3">
                <p> Start of season : {{ championnat.currentSeason.startDate }} </p>
                <p> End of season : {{ championnat.currentSeason.endDate }}</p>
            </div>
        </div>
        <div class="menu">
           <div class="accordion-body">
               <div class="accordion">
                   <div class="container2">
                       <div class="label">Results</div>
                       <div class="content row">
                           <Resultats class="col-3 mb-3" v-for="(matchs, i) in matchsPL" :key="'S' + i" :match="matchs"/>
                       </div>
                   </div>
                   <hr>
                   <div class="container2">
                       <div class="label">Upcoming matches</div>
                       <div class="content row">
                           <Matchs class="col-3 mb-3" v-for="(matchs, i) in matchsPL" :key="'S' + i" :match="matchs"/>
                       </div>
                   </div>
                   <hr>
                   <div class="container2">
                       <div class="label">Standing</div>
                       <div class="content">
                           <Classement />
                       </div>
                   </div>
                   <hr>
                   <div class="container2">
                       <div class="label">Teams</div>
                       <div class="content row">
                           <Equipes class="col-12 col-md-3 p-2" v-for="(englishTeam, i) in englishTeams" :key="'E' + i" :team="englishTeam"/>
                       </div>
                   </div>
                   <hr>
                   <div class="container2">
                       <div class="label">Scorers</div>
                       <div class="content row">
                            <Buteurs class="col-12 col-md-6 p-2" v-for="(scorers, i) in englishScorers" :key="'S' + i" :scorer="scorers"/>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Matchs from './Matchs.vue'
import Resultats from './Resultats.vue'
import Classement from './Classement.vue'
import Equipes from './Equipes.vue'
import Buteurs from './Buteurs.vue'

export default {
    name: 'PremierLeague',
    components: {
        Matchs,
        Resultats,
        Classement,
        Equipes,
        Buteurs
    },

    data() {
        return {
            loading: true,

            championnat : null,
            matchsPL : null,
            englishTeams: null,
            englishScorers: null,
            englishStanding: null,
        }
    },

    mounted() {

        // Accordeon
        const accordion = document.getElementsByClassName('container2');

        for (let i=0; i<accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                this.classList.toggle('active')
            })
        }

        // Championnat
        axios.get('https://api.football-data.org/v2/competitions/PL', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data)
        .then((response) => {
            this.championnat = response;
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false);

        // Matchs 
        axios.get('https://api.football-data.org/v2/competitions/PL/matches', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.matches)
        .then((response) => {
            this.matchsPL = response;
        })
        .catch(error => console.log(error));

        // Classement
        axios.get('https://api.football-data.org/v2/competitions/2021/standings', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.standings[0].table)
        .then((response) => {
            this.englishStanding = response;
        })
        .catch(error => console.log(error));

        // Equipes
        axios.get('https://api.football-data.org/v2/competitions/2021/teams', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.teams)
        .then((response) => {
            this.englishTeams = response;
        })
        .catch(error => console.log(error));

        // Buteurs
        axios.get('https://api.football-data.org/v2/competitions/PL/scorers', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.scorers)
        .then((response) => {
            this.englishScorers = response;
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false);

    
    }
}
</script>


<style scoped>

.loading {
    font-size: 20px;
    text-align: center;
}

.championnat {
    margin: 5rem 5rem 3rem 5rem;
}
.drapeau img {
    /* float: left; */
    width: 120px;
    margin-left: 30px;
}

.saison {
    font-size: 18px;
}

.menu {
    font-size: 18px;
    border-top: 2px solid black;
}

.accordion {
  width: 100%;
  margin: auto;
  color: black;
  background-color: white;
}

.accordion .container2 {
  position: relative;
  margin: 10px 10px;
}

.accordion .label {
  position: relative;
  padding: 45px 0;
  font-size: 23px;
  color: black;
  cursor: pointer;

}

.accordion .label::before {
  content: '+';
  color: black;
  position: absolute;
  top: 50%;
  right: -5px;
  font-size: 25px;
  transform: translateY(-50%);
}

.accordion .content {
  position: relative;
  background: white;
  height: 0;
  font-size: 18px;
  text-align: justify;
  width: 100%;
  overflow: hidden;
  transition: 0.5s;
}

.accordion hr {
  width: 100;
  margin-left: 0;
  border: 1px solid grey;
}

.accordion .container2.active .content {
  height: auto;
}

.accordion .container2.active .label::before {
  content: '-';
  font-size: 25px;
}


</style>