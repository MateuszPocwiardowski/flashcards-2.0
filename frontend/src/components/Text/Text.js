import { Typography } from '@mui/material'

export default function Text({ as, sx, children }) {
	return (
		<Typography variant='body1' as={as || 'p'} sx={{ m: 1, ...sx }}>
			{children}
		</Typography>
	)
}
