import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import theme from '../../config/theme'

export const CustomizedLink = styled(Link)({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
})

export default function StyledComponents() {
  return <CustomizedLink />
}
