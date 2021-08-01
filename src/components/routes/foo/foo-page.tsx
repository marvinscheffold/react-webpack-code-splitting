import * as React from "react";
import {Link} from "react-router-dom";
import {BAR, FOO} from "../../../utils/routes";

type Props = {}

export default class FooPage extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Link to={BAR}>Go to Bar</Link>
                <h1>Foo Page</h1>
            </div>
        );
    }
}