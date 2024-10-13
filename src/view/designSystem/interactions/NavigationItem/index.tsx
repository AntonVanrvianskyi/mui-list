import { useTheme } from "@mui/material"
import { NavLink } from "react-router-dom"
import { Title } from "../../typography"

interface Props {
	to: string
	text: string
}

function NavigationItem({ to, text }: Props) {
	const theme = useTheme()

	return (
		<NavLink
			style={({ isActive }) => {
				return {
					textDecoration: "none",
					textAlign: "center",
					paddingBottom: theme.spacing(0.5),
					borderBottom: isActive
						? `2px solid ${theme.palette.orange400.main}`
						: "none",
				}
			}}
			to={to}
		>
			{({ isActive }) => (
				<Title
					sx={{
						textTransform: "uppercase",
						color: isActive
							? theme.palette.bgColor.dark
							: theme.palette.textColor.faded,
					}}
					text={text}
				/>
			)}
		</NavLink>
	)
}

export default NavigationItem
