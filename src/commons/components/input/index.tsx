import * as S from './styled';

const Input = (props: any) => (
  <S.Input
    ref={props.refname}
    type={props.type}
    placeholder={props.name}
  ></S.Input>
);
export default Input;
