import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: ${props => props.$bottom || '30px'};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
  }
`;


export const BTN = styled.button`
  width: 150px;
  font-size: 90%;
  font-weight: 700;
  color: rgb(209, 209, 217);
  text-decoration: none;
  text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #215f77;
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 1px 1px rgba(0, 1, 6, 0.2);
  transition: 0.2s ease-in-out;
  margin-top: 12px;
`;

export const MainPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
justify-content: center;
`;

export const Img = styled.img`
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Brand = styled.h2`
  font-size: 32px;
  color: #215f77;
  font-weight: 500;
`;

export const Paragrapher = styled.p`
  font-size: 20px;
  color: #215f77;
  font-weight: 500;
`;