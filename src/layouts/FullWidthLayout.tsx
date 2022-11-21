import { Container } from '@mui/material'
import { FunctionComponent, ReactNode } from 'react'
import { FullWidthLayoutProps } from './types'

export interface IFullWidthLayout {
  children: ReactNode
  backgroundColor: string
  height?: string
}

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
