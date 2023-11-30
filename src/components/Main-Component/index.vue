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
            <v-col cols="4" class="">
              <v-col class="pa-0">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    image="../../assets/img/playlist-icon/house-of-ballons.png"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2">
                    House Of Ballons
                  </p>
                </v-btn>
              </v-col>
              <v-col class="pa-0 mt-4">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    image="../../assets/img/playlist-icon/live-at-sofi-stadium.png"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2">
                    Live at Sofi Stadium
                  </p>
                </v-btn>
              </v-col>
            </v-col>
            <v-col cols="4" class="">
              <v-col class="pa-0">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    image="../../assets/img/playlist-icon/the-neighbourhood-wiped-out.png"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2">Wiped Out!</p>
                </v-btn>
              </v-col>
              <v-col class="pa-0 mt-4">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    image="../../assets/img/playlist-icon/utopia.png"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2">Utopia</p>
                </v-btn>
              </v-col>
            </v-col>
            <v-col cols="4" class="">
              <v-col class="pa-0">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    image="../../assets/img/playlist-icon/heroes-&-villains.png"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2">
                    Heroes & Villains
                  </p>
                </v-btn>
              </v-col>
              <v-col class="pa-0 mt-4">
                <v-btn
                  :block="true"
                  class="d-flex justify-start text-capitalize"
                  size="64"
                  color="#121212"
                >
                  <v-avatar
                    class="rounded-ts rounded-bs"
                    image="../../assets/img/playlist-icon/chase-atlantic.png"
                    rounded="0"
                    size="64"
                  ></v-avatar>
                  <p class="text-body-1 font-weight-bold ml-2">
                    Chase Atlantic
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
</script>