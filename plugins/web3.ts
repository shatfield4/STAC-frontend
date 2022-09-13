import { Context } from '@nuxt/types'
import { ethers } from 'ethers'

export default (ctx: Context, inject: any): void => {
  let baconContract: ethers.Contract
  let greaseContract: ethers.Contract
  let theFryingPanContract: ethers.Contract
  let theFryingPanV2Contract: ethers.Contract
  let burnGameContract: ethers.Contract
  let baconJsonRPCContract: ethers.Contract
  let greaseJsonRPCContract: ethers.Contract
  let theFryingPanJsonRPCContract: ethers.Contract
  let theFryingPanV2JsonRPCContract: ethers.Contract
  let burnGameJsonRPCContract: ethers.Contract
  let web3: ethers.providers.Web3Provider
  let web3JsonRPC: ethers.providers.JsonRpcProvider

  inject('web3', {
    /**
     * Get web3 provider
     *
     * @var {ethers.providers.Web3Provider}
     */
    getWeb3Provider(): ethers.providers.Web3Provider {
      return web3
    },
    /**
     * Get web3 json rpc provider
     *
     * @var {ethers.providers.JsonRpcProvider}
     */
    getJsonRPCProvider(): ethers.providers.JsonRpcProvider {
      return web3JsonRPC
    },
    /**
     * Get Bacon contract instance
     *
     * @var {ethers.Contract}
     */
    getBaconContract(jsonRPCProvider = false): ethers.Contract {
      return jsonRPCProvider ? baconJsonRPCContract : baconContract
    },
    getBurnGameContract(jsonRPCProvider = false): ethers.Contract {
      return jsonRPCProvider ? burnGameJsonRPCContract : burnGameContract
    },
    /**
     * Get Grease contract instance
     *
     * @var {ethers.Contract}
     */
    getGreaseContract(jsonRPCProvider = false): ethers.Contract {
      return jsonRPCProvider ? greaseJsonRPCContract : greaseContract
    },
    /**
     * Get the frying pan contract instance
     *
     * @var {ethers.Contract}
     */
    getTheFryingPanContract(jsonRPCProvider = false): ethers.Contract {
      return jsonRPCProvider
        ? theFryingPanJsonRPCContract
        : theFryingPanContract
    },
      /**
     * Get the frying pan contract instance
     *
     * @var {ethers.Contract}
     */
       getTheFryingPanContractV2(jsonRPCProvider = false): ethers.Contract {
        return jsonRPCProvider
          ? theFryingPanV2JsonRPCContract
          : theFryingPanV2Contract
      },
    /**
     * Initialize web3 provider
     *
     * @return  {ethers.providers.Web3Provider}
     */
    initWeb3Provider(
      provider:
        | ethers.providers.ExternalProvider
        | ethers.providers.JsonRpcFetchFunc
    ): void {
      web3 = new ethers.providers.Web3Provider(provider)
    },
    /**
     * Initialize web3 json rpc
     *
     * @return  {ethers.providers.Web3Provider}
     */
    initJsonRPCProvider(provider: string): void {
      web3JsonRPC = new ethers.providers.JsonRpcProvider(provider)
    },
    /**
     * Create new Bacon contract connection
     *
     * @return  {ethers.Contract}
     */
    initBaconContract(
      address: string,
      abi: ethers.ContractInterface,
      web3Signer: ethers.Signer,
      jsonRPCSigner: ethers.Signer
    ): void {
      baconContract = new ethers.Contract(address, abi, web3Signer)

      if (jsonRPCSigner !== undefined) {
        baconJsonRPCContract = new ethers.Contract(address, abi, jsonRPCSigner)
      }
    },
    initBurnGameContract(
      address: string,
      abi: ethers.ContractInterface,
      web3Signer: ethers.Signer,
      jsonRPCSigner: ethers.Signer
    ): void {
      burnGameContract = new ethers.Contract(address, abi, web3Signer)

      if (jsonRPCSigner !== undefined) {
        burnGameJsonRPCContract = new ethers.Contract(address, abi, jsonRPCSigner)
      }
    },
    /**
     * Create new Grease contract connection
     *
     * @return  {ethers.Contract}
     */
    initGreaseContract(
      address: string,
      abi: ethers.ContractInterface,
      web3Signer: ethers.Signer,
      jsonRPCSigner: ethers.Signer
    ): void {
      greaseContract = new ethers.Contract(address, abi, web3Signer)

      if (jsonRPCSigner !== undefined) {
        greaseJsonRPCContract = new ethers.Contract(address, abi, jsonRPCSigner)
      }
    },
    /**
     * Create new the frying pan contract connection
     *
     * @return  {ethers.Contract}
     */
    initTheFryingPanContract(
      address: string,
      abi: ethers.ContractInterface,
      web3Signer: ethers.Signer,
      jsonRPCSigner: ethers.Signer
    ): void {
      theFryingPanContract = new ethers.Contract(address, abi, web3Signer)

      if (jsonRPCSigner !== undefined) {
        theFryingPanJsonRPCContract = new ethers.Contract(
          address,
          abi,
          jsonRPCSigner
        )
      }
    },

    /**
     * Create new the frying pan contract connection
     *
     * @return  {ethers.Contract}
     */
    initTheFryingPanContractV2(
      address: string,
      abi: ethers.ContractInterface,
      web3Signer: ethers.Signer,
      jsonRPCSigner: ethers.Signer
    ): void {
      
      // try {

      // } catch(err) {
      //   alert(err)
      // }
      theFryingPanV2Contract = new ethers.Contract(address, abi, web3Signer)

      if (jsonRPCSigner !== undefined) {
        theFryingPanV2JsonRPCContract = new ethers.Contract(
          address,
          abi,
          jsonRPCSigner
        )
      }
    },

  })
}
