<template>
  <div id="MovieAdd">

    <el-main style="padding: 0">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="background: #669999">
        <el-breadcrumb-item style="padding: 10px 0 2px 10px; font-size: 1.5em;">电影信息</el-breadcrumb-item>
        <el-breadcrumb-item  style="padding: 15px 0 2px 0; font-size: 1.1em">录入信息</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="detail-title">
        电影信息录入
      </div>

<!--      <div class="profile-container">-->
<!--        <el-upload-->
<!--            class="avatar-uploader"-->
<!--            action="https://jsonplaceholder.typicode.com/posts/"-->
<!--            :show-file-list="false"-->
<!--            :on-success="handleAvatarSuccess"-->
<!--            :before-upload="beforeAvatarUpload">-->
<!--          <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--          <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--        </el-upload>-->
<!--      </div>-->
      <div class="container">
        <el-form ref="form" label-width="80px">
<!--          <el-form-item label="姓名" >-->
<!--            <el-input v-model="username"></el-input>-->
<!--          </el-form-item>-->
<!--          <br>-->
<!--          <el-aside>-->
<!--            <el-upload-->
<!--                class="avatar-uploader"-->
<!--                action="https://jsonplaceholder.typicode.com/posts/"-->
<!--                :show-file-list="false"-->
<!--                :on-success="handleAvatarSuccess"-->
<!--                :before-upload="beforeAvatarUpload">-->
<!--              <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--              <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--            </el-upload>-->

<!--          </el-aside>-->
          <el-row :gutter="200">
            <el-col :span="12">
<!--              <el-form-item label="ID">-->
<!--                <el-input v-model="ID" disabled></el-input>-->
<!--              </el-form-item>-->
              <el-form-item label="名称" >
                <el-input v-model="name"></el-input>
              </el-form-item>

              <el-form-item label="发表时间">
                <el-input v-model="date"></el-input>
              </el-form-item>
              <el-form-item label="导演">
                <el-input v-model="directors"></el-input>
              </el-form-item>

            </el-col>

            <el-col :span="12">

              <el-form-item label="编剧">
                <el-input v-model="writers"></el-input>
              </el-form-item>

              <el-form-item label="主演">
                <el-input v-model="stars"></el-input>
              </el-form-item>


            </el-col>
          </el-row>

          <br>
          <br>
          <el-col align="center">
            <el-form-item>
              <el-button type="primary" @click="open">录入</el-button>
            </el-form-item>
          </el-col>


        </el-form>
      </div>
    </el-main>

  </div>
</template>

<script>
export default {
  name: "OldManAdd",
  data() {
    return {
      type: 1,
      // ID: "",
      name: "",
      date: "",
      phone: "",
      directors: "",
      writers: "",
      stars: "",
      imageUrl: ''
    };
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    open() {
      this.$message('录入成功');
    },

    updateBlog() {
      this.$http
          .post(this.global.baseURL + this.global.oldManURL.add, {
            name: this.name,
            date: this.date,
            phone: this.phone,
            directors: this.directors,
            writers: this.writers,
            stars: this.stars
          })
          .then(result => {
            // eslint-disable-next-line no-redeclare
            // var result = result.body;
            console.log("Add movie: ")
            console.log(result)
            if (result.status === 200) {
              this.$message.success("添加成功！");
              this.$router.push({
                path: `/Camera/${result.data.message}/${this.type}`
              });
              // this.$router.push("/OldManInfo")
            } else {
              // 失败了
              this.$message.error("添加失败！");
            }
          });
    }
  }
}
</script>

<style scoped>
.el-main {
  width: 1500px;
  height: 700px;
  background-color: #E9EEF3;
  color: #333;
  /*text-align: center;*/
  line-height: 30px;
  margin-top: 50px;
  overflow-x:hidden;
  overflow-y:hidden;
}

.container {
  display: block;
  width: 800px;
  height: 700px;
  padding-top: 100px;
  margin: 0 auto;

}

.avatar-uploader {
  width: 178px;
  height: 178px;
  display: block;
  margin: 0 auto;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: grey;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 3px solid grey;
  border-radius: 20px;

}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-form{

}
.el-button{
  width: 100px;
  position: relative;
  right: 30px;
}

.detail-title{
  display: block;
  position: relative;
  width: 300px;
  padding-top: 70px;
  padding-bottom: 50px;
  left: 40px;
  margin: 0 auto;
  /*vertical-align: center;*/
  font-size: 40px;
  font-weight: bold;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
