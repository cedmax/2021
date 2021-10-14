import data from '../data';
import Head from 'next/head';
import Layout from '../components/layout';

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  };
};

export default function App({ data }) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://2021.dsgn.it/italians.jpg" />
        <meta property="og:url" content="https://2021.dsgn.it/" />
      </Head>
      <Layout data={data} />
    </>
  );
}
