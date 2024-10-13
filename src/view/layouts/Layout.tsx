import { Box, Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import { flexMixin } from "../designSystem/mixins"
import SecondaryButton from "../designSystem/interactions/SecondaryButton"
import { useUser } from "../components/auth/useAuth"
import NavigationItem from "../designSystem/interactions/NavigationItem"
import { routes } from "../../constants/routes"

function Layout() {
	const { user, setUser } = useUser()
	return (
		<>
			<header
				style={{
					height: 90,
					display: "flex",
					background: "#322A49",
					alignItems: "center",
					justifyContent: "space-between",
					boxSizing: "border-box",
					padding: "0px 16px",
				}}
			>
				<Box
					sx={{
						width: "100%",
						...flexMixin({ jc: "space-around" }),
					}}
				>
					<NavigationItem to={routes.home.all} text="All" />
					<NavigationItem to={routes.home.create} text="Create" />
				</Box>
				<Box
					sx={{
						...flexMixin({ ai: "center" }),
						gap: 2,
					}}
				>
					<Avatar>{user?.email[0].toUpperCase()}</Avatar>
					<SecondaryButton onClick={() => setUser(null)} label="Logout" />
				</Box>
			</header>
			<Container
				sx={{
					mt: 1,
				}}
			>
				<Outlet />
			</Container>
		</>
	)
}

export default Layout
