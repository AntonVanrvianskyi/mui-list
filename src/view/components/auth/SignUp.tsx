import { Box, Grow } from "@mui/material"
import { Form, Formik, FormikValues } from "formik"
import { flexMixin } from "../../designSystem/mixins"
import InputField from "../../designSystem/forms/InputField"
import ActionButton from "../../designSystem/interactions/ActionButton"
import * as z from "zod"
import { emailValidationPattern } from "../../../constants"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useUser } from "./useAuth"
import { useNavigate } from "react-router-dom"
import { routes } from "../../../constants/routes"

function SignUp() {
	const { setUser } = useUser()
	const navigate = useNavigate()
	const schema = z.object({
		email: z
			.string({ required_error: "Required" })
			.min(1, { message: "Please enter your email" })
			.email("Email Invalid")
			.regex(emailValidationPattern, "Email Invalid"),
		password: z
			.string({ required_error: "Password Required" })
			.min(8, { message: "Password is short" }),
	})

	const onSubmit = (values: FormikValues) => {
		const { email, password } = values
		setUser({ email, password })
		navigate(routes.home.index)
	}
	return (
		<>
			<Grow in>
				<Box
					sx={{
						height: "100%",
					}}
				>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validateOnChange={false}
						validateOnBlur={false}
						validationSchema={toFormikValidationSchema(schema)}
						onSubmit={(values, actions) => {
							onSubmit(values)
							actions.setSubmitting(false)
						}}
					>
						{({ handleSubmit, isValid, isSubmitting, dirty, setErrors }) => (
							<Form
								onSubmit={handleSubmit}
								style={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
							>
								<Box
									sx={{
										width: "100%",
									}}
								>
									<Box
										sx={{
											width: "100%",
											height: "fit-content",
											mt: 4,
											...flexMixin({ fd: "column" }),
											gap: "20px",
										}}
									>
										<InputField
											name="email"
											type="email"
											placeholder="Email"
											description="Email"
											setErrors={setErrors}
										/>
										<InputField
											type="password"
											description="Password"
											name="password"
											placeholder="Password"
											setErrors={setErrors}
										/>
									</Box>
									<ActionButton
										loading={false}
										disabled={!isValid || isSubmitting || !dirty}
										label="Register"
										sx={{
											"&.MuiButtonBase-root": {
												height: 48,
												mt: 4,
											},
										}}
									/>
								</Box>
							</Form>
						)}
					</Formik>
				</Box>
			</Grow>
		</>
	)
}

export default SignUp
