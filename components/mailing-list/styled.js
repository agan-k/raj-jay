import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery"

export const Container = styled.div`
  display: flex;
  margin-top: .6rem;
  * {
    font-style: italic;
    font-size: .9rem;
    text-transform: lowercase;
    letter-spacing: 2px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  input {
    border: none;
    outline: none;
    width: 80%;
    background: rgb(245, 245, 245);
  }
  input::placeholder {
    color: rgb(195, 195, 195);
    padding-left: .3rem;
  }
  
  input:focus {
    background: rgb(255, 255, 171);
  }
  
  button {
    margin: 0;
    color: white;
    padding: .3rem .5rem;
    background: rgba(0, 0, 0, 0.6);
    border: 3px solid white;
    cursor: pointer;
    &:hover {
      border: 3px solid orange;
      transition: .2s;
    }
  }
`;