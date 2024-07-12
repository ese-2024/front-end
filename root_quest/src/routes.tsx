import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Page404 from "./pages/Page404";
import Base from "./pages/Base";
import Battle from "./pages/Battle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Practice from "./pages/Practice";
import Tutorial from "./pages/Tutorial";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/ranking" element={<Ranking/>}></Route>
                    <Route path="/battle" element={<Battle/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/practice" element={<Practice/>}></Route>
                    <Route path="/tutorial" element={<Tutorial/>}></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;