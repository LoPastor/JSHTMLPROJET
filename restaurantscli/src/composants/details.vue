<template>
<div id="r" v-show="show" class="Search">
<h1> Vous avez sélectionné : </h1>
<table>
        <tr>
            <th>Nom</th>
            <th>Cuisine </th>
            <th>Adresse</th>
        </tr>
        <tbody>
            <tr>
                <td>{{nom}}</td>
                <td> {{cuisine}}</td>
                <td> {{localisation}}</td>
            </tr>
        </tbody>
    </table>

<button v-on:click="voirMenu()"> Voir la carte de ce restaurant</button></p>
</div>
</template>

<script>
import { EventBus } from './bus/bus.js';
import Menu from './menu.vue';

export default {
   data(){
        return{
                   restaurants: [
               /* {
                    nom: 'café de Paris',
                    cuisine: 'Française'
                },
                {
                    nom: 'café de Paris',
                    cuisine: 'Française'
                },
                {
                    nom: 'EL Cafeo',
                    cuisine: 'Italienne'
                },
                {
                    nom: 'Strabucks',
                    cuisine: 'Américaine'
              }*/
            ],
            id:'',
            nom:'',
            cuisine:'',
            show:false,
            localisation:''
   }

   
   },
      components:{
 'app-menu': Menu
},
   mounted(){
       EventBus.$on('restonom' ,data => {
           this.nom=data;  

this.show=true;
           }
                      

 );
       EventBus.$on('restocuisine' ,data => {
           this.cuisine=data;  }
 );
       EventBus.$on('restolocal' ,data => {
           this.localisation=data;  }
 );
  },
  methods:{
      voirMenu(){
              EventBus.$emit('voirMenu',true);


      }
  }
   


}
    </script>
    <style scoped>

</style>