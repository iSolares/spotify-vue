<template>
  <div class="d-flex h-100 bg-black">
    <v-row class="h-25">
      <v-col cols="3">
        <v-card class="d-flex ma-2 pa-2 size-home-search" color="#121212">
          <aside class="d-flex flex-column pa-0">
            <v-row>
              <v-col class="d-flex ml-2 mt-1 pb-0">
                <v-btn
                  flat
                  variant="plain"
                  color="#121212"
                  class="text-capitalize pl-0 text-body-1 text-cor font-weight-bold"
                  ><v-icon
                    icon="mdi-home-outline"
                    class="mr-3"
                    size="35"
                  ></v-icon
                  >Home</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col class="ml-2">
                <v-btn
                  flat
                  variant="plain"
                  color="#121212"
                  class="text-capitalize pl-0 text-cor text-body-1"
                  ><v-icon
                    icon="mdi-magnify"
                    size="35"
                    class="mr-3 my-auto"
                  ></v-icon
                  >Search</v-btn
                >
              </v-col>
            </v-row>
          </aside>
        </v-card>
        <v-card class="align-center ma-2 pa-2 size-library" color="#121212">
          <aside class="d-flex flex-column pa-0">
            <v-row class="h-100">
              <v-col class="d-flex ml-2 mt-1 pb-0">
                <v-btn
                  flat
                  color="#121212"
                  variant="plain"
                  class="text-capitalize pl-0 text-body-1 text-cor font-weight-bold"
                  ><v-icon
                    class="mr-3"
                    icon="mdi-playlist-music"
                    size="30"
                  ></v-icon
                  >Library</v-btn
                >
              </v-col>
              <v-col class="d-flex flex-row-reverse text-cor">
                <v-btn
                  color="#121212"
                  flat
                  class="text-cor"
                  variant="plain"
                  icon="mdi-arrow-right"
                ></v-btn
                ><v-btn
                  color="#121212"
                  variant="plain"
                  flat
                  class="text-cor"
                  icon="mdi-plus"
                ></v-btn>
              </v-col>
            </v-row>
          </aside>
        </v-card>
      </v-col>
      <v-row>
        <v-col class="d-flex pl-0 h-50 mt-3">
          <v-card class="ma-2 pa-2 size-main background-main" color="#121212">
            <aside class="d-flex flex-column pa-0"></aside>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
//
</script>

<style scoped>
.size-home-search {
  height: 13vh;
  width: 47vh;
}
.size-library {
  height: 75vh;
  width: 47vh;
}

.size-main {
  height: 88.8vh;
  width: 98%;
}
.background-main {
  background-image: linear-gradient(grey, 10%, #121212 40%);
}

.text-cor {
  color: #b3b3b3 !important;
}
</style>
