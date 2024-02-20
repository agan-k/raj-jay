import styled from "styled-components";
import { mediaQuery } from "../../../../utils/mediaQuery";

export const Container = styled.div`
  input {
    width: 40%;
    margin: 1rem 0;
    border: none;
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  textarea {
    resize: none;
    width: 100%;
    height: 10rem;
    border: 1px solid rgb(240, 240, 240);
  }
  input, textarea {
    outline: none;
    font-size: 1rem;
    font-weight: 100;
    font-style: italic;
    &:focus {
      background: rgb(255, 255, 171);
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-style: italic;
    color: rgb(179, 179, 179);
  }
  button {
    margin: 0;
    font-size: .8rem;
    letter-spacing: .1rem;
    color: white;
    border: 0;
    text-transform: lowercase;
    padding: .5rem;
    background: black;
    cursor: pointer;
  }
`;