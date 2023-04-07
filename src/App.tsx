import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Navbar, Container } from 'components'
import { PrivateRoutes } from 'models'
import { RoutesWithNotFound } from 'utilities'
import { Provider } from 'react-redux'
import { persistor, store } from 'redux/store'
import { DashboardPage, ContactPage } from 'pages'
import { PersistGate } from 'redux-persist/integration/react'

function App(): JSX.Element {
  console.log('hola')

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Container>
              <Suspense>
                <RoutesWithNotFound>
                  <Route
                    path='/'
                    element={
                      <Navigate to={PrivateRoutes.DASHBOARD} />
                    }
                  />
                  <Route
                    path={PrivateRoutes.DASHBOARD}
                    element={<DashboardPage />}
                  />
                  <Route
                    path={PrivateRoutes.CONTACT}
                    element={<ContactPage />}
                  />
                </RoutesWithNotFound>
              </Suspense>
            </Container>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
