import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${props => props.$bottom || '20px'};
  margin-top: ${props => props.$top || '0px'};
/* 
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: ${props => props.$bottom || '30px'};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
  } */
`;


export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 15px;
  margin-bottom: 100px;

  /* @media screen and (min-width: 768px) {
    row-gap: 30px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 50px;
    column-gap: 29px;
  } */
`;



export const Price = styled.p`
  display: ${props => props.display || 'block'};
  color: var(--color-text-loadmore);
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text-loadmore-hover);
  }
`;

export const Photo = styled.img`
  /* position: absolute; */
  top: 0;
  right: -37px;
  height: 146px;
  width: 200px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  @media screen and (min-width: 768px) {
    height: 204px;
    width: 268px;
    right: -50px;
  }

  @media screen and (min-width: 1440px) {
    /* right: -65px; */
    height: 268px;
    width: 368px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

