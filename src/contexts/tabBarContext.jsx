import { createContext, useState, useContext, useEffect, useRef } from "react";

const TabBarContext = createContext();

export function TabBarContextProvider({ children }) {
  const [tabs, setTabs] = useState([]);

  return (
    <TabBarContext.Provider value={{ tabs, setTabs }}>
      {children}
    </TabBarContext.Provider>
  );
}

export function useTabContext() {
  const { tabs, setTabs } = useContext(TabBarContext);
  return [tabs, setTabs];
}
