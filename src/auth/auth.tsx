import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

type ContextInterface = {
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
};

export interface ChildProps {
  children: ReactNode | ReactNode[];
}

const AuthContext = createContext<ContextInterface>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: ChildProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let email = localStorage.getItem("userEmail");
    if (email) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const login = (email: string) => {
    localStorage.setItem("userEmail", email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
