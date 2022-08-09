import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/App/Layout/Layout";
import LoginPage from "../components/App/LoginPage/LoginPage";

const Login: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Login into app</title>
        <meta name="description" content="Login in chatto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.StepsLayout text="Вход в аккаунт">
        <LoginPage />
      </Layout.StepsLayout>
    </Layout>
  );
};

export default Login;
