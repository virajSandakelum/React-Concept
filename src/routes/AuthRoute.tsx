import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useUserDataStore from '../zustand/store/userDataStore';


type AuthRouteProps = {
  children: ReactNode;
}

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const accessToken = useUserDataStore((state) => state.userDetails.accessToken);
  const accessToken = "test";

  useEffect(() => {
    setIsAuthenticated(!!accessToken);

    if (!accessToken) {
      navigate('/');
    }
  }, []);

  return isAuthenticated ? children : null;
};