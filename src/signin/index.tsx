import { useState, useRef, useEffect } from 'react';
// import axios, { AxiosError } from 'axios';

import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import { client } from '../commons/axiosInstance';
import Confirmbutton from '../commons/components/confirmbutton';
import Input from '../commons/components/input';

const SignIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  const [buttonState, setbuttonState] = useState(false);

  const validateInput = () => {
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    if (pw != null && pw.length >= 8 && email != null && email.includes('@'))
      setbuttonState(false);
    else setbuttonState(true);
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handelConfirmButton = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;
    try {
      const result = await client
        .post('auth/signin', { email, password: pw })
        .then((res) => res.data);
      localStorage.setItem('token', result.access_token);
      alert('로그인 성공했습니다!');
      navigate('/todos');
    } catch (err: any) {
      if (err.response.data.statusCode === 404)
        alert(err.response.data.message);
      else if (err.response.data.statusCode === 401)
        alert('이메일과 비밀번호를 확인해주세요');
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
          onChange={validateInput}
        />
      </div>
      <div>
        비밀번호
        <Input
          refname={pwRef}
          type="password"
          name="비밀번호를 입력하세요"
          datatestid="email-input"
          onChange={validateInput}
        />
      </div>
      <Confirmbutton
        onClick={handelConfirmButton}
        name="로그인"
        datatestid="signin-button"
        disabled={buttonState}
      />
      {buttonState ? (
        <S.Warn>
          이메일을 형식을 확인해주세요
          <br />
          비밀번호를 8자리 이상 입력해주세요
        </S.Warn>
      ) : (
        <></>
      )}
    </S.Form>
  );
};

export default SignIn;
