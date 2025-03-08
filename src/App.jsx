import MainStructure from "./main-structure/MainStructure";
import { TabBarContextProvider } from "./contexts/tabBarContext";

function App() {
  return (
    <TabBarContextProvider>
      <MainStructure />
    </TabBarContextProvider>
  );
}

export default App;
