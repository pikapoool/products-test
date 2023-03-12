import styled from 'styled-components';
import { device } from '../../data/constants';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 130px;
  color: RGB(97,153,244);

  @media ${device.mobileL} {
    font-size: 100px;
  }
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;

  @media ${device.mobileL} {
    margin-top: 0;
  }
`;

export const Styled = {
  Container,
  Title,
  Description,
};
