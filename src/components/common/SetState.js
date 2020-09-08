import React, {Component} from "react";
import {Form, Select} from "antd";
import states from "./State";

class SetState extends Component {
    constructor() {
        super();
    }

    render() {
        const data = states;
        const optionItems = data.map(obj => {
            return {value: obj.abbreviation, label: obj.name};
        });
        return (
            <Form.Item label="State" name="state" rules={[{required: true}]}>
                <Select
                    getPopupContainer={node => node.parentNode}
                    loading={this.props.isLoading}
                    showSearch={true}
                    onChange={this.props.onChange}
                    options={optionItems}
                    placeholder="--Select State --"
                    filterOption={(input, option) => {
                        return option.label.toLowerCase().includes(input.toLowerCase())
                    }}
                />
            </Form.Item>
        );
    }
}

export default SetState;
