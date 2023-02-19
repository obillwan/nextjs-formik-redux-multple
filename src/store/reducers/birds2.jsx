import {
  ADD_BIRD,
  ADD_SHIPPING_AMT,
  ADD_PAYMENT,
  ADD_TOTAL,
  INCREMENT_BIRD,
} from "../constants/birdConstants";

const initialState = {
  name2: "",
  amount: "",
  payment: "",
  total: "10.50",
  views: 1,
};
export const birds2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BIRD:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case ADD_SHIPPING_AMT:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case ADD_PAYMENT:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case ADD_TOTAL:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case INCREMENT_BIRD:
      const bird = state.find((b) => action.bird === b.name2);
      const birds = state.filter((b) => action.bird !== b.name2);
      return [
        ...birds,
        {
          ...bird,
          views: bird.views + 1,
        },
      ];
    default:
      return state;
  }
};
