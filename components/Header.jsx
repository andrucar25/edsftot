import Link from 'next/link'
import MainMenu from './MainMenu'
import Image from 'next/image'

const Header = () => {
    return(
        <header className="main-header">
            <div className="content-wrapper">
                <Link href="/">
                <a>
                    <Image src="/images/logo.svg" alt="Logo EDsoft" width={136} height={132}/>
                </a>
                </Link>
                
                <span id="open-menu-button" className="jam jam-menu"></span>
               
               <MainMenu/>
            </div>
    </header>
    )
}

export default Header