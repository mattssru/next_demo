import React from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(import("./Footer"));

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
