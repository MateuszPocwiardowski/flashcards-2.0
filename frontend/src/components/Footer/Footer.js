import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
	const year = new Date().getFullYear()

	return (
		<Box sx={{ width: '100%' }}>
			<AppBar position='static'>
				<Toolbar sx={{ textAlign: 'center' }}>
					<Typography variant='body1' component='div' sx={{ flexGrow: 1 }}></Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
