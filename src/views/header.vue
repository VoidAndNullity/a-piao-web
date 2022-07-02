<template>
  <div>
    <!-- 头部 -->
    <mu-appbar style="width: 100%" color="#34495e">
      <mu-button icon slot="left" @click="open = !open">
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-drxx89"></use>
        </svg> -->
        <img src="../assets/img/apiao.png" width="190%" alt="">
      </mu-button>
      <span style="font-size: 18px;margin-left: 0%;">阿飘~</span>
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
        :open.sync="open"
        :docked="docked"
        :right="position === 'right'"
        width="50%"
      >
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
      position: 'left'
    };
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
