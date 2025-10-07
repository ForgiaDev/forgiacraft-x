import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ForgiaCraft X',
  description: 'Guida per ForgiaCraft X - Modpack Minecraft',

  // Base path for GitHub Pages (change 'forgiacraft-x' to your repo name if different)
  base: '/forgiacraft-x/',

  // i18n configuration
  locales: {
    root: {
      label: 'Italiano',
      lang: 'it',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guida Generale', link: '/guide' },
          { text: 'Keybinds', link: '/keybinds' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Guida Generale', link: '/guide' },
              { text: 'Guida Keybinds', link: '/keybinds' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'General Guide', link: '/en/guide' },
          { text: 'Keybinds', link: '/en/keybinds' }
        ],
        sidebar: [
          {
            text: 'Guides',
            items: [
              { text: 'General Guide', link: '/en/guide' },
              { text: 'Keybinds Guide', link: '/en/keybinds' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/images/hero-image.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ForgiaDev/forgiacraft-x' }
    ],

    search: {
      provider: 'local'
    }
  }
})
