import { NavLink } from 'react-router-dom'
import { PrivateRoutes } from '../../models'

interface Props {
  name?: string
}

export function Navbar(props: Props): JSX.Element {
  return (
    <div className='h-12 bg-slate-100 fixed w-screen'>
      <nav className='flex justify-between items-center container h-full mx-auto'>
        <div>
          <h3>ReactTemplate</h3>
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
          <button>Login</button>
          <button>Logout</button>
        </div>
      </nav>
    </div>
  )
}
