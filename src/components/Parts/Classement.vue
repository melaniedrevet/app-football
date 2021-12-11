<template>
    <tr>
        <td> {{ place.position }} </td>
        <td class="team">  
            <img :src="place.team.crestUrl" style="max-width: 20px; margin-right: 10px" alt="logo">
            {{ place.team.name }} 
        </td>
        <td> {{ place.playedGames }} </td>
        <td> {{ place.won }} </td>
        <td> {{ place.draw }} </td>
        <td> {{ place.lost }} </td>
        <td> {{ place.goalsFor }} </td>
        <td> {{ place.goalsAgainst }} </td>
        <td> {{ place.goalDifference }} </td>
        <td> {{ place.points }} </td>
    </tr>
</template>

<script>
export default {
    name: 'Classement',
    props: {
        place: Object,
    }
}
</script>

<style scoped>

td {
    border: 1px solid black;
    padding: 15px;
}

.team {
    text-align: left;
    padding-left: 20px;
}

</style>