<template>
  <v-row>
    <v-col class="pl-0 mt-3">
      <v-card
        class="ma-2 pa-2 rounded-lg size-main background-main"
        color="#121212"
      >
        <HeaderComponent :profilePic="profilePic" />
        <main>
          <v-row class="pa-3 pb-0">
            <v-col v-for="(item,idx) in recents" :key="idx" cols="4" >
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
const props = defineProps(["profilePic", "recents"])
</script>
