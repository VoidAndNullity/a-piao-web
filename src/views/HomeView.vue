<template>
  <div>
    <!-- 背景 -->
    <vue-canvas-nest
      style="background-color: #e6eef4"
      :config="backgroundConfig"
    ></vue-canvas-nest>
    <!-- 头部 -->
    <my-header></my-header>
    <!-- 搜索logo -->
    <div class="searchImg">
      <img :src="searchImg" alt="" height="100%" />
    </div>

    <div class="searchBox">
      <!-- 搜索框 -->
      <input
        ref="searchInput"
        type="text"
        class="searchText"
        v-model="searchContent"
        @keyup.enter="search"
      />

      <!-- 搜索图标 -->
      <mu-button flat class="searchButton" color="blue" @click="search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </mu-button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import vueCanvasNest from "vue-canvas-nest";
import myHeader from "./header.vue";

export default {
  data() {
    return {
      searchContent: "",
      searchImg: "",
      // 背景参数
      backgroundConfig: {
        // 线条颜色
        color: "0,0,0",
        // 线条透明度
        opacity: 0.7,
        // 背景优先级
        zIndex: -1,
        // 行数
        count: 99,
      },
    };
  },
  components: { vueCanvasNest, myHeader },
  mounted() {
    this.getList();
    // 自动聚焦
    this.$refs.searchInput.focus();
  },
  methods: {
    search: function (url) {
      // this.$progress.start();
      // "https://kaifa.baidu.com/searchPage?wd=" + this.searchContent;
      window.open("https://kaifa.baidu.com/searchPage?wd=" + this.searchContent);
      // this.$progress.done();
    },
    getList: function () {
      this.$progress.start();
      this.axios.get("../../json/list.json").then((data) => {
        console.info(data);
        this.$progress.done();
      });
      // this.axios({
      //   method: "get",
      //   url: "/src/json/list.json",
      //   data: {
      //     name: this.form.name,
      //     password: this.form.password,
      //   },
      // }).then(function (resp) {
      //   console.log(resp);
      // });
    },
  },
};
</script>

<style scoped lang="less">
// 去掉input框默认样式
input {
  background: none;
  outline: none;
  border: 0px;
}
input:focus {
  border: none;
}

// 搜索框上面的图
.searchImg {
  height: 60%;
  min-height: 185px;
  max-height: 310px;
  position: relative;
  z-index: 0;
  text-align: center;
}

// 搜索框
.searchBox {
  margin: 0 auto;
  height: 44px;
  max-width: 584px;
  border-radius: 50px;
  background: #e6eef4;
  box-shadow: 6px 6px 12px #cad1d7, -6px -6px 12px #ffffff;
  .searchText {
    width: 80%;
    height: 100%;
    color: #676767;
    vertical-align: top;
    padding-left: 10px;
  }
  .searchButton {
    width: 20%;
    height: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: -20px -20px 60px #ffffff;
    .icon {
      font-size: 22px;
      transition: 0.2s;
    }
  }
  .searchButton:hover {
    .icon {
      font-size: 28px;
    }
  }
}


</style>
