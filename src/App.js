import { Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


export default function App() {

    return (
        <>
            <Header />

            {/* {state.loading && <Loading />} */}

            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/about" element={<About />} />

                <Route path="/portfolio" element={<Portfolio />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/resume" element={<Resume />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}