import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  position: relative;
  height: ${({theme}) => theme.space[8]}px;
  margin-bottom: ${({theme}) => theme.space[4]}px;
  overflow: hidden;
  background: url('${({$imagePath}) => $imagePath}');
  background-size: cover;
  background-position: right;
  background-color: black;
  ${mediaQuery({
    borderTopLeftRadius: ['none', '50px 50px'],
  })}
`;
export const Quote = styled.div`
  width: 40%;
  position: absolute;
  top: ${({theme}) => theme.space[5]}px;
  left: ${({theme}) => theme.space[6]}px;
  ${mediaQuery({
    display: ['none', 'block'],
  })}
  p {
    color: ${({theme}) => theme.colors.diffused};
    font-weight: 100;
    font-size: ${({theme}) => theme.fontSizes[4]}px;
    line-height: ${({theme}) => theme.lineHeight.secondary};
    letter-spacing: ${({theme}) => theme.letterSpacing[1]}px;
    font-family: Garamond;
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[3]+'px',
        ({theme}) => theme.fontSizes[4]+'px'
      ]
    })}
  }
  p:nth-child(2) {
    font-size: ${({theme}) => theme.fontSizes[3]}px;
    text-align: right;
  }
`;