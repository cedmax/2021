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
        <title>How was your 2021?</title>
        <meta property="og:title" content="How was your 2021?" />
        <meta name="description" content="It looks like Italy did well" />
        <meta property="og:site_name" content="How was your 2021?" />
        <meta
          property="og:description"
          content="It looks like Italy did well"
        />
        <meta property="og:image" content="https://2021.dsgn.it/italians.jpg" />
        <meta property="og:url" content="https://2021.dsgn.it/" />
      </Head>
      <Layout data={data} />
    </>
  );
}
