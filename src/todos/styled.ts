import styled from 'styled-components';

export const AddContainer = styled.div`
  width: 920px;
  margin: 50px auto;

  display: flex;
  /* border: 1px solid pink; */
  flex-direction: row;

  button {
    padding-left: 20px;
    background-color: white;
  }
`;

export const NoneTodo = styled.div`
  width: 920px;
  margin: 50px auto;
  text-align: center;
  color: ${(props) => props.theme.colors.warning[0]};
`;
