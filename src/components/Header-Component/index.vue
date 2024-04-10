<template>
  <header>
    <v-row class="pa-3 pb-0">
      <v-col class="d-flex pt-0 pb-0 mt-2">
        <v-col class="pl-0 pt-0">
          <v-btn color="#121212" size="32" class="ml-2 rounded-circle"
            ><v-icon size="x-large" icon="mdi-chevron-left"></v-icon>
          </v-btn>
          <v-btn color="#121212" size="32" class="ml-2 rounded-circle"
            ><v-icon size="x-large" icon="mdi-chevron-right"></v-icon>
          </v-btn>
          <p
            v-if="greetingGoodMorning()"
            class="mt-5 ml-2 text-h4 font-weight-bold"
          >
            Good Morning
          </p>
          <p
            v-if="greetingGoodAfternoon()"
            class="mt-5 ml-2 text-h4 font-weight-bold"
          >
            Good Afternoon
          </p>
          <p
            v-if="greetingGoodNight()"
            class="mt-5 ml-2 text-h4 font-weight-bold"
          >
            Good Night
          </p>
        </v-col>
        <v-col class="d-flex align-center justify-end">
          <v-btn size="30" color="#0F0F0F" class="rounded-circle mr-3">
            <v-icon class="text-cor" icon="mdi-bell-outline"></v-icon>
          </v-btn>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="#0F0F0F"
                v-bind="props"
                size="55"
                class="mt-1 rounded-circle"
              >
                <v-avatar size="50">
                  <img width="50" :src="profilePic" />
                </v-avatar>
              </v-btn>
            </template>
            <v-list bg-color="#121212" class="mt-5">
              <v-list-item class="pr-16 mr-16"> Account </v-list-item>
              <v-list-item> Profile </v-list-item>
              <v-list-item>Support</v-list-item>
              <v-list-item>Download</v-list-item>
              <v-list-item>Settings</v-list-item>
              <v-divider></v-divider>
              <v-list-item> Logout </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-col>
    </v-row>
  </header>
</template>

<script lang="ts" setup>

const props = defineProps(["playlist","profilePic"])

const greetingGoodMorning = () => {
  return new Date().getHours() < 12 ? true : false;
};

const greetingGoodAfternoon = () => {
  return new Date().getHours() > 12 ? true : false;
};

const greetingGoodNight = () => {
  return new Date().getHours() >= 18 ? true : false;
};
</script>
