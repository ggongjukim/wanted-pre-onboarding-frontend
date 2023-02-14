// import AddTodoButton from './components/addtodobutton';
import { ReactComponent as AddIcon } from './assets/addIcon.svg';
import ListItem from './components/listitem';
import Input from '../commons/components/input';

const Todos = () => (
  <>
    <Input />
    <AddIcon />
    <ul style={{ listStyle: 'none' }}>
      <li>
        {' '}
        <ListItem />
      </li>
      <li>
        {' '}
        <ListItem />
      </li>
    </ul>
    {/* <AddTodoButton /> */}
  </>
);
export default Todos;
