<template>
<div id="comm">
<p> Vous avez commandé :</p>


  <table>

        <tr>
            <th>Entree</th>
            <th>Nombre </th>
            <th>Prix </th>
        </tr>
        <tbody>
            <tr  v-for="c in commande">
                <td>{{c.entrees}}</td>
                <td> {{c.nombre}}</td>
                <td>{{c.prix}}</td>
            </tr>

        </tbody>
    </table>
<p> Votre commande s'élève à : {{total()}} euros.</p>


</div>
</template>
<script>
export default{

    data(){
        return{
            commande:{
                entree:'',
                nombre:0,
                prix:0
            }
        }
    },
    computed:{
        total(){
                var tot = 0;
                var x = 0;
                for (x in this.commande){
                    tot += (x.prix*x.nombre);
                }
                this.total = tot
        }
    }
}
</script>