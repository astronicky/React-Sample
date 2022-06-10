import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserRoutes from "./user";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {/* <AdminRoutes /> */}
                    {UserRoutes}
                    <Route path="*" element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
