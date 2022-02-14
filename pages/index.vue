<template>
  <v-container fluid class="home__container mx-auto">
    <div :class="$vuetify.breakpoint.xsOnly ? 'px-1' : 'padding-width'">
      <MintStakeAndUnstake />
    </div>
    <div :class="$vuetify.breakpoint.xsOnly ? 'px-1' : 'padding-width'">
      <CommunityFeature />
    </div>
    <div :class="$vuetify.breakpoint.xsOnly ? 'px-2 mt-16' : 'padding-width'">
      <Footer />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CommunityFeature, MintStakeAndUnstake } from '~/components/home'
import { Footer } from '~/components/footer'

@Component({
  components: {
    CommunityFeature,
    Footer,
    MintStakeAndUnstake,
  },
})
export default class Index extends Vue {}
</script>

<style scoped>
.home__container {
  max-width: 1440px;
}
</style>
