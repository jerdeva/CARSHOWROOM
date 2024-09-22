import styled from 'styled-components';


export const SearchWrap = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: 32px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
  background: #f3f3f5;
  transition: all 0.3s ease;

  &.focus {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
`;



export const SearchInput = styled.input`
  position: absolute;
  top: 10px;
  left: 38px;
  font-size: 16px;
  font-weight: 800;
  background: none;
  color: #215f77;
  height: 20px;
  border: none;
  appearance: none;
  outline: none;

  &::-webkit-search-cancel-button {
    appearance: none;
  }
`;