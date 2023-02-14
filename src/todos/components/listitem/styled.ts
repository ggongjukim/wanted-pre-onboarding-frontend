import styled from 'styled-components';

import checkIcon from '../../assets/checkIcon.png';

export const ItemContainer = styled.div`
  width: 920px;
  /* height: 65px; */
  /* border: 1px solid pink; */
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input[type='checkbox'] {
    /* display: none; */
    width: 60px;
    height: 60px;
  }
  /* input[type='checkbox'] + label {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border: 6px solid ${(props) => props.theme.colors.green[0]};
    border-radius: 12px;
    cursor: pointer;
  }
  input[id='check1']:checked + label {
    content: '';
    width: 60px;
    height: 60px;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: 50%;
  } */
`;

export const Title = styled.div`
  width: 800px;
  color: ${(props) => props.theme.colors.green[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export const Button = styled.button`
  background-color: white;
`;
