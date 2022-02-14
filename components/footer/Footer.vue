<template>
  <div>
    <v-row
      no-gutters
      :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
    >
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <h1 class="body-2 lite_gray--text">Terms of Service</h1>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        :class="$vuetify.breakpoint.smAndDown ? 'my-5' : ''"
      >
        <h1 class="body-2 primary--text text-center font-weight-bold">
          © 2022 Stoned Ape Club. All rights reserved.
        </h1>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <div
          class="d-flex"
          :class="
            $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'
          "
        >
          <div v-for="(item, i) in socialMedia" :key="i">
            <a :href="item.link" target="_blank">
              <img :src="item.icon" class="ml-5" />
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface SocialMediaInterface {
  title: string
  link: string
  icon: string
}
@Component
export default class Footer extends Vue {
  socialMedia: SocialMediaInterface[] = [
    {
      title: 'Open Sea',
      link: '/',
      icon: '/icon/open-sea.svg',
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/stonedapesnft',
      icon: '/icon/twitter.svg',
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/stonedapeclubNFT',
      icon: '/icon/instagram.svg',
    },
    {
      title: 'Discord',
      link: 'https://discord.gg/stonedapeclub',
      icon: '/icon/Discord.svg',
    },
  ]
}
</script>
