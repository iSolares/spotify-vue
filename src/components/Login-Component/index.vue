<template>
    <v-app>
        <div class="d-flex flex-wrap h-100">
            <div class="color-background h-100 lat-green">
                <p class="d-flex justify-center text-white font-weight-bold mt-16 pt-16 ml-6 text-h3">Join now to start
                    enjoying your favorite music</p>
            </div>
            <div class="d-flex lat-white justify-center ">
                <v-row class="d-flex h-75">
                    <v-col>
                        <v-col >
                            <v-img class="d-flex" :height="450" src="../../assets/img/logo-name-spotify.png"></v-img>
                        </v-col>
                        <v-col cols="3" class="d-flex mx-auto justify-center col-size align-end">
                            <v-btn color="#1ed760" size="80" :block="true" class="text-white text-h5 rounded-pill mb-10">
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

