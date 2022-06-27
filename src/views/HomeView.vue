<template>
  <div>
    <div style="height: 188px"></div>

    <!-- <mu-chip class="demo-chip" color="blue300">
      <mu-avatar text-color="blue300" color="indigo900" :size="32"
        >MB</mu-avatar
      >
      custom chip
    </mu-chip> -->

    <div
      :class="{
        searchBox: true,
        searchBoxOneCss: searchBoxOneCss,
        searchBoxTwoCss: searchBoxTwoCss,
      }"
    >
      <!-- 搜索框 -->
      <input
        type="text"
        class="searchText"
        v-model="searchContent"
        @blur="blurAndfocus"
        @focus="blurAndfocus"
        @keyup.enter="search"
      />

      <!-- 搜索图标 -->
      <mu-button flat class="searchButton" color="blue" @click="search">
        <svg class="icon" style="color: red" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </mu-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      searchBoxOneCss: true,
      searchBoxTwoCss: false,
      searchContent: "",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    blurAndfocus: function () {
      this.searchBoxOneCss = !this.searchBoxOneCss;
      this.searchBoxTwoCss = !this.searchBoxTwoCss;
    },
    search: function () {
      window.open(
        "https://kaifa.baidu.com/searchPage?wd=" + this.searchContent
      );
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

<style lang="less">
input {
  background: none;
  outline: none;
  border: 0px;
}
input:focus {
  border: none;
}
.searchText {
  width: 80%;
  height: 100%;
  color: #676767;
  margin-top: 0px;
  vertical-align: top;
  padding-left: 10px;
}
.searchBox {
  margin: 0 auto;
  height: 44px;
  max-width: 584px;
  .searchButton {
    width: 20%;
    height: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    .icon {
      font-size: 22px;
      transition: 0.5s;
    }
  }
}
.searchBoxOneCss {
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  .searchButton {
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    .icon {
      font-size: 22px;
    }
  }
}
.searchBoxTwoCss {
  border-radius: 50px;
  background: #ffffff;
  box-shadow: inset 20px 20px 60px #e0e0e0, inset -20px -20px 60px #ffffff;
  .searchButton {
    box-shadow: inset 20px 20px 60px #e0e0e0, inset -20px -20px 60px #ffffff;
    .icon {
      font-size: 28px;
    }
  }
}
.button-wrapper {
  text-align: center;
  .mu-button {
    margin: 8px;
    vertical-align: top;
  }
}
</style>
