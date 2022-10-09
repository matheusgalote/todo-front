import React, { useState } from "react";
import style from "./Login.module.css";

import { USER_LOGIN } from "../../Helpers/api";
import useFetch from "../../Hooks/useFetch";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { request, data } = useFetch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { url, options } = USER_LOGIN({
      email,
      password
    })

    request(url, options);

    if(data) {
      return data;
    }
  };

  return (
    <section>
      <div className={style.container}>
        <div className={style.card}>
          <form className={`ui form ${style.form}`} onSubmit={handleSubmit}>
            <div className="field">
              <label>Usuário</label>
              <input
                type="text"
                name="form"
                placeholder="Usuário"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div className="field">
              <label>Senha</label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button className="ui teal button">Entrar</button>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Login;
