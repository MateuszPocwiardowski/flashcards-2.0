import { Button } from '@mui/material'

export default function PrimaryButton({ variant, color, endIcon, onClick, sx, children }) {
	return (
		<Button variant={variant} color={color} endIcon={endIcon} onClick={onClick} sx={{ ...sx }}>
			{children}
		</Button>
	)
}
