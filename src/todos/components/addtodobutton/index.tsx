import { ReactComponent as SaveIcon } from './saveIcon.svg';
import * as S from './styled';

const AddTodoButton = (props: any) => (
  <S.AddTodoButton onClick={props.onClick}>
    <SaveIcon />
  </S.AddTodoButton>
);

export default AddTodoButton;
