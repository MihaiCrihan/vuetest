<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/#/Home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#/Input">Input</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#/Output">Output</a>
            </li>
            </ul>
        </div>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu3puncte',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 300px;
}
button img{
  width: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
