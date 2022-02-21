import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
        <Head>
        <title>Francisco Funes</title>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
        />
        </Head>
        <div style={{background:'black', color:'white', padding:10}}>{children}</div>
    </>
  )
}