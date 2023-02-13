import styled from 'styled-components';

export const Input = styled.input`
  width: 500px;
  height: 80px;
  padding-left: 20px;
  border-radius: 12px;
  border: 3px solid ${(props) => props.theme.colors.green[0]};
  font-size: ${(props) => props.theme.fontsize.middle};
  :focus {
    border-color: ${(props) => props.theme.colors.warning[0]};
    outline: 0;
  }
`;
