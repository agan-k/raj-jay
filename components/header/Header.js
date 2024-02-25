import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {Nav, NavToggle} from "../../components";
import {
   Container,
   Logo,
   ActivePage,
} from "./styled";

export default function Header() {
   const [open, setOpen] = useState(false)
   const router = useRouter();
   const pathname = router.pathname;
   const activePage = getActivePage(pathname);
   const isHome = Boolean(pathname === '/');

   // function HandleToggleOpen() {
   //    setOpen(!open);
   //  }

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
         onMouseOver={() => setOpen(true)} 
         onMouseOut={() => setOpen(false)}
         $isNavOpen={open}
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
         <Nav $isNavOpen={open} />
         {/* TODO Mobile: */}
         {/* <NavToggle handleToggleNav={() => HandleToggleOpen()} /> */}
      </Container>
  );
}