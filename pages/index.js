import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

// Estructura
import NavBar from '../Components/navbar/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stella Perez | Contadora</title>
      </Head>
      <NavBar/>
      <main className={styles.main}>
          
          <div className={styles.content}>
            <div className = {styles.centerMainPage}>
              <h3>Contadora Publica</h3>
              <p>Asesoría nivel contable, tributario, laboral y financiero</p>
            </div>
          </div>
        
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Maria Stella Perez Perez
        </p>
      </footer>
    </div>
  )
}
