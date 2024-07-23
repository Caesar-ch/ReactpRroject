import React, { memo, useState } from 'react'
import LoginWrapper from './style'


import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import { message } from "antd";

import { toLogin, register } from '../../services/modules/login';
import { useNavigate } from 'react-router-dom';

const Login = memo(() => {
  const [active, setActive] = useState(true)
  const route = useNavigate()

  const onFinish = (values) => {
    console.log(values);
    if (active) {
      toLogin(values).then(res => {
        console.log(res, 'res')
        if(res.code === 1) {
          console.log('settoken');
          localStorage.setItem('token', res.token)
          route('/dashboard')
        }
      })
    } else {
      register(values).then(res => {
        console.log(res);
        message.success(res.msg || 'error');
      })
    }
  };

  return (
    <LoginWrapper>
      <i ></i>
      <div className='login-container'>
        <h2>登录系统</h2>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名! 建议8-16位",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名! 建议8-16位"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码！建议6-14位"
            />
          </Form.Item>

          <Form.Item>
            <Space size="large" style={{ width: '100%', justifyContent: 'center' }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => {
                  setActive(true)
                }}
              >
                登录
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-register"
                onClick={() => {
                  setActive(false)
                }}
              >
                注册
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  );
})

export default Login

