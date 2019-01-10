<template>

<div>
  <table>

        <tr>
            <th>Entree</th>
            <th>Prix </th>
            <th>Nombre </th>
            <th>Commander? </th>
        </tr>
        <tbody>
            <tr  v-for="r in entrees" v-if="r.Cuis==cuisine">
                <td>{{r.entree}}</td>
                <td> {{r.prix}}</td>
                <td>
<select v-model="nombre">
  <option disabled value="">Choisissez</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
</td>
                <td><button v-on:click="addCommande()">Commander</button></td>
            </tr>

        </tbody>
    </table>
   
    </div>
</template>
<script>

import { EventBus } from './bus/bus.js';


    export default {
        name: "Entree",
        
        data() {
            return {
                show:false,
                cuisine:'',
                nombre:0,
                entrees:[ {
 
                            entree: "Salade",
                            prix: "10",
                            Cuis:"American" 
                        },
                        {
                            entree: "Mini pizza",
                            prix: "15",
                            Cuis:"American" 
                             
                        },
                        {
                            entree: "Steak + Soda",
                            prix: "20",
                            Cuis:"American" 
                             
                        },
                        {
                            entree: "Plat de pâtes",
                            prix: "15",
                            Cuis:"Italian" 
                             
                        },
                        {
                            entree: "Café",
                            prix: "7",
                            Cuis:"Italian" 
                             
                        },
                        {
                            entree: "Ensemble de biscuits",
                            prix: "10",
                            Cuis:"Italian" 
                             
                        },
                        {
                            entree: "Assortiment de viandes",
                            prix: "15",
                            Cuis:"Delicatessen" 
                             
                        },
                        {
                            entree: "Riz avec curry",
                            prix: "8",
                            Cuis:"Delicatessen"
                             
                        },
                        {
                            entree: "Purée de pommes de terres",
                            prix: "12",
                            Cuis:"Delicatessen"
                             
                        },
                        {
                            entree: "Frites",
                            prix: "5",
                            Cuis:"Irish"
                             
                        },
                        {
                            entree: "Ouefs brouillés",
                            prix: "8",
                            Cuis:"Irish"
                             
                        },
                        {
                            entree: "Panini",
                            prix: "12",
                            Cuis:"Irish"
                             
                        },
                        {
                            entree: "Donut Chocolat",
                            prix: "10",
                            Cuis:"Donuts"
                             
                        },
                        {
                            entree: "Donut Fruité",
                            prix: "9",
                            Cuis:"Donuts"
                             
                        },
                        {
                            entree: "Donut Sucré",
                            prix: "7",
                            Cuis:"Donuts"
                             
                        },
                        {
                            entree: "Chicken sauce barbecue",
                            prix: "10",
                            Cuis:"Chicken"
                             
                        },
                        {
                            entree: "Chicken aux herbes",
                            prix: "10",
                            Cuis:"Chicken"
                             
                        },
                        {
                            entree: "Chicken rôti",
                            prix: "15",
                            Cuis:"Chicken"
                             
                        },
                        {
                            entree: "Riz thaï",
                            prix: "8",
                            Cuis:"Chinese"
                             
                        },
                        {
                            entree: "Riz au curry",
                            prix: "9",
                            Cuis:"Chinese"
                             
                        },
                        {
                            entree: "Riz au saumon",
                            prix: "12",
                            Cuis:"Chinese"
                             
                        },
                        {
                            entree: "Ice Cream 3 parfuns",
                            prix: "9",
                            Cuis:"Ice Cream, Gelato, Yogurt, Ices"
                             
                        },
                        {
                            entree: "Yogurt Vanille",
                            prix: "2",
                            Cuis:"Ice Cream, Gelato, Yogurt, Ices"
                             
                        },
                        {
                            entree: "Ice Cream 2 parfuns",
                            prix: "6",
                            Cuis:"Ice Cream, Gelato, Yogurt, Ices"
                             
                        },
                        {
                            entree: "Gelato",
                            prix: "6",
                            Cuis:"Ice Cream, Gelato, Yogurt, Ices"
                             
                        },
                        {
                            entree: "Pizza Reine",
                            prix: "12",
                            Cuis:"Pizza"
                             
                        },
                        {
                            entree: "Pizza Cannibale",
                            prix: "14",
                            Cuis:"Pizza"
                             
                        },
                        {
                            entree: "Pizza Végétale",
                            prix: "7",
                            Cuis:"Pizza"                           
                        },
                        {
                            entree: "Pizza en Chausson",
                            prix: "10",
                            Cuis:"Pizza"
                             
                        },
                        {
                            entree: "Pizza Parme",
                            prix: "11",
                            Cuis:"Pizza"
                             
                        },
                        {
                            entree: "Pepperoni",
                            prix: "11",
                            Cuis:"Pizza/Italian"
                             
                        },
                        {
                            entree: "Pâtes carbonhara",
                            prix: "10",
                            Cuis:"Pizza/Italian"
                             
                        },
                        {
                            entree: "Pâtes bolognaises",
                            prix: "10",
                            Cuis:"Pizza/Italian"
                             
                        },
                        {
                            entree: "Regina ",
                            prix: "12",
                            Cuis:"Pizza/Italian"
                        },
                        {
                           entree: "Escargots",
                            prix: "20",
                            Cuis:"French"
                             
                        },
                        {
                            entree: "Grenouilles",
                            prix: "8",
                            Cuis:"French"
                             
                        },
                        {
                            entree: "Beurre et baguettes",
                            prix: "3",
                            Cuis:"French"
                             
                        },
                        {
                            entree: "Boeuf",
                            prix: "25",
                            Cuis:"Continental"
                             
                        },
                        {
                            entree: "Poulpe",
                            prix: "30",
                            Cuis:"Continental"
                             
                        },
                        {
                            entree: "Ailerons de requins",
                            prix: "35",
                            Cuis:"Continental"
                             
                        },
                        {
                            entree: "Panini",
                            prix: "4",
                            Cuis:"Latin"
                             
                        },
                        {
                            entree: "Kebab",
                            prix: "7",
                            Cuis:"Latin"
                             
                        },
                        {
                            entree: "Pain aux olives",
                            prix: "4",
                            Cuis:"Latin"
                             
                        },
                        {
                            entree: "Bière brune",
                            prix: "8",
                            Cuis:"German"
                             
                        },
                        {
                            entree: "Pinte blonde",
                            prix: "8",
                            Cuis:"German"
                             
                        },
                        {
                            entree: "Choucroute",
                            prix: "12",
                            Cuis:"German"
                             
                        },
                        {
                            entree: "Bagel jambom",
                            prix: "6",
                            Cuis:"Bagels/Pretzels"
                             
                        },
                        {
                            entree: "Bagel aux herbes",
                            prix: "7",
                            Cuis:"Bagels/Pretzels"
                             
                        },
                        {
                            entree: "Bagel épicé",
                            prix: "5",
                            Cuis:"Bagels/Pretzels"
                             
                        },
                        {
                            entree: "Buffalo Tenders",
                            prix: "8",
                            Cuis:"Jewish/Kosher"
                             
                        },
                        {
                            entree: "Calamari Steak Strips",
                            prix: "8",
                            Cuis:"Jewish/Kosher"
                             
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            prix: "9",
                            Cuis:"Jewish/Kosher"
                             
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            prix: "11",
                            Cuis:"Jewish/Kosher"
                             
                        },
                        {
                            entree: "Potato Croquetes",
                            prix: "6",
                            Cuis:"Jewish/Kosher"
                             
                        },
                
                    {
                        entree: "Sandwich jambon/beurre",
                        prix: "7",
                            Cuis:"Sandwiches/Salads/Mixed Buffet"
                         
                    },
                    {
                        entree: "Salade niçoise",
                        prix: "9",
                            Cuis:"Sandwiches/Salads/Mixed Buffet"
                         
                    },
                    {
                        entree: "Mixed buffet",
                        prix: "11",
                            Cuis:"Sandwiches/Salads/Mixed Buffet"
                         
                    },
                {
                    entree: "Expresso",
                    prix: "2",
                     Cuis:"Café/Coffee/Tea"
                     
                },
                {
                    entree: "Capuccino",
                    prix: "3",
                     Cuis:"Café/Coffee/Tea"
                     
                },
               
                {
                    entree: "Thé noir",
                    prix: "2",
                     Cuis:"Café/Coffee/Tea"
                     
                },
                    {
                        entree: "Croissant",
                        prix: "1",
                     Cuis:"Bakery"
                         
                    },
                    {
                        entree: "Baguette",
                        prix: "2",
                     Cuis:"Bakery"
                         
                    },
                    {
                        entree: "Pain au Chocolat",
                        prix: "1",
                     Cuis:"Bakery"
                         
                    },
                    {
                        entree: "Bakery Assortment",
                        prix: "6",
                     Cuis:"Bakery"
                         
                    },
                    {
                        entree: "Homemade Onion Pizza",
                        prix: "7",
                     Cuis:"Bakery"
                         
                    },
                    {
                        entree: "Ensaladas",
                        prix: "6",
                     Cuis:"Mexican"
                         
                    },
                    {
                        entree: "Calamari Steak Strips",
                        prix: "8",
                     Cuis:"Mexican"
                         
                    },
                    {
                        entree: "Jamon Iberico Tapas",
                        prix: "9",
                     Cuis:"Mexican"
                         
                    },
                    {
                        entree: "Smoked Salmon Flatbread ",
                        prix: "11",
                     Cuis:"Mexican"
                         
                    },
                    {
                        entree: "Potato Croquetes",
                        prix: "6",
                     Cuis:"Mexican"
                         
                    },
                    {
                        entree: "Lamb Steak",
                        prix: "10",
                     Cuis:"Steak"
                         
                    },
                    {
                        entree: "Pork Steak",
                        prix: "8",
                     Cuis:"Steak"
                         
                    },
                    {
                        entree: "Beef Steak",
                        prix: "9",
                     Cuis:"Steak"
                         
                    },
                    {
                        entree: "Fish Steak ",
                        prix: "11",
                     Cuis:"Steak"
                         
                    },
                    {
                        entree: "Chicken Steak",
                        prix: "7",
                     Cuis:"Steak"
                         
                    },
                    {
                        entree: "Polish Gazpacho",
                        prix: "8",
                     Cuis:"Polish"
                         
                    },
                    {
                        entree: "Goulash",
                        prix: "8",
                     Cuis:"Polish"
                         
                    },
                    {
                        entree: "Pickles Polish Soup",
                        prix: "6",
                     Cuis:"Polish"
                         
                    },
                    {
                        entree: "Smoked Salmon Flatbread ",
                        prix: "11",
                     Cuis:"Polish"
                         
                    },
                    {
                        entree: "Potato Croquetes",
                        prix: "6",
                     Cuis:"Polish"
                         
                    },
                    {
                        entree: "Praws",
                        prix: "8",
                     Cuis:"Caribbean"
                         
                    },
                    {
                        entree: "Caribbean Chicken",
                        prix: "8",
                     Cuis:"Caribbean"
                         
                    },
                    {
                        entree: "Spicy Soup",
                        prix: "6",
                     Cuis:"Caribbean"
                         
                    },
                    {
                        entree: "Caribbean Salad ",
                        prix: "7",
                     Cuis:"Caribbean"
                         
                    },
                    {
                        entree: "Caribbean Toast",
                        prix: "6",
                     Cuis:"Caribbean"
                         
                    },
                    {
                        entree: "Kanouga",
                        prix: "8",
                     Cuis:"Turkish"
                         
                    },
                    {
                        entree: "Melemen",
                        prix: "8",
                     Cuis:"Turkish"
                         
                    },
                    {
                        entree: "Güvec",
                        prix: "9",
                     Cuis:"Turkish"
                         
                    },
                    {
                        entree: "Halka Tatlisi ",
                        prix: "11",
                     Cuis:"Turkish"
                         
                    },
                    {
                        entree: "Irmik Tatlisi",
                        prix: "6",
                     Cuis:"Turkish"
                         
                    },
                    {
                        entree: "Tortillas",
                        prix: "6",
                     Cuis:"Spanish"
                         
                    },
                    {
                        entree: "Croquetas de Jamon",
                        prix: "7",
                     Cuis:"Spanish"
                         
                    },
                    {
                        entree: "Patatas Bravas",
                        prix: "5",
                     Cuis:"Spanish"
                         
                    },
                    {
                        entree: "Tapas Jamon Iberico",
                        prix: "7",
                     Cuis:"Spanish"
                         
                    },
                    {
                        entree: "Tapas Roasted Salmon ",
                        prix: "8",
                     Cuis:"Spanish"
                         
                    },
                    {
                        entree: "Bacon Burger",
                        prix: "13",
                     Cuis:"Hamburgers"
                         
                    },
                    {
                        entree: "Chicken Burger",
                        prix: "13",
                     Cuis:"Hamburgers"
                         
                    },
                    {
                        entree: "Fish Burger",
                        prix: "12",
                     Cuis:"Hamburgers"
                         
                    },
                    {
                        entree: "Cheese Burger",
                        prix: "11",
                     Cuis:"Hamburgers"
                         
                    },
                    {
                        entree: "Potatoes",
                        prix: "6",
                     Cuis:"Hamburgers"
                         
                    }
                ]

            }
        },

   mounted(){

       EventBus.$on('restocuisine' ,data => {
           this.cuisine=data;  }
 );},

methods:{
    tri: function(entrees){
    return entrees.filter(function (test) {
      return test === cuisine
    })
    },
    addCommande(){
        this.commande.push({"entree":entree,"nombre":nombre,prix:(nombre*prix)})
    }
}
    }
</script>