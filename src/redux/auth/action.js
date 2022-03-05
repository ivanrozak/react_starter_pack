import { TEST_TYPES } from "./types";

export const getTest = (data) => (dispatch) => {
  dispatch({
    type: TEST_TYPES,
    payload: data
  })
}