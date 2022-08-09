import Head from "next/head";
import React from "react";
import { Layout } from "../components/App/Layout/Layout";
import RegisterPage from "../components/App/RegisterPage/RegisterPage";
const Register = () => {
  return (
    <Layout>
      <Head>
        <title>Login into app</title>
        <meta name="description" content="Login in chatto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.StepsLayout text="Создание нового аккаунта">
        <RegisterPage />
      </Layout.StepsLayout>
    </Layout>
  );
};

export default Register;
