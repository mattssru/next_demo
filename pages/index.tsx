import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Button type="primary">Primar y Button</Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
