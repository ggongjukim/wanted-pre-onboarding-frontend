import styled from 'styled-components';

export const Confirmbutton = styled.button`
  width: 695px;
  height: 100px;
  font-weight: medium;
  font-size: ${(props) => props.theme.fontsize.big};
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.green[0]};
  color: ${(props) => props.theme.colors.text[2]};
  :hover {
    background-color: ${(props) => props.theme.colors.green[1]};
  }
`;
