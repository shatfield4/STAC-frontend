<template>
  <v-container fluid class="home__container mx-auto">
    <div :class="$vuetify.breakpoint.xsOnly ? 'px-1' : 'padding-width'">
      <MintStakeAndUnstakeS2 />
    </div>
    <div :class="$vuetify.breakpoint.xsOnly ? 'px-1' : 'padding-width'">
      <CommunityFeatureS2 />
    </div>
    <div :class="$vuetify.breakpoint.xsOnly ? 'px-2 mt-16' : 'padding-width'">
      <Footer />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CommunityFeatureS2, MintStakeAndUnstakeS2 } from '~/components/home'
import { Footer } from '~/components/footer'


@Component({
  components: {
    CommunityFeatureS2,
    Footer,
    MintStakeAndUnstakeS2,
  },
})
export default class Index extends Vue {}
</script>

<style scoped>
.home__container {
  max-width: 1440px;
}
</style>
