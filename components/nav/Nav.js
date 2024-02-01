import { useRouter } from "next/router";
import Link from "next/link";
import { navLinks, socialLinks as social } from "../../utils/constants";
import { 
  Wrapper, 
  NavContainer, 
  SocialIcon, 
  NavItem, 
  SocialWrapper,
  NavigationWrapper,
} from "./styled";

export default function Nav({navShow}) {
  const router = useRouter(); 
  console.log('navShow: ', navShow)
  const navigationRoutes = navLinks.map(item =>
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? true : false}>
      <Link href={item.url}>
        {item.name}
      </Link>
    </NavItem>
  );
  
  const socialLinks = social.map(item =>
    <SocialIcon key={item.name}>
      <a href={item.url} target="_blank">
        <img src={item.icon} alt={item.name} />
      </a>
    </SocialIcon>
  );

  return(
    <Wrapper navShow={navShow}>
      <NavContainer>
          <NavigationWrapper>
            {navigationRoutes}
          </NavigationWrapper>
          {/* <SocialWrapper>
            {socialLinks}
          </SocialWrapper> */}
      </NavContainer>
    </Wrapper>
  );
}