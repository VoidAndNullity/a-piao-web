<template>
  <div>
    <!-- 头部 -->
    <mu-appbar style="width: 100%" color="#34495e">
      <mu-button icon slot="left" @click="asideIsOpen">
        <img src="../assets/img/apiao.png" width="190%" alt="" />
      </mu-button>
      <span style="font-size: 18px; margin-left: 0%">阿飘~111</span>
      <mu-menu slot="right">
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
      </mu-menu>
    </mu-appbar>
    <!-- 侧边 -->
    <mu-container>
      <mu-drawer
        class="aside"
        :open.sync="open"
        :docked="docked"
        :right="position === 'right'"
        width="50%"
      >
        <el-skeleton :loading="loading" animated :count="2" :throttle="50">
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
                    <div class="mu-avatar-inner">
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
            <el-row
              :gutter="12"
              v-for="(data, i) in responseData.resources"
              :key="i"
            >
              <el-divider content-position="left">{{ data.title }}</el-divider>
              <el-col
                style="min-width: 240px; max-height: 79px"
                :span="8"
                v-for="(change, j) in data.resource"
                :key="j"
              >
                <mu-card-header
                  :title="change.title"
                  :sub-title="change.depict"
                  @click="winOpen(change.url)"
                >
                  <mu-avatar style="background: #ffffff" slot="avatar">
                    <img :src="change.img" />
                  </mu-avatar>
                </mu-card-header>
              </el-col>
            </el-row>
          </template>
        </el-skeleton>
      </mu-drawer>
    </mu-container>
  </div>
</template>

<script>
import asidejson from '@/data/aside.json'

export default {
  data() {
    return {
      docked: false,
      open: false,
      position: "left",
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
      // this.axios.get(asidejson).then((data) => {
        let vo = asidejson;
        if (vo.code === 200) {
          this.responseData = vo.data;
          this.loading = false;
        }
        console.info(this.responseData);
      // });
      // this.$store.commit("asideIsOpen");
    },
    winOpen: function (url) {
      window.open(url);
    },
  },
};
</script>

<style scoped lang="less">
.aside {
  padding: 12px;
  .el-row {
    .el-col {
      margin-top: 12px;
      .mu-card-header {
        border-radius: 4px;
        // box-shadow:  5px 5px 8px #d9d9d9, -20px -20px 60px #ffffff;
        border: 1px solid #ebeef5;
        // background: #ffffff;
        // box-shadow: inset 1px 2px 5px #D9D9E8, inset 0px 0px 0px #ffffff;
        transition: 0.5s;
        .mu-avatar {
          border-radius: 5px;
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
