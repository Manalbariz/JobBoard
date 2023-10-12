import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
//pages import
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
//components import
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <style>{`
            body {
              background: linear-gradient(to top, #fdfdfd, #e5e4f3, #cbccea, #afb6e2, #90a0d9, #7a8ac2, #6475ab, #4e6195, #3f486d, #2e3148, #1c1c27, #010101) no-repeat;
              background-size: cover;
            }
          `}</style>
        </Helmet>
        <BrowserRouter>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
