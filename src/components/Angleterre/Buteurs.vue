<template>
  <div>
    <b-card no-body style="max-width: 600px;">
      <b-row>
        <b-col md="4">
          <b-card-body class="trait">
            <b-card-text class="goals"> {{ scorer.numberOfGoals }} </b-card-text>  
            <b-card-text class="text-center">goals</b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <b-card-text class="name"> {{ scorer.player.name }} </b-card-text>
            <b-card-text class="nationality"> {{ scorer.player.nationality }} </b-card-text>
            <b-card-text class="team"> {{ scorer.team.name }} - {{ scorer.player.position }} </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
    name: 'Buteurs',
    props: {
        scorer: Object
    },
}
</script>

<style scoped>

.goals {
  text-align: center;
  margin-top: 10px;
  font-size: 38px;
  font-weight: 600;
}

.trait {
  border-right: 2px solid black;
  padding: 20px;
}

.name {
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 18px;
}

.nationality {
  margin-bottom: 5px;
  font-style: italic;
}


</style>