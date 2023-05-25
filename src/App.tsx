import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./RoutesSection/Homes";
import JobDetailsItem from "./RoutesSection/JobItemDetailsRoute";
import Jobs from "./RoutesSection/Jobss";
import Login from "./RoutesSection/LoginRoute";
import NotFound from "./RoutesSection/NotFoundRoute";
import ProtectedRoute from "./RoutesSection/ProtectedRoute";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobDetailsItem} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
