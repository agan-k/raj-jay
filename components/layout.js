import React from "react"
import Link from "next/link"
import Head from "next/head"

import style from "./layout.module.css"

export default function Layout({children}) {
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
                  <li>
                     <Link href="#"><a>News</a></Link>&nbsp;
                     <Link href="/bio"><a>Bio</a></Link>&nbsp;
                     <Link href="/blog"><a>Blog</a></Link>&nbsp;
                     <Link href="/shows"><a>Shows</a></Link>&nbsp;
                     <Link href="/press"><a>Press</a></Link>&nbsp;
                     <Link href="/photos"><a>Photos</a></Link>&nbsp;
                     <Link href="/videos"><a>Videos</a></Link>&nbsp;
                     <Link href="/disco"><a>Discography</a></Link>&nbsp;
                     <Link href="/contact"><a>Contact</a></Link>&nbsp;
                     <Link href="/links"><a>Links</a></Link>&nbsp;
                  </li>
               </ul>

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
