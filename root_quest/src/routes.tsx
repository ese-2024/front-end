import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Page404 from "./pages/Page404";
import Base from "./pages/Base";
import Battle from "./pages/Battle";
import Login from "./pages/Login";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/ranking" element={<Ranking/>}></Route>
                    <Route path="/batlle" element={<Battle/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;