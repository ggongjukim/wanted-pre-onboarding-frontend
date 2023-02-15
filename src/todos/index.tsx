// import AddTodoButton from './components/addtodobutton';
import { useState, useEffect, useRef } from 'react';

import { ReactComponent as AddIcon } from './assets/addIcon.svg';
import ListItem from './components/listitem';
import * as S from './styled';
import { getTodos, createTodo } from './utils';
import Input from '../commons/components/input';

const Todos = () => {
  const createInputRef = useRef<HTMLInputElement>();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  const createHandler = () => {
    console.log('ref', createInputRef.current?.value);
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
        {todos.map((content: any) => (
          <li key={content.id}>
            <ListItem
              content={content}
              reloadTodos={async () => getTodos(setTodos)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
