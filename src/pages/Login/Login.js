import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";
// import { token } from "../../config";
import { TokenContext } from "../../token-store";

const isInvalid = (type, length = 4) => (
  <div className="validate">
    Field {type} has less that {length} characters
  </div>
);

export const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(TokenContext);

  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginValidation, setLoginValidationState] = useState(false);
  const [passwordValidation, setPasswordValidationState] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback((e) => {
    setLogin(e.target.value);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setMessage("");
      setLoading(true);

      const usernameLength = username.length < 4;
      const passwordLength = password.length < 4;

      setLoginValidationState(usernameLength);
      setPasswordValidationState(passwordLength);

      if (usernameLength || passwordLength) {
        setLoading(false);
        AuthService.logout();
        return false;
      }

      AuthService.login(username, password)
        .then((res) => {
          setToken(res.access_token);
          return navigate("/");
        })
        .catch((error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        });

      setLoading(false);
    },
    [username, password, setToken, navigate],
  );

  useEffect(() => {
    if (localStorage.getItem("token") || token) navigate("/");
  }, [navigate, token]);

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="field">
          <label htmlFor="login">
            Login <input id="login" name="login" type="text" onBlur={handleLogin} />
          </label>
          {loginValidation && isInvalid("login")}
        </div>
        <div className="field">
          <label htmlFor="password">
            Password
            <input id="password" name="password" type="password" onBlur={handlePassword} />
          </label>
          {passwordValidation && isInvalid("password")}
        </div>
        <button type="submit" disabled={loading}>
          <span>{loading ? "Loading..." : "Submit"}</span>
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};
