<template>
  <v-col cols="auto" class="pr-0 size-lat">
    <v-card
      class="d-flex ma-2 rounded-lg pa-2 size-home-search"
      color="#121212"
    >
      <aside class="d-flex flex-column pa-0">
        <v-row>
          <v-col class="d-flex ml-3 mt-1 pb-0">
            <v-btn
              flat
              variant="plain"
              color="#121212"
              class="text-capitalize pl-0 text-body-1 text-cor font-weight-bold"
              ><v-icon icon="mdi-home-outline" class="mr-3" size="35"></v-icon
              >Home</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ml-3">
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
    <v-card
      class="align-center ma-2 rounded-lg pa-2 size-library"
      color="#121212"
    >
      <aside class="d-flex flex-column pa-0">
        <v-row class="h-100">
          <v-col class="d-flex ml-2 mt-1 pt-2">
            <v-btn
              flat
              color="#121212"
              variant="plain"
              class="text-capitalize pl-0 text-body-1 ml-1 text-cor font-weight-bold"
              ><v-icon class="mr-3" icon="mdi-playlist-music" size="30"></v-icon
              >Library</v-btn
            >
          </v-col>
          <v-col class="d-flex pt-2 flex-row-reverse text-cor">
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
        <v-row>
          <v-col class="py-0">
            <v-btn
              flat
              color="#232323"
              size="small"
              class="text-capitalize rounded-pill ml-2 mr-3"
              >Playlist</v-btn
            >
            <v-btn
              flat
              color="#232323"
              size="small"
              class="text-capitalize rounded-pill mr-3"
              >Artists</v-btn
            >
            <v-btn
              flat
              color="#232323"
              size="small"
              class="text-capitalize rounded-pill"
              >Albums</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex pt-0 pb-1">
            <v-col cols="auto">
              <v-btn
                flat
                variant="plain"
                color="#121212"
                size="30"
                class="pa-0 rounded-circle"
              >
                <v-icon icon="mdi-magnify" size="25" class="text-cor pa-0">
                </v-icon
              ></v-btn>
            </v-col>
            <v-col class="d-flex flex-row-reverse S">
              <v-btn
                flat
                variant="plain"
                color="#121212"
                class="pa-0 text-capitalize text-cor"
                >Recent<v-icon
                  class="ml-1"
                  icon="mdi-format-list-bulleted"
                ></v-icon>
              </v-btn>
            </v-col>
          </v-col>
        </v-row>
        <v-row class="pa-3 pt-0 mt-0 d-flex">
          <v-col cols="12" class="pa-0" >
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/house-of-ballons.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 d-flex h-100 flex-column">
                <v-col class="pa-0 pl-0 mt-3"> 
                  <p class="ffont-weight-bold d-flex justify-start mb-1 ml-2">House Of Ballons</p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    Playlist • Solares
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/heroes-&-villains.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 d-flex h-100 flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">Heroes & Villains</p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    Playlist • Solares
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/chase-atlantic.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 d-flex h-100 flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">Chase Atlantic</p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    Playlist • Solares
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/the-neighbourhood-wiped-out.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 d-flex h-100 flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">
                    Wiped Out!
                  </p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    Playlist •  
                  </p>
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    The Neighbourhood  
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/live-at-sofi-stadium.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 d-flex h-100 flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">Live At Sofi Stadium</p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    Playlist • The Weeknd
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/utopia.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 d-flex h-100 flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">
                    Utopia
                  </p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library"
                  >
                    Playlist • Travis Scott
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/currents.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 h-100 d-flex flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">
                    Currents
                  </p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                    class="ml-2 d-flex color-subtitle justify-start size-font-library">
                    Playlist • Tame Impala
                  </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn
              :block="true"
              flat
              class="d-flex justify-start text-capitalize"
              size="65"
              color="#121212"
            >
              <v-avatar
                class="rounded ml-2"
                image="../../assets/img/playlist-icon/twilight-zone.png"
                size="50"
              ></v-avatar>
              <v-col class="pa-0 h-100 d-flex flex-column">
                <v-col class="pa-0 pl-0 mt-3">
                  <p class="font-weight-bold d-flex justify-start mb-1 ml-2">
                    Twilight Zone
                  </p>
                </v-col>
                <v-col class="pt-0 pl-0">
                  <p
                  class="ml-2 d-flex color-subtitle justify-start size-font-library"
                >
                  Playlist • Aaron Hibell
                </p>
                </v-col>
              </v-col>
            </v-btn>
          </v-col>
        </v-row>
      </aside>
    </v-card>
  </v-col>
</template>
<style scoped>
.size-font-library {
  font-size: 0.8rem;
}

.size-home-search {
  height: 13%;
  width: 93.2%;
}

.size-library {
  height: 76.1%;
  width: 93.2%;
}

.color-subtitle {
  color: #b6b6b6;
}

.size-lat {
  height: 400%;
  width: 16%;
}
</style>
