/* eslint-disable react/prop-types */
// src/components/Layout.jsx
import { Layout as AntLayout } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";

const { Header, Content, Footer: AntFooter } = AntLayout;

const Layout = ({ children }) => (
  <AntLayout className='min-h-screen bg-primary'>
    <Header className='bg-primary'>
      <Navbar />
    </Header>
    <Content>{children}</Content>
    <AntFooter className='bg-primary'>
      <Footer />
    </AntFooter>
  </AntLayout>
);

export default Layout;
