import styled from 'styled-components';
import MUIButton from '@mui/material/Button';
import { device } from '../../../../data/constants';

const Button = styled(MUIButton)`
  @media ${device.tablet} {
    line-height: 1;
    text-transform: none;
  }
`;

export const Styled = {
  Button
}
