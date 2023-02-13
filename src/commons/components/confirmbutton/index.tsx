import * as S from './styled';

const Confirmbutton = (props: any) => (
  <S.Confirmbutton onClick={props.onClick}>{props.name}</S.Confirmbutton>
);

export default Confirmbutton;
