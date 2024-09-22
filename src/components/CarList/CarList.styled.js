import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${props => props.$bottom || '20px'};
  margin-top: ${props => props.$top || '0px'};
`;


export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 15px;
  margin-bottom: 100px;
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


export const Details = styled.a`
  text-decoration: none;
  align-content: center;
  font-weight: 700;
  color: rgb(209, 209, 217);
  text-decoration: none;
  text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  outline: none;
  border-radius: 3px;
  background: linear-gradient(rgb(110, 112, 120), rgb(81, 81, 86))
    rgb(110, 112, 120);
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 1px 1px rgba(0, 1, 6, 0.2);
  transition: 0.2s ease-in-out;
  margin-top: 12px;
`;


export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
