import { Button } from '@mui/material'

export default function PrimaryButton({ variant, color, endIcon, id, status, onClick, sx, children }) {
	const clickHandler = () => {
		onClick(id, status)
	}

	return (
		<Button variant={variant} color={color} endIcon={endIcon} onClick={clickHandler} sx={{ ...sx }}>
			{children}
		</Button>
	)
}
