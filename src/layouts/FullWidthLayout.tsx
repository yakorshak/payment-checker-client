import { Container } from '@mui/material'
import { IFullWidthLayout } from './types'

const FullWidthLayout = ({ children, ...props }: IFullWidthLayout) => {
  const { backgroundColor, height } = props
  return (
    <Container
      style={{
        maxWidth: '100vw',
        height,
        backgroundColor,
        padding: 0,
      }}
    >
      {children}
    </Container>
  )
}
export default FullWidthLayout
