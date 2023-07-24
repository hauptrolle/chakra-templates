import { InitializeChakra } from '#/components/InitializeChakra'

interface Props {
  children: React.ReactNode
}

const DocumentationLayout = (props: Props) => {
  const { children } = props

  return <InitializeChakra>{children}</InitializeChakra>
}

export default DocumentationLayout
