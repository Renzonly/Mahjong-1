<template>
  <div class="col">
    Wind=
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <v-card tile :color="color[parseInt(seat_number/4)]" height="50" width="50">
            <v-badge avatar bordered>
              <template v-slot:badge>
                <v-avatar>{{ parseInt(seat_number/4) }}</v-avatar>
              </template>
              {{ winds[parseInt(seat_number/4)] }}
              <v-img aspect-ratio="50" contain height="50" width="50" :src="pic[seat_number%4]"></v-img>
            </v-badge>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TableWind",
  props: {
    seat_number: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    winds: ["East", "South", "West", "North"],
    pic: [
      require("../assets/East.jpg"),
      require("../assets/South.jpg"),
      require("../assets/West.jpg"),
      require("../assets/North.jpg")
    ],
    color: ["red", "green", "blue", "orange"]
  })
};
</script>
<style scoped>
.col {
  border-style: border-solid;
}
</style>