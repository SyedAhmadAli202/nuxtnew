import colors from 'vuetify/lib/util/colors'

let darkMode = true
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || true
}

/** !IMPORTANT
 If you change the palette bellow,
don't forget to update /saas-theme/components/Testimonials/Testimonials.vue on const palette as well.
Make sure the const palette has same value as this const palette bellow
**/

const palette = {
  deepBlue: {
    primary: '#080A3E', // primary main
    primarylight: colors.indigo.lighten5, // primary light
    primarydark: colors.indigo.darken3, // primary dark
    secondary: '#001C7D', // secondary main
    secondarylight: colors.lightBlue.lighten5, // secondary light
    secondarydark: '#11309a', // secondary dark
    anchor: colors.indigo.base, // link
    contrast: colors.white
  }
}

export const theme = {
  ...palette.deepBlue
}

export default {
  rtl: true,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
