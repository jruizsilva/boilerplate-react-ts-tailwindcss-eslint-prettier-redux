interface Props {
  name: string
}

export function NotFound (props: Props): JSX.Element {
  return (
    <>
      <div className='flex justify-center items-center h-full'><span className='text-2xl'>Page Not Found</span></div>
    </>
  )
}
