import React, {Component} from "react";
import {Form, Input, Button} from "antd";

class LoginForm extends Component {
    constructor() {
        super();
    }

    render() {
        const {onSubmit, loading} = this.props;
        return (
            <>
                <div className="admin-login-form" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    padding: "3rem 3.5rem"
                }}>
                    <div className="container" style={{
                        maxWidth: "450px",
                        width: "100%",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center"
                    }}>
                        <div className="alf__title" style={{
                            fontSize: "1.5rem",
                            marginBottom: "2.5rem",
                            textAlign: "center"
                        }}>
                            <h3>Login Account</h3>
                        </div>
                        <div className="alf__form">
                            <Form className="ant-form" onFinish={onSubmit}>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            type: "email",
                                            message: "The input is not a valid E-mail!"
                                        },
                                        {
                                            required: true,
                                            message: "Please enter your E-mail"
                                        }
                                    ]}
                                >
                                    <Input className="form-control" placeholder="Email"/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            min: 8,
                                            required: true,
                                            message: "Password must be greater than 8 characters"
                                        }
                                    ]}
                                >
                                    <Input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <div className="alf__submit-container" style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <Button
                                        className="alf__submit"
                                        style={{backgroundColor: "#4c1b9b"}}
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        loading={loading}
                                    >
                                        Sign In
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginForm;
