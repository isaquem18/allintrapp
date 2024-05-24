import { renderWithNavigation } from '@__test__/wrappers/TestWrapper';
import { fireEvent } from '@testing-library/react-native';

import BottomTabNavigator from './index';

describe('BottomTabNavigator', () => {
  it('should show specific text when profile bottom-tab is pressed', async () => {
    const { getByText, getByTestId } = renderWithNavigation(
      <BottomTabNavigator />,
    );

    expect(getByTestId('home-screen')).toBeTruthy();

    fireEvent.press(getByTestId('profile-screen'));

    expect(getByText('Hello word, esta é a pagina de perfil')).toBeTruthy();
  });
});
