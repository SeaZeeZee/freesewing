import colors from 'tailwindcss/colors'
const primary = colors.sky['500']

/*
 * See the light theme for an example with inline comments
 */

const rainbow = [
  colors.red['300'],
  colors.orange['300'],
  colors.yellow['300'],
  colors.lime['300'],
  colors.green['300'],
  colors.teal['300'],
  colors.cyan['300'],
  colors.blue['300'],
  colors.indigo['300'],
  colors.violet['300'],
  colors.purple['300'],
]

const spectrum = {}
for (let s = 0; s < 11; s++) {
  spectrum[`--fs-sp-${s}`] = rainbow[s]
  spectrum[`--fs-spf-${s}`] = rainbow[10 - s]
}

const rating = {}
for (let r = 0; r < 5; r++) {
  rating[`--fs-rt-${r}`] = primary
}

export const theme = {
  fontFamily:
    "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif;",
  'base-100': colors.fuchsia['50'],
  'base-200': colors.neutral['200'],
  'base-300': colors.neutral['400'],
  'base-content': colors.neutral['700'],
  primary,
  'primary-focus': colors.sky['400'],
  'primary-content': colors.sky['50'],
  secondary: colors.violet['500'],
  'secondary-focus': colors.violet['400'],
  'secondary-content': colors.violet['50'],
  accent: colors.fuchsia['500'],
  'accent-focus': colors.fuchsia['400'],
  'accent-content': colors.neutral['50'],
  neutral: colors.neutral['900'],
  'neutral-focus': colors.neutral['700'],
  'neutral-content': colors.fuchsia['100'],
  info: colors.pink['400'],
  success: colors.green['600'],
  warning: colors.amber['500'],
  error: colors.red['600'],
  '--theme-gradient': `repeating-linear-gradient(
     90deg,
     ${colors.red[500]},
     ${colors.red[500]} 16.66%,
     ${colors.orange[500]} 16.66%,
     ${colors.orange[500]} 33.33%,
     ${colors.yellow[400]} 33.33%,
     ${colors.yellow[400]} 50%,
     ${colors.green[500]} 50%,
     ${colors.green[500]} 66.66%,
     ${colors.blue[500]} 66.66%,
     ${colors.blue[500]} 83.33%,
     ${colors.violet[500]} 83.33%,
     ${colors.violet[500]} 100%
  )`,
  '--code-background-color': colors.neutral['800'],
  '--code-background-highlight-color': '#313131',
  '--code-border-color': colors.neutral['900'],
  '--code-color': colors.neutral['100'],
  '--code-font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  '--code-border-radius': '0.5rem',
  '--code-border-style': 'solid',
  '--code-border-width': 1,
  '--code-outer-padding': '0 0.5rem',
  '--code-inner-padding': '1rem',
  '--code-color-keyword': colors.pink['400'],
  '--code-font-weight-keyword': 'bold',
  '--code-color-entity': colors.violet['400'],
  '--code-font-weight-entity': 'bold',
  '--code-color-constant': colors.lime['400'],
  '--code-color-string': colors.sky['400'],
  '--code-font-style-string': 'italic',
  '--code-color-variable': colors.indigo['400'],
  '--code-color-comment': colors.neutral['400'],
  '--code-color-tag': colors.green['400'],
  '--code-color-property': 'inherit',
  '--code-font-weight-property': 'bold',
  '--rounded-box': '0.5rem',
  '--rounded-btn': '0.5rem',
  '--rounded-badge': '1.9rem',
  '--animation-btn': '0.25s',
  '--animation-input': '.4s',
  '--padding-card': '2rem',
  '--btn-text-case': 'uppercase',
  '--navbar-padding': '.5rem',
  '--border-btn': '1px',
  '--focus-ring': '2px',
  '--focus-ring-offset': '2px',
  '--pattern-bg': colors.neutral['50'],
  '--pattern-fabric': colors.neutral['700'],
  '--pattern-lining': colors.emerald['500'],
  '--pattern-interfacing': colors.neutral['400'],
  '--pattern-canvas': colors.amber['600'],
  '--pattern-various': colors.red['500'],
  '--pattern-mark': colors.blue['500'],
  '--pattern-contrast': colors.pink['500'],
  '--pattern-note': colors.violet['500'],
  '--pattern-dev-0': colors.red['500'],
  '--pattern-dev-1': colors.green['500'],
  '--pattern-dev-2': colors.blue['500'],
  '--pattern-dev-3': colors.yellow['500'],
  '--pattern-dev-4': colors.pink['500'],
  '--pattern-dev-5': colors.violet['500'],
  '--pattern-dev-6': colors.teal['500'],
  '--pattern-dev-7': colors.neutral['500'],
  '--pattern-text-xs': '0.2rem',
  '--pattern-text-sm': '0.3rem',
  '--pattern-text': '0.4rem',
  '--pattern-text-lg': '0.6rem',
  '--pattern-text-xl': '0.8rem',
  '--pattern-text-2xl': '1.5rem',
  '--pattern-text-3xl': '2rem',
  '--pattern-text-4xl': '3rem',
  '--pattern-scale': '1',
  '--pattern-stroke-xs': '0.2px',
  '--pattern-stroke-sm': '0.4px',
  '--pattern-stroke': '0.7px',
  '--pattern-stroke-lg': '1.3px',
  '--pattern-stroke-xl': '2px',
  '--pattern-stroke-2xl': '4px',
  '--pattern-stroke-3xl': '6px',
  '--pattern-stroke-4xl': '8px',
  stripeTheme: 'stripe',

  /**
   * Add the spectrum and ratings vars last so they can pick up on other ones
   */
  ...spectrum,
  ...rating,
}
