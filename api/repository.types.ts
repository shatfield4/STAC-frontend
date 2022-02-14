export interface APIResponseInterface<T> {
  readonly success: boolean
  readonly message: string
  readonly errorCode?: string
  readonly data: T
}

export interface ErrorAPIResponseInterface {
  readonly success: boolean
  readonly message: string
  readonly errorCode?: string
}
