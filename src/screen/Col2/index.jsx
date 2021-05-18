import React from "react";
import { Col } from "reactstrap";
import { Button, Menu, Switch, Tabs } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Day from "../../components/Day";

import "./col2.scss";

// Col.propTypes = {

// };

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const BloaTabs = styled(Tabs)`
  color: white;
  font-weight: bold;
`;

const Item1TabPane = styled(TabPane)`
  background-color: #302f2f;
  font-size: 5rem;
`;

function Col2() {
  return (
    <div className="blcoka">
      <div className="blocka__header">
        <div className="blocka__textBox">
          <p3 className="blocka__title">⭐️ XEM NHIỀU NHẤT</p3>
        </div>
        <BloaTabs defaultActiveKey="1" onChange={callback}>
          <Item1TabPane tab="Ngày" key="1">
            <Day />
          </Item1TabPane>
          <Item1TabPane tab="Tuần" key="2">
            Content of Tab Pane 2
          </Item1TabPane>
          <Item1TabPane tab="Tháng" key="3">
            Content of Tab Pane 3
          </Item1TabPane>
          <Item1TabPane tab="Mùa" key="4">
            Content of Tab Pane 4
          </Item1TabPane>
          <Item1TabPane tab="Năm" key="5">
            Content of Tab Pane 5
          </Item1TabPane>
        </BloaTabs>
      </div>
    </div>
  );
}

export default Col2;
