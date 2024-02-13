import { BrowserRouter } from 'react-router-dom'

import { SnackProvider } from './contexts/SnackContexts'
import { AppRoutes } from './routes'

import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { Theme } from './styles/Theme'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
