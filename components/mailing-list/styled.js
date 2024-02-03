import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery"

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: .6rem;
  p {
    white-space: nowrap;
    font-size: .6rem;
    line-height: 1.4rem;
    letter-spacing: .1rem;
    padding: 0 .2rem;
    margin: 0 .7rem 0rem 0;
  }
  form {
    display: flex;
    justify-content: space-between;
  }
  input {
    font-size: .8rem;
    border: none;
    outline: none;
    width: 80%;
    transition: ease-in-out, width .35s ease-in-out;
    background: rgb(245, 245, 245);
  }
  input::placeholder {
    color: rgb(195, 195, 195);
    font-size: .8rem;
    letter-spacing: 2px;
    font-style: italic;
    padding-left: .3rem;
  }
  
  input:focus {
    background: rgb(255, 255, 171);
  }
  
  button {
    margin: 0;
    font-size: .6rem;
    letter-spacing: .1rem;
    color: white;
    border: 0;
    text-transform: lowercase;
    padding: .3rem .5rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    cursor: pointer;
  }
  &:hover button {
    color: yellow;
    padding: .3rem .6rem;
    transition: .2s;
  }
`;