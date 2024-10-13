import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { User } from "../../../interfaces/user.interface"

interface AuthState {
	user: User | null
	setUser: (user: User | null) => void
}

export const useUser = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
		}),
		{
			name: "user-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
)
