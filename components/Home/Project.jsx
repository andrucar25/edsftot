import Link from 'next/link'
import Image from 'next/image'

const Project = ({title, description, image}) => {
    return ( 
        <Link href="#">
            <a className="project-item">
                <article>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="image-container">
                {/* layout="fill" placeholder="blur" blurDataURL={image} */}
                <Image src={ image } alt={ title } layout="fill" placeholder="blur" blurDataURL={image}/>
                </div>
                </article>
            </a>
        </Link>
        
     );
}
 
export default Project;