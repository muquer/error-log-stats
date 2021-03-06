import { createContext, useState, useContext } from "react";

type DrawerContextType = {
  isOpened: boolean;
  toggleIsOpened: (value: boolean) => void;
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({ children }: DrawerContextProviderProps) => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ isOpened, toggleIsOpened }}>
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider"
    );
  }
  return context;
};

export { DrawerContextProvider, useDrawerContext };
