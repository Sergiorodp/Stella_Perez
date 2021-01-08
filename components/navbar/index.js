// import navStyle from '../../../styles/NavStyle/Nav.module.css'
import styles from './styles'

import Link from 'next/link'

export default function NavBar(){
    return(
        <>
        <div className= "mainNavContainer">
            <div className= "navItemsContainer">
                <h2>Stella Perez</h2>
                
                <div className = "opciones">
                    <ul className = "listItems">
                        <li> <Link href='https://vercel.com/dashboard/integrations'> Inicio </Link></li>    
                        <li><Link href='https://vercel.com/dashboard/integrations'>Sobre mí</Link></li>
                        <li><Link href='https://vercel.com/dashboard/integrations'>Servicios</Link></li>
                        <li><Link href='https://vercel.com/dashboard/integrations'>Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <style jsx>{styles}
        </style>
        </>
    )
}