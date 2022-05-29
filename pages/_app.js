import Layout from "../components/layout"
import Head from "next/head"
import NavigationBar from "../components/navigationbar"

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