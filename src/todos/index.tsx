// import AddTodoButton from './components/addtodobutton';
import { useRef } from 'react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { accessClient } from './../commons/axiosInstance/index';
import { ReactComponent as AddIcon } from './assets/addIcon.svg';
import ListItem from './components/listitem';
import * as S from './styled';
import Input from '../commons/components/input';

const getAlltodos = async () => {
  const result = await accessClient.get('todos').then((res) => res.data);
  console.log('result', result);
  return result;
};

const Todos = () => {
  const addtodosInputRef = useRef<HTMLInputElement>();
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery(['alltodos'], getAlltodos);

  const mutation = useMutation(
    async (newTodo: any) => accessClient.post('/todos', newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['alltodos']);
      },
    },
  );

  console.log(data, isError, isLoading);

  return (
    <>
      <S.AddContainer>
        <Input name="할일 추가" refname={addtodosInputRef} />
        <button
          onClick={() => {
            mutation.mutate({ todo: addtodosInputRef.current?.value });
          }}
        >
          <AddIcon />
        </button>
      </S.AddContainer>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {data?.map((content: any) => (
          <li key={content.id}>
            <ListItem content={content} />
          </li>
        ))}
      </ul>
      {/* <AddTodoButton /> */}
    </>
  );
};
export default Todos;
