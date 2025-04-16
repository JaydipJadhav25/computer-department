
import  { createContext, useState, useEffect,  ReactNode } from "react";

interface AuthState {
  isAuthenticated: boolean;
  role: string | null;
  username: string | null;
}

interface AuthContextProps extends AuthState {
  login: (username: string, role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<AuthState>({
      isAuthenticated: false,
      role: null,
      username: null,
    });

  useEffect(() => {
    // Check local storage for existing auth on app load
    const storedAuth = localStorage.getItem("aces_auth");
    if (storedAuth) {
      try {
        const parsedAuth = JSON.parse(storedAuth);
        setAuth({
          isAuthenticated: parsedAuth.isAuthenticated || false,
          role: parsedAuth.role || null,
          username: parsedAuth.username || null,
        });
      } catch (error) {
        // Invalid stored auth, reset to defaults
        console.log("Invalid stored auth, reset to defaults error : " , error);
        localStorage.removeItem("aces_auth");
      }
    }
  }, []);

  const login = (username: string, role: string) => {
    const authData = {
      isAuthenticated: true,
      role,
      username,
    };

    // Update state and store in localStorage
    setAuth(authData);
    localStorage.setItem("aces_auth", JSON.stringify(authData));
  };

  const logout = () => {
    // Clear state and remove from localStorage
    setAuth({
      isAuthenticated: false,
      role: null,
      username: null,
    });
    localStorage.removeItem("aces_auth");
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// Fast refresh only works when a file only exports components.
//  Use a new file to share constants or functions between components.
// export const useAuth = () => {

//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// };

export default AuthContext;
