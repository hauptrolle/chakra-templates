interface Props {
  children: React.ReactNode
}

const AppLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default AppLayout
