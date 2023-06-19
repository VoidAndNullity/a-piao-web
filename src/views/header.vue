<template>
  <div>
    <!-- 头部 -->
    <mu-appbar style="width: 100%" color="#34495e">
      <mu-button icon slot="left" @click="asideIsOpen">
        <img src="@/assets/img/apiao.png" width="190%" alt="" />
      </mu-button>
      <span style="font-size: 18px; margin-left: 0%">阿飘</span>
      <!-- <mu-menu slot="right">
        <mu-button flat>待添加</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu> -->
    </mu-appbar>
    <!-- 侧边 -->
    <el-drawer
      class="aside"
      :visible.sync="open"
      size="50%"
      direction="ltr"
      :with-header="false"
    >
      <el-skeleton :loading="loading" animated :count="1" :throttle="50">
        <template slot="template">
          <el-row :gutter="12">
            <el-divider content-position="left">加载中...</el-divider>
            <div
              class="el-col el-col-8"
              style="
                padding-left: 6px;
                padding-right: 6px;
                min-width: 240px;
                max-height: 79px;
              "
              v-for="i in 9"
              :key="i"
            >
              <div class="mu-card-header">
                <div
                  class="mu-avatar"
                  style="
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                    background: rgb(255, 255, 255);
                  "
                >
                  <div class="el-avatar el-avatar--circle">
                    <el-skeleton-item
                      variant="img"
                      style="width: 40px; height: 40px"
                    />
                  </div>
                </div>
                <div class="mu-card-header-title">
                  <div class="mu-card-title">
                    <el-skeleton-item
                      variant="text"
                      style="width: 60px; height: 14px"
                    />
                  </div>
                  <div class="mu-card-sub-title">
                    <el-skeleton-item
                      variant="text"
                      style="width: 146px; height: 13px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </el-row>
        </template>
        <template>
          <el-row :gutter="12" v-for="(data, i) in responseData" :key="i">
            <el-divider content-position="left">{{ data.title }}</el-divider>
            <el-col
              v-for="change in data.data"
              :key="change.url"
              style="min-width: 240px; max-height: 79px"
              :span="8"
            >
              <el-tooltip :disabled="!open" placement="bottom">
                <template slot="content">
                  <p style="max-width: 200px" v-text="change.desc"></p>
                </template>
                <mu-card-header
                  :title="change.title"
                  :sub-title="change.desc"
                  @click="winOpen(change.url)"
                >
                  <el-avatar
                  style="background: #ffffff; margin-right: 12px;"
                    :src="change.favicon_url"
                    @error="errorHandler"
                    slot="avatar"
                  >
                    <img
                      src="@/assets/img/jiazaishibai.png"
                    />
                  </el-avatar>
                </mu-card-header>
              </el-tooltip>
            </el-col>
          </el-row>
        </template>
      </el-skeleton>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docked: false,
      open: false,
      position: "left",
      // 骨架
      loading: true,
      responseData: [],
    };
  },
  components: {},
  mounted() {},
  methods: {
    asideIsOpen: function () {
      this.loading = true;
      this.open = !this.open;
      this.$requests.get("/get_menus").then((data) => {
        let vo = data;
        if (vo.success) {
          this.responseData = vo.data;
          this.loading = false;
        }
        console.info(this.responseData);
      });
      // this.$store.commit("asideIsOpen");
    },
    winOpen: function (url) {
      window.open(url);
    },
    errorHandler() {
      return true;
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .el-drawer__body {
  padding: 12px;
  overflow-x: hidden;
  overflow-y: auto;
}

.aside {
  .el-row {
    .el-col {
      margin-top: 12px;
      .mu-card-header {
        width: 100%;
        border-radius: 4px;
        // box-shadow:  5px 5px 8px #d9d9d9, -20px -20px 60px #ffffff;
        border: 1px solid #ebeef5;
        // background: #ffffff;
        // box-shadow: inset 1px 2px 5px #D9D9E8, inset 0px 0px 0px #ffffff;
        transition: 0.5s;
        .mu-avatar {
          border-radius: 5px;
        }

        .mu-card-header-title {
          width: 100%;
          padding-right: 57px;

          div {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .mu-card-header:hover {
        background: linear-gradient(145deg, #ffffff, #f4f4f4);
        box-shadow: 5px 5px 8px #d9d9d9, -20px -20px 60px #ffffff;
      }
      .mu-card-header:active {
        background: linear-gradient(145deg, #f4f4f4, #ffffff);
      }
    }
  }
}
</style>
