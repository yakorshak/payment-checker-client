import { Container } from '@mui/material'

const BaseContainer = ({ children }: any) => {
  return (
    <Container
      maxWidth="md"
      style={{
        padding: 0,
      }}
    >
      {children}
    </Container>
  )
}

export default BaseContainer
