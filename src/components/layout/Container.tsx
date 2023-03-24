interface Props {
  children: JSX.Element | JSX.Element[]
}

export function Container ({ children }: Props): JSX.Element {
  return (
    <>
      <div className='bg-slate-900 h-screen text-white'>{children}</div>
    </>
  )
}
