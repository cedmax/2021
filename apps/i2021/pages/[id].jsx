import { useEffect } from 'react';
import data from '../data';
import Head from 'next/head';
import Layout from '../components/layout';
import Share from '../components/share';
import { transformDate } from '../components/helpers';

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
  useEffect(() => {
    document.getElementById(slug).scrollIntoView();
  }, [slug]);

  return (
    <>
      <Head>
        <title>{prominent.title}</title>
        <meta property="og:title" content={prominent.title} />
        <meta name="description" content={transformDate(prominent.date)} />
        <meta property="og:site_name" content="How was your 2021?" />
        <meta
          property="og:description"
          content={transformDate(prominent.date)}
        />
        <meta
          property="og:image"
          content={`https://2021.dsgn.it/images/${slug}.jpg`}
        />
        <meta property="og:url" content={`https://2021.dsgn.it/${slug}`} />
      </Head>
      <Layout data={data} />
      <Share event={prominent} />
    </>
  );
}
