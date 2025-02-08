import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(Cookies.get('session') ? true : false);

  useEffect(() => {
    const token = Cookies.get('session'); 
    if (token) {
      setAuthState(true)
    }
  }, []); 

  const login = (token) => {
    Cookies.set('session', token, { expires: 1/24, secure: true, sameSite: 'Strict' });
    setAuthState(true);
  };

  const logout = () => {
    Cookies.remove('session');  
    setAuthState(false); 
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
