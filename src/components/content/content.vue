<template>
    <div class="content">
      <div class="content-wrapper">
        <Row>
          <i-col span="8">
            <Menu @on-select="selectMenu" theme="light" style="overflow: auto">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                  内容管理
              </template>
                <Menu-item name="1-1">文章管理</Menu-item>
                <Menu-item name="1-2">评论管理</Menu-item>
                <Menu-item name="1-3">举报管理</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-people"></Icon>
                  用户管理
              </template>
                <Menu-item name="2-1">新增用户</Menu-item>
                <Menu-item name="2-2">活跃用户</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="stats-bars"></Icon>
                  统计分析
              </template>
                <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
                <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
                <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
              </Submenu>
            </Menu>
          </i-col>
        </Row>
      </div>
      <div class="footer-wrapper">2017 &copy; Exotic</div>
    </div>
</template>

<script>
  import {xhr} from '@/common/js/utils'
  import ICol from '../../../node_modules/iview/src/components/grid/col'
  export default {
    components: {ICol},
    created () {
      this.loadMenu()
    },
    methods: {
      loadMenu () {
        xhr.get('url')
          .then(data => {
            this.$Message.info(data)
          })
      },
      selectMenu (name) {
        this.$Message.info(name)
      }
    }
  }
</script>

<style lang="stylus">
  .content
    position relative
    width 100%
    height 100%
    z-index 0
    .content-wrapper
      position absolute
      width 100%
      height 100%
      padding-bottom 50px
      overflow hidden
      .ivu-row
        height 100%
        .ivu-col
          height 100%
          .ivu-menu
            height 100%
    .footer-wrapper
      position absolute
      bottom 50px
      width 100%
      text-align center
      padding 10px 0
      color: #9ea7b4;
</style>
