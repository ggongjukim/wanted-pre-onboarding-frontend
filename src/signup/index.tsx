import { useRef, useEffect } from 'react';

import * as S from './styled';
import Confirmbutton from '../commons/components/confirmbutton';
import Input from '../commons/components/input';

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handelConfirmButton = () => {
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    if (pw != null && pw.length >= 8 && email != null && email.includes('@'))
      alert('성공!');
    else {
      if (email != null && !email.includes('@'))
        alert('이메일을 정확히 입력해주세요');
      if (pw != null && pw.length < 8)
        alert('비밀번호를 8자리 이상 입력해주세요');
    }
  };
  return (
    <S.Form>
        <div>
          이메일
          <Input
            refname={emailRef}
            type="text"
            name="이메일을 입력하세요"
            data-testid="email-input"
          />
        </div>
        <div>
          비밀번호
          <Input
            refname={pwRef}
            type="password"
            name="비밀번호를 입력하세요"
            data-testid="email-input"
          />
        </div>
        <Confirmbutton onClick={handelConfirmButton} name="회원가입" />
      </S.Form>
  );
};

export default SignUp;
