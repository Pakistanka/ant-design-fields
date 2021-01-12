import React from "react";
import PropTypes from "prop-types";
import { Layout, Form, Menu, Button, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { CloseCircleOutlined, WarningOutlined } from "@ant-design/icons";
import InputMask from "react-input-mask";

const { Content } = Layout;

function Producer() {
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
            <h2 className="registration__subtitle">Зарегистрироваться как:</h2>
            <h3>Грузовладелец</h3>
          </Col>
        </Row>
        <Row className="mobile">
          <div className="mobile__text">
            Введите номер телефона для получения кода безопасности
          </div>
          <Form.Item
            name="mobile"
            label="номер мобильного телефона"
            rules={[
              {
                required: true,
                message: <WarningOutlined />,
              },
            ]}
          >
            <InputMask
              className="mobile__input"
              mask={"+7 (000) 000-00-00"}
              placeholder={"+7 (000) 000-00-00"}
            />
          </Form.Item>
        </Row>
        <div className="mobile__button-group">
          {/* Сделала Link у первой кнопки, чтобы перейти к следующему
          компоненту */}
          <Link to="/confirmation">
            <Button type="primary" shape="round" block className="menu__button">
              Получить СМС код
            </Button>
          </Link>
          <Link to="/">
            <Button shape="round" block className="menu__button menu__button--white">
              Вернуться на Главную
            </Button>
          </Link>
        </div>
      </Content>
    </Layout>
  );
}

Producer.propTypes = {};

export default Producer;
