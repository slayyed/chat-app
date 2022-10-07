import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/App/Layout/Layout";
import LoginPage from "../components/App/LoginPage/LoginPage";
import { GetServerSideProps } from "next";
import absoluteUrl from "next-absolute-url";
import axios from "axios";
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
export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
  req,
  res,
}) => {
  const { origin } = absoluteUrl(req);
  const response = await axios.get(`${origin}/api/auth/status`, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie! || "",
    },
  });

  console.log(response.data);

  return { props: {} };
};
export default Login;
