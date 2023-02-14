import styled from 'styled-components';

export const AddTodoButton = styled.button`
  background-color: ${(props) => props.theme.colors.green[1]};
  position: absolute;
  left: 1149px;
  top: 836px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  filter: drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25));

  :hover {
    background-color: ${(props) => props.theme.colors.green[0]};
  }
`;
