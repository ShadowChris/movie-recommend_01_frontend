<template>
<div id="Home">

  <el-container style="padding-top: 120px; width: 1500px; background-color: #e8e8e8">
    <el-aside>
      </el-aside>
    <el-header>
      <el-row>
        <el-col :span="25"><el-input v-model="input" placeholder="Please Input"></el-input></el-col>
        <el-col :span="1"><el-button icon="el-icon-search" circle @click="this.search"></el-button></el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-row>
        <el-col :span="8" v-for="(item) in this.movieList" :key="item.id">
          <el-card :body-style="{ padding: '0px' }">

            <el-popover
                placement="top-start"
                title="Title"
                width="200"
                trigger="hover"
                :content="item.name">
                <img :src="item.url" class="image" slot="reference" style="width: 180px; height: 280px">
            </el-popover>
            <div style="padding: 5px; text-align: center">
<!--              <span style="font-size: 10px; font-weight: bold">{{item.name}}</span>-->

              <div class="bottom clearfix" font-size="5px">
                <router-link :to="'/MovieDetails/' + item.id">Detail</router-link>
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
        <div class="block">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              @next-click="getPage"
              :current-page.sync="currentPage"
              :page-size=this.pageSize
              layout="prev, pager, next, jumper"
              :total="1000">
          </el-pagination>
        </div>
      </el-row>
    </el-footer>


  </el-container>

</div>
</template>

<script>
import axios from "axios";
import global_variable from "@/utils/global_variable";

export default {
  name: "Test",

  data() {
      return {
        input: "",
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' },
        movieList: [],
        currentPage: 1,
        pageSize: 10,
        visible: false
      }
  },

  methods: {
    showData() {
      console.log(this.input)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);

    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);

      this.search()
    },
    getPage() {
      axios.post(global_variable.springURL + '/home/queryMovieList', {
        pageNum: this.currentPage,
        pageSize: this.pageSize
      }).then(res => {
        this.movieList = res.data.data.list
        // this.currentPage = res.data.data.pageNum
        // this.pageSize = res.data.data.pageSize
        console.log(res)
      })
    },

    search(){
      axios.post(global_variable.springURL + '/home/queryMovieList', {
        name:this.input,
        pageNum: this.currentPage,
        pageSize: this.pageSize
      }).then(res => {
        this.movieList = res.data.data.list
        // this.currentPage = res.data.data.pageNum
        // this.pageSize = res.data.data.pageSize
        console.log(res)
      })
    },
  },

  mounted() {
   this.getPage()
  }
}

</script>

<style>

span{
  width: auto;
  text-align: center;
}

.time {
  font-size: 20px;
  color: #999;
}



.bottom {
  margin-top: 13px;
  line-height: 12px;
}


.image {
  width: 120%;
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
