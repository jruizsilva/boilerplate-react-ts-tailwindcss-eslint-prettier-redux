import { NavLink } from 'react-router-dom'
import { PrivateRoutes } from '../../models'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setAccessToken } from 'redux/slices/auth/authSlice'

interface Props {
  name?: string
}

export function Navbar(props: Props): JSX.Element {
  const { auth } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    dispatch(setAccessToken('dasdsadasdasds'))
  }
  const handleLogout = () => {
    dispatch(setAccessToken(null))
  }

  return (
    <div className='h-12 bg-slate-100 fixed w-screen'>
      <nav className='flex justify-between items-center container h-full mx-auto'>
        <div>
          <h3>ReactTemplate {auth.accessToken}</h3>
        </div>

        <div className='flex gap-5'>
          <button>
            <NavLink to={PrivateRoutes.DASHBOARD}>Dashboard</NavLink>
          </button>
          <button>
            <NavLink to={PrivateRoutes.CONTACT}>Contact</NavLink>
          </button>
        </div>

        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  )
}
