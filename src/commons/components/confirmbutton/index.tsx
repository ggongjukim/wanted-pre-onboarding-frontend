import * as S from './styled';

const Confirmbutton = (props: any) => (
  <S.Confirmbutton
    onClick={props.onClick}
    data-testid={props.datatestid}
    disabled={props.disabled}
  >
    {props.name}
  </S.Confirmbutton>
);

export default Confirmbutton;
