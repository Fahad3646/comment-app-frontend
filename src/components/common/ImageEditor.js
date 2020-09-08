import React from "react";
import {Upload, message, Row, Col} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class ImageEditor extends React.Component {
    state = {
        imageUrl: null,
        loading: false,
    };

    beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }

        if (file) {
            getBase64(file, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
        this.props.updateProfilePic(file)
        return false;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
            const imageUrl = this.props.imageUrl;
            this.setState({imageUrl})
        }
    }

    render() {
        const uploadButton = (
            <Row>
                {this.state.loading ?<Col span={24}> <LoadingOutlined/></Col> : <Col span={24}> <PlusOutlined/> </Col>}
                <Col span={24}>Upload</Col>
            </Row>
        );
        const {imageUrl} = this.state;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={this.beforeUpload}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
            </Upload>
        );
    }
}

export default ImageEditor;