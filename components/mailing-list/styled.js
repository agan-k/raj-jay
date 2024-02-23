import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery"

export const Container = styled.div`
  * {
    letter-spacing: ${({theme}) => theme.letterSpacing[2]}px;
    font-size: ${({theme}) => theme.fontSizes[3]}px;
    text-transform: lowercase;
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
    font-size: ${({theme}) => theme.fontSizes[2]}px;
    font-style: italic;
    font-weight: 100;
  }
  
  input:focus {
    background: ${({theme}) => theme.colors.focus};
  }
  
  button {
    margin: 0;
    font-family: Helvetica;
    color: ${({theme}) => theme.colors.diffused};
    padding-left: ${({theme}) => theme.space[2]}px;
    padding-right: ${({theme}) => theme.space[2]}px;
    background: black;
    border: none;
    border-color: ${({theme}) => theme.colors.charcoal};
    cursor: pointer;
    &:hover {
      background: black;
      transition: ${({theme}) => theme.transitions.fast};
    }
  }
`;

export const SuccessMessage = styled.div`
  height: 60px;
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  font-style: italic;
  text-transform: none;
  white-space: nowrap;
`;