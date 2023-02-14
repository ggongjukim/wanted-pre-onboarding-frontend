import { useRef, useEffect } from 'react';
// import axios, { AxiosError } from 'axios';

import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import { client } from '../commons/axiosInstance';
import Confirmbutton from '../commons/components/confirmbutton';
import Input from '../commons/components/input';

const SignIn = () => {
  const navigate = useNavigate();
  console.log('signin');
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
          .post('auth/signin', { email, password: pw })
          .then((res) => res.data);
        console.log('result', result);
        localStorage.setItem('token', result.access_token);
        alert('로그인 성공!');
        navigate('/todos');
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
          datatestid="email-input"
        />
      </div>
      <div>
        비밀번호
        <Input
          refname={pwRef}
          type="password"
          name="비밀번호를 입력하세요"
          datatestid="email-input"
        />
      </div>
      <Confirmbutton
        onClick={handelConfirmButton}
        name="로그인"
        datatestid="signin-button"
      />
    </S.Form>
  );
};

export default SignIn;
