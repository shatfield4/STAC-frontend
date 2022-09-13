import { ethers } from 'ethers'
import { APIResponseInterface } from '~/api/repository.types'
import { GetGameStatusResponse, GetStakedTokensResponse } from '~/api/v1/nft'

declare module 'vue/types/vue' {
  interface Vue {
    $nftRepository: {
      GetStakedTokens(
        ownerAddress: string
      ): Promise<APIResponseInterface<GetStakedTokensResponse[]>>

      GetStakedTokensV2(
        ownerAddress: string
      ): Promise<APIResponseInterface<GetStakedTokensResponse[]>>
      
      GetGameStatus(): Promise<APIResponseInterface<GetGameStatusResponse>>
    }

    $utils: {
      abbreviateNumber(value: number): string
      copyToClipboard(text: string): void
      currencyFormat(value: number): string
    }

    $web3: {
      getWeb3Provider(): ethers.providers.Web3Provider
      getJsonRPCProvider(): ethers.providers.JsonRpcProvider
      getBaconContract(jsonRPCProvider?: boolean): ethers.Contract
      getBurnGameContract(jsonRPCProvider?: boolean): ethers.Contract
      getGreaseContract(jsonRPCProvider?: boolean): ethers.Contract
      getTheFryingPanContract(jsonRPCProvider?: boolean): ethers.Contract
      getTheFryingPanContractV2(jsonRPCProvider?: boolean): ethers.Contract
      initWeb3Provider(
        provider:
          | ethers.providers.ExternalProvider
          | ethers.providers.JsonRpcFetchFunc
      ): void
      initJsonRPCProvider(provider: string): void
      initBaconContract(
        address: string,
        abi: ethers.ContractInterface,
        web3Signer: ethers.Signer,
        jsonRPCSigner: ethers.Signer
      ): void
      initBurnGameContract(
        address: string,
        abi: ethers.ContractInterface,
        web3Signer: ethers.Signer,
        jsonRPCSigner: ethers.Signer
      ): void
      initGreaseContract(
        address: string,
        abi: ethers.ContractInterface,
        web3Signer: ethers.Signer,
        jsonRPCSigner: ethers.Signer
      ): void
      initTheFryingPanContract(
        address: string,
        abi: ethers.ContractInterface,
        web3Signer: ethers.Signer,
        jsonRPCSigner: ethers.Signer
      ): void
      initTheFryingPanContractV2(
        address: string,
        abi: ethers.ContractInterface,
        web3Signer: ethers.Signer,
        jsonRPCSigner: ethers.Signer
      ): void
    }
  }
}
