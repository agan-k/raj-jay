
import Head from "next/head";
import { Container, PageWrapper, Banner } from "./styled";
import  {Footer, Header} from "../../components";

export default function Layout({children, title = 'Rajiv Jayaweera',}) {
  return(
    <Container>
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer/>
    </Container>
  );
}