import React, {
    Component
} from 'react';
import { Switch, Route } from "react-router-dom";
import NewsPage from "../subpages/NewsPage";
import ErrorPage from "../subpages/ErrorPage";
import MyProfil from "../subpages/MyProfil";
import Board from "../subpages/Board";
import Ad from "../subpages/Ad"

class Main extends Component {


    render() {
        return (

            <Switch>
                <Route path="/" exact component={NewsPage} />
                <Route path="/myprofil" component={MyProfil} />
                <Route path="/board" component={Board} />
                <Route path="/ad" component={Ad} />
                <Route component={ErrorPage} />
            </Switch>
        )
    }
}
export default Main