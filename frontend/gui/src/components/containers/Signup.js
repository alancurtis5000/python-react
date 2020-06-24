import React from 'react';
import { connect } from 'react-redux';

import {
  Form,
  Input,
  Button,
} from 'antd';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/auth';

const Signup = (props) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.onAuth(
      values.username,
      values.email,
      values.password,
      values.confirm
      );
    props.history.push('/');
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your a User Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item >
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
          Signup
        </Button>
        Or 
        
         <NavLink to='/login/' style={{marginLeft: '10px'}}> Login</NavLink>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = dispatch =>{
  return {
    onAuth: (username, email, password1, password2 )=>dispatch(actions.authSignup(username, email, password1, password2))
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
