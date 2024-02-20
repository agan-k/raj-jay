import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery"

export const Container = styled.div`
  * {
    letter-spacing: .1rem;
    font-size: .8rem;
    text-transform: lowercase;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  input {
    border: none;
    margin-bottom: 4px;
    outline: none;
    width: 100%;
    background: rgb(212,212,212);
  }
  input::placeholder {
    font-style: italic;
    color: grey;
    font-weight: 100;
  }
  
  input:focus {
    background: rgb(255, 255, 171);
  }
  
  button {
    margin: 0;
    color: white;
    padding: .1rem .3rem;
    background: black;
    border: none;
    cursor: pointer;
    &:hover {
      transition: .2s;
    }
  }
`;