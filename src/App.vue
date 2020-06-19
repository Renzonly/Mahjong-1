<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
        Turn: {{turn}}
          <v-col cols="12">
            <v-row class="container">
              <div class="leeg1"></div>
              <Player class="player" :seat_number="turn + 2" />

              <div class="leeg1"></div>
              <Player class="player2" :seat_number="turn + 3" />

              <TableWind class="tablewind" :seat_number="turn" />

              <Player class="player2" :seat_number="turn + 1" />
              <div class="leeg1"></div>
              <Player class="player3" :seat_number="turn + 4" />
              <div class="leeg1"></div>
            </v-row>
          </v-col>
        </v-row>
        
      </v-container>
     
      <v-row class="btn">
        <v-col cols="1">
          <v-btn class="but" @click="turn++">Prev</v-btn>
        </v-col>
        <v-col cols="1">
          Winner
          {{turn}}
        </v-col>
        <v-col cols="1">
          <v-btn class="but" @click="turn=((turn-1)%16+16)%16">Next</v-btn>
        </v-col>
      </v-row>
      <v-row class="btn">
        <v-col cols="1">
          <v-btn class="but" @click="turn=((turn+4)%16+16)%16">Prev</v-btn>
        </v-col>
        <v-col cols="1">
          Table
          {{parseInt(turn/4)}}
        </v-col>
        <v-col cols="1">
          <v-btn class="but" @click="turn=((turn-4)%16+16)%16">Next</v-btn>
          
        </v-col>   
         
      </v-row>
          
    </v-content>
   
  </v-app>
</template>
<script>
import Player from "./components/Player";
import TableWind from "./components/TableWind";
export default {
  name: "App",
  components: {
    Player,
    TableWind
  },
  data: () => ({
    turn: 0
  })
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 80px 80px 80px; /*Make the grid smaller than the container*/
  grid-gap: 5px;
  justify-content: center;
  background-color: #2196f3;
  padding: 10px;
  height: auto;
  width: auto;
}
.player {
  width: 100px;
  border: 5px solid#333;
  background-color: rgb(40, 10, 88);
  border: 3px solid rgb(255, 217, 0);
  margin-left: 50px;
}
.player1 {
  width: 100px;
  border: 3px solid rgb(255, 217, 0);
  background-color: rgb(240, 12, 183);
  align-content: center;
  margin-left: 50px;
}
.leeg {
  border: 3px solid rgb(255, 217, 0);
  background-color: rgb(240, 12, 183);
  align-content: center;
}

.leeg {
  width: 100px;
  border: 3px solid rgb(255, 217, 0);
  background-color: rgb(240, 12, 183);
  align-content: center;
  height: 100;
  width: 100;
}

.leeg2 {
  width: 100px;
  border: 3px solid rgb(255, 217, 0);
  background-color: rgb(240, 12, 183);
  align-content: center;
  height: 100;
  width: 100;
}

.leeg3 {
  width: 100px;
  border: 3px solid rgb(255, 217, 0);
  background-color: rgb(240, 12, 183);
  align-content: center;
  height: 100;
  width: 100;
}

.leeg4 {
  width: 100px;
  border: 3px solid rgb(255, 217, 0);
  background-color: rgb(240, 12, 183);
  align-content: center;
  height: 100;
  width: 100;
}

.player2 {
  width: 100px;
  border: 3px solid#333;
  background-color: rgb(78, 73, 70);
  border: rgb(206, 41, 41) solid;
  border: 3px solid rgb(255, 217, 0);
  margin-left: 50px;
}

.player3 {
  width: 100px;
  border: 3px solid#333;
  background-color: rgb(185, 81, 12);
  border: rgb(206, 41, 41) solid;
  border: 3px solid rgb(255, 217, 0);
  margin-left: 50px;
}

.tablewind {
  width: 100px;
  border: 3px solid#333;
  background-color: rgb(255, 0, 0);
  border: rgb(206, 41, 41) solid;
  border: 3px solid rgb(255, 217, 0);
  margin-left: 50px;
}

.btn {
  justify-content: center;
}

.btn-wind {
  justify-content: center;
  color: rgb(255, 0, 0);
  border: 3px solid#333;
}

.but {
  background-color: rgb(255, 238, 0);
  border: 3px solid#333;
}
</style>
