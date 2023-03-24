interface Props {
  name?: string
}

export function Navbar (props: Props): JSX.Element {
  return (
    <div className='h-12 bg-slate-100 fixed w-screen'>
      <nav className='flex justify-between items-center container h-full mx-auto'>
        <div>
          <h3>ReactTemplate</h3>
        </div>

        <div className='flex gap-5'>
          <button>Dashboard</button>
          <button>Contact</button>
        </div>

        <div>
          <button>Login</button>
          <button>Logout</button>
        </div>
      </nav>
    </div>

  )
}
