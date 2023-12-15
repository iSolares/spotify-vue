<template>
    <v-app>
        <div class="d-flex flex-wrap h-100">
            <div class="color-background h-100 lat-green">
                <p class="d-flex justify-center text-black font-weight-bold mt-16 pt-16 ml-6 text-h3">Join now to start
                    enjoying your favorite music</p>
            </div>
            <div class="d-flex lat-white bg-black justify-center ">
                <v-row class="d-flex h-75">
                    <v-col class="pa-0">
                        <v-col>
                            <v-img class="d-flex" :height="450" src="../../assets/img/logo-name-spotify.png"></v-img>
                        </v-col>
                        <v-col cols="3" class="d-flex mx-auto justify-center col-size align-end">
                            <v-btn color="#1ed760" size="80" @click="login()" :block="true" class="text-black text-h5 rounded-pill mb-10">
                                Entrar com Spotify
                            </v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const clientId = ref("fed9d0d38d384a438545f78d75e0e5a7")
const scopes = ref("playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public")
const redirectUri = ref("http://localhost:3000/home")
    const login = () => {
        location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId.value}&scope=${scopes.value}&redirect_uri=${redirectUri.value}`
    }
</script>
<style scoped>
.color-background {
    background-color: #1ed760;
}

.lat-green {
    width: 35%;
}

.lat-white {
    width: 65%;
}
.col-size{
    height: 65%;
}

</style>

