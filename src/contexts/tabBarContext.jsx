import { createContext, useState, useContext, useEffect, useRef } from "react";

const TabBarContext = createContext();

export function TabBarContextProvider({ children }) {
  const [tabs, setTabs] = useState([]);
  const currentTab = useRef(0);

  return (
    <TabBarContext.Provider value={{ tabs, setTabs, currentTab }}>
      {children}
    </TabBarContext.Provider>
  );
}

export function useTabContext() {
  const { tabs, setTabs, currentTab } = useContext(TabBarContext);
  return [tabs, setTabs, currentTab];
}
