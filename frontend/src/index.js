import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1976d2',
		},
	},
})

root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
