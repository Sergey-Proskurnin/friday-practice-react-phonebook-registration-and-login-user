import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/auth-operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    clearInput();
  };
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Login
        </h1>

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Введите логин</p>
            <input name="email" value={email} type="text" onInput={onChange} />
          </label>
          <label htmlFor="">
            <p>Введите пароль</p>
            <input
              name="password"
              value={password}
              type="password"
              onInput={onChange}
            />
          </label>
          <div style={{ marginTop: "20px" }}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
