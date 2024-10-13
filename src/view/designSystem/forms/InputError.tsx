import { useTheme } from "@mui/material/styles"
import FormHelperText from "@mui/material/FormHelperText"

type InputErrorProps = {
	error?: string
}

function InputError({ error }: InputErrorProps) {
	const theme = useTheme()

	return (
		<>
			<FormHelperText
				error
				sx={{
					background: theme.palette.error.main,
					color: `${theme.palette.white.main} !important`,
					maxWidth: "100%",
					width: "max-content",
					textAlign: "center",
					padding: theme.spacing(0, 1),
					marginLeft: 0,
					borderRadius: "8px",
					position: "absolute",
					bottom: 0,
					left: "50%",
					transform: "translateX(-50%)",
				}}
			>
				{error}
			</FormHelperText>
		</>
	)
}

export default InputError
