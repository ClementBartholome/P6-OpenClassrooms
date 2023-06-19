import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <div>
          <BrowserRouter>
            <Header />
            <RoutesConfig />
          </BrowserRouter>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
