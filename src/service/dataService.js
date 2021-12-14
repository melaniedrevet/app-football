import axios from 'axios';
import env from '../env';

export default {
    getCompetitions(competition) {
        return axios.get(`https://api.football-data.org/v2/competitions/${competition}`, {headers: { "X-Auth-Token": env.apikey }});
    },

    getMatches(competition) {
        return axios.get(`https://api.football-data.org/v2/competitions/${competition}/matches`, {headers: { "X-Auth-Token": env.apikey }});
    },

    getStanding(competition) {
        return axios.get(`https://api.football-data.org/v2/competitions/${competition}/standings`, {headers: { "X-Auth-Token": env.apikey }});
    },

    getTeams(competition) {
        return axios.get(`https://api.football-data.org/v2/competitions/${competition}/teams`, {headers: { "X-Auth-Token": env.apikey }});
    },

    getScorers(competition) {
        return axios.get(`https://api.football-data.org/v2/competitions/${competition}/scorers`, {headers: { "X-Auth-Token": env.apikey }});
        
    }
}