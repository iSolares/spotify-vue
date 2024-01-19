<template>
    <v-app class="h-100 bg-black d-flex">
        <div class="d-flex justify-center my-auto">
            <v-card class="card-size" color="#121212">
                <v-img class="justify-center mt-13 mx-auto" :width="80" src="../../assets/img/Spotify-Logo.png"/>
                <h1 class="d-flex mt-8 justify-center font-weight-black">Page Not Found</h1>
                <h3 class="d-flex mt-5 justify-center">We can't seem to find the page you are looking for</h3>
                <v-btn @click="redirectHome()" height="50" width="150" class="font-button mt-12 font-weight-bold d-flex text-capitalize rounded-pill mx-auto">Home</v-btn>
            </v-card>
        </div>
    </v-app>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter()

const redirectHome = () => {
    router.push("/home")
}
</script>

<style scoped>
.card-size {
    width: 500px;
    height: 450px;
}

.font-button {
    font-size: 20px !important;

}
</style>

