<template>
  <div>
    <!-- 头部 -->
    <mu-appbar style="width: 100%" color="#34495e">
      <mu-button icon slot="left" @click="asideIsOpen">
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-drxx89"></use>
        </svg> -->
        <img src="../assets/img/apiao.png" width="190%" alt="" />
      </mu-button>
      <span style="font-size: 18px; margin-left: 0%">阿飘~</span>
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
        <el-row :gutter="12">
          <el-divider content-position="left">第一个</el-divider>
          <el-col :span="8">
            <mu-card-header title="Myron Avatar" sub-title="sub title">
              <mu-avatar slot="avatar">
                <img src="../assets/img/apiao.png" />
              </mu-avatar>
            </mu-card-header>
          </el-col>
          <el-col :span="8">
            <mu-card-header title="Myron Avatar" sub-title="sub title">
              <mu-avatar slot="avatar">
                <img src="../assets/img/apiao.png" />
              </mu-avatar>
            </mu-card-header>
          </el-col>
          <el-col :span="8">
            <mu-card-header title="Myron Avatar" sub-title="sub title">
              <mu-avatar slot="avatar">
                <img src="../assets/img/apiao.png" />
              </mu-avatar>
            </mu-card-header>
          </el-col>
          <el-col :span="8">
            <mu-card-header title="Myron Avatar" sub-title="sub title">
              <mu-avatar slot="avatar">
                <img src="../assets/img/apiao.png" />
              </mu-avatar>
            </mu-card-header>
          </el-col>
        </el-row>
        <!-- <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="open = false" button>
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list> -->
      </mu-drawer>
    </mu-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docked: false,
      open: false,
      position: "left",
      responseData:[]
    };
  },
  components: {},
  mounted() {},
  methods: {
    asideIsOpen: function () {
      this.open = !this.open;
      this.axios.get("../../json/aside.json").then((data) => {
        let vo = data.data;
        if (vo.code === 200) {
          this.responseData = vo.data;
        }
        console.info(this.responseData);
      });
      // this.$store.commit("asideIsOpen");
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
