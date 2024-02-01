import { Container } from "./styled";

export default function Footer() {
  return(
    <Container>
      Site by
      <a
        href="https://formversuscontent.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;{'FormVsContent'}
      </a>
    </Container>
  );
}