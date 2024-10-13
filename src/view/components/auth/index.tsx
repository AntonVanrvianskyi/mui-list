import { Box, useTheme } from "@mui/material"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ToggleButton from "../../designSystem/interactions/ToggleButton"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import PrivateRoutes from "../PrivateRoutes"
import { useUser } from "./useAuth"
import { routes } from "../../../constants/routes"

function AuthAssistance() {
	const theme = useTheme()
	const [search, setSearchParams] = useSearchParams()
	const { user } = useUser()
	const navigate = useNavigate()
	const isSignIn = search.get("type") === "signIn"
	useEffect(() => {
		setSearchParams({ type: "signIn" })
		// if (user) {
		// 	navigate(routes.home)
		// }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onChangeAuthSide = () => {
		if (isSignIn) {
			setSearchParams((prev) => ({ ...prev, type: "signUp" }))
		} else {
			setSearchParams((prev) => ({ ...prev, type: "signIn" }))
		}
	}

	return (
		<Box
			sx={{
				width: "50%",
				minHeight: "70vh",
				border: "2px solid",
				position: "absolute",
				borderRadius: "11px",
				borderColor: theme.palette.textColor.faded,
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
				boxSizing: "border-box",
				p: 2,
				"@media screen and (max-width: 480px)": {},
			}}
		>
			<ToggleButton
				textLeftSide="Login"
				textRightSide="Register"
				activeStep={isSignIn}
				toggleFunction={onChangeAuthSide}
			/>
			{isSignIn && <SignIn />}
			{!isSignIn && <SignUp />}
			<PrivateRoutes />
		</Box>
	)
}

export default AuthAssistance
