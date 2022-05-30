import Head from "next/head"
import {Container } from 'react-bootstrap'
import NavigationBar from "../components/navigationbar"
import Footer from '../components/footer'

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
        <div style={{background:'white', color:'black', minHeight:'100vh'}}>
            <NavigationBar />
            {children}
        </div>
        <Footer />
    </>
  )
}