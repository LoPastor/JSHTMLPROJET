<template>
  <div id="app">
<h1>  {{msg}}</h1>

<app-liste v-on:click.prevent="setr()"></app-liste>
<app-restau-detail></app-restau-detail>
<app-menu v-show="showmenu"></app-menu>


  </div>
</template>

<script>
import { EventBus } from './composants/bus/bus.js';
import Liste from './composants/liste.vue';
import Detail from './composants/details.vue';
import Commande from './composants/commande.vue';
import Menu from './composants/menu.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenue dans la gestion des restaurants.',
            name: '',
            cuisine: '',
            nbRestaurants:0,
            //pagesize:10,
            page:0,
            nbRestaurantsParPage: 5,
            nomRecherche:'',
            id:'',
            resto:{
                name:'',
                cuisine:''
            },
            show:true,
            showmenu:false,
            r:{}
    }
  },
components:{
  Liste,
  
 'app-restau-detail': Detail,
 'app-menu': Menu
},
   mounted(){
       EventBus.$on('voirMenu' ,data => {
           this.showmenu=data;  

           }
                      

 );

}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
.P1{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
}
.Add,.Search,.List{
padding :10px;
text-align: center;
    border: 2px solid black;
}
.AddTxt,.SearchTxt{
    font-size: 26px;
    text-align: center;
     
    }

h1{
    text-align: center;
}
table {
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
}

tr,
td {
    border: 1px solid black;
}

td {
    padding: 5px;
}

tr:hover {
    background-color: yellow;
}

input:invalid {
    background-color: pink;
}

input:valid {
    background-color: lightGreen;
}

.bordureRouge {
    border: 2px dashed red;
}

html{
    background-color: rgb(224, 255, 255);
}
</style>
