import { useTodos } from "../useTodo"
import EmptyBoxList from "./EmptyBoxList"

function ListTodos() {
	const { todos } = useTodos()

	return (
		<>
			{!todos.length && <EmptyBoxList />}
            {
                JSON.stringify(todos)
            }
		</>
	)
}

export default ListTodos
