import { AppBar, makeStyles, Toolbar, Typography } from '@mui/material'

import BaseContainer from '../../layouts/BaseContainer'
import { CustomizedLink } from './CustomizedLink'
import { IHeader } from './types'

const Header = ({ children, ...props }: IHeader) => (
  <AppBar position="absolute" sx={{ boxShadow: 0 }}>
    <BaseContainer>
      <Toolbar disableGutters={true}>
        <Typography style={{ flexGrow: 1, fontWeight: 900 }}>
          <CustomizedLink href="/">Payment Checker</CustomizedLink>
        </Typography>
        {children}
      </Toolbar>
    </BaseContainer>
  </AppBar>
)

export default Header
