// import AddTodoButton from './components/addtodobutton';
import { useQuery } from '@tanstack/react-query';

import { accessClient } from './../commons/axiosInstance/index';
import { ReactComponent as AddIcon } from './assets/addIcon.svg';
import ListItem from './components/listitem';
import * as S from './styled';
import Input from '../commons/components/input';

const getAlltodos = async () => {
  try {
    const result = await accessClient.get('todos').then((res) => res.data);
    console.log('result', result);
  } catch (err: any) {
    alert(err.response.data.message);
  }
};

// interface Itodos {
//   readonly todo: {
//     readonly checked: boolean;
//     readonly title: string;
//   };
// }

const Todos = () => {
  const { data, isError, isLoading } = useQuery(
    ['alltodos'],
    () => getAlltodos,
  );
  console.log(data, isError, isLoading);

  return (
    <>
      <S.AddContainer>
        <Input name="할일 추가" />
        <button>
          <AddIcon />
        </button>
      </S.AddContainer>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
      </ul>
      {/* <AddTodoButton /> */}
    </>
  );
};
export default Todos;
