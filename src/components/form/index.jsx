import React from "react";
import { Input, Layout, Form, Row, Checkbox, Button, Col } from "antd";
import "./styles.scss";
import "antd/dist/antd.css";
import { WarningOutlined } from "@ant-design/icons";

function GeneralInputs() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    // required: '${label} is required!',
    required: "<WarningOutlined />",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  return (
    <Layout className="wrapper form-inputs">
      <Row className="form-inputs__title">
        <Col span={24}>
          <h1 className="registration__title">VEZUBR</h1>
          <h2 className="registration__subtitle">
            Регистрация: <span>Грузовладельца</span>
          </h2>
        </Col>
      </Row>
      <Form
        name="registration"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        scrollToFirstError
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name="inn"
              label="ИНН компании или ип"
              rules={[
                {
                  required: true,
                  message: <WarningOutlined />,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Электронная почта"
              rules={[
                //   {
                //     type: "email",
                //     message: <WarningOutlined />,
                //     required: true,
                //   },
                {
                  type: "email",
                  message: <WarningOutlined />,
                },
                {
                  required: true,
                  message: <WarningOutlined />,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Имя пользователя"
              rules={[
                {
                  required: true,
                  message: <WarningOutlined />,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="surname"
              label="Фамилия пользователя"
              rules={[
                {
                  required: true,
                  message: <WarningOutlined />,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <div className="form-inputs-line"></div>

        <Row>
          <Col span={12}>
            <Form.Item
              name="password"
              label="Введите пароль"
              rules={[
                {
                  required: true,
                  message: <WarningOutlined />,
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="confirm"
              label="Повторите введенный пароль"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: <WarningOutlined />,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(<WarningOutlined />);
                    // return Promise.reject("Пароли не соответствуют");
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row className="form-agreement">
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(<WarningOutlined />),
                // value ? Promise.resolve() : Promise.reject('Вы должны согласиться с условиями регистрации')
              },
            ]}
          >
            <Checkbox>
              Регистрируясь в системе Везубр, Вы даете
              <a href="">Согласия на обработку персональных данных</a>и
              соглашаетесь с <a href="">Политикой конфиденциальности</a>,
              <a href="">Правилами пользования платформой</a>
            </Checkbox>
          </Form.Item>
        </Row>
        <Button
          type="primary"
          shape="round"
          block
          className="menu__button"
          htmlType="submit"
        >
          Завершить регистрацию
        </Button>
      </Form>
    </Layout>
  );
}

export default GeneralInputs;
