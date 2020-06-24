import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


const CustomForm = (props) => {

  const onFinish = values => {
    const {requestType, articleID } = props;
    console.log('Success:', values, {requestType, articleID });
    
    switch (requestType) {
      case 'post':
          axios.post('http://127.0.0.1:8000/api/', {
            title: values.title,
            content: values.content
          })
          .then(res=>console.log(res))
          .catch(error=>console.log(error))
        break;
      case 'put':
          axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: values.title,
            content: values.content
          })
          .then(res=>console.log(res))
          .catch(error=>console.log(error))
        break;
    
      default:
        break;
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input a title',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please add some content',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          {props.buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
