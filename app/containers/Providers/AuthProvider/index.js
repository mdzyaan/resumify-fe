// AuthContext.js
import React, { useEffect, useState } from 'react';
import localStorageTemplates from 'common/local-storage-templates';

export const AuthContext = React.createContext();

export default ({ children }) => {
  const prevAuth = localStorage.getItem(localStorageTemplates.resumifyToken) || '';
  const [authenticated, setAuthenticated] = useState(prevAuth); 
  useEffect(() => {
    localStorage.setItem(localStorageTemplates.resumifyToken, authenticated);
  }, [authenticated]);

  const logOut = () => {
    setAuthenticated('');
    localStorage.clear();
  };

  const defaultContext = {
    authenticated,
    setAuthenticated,
    logOut,
  };
  return <AuthContext.Provider value={defaultContext}>{children}</AuthContext.Provider>;
};
