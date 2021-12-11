<template>
    <div>
        <b-card style="max-width: 400px; height:365px;">
            <b-card-body class="text-center">
                <b-card-img :src="team.crestUrl" style="max-width: 80px;" alt="logo"></b-card-img>
            </b-card-body>
            <b-card-body>
                <b-card-text class="name"> {{ team.name }} </b-card-text>
                <b-card-text class="stade text-center"> {{ team.venue }} </b-card-text>
                <b-card-text class="founded text-center"> Founded in {{ team.founded }} </b-card-text>
            </b-card-body>
        </b-card>
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

.name {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
}

.stade {
    margin-top: 25px;
}

.founded {
    font-style: italic;
}

</style>