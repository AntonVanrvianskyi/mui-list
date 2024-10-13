import { Box, Button, useTheme } from "@mui/material"
import { flexMixin } from "../../mixins"

interface Props {
	textLeftSide: string
	textRightSide: string
	activeStep: boolean
	toggleFunction: () => void
}

function ToggleButton({
	textLeftSide,
	toggleFunction,
	textRightSide,
	activeStep,
}: Props) {
	const theme = useTheme()
	const animationWidth = activeStep ? "-55%" : "55%"
	return (
		<Box
			sx={{
				...flexMixin({ ai: "center" }),
				gap: 1,
				width: 200,
				borderRadius: "11px",
				border: "1px solid",
				borderColor: theme.palette.bgColor.light,
				boxSizing: "border-box",
				p: 0.5,
				position: "relative",

				"& .MuiButtonBase-root": {
					width: "100%",
					borderRadius: "11px",
					textTransform: "none",
					color: theme.palette.white.main,
				},
			}}
		>
			<Box
				sx={{
					position: "absolute",
					background: activeStep
						? theme.palette.bgColor.lightGray
						: theme.palette.bgColor.lightGray,
					width: "45%",
					height: "80%",
					borderRadius: "11px",
					transition: "all .4s ease",
					transform: `translateX(${animationWidth})`,
				}}
			/>
			<Button onClick={toggleFunction}>{textLeftSide}</Button>
			<Button onClick={toggleFunction}>{textRightSide}</Button>
		</Box>
	)
}

export default ToggleButton
