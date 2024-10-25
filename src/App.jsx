import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { WorldLineProvider } from "./contexts/WorldLineContext";

function App() {
  return (
    <WorldLineProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </WorldLineProvider>
  );
}

export default App;
