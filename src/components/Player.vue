<template>
  <div class="col">
    Wind=
    <v-row cols="12">
      <v-col>
        <v-row justify="center">
          <v-card tile :color="color[parseInt(seat_number %4)]" height="50" width="50">
            <v-badge avatar bordered>
              <template v-slot:badge>
                <v-avatar>{{ seat_number%4 }}</v-avatar>
              </template>
              {{winds[seat_number%4]}}
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
  name: "Player",
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
    color: ["red", "green", "blue", "orange"],
    pictures: [
      {
        src:
          "https://c8.alamy.com/comp/F61611/mahjong-tile-a-chinese-gambling-game-part-of-the-four-wind-honour-F61611.jpg"
      },
      {
        src: "https://mahjonggmentor.com/wp-content/uploads/2013/11/south.jpg"
      },
      {
        src:
          "https://c8.alamy.com/comp/F6160M/mahjong-tile-a-chinese-gambling-game-part-of-the-four-wind-honour-F6160M.jpg"
      },
      { src: "https://mahjonggmentor.com/wp-content/uploads/2013/11/north.jpg" }
    ]
  })
};
</script>
<style scoped>
</style>