import React from 'react';
import AOS from "aos";
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer } from "react-toastify";
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import HomePage from './components/HomePage';
// CSS
import "react-toastify/dist/ReactToastify.min.css";
import "aos/dist/aos.css";
import './style.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function App() {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  window.onload = function () {
    setLoader(false);
  };

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Loading your content please wait..."
    >
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </LoadingOverlay>
  )
}

export default App