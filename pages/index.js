import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

// Estructura
import NavBar from '../components/navbar/index'
import Button from '../components/boton/index'
import calendario from '../components/calendario/index'
import Loader from '../components/loader/index'
import SobreMi from '../secctions/sobreMi/index.'

import { createRef } from 'react'

const mainContainer = createRef() 

export default function Home() {
  return (
    <div className={styles.container} ref = {mainContainer}>
      <Head>
        <title>Stella Perez | Contadora</title>
      </Head>
      <nav className = {styles.nav}>
        <NavBar bodyRef = {mainContainer}/>
      </nav>
      <main className={styles.main}>
          
          <div className={styles.content}>
            <div className = {styles.centerMainPage}>
              <h3>Contadora Publica</h3>
              <p>Asesoría nivel contable, tributario, laboral y financiero</p>
              <Button url = {'/api/hello'} nombre = {'Contactame'}/>
              {/* <Loader/> */}
            </div>
          </div>
          
          <SobreMi/>

      </main>

      {/* <footer className={styles.footer}>
        <p>
          Powered by Maria Stella Perez Perez
        </p>
      </footer> */}
    </div>
  )
}
