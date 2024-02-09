import { Container } from "./styled";

export default function FlexBox({
  children, 
  flexDirection, 
  justifyContent, 
  alignContent, 
  alignItems, 
  width,
}) {
  return (
    <Container 
      width={width}
      flexDirection={flexDirection} 
      justifyContent={justifyContent} 
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </Container>
  );
}