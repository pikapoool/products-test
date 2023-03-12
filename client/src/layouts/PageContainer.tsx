import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

interface IProps {
  children?: JSX.Element;
}

export const PageContainer = ({ children }: IProps) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
};
