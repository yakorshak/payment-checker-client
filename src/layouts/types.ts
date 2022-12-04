import { ReactNode } from 'react'

export type FullWidthLayoutProps = {
  children: ReactNode
}

export interface IFullWidthLayout {
  children: ReactNode
  backgroundColor?: string
  height?: string
}
