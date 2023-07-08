interface Props {
  children: React.ReactNode
}

const AppLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang="en">
      {/* eslint-disable-next-line react/no-unknown-property */}
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  )
}

export default AppLayout
