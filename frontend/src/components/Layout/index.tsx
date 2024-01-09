import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
