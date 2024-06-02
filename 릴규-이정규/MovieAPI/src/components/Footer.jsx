import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 5px;
  text-align: right;
  background-color: rgba(15, 9, 59, 1);
`;

const FooterText = styled.div`
  margin-right: 20px;
`;

const Footer = () => {
  const location = useLocation();
  return (
    <StyledFooter>
      <FooterText>
        <span>https://www.makeus.in/umc</span>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
