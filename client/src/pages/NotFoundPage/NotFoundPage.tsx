import Button from '@mui/material/Button';
import { Styled } from './styled';

export const NotFoundPage = () => {
  return (
    <Styled.Container>
      <Styled.Title>OOPS!</Styled.Title>
      <Styled.Description>We can't find the page you're looking for.</Styled.Description>
      <Button href="/" variant="outlined">
        Visit homepage
      </Button>
    </Styled.Container>
  );
};
