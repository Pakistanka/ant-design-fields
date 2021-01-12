import React from "react";
import PropTypes from "prop-types";
import { Layout, Form, Button, Row, Col, Input } from "antd";
import { Link, useHistory } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";

const { Content } = Layout;

function MobileConfirmation() {
  const history = useHistory();

  return (
    <Layout className="wrapper">
      <Content
        className="registration producer"
        justify="space-around"
        align="middle"
      >
        <Row>
          <Col span={24}>
            <h1 className="registration__title">VEZUBR</h1>
            <h2 className="registration__subtitle">Регистрация</h2>
          </Col>
        </Row>

        <Row className="mobile">
          <div className="mobile__text">
            На номер +7 (000) - 00 - 00 было отправлено сообщение с кодом
            подтверждением. Введите полученный пароль для завершения
            регистрации.
          </div>
          <Form.Item
            name="code"
            label="код подтверждения"
            rules={[
              {
                required: true,
                message: <WarningOutlined />,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Row>
        <div className="mobile__button-group">
          {/* Сделала Link у первой кнопки, чтобы перейти к следующему
          компоненту */}
          <Link to="/form">
            <Button type="primary" shape="round" block className="menu__button">
              Продолжить
            </Button>
          </Link>
          <Button
            shape="round"
            block
            className="menu__button menu__button--white"
            onClick={() => history.goBack()}
          >
            Изменить номер
          </Button>
          <Link to="/confirmation">
            <Button shape="round" block className="menu__button menu__button--white">
              Отправить пароль снова
            </Button>
          </Link>
        </div>
      </Content>
    </Layout>
  );
}

export default MobileConfirmation;
