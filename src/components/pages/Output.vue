<template>
    <div>
        <span>={{summ}}</span>
      
    </div>
</template>

<script>
export default {
 name: 'Output',
  data() {
    return {
      a:'',
      b:'',
      summ:0
    }
  },
  methods:{
		sumXY(){
			this.summ = Number(this.a) + Number(this.b);
		},
	}
}
</script>

<style scoped>
</style>