import Head from "next/head";
import React from "react";
import { Layout } from "../components/App/Layout/Layout";
import CodeVerification from "../components/App/VerificationAccountPage/index";
const Code = () => {
  return (
    <Layout>
      <Head>
        <title>Verificate your account</title>
        <meta name="description" content="Login in chatto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.StepsLayout text="Подтверждение аккаунта">
        <CodeVerification />
      </Layout.StepsLayout>
    </Layout>
  );
};

export default Code;
