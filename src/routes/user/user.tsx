import { Route } from "react-router-dom";

import Middleware, { USER_PERMISSION } from "../../middlewares";
import UserInbox from "../../pages/user/User/Inbox";
import UserProfile from "../../pages/user/User/Profile";

const PersonalRoutes = (
    <>
        <Route index element={
                <Middleware 
                    userRole={USER_PERMISSION.PRIVATE} component={<UserProfile />} 
                />
            } 
        />
        <Route path="inbox" element={
                <Middleware 
                    userRole={USER_PERMISSION.PRIVATE} component={<UserInbox />} 
                />
            } 
        />
    </>
);

export default PersonalRoutes;
