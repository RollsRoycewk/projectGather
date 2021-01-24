<template>
  <div>
    <h4>孙组件</h4>
    <p>content11: {{content11}}</p>
    <p>content22: {{content22.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'GrandChild',
  inject: ['content11', 'content22']
}
</script>

