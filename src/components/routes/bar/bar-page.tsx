import * as React from "react";
import { Link } from "react-router-dom";
import {FOO} from "../../../utils/routes";

type Props = {}

export default class BarPage extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Link to={FOO}>Go to Foo</Link>
                <h1>Bar Page</h1>
            </div>
        );
    }
}