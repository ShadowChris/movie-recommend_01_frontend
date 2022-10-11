<template>
<div id="Test">

  <el-container style="padding-top: 100px; width: 1000px; background-color: #e8e8e8">
    <el-header>
      <el-row>
        <el-col :span="25"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="1"><el-button icon="el-icon-search" circle @click="showData"></el-button></el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

  </el-container>

</div>
</template>

<script>
export default {
  name: "Test",

  data() {
    return {
      img_url: "",
      input: '',
      header: "我是标题"
    };
  },

  mounted() {
    this.getImg()
  },

  methods: {
    getImg() {
      this.img_url = "https://www.dmoe.cc/random.php"
      console.log("成功调用函数")
    },
    showData() {
      console.log(this.input)
    }
  }
}
</script>

<style scoped>

</style>
