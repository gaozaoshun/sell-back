<template>
  <div class="container">
    <div class="header">
      <div class="logo-wrapper">
        <a href="#">
          <img src="https://file.iviewui.com/dist/fe8d29da1225d943e30f9ee1bddce78f.png" width="115" height="50">
        </a>
      </div>
      <div class="search-wrapper">
        <Select v-model="q"
                clearable
                filterable
                remote
                :remote-method="searchFull"
                :loading="loading"
                size="small"
                icon="search"
                placeholder="全文搜索">
          <Option v-for="option in options" :value="option.value" :key="option.key">{{option.value}}</Option>
        </Select>
      </div>
      <div class="other-wrapper">
        <div class="tab-wrapper">
          <Tabs @on-click="tabClick">
            <Tab-pane name="分析统计" label="分析统计" icon="social-apple"></Tab-pane>
            <Tab-pane name="API监控" label="API监控" icon="social-windows"></Tab-pane>
            <Tab-pane name="日志监控" label="日志监控" icon="social-tux"></Tab-pane>
            <Tab-pane name="日志监控" label="日志监控" icon="social-tux"></Tab-pane>
            <Tab-pane name="日志监控" label="日志监控" icon="social-tux"></Tab-pane>
          </Tabs>
        </div>
        <div class="notify-wrapper">
          <a href="#" @click="openNotify">
            <Badge dot :count="notifyCount">
              <Icon :type="notifyIcon" color="#fff" size="20"></Icon>
            </Badge>
          </a>
        </div>
        <div class="user-wrapper">
          <Dropdown trigger="click">
            <a href="javascript:void(0)">
              <img class="user-headimg" src="./head.jpg">
              <span class="user-text">管理员</span>
              <Icon type="arrow-down-b" color="#fff"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item><Icon type="person"></Icon> 帐号信息</Dropdown-item>
              <Dropdown-item><Icon type="android-settings"></Icon> 设置</Dropdown-item>
              <Dropdown-item><Icon type="log-out"></Icon> 注销</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        q: '',
        options: [],
        list: [{'key': '1', 'value': '高灶顺'}, {'key': '2', 'value': '高佳伟'}],
        loading: false,
        menuTheme: 'dark',
        menuWidth: '100',
        searchInput: '',
        notifyCount: '9'
      }
    },
    created () {},
    methods: {
      modifyMenuTheme (theme) { /* 修改菜单样式 */
        this.menuTheme = theme
      },
      modifyMenuWidth (width) { /* 修改菜单宽度 */
        this.menuWidth = width
      },
      openNotify () { /* 弹出通知列表 */
        if (!(this.notifyCount === '0' || this.notifyCount === 'stop')) {
          this.$Notice.info({
            key: 'noticePop',
            title: '通知标题',
            desc: '通知描述',
            duration: 0, /* 自动关闭延时时间 */
            onClose () { /* 销毁时回调 */
            }
          })
        }
      },
      searchFull (q) {
        if (q !== '') {
          this.loading = true /* 显示加载中... */
          setTimeout(() => {
            this.loading = false /* 关闭加载中... */
            this.options = this.list.filter(item => item.value.indexOf(q) > -1)
          }, 200)
        } else {
          this.options = []
        }
      },
      tabClick (name) {
        alert(name) /* 标签名 */
      }
    },
    computed: {
      notifyIcon () {
        if (this.notifyCount === 'stop') {
          this.notifyCount = '0'
          return 'android-notifications-off'
        } else if (this.notifyCount > 0) {
          return 'android-notifications'
        } else {
          return 'android-notifications-none'
        }
      }
    }
  }
</script>
<style lang="stylus">
html,body
  height 100%
  min-width 980px
  .container
    position relative
    width 100%
    height 100%
    background #eee
    .header
      display flex
      flex-wrap nowrap
      align-items center
      height 50px
      background #262626
      .logo-wrapper
        flex 0 1 150px
        padding-left 20px
      .search-wrapper
        flex 0 1 200px
        padding-left 20px
      .other-wrapper
        flex 1
        display flex
        flex-wrap nowrap
        align-items center
        margin 0 20px
        text-align right
        .tab-wrapper
          flex 1
          margin 11px 20px 0 20px
          .ivu-tabs
            color #fff
            .ivu-tabs-bar
              border-bottom none
        .notify-wrapper
          flex 0
          padding-right 10px
          .ivu-badge-dot
            box-shadow 0 0 0 1px #ed3f14
        .user-wrapper
          padding-left 20px
          text-align left
          .user-headimg
            width 30px
            height 30px
            border-radius 50%
            vertical-align middle
          .user-text
            padding 0 5px
            color #fff
</style>

