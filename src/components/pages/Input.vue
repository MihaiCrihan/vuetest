<template>
    <div>
        a<input type="text" v-model="a">
        b<input type="text" v-model="b">
        <button v-on:click="sumXY()">+</button>
      
    </div>
</template>

<script>
export default {
  name: 'Input',

}
</script>

<style scoped>
</style>