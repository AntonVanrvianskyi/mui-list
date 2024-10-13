import { SxProps } from "@mui/material"
import { ReactNode } from "react"
import { Typography } from "@mui/material"

interface BodyProps {
	sx?: SxProps
	children: ReactNode | ReactNode[]
}
export function Body2({ sx, children }: BodyProps) {
	return (
		<Typography variant="body2" sx={sx}>
			{children}
		</Typography>
	)
}

interface TitleProps {
	sx?: SxProps
	text: string
}

export function Title({ sx, text }: TitleProps) {
	return (
		<Typography variant="title" sx={sx}>
			{text}
		</Typography>
	)
}
