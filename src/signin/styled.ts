import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 695px;
  margin: 0 auto;
  margin-top: 100px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding: 20px 0;
  }
`;

export const Warn = styled.div`
  color: ${(props) => props.theme.colors.green[1]};
  font-size: ${(props) => props.theme.fontsize.small};
  display: inline-block;
  text-align: center;
  margin: 0 auto;
`;
