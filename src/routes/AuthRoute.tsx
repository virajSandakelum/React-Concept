import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useUserDataStore from '../zustand/store/userDataStore';

export const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const accessToken = useUserDataStore((state) => state.userDetails.accessToken);
  const accessToken = "test";

  useEffect(() => {
    // Check for access token 

    setIsAuthenticated(!!accessToken);

    // Redirect to the login page if not authenticated
    if (!accessToken) {
      navigate('/');
    }
  }, []);

  return isAuthenticated ? children : null;
};