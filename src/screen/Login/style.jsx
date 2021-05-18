import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input, Button, Breadcrumb } from "antd";

export const LoginInput = styled(Input)`
  background-color: #353434;
  border-radius: 0.3rem;
  width: 16rem;
  height: 2.5rem;
  border-color: black;
  color: white;
`;

export const LoginButton = styled(Button)`
  font-size: small;
  font-weight: bold;
  padding-inline: 0;
  width: 6rem;
  height: 2.5rem;
  border-radius: 7px;
  margin-left: 6.5rem;
`;

export const ForgetButton = styled(Button)`
  font-size: small;
  font-weight: bold;
  padding-inline: 0;
  width: 8rem;
  height: 2.5rem;
  border-radius: 7px;
  margin-left: 0.5rem;
  background-color: #686868;
  border: #686868;
  color: #00ffea;
`;

export const FbButton = styled(Button)`
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

export const LoginBreadcrumb = styled(Breadcrumb)`
  background-color: #222222;
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
`;
