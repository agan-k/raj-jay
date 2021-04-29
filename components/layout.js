import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"

import MailingList from './mailingList'
import style from "./layout.module.css"

export default function Layout({ children }) {
   const [navShow, setNavShow] = useState(false)
   const router = useRouter()
   const navLinksData = [
      {name: 'news', uid: '/'},
      {name: 'bio', uid: '/bio'},
      {name: 'blog', uid: '/blog'},
      {name: 'shows', uid: '/shows'},
      {name: 'press', uid: '/press'},
      {name: 'photos', uid: '/photos'},
      {name: 'videos', uid: '/videos'},
      {name: 'discography', uid: '/disco'},
      {name: 'store', uid: 'https://pistils.bandcamp.com/merch'},
      {name: 'links', uid: '/links'},
      {name: 'contact', uid: '/contact'},
   ]
   const links = navLinksData.map(link =>
      <li key={link.uid} className={router.pathname == `${link.uid}` ? 'active_nav_links' : ''}>
         <Link href={link.uid}><a>{link.name}</a></Link>
         <style jsx>{`
            .active_nav_links {
               // text-align: right;
            }
            .active_nav_links a {
               background: black;
               margin: 0;
               color: white;
               cursor: initial;
            }
         `}</style>
      </li>
      )
   return (
      <div className={style.container}>
         <Head>
           <title>RajivJayaweera</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>
         <header className={style.header}>
            <img className={style.logo} src="/images/logo.png" />
            &nbsp;
            {router.pathname !== '/' ?
               <Link href='/'><h1>RajivJayaweera.com&nbsp;</h1></Link> :
               <><h1>RajivJayaweera.com</h1>&nbsp;</>
            }

            {/* <div className={style['nav_toggle']} onClick={() => setNavShow(!navShow)}>
               <div className={!navShow ? style['open_icon'] : style['close_icon']}>
               
               </div>
            </div> */}

            <div className={navShow ? style['nav_container_open'] : style['nav_container']}>
               <span className={style.close_nav_container} onClick={() => setNavShow(!navShow)}>&times;</span>
               <div className={style.nav}>
                  <ul>
                     {links}
                  </ul>
               </div>

               <div className={style.mailing_list}>
                  <p>mailing list:</p>
                  <MailingList />
               </div>
            </div><div className={style['nav_toggle']} onClick={() => setNavShow(!navShow)}>
               <div className={!navShow ? style['open_icon'] : style['close_icon']}>
                  
               </div>
            </div>
            
            
         </header>
         <main className={style['main']}>
            {children}
         </main>
         <footer className={style.footer}>Site by
              <a
                href="https://formversuscontent.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;{'FormVsContent'}
              </a>
            </footer>
      </div>
   )
}
