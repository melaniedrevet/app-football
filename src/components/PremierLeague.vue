<template>
    <div id="app" class="container">
        <div v-if="loading">
            <p class="loading">Loading data...</p>
        </div>
        <div class="championnat row" v-else>
            <div class="drapeau col-12 col-md-6 col-lg-2">
                <img src="../assets/premierleague.png" alt="championnat">
            </div>
            <div class="nom col-12 col-md-6 col-lg-7">
                <h3> {{ championnat.name }} </h3>
                <h4> {{ championnat.area.name }} </h4>
            </div>
            <div class="saison col-12 col-lg-3">
                <p> Start of season : {{ championnat.currentSeason.startDate }} </p>
                <p> End of season : {{ championnat.currentSeason.endDate }}</p>
            </div>
        </div>
        <div class="menu">
            <div class="accordion-body">
                <div class="accordion">
                    <div class="container2">
                        <div class="label">Upcoming matches</div>
                        <div class="content row">
                            <Matchs class="col-12 col-md-6 col-lg-3 mb-3" v-for="(matchs, i) in matchsPL" :key="'S' + i" :match="matchs"/>
                        </div>
                    </div>
                    <hr>
                    <div class="container2">
                        <div class="label">Results</div>
                        <div class="content row">
                            <Resultats class="col-12 col-md-6 col-lg-3 mb-3" v-for="(matchs, i) in matchsPL" :key="'R' + i" :match="matchs"/>
                        </div>
                    </div>
                    <hr>
                    <div class="container2">
                        <div class="label">Standing</div>
                        <div class="content">
                            <table class="classement">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Team</th>
                                        <th>Played</th>
                                        <th>Won</th>
                                        <th>Draw</th>
                                        <th>Lost</th>
                                        <th>Goals For</th>
                                        <th>Goals Against</th>
                                        <th>Goal Diff.</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Classement v-for="(standing, i) in standingPL" :key="'C' + i" :place="standing"/> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr>
                    <div class="container2">
                        <div class="label">Teams</div>
                        <div class="content row">
                            <Equipes class="col-12 col-md-3 p-2" v-for="(teams, i) in teamsPL" :key="'E' + i" :team="teams"/>
                        </div>
                    </div>
                    <hr>
                    <div class="container2">
                        <div class="label">Scorers</div>
                        <div class="content row">
                                <Buteurs class="col-12 col-lg-6 p-2" v-for="(scorers, i) in scorersPL" :key="'G' + i" :scorer="scorers"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Matchs from './Parts/Matchs.vue'
import Resultats from './Parts/Resultats.vue'
import Classement from './Parts/Classement.vue'
import Equipes from './Parts/Equipes.vue'
import Buteurs from './Parts/Buteurs.vue'

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
            teamsPL: null,
            scorersPL: null,
            standingPL: null,
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
        .catch(error => console.log(error))
        .finally(() => this.loading = false);

        // Classement
        axios.get('https://api.football-data.org/v2/competitions/PL/standings', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.standings[0].table)
        .then((response) => {
            this.standingPL = response;
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false);

        // Equipes
        axios.get('https://api.football-data.org/v2/competitions/PL/teams', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.teams)
        .then((response) => {
            this.teamsPL = response;
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false);

        // Buteurs
        axios.get('https://api.football-data.org/v2/competitions/PL/scorers', {headers: { "X-Auth-Token": "d6bb4175db1246bf90df60886d70fedb"}})
        .then(response => response.data.scorers)
        .then((response) => {
            this.scorersPL = response;
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false);  

    }
}
</script>


<style scoped>

.loading {
    font-size: 25px;
    text-align: center;
    margin: 50px 0;
}

/* Partie Championnat */

.championnat {
    margin: 5rem 5rem 3rem 5rem;
}

.drapeau, .nom {
    text-align: center;
}

.drapeau img {
    width: 90px;
}

.nom {
    margin-top: 20px;
}

.saison {
    font-size: 18px;
}

.saison {
    text-align: center;
    margin-top: 40px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-top: 18px;
}


/* Responsive */

/* Tablette */
@media screen and (min-width: 768px) {
    .nom {
        text-align: left;
        margin-top: 20px;
    }

    .drapeau img {
        margin-left: 30px;
    }
}

/* Ordinateur */
@media screen and (min-width: 1024px) {

    .saison {
        margin-top: 20px;
        border: none;
        padding: 0;
    }
}

/* Classement */

.classement {
    width: 100%;
    text-align: center;
}

.classement th {
    border: 1px solid black;
    padding: 15px;
    font-size: 18px;
    font-weight: 700;
}

/* Accordéon */

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
  padding: 40px 0;
  font-size: 22px;
  color: black;
  cursor: pointer;
  text-decoration: underline;

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