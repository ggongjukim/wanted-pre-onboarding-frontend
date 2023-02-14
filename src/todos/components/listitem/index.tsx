import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';

interface IListItem {
  readonly checked: boolean;
  readonly title: string;
}

const ListItem = (props: IListItem) => (
  <S.ItemContainer>
    <input type="checkbox" />
    <S.Title>{props.title}</S.Title>
    <S.Button>
      <EditIcon />
    </S.Button>
    <S.Button>
      <DeleteIcon />
    </S.Button>
  </S.ItemContainer>
);

ListItem.defaultProps = {
  checked: false,
  title: '제목 없음',
};

export default ListItem;
