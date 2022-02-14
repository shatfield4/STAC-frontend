import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#31AA52',
        accent: '#979797',
        secondary: '#D89B4B',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
      dark: {
        primary: '#31AA52',
        accent: colors.grey.darken3,
        secondary: '#e06338',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        dark_gray: '#151515',
        lite_gray: '#999999',
      },
    },
  },
}
