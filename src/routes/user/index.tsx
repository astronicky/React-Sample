import { Route } from "react-router-dom";

import Middleware from "../../middlewares";
import About from "../../pages/user/AboutUs";
import Home from "../../pages/user/Home";
import Dashboard from "../../pages/user/Dashboard";
import PersonalRoutes from "./user";

const UserRoutes = (
    <>
        <Route index element={ 
                <Middleware 
                    component={<Dashboard />} 
                /> 
            } 
        />
        <Route path="home" element={ 
                <Middleware 
                    component={<Home />} 
                /> 
            } 
        />
        <Route path="about" element={ 
                <Middleware 
                    component={<About />} 
                /> 
            } 
        />
        <Route path="user">
            { PersonalRoutes }
        </Route>
    </>
);

export default UserRoutes;
