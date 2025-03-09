import { TabBarContextProvider } from "./contexts/tabBarContext";
import AppRoutes from "./Routes/Routes";
import "./index.css";

function App() {
  return (
    <TabBarContextProvider>
      <AppRoutes />
    </TabBarContextProvider>
  );
}

export default App;
