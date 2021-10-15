/**
 * The app component includes all other components
 * Here we also import app.css which supports us with global classes, animations and variables
 */

import * as React from "react";
import Router from "./routes/router";

export default class App extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <Router></Router>;
    }
}
