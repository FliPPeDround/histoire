import { watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { histoireConfig } from './config.js'

export const isDark = useDark({
  valueDark: 'htw-dark',
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: histoireConfig.theme.storeColorScheme ? 'histoire-color-scheme' : null,
})
export const toggleDark = useToggle(isDark)

function applyDarkToControls () {
  window.__hst_controls_dark?.forEach(ref => {
    ref.value = isDark.value
  })
}

watch(isDark, () => {
  applyDarkToControls()
}, {
  immediate: true,
})

window.__hst_controls_dark_ready = () => {
  applyDarkToControls()
}
