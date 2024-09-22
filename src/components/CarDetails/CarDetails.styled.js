import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${props => props.$bottom || '20px'};
  margin-top: ${props => props.$top || '0px'};

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
  padding: 8px;
  background-color: #aaba;
  color: black;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 12px;
  box-shadow: 0px 0px 2px 2px #bbbb;
`;
