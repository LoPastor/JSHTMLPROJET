<template>
  <div>



    <div class="Search">
     <p class="SearchTxt">Rechercher un restaurant :</p>   
        <br/>
       
        <label>Recherchez un restaurant par son nom :
            <input v-on:input="searchRestaurantsFromServer" type="text" v-model="nomRecherche" >
            
        </label>
    </div>
 
      <p>
        Nombre de restaurants par page : 
        <input type="range" min=5 max=100 value=10
                v-on:input="changePageSize" 
                v-model="nbRestaurantsParPage"
        >
        {{nbRestaurantsParPage}}
    </p>
    <div class="List">
      <h1>Nombre de restaurants : {{nbRestaurants}}</h1>
    <table>

        <tr>
            <th>Nom</th>
            <th>Cuisine </th>
        </tr>
        <tbody>
            <tr v-for="r in restaurants" v-on:click="testENF(r)">
                <td>{{r.name}}</td>
                <td> {{r.cuisine}}</td>
            </tr>
        </tbody>
    </table>
    <input type="button" id="PremPage" v-on:click="premierePage" value="Première page"></input>
    <input type="button" id="PagePrec" v-on:click="pagePrecedente" value="Page précédente"></input>
    <input type="button" id="PageSuiv" v-on:click="pageSuivante" value="Page suivante"></input>
    <input type="button" id="DernPage" v-on:click="dernierePage" value="Dernière page"></input>
</div>
    </div>
     
</template>

<script>
import { EventBus } from './bus/bus.js';
export default { 
      data() {
       return {    
           deta:[],      
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
            name: '',
            cuisine: '',
            nbRestaurants:0,
            //pagesize:10,
            page:0,
            nbRestaurantsParPage: 10,
            nomRecherche:'',
            id:'',
            fenet:false

        }
  },

        mounted() {
            console.log("AVANT AFFICHAGE");
            this.getRestaurantsFromServer();

        },
        methods: {
           
testENF(r){
    //je voulais tout prendre en un coup,
    //mais j'avais une erreur undefined, 
    //et je ne comprends pas pourquoi.
    console.log("Je teste la récupération");
    EventBus.$emit('restonom',r.name);
    EventBus.$emit('restocuisine',r.cuisine);
    EventBus.$emit('restolocal',r.address.street);
    console.log("Récupération réussie");
    EventBus.$emit('voirMenu',false);

},
            ajouterRestaurant(event) {

                 event.preventDefault();
                // Récupération des valeurs des champs du formulaire
                // en prévision d'un envoi multipart en ajax/fetch
                let form = event.target;
                let donneesFormulaire = new FormData(form);

                let url = "http://localhost:8080/api/restaurants";

                fetch(url, {
                        method: "POST",
                        body: donneesFormulaire
                    })
                    .then((responseJSON) => {
                        responseJSON.json()
                            .then((res) => { // arrow function préserve le this
                                // Maintenant res est un vrai objet JavaScript
                                console.log("Restaurant ajouté");
                                this.getRestaurantsFromServer();

                                // remettre le formulaire à zéro
                                this.name = "";
                                this.cuisine = "";
                            });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
        },
    supprimerRestaurant(id, index) {
           
            
 

    // Récupération du formulaire. Pas besoin de document.querySelector
    // ou document.getElementById puisque c'est le formulaire qui a généré
    // l'événement
    
   // on peut aller chercher la valeur
                             // d'un champs d'un formulaire
                             // comme cela, si on connait le nom
                             // du champ (valeur de son attribut name)
                            this.restaurants.splice(index, 1);
                             let url = "http://localhost:8080/api/restaurants/" + id;

                             fetch(url, {
                                 method: "DELETE"
                             })
                             .then(function(responseJSON) {
                                 responseJSON.json()
                                     .then(function(res) {
                                         // Maintenant res est un vrai objet JavaScript
                                         console.log("Restaurant supprimé");
                                          this.getRestaurantsFromServer();
                                     });
                                 })
                                 .catch(function (err) {
                                     console.log(err);
                             });
                            
                         },
                                     searchRestaurantsFromServer(){
                    
                    this.getRestaurantsFromServer();
                },
                        getRestaurantsFromServer() {
                let url = "http://localhost:8080/api/restaurants?page=" +
                    this.page  +"&name=" + this.nomRecherche +   "&pagesize=" + //this.pagesize;
                    this.nbRestaurantsParPage;

                  

                console.log("Je vais chercher les restaurants sur : " + url)

                fetch(url)
                    .then((responseJS) => {
                        //console.log("reponse json");
                         responseJS.json()
                    
                    .then((responseJS) => {
                        // ici on a une réponse en JS
                        console.log("J'ai récupéré les restaurants");
                        this.restaurants = responseJS.data;
                        this.nbRestaurants = responseJS.count;
                       
                    });
                })
                    .catch((err) => {
                        console.log("Une erreur est intervenue " + err);
                    });
                    //gestion des disabled pour les boutons de pagination

                    if (this.page==0){
                        document.getElementById("PremPage").disabled='true';
                        document.getElementById("PagePrec").disabled='true';
                    }
                        else {
                            document.getElementById("PremPage").disabled='';
                        document.getElementById("PagePrec").disabled='';
                        }
                    
                        // lorsqu'on lance la page, ces boutons sont désactivés, et se réactive dès que l'on effectue une recherche 
                        //==> temps d'exécution trop long? je suppose que c'est parce que nbRestaurants =0 au début

                      if ((Math.trunc(this.nbRestaurants/this.nbRestaurantsParPage))<=this.page){
                            document.getElementById("PageSuiv").disabled='true';
                            document.getElementById("DernPage").disabled='true';
                        }
                            else {
                                document.getElementById("PageSuiv").disabled='';
                            document.getElementById("DernPage").disabled='';
                            }
            },
            pagePrecedente() {
                if (this.page > 0) {
                    this.page--;
                    this.getRestaurantsFromServer();
                }
            },
            premierePage(){
                if (this.page > 0) {
                this.page=0;
                this.getRestaurantsFromServer();
                }
            },
           dernierePage(){
            if ((Math.trunc(this.nbRestaurants/this.nbRestaurantsParPage))>this.page)
            {
                this.page=Math.trunc(this.nbRestaurants/this.nbRestaurantsParPage);
                this.getRestaurantsFromServer();
            }
            },
            pageSuivante() {
                if ((Math.trunc(this.nbRestaurants/this.nbRestaurantsParPage))>this.page)
                {
                this.page++;
                this.getRestaurantsFromServer();
                }
            
            },
                        changePageSize() {
                this.getRestaurantsFromServer();
            }
            }

}
</script>


<style>
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
table {
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
}
</style>