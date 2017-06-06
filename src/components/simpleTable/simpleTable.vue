<template>
  <div class="sTable-wrapper">
    <Row>
      <i-col span="3">
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
                    <Date-picker type="date" placeholder="开始日期" v-model="formValidate.beginTime"></Date-picker>
                  </Form-item>
                  -
                  <Form-item prop="endTime">
                    <Time-picker type="date" placeholder="结束时间" v-model="formValidate.endTime"></Time-picker>
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
      <i-col span="21">
        <div class="content-card">
          <Button-group>
            <Button type="success" icon="plus">添加</Button>
            <Button type="info" icon="edit">编辑</Button>
            <Button type="error" icon="close">删除</Button>
          </Button-group>
        </div>
        <div class="content-table">
          <Table :height="tableHeight" :row-class-name="TheadClass" :data="data" :columns="columns" border></Table>
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
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
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
      height 100%
      padding 0 5px 5px 5px
      .ivu-card
        height 100%
        .ivu-card-body
          height 100%
          overflow auto
    .content-card
      margin-bottom 10px
    .content-table
      padding-right 10px


</style>
