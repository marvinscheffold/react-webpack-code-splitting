import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";

function main() {
    /**
     * Log current environment
     */
    console.log(`You are currently in ${process.env.NODE_ENV} Mode`);

    ReactDOM.render(<App />, document.getElementById("root"));
}

main();
