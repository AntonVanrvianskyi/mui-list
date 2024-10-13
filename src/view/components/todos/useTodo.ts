import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { Todo } from "../../../interfaces/todo.interface"

interface TodoState {
	todos: Todo[]
	setTodo: (todo: Todo) => void
}

export const useTodos = create<TodoState>()(
	persist(
		(set) => ({
			todos: [],
			setTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
		}),
		{
			name: "todo-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
)
