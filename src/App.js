import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/About";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Landing />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Route>
        )
    )

    return (
        <>
            <div>
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
