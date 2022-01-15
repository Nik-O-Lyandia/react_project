import { useRef } from 'react';
import style from './Login.module.css';
import { login } from '../../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(
      login(emailRef.current.value, passwordRef.current.value, () =>
        navigate('/')
      )
    );
  };

  return (
    <>
      {/* {userId === null ? ( */}
      <div className={style.container}>
        <div className={style.loginForm}>
          <div className={style.emailLabel}>Email:</div>
          <input
            className={style.emailInput}
            placeholder="email"
            ref={emailRef}
            defaultValue="test@gmail.com"
          ></input>

          <div className={style.pwdLabel}>Password:</div>
          <input
            className={style.pwdInput}
            placeholder="password"
            // type="password"
            ref={passwordRef}
            defaultValue="test"
          ></input>
          <button type="button" className={style.submitBtn} onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
