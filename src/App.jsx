import { TabBarContextProvider } from "./contexts/tabBarContext";
import AppRoutes from "./Routes/Routes";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => navigate("/anirban-gorain/introduction.anirban"), []);

  return (
    <TabBarContextProvider>
      <AppRoutes />
    </TabBarContextProvider>
  );
}

export default App;
