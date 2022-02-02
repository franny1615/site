import Layout from "../components/layout"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
