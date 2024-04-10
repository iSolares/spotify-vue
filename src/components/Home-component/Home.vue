<template>
  <div class="h-100 bg-black">
    <div v-if="isLoading && isLoadingProfilepic">Carrgando...</div>
    <div v-else>
      <v-row class="h-25">
        <SideComponent :playlist="playlist" />
        <MainComponent
          :playlist="playlist"
          :profilePic="profilePic"
          :recents="recents"
        />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideComponent from "@/components/Side-Components/index.vue";
import MainComponent from "@/components/Main-Component/index.vue";
import { ref, watchEffect } from "vue";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

const accessToken = ref("");
const playlist = ref([]);
const clientId: string = "fed9d0d38d384a438545f78d75e0e5a7";
const clientSecret: string = "fd18d068c9b1484c80f70c6e3f0680ed";
const refreshToken = ref("");
const expiresIn = ref("");
const recents = ref();

const { data, isLoading } = useQuery({
  queryKey: ["getSpotifyPlaylist"],
  queryFn: async () => getUserPlaylist(),
});

const { data: profilePic, isLoading: isLoadingProfilepic } = useQuery({
  queryKey: ["getSpotifyProfilePic"],
  queryFn: async () => getProfilePic(),
});

console.log(data);

const getToken = async () => {
  let params = new URLSearchParams(document.location.search);
  let code: string | null = params.get("code");

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
  accessToken.value = res.data.access_token;
  refreshToken.value = res.data.refresh_token;
  setTimeout(() => {
    getRefreshToken();
    localStorage.setItem("userToken", refreshToken.value);
  }, (expiresIn.value = res.data.expires_in));
};

const getRefreshToken = async () => {
  let body = {
    grant_type: "refresh_token",
    refresh_token: refreshToken.value,
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
  accessToken.value = res.data.access_token;
  expiresIn.value = res.data.expires_in;
  refreshToken.value = res.data.refresh_token;
  setTimeout(() => {
    getRefreshToken();
  }, (expiresIn.value = res.data.expires_in));
};

const getUserPlaylist = async () => {
  const res = await axios({
    method: "GET",
    url: "https://api.spotify.com/v1/me/playlists",
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  playlist.value = res.data.items.filter((_, index) => index <= 8);
  recents.value = res.data.items.filter((_, index) => index <= 5);
  return res.data;
};

const getProfilePic = async () => {
  const res = await axios({
    method: "GET",
    url: "https://api.spotify.com/v1/me",
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  return res.data.images[0].url;
};

watchEffect(async () => {
  await getToken();
});
</script>

<style>
.size-main {
  position: absolute;
  height: 87.6%;
  width: 80%;
}

.background-main {
  background-image: linear-gradient(grey, 10%, #121212 40%);
}

.text-cor {
  color: #b3b3b3 !important;
}
</style>
