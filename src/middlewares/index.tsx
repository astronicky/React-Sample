import { FC } from "react";
import {
    Navigate
} from 'react-router-dom'

import { ARTICLE_PERMISSION, USER_PERMISSION } from "./constants";

export { ARTICLE_PERMISSION, USER_PERMISSION };

interface MIDDLEWARE {
    userRole?: USER_PERMISSION, 
    articleRole?: ARTICLE_PERMISSION, 
    redirectTo?: string, 
    component: React.ReactElement, 
}

const Middleware: FC<MIDDLEWARE> = ({
    userRole = USER_PERMISSION.PUBLIC, 
    articleRole = ARTICLE_PERMISSION.DEFAULT, 
    redirectTo = "/", 
    component, 
    ...props
}) => {

    const user = { token: '39a3e3fesdf939490', isAdmin: true };

    const checkUserRole = () => {
        if (userRole === USER_PERMISSION.PUBLIC) {
            return true;
        }
        if (userRole === USER_PERMISSION.AUTH) {
            if (user.token) {
                return false;
            }
            return true;
        }
        if (userRole === USER_PERMISSION.PRIVATE) {
            if (user.token) {
                return true;
            }
            return false;
        }
        if (userRole === USER_PERMISSION.ADMIN) {
            if (user.token && user.isAdmin) {
                return true;
            }
            return false;
        }
        return false;
    }

    const checkArticleRole = () => {
        if (articleRole === ARTICLE_PERMISSION.DEFAULT) {
            return true;
        }
        return true;
    }

    return (
        checkUserRole() && 
        checkArticleRole()
    ) ? (
        component
    ) : (
        <Navigate to={{
            pathname: redirectTo
        }} />
    );
};

export default Middleware;
