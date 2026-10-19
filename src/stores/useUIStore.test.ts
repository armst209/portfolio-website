import useUIStore, { initialUIState } from './useUIStore';

describe('useUIStore', () => {
  beforeEach(() => useUIStore.setState(initialUIState));

  it('toggles the sidebar', () => {
    expect(useUIStore.getState().isSidebarCollapsed).toBeFalse();
    useUIStore.getState().toggleSidebar();
    expect(useUIStore.getState().isSidebarCollapsed).toBeTrue();
    useUIStore.getState().toggleSidebar();
    expect(useUIStore.getState().isSidebarCollapsed).toBeFalse();
  });

  it('sets the sidebar state explicitly', () => {
    useUIStore.getState().setSidebarCollapsed(true);
    expect(useUIStore.getState().isSidebarCollapsed).toBeTrue();
  });
});
