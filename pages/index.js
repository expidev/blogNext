import Layout from "@/components/layouts";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
       <Layout>
         <Head>
            <title>Next.js starter site</title>
            <meta
              name="description"
              content="An example a blog site build by Next.js"
            />
         </Head>

         <h1>Next.js starter site</h1>
         <p>
            This is a demonstration blog using <a href="https://nextjs.org/">Next.js</a>.
         </p>
         <p>
            Find more <Link href="/about">about us...</Link>
         </p>
       </Layout>
    );
}