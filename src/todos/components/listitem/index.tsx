import { useState, useRef } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as S from './styled';
import { accessClient } from '../../../commons/axiosInstance/index';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';

interface IListItem {
  readonly content: {
    readonly isCompleted: boolean;
    readonly todo: string;
    readonly id: number;
    readonly userId: number;
  };
}

const ListItem = ({ content }: IListItem) => {
  const queryClient = useQueryClient();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const edittodoInputRef = useRef<HTMLInputElement>(null);
  const [isEdit, setisEdit] = useState(false);

  const editmutation = useMutation(
    async (editTodo: any) => accessClient.put(`/todos/${content.id}`, editTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['alltodos']);
      },
    },
  );

  const deletemutation = useMutation(
    async () => accessClient.delete(`/todos/${content.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['alltodos']);
      },
    },
  );

  const editDoneHandler = () => {
    editmutation.mutate({
      todo: edittodoInputRef.current?.value,
      isCompleted: checkboxRef.current?.checked,
    });

    setisEdit(false);
  };

  const deleteHandler = () => {
    deletemutation.mutate();
  };
  return (
    <S.ItemContainer>
      <input type="checkbox" ref={checkboxRef} checked={content.isCompleted} />
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
            ref={edittodoInputRef}
            defaultValue={content.todo}
          ></S.EditInput>
          <S.Button onClick={() => setisEdit(false)}>취소</S.Button>
          <S.Button onClick={editDoneHandler}>완료</S.Button>
        </>
      )}
    </S.ItemContainer>
  );
};

ListItem.defaultProps = {
  content: { isCompleted: false, todo: '할일을 추가해 보세요' },
};

export default ListItem;
