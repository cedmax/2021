import data from '../data';
import Head from 'next/head';
import Layout from '../components/layout';
import Prominent from '../components/prominent';

export const getStaticProps = async ({ params: { id } }) => {
  const prominent = data.filter(({ img: { slug } }) => slug === id)[0];
  return {
    props: {
      data,
      prominent,
      slug: id,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = data.map(({ img: { slug } }) => ({
    params: { id: slug },
  }));

  return { paths, fallback: false };
};

export default function App({ data, slug, prominent }) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://2021.dsgn.it/images/${slug}.jpg`}
        />
        <meta property="og:url" content={`https://2021.dsgn.it/${slug}`} />
      </Head>
      <Layout data={data} />
      <Prominent event={prominent} />
    </>
  );
}
