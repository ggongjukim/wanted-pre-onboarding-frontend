import { useRef, useEffect } from 'react';
// import axios, { AxiosError } from 'axios';

import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import { client } from '../commons/axiosInstance';
import Confirmbutton from '../commons/components/confirmbutton';
import Input from '../commons/components/input';

const SignUp = () => {
  const navigate = useNavigate();
  console.log('signup');
  const emailRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handelConfirmButton = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    console.log('handelConfirmButton');
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    if (pw != null && pw.length >= 8 && email != null && email.includes('@')) {
      try {
        const result = await client
          .post('auth/signup', { email, password: pw })
          .then((res) => res.data);
        console.log('result', result);
        alert('성공!');
        navigate('/signin');
      } catch (err: any) {
        alert(err.response.data.message);
      }
    } else {
      if (email != null && !email.includes('@')) {
        alert('이메일을 정확히 입력해주세요');
      }

      if (pw != null && pw.length < 8) {
        alert('비밀번호를 8자리 이상 입력해주세요');
      }
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
