import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./auth/useContext";
import Layout from "./components/Layout";
const App = () => {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
