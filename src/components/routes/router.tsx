import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from "../../utils/routes";
import {LoadingOverlay} from "../loading-overlay";
// const FooPage = lazy(() => import(/* webpackChunkName: 'foo-page' */"./foo/foo-page"));
// const BarPage = lazy(() => import(/* webpackChunkName: 'bar-page' */"./bar/bar-page"));
// const NotFoundPage = lazy(() => import(/* webpackChunkName: 'not-found-page' */"./not-found/not-found-page"));

const FooPage = lazy(() => import("./foo/foo-page"));
const BarPage = lazy(() => import("./bar/bar-page"));
const NotFoundPage = lazy(() => import("./not-found/not-found-page"));


export default class Router extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<LoadingOverlay/>}>
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
                </Suspense>
            </BrowserRouter>
        );
    }
}
