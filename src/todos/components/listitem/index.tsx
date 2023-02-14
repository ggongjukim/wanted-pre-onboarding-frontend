import { useState } from 'react';

import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';

interface IListItem {
  readonly content: {
    readonly isCompleted: boolean;
    readonly todo: string;
  };
}

const ListItem = ({ content }: IListItem) => {
  const [isEdit, setisEdit] = useState(false);
  return (
    <S.ItemContainer>
      <input type="checkbox" />
      {!isEdit ? (
        <>
          <S.Title>{content.todo}</S.Title>
          <S.Button onClick={() => setisEdit(true)}>
            <EditIcon />
          </S.Button>
          <S.Button>
            <DeleteIcon />
          </S.Button>
        </>
      ) : (
        <>
          <S.EditInput defaultValue={content.todo}></S.EditInput>
          <S.Button onClick={() => setisEdit(false)}>취소</S.Button>
          <S.Button onClick={() => setisEdit(false)}>완료</S.Button>
        </>
      )}
    </S.ItemContainer>
  );
};

ListItem.defaultProps = {
  content: { isCompleted: false, todo: '제목 미정' },
};

export default ListItem;
