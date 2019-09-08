import React, {
    Component
} from 'react';
import { Switch, Route } from "react-router-dom";
import NewsPage from "../subpages/NewsPage";
import ErrorPage from "../subpages/ErrorPage";
import MyProfil from "../subpages/MyProfil";
import Board from "../subpages/Board";
import Ad from "../subpages/Ad"
import Programming from "../subpages/Programming"
import TopicFirst from "../subpages/Topic"

class Main extends Component {


    render() {
        return (

            <Switch>
                <Route path="/" exact component={NewsPage} />
                <Route path="/myprofil" component={MyProfil} />
                <Route path="/board" component={Board} />
                <Route path="/ad" component={Ad} />
                <Route path="/programming" component={Programming} />
                <Route path="/TopicFirst" component={TopicFirst} />
                <Route component={ErrorPage} />
            </Switch>
        )
    }
}
export default Main