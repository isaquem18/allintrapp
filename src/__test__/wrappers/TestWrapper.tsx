import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function NavigationTestWrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{children}</NavigationContainer>
    </QueryClientProvider>
  );
}

export function renderWithNavigation(ui) {
  return render(ui, { wrapper: NavigationTestWrapper });
}
