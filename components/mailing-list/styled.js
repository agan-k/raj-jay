import styled from "styled-components";
import {mediaQuery} from "../../utils/mediaQuery"

export const Container = styled.div`
  form {
    // display: flex;
    // justify-content: space-between;
  }
  .form_label {
    display: inline;
    color: rgb(155, 155, 155);
  }
  span {
    font-size: .8rem;
    // margin: 0 1rem 0 0;
    color: red;

  }
  .form_label label {
    font-size: .8rem;
    margin: 0 0 0 0;
    text-transform: lowercase;
    font-style: italic;
  }
  .form_label input {
    font-size: .8rem;
    border: none;
    outline: none;
    width: 80%;
    transition: ease-in-out, width .35s ease-in-out;
    background: rgb(245, 245, 245);
  }
  .form_label input::placeholder {
    color: rgb(195, 195, 195);
    font-size: .6rem;
    font-style: italic;
    padding-left: .3rem;
  }

  input:focus {
  background: rgb(255, 255, 171);
  }

  .container button {
    margin: 0;
    font-size: .6rem;
    letter-spacing: .1rem;
    color: white;
    border: 0;
    text-transform: lowercase;
    padding: .3rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    cursor: pointer;
  }
`;