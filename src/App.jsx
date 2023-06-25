import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <RoutesConfig />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
