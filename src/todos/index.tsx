// import AddTodoButton from './components/addtodobutton';
import { ReactComponent as AddIcon } from './assets/addIcon.svg';
import ListItem from './components/listitem';
import * as S from './styled';
import Input from '../commons/components/input';

const Todos = () => (
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
export default Todos;
