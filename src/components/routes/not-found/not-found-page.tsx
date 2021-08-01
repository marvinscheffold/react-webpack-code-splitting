import * as React from "react";
import {BAR, FOO} from "../../../utils/routes";
import {Link} from "react-router-dom";

type Props = {}

export default class NotFoundPage extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Link to={FOO}>Go to Foo</Link>
                <span>  //  </span>
                <Link to={BAR}>Go to Bar</Link>
                <h1>404 - Not found</h1>
            </div>
        );
    }
}