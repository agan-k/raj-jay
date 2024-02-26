import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  position: relative;
  * {
    letter-spacing: ${({theme}) => theme.letterSpacing[2]}px;
    text-transform: lowercase;
      ${mediaQuery({
        fontSize: [
          ({theme}) => theme.fontSizes[6]+'px',
          ({theme}) => theme.fontSizes[3]+'px',
        ],
      })}
    }
  input {
    width: 40%;
    margin-bottom: ${({theme}) => theme.space[3]}px;
    border: none;
    ${mediaQuery({
      width: ['100%','40%']
    })}
  }
  textarea {
    resize: none;
    width: 100%;
    height: ${({theme}) => theme.space[8]}px;
    border: none;
  }
  input, textarea {
    // font-size: ${({theme}) => theme.fontSizes[4]}px;
    outline: none;
    font-weight: ${({theme}) => theme.fontWeight.thin};
    font-style: italic;
    background: ${({theme}) => theme.colors.input};
    &:focus {
      background: ${({theme}) => theme.colors.focus};
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-style: italic;
    color: ${({theme}) => theme.colors.diffused};
    font-size: ${({theme}) => theme.fontSizes[4]}px;
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[5]+'px',
        ({theme}) => theme.fontSizes[4]+'px',
      ],
      color: [
        ({theme}) => theme.colors.subtle,
        ({theme}) => theme.colors.diffused
      ]
    })}
  }
  button {
    margin: 0;
    font-size: ${({theme}) => theme.fontSizes[4]}px;
    letter-spacing: ${({theme}) => theme.letterSpacing[1]}px;
    color: ${({theme}) => theme.colors.diffused};
    border: 0;
    text-transform: lowercase;
    padding: ${({theme}) => theme.space[3]}px;
    background: black;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  letter-spacing: 0px;
  font-style: italic;
  whiteSpace: nowrap;
`;
export const MessageSubmitted = styled.div`
  font-style: italic;
  whiteSpace: nowrap;
`;
