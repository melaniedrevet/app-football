<template>
    <div>
        <b-card style="max-width: 400px;">
            <b-card-body class="club">
                <b-card-img :src="team.crestUrl" style="max-width: 60px; float:left"></b-card-img>
                <b-card-text class="name"> {{ team.name }} </b-card-text>
            </b-card-body>
            <b-card-body>
                <b-card-text> Stadium : {{ team.venue }} </b-card-text>
            </b-card-body>
        </b-card>
        <!-- <img :src="team.crestUrl"> -->
    </div>
</template>

<script>
export default {
    name: 'Equipes',
    props: {
        team: Object,
    },

    
}
</script>

<style scoped>

/* .club {
    border-bottom: 1px solid black;
    padding: 20px;
} */

.name {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid black;
    padding: 10px 0px 40px 0px;
}

</style>