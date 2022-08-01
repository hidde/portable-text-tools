import React from 'react'

const MaterialDesignSubscript = React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    style: {
      width: '1em',
      height: '1em',
      color: 'inherit',
      fontSize: '100%',
      verticalAlign: 'middle',
    },
  },
  React.createElement('path', {
    fill: 'currentColor',
    d: 'M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z',
  })
)

/**
 * @param {Object} [options = {}] - Options for the annotation
 * @param {String} [options.title = "Sub"] - Title for the decorator
 * @param {String} [options.value = "sub"] - Value of the decorator
 * @param {ReactElement} [options.icon = Material Design “Subscript” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "sub"] - Portable Text renderer
 */
function sub(options = {}) {
  const icon = options.icon || MaterialDesignSubscript
  const render = options.Component || 'sub'

  return {
    title: options.title || 'Sub',
    value: options.value || 'sub',
    blockEditor: { icon, render },
  }
}

export default sub
