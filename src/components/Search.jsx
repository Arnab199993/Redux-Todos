import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../thunks/ai_thunk';
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Search = () => {

    const dispatch=useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    values.size="256x256"
    values.n=Number(values.n);

    // dispatching the action ---->
    dispatch(fetchImages(values));
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="prompt"
        label="Search Text"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="n"
        label="Number Of Images"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      
   
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      
      </Form.Item>
    </Form>
  );
};
export default Search;