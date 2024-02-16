import { Container } from "./styled";

export default function FlexBox({
  children,
  flexWrap,
  flexDirection, 
  justifyContent, 
  alignContent, 
  alignItems, 
  width,
}) {
  return (
    <Container 
      width={width}
      flexWrap={flexWrap}
      flexDirection={flexDirection} 
      justifyContent={justifyContent} 
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </Container>
  );
}