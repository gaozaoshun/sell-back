<template>
  <div class="sTable-wrapper">
    <Row>
      <i-col span="4">
        <div class="query-card">
          <Card :bordered="true">
            <span slot="title">查询条件</span>
            <Form ref="formValidate"
                  label-position="top"
                  :model="formValidate"
                  :rules="ruleValidate">
              <Form-item label="姓名" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
              </Form-item>
              <Form-item label="邮箱" prop="mail">
                <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
              </Form-item>
              <Form-item label="城市" prop="city">
                <Select v-model="formValidate.city" placeholder="请选择所在地">
                  <Option value="beijing">北京市</Option>
                  <Option value="shanghai">上海市</Option>
                  <Option value="shenzhen">深圳市</Option>
                </Select>
              </Form-item>
              <Form-item label="选择日期">
                  <Form-item prop="beginTime">
                    <Date-picker placement="bottom" type="datetime" placeholder="开始日期" v-model="formValidate.beginTime" clearable></Date-picker>
                  </Form-item>
                  -
                  <Form-item prop="endTime">
                    <Date-picker placement="bottom" type="datetime" placeholder="结束时间" v-model="formValidate.endTime" clearable></Date-picker>
                  </Form-item>
              </Form-item>
              <Form-item label="性别" prop="gender">
                <Radio-group v-model="formValidate.gender">
                  <Radio label="male">男</Radio>
                  <Radio label="female">女</Radio>
                </Radio-group>
              </Form-item>
              <Form-item label="爱好" prop="interest">
              <Checkbox-group v-model="formValidate.interest">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
              </Checkbox-group>
            </Form-item>
              <Form-item label="介绍" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
              </Form-item>
            </Form>
          </Card>
        </div>
      </i-col>
      <i-col span="20">
        <div class="content-card">
          <Button-group>
            <Button type="success" icon="plus">添加</Button>
            <Button type="info" icon="edit">编辑</Button>
            <Button type="error" icon="close">删除</Button>
            <Button type="primary" icon="ios-download" @click="exportCVS">导出CSV</Button>
          </Button-group>
          <Page class="pageBar" :page-size-opts="pageSizeOpts"  :total="totalPage"  @on-change="changePage" @on-page-size-change="changePageSize" size="small" show-total show-elevator show-sizer></Page>
        </div>
        <div class="content-table">
          <Table ref="table" @on-select="selectOneEvent" @on-select-all="selectAllEvent" :height="tableHeight" :data="data" :columns="columns" size="small" border></Table>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import ICol from '../../../node_modules/iview/src/components/grid/col'
  export default{
    components: {ICol},
    data () {
      return {
        totalPage: 9999,
        pageSizeOpts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name',
            sortable: true
          },
          {
            title: '年龄',
            key: 'age',
            sortable: true,
            filters: [
              {
                label: '大于25岁',
                value: 1
              },
              {
                label: '小于25岁',
                valus: 2
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.age > 25
              } else if (value === 2) {
                return row.age < 25
              }
            }
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ],
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
          ],
          beginTime: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          endTime: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' },
            { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      tableHeight () {
        return document.body.clientHeight - 186
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      },
      selectOneEvent (selection, row) {
        console.log(selection)
        console.log(row)
      },
      selectAllEvent (selection) {
        console.log(selection)
      },
      exportCVS () {
        this.$refs.table.exportCsv({
          filename: 'simpleTable', /* 文件名，默认为 table.csv */
          original: false, /* 是否导出为原始数据，默认为 true */
          noHeader: false, /* 不显示表头，默认为 false */
          columns: this.columns.filter((col, index) => index < 2 && index > 0), /* 自定义导出的列数据 */
          data: this.data.filter((row, index) => index < 2) /* 自定义导出的行数据 */
          /* 说明：columns 和 data 需同时声明，声明后将导出指定的数据，建议列数据有自定义render时，可以根据需求自定义导出内容 */
        })
      },
      changePage (currentPage) {
        console.log(currentPage)
        this.data = [
          {
            name: 'gggg',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: 'zzzz',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: 'ssss',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: 'qqqq',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      },
      changePageSize (pageSize) {
        console.log(pageSize)
        this.totalPage = 5555
      }
    }
  }
</script>
<style lang="stylus">
  .sTable-wrapper
    position relative
    width 100%
    height 100%
    .query-card
      display inline-block
      vertical-align top
      height 100%
      padding 0 5px 5px 5px
      .ivu-card
        height 100%
        .ivu-card-body
          height 100%
          overflow auto
    .content-card
      margin-bottom 10px
      .pageBar
        display inline-block
        vertical-align top
        float right
        padding-right 10px
    .content-table
      padding-right 10px


</style>
