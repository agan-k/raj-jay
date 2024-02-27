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
   const activePage = pathname.split("/")[1];
   const isHome = Boolean(pathname === '/');

   function HandleToggleOpen() {
      setIsNavOpen(!isNavOpen);
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
            <NavToggle $isNavOpen={isNavOpen} handleToggleNav={() => HandleToggleOpen()} />
         )}
      </Container>
  );
}