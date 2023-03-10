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
          <S.Button onClick={() => setisEdit(true)} data-testid="modify-button">
            <EditIcon />
          </S.Button>
          <S.Button onClick={deleteHandler} data-testid="delete-button">
            <DeleteIcon />
          </S.Button>
        </>
      ) : (
        <>
          <S.EditInput
            data-testid="modify-input"
            ref={updateInputRef}
            defaultValue={content.todo}
          ></S.EditInput>
          <S.Button
            onClick={() => setisEdit(false)}
            data-testid="cancel-button"
          >
            ??????
          </S.Button>
          <S.Button onClick={updateHandler} data-testid="submit-button">
            ??????
          </S.Button>
        </>
      )}
    </S.ItemContainer>
  );
};

ListItem.defaultProps = {
  content: {
    id: 1,
    todo: '????????? ????????? ?????????',
    isCompleted: false,
    userId: 0,
  },
};

export default ListItem;
