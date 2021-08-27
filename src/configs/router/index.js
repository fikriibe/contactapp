import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPage from "../../containers/page/AddPage/AddPage";
import DetailPage from "../../containers/page/DetailPage/DetailPage";
import HomePage from "../../containers/page/HomePage/HomePage";
import pathName from "./pathName";

const Screen = ({ path, render: Render }) => {
    return <Route exact path={path} render={props => <Render {...props} />} />
}

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Screen path={pathName.add} render={AddPage} />
                <Screen path={pathName.edit} render={AddPage} />
                <Screen path={pathName.detail} render={DetailPage} />
                <Screen path={pathName.home} render={HomePage} />
            </Switch>
        </Router>

    );
};

export default MainRoute;
