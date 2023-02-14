import { useState } from 'react';

import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';

interface IListItem {
  readonly checked: boolean;
  readonly title: string;
}

const ListItem = (props: IListItem) => {
  const [isEdit, setisEdit] = useState(false);
  return (
    <S.ItemContainer>
      <input type="checkbox" />
      {!isEdit ? (
        <>
          <S.Title>{props.title}</S.Title>
          <S.Button onClick={() => setisEdit(true)}>
            <EditIcon />
          </S.Button>
          <S.Button>
            <DeleteIcon />
          </S.Button>
        </>
      ) : (
        <>
          <S.EditInput defaultValue={props.title}></S.EditInput>
          <S.Button onClick={() => setisEdit(false)}>취소</S.Button>
          <S.Button onClick={() => setisEdit(false)}>완료</S.Button>
        </>
      )}
    </S.ItemContainer>
  );
};

ListItem.defaultProps = {
  checked: false,
  title: '제목 없음',
};

export default ListItem;
