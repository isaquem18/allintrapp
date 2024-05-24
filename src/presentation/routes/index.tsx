import { useAuth } from '@context/useAuth';
import StackLoggedInRoutes from './StackRoutesNavigation/StackLoggedInRoutes';
import StackLoggedOutRoutes from './StackRoutesNavigation/StackLoggedOutRoutes';

export default function AuthRoutes() {
  const auth = useAuth();
  const isLoggedIn = auth?.[0]?.data?.isLoggedIn;

  return isLoggedIn ? <StackLoggedInRoutes /> : <StackLoggedOutRoutes />;
}
