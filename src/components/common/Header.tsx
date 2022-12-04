import { AppBar, Toolbar, Typography } from '@mui/material'
import BaseContainer from '../../layouts/BaseContainer'
import { IHeader } from './types'

const Header = ({ children, ...props }: IHeader) => (
  <AppBar position="absolute" sx={{ boxShadow: 0 }}>
    <BaseContainer>
      <Toolbar disableGutters={true}>
        <Typography style={{ flexGrow: 1, fontWeight: 900 }}>
          Payment Checker
        </Typography>
        {children}
      </Toolbar>
    </BaseContainer>
  </AppBar>
)

export default Header
