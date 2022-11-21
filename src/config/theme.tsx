import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0000FF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    button: {
      fontWeight: 500,
    },
  },
})
export default theme
