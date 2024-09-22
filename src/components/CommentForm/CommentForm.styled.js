import styled from "styled-components";

export const FormSt = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 12px 0;
`;

export const BTN = styled.button`
  font-size: 90%;
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
`;
