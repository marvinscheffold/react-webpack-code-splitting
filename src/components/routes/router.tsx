import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from "../../utils/routes";
import FooPage from "./foo/foo-page";
import BarPage from "./bar/bar-page";
import NotFoundPage from "./not-found/not-found-page";



export default class Router extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route
                            path={`${routes.FOO}`}
                            component={FooPage}
                        />
                        <Route
                            path={`${routes.BAR}`}
                            component={BarPage}
                        />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
            </BrowserRouter>
        );
    }
}
