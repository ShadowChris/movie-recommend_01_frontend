<template>
  <div id="MovieView">

    <el-container style="padding-top: 100px; width: 1500px; background-color: #e8e8e8">
      <el-header>
        <el-row>
<!--          <el-col :span="25"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>-->
<!--          <el-col :span="1"><el-button icon="el-icon-search" circle @click="showData"></el-button></el-col>-->
        </el-row>
      </el-header>

      <el-main>
        <h1> 基于内容推荐结果</h1>
        <el-row>
          <el-col :span="8" v-for="(item) in this.movieList" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image">
              <div style="padding: 8px; text-align: center">
                <span style="font-size: 10px; font-weight: bold">{{item.name}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <router-link :to="'/MovieDetails/' + item.id">详细信息</router-link>
                </div>
                <div class="block">
                  <el-rate
                      v-model="item.rating"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                  </el-rate>
                </div>
              </div>
            </el-card>

          </el-col>
        </el-row>
        <h1> 协同过滤的推荐结果</h1>
        <el-row>
          <el-col :span="8" v-for="(item) in this.movieList2" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image">
              <div style="padding: 8px; text-align: center">
                <span style="font-size: 10px; font-weight: bold">{{item.name}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <router-link :to="'/MovieDetails/' + item.id">详细信息</router-link>
                </div>
                <div class="block">
                  <el-rate
                      v-model="item.rating"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                  </el-rate>
                </div>
              </div>
            </el-card>

          </el-col>
        </el-row>

      </el-main>
      <el-footer>
        <el-row>
          <el-button @click="$router.push('/Table')" >算法性能演示</el-button>
        </el-row>
      </el-footer>


    </el-container>

  </div>
</template>

<script>
import axios from "axios";
import global_variable from "@/utils/global_variable";

export default {
  name: "MovieView",

  data() {
    return {
      // input: "",
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' },
      movieList: [],
      movieList2: [],
      currentPage: 1,
      pageSize: 5,
      currentPage2: 1,
      pageSize2: 5,
      userId:10,
      k:5
    }
  },

  methods: {
    showData() {
      console.log(this.input)
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // }
  },
  mounted() {
    axios.post(global_variable.springURL +'/recommend/get-content-based-rec', {
      k:this.k,
      userId:this.userId,
      pageNum: this.currentPage,
      pageSize: this.pageSize
    }).then(res => {
      this.movieList = res.data.data.list
      this.currentPage = res.data.data.pageNum
      this.pageSize = res.data.data.pageSize
      console.log(res)
    })
    axios.post(global_variable.springURL +'/recommend/get-collaborative-filtering-rec', {
      k:this.k,
      userId:this.userId,
      pageNum: this.currentPage2,
      pageSize: this.pageSize2
    }).then(res => {

      this.movieList2 = res.data.data.list
      this.currentPage2 = res.data.data.pageNum
      this.pageSize2 = res.data.data.pageSize
      console.log(res)
    })
  }
}

</script>

<style>

span{
  text-align: center;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
