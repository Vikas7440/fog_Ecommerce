export const initialState = {
  counter: 5,
  user: {},
};

export const appActions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  LOGIN: "LOGIN",
  UPDATE_PROFILE: "UPDATE_PROFILE",
};

export const appReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case appActions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case appActions.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case appActions.LOGIN:
      return { ...state, user: { ...state.user, isLoggedIn: true } };
    case appActions.UPDATE_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
};
