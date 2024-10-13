import { Box } from "@mui/material"
import { Form, Formik, FormikValues } from "formik"
import ActionButton from "../../../designSystem/interactions/ActionButton"
import InputField from "../../../designSystem/forms/InputField"
import { flexMixin } from "../../../designSystem/mixins"
import * as z from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useTodos } from "../useTodo"
function CreateTodo() {
	const { setTodo } = useTodos()
	const schema = z.object({
		title: z.string({ required_error: "Title is required" }),
		description: z.string({ required_error: "Description required" }),
	})

	const onSubmit = (values: FormikValues) => {
		const { title, description } = values
		setTodo({ id: new Date().getTime(), title, description })
	}
	return (
		<>
			<Box
				sx={{
					height: "100%",
				}}
			>
				<Formik
					initialValues={{
						title: "",
						description: "",
					}}
					validateOnChange={false}
					validateOnBlur={false}
					validationSchema={toFormikValidationSchema(schema)}
					onSubmit={(values, actions) => {
						onSubmit(values)
						actions.resetForm()
					}}
				>
					{({ handleSubmit, isValid, dirty, setErrors }) => (
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
										name="title"
										type="text"
										placeholder="Enter Title"
										description="Title"
										setErrors={setErrors}
									/>
									<InputField
										type="text"
										description="Description"
										name="description"
										placeholder="Enter description"
										setErrors={setErrors}
									/>
								</Box>
								<ActionButton
									disabled={!isValid || !dirty}
									label="Create"
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
		</>
	)
}
export default CreateTodo
