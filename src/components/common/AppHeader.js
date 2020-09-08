import React from "react";
import {Button} from "antd";
import {Link} from 'react-router-dom';
import {
    UserOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;

class AppHeader extends React.Component {
    render() {
        return (
            <>
                <Button>Logout</Button>
            </>
        );
    }
}

export default AppHeader;