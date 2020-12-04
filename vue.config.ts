import { ProjectOptions } from '@vue/cli-service'

const config: ProjectOptions = {
  publicPath: '/ror2-item-browser/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/_variables.scss";`,
      },
    },
  },
}

export default config
