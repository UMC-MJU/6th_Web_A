import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: rgba(23, 27, 57, 1);
  height: 60px;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 20px;
  justify-content: space-between;
  width: calc(100vw - 40px);
`;

const GithubLogo = styled.img`
  width: 30px;
  height: auto;
`;

const Footer = () => {
  const githubURL = "https://github.com/Low-ProFiles";

  return (
    <Body>
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
        <GithubLogo src="/github.png" alt="github" />
      </a>
      Copyright © 2024 Min Cheol Park All rights reserved.
    </Body>
  );
};

export default Footer;
