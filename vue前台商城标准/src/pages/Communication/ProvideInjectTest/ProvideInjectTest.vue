<template>
  <div>
    <h2>祖组件标题</h2>
    <p @click="handleClick1">{{content1}}</p>
    <p @click="handleClick2">{{content2.name}}</p>
    <br>
    <Child />
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'ProvideInjectTest',

  data () {
    return {
      content1: 'atguigu',
      content2: {
        name: 'tom'
      }
    }
  },

  provide () {
    return {
      content11: this.content1,
      content22: this.content2
    }
  },

  methods: {
    handleClick1 () {
      this.content1 = this.content1 + '--'
    },
    handleClick2 () { 
      this.content2.name = this.content2.name + '++'
    },
  },

  components: {
    Child
  }
}
</script>

<style lang="less" scoped>

</style>
