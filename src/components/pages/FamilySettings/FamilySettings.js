import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Form, Input, Button, Typography } from 'antd';

import ParentNavSider from '../../common//ParentNavSider';
import ChildCard from '../../common/ChildCard';

const { Title } = Typography;

const layoutSettings = {
  labelCol: { span: 12 },
  wrapperCol: { span: 16 },
};

const initialChildren = [
  {
    Name: 'Jackie',
    GradeLevelID: '7',
    PIN: '1234',
    AvatarURL: 'https://picsum.photos/200/300.jpg',
    IsDyslexic: false,
  },
  {
    Name: 'Ryan',
    GradeLevelID: '8',
    PIN: '1212',
    AvatarURL: 'https://picsum.photos/200/300.jpg',
    IsDyslexic: false,
  },
];

const FamilySettings = props => {
  const { push } = useHistory();

  const handleChange = (value, e) => {
    console.log('this is value', value);
  };

  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('values', values);

    push('/parent-dashboard');
  };

  return (
    <Layout className="parent-dashboard add-child">
      <ParentNavSider selected="settings" />
      <Layout className="content">
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Settings
        </Title>
        <Layout className="children" style={{ flexFlow: 'row wrap' }}>
          {initialChildren.map(child => (
            <ChildCard name={child.Name} AvatarURL={child.AvatarURL} />
          ))}
        </Layout>

        <Layout className="settings-form">
          <h2 className="h2-family-settings">Change Email or Password</h2>
          <Form
            {...layoutSettings}
            form={form}
            name="change-family-settings"
            onFinish={onFinish}
          >
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Form.Item
                name="email"
                onChange={handleChange}
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  { required: true, message: 'Please enter an email address!' },
                ]}
              >
                <Input placeholder="Enter New Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your old password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Enter old Password" />
              </Form.Item>
              <Form.Item
                name="email"
                onChange={handleChange}
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  { required: true, message: 'Please enter an email address!' },
                ]}
              >
                <Input placeholder="Enter New Email" />
              </Form.Item>
              <Form.Item
                name="email"
                onChange={handleChange}
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  { required: true, message: 'Please enter an email address!' },
                ]}
              >
                <Input placeholder="Re-enter New Email" />
              </Form.Item>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20, offset: 8 }}>
              <Button
                style={{ backgroundColor: '#007AFF', color: 'white' }}
                type="primary"
                size="large"
                htmlType="submit"
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default FamilySettings;
