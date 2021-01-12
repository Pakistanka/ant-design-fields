import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Menu, Layout } from "antd";
import "./style.scss";
import "antd/dist/antd.css";

function StartPage() {
  return (
    <Layout className="wrapper">
      <div className="registration">
        <Row>
          <Col span={24}>
            <h1 className="registration__title">VEZUBR</h1>
            <h2 className="registration__subtitle">Зарегистрироваться как:</h2>
          </Col>
        </Row>

        <Menu className="menu">
          <Menu.Item>
            <Link to="/producer" className="menu__item">
              Грузовладелец
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/operator" className="menu__item">
              Подрядчик
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/dispatcher" className="menu__item">
              Экспедитор
            </Link>
          </Menu.Item>
        </Menu>

        <Button type="primary" shape="round" block className="menu__button">
          Продолжить
        </Button>
      </div>
    </Layout>
  );
}

export default StartPage;
