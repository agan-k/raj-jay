'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {Nav, MailingList} from "../../components";
import {
   Container,
   Logo,
   ActivePage,
} from "./styled";

export default function Header() {
   const [navShow, setNavShow] = useState(false)
   const router = useRouter();
   const pathname = router.pathname;
   const activePage = getActivePage(pathname);
   const isHome = Boolean(pathname === '/')

   function getActivePage(pathname) {
      let active;
      if (pathname == '/') {
         active = 'home';
      } else {
         active = pathname.split("/")[1];
      }
      return active;
   }

   return(
      <Container 
         onMouseOver={() => setNavShow(true)} 
         onMouseOut={() => setNavShow(false)}
      >
         <Logo>
            {isHome ?
               <h1>RajivJayaweera.com/&nbsp;</h1> :
               <Link href='/'><h1>RajivJayaweera.com/&nbsp;</h1></Link>
            }
            <ActivePage>
               {activePage}
            </ActivePage>
         </Logo>
         <Nav navShow={navShow} />
         <MailingList />
      </Container>
  );
}