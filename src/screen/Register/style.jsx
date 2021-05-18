import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input, Button } from "antd";

export const RegisterInput = styled(Input)`
  background-color: #353434;
  border-radius: 0.3rem;
  width: 22rem;
  height: 2.5rem;
  border-color: black;
  color: white;
`;

export const CaptchaInput = styled(Input)`
  background-color: #353434;
  border-radius: 0.3rem;
  width: 9rem;
  height: 2.5rem;
  border-color: black;
  color: white;
`;

export const SubButton = styled(Button)`
  font-size: small;
  font-weight: bold;
  padding-inline: 0;
  width: 5rem;
  height: 2.5rem;
  border-radius: 7px;
  margin-left: 10.5rem;
`;
