import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import { Button, Input, Space, Dropdown, Menu } from "antd";
import Footer from "./components/Footer";
import Category from "./screen/Category";
import Home from "./screen/Home";
import Multiple from "./screen/Multiple";
import Status from "./screen/Status";
import Register from "./screen/Register";
import {
  PhoneFilled,
  FacebookOutlined,
  LikeFilled,
  SearchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import styled from "styled-components";
import Login from "screen/Login";

const LoginButton = styled(Button)`
  background-color: black;
  color: white;
  width: 5.5rem;
  height: 2.5rem;
  font-size: 13px;
  font-weight: bold;
  padding-inline: 0;
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

const RegisterButton = styled(Button)`
  background-color: black;
  color: white;
  width: 4.5rem;
  height: 2.5rem;
  font-size: 13px;
  font-weight: bold;
  padding-inline: 0;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
`;

const FbButton = styled(Button)`
  background-color: darkblue;
  color: white;
  width: 10rem;
  height: 2.3rem;
  font-size: 10px;
  font-weight: bold;
  padding-inline: 0;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
`;

const TabButton = styled(Button)`
  color: white;
  font-size: 15px;
  font-weight: bold;
  font-style: revert;
  background-color: black;
  border-color: black;
  height: 3rem;
`;

const LikeButton = styled(Button)`
  font-size: 10px;
  font-weight: bold;
  height: 1.5rem;
  width: 3.5rem;
  padding-inline: 0;
  padding-block: 0;
  margin-right: 0.5rem;
  color: white;
  background-color: steelblue;
  border-radius: 0.2rem;
`;

const ShareButton = styled(Button)`
  font-size: 10px;
  font-weight: bold;
  height: 1.5rem;
  width: 3rem;
  padding-inline: 0;
  padding-block: 0;
  margin-right: 0.5rem;
  color: white;
  background-color: steelblue;
  border-radius: 0.2rem;
`;

const SearchInput = styled(Input)`
  width: 20rem;
  height: 2.5rem;
  border-radius: 2rem;
`;

// const SubmitInput = styled(Input)`
//   display: none;
// `;

const onSearch = (value) => console.log(value);

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const menu1 = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Thể loại 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Thể loại 2
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Thể loại 3
      </a>
    </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Hoàn thành
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Đang tiến hành
      </a>
    </Menu.Item>
  </Menu>
);

const menu3 = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Top tuần
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Top tháng
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        Top năm
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="row1">
          <div className="row1__logo"></div>
          <div className="row1__input">
            <SearchInput
              type="search"
              suffix={suffix}
              placeholder="Tìm: tên anime ..."
              // autoComplete="off"
              onSearch={onSearch}
            />
            {/* <SubmitInput type="submit" /> */}
          </div>
          <div className="row1__listButton">
            <RegisterButton>
              <a rel="nofollow" href="http://localhost:3000/register">
                Đăng Ký
              </a>
            </RegisterButton>

            <LoginButton>
              <a rel="nofollow" href="http://localhost:3000/login">
                Đăng Nhập
              </a>
            </LoginButton>

            <FbButton type="primary">
              <a rel="nofollow" href="http://localhost:3000/login">
                <FacebookOutlined /> Đăng nhập bằng facebook
              </a>
            </FbButton>
          </div>
        </div>
        <Suspense className="row2" fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <ul className="row2__tab">
              <li className="row2__tabTitle">
                <Link className="row2__tabLink" to="/home">
                  <TabButton type="primary">TRANG CHỦ</TabButton>
                </Link>
              </li>

              <Dropdown overlay={menu1}>
                <a onClick={(e) => e.preventDefault()}>
                  <li className="row2__tabTitle">
                    <Link className="row2__tabLink" to="/category">
                      <TabButton type="primary">THỂ LOẠI</TabButton>
                    </Link>
                  </li>
                </a>
              </Dropdown>

              <Dropdown overlay={menu2}>
                <a onClick={(e) => e.preventDefault()}>
                  <li className="row2__tabTitle">
                    <Link className="row2__tabLink" to="/status">
                      <TabButton type="primary">TRẠNG THÁI</TabButton>
                    </Link>
                  </li>
                </a>
              </Dropdown>

              <Dropdown overlay={menu3}>
                <a onClick={(e) => e.preventDefault()}>
                  <li className="row2__tabTitle">
                    <Link className="row2__tabLink" to="/multiple">
                      <TabButton type="primary">XEM NHIỀU</TabButton>
                    </Link>
                  </li>
                </a>
              </Dropdown>
            </ul>

            <Switch>
              <Redirect exact from="/" to="/home" />

              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/multiple" component={Multiple} />
              <Route path="/status" component={Status} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
