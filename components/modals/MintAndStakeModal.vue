<template>
  <div>
    <v-dialog
      v-model="dialog"
      class="rounded-0"
      width="513"
      :persistent="ifMinting"
      @click:outside="clickOutsideDialog()"
    >
      <v-card tile color="dark_gray" class="text-center pa-12">
        <div v-if="isMinting" class="my-5">
          <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <h1 class="headline mt-5">MINTING...</h1>
        </div>
        <div v-else-if="isMintingAndStaking" class="my-5">
          <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <h1 class="headline mt-5">MINTING AND STAKING...</h1>
        </div>
        <div v-else>
          <h1 class="headline primary--text">REMINDER</h1>
          <h2 class="body-2 lite_gray--text">
            You can claim the $GREASE on staked BACON at anytime
          </h2>
          <h2 class="body-2 lite_gray--text my-5 mx-6">
            <span class="primary--text font-weight-bold">However</span> you
            cannot remove a BACON from the PAN for 2 days after staking it.
          </h2>
          <v-btn
            tile
            depressed
            block
            height="40"
            :ripple="false"
            color="primary"
            class="white--text text-none"
          >
            MINT AND STAKE
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class MintAndStakeModal extends Vue {
  @Prop({ default: false }) mintAndStakeDialog!: boolean
  @Prop({ default: false }) close!: boolean

  isMinting: boolean = false
  isMintingAndStaking: boolean = false

  get dialog(): boolean {
    return this.mintAndStakeDialog
  }

  set dialog(val: boolean) {
    this.$emit('close', val)
  }

  get ifMinting(): boolean {
    if (this.isMinting) {
      return true
    } else if (this.isMintingAndStaking) {
      return true
    }
    return false
  }

  // Check if minting or staking (for persistent dialog)
  clickOutsideDialog(): void {
    if (!this.isMinting && !this.isMintingAndStaking) {
      this.dialog = false
    }
  }
}
</script>

<style></style>
