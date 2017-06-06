<template>
    <div class="content">
      <div class="content-wrapper">
        <Row>
          <i-col span="3">
            <Menu @on-select="selectMenu" theme="light" width="auto" style="overflow: auto">
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
          <i-col span="21" style="background: #fff">
            <div class="content-frame tabs-style">
              <Tabs type="card" closable extra>
                <Tab-pane icon="ionic" name="控制面板" label="控制面板"><simple-table></simple-table></Tab-pane>
                <Tab-pane v-for="menu in menus" :key="menu.id" :label="menu.name" :icon="menu.icon">
                </Tab-pane>
              </Tabs>
            </div>
          </i-col>
        </Row>
      </div>
      <div class="footer-wrapper">2017 &copy; Exotic</div>
    </div>
</template>

<script>
  import {xhr} from '@/common/js/utils'
  import ICol from '../../../node_modules/iview/src/components/grid/col'
  import SimpleTable from '@/components/simpleTable/simpleTable'
  export default {
    components: {
      ICol,
      'simple-table': SimpleTable
    },
    data () {
      return {
        menus: [{'id': 1, 'name': '标签1', 'icon': 'person', 'url': 'https://baidu.com'},
          {'id': 2, 'name': '标签2', 'icon': 'person', 'url': 'https://baidu.com'},
          {'id': 3, 'name': '标签3', 'icon': 'person', 'url': 'https://baidu.com'}]
      }
    },
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
//        this.$Message.info(name)
        this.menus.push({'id': 4, 'name': name, 'icon': 'person', 'url': 'https://baidu.com'})
      },
      addTab () {
        this.tabs
      }
    }
  }
</script>

<style lang="stylus">
  .content
    position relative
    width 100%
    height 100%
    .content-wrapper
      position absolute
      width 100%
      height 100%
      padding-bottom 50px
      overflow hidden
      .content-frame
        width 100%
        height 100%
        padding 0 0 45px 0
        .ivu-tabs
          height 100%
          .ivu-tabs-content
            height 100%
            padding-bottom 45px
        .content-iframe
          position absolute
          border 2px solid #000
      .tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab
        border-radius: 0
        background: #fff
      .tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active
        border-top: 1px solid #3399ff
      .tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before
        content: ''
        display: block
        width: 100%
        height: 1px
        background: #3399ff
        position: absolute
        top: 0
        left: 0
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
