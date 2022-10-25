<template>
  <div id="Test2`">
    <h1>This is Test 2</h1>
    <h2 v-for="(item) in this.movieList" :key="item.id" >
      <img :src="item.url">
      {{item.name}}
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Test2",
  data() {
    return {
      movieList: []
    }
  },
  methods: {

  },
  mounted() {
    axios.post("http://192.168.1.109:8080/test/querySample", {

    }).then(res => {
      this.movieList = res.data.data
      console.log(this.movieList)
    })
  }
}
</script>

<style scoped>

</style>