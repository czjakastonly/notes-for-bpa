import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '@stonly/design-system'
import Provider from '@stonly/design-system/providers'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
