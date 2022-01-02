import {ADD_BIRD, ADD_BIRD_SIZE, INCREMENT_BIRD } from "../constants/birdConstants";

export function addBird(name2) {
    return {
      type: ADD_BIRD,
      payload: {
        name2
      }
    }
  }

export function addBirdSize(size) {
  return {
      type: ADD_BIRD_SIZE,
      payload: {
        size
      }
    }
  }

export function incrementBird(bird) {
    return {
      type: INCREMENT_BIRD,
      bird
    }
  }