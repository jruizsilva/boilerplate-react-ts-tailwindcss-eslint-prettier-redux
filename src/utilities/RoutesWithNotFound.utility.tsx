import { Route, Routes } from 'react-router-dom'

interface Props {
  children: JSX.Element[] | JSX.Element
}

export function RoutesWithNotFound ({ children }: Props): JSX.Element {
  return (
    <Routes>
      {children}
      <Route
        path='*'
        element={
          <div className='flex justify-center items-center h-full'>
            <span className='text-2xl'>Page Not Found</span>
          </div>
        }
      />
    </Routes>
  )
}
