import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Top from "../pages/top/Top";
import Account from "../pages/account/Account";
import "../styles/style.scss";


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/top" component={Top} />
                <Route exact path="/account" component={Account} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;