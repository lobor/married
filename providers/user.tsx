import { createContext, FC, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const userContext = createContext<{ user?: User }>({});

interface User {
  id: string;
}

export const useUser = () => {
  return useContext(userContext);
};

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (process.browser) {
      const userStorage = localStorage.getItem("user");
      if (userStorage) {
        try {
          setUser(JSON.parse(userStorage));
        } catch {
          const userTmp: User = { id: v4() };
          localStorage.setItem("user", JSON.stringify(userTmp));
          setUser(userTmp);
        }
      } else {
        const userTmp: User = { id: v4() };
        localStorage.setItem("user", JSON.stringify(userTmp));
        setUser(userTmp);
      }
    }
  }, []);
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
