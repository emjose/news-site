// import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>

    <Toolbar/>

      <div className={styles.main}>
        <h1>News Site</h1>

        <h3>Your one stop show for the Latest News</h3>
      </div>
    </div>

  );
}

// Emmanuel Jose logo and favicon. © Emmanuel Jose. All Rights Reserved.