import styled from "styled-components";
import {Z_INDEX} from '../../utils/constants';
import { mediaQuery } from "../../utils/mediaQuery";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.794);
  z-index: ${Z_INDEX.modal};
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  p {
    font-weight: ${({theme}) => theme.fontWeight.thin};
    font-style: italic;
    color: ${({theme}) => theme.colors.diffused};
    margin: 0;
    width: 100%;
  }
`;

export const Image = styled.img`
  margin-top: ${({vertical}) => vertical ? '2%' : '5%'};
  ${mediaQuery({

    marginTop: [
      ({vertical}) => vertical ? '10%' : '30%',
      ({vertical}) => vertical ? '2%' : '5%'
    ],
    height: [
      ({vertical}) => vertical ? '80%' : '35%',
      ({vertical}) => vertical ? '80%' : '70%'
    ]
  })}
`;
export const VideoWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  ${mediaQuery({
    paddingTop: ['unset', '5%'],
    width: ['100%', '700px'],
    height: ['380px', '500px'],
  })}
`;

