import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes } from './models'
import { RoutesWithNotFound } from './utilities'

function App (): JSX.Element {
  console.log('hola')

  return (
    <>
      <button className='bg-red-900'>
        hola
      </button>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </>
  )
}

export default App
