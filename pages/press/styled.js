import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  display: flex;
  section {
    ${mediaQuery({
      display: ['none', 'unset'],
    })}
    width: 60%;
  }
  aside {
    ${mediaQuery({
      width: ['100%', '30%'],
    })}
  }
  `;
export const UidContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mediaQuery({
    display: ['unset', 'flex'],
  })}
  section {
    ${mediaQuery({
      // display: ['flex', 'unset'],
      width: ['100%', '60%'],
    })}
  }
  aside {
    width: 30%;
    ${mediaQuery({
      display: ['none', 'unset'],
    })}
  }
  `;
  
  export const Back = styled.div`
    margin: ${({$margin}) => $margin};
    ${mediaQuery({
      display: ['flex', 'none'],
      justifyContent: ['end', 'unset']
    })}
  
  `;
