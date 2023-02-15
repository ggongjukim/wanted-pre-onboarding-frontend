import { useRef, useEffect, useState } from 'react';
// import axios, { AxiosError } from 'axios';

import { useNavigate } from 'react-router-dom';

import * as S from './styled';
import { client } from '../commons/axiosInstance';
import Confirmbutton from '../commons/components/confirmbutton';
import Input from '../commons/components/input';

const SignUp = () => {
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

  // useEffect(() => {
  //   if (localStorage.getItem('token')) navigate('/todos');
  // });

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
        .post('auth/signup', { email, password: pw })
        .then((res) => res.data);
      alert('회원가입 성공! 로그인 해주세요');
      navigate('/signin');
    } catch (err: any) {
      alert(err.response.data.message);
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
          datatestid="password-input"
          onChange={validateInput}
        />
      </div>
      <Confirmbutton
        onClick={handelConfirmButton}
        name="회원가입"
        datatestid="signup-button"
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

export default SignUp;
