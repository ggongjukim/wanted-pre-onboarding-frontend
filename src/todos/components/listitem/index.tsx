import { useState } from 'react';

import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';

interface IListItem {
  readonly content: {
    readonly id: number;
    readonly todo: string;
    readonly isCompleted: boolean;
    readonly userId: number;
  };
}

const ListItem = ({ content }: IListItem) => {
  const [isEdit, setisEdit] = useState(false);
  return (
    <S.ItemContainer>
      <input type="checkbox" defaultChecked={content.isCompleted} />
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
  content: {
    id: 1,
    todo: '할일을 추가해 보세요',
    isCompleted: false,
    userId: 0,
  },
};

export default ListItem;
