import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./footer.scss";
import Category from "../../screen/Category";
import Home from "../../screen/Home";
import Multiple from "../../screen/Multiple";
import Status from "../../screen/Status";
import styled from "styled-components";
import { Button, Input, Space, Dropdown, Menu } from "antd";
import {
  PhoneFilled,
  FacebookOutlined,
  LikeFilled,
  SearchOutlined,
} from "@ant-design/icons";

Footer.propTypes = {};

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

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="cola">
          <div className="cola__up">
            <a className="cola__link">Xem anime</a>
            <a className="cola__link">HayHayTv</a>
          </div>
          <p className="cola__text">© 2017 All Rights Reserved •</p>
        </div>

        <div className="colb">
          <div className="colb__first">
            <FacebookOutlined
              style={{
                fontSize: 50,
                color: "white",
                paddingRight: "0.5rem",
              }}
            />
            <div className="colb__block">
              <a className="colb__link1">FANPAGE FACEBOOK</a>
              <div className="colb__button">
                <LikeButton type="primary">
                  <LikeFilled /> Like
                </LikeButton>
                <ShareButton type="primary">Share</ShareButton>
              </div>
            </div>
          </div>
          <div className="colb__last">
            <PhoneFilled
              style={{
                fontSize: 50,
                color: "white",
                paddingRight: "0.5rem",
              }}
            />
            <a className="colb__link2">
              Liên hệ quảng cáo:
              <br />
              toiviet.com@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
