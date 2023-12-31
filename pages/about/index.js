import Layout from "@/components/layouts";
import Head from "next/head";

// fetch a random joke (generated on every reqest)
export async function getServerSideProps() {
  try {
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');

    return {
      props: {
        data: await res.json()
      }
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}

export default function About({ data }) {
  return (
    <Layout hero="keyboard.jpg">
      <Head>
        <title>About us</title>
        <meta name="description" content="What we do." />
      </Head>

      <h1>About us</h1>
      <p>Some information about us.</p>

      <h2>A random { data.type } joke</h2>
      <p className="setup">{ data.setup }...</p>
      <p className="punchline">{ data.punchline }</p>

      <style jsx>{`
        .setup { font-weight: bold; }
        .punchline { font-style: italic; }
      `}</style>
    </Layout>
  );
}