import style from './Login.module.css';

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.loginForm}>
        <div className={style.emailLabel}>Email:</div>
        <input className={style.emailInput} placeholder="email"></input>

        <div className={style.pwdLabel}>Password:</div>
        <input
          className={style.pwdInput}
          placeholder="password"
          type="password"
        ></input>
      </div>
    </div>
  );
};

export default Login;
