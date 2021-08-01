import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearInput = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearInput();
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
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

  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Registration
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Введите имя</p>
            <input name="name" value={name} type="text" onInput={onChange} />
          </label>
          <label htmlFor="">
            <p>Введите email</p>
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
            <button>Registration</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
