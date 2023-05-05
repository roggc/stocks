import { createSlice } from "react-context-slices";
import { useCallback } from "react";

export const name = "applicationAdapter";
const initialState = {
  value: {},
};
const SET = "SET";
const reducer = (draft, { type, payload }) => {
  switch (type) {
    case SET:
      console.log("payload", payload);
      draft.value = payload;
      break;
    default:
      break;
  }
};
export const { useValues, useActions, Provider } = createSlice(
  reducer,
  initialState,
  name,
  (useDispatch) => () => {
    const dispatch = useDispatch();
    const set = useCallback(
      (value) => dispatch({ type: SET, payload: value }),
      [dispatch]
    );
    return { [name]: { set } };
  }
);
