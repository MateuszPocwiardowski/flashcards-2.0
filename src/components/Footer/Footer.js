import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import darkTheme from '../../theme/theme'
import { ThemeProvider } from '@mui/material/styles'

export default function Navbar() {
	// eslint-disable-next-line
	const year = new Date().getFullYear()

	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
					<Toolbar sx={{ textAlign: 'center' }}>
						<Typography variant='body1' component='div' sx={{ flexGrow: 1 }}></Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	)
}
