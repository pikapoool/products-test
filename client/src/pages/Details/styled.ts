import styled from 'styled-components';

const ProductItem = styled.article`
  background-color: #E7EBF0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Figure = styled.figure`
  margin: 0 0 10px 0;
`;

const Figcaption = styled.figcaption`
  padding: 0 10px;
`;

const Picture = styled.picture`
  display: block;
  img {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  color: grey;
  margin: 0;
`;

const Info = styled.div`
  margin-top: auto;
  padding: 0 10px 10px;
  table {
    border-spacing: 0;

    td:first-child {
      font-weight: bold;
    }
    td:nth-child(2) {
      color: grey;
    }
  }
`;

const ButtonBack = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`

export const Styled = {
  ProductItem,
  Figure,
  Figcaption,
  Picture,
  Title,
  Description,
  Info,
  ButtonBack
};
