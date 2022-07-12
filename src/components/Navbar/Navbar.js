import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
	return (
		<Box>
			<AppBar position='fixed' sx={{ top: 0, bottom: 'auto' }}>
				<Toolbar>
					<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					{/* <Button color='inherit'>Login</Button> */}
				</Toolbar>
			</AppBar>
		</Box>
	)
}
