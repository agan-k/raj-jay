import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {Nav, NavToggle} from "../../components";
import { useMediaQuery } from "../../utils/hooks";
import { MOBILE_BREAKPOINT } from "../../utils/constants";
import {
   Container,
   Logo,
   ActivePage,
} from "./styled";

export default function Header() {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
   const router = useRouter();
   const pathname = router.pathname;
   const activePage = getActivePage(pathname);
   const isHome = Boolean(pathname === '/');

   function HandleToggleOpen() {
      console.log('toggle')
      setIsNavOpen(!isNavOpen);
    }

   function getActivePage(pathname) {
      let active;
      if (pathname == '/') {
         active = 'home';
      } else if (pathname == '/disco') {
         active = 'discography';
      } else {
         active = pathname.split("/")[1];
      }
      return active;
   }

   return(
      <Container 
         onMouseOver={!isMobile ? () => setIsNavOpen(true) : undefined} 
         onMouseOut={!isMobile ? () => setIsNavOpen(false) : undefined}
         $isNavOpen={isNavOpen}
      >
         <Logo>
            {isHome ?
               <h1>RAJIV JAYAWEERA /&nbsp;</h1> :
               <Link href='/'><h1>RAJIV JAYAWEERA /&nbsp;</h1></Link>
            }
            <ActivePage>
               {activePage}
            </ActivePage>
         </Logo>
         <Nav $isNavOpen={isNavOpen} handleToggleNav={() => HandleToggleOpen()}/>
         {isMobile && (
            <NavToggle handleToggleNav={() => HandleToggleOpen()} />
         )}
      </Container>
  );
}