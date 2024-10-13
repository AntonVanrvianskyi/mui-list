import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom"
import { routes } from "./constants/routes"
import AuthAssistance from "./view/components/auth"
import Layout from "./view/layouts/Layout"
import PrivateRoutes from "./view/components/PrivateRoutes"
import HomePage from "./view/pages/HomePage"
import ListTodos from "./view/components/todos/lists"
import CreateTodo from "./view/components/todos/create"

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<PrivateRoutes />}>
				<Route path={routes.index} element={<Layout />}>
					<Route path={routes.home.index} element={<HomePage />}>
						<Route index element={<Navigate to={routes.home.all} />} />
						<Route path={routes.home.all} element={<ListTodos />} />
						<Route path={routes.home.create} element={<CreateTodo />} />
					</Route>
				</Route>
			</Route>
			<Route path={routes.auth.index} element={<AuthAssistance />} />
		</>
	)
)

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
