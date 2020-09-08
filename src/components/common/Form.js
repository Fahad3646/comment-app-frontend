import React from "react";
import {Button, Layout, Steps, message, Form} from "antd";

const {Content} = Layout;
const {Step} = Steps;

class DynamicForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {steps, currentStep: current} = this.props;
        return (
            <div>
                <Layout>
                    <Content style={{padding: "0 3.25rem", background: "#fff"}}>
                        <div>
                            <Steps current={current} style={{marginTop: "3rem"}}>
                                {steps.map(item => (
                                    <Step disabled={true} key={item.title} title={item.title}/>
                                ))}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default DynamicForm;
