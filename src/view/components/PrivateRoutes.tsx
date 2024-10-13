import { Navigate, Outlet } from "react-router-dom"
import { routes } from "../../constants/routes"
import { useUser } from "./auth/useAuth"

function PrivateRoutes() {
	const { user } = useUser()
	return user ? <Outlet /> : <Navigate to={routes.auth.index} />
}

export default PrivateRoutes
