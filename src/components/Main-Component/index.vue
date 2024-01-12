<template>
  <v-row>
    <v-col class="pl-0 mt-3">
      <v-card
        class="ma-2 pa-2 rounded-lg size-main background-main"
        color="#121212"
      >
        <HeaderComponent />
        <main>
          <v-row class="pa-3 pb-0">
            <v-col v-for="(item,idx) in playlist" :key="idx" cols="4" >
              <v-col class="pa-0">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    :image="item.images[0].url"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2 text-wrap text-start">
                    {{ item.name }}
                  </p>
                </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </main>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import HeaderComponent from "@/components/Header-Component/index.vue";
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const accessToken = ref("");
const playlist = ref([])

const getToken = async () => {
  let params = new URLSearchParams(document.location.search);
  let code: string = params.get("code");
  const clientId: string = "fed9d0d38d384a438545f78d75e0e5a7";
  const clientSecret: string = "fd18d068c9b1484c80f70c6e3f0680ed";

  let body = {
    grant_type: "authorization_code",
    code,
    redirect_uri: "http://localhost:3000/home",
    client_id: clientId,
    client_secret: clientSecret,
  };

  const res = await axios({
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: new URLSearchParams(body).toString(),
    headers: {
      Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  accessToken.value = res.data.access_token
};

const getUserPlaylist = async () => {

const res = await axios({
    method: "GET",
    url: "https://api.spotify.com/v1/me/playlists",
    headers: {
    Authorization: `Bearer ${accessToken.value}`
    }  
  })
  playlist.value = res.data.items.filter((_,index) => index <= 5)
    console.log(res.data)
}


onBeforeMount(async()=>{
  await getToken();
  await getUserPlaylist()
})

</script>
