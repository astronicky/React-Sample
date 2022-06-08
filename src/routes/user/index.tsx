import { Route } from "react-router-dom";
import About from "../../pages/user/AboutUs";
import Home from "../../pages/user/Home";
import Dashboard from "../../pages/user/Dashboard";
import PersonalRoutes from "./user";

const UserRoutes = (
    <>
        <Route index element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user">
            { PersonalRoutes }
        </Route>
    </>
);

export default UserRoutes;
