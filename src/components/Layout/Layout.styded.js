import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListNav = styled.nav`
  display: flex;
  justify-content: space-around;
`;



export const ListItem = styled(NavLink)`
  padding: 14px px;
  font-size: 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #064e8a;
  }
`;





export const Header = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* padding: 12px 12px; */
  margin-bottom: 16px;
  border-bottom: 1px solid #3b8fa6;
  font-weight: 900;
  font-size: 40px;
  color: #215f69;
  /* margin: 0; */
  margin-left: 10px;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  margin: 0;
  background-color: rgba(250, 250, 200, 0.2);
`;

export const Name = styled.header`
  font-weight: 700;
  font-size: 30px;
  color: #215f69;
  margin: 0;
  margin-left: 10px;
`;

export const FooterText = styled.p`
  text-align: center;
  padding: 20px 0;
  margin: 0;
`;
