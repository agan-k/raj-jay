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
      {name: 'home', uid: '/'},
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
      {name: 'media-kit', uid: '/#'},
   ]
   const links = navLinksData.map(link =>
      <li key={link.uid} className={router.pathname == `${link.uid}` ? 'active_nav_links' : ''}>
         <Link href={link.uid}><a>{link.name}</a></Link>
         <style jsx>{`
            .active_nav_links {
               display: none;
               // text-align: right;
            }
            .active_nav_links a {
               // background: black;
               margin: 0;
               // color: black;
               // text-decoration: underline;
               cursor: initial;
            }
            .active_nav_links a:hover {
               background: none;
               color: initial;
            }
         `}</style>
      </li>
   )
   function currentPage(path) {
      let active_page;
      if (path == '/') {
         active_page = 'home';
      } else {
         active_page = path.split("/")[1];
      }
      return active_page
   }
   // const active_page = router.pathname
   return (
      <div className={style.container}>
         <Head>
           <title>RajivJayaweera</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>
         <header className={style.header} onMouseOver={() => setNavShow(true)} onMouseOut={() => setNavShow(false)}>
            <div className={style.logo}>
            {router.pathname !== '/' ?
                  <Link href='/'><a><h1>RajivJayaweera.com/&nbsp;</h1></a></Link> :
                  <><h1>RajivJayaweera.com/</h1>&nbsp;</>
               }
               {/* <img src="/images/logo.png" />
               &nbsp; */}
               <div className={style.active_page}>
                     {currentPage(router.pathname)}
               </div>
               {/* {router.pathname !== '/' ?
                  <Link href='/'><h1>RajivJayaweera.com/&nbsp;</h1></Link> :
                  <><h1>RajivJayaweera.com/</h1>&nbsp;</>
               } */}
            </div>

            <div className={navShow ? style['nav_container_open'] : style['nav_container']}>
               <div className={style.nav}>
                  {/* <div className={style.active_page}>
                     {currentPage(router.pathname)}
                  </div> */}
                  <ul>
                     {links}
                  </ul>
               </div>
               <div className={style.nav_aux}>
                  <div className={style.social_icons}>
                     <a href="https://www.instagram.com/euroraj/" target="_blank">
                        <img src="/icons/instagram.png" />
                     </a>
                     <a href="https://www.facebook.com/rajivjayaweera/" target="_blank">
                        <img src="/icons/facebook.png" />
                     </a>
                     <a href="https://youtube.com/user/euroraj/videos" target="_blank">
                        <img src="/icons/youtube.png" />
                     </a>
                  </div>
                  <div className={style.mailing_list}>
                     <p>mailing list:</p>
                     <MailingList />
                  </div>
               </div>
            </div>
            <div className={style['nav_toggle']}>
               <div
                  className={!navShow ? style['open_icon'] : style['close_icon']}
                  onClick={() => setNavShow(!navShow)}
               >
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
