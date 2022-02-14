<template>
  <div
    class="main--container pb-16"
    :class="$vuetify.breakpoint.smAndDown ? 'pt-12' : ''"
  >
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
        <v-card
          flat
          tile
          :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : '561'"
          height="331"
          color="dark_gray"
          class="pa-7"
          :class="$vuetify.breakpoint.mdOnly ? 'mx-auto' : ''"
        >
          <v-row class="fill-height ma-0" align="center" justify="center">
            <div class="d-flex flex-column text-center">
              <div class="mx-auto">
                <v-img src="/icon/locked-icon.png" max-width="69" height="86">
                </v-img>
              </div>
              <div>
                <h1 class="title montserrat--font font-weight-bold">LOCKED</h1>
              </div>
              <div>
                <h2 class="body-1 font-weight-light">
                  Community Selected Feature
                  <span class="primary--text"> #1 </span>
                </h2>
              </div>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7">
        <v-card
          flat
          tile
          :max-width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'"
          height="331"
          color="dark_gray"
          class="pa-7"
          :class="$vuetify.breakpoint.mdAndDown ? 'mt-10' : 'ml-10'"
        >
          <v-row class="fill-height ma-0" align="center" justify="center">
            <div class="d-flex flex-column text-center">
              <div class="mx-auto">
                <v-img src="/icon/locked-icon.png" max-width="69" height="86">
                </v-img>
              </div>
              <div>
                <h1 class="title montserrat--font font-weight-bold">LOCKED</h1>
              </div>
              <div>
                <h2 class="body-1 font-weight-light">
                  Community Selected Feature
                  <span class="primary--text"> #2 </span>
                </h2>
              </div>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CommunityFeature extends Vue {}
</script>

<style></style>
