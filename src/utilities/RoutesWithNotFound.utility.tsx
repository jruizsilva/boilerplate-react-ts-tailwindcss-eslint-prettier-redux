import { Route, Routes } from 'react-router-dom'

interface Props {
  children: JSX.Element[] | JSX.Element
}
export function RoutesWithNotFound ({ children }: Props): JSX.Element {
  return (
    <Routes>
      {children}
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}
