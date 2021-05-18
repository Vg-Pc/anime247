import React from "react";
import { RegisterInput, CaptchaInput, SubButton } from "./style";
import "./register.scss";
import { Col, Row } from "antd";
import Col2 from "screen/Col2";

// Register.propTypes = {};

function Register() {
  return (
    <Row className="rowRegister">
      <Col className="col1">
        <div className="boxRegister">
          <div className="input">
            <label className="text">Tài khoản</label>
            <RegisterInput />
          </div>

          <div className="input">
            <label className="text">Mật khẩu</label>
            <RegisterInput type="password" />
          </div>

          <div className="input">
            <label className="text">Xác nhận mật khẩu</label>
            <RegisterInput type="password" />
          </div>

          <div className="input">
            <label className="text">Email</label>
            <RegisterInput />
          </div>

          <div className="img">
            <img src="https://anime47.com/captcha.php"></img>
          </div>

          <div className="inputCaptcha">
            <label className="text">Mã xác nhận</label>
            <CaptchaInput placeholder="Nhập mã xác nhận" />
          </div>
          <div>
            <SubButton type="primary">Đăng ký</SubButton>
          </div>
        </div>
      </Col>
      <Col className="col2">
        <Col2 />
      </Col>
    </Row>
  );
}

export default Register;
