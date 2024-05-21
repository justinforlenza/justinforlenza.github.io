interface DarkModeStore {
  init: () => void
  on: boolean
  toggle: () => void
}

document.addEventListener('alpine:init', () => {
  window.Alpine.store('darkMode', {
    init() {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const existingStore = window.localStorage.getItem('color-mode')

      this.on = existingStore === null ? prefersDarkMode : existingStore === 'dark'
    },

    on: false,

    toggle() {
      this.on = !this.on

      window.localStorage.setItem('color-mode', this.on ? 'dark' : 'light')
    }
  } satisfies DarkModeStore)
})