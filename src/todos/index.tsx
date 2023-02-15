// import AddTodoButton from './components/addtodobutton';
import { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as AddIcon } from './assets/addIcon.svg';
import ListItem from './components/listitem';
import * as S from './styled';
import { getTodos, createTodo } from './utils';
import Input from '../commons/components/input';

const Todos = () => {
  const navigate = useNavigate();

  const createInputRef = useRef<HTMLInputElement>();
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) navigate('/signin');
  // });

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  const createHandler = () => {
    createTodo(createInputRef.current?.value).then(() => {
      getTodos(setTodos);
    });
    if (createInputRef.current) createInputRef.current.value = '';
  };
  return (
    <>
      <S.AddContainer>
        <Input name="할일 추가" refname={createInputRef} />
        <button onClick={createHandler}>
          <AddIcon />
        </button>
      </S.AddContainer>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.length === 0 ? (
          <S.NoneTodo>할일을 추가해 보세요</S.NoneTodo>
        ) : (
          todos.map((content: any) => (
            <li key={content.id}>
              <ListItem
                content={content}
                reloadTodos={async () => getTodos(setTodos)}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default Todos;
