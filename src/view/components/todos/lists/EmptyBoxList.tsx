import { Box, useTheme } from "@mui/material"
import { Title } from "../../../designSystem/typography"
import { flexMixin } from "../../../designSystem/mixins"

function EmptyBoxList() {
	const theme = useTheme()
	return (
		<Box
			sx={{
				width: "100%",
				height: 400,
				borderRadius: "11px",
				border: "1px solid",
				borderColor: theme.palette.textColor.faded,
                background: theme.palette.bgColor.light,
				...flexMixin({ ai: "center", jc: "center" }),
			}}
		>
			<Title
                sx={{
                    color: theme.palette.white.main
                }}
            text="No todos have been added yet" />
		</Box>
	)
}

export default EmptyBoxList
