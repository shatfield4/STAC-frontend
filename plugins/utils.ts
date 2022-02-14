export default (ctx: any, inject: any): void => {
  inject('utils', {
    /**
     * Abbreviate given number
     * 10000.25 => 10.25K
     *
     * @param   {number}  value
     *
     * @return  {string}
     */
    abbreviateNumber(value: number): string {
      return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        notation: 'compact',
        compactDisplay: 'short',
      }).format(value)
    },
    /**
     * Copy text to clipboard
     *
     * @param {string} text
     *
     * @return  {void}
     */
    copyToClipboard(text: string): void {
      const el = document.createElement('textarea')
      el.addEventListener('focusin', (e) => e.stopPropagation())
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
    /**
     * Format number in currency USD
     * 10234.25 => 10,234.25
     *
     * @param   {number}  value
     *
     * @return  {string}
     */
    currencyFormat(value: number): string {
      return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },
  })
}
