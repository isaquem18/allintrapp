import { useAuth } from '@contexts/Auth';
import StackLoggedInRoutes from './StackRoutesNavigation/StackLoggedInRoutes';
import StackLoggedOutRoutes from './StackRoutesNavigation/StackLoggedOutRoutes';

export default function AuthRoutes() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <StackLoggedInRoutes /> : <StackLoggedOutRoutes />;
}
