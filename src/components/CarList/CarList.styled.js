import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: 20px;
`;


export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
 `;


export const Brand = styled.h2`
  font-size: 24px;
  color: #215f77;
  font-weight: 800;
`;



export const Price = styled.p`
  font-size: 24px;
  color: #215f77;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
`;

export const Photo = styled.img`
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
`;


export const Details = styled.a`
  text-decoration: none;
  align-content: center;
  font-weight: 700;
  color: rgb(209, 209, 217);
  text-decoration: none;
  text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  padding: 0.9em 0.9em;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #215f77;
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 1px 1px rgba(0, 1, 6, 0.2);
  transition: 0.2s ease-in-out;
`;


export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
