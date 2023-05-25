import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = (props: any) => {
  const token = Cookie.get("jobby_app_jwt_token");
  if (token === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
