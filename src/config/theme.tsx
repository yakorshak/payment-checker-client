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
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  typography: {
    button: {
      fontWeight: 500,
    },
  },
})
export default theme
