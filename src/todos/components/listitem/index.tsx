import { useState, useRef } from 'react';

import { accessClient } from './../../../commons/axiosInstance/index';
import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { updateTodo, deleteTodo } from '../../utils';

interface IListItem {
  readonly content: {
    readonly id: number;
    readonly todo: string;
    readonly isCompleted: boolean;
    readonly userId: number;
  };
  readonly reloadTodos: () => Promise<void>;
}

const ListItem = ({ content, reloadTodos }: IListItem) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const updateInputRef = useRef<HTMLInputElement>(null);

  const [isEdit, setisEdit] = useState(false);

  const updateHandler = () => {
    updateTodo(
      content.id,
      updateInputRef.current?.value,
      checkboxRef.current?.checked,
    ).then(() => {
      reloadTodos().then(() => setisEdit(false));
    });
  };

  const deleteHandler = () => {
    deleteTodo(content.id).then(() => {
      reloadTodos();
    });
  };

  const checkboxUpdate = (e: React.FormEvent<HTMLInputElement>) => {
    updateTodo(content.id, content.todo, e.currentTarget.checked).then(() => {
      reloadTodos();
    });
  };
  return (
    <S.ItemContainer>
      <input
        ref={checkboxRef}
        type="checkbox"
        defaultChecked={content.isCompleted}
        onChange={checkboxUpdate}
      />
      {!isEdit ? (
        <>
          <S.Title>{content.todo}</S.Title>
          <S.Button onClick={() => setisEdit(true)}>
            <EditIcon />
          </S.Button>
          <S.Button onClick={deleteHandler}>
            <DeleteIcon />
          </S.Button>
        </>
      ) : (
        <>
          <S.EditInput
            ref={updateInputRef}
            defaultValue={content.todo}
          ></S.EditInput>
          <S.Button onClick={() => setisEdit(false)}>취소</S.Button>
          <S.Button onClick={updateHandler}>완료</S.Button>
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
