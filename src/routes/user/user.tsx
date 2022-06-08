import { Route } from "react-router-dom";
import UserInbox from "../../pages/user/User/Inbox";
import UserProfile from "../../pages/user/User/Profile";

const PersonalRoutes = (
    <>
        <Route index element={<UserProfile />} />
        <Route path="inbox" element={<UserInbox />} />
    </>
);

export default PersonalRoutes;
