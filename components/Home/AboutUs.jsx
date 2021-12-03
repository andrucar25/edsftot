import Link from 'next/link'

const AboutUs = () => {
    return ( 
        <section className="section-container about-section">
        <div className="content-wrapper">
          <h2 className="title">Sobre nosotros</h2>
          <p>Este es el sitio web de nuestra agencia de desarrollo.</p>
          <Link href="/proyectos.html">
              <a className="button white ghost">Ver experiencia</a>
          </Link>
         
        </div>
        <img className="background" src="/images/bg-section.jpg" alt="Alumnos estudiando" />
      </section>
     );
}
 
export default AboutUs;