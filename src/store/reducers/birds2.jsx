import {ADD_BIRD, ADD_BIRD_SIZE, INCREMENT_BIRD } from "../constants/birdConstants";

const initialState = 
    {
      name2: '',
      size: '',
      views: 1,
    }
; 

export const birds2 = (state=initialState, action) => {
    switch (action.type) {
        case ADD_BIRD:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
              };
        case ADD_BIRD_SIZE:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
              };
        case INCREMENT_BIRD:
            const bird = state.find(b => action.bird === b.name2);
            const birds = state.filter(b => action.bird !== b.name2);
            return [
                ...birds,
                {
                ...bird,
                views: bird.views + 1
                }
            ];
        default:
            return state;
    }
}

