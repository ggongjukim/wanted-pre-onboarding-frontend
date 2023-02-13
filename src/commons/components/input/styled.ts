import styled from 'styled-components';

export const Input = styled.input`
  width: 500px;
  height: 80px;
  border-radius: 12px;
  border: ${(props) => props.theme.colors.green[0]};
`;
