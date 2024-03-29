import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUs from '../components/Home/AboutUs'
import Banner from '../components/Home/Banner'
import Jobs from '../components/Home/Jobs'
import Projects from '../components/Home/Projects'
import Services from '../components/Home/Services'
import styles from '../styles/Home.module.css'


export default function Home({services, projects}) {
  return (
    <>
      <NextSeo
        title="Bienvenidos | EDsoft"
        description="Página de inicio de nuestro sitio EDsoft"
      />
      <main>
        <Banner />
        <Services services={services} />
        <AboutUs />
        <Projects projects={projects} />
        <Jobs />
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const resp = await fetch("http://edsoft.vercel.app/api/services");
  const services = await resp.json();

  const resp2 = await fetch("http://edsoft.vercel.app/api/last-projects");
  const projects = await resp2.json();

  return{
    props:{
      services,
      projects
    }
  }
}