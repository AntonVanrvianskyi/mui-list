import { SxProps } from "@mui/system"
import type { LoadingButtonProps } from "@mui/lab/LoadingButton"
import { useTheme } from "@mui/material/styles"
import LoadingButton from "@mui/lab/LoadingButton"
import { movingGradient, sheen } from "../../frames"

interface Props extends LoadingButtonProps {
	label: string
	sx?: SxProps
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick?: (args: any) => void
}

function ActionButton({ label, sx, onClick, ...props }: Props) {
	const theme = useTheme()

	return (
		<>
			<LoadingButton
				type="submit"
				fullWidth
				disableRipple
				disableFocusRipple
				disableTouchRipple
				disableElevation
				onClick={onClick}
				sx={{
					...sx,
					maxHeight: 64,
					fontSize: "16px",
					fontStyle: "italic",
					textTransform: "capitalize",
					whiteSpace: "nowrap",
					fontWeight: 700,
					width: "100%",
					height: 32,
					borderRadius: "47px",
					lineHeight: "19px",
					color: theme.palette.white.main,
					background: theme.palette.orange32.main,
					border: `2px solid ${theme.palette.orange.main}`,
					position: "relative",
					overflow: "hidden",

					"&:after": {
						content: '""',
						position: "absolute",
						width: 142,
						height: "100%",
						top: 0,
						left: -142,
						background:
							"linear-gradient(-40deg,#ffffff00 0%, #ffffff00 25%, #ffffff 25.1%, #fff 46%, #ffffff00 46.1%, #ffffff00 49%, #ffffff 49.1%, #fff 53.5%, #ffffff00 53.6%, #ffffff00 100%)",
						backgroundSize: "100% 100%",
					},

					"&:hover": {
						color: theme.palette.white.main,
						background: theme.palette.orange.main,

						"&:after": {
							animation: `${sheen} 0.6s ease-in-out forwards`,
						},
					},

					"&:active": {
						color: theme.palette.white.main,
						border: `2px solid ${theme.palette.orange.main}`,
						background: theme.palette.orange64.main,
					},

					"&:disabled": {
						color: theme.palette.white.main,
						border: `2px solid ${theme.palette.orange.main}`,
						opacity: 0.5,
						background: theme.palette.orange32.main,
					},

					"&.MuiLoadingButton-loading": {
						background:
							"linear-gradient(180deg, rgba(255, 176, 103, 0.25) 0%, rgba(255, 120, 45, 0.25) 100%)",

						"&:hover": {
							color: theme.palette.white.main,
							background:
								"linear-gradient(180deg, rgba(255, 176, 103, 0.25) 0%, rgba(255, 120, 45, 0.25) 100%)",
							boxShadow: "none",
							"&:after": {
								animation: `${movingGradient} 0.6s ease-in-out forwards`,
							},
						},

						"&:active": {
							color: theme.palette.white.main,
							border: `2px solid ${theme.palette.orange.main}`,
							background: theme.palette.orange64.main,
						},

						"&:disabled": {
							color: theme.palette.white.main,
							border: `2px solid ${theme.palette.orange.main}`,
							opacity: 0.5,
							background: theme.palette.orange32.main,
						},
					},
				}}
				{...props}
			>
				{label}
			</LoadingButton>
		</>
	)
}

export default ActionButton
