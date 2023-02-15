import { accessClient } from './../../commons/axiosInstance/index';

export const getTodos = async (setTodos: any) => {
  const result = await accessClient
    .get('todos')
    .then((res) => res.data)
    .then((res) => setTodos(res));
  console.log('getTodos', result);
};

export const createTodo = async (content: any) => {
  const result = await accessClient
    .post('todos', { todo: content })
    .then((res) => res);
  console.log('createTodo', result);
};

export const updateTodo = async (
  id: number,
  todoRef: any,
  isCompletedRef: any,
) => {
  const result = await accessClient
    .put(`todos/${id}`, { todo: todoRef, isCompleted: isCompletedRef })
    .then((res) => res);
  console.log('updateTodo', result);
};

export const deleteTodo = async (id: number) => {
  const result = await accessClient.delete(`todos/${id}`);
};
