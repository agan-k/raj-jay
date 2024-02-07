import { Container } from "./styled";

export default function FlexBox({children, justifyContent, alignContent, width}) {
  console.log(alignContent)
  return (
    <Container 
      width={width} 
      justifyContent={justifyContent} 
      alignContent={alignContent}
    >
      {children}
    </Container>
  );
}