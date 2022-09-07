import React from "react";
import Home from "../components/Landing/Home/Home";
import Layout from "../components/Landing/Layout/Layout";

const Welcome = () => {
  return (
    <Layout>
      <Home />
      <div style={{ height: "2000px" }}></div>
    </Layout>
  );
};

export default Welcome;
