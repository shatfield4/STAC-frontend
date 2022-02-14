import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { GetGameStatusResponse, GetStakedTokensResponse } from './nft.types'
import {
  APIResponseInterface,
  ErrorAPIResponseInterface,
} from '~/api/repository.types'

const VERSION: string = `/v1`

export default ($axios: AxiosInstance) => ({
  /**
   * Get staked tokens
   *
   * @param {ownerAddress} string
   *
   * @return  {Promise}
   */
  GetStakedTokens(
    ownerAddress: string
  ): Promise<APIResponseInterface<GetStakedTokensResponse[]>> {
    return $axios
      .get(`${VERSION}/nft/staked-tokens/${ownerAddress}`)
      .then(
        (
          response: AxiosResponse<
            APIResponseInterface<GetStakedTokensResponse[]>
          >
        ) => {
          const { data } = response

          return data
        }
      )
      .catch((error: AxiosError<ErrorAPIResponseInterface>) => {
        const { response } = error
        throw response?.data !== undefined ? response.data : {}
      })
  },
  /**
   * Get game status info
   *
   * @return  {Promise}
   */
  GetGameStatus(): Promise<APIResponseInterface<GetGameStatusResponse>> {
    return $axios
      .get(`${VERSION}/nft/game/status`)
      .then(
        (
          response: AxiosResponse<APIResponseInterface<GetGameStatusResponse>>
        ) => {
          const { data } = response

          return data
        }
      )
      .catch((error: AxiosError<ErrorAPIResponseInterface>) => {
        const { response } = error
        throw response?.data !== undefined ? response.data : {}
      })
  },
})
