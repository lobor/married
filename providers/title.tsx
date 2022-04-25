import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { v4 } from "uuid";

const titleContext = createContext<{
  title?: string;
  setTitle: Dispatch<SetStateAction<string | undefined>>;
}>({ setTitle: () => {} });

export const useTitle = () => {
  return useContext(titleContext);
};

export const TitleProvider: FC = ({ children }) => {
  const [title, setTitle] = useState<string>();
  return (
    <titleContext.Provider value={{ title, setTitle }}>
      {children}
    </titleContext.Provider>
  );
};
