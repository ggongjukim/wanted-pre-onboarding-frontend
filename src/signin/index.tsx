import * as S from './styled';
import Confirmbutton from '../commons/components/confirmbutton';
import Input from '../commons/components/input';

const SignIn = () => (
  <>
    <S.Form>
      <div>
        이메일
        <Input type="text" name="이메일을 입력하세요"></Input>
      </div>
      <div>
        비밀번호
        <Input type="password" name="비밀번호를 입력하세요"></Input>
      </div>
      <Confirmbutton name="회원가입" />
    </S.Form>
  </>
);

export default SignIn;
