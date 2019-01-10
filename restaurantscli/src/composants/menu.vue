<template>
    <div id="menu-restaurant">

<h1>Voici le menu de ce restaurant :</h1>
<app-entree-menu></app-entree-menu>
<app-commande></app-commande>
    </div>
</template>

<script>

import Entree from './entree.vue';
import { EventBus } from './bus/bus.js';
import Commande from './commande.vue';

    export default {
        props : ['cuisine','comm'],

        data() {
            return {

            }
        },
        components : {
            'app-entree-menu' : Entree,
            'app-commande':Commande
        }
    }

</script>
    <style scoped>

</style>