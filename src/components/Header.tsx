import { AppBar, Button, Toolbar, Typography } from '@mui/material'

const Header = (props: any) => (
  <AppBar position="static" sx={{ boxShadow: 0 }}>
    <Toolbar disableGutters={true}>
      <Typography style={{ flexGrow: 1, fontWeight: 900 }}>
        Payment Checker
      </Typography>
      <Button
        color="secondary"
        size="medium"
        variant="text"
        sx={{ mr: '20px' }}
      >
        Join as a company
      </Button>
      <Button color="secondary" size="medium" variant="outlined">
        Sign in
      </Button>
    </Toolbar>
  </AppBar>
)

export default Header
