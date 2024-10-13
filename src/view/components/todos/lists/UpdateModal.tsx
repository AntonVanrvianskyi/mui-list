import { Box, IconButton, useTheme } from "@mui/material"
import Modal from "../../../designSystem/elements/Modal"
import { Title } from "../../../designSystem/typography"
import { Form, Formik, FormikValues } from "formik"
import ActionButton from "../../../designSystem/interactions/ActionButton"
import InputField from "../../../designSystem/forms/InputField"
import { flexMixin } from "../../../designSystem/mixins"
import * as z from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { Todo } from "../../../../interfaces/todo.interface"
import { useTodos } from "../useTodo"

interface Props {
	open: boolean
	onClose: () => void
	updateTodo: Todo
}

function UpdateModal({ open, updateTodo, onClose }: Props) {
	const { updateTodo: updateTodoInStore } = useTodos()
	const theme = useTheme()
	const schema = z.object({
		title: z.string({ required_error: "Title is required" }),
		description: z.string({ required_error: "Description required" }),
	})
	const onSubmit = (values: FormikValues) => {
		const { title, description } = values
		const updatedTodo = {
			...updateTodo, 
			title,
			description,
		}
		updateTodoInStore(updatedTodo) 
		onClose()
	}
	return (
		<Modal
			open={open}
			onClose={onClose}
			sx={{
				"& .MuiPaper-root": {
					borderRadius: "25px",
					backgroundColor: theme.palette.bgColor.dark,
					overflow: "hidden",
					width: 300,
					height: 350,
					border: "2px solid",
					borderColor: theme.palette.textColor.faded,
					boxSizing: "border-box",
					p: 2,
				},
			}}
		>
			<Box
				sx={{
					width: "100%",
					...flexMixin({ ai: "center", jc: "space-between" }),
				}}
			>
				<Title
					sx={{
						color: theme.palette.white.main,
						fontSize: 18,
					}}
					text="Update"
				/>
				<IconButton
					onClick={onClose}
					sx={{
						"&:hover": {
							"& svg": {
								color: theme.palette.white.main,
							},
						},
					}}
				>
					<CloseRoundedIcon
						sx={{
							color: theme.palette.textColor.faded,
						}}
					/>
				</IconButton>
			</Box>

			<Formik
				initialValues={{
					title: updateTodo.title,
					description: updateTodo.description,
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
									name="title"
									type="text"
									placeholder="Enter title"
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
								disabled={!isValid || isSubmitting || !dirty}
								label="Update"
								sx={{
									"&.MuiButtonBase-root": {
										height: 48,
										mt: 3,
									},
								}}
							/>
						</Box>
					</Form>
				)}
			</Formik>
		</Modal>
	)
}

export default UpdateModal
