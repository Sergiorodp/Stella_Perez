// import navStyle from '../../../styles/NavStyle/Nav.module.css'
import styles from './styles'
import Link from 'next/link'
import { createRef } from 'react'

const lineUp = createRef()
const LineDown = createRef()

export default function NavBar(){
    
    var visible = false

    const show = () =>{
        visible = !visible
        if(visible){
            console.log('abierto')
            lineUp.current.classList.add("moverLeft")
            LineDown.current.classList.add("moverRight")
        }else{
            console.log('cerrado')
            lineUp.current.classList.remove("moverLeft")
            LineDown.current.classList.remove("moverRight")
        }
    }

    return(
        <>
        <div className= "mainNavContainer">
            <div className= "navItemsContainer">
                <h2>Stella Perez</h2>
                
                <div className = "opciones">
                    <ul className = "listItems">
                        <li> <Link href='/'> Inicio </Link></li>    
                        <li><Link href='/api/hello'>Sobre mí</Link></li>
                        <li><Link href='https://vercel.com/dashboard/integrations'>Servicios</Link></li>
                        <li><Link href='https://vercel.com/dashboard/integrations'>Contacto</Link></li>
                    </ul>
                </div>
                <div className = "lines-nav-container">
                    <div className = "lines-block" onClick = {show}>
                        <div className = "line-one line-div " ref = {lineUp} ></div>
                        <div className = "line-two line-div" ></div>
                        <div className = "line-tree line-div " ref={LineDown} ></div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{styles}
        </style>
        </>
    )
}