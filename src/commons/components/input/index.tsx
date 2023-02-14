import * as S from './styled';

const Input = (props: any) => (
  <S.Input
    ref={props.refname}
    type={props.type}
    placeholder={props.name}
    data-testid={props.datatestid}
  ></S.Input>
);
export default Input;
