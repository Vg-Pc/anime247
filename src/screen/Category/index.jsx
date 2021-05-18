import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Breadcrumb, Select, Button, Pagination } from "antd";
import "./category.scss";
import styled from "styled-components";
// import { Button } from "reactstrap";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const FirstBreadcrumb = styled(Breadcrumb)`
  background-color: #222222;
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  margin-top: 3rem;
`;

const Item1Select = styled(Select)`
  width: 8rem;
`;

const Item2Select = styled(Select)`
  width: 7rem;
`;

const Item3Select = styled(Select)`
  width: 7rem;
`;

const Item4Select = styled(Select)`
  width: 7rem;
`;

const Item5Select = styled(Select)`
  width: 7rem;
`;

const BrowseButton = styled(Button)`
  width: 6rem;
  padding-inline: 0;
  border-radius: 0.2rem;
  background-color: red;
  color: white;
  align-self: flex-end;
`;

const FooterPagination = styled(Pagination)`
  padding-top: 1rem;
`;

Category.propTypes = {};

function Category() {
  return (
    <div className="category">
      <FirstBreadcrumb>
        <FirstBreadcrumb.Item>
          <a
            href=""
            style={{
              color: "#30c9fc",
            }}
          >
            XEM ANIME
          </a>
        </FirstBreadcrumb.Item>
        <FirstBreadcrumb.Item>
          <a
            href=""
            style={{
              color: "#30c9fc",
            }}
          >
            THỂ LOẠI
          </a>
        </FirstBreadcrumb.Item>
      </FirstBreadcrumb>

      <div className="category__header">
        <div className="category__col1">
          <div className="category__item">
            <p className="category__text">Tiến độ</p>
            <Item1Select defaultValue="Tất cả" onChange={handleChange}>
              <Option value="all">Tất cả</Option>
              <Option value="done">Hoàn thành</Option>
              <Option value="yet">Chưa xong</Option>
            </Item1Select>
          </div>

          <div className="category__item">
            <p className="category__text">Thể loại</p>
            <Item2Select defaultValue="Thể loại 1" onChange={handleChange}>
              <Option value="1">Thể loại 1</Option>
              <Option value="2">Thể loại 2</Option>
              <Option value="3">Thể loại 3</Option>
            </Item2Select>
          </div>
        </div>
        <div className="category__col2">
          <div className="category__item">
            <p className="category__text">Theo mùa</p>
            <Item3Select defaultValue="Tất cả" onChange={handleChange}>
              <Option value="1">Tất cả</Option>
              <Option value="2">Xuân</Option>
              <Option value="3">Hạ</Option>
              <Option value="3">Thu</Option>
              <Option value="3">Đông</Option>
            </Item3Select>
          </div>

          <div className="category__item">
            <p className="category__text">Năm phát hành</p>
            <Item4Select defaultValue="Tất cả" onChange={handleChange}>
              <Option value="1">Tất cả</Option>
              <Option value="2">2021</Option>
              <Option value="3">2020</Option>
            </Item4Select>
          </div>

          <div className="category__item">
            <p className="category__text">Săp xếp</p>
            <Item5Select defaultValue="Lượt xem" onChange={handleChange}>
              <Option value="1">Lượt xem</Option>
              <Option value="2">Bình luận</Option>
              <Option value="3">Năm</Option>
            </Item5Select>
          </div>

          <BrowseButton>
            <a className="textButton" href="">
              Duyệt phim
            </a>
          </BrowseButton>
        </div>
      </div>
      <FooterPagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default Category;
