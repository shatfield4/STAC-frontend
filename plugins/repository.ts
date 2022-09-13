import { NFTRepository } from '~/api/v1/nft'

export default (ctx: any, inject: any) => {
  // dependency injection
  inject('nftRepository', NFTRepository(ctx.$axios, ctx.$axios2))
}
