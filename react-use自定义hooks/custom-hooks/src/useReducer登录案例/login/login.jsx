import React, { useContext } from 'react';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import './login.scss'
import myContext from '../context/context.js'
const Login = () => {
    let { state, getdata } = useContext(myContext)
    let { isloadding } = state
    const onFinish = values => {
        getdata(values);
    };
    return (
        <Row justify='center' style={{ paddingTop: 150 }} >
            <Col xs={14} sm={13} md={10} lg={8} xl={6}>
                <Card title="LOGIN" hoverable type='inner'  >
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input disabled={isloadding} />
                        </Form.Item>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password disabled={isloadding} />
                        </Form.Item>
                        <Form.Item >
                            <Button disabled={isloadding} type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;