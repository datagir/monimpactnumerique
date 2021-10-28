import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'fonts/fonts.css'
import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import SearchProvider from 'components/providers/SearchProvider'
import CO2EModal from 'components/modals/CO2EModal'
import InstallInstructionsModal from 'components/modals/InstallInstructionsModal'
import PerimetreModal from 'components/modals/PerimetreModal'
import Web from 'components/layout/Web'
import Usages from 'views/Usages'

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
          <StyleProvider>
            <UXProvider>
              <GlobalStyle />
              <ModalProvider>
                <SearchProvider>
                  <Web>
                    <Switch>
                      <Route>
                        <Usages />
                      </Route>
                    </Switch>
                  </Web>
                  <CO2EModal />
                  <InstallInstructionsModal />
                  <PerimetreModal />
                </SearchProvider>
              </ModalProvider>
            </UXProvider>
          </StyleProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
