import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery"

export const Container = styled.div`
  ${mediaQuery({
    width: ['100%'],
  })}
  * {
    letter-spacing: ${({theme}) => theme.letterSpacing[2]}px;
    text-transform: lowercase;
    ${mediaQuery({
      fontSize: [
        ({theme}) => theme.fontSizes[5]+'px',
        ({theme}) => theme.fontSizes[3]+'px',
      ],
    })}
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  input {
    border: none;
    margin-bottom: ${({theme}) => theme.space[2]}px;
    outline: none;
    width: 100%;
    background: ${({theme}) => theme.colors.input};
  }
  input::placeholder {
    color: ${({theme}) => theme.colors.diffused};
    font-style: italic;
    ${mediaQuery({
      fontWeight: ['100', 'unset'],
      fontSize: [
        ({theme}) => theme.fontSizes[4]+'px',
        ({theme}) => theme.fontSizes[2]+'px',
      ],
      color: [
        ({theme}) => theme.colors.subtle      ]
    })}
  }
  
  input:focus {
    background: ${({theme}) => theme.colors.focus};
  }
  
  button {
    margin: 0;
    font-family: Helvetica;
    color: ${({theme}) => theme.colors.diffused};
    background: black;
    border: none;
    cursor: pointer;
    ${mediaQuery({
      padding: [
        ({theme}) => theme.space[2]+'px',
        ({theme}) => `${theme.space[2]}px ${theme.space[2]}px`
      ]
    })}
  }
`;

export const SuccessMessage = styled.div`
  height: 60px;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  font-style: italic;
  text-transform: none;
  white-space: nowrap;
`;