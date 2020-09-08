import React, {Component} from "react";
import {Col, Row} from "antd";

class AppFooter extends Component {
    render() {
        return (
            <Row style={{textAlign: "center", display: "block"}}>
                &copy; {new Date().getFullYear()} Miventure
            </Row>
        );
    }
}

export default AppFooter;