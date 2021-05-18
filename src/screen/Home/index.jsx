import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import All from "../../components/All";
import MenuHeader from "components/MenuHeader";
import Col2 from "../../screen/Col2";
import Day from "../../components/Day";
import { Col } from "reactstrap";
import { Button, Menu, Switch, Tabs } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import "./home.scss";
import InfiniteCarousel from "react-leaf-carousel";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const listOptions2 = () => {
  let options1 = [];
  for (let i = 0; i < 8; i++) {
    options1.push({
      name: `The anime b ${i + 1}`,
      id: i + 1,
    });
  }
  return options1;
};

const Blo1Tabs = styled(Tabs)`
  color: white;
  font-weight: bold;
`;

const BloaTabs = styled(Tabs)`
  color: white;
  font-weight: bold;
`;

const TitleTabPane = styled(TabPane)`
  background-color: white;
`;

const ItemTabPane = styled(TabPane)`
  font-size: large;
`;

const Item1TabPane = styled(TabPane)`
  background-color: #302f2f;
  font-size: 5rem;
`;

Home.propTypes = {};

function Home() {
  return (
    <div className="home">
      <div className="scroll">
        {/* <ScrollMenu
          className="scroll__menu"
          style={{
            marginInline: 0,
          }}
          arrowLeft={<div className="scroll__arrow">{" < "}</div>}
          arrowRight={<div className="scroll__arrow">{" > "}</div>}
          data={listOptions1().map((item, index) => (
            <div className="scroll__item" key={index}>
              <div className="scroll__avt"></div>
              {item.name}
            </div>
          ))}
        /> */}

        <MenuHeader />
      </div>
      <div className="main">
        <Col className="col1">
          <div className="block1">
            <div className="block1__header">
              <div className="block1__textBox">
                <p3 className="title">ANIME MỚI CẬP NHẬT</p3>
              </div>
              <Blo1Tabs defaultActiveKey="1" onChange={callback}>
                {/* <ItemTabPane tab="ANIME MỚI CẬP NHẬT" key="1">
                <All />
              </ItemTabPane> */}
                <ItemTabPane tab="Tất cả" key="1">
                  <All />
                </ItemTabPane>
                <ItemTabPane tab="Mùa này" key="2">
                  Content of Tab "Mùa này"
                </ItemTabPane>
                <ItemTabPane tab="Mùa trước" key="3">
                  Content of Tab "Mùa trước"
                </ItemTabPane>
                <ItemTabPane tab="Bộ cũ" key="4">
                  Content of Tab "Bộ cũ"
                </ItemTabPane>
              </Blo1Tabs>
            </div>
          </div>

          <div className="block2">
            <div className="block2__textBox">
              <p3 className="title">HOẠT HÌNH TRUNG QUỐC</p3>
            </div>
            <div className="block2__list">
              {listOptions2().map((item, index) => {
                return (
                  <div className="block2__item" key={index}>
                    <div className="block2__avt"></div>
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </Col>

        <Col className="col2">
          <Col2 />

          <div className="blcokb"></div>
        </Col>
      </div>
    </div>
  );
}

export default Home;
