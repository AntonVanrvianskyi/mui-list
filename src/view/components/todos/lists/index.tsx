import { Box } from "@mui/material"
import Todo from "../Todo"
import { useTodos } from "../useTodo"
import EmptyBoxList from "./EmptyBoxList"
import { flexMixin } from "../../../designSystem/mixins"
import { useState } from "react"
import UpdateModal from "./UpdateModal"
import { Todo as ITodo } from "../../../../interfaces/todo.interface"

function ListTodos() {
	const { todos, deleteTodo } = useTodos()
	const [updateTodo, setUpdateTodo] = useState<ITodo>({
		id: 0,
		title: "",
		description: "",
	})
	const [openUpdateModal, setOpenUpdateModal] = useState(false)
	const onUpdate = (todo: ITodo) => {
		setUpdateTodo({ ...todo })
		setOpenUpdateModal(true)
	}
	return (
		<>
			{!todos.length && <EmptyBoxList />}
			<Box
				sx={{
					width: "100%",
					...flexMixin({ fd: "column" }),
					gap: 1,
				}}
			>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						onUpdate={() => onUpdate(todo)}
                        onDelete={() => deleteTodo(todo.id)}
					/>
				))}
			</Box>
			<UpdateModal
				onClose={() => setOpenUpdateModal(false)}
				open={openUpdateModal}
				updateTodo={updateTodo}
			/>
		</>
	)
}

export default ListTodos
