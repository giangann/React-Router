import TodoService from "../Services/TodoService";

export const GetDataApi = async (dispatch) => {
  const data = await TodoService.GetTodos();
  dispatch({
    type: "GET_DATA_API",
    payload: data.data,
  });
};
export const OnChange = (value) => {
  return {
    type: "ON_CHANGE",
    payload: {
      value: value,
    },
  };
};

export const HandleAdd = (newTodoName) => async (dispatch, getState) => {
  try {
    await TodoService.PostTodo(newTodoName);
    dispatch({
      type: "HANDLE_ADD",
      payload: {
        value: newTodoName,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const HandleCheck = (id, value) => async (dispatch, getState) => {
  try {
    await TodoService.ChangeTaskCompleted(id, value);
    dispatch({
      type: "HANDLE_CHECK",
      payload: {
        value: value,
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const HandleFavourite = (id, value) => async (dispatch, getState) => {
  try {
    await TodoService.ChangeTaskFavourite(id, value);
    dispatch({
      type: "HANDLE_CHECK",
      payload: {
        value: value,
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const HandleDelete = (id) => {
  return {
    type: "HANDLE_DELETE",
    payload: {
      id: id,
    },
  };
};

export const SignIn = () => {
  return {
    type: "SIGN_IN",
  };
};
export const SignOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
