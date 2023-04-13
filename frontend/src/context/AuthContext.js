import React, {createContext, useState, useEffect, useContext} from "react";

export const UserContext = createContext({
  token: '',
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(UserContext);

// Tworzymy komponent dostarczający kontekstu
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Funkcja do zapisywania tokena w localStorage
  const saveTokenToLocalStorage = (token) => {
    localStorage.setItem("token", token);
  };

  // Funkcja do odczytywania tokena z localStorage
  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  };

  useEffect(() => {
    getTokenFromLocalStorage();
  }, []);

  // Funkcja do logowania użytkownika
  const login = (token) => {
    setToken(token);
    saveTokenToLocalStorage(token);
  };

  // Funkcja do wylogowywania użytkownika
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Obiekt dostarczany przez kontekst
  const userContextValue = {
    token,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};