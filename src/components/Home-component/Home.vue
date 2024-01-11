<template>

  <div class="h-100 bg-black">
    <v-row class="h-25">
        <SideComponent />
      <MainComponent />
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import SideComponent from "@/components/Side-Components/index.vue";
import MainComponent from "@/components/Main-Component/index.vue";
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
