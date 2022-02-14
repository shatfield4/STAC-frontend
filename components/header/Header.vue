<template>
  <div>
    <v-container
      fluid
      class="header__container text-center"
      :class="$vuetify.breakpoint.xsOnly ? 'px-0' : 'py-1 '"
    >
      <v-app-bar
        height="76"
        flat
        color="transparent"
        class="my-0"
        :class="$vuetify.breakpoint.xsOnly ? '' : 'px-10'"
      >
        <a href="https://www.stonedapeclub.com" class="pt-2">
          <img
            src="/logo/grand-theft-bacon-logo.png"
            lazy-src="/logo/grand-theft-bacon-logo.png"
            alt="Grand Theft Bacon Logo"
            width="250"
            height="62"
          />
        </a>
        <div v-if="$vuetify.breakpoint.mdAndUp" class="ml-5">
          <v-btn
            x-large
            text
            class="text-capitalized"
            href="https://www.stonedapeclub.com"
            target="_blank"
          >
            Whitepaper
          </v-btn>
          <!-- <v-btn
            x-large
            text
            class="text-capitalized text-decoration-underline"
          >
            back to grandtheftbacon.com
          </v-btn> -->
        </div>
        <v-spacer></v-spacer>
        <div class="ml-10">
          <ConnectWallet
            component="header"
            :height="'44'"
            :width="'159'"
            :tile="true"
            :css="'body-2 text-none primary'"
          />
        </div>
      </v-app-bar>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ConnectWallet } from '~/components/modals'

interface Item {
  name: string
  title: string
  to: string
}

@Component({
  components: {
    ConnectWallet,
  },
})
export default class Header extends Vue {
  //  * Data
  pages: Item[] = [
    {
      name: 'index',
      title: 'Home',
      to: '/',
    },
    {
      name: 'users',
      title: 'Users',
      to: '/users',
    },
    {
      name: 'about',
      title: 'About',
      to: '/about',
    },
  ]

  // * * Computed
  /**
   * return currect active page
   */
  get activePage(): string {
    if (this.$route?.name === undefined || this.$route?.name === null) {
      return ''
    }
    if (this.$route?.name === 'users-id') {
      return 'users'
    }
    return this.$route?.name
  }

  // * * Methods
  /**
   * return to selected page/route
   * @param Item     page item object
   */
  onPageClick(item: Item): void {
    this.$router.push({ name: item.name })
  }
}
</script>

<style scoped>
.header__container {
  max-width: 1440px;
}
</style>
