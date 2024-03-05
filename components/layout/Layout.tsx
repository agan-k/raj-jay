import {ReactNode} from 'react';
import Head from "next/head";
import { Container, PageWrapper, Banner } from "./styled";
import  {Footer, Header} from "../../components";

interface LayoutProps {
  children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  children, 
  title = 'Rajiv Jayaweera',
}) => {
  return(
    <Container>
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer/>
    </Container>
  );
}