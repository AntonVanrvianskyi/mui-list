import { Box, useTheme } from "@mui/material"
import { Title } from "../../designSystem/typography"
import { flexMixin } from "../../designSystem/mixins"
import SecondaryButton from "../../designSystem/interactions/SecondaryButton"
import { Todo as ITodo } from "../../../interfaces/todo.interface"

interface Props {
	todo: Pick<ITodo, "description" | "title">
	onUpdate: () => void
	onDelete: () => void
}

function Todo({ todo, onUpdate, onDelete }: Props) {
	const { title, description } = todo
	const theme = useTheme()
	return (
		<Box
			sx={{
				width: "100%",
				height: 100,
				borderRadius: "11px",
				border: "2px solid",
				borderColor: theme.palette.textColor.faded,
				boxSizing: "border-box",
				background: theme.palette.bgColor.extraLight,
				...flexMixin({ ai: "center", jc: "space-between" }),
				p: 1,
			}}
		>
			<Box
				sx={{
					...flexMixin({ fd: "column", ai: "flex-start" }),
					gap: 1,
				}}
			>
				<Title
					text={title}
					sx={{
						color: theme.palette.orange.main,
						fontSize: 20,
					}}
				/>
				<Title
					text={description}
					sx={{
						color: theme.palette.white.main,
						fontStyle: "italic",
					}}
				/>
			</Box>
			<Box
				sx={{
					...flexMixin({ fd: "column" }),
					gap: 1,
				}}
			>
				<SecondaryButton onClick={onDelete} label="Delete" />
				<SecondaryButton onClick={onUpdate} label="Update" />
			</Box>
		</Box>
	)
}

export default Todo
