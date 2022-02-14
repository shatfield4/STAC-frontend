export interface AttributeInterface {
  [key: string]: string | number
}

export interface Metadata {
  attributes: AttributeInterface[]
  description: string
  external_url: string
  image: string
  name: string
}

export interface GetStakedTokensResponse {
  readonly tokenId: number
  readonly mintType: string
  readonly ownerAddress: string
  readonly blockTimestamp: number
}

export interface GetGameStatusResponse {
  readonly baconsMinted: number
  readonly baconsStaked: number
  readonly baconsStolen: number
  readonly copsMinted: number
  readonly copsStaked: number
  readonly copsStolen: number
}
