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
    <div class="searchImg"></div>

    <!-- 解决回车键被浏览器拦截打开新窗口的行为 -->
    <form :action="url" ref="form" method="get" target="_blank">
      <div class="searchBox">
        <!-- 搜索框 -->
        <input
          ref="searchInput"
          type="text"
          :placeholder="normal.message + '...'"
          :class="{
            searchText: true,
            searchTextBackground: isSearchTextBackground,
          }"
          v-model="searchContent"
          @focus="isSearchTextBackground = true"
          @blur="isSearchTextBackground = false"
        />

        <!-- 搜索图标 -->
        <mu-button
          ref="searchButton"
          flat
          class="searchButton"
          color="blue"
          @click="search()"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </mu-button>
      </div>

      <input
        type="text"
        :name="searchMode"
        :value="searchContent"
        style="display: none"
      />
      <button type="submit" style="display: none"></button>
    </form>

    <!-- 切换搜索引擎 -->
    <div class="searchEngine">
      <svg
        :class="{
          icon: true,
          searchEngineIconOpen: !show3,
          searchEngineIconClose: show3,
        }"
        aria-hidden="true"
        @click="show3 = !show3"
      >
        <use xlink:href="#icon-zhiwen"></use>
      </svg>

      <div style="height: 200px">
        <el-collapse-transition>
          <div v-show="show3">
            <!-- 谷歌 -->
            <div class="transition-box">
              <el-tooltip
                v-for="url in urls.urls"
                :key="url.urlName"
                :content="url.urlName"
                placement="bottom"
                effect="light"
              >
                <svg
                  class="icon"
                  aria-hidden="true"
                  @click="searchUrl(url.urlName, url.url, url.searchMode)"
                >
                  <use :xlink:href="'#icon-' + url.icon"></use>
                </svg>
              </el-tooltip>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>

    <!-- 提示框 -->
    <mu-snackbar :position="normal.position" :open.sync="normal.open">
      {{ "已切换至" + normal.message }}
      <mu-button
        flat
        slot="action"
        color="secondary"
        @click="normal.open = false"
        >关闭</mu-button
      >
    </mu-snackbar>
  </div>
</template>

<script>
// @ is an alias to /src
import vueCanvasNest from "vue-canvas-nest";
import myHeader from "./header.vue";

export default {
  data() {
    return {
      urls: {},
      // 搜索内容
      searchContent: "",
      show3: false,
      isSearchTextBackground: false,
      url: "https://www.baidu.com/baidu",
      // 搜索方式
      searchMode: "wd",
      // 背景参数
      backgroundConfig: {
        // 线条颜色
        color: "0,0,0",
        // 线条透明度
        opacity: 0.7,
        // 背景优先级
        zIndex: -1,
        // 行数
        count: 66,
      },
      normal: {
        position: "bottom-start",
        message: "百度搜索",
        open: false,
        timeout: 3000,
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
    search: function () {
      window.open(this.url + "?" + this.searchMode + "=" + this.searchContent);
    },
    openurl: function (url) {
      alert(1);
      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("style", "display:none");
      a.setAttribute("target", "_blank");
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
    },
    getList: function () {
      this.$progress.start();
      this.axios.get("../../json/list.json").then((data) => {
        let vo = data.data;
        if (vo.code === 200) {
          this.urls = vo.data;
        }
        console.info(this.urls);
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
    // 切换搜索引擎
    searchUrl: function (urlName, url, searchMode) {
      this.url = url;
      this.searchMode = searchMode;
      this.normal.message = urlName;
      this.openNormalSnackbar();
    },
    // 提示框
    openNormalSnackbar() {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
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
  background-color: #e6eef4;
  box-shadow: 6px 6px 12px #cad1d7, -6px -6px 12px #ffffff;
  .searchText {
    width: 80%;
    height: 100%;
    color: #676767;
    vertical-align: top;
    padding-left: 10px;
  }
  .searchTextBackground {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: rgb(241, 241, 241);
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

// 切换搜素引擎css
.searchEngine {
  margin-top: 10px;
  text-align: center;
  .transition-box {
    height: 100px;
    background-color: #fff;
    box-shadow: inset 0px 2px 7px #d9d9d9, inset 0px 0px 25px #ffffff;
    line-height: 100px;
    .icon {
      font-size: 32px;
      transition: 0.2s;
    }
    .icon:not(:first-child) {
      margin-left: 18px;
    }
    .icon:hover {
      color: #5cb8c6;
    }
    .icon:active {
      color: #4bdaf0;
    }
  }
  // 默认状态下的动画
  .searchEngineIconOpen {
    font-size: 32px;
    animation: change 3s infinite reverse;
  }
  .searchEngineIconOpen:hover {
    animation: changeTwo 3s infinite reverse;
  }

  @keyframes change {
    0% {
      color: #d9d9d9;
    }
    50% {
      color: #4bdaf0;
    }
    100% {
      color: #d9d9d9;
    }
  }
  @keyframes changeTwo {
    0% {
      color: #4bdaf0;
    }
    100% {
      color: #4bdaf0;
    }
  }
  // 打开状态下的动画
  .searchEngineIconClose {
    font-size: 32px;
    animation: changeClose 3s infinite reverse;
  }
  .searchEngineIconClose:hover {
    animation: changeCloseTwo 3s infinite reverse;
  }
  @keyframes changeClose {
    0% {
      color: #d9d9d9;
    }
    50% {
      color: #a91e1e;
    }
    100% {
      color: #d9d9d9;
    }
  }
  @keyframes changeCloseTwo {
    0% {
      color: #a91e1e;
    }
    100% {
      color: #a91e1e;
    }
  }
}
</style>
