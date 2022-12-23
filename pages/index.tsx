import Head from "next/head";
import { useSelector } from "react-redux";
import Items from "../components/components/Items";
import Layout from "../components/Layout/Layout";

export default function Home() {
  const items = useSelector((state) => state);
  console.log(items);
  return (
    <Layout>
      <Head>
        <title>Picture World --- search engine for pictures</title>
        <meta name="description" content="The search engine - beta phase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Items newData={[]} />
      </main>
    </Layout>
  );
}
