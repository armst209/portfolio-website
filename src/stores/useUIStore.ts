import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UIState = {
  isSidebarCollapsed: boolean;
};

type UIActions = {
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
};

export const initialUIState: UIState = {
  isSidebarCollapsed: false,
};

const useUIStore = create<UIState & UIActions>()(
  persist(
    (set) => ({
      ...initialUIState,
      toggleSidebar: () =>
        set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
      setSidebarCollapsed: (isSidebarCollapsed) => set({ isSidebarCollapsed }),
    }),
    {
      name: 'bng-ui',
      storage: createJSONStorage(() => localStorage),
      // Rehydrated manually after mount (see AppShell) so the server render
      // and the first client render agree.
      skipHydration: true,
    },
  ),
);

export default useUIStore;
