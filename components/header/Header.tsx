import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {Nav, NavToggle, FlexBox} from "..";
import { useMediaQuery } from "../../utils/hooks";
import { MOBILE_BREAKPOINT, navLinks } from "../../utils/constants";
import {
   Container,
   Logo,
   ActivePage,
} from "./styled";
import { NavItem } from "../nav/styled";

export const Header: React.FC = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const [active, setActive] = useState('');
   const [disabled, setDisable] = useState(false);
   const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
   const router = useRouter();
   const pathname = router.pathname;
   const activePage = pathname.split("/")[1]; 
   const isHome = Boolean(pathname === '/');
   const navigationRoutes = navLinks.map(item => 
      <NavItem 
        key={item.name} 
        onClick={HandleToggleNav}
        onMouseOver={() => HandleActivePage(item.name)}
        >
        <Link href={item.url}>
          {item.name}
        </Link>
      </NavItem>
    );

   useEffect(() => {
      HandleActivePage(activePage);
      return(() => setDisable(false));
   }, [pathname, isNavOpen]);

   function HandleActivePage(active) {
      if (active === '/' || active === '') return setActive('home');
      setActive(active);
   }

   function HandleToggleNav() {
      setIsNavOpen(!isNavOpen);
   }

   return(
      <Container 
         onMouseOver={!isMobile ? () => setIsNavOpen(true) : undefined} 
         onMouseOut={!isMobile ? () => setIsNavOpen(false) : undefined}
         $disabled={disabled}
      >
         <FlexBox $flexWrap={'nowrap'}>
            <Logo>
               <Link href='/'>
                  <h1>
                     RAJIV JAYAWEERA /&nbsp;
                  </h1>
               </Link>
               <ActivePage>
                  {active}
               </ActivePage>
            </Logo>
         </FlexBox>
         <Nav 
            navigationRoutes={navigationRoutes}
            $isNavOpen={isNavOpen} 
         />
         {isMobile && (
            <NavToggle $isNavOpen={isNavOpen} HandleToggleNav={HandleToggleNav} />
         )}
      </Container>
  );
};
export default Header
