import React from 'react'
import ReactDOM from 'react-dom/client'
import * as StyledReset from 'styled-reset'

import * as App from 'App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledReset.Reset />
    <App.Component />
  </React.StrictMode>,
)
