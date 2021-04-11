import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"

import { navLinksData } from '../pages/navLinks'
import style from "./layout.module.css"

export default function Layout({ children }) {
   const [mobileNavShow, setMobileNavShow] = useState(false)
   const router = useRouter()
   const links = navLinksData.map(link =>
      <li className={router.pathname == `${link.uid}` ? 'active_nav_links' : ''}>
         <Link href={link.uid}><a>{link.name}</a></Link>
      </li>
      )
   return (
      <div className={style.container}>
         <Head>
           <title>RajivJayaweera</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>
         <header className={style.header}>
            <div className={style.nav_container}>
               <h1>RajivJayaweera.com</h1>
               <ul>
                  {links}
               </ul>
               <div className={style['mobile_nav_toggle']} onClick={() => setMobileNavShow(!mobileNavShow)}>
                  <div className={!mobileNavShow ? style['open_icon'] : style['close_icon']}>

                  </div>

               </div>

            </div>
            
            
         </header>
         <main className={style.main}>
            {children}
         </main>
         <footer className={style.footer}>
              <a
                href="https://formversuscontent.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site by&nbsp;{'FormVsContent'}
              </a>
            </footer>
      </div>
   )
}
