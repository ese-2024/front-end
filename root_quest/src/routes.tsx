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
import Profile from "./pages/Profile";
import PrivateRoute from "./components/global/PrivateRoute";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>

                    {/* Public routes */}
                    <Route index element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="*" element={<Page404/>}></Route>

                    {/* Private routes */}
                    <Route path="/ranking"element={<PrivateRoute element={<Ranking />} />} />
                    <Route path="/battle"element={<PrivateRoute element={<Battle />} />} />
                    <Route path="/practice"element={<PrivateRoute element={<Practice />} />} />
                    <Route path="/tutorial"element={<PrivateRoute element={<Tutorial />} />} />
                    <Route path="/profile"element={<PrivateRoute element={<Profile />} />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;