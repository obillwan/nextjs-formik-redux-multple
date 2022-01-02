import {ADD_BIRD, ADD_BIRD_SIZE, INCREMENT_BIRD } from "../constants/birdConstants";

export function addBird(name2) {
    return {
      type: ADD_BIRD,
      payload: {
        name2
      }
      // bird,
    }
  }

  // export const addBird = (name2) => (dispatch, getState) => {
  //   try {
  //     console.log(name2, getState());
  //     dispatch({
  //       type: ADD_BIRD,
  //       payload: {
  //         name2
  //       },
  //     });
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };
    

export function addBirdSize(size) {
    return {
      type: ADD_BIRD_SIZE,
      size,
    }
  }

export function incrementBird(bird) {
    return {
      type: INCREMENT_BIRD,
      bird
    }
  }