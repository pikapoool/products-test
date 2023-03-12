import styled from 'styled-components';
import MUICheckbox from '@mui/material/Checkbox';
import { device } from '../../../../data/constants';

const Checkbox = styled(MUICheckbox)`
  @media ${device.tablet} {
    padding: 2px 9px;
  }
`;

export const Styled = {
  Checkbox
}
