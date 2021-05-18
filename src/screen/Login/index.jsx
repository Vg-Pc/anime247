import React from "react";
import {
  LoginInput,
  LoginButton,
  ForgetButton,
  FbButton,
  LoginBreadcrumb,
} from "./style";
import "./login.scss";
import { Col, Row } from "antd";
import Col2 from "screen/Col2";
import { FacebookOutlined } from "@ant-design/icons";

// Login.propTypes = {};

function Login() {
  return (
    <Row className="rowLogin">
      <Col className="col1">
        <div className="boxLogin">
          <LoginBreadcrumb>
            <LoginBreadcrumb.Item>
              <a
                href=""
                style={{
                  color: "#30c9fc",
                }}
              >
                PHIM
              </a>
            </LoginBreadcrumb.Item>
            <LoginBreadcrumb.Item>
              <a
                href=""
                style={{
                  color: "#30c9fc",
                }}
              >
                ĐĂNG NHẬP
              </a>
            </LoginBreadcrumb.Item>
          </LoginBreadcrumb>
          <h1 className="textSory">
            Chức năng đăng nhập bằng Facebook đang được sửa lại, xin lỗi bạn vì
            sự bất tiện này
          </h1>
          <div className="input">
            <label className="textLogin">Tài khoản</label>
            <LoginInput placeholder="Nhập email hoặc tên đăng nhập" />
            <FbButton type="primary">
              <FacebookOutlined /> Đăng nhập bằng facebook
            </FbButton>
          </div>

          <div className="input">
            <label className="textLogin">Mật khẩu</label>
            <LoginInput type="password" placeholder="Nhập mật khẩu truy cập" />
          </div>

          <div>
            <LoginButton type="primary">Đăng nhập</LoginButton>
            <ForgetButton>Quên mật khẩu</ForgetButton>
          </div>
        </div>
      </Col>
      <Col className="col2">
        <Col2 />
      </Col>
    </Row>
  );
}

export default Login;
