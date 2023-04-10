import styled from '@emotion/styled'
import Box, { BoxProps } from '@mui/material/Box'

const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',

  // For V1
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // For V2
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative',
  },
}))

const BlankLayout = ({ children }: any) => (
  <BlankLayoutWrapper className="layout-wrapper">
    <Box
      className="app-content"
      sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
    >
      {children}
    </Box>
  </BlankLayoutWrapper>
)

export default BlankLayout
