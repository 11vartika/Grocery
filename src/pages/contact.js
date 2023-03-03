import { Button, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const { TextArea } = Input;

function Contact() {
  const [btndisabled, setbtndisabled] = useState(true);

  const onFinish = (values) => {
    //alert('Thank you for contacting us')
    form.resetFields();
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [form] = Form.useForm();
  const onValuesChange = (changedValues, allValues) => {

    if (allValues.fullname != undefined && allValues.email != undefined && allValues.phone != undefined && allValues.message != undefined && allValues.fullname != '' && allValues.email != '' && allValues.phone != '' && allValues.message != '') {
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
    console.log(allValues);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="87">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div className="block contactPage">
        <div className="container">
          <h2>Contact Us</h2>
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            size='large'
            onFinish={onFinish}
            onValuesChange={onValuesChange}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[{ required: true, message: 'Please input your full name!' }, {
                pattern: new RegExp("[A-Z,a-z]"),
                message: "field does not accept numbers"
              }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mobile Number"
              name="phone"
              rules={[{ required: true, message: 'Please input your phone!' }, {
                pattern: /^[\d]{0,10}$/,
                message: "Value should be less than 10 character",
              },
              {
                pattern: new RegExp("[0-9]", "g"),
                message: "field does not accept character",
              },]}

            >
              <Input addonBefore={prefixSelector}


                style={{
                  width: '100%',

                }} />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button disabled={btndisabled} type="primary" htmlType="submit" onClick={() => {
                setIsModalVisible(true);
              }} >
                Submit
              </Button>
              <Modal title="Data is saved successfully !!"
                visible={isModalVisible}
                onOk={() => {
                  setIsModalVisible(false);
                  setbtndisabled(true)
                }}>              
              </Modal>
            </Form.Item>
          </Form>
        </div>
      </div>

    </>

  );
}
export default Contact;