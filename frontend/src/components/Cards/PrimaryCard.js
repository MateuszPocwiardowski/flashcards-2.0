import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent'

export default function PrimaryCard({ sx, children }) {
	return (
		<Card sx={{ maxWidth: 500, ...sx }}>
			<CardContent>{children}</CardContent>
		</Card>
	)
}
