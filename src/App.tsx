import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Container } from './components'
import { Navbar } from './components/Navbar'
import { PrivateRoutes } from './models'
import { RoutesWithNotFound } from './utilities'

function App (): JSX.Element {
  console.log('hola')

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Container>
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          </RoutesWithNotFound>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
