import * as React from 'react'
import '@radix-ui/themes/styles.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'
import { Theme } from '@radix-ui/themes'
import * as ReactDOM from 'react-dom/client'

import '#/index.css'
import App from '#/App.tsx'

const root = document.querySelector('div#root')
if (!root) throw new Error('Root element not found')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Theme appearance='light' scaling='110%'>
      <App />
    </Theme>
  </React.StrictMode>
)
