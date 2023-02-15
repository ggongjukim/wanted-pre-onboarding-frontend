import { accessClient } from './../../commons/axiosInstance/index';

export const getTodos = async (setTodos: any) => {
  const result = await accessClient
    .get('todos')
    .then((res) => res.data)
    .then((res) => setTodos(res));
  console.log('getTodos', result);
  return result;
};

export const createTodo = async (content: any) => {
  const result = await accessClient
    .post('todos', { todo: content })
    .then((res) => res);
  console.log('createTodo', result);
};
