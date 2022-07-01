<template>
  <div>
    <mu-appbar style="width: 100%" color="#34495e" textColor="#fff">
      <mu-button icon slot="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-drxx89"></use>
        </svg>
      </mu-button>
      阿飘
      <mu-menu slot="right">
        <mu-button flat>留言</mu-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
