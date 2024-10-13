import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { Todo } from "../../../interfaces/todo.interface"

interface TodoState {
	todos: Todo[]
	setTodo: (todo: Todo) => void
	updateTodo: (updatedTodo: Todo) => void
    deleteTodo: (id: number) => void
}

export const useTodos = create<TodoState>()(
	persist(
		(set) => ({
			todos: [],
			setTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
			updateTodo: (updatedTodo: Todo) =>
				set((state) => ({
					todos: state.todos.map((todo) =>
						todo.id === updatedTodo.id ? updatedTodo : todo
					),
				})),
			deleteTodo: (id: number) =>
				set((state) => ({
					todos: state.todos.filter((todo) => todo.id !== id),
				})),
		}),
		{
			name: "todo-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
)
