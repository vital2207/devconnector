// Register
import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) //редирект после успешной регистрации
    .catch(err =>
      dispatch({
        // dispatch требуется для работы с асинхронным экшеном библиотека redux-thunk
        type: GET_ERRORS,
        payload: err.response.data // Отправка ошибок в errorReducer
      })
    );
};
