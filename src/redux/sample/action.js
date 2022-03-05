import { SAMPLE_1 } from "./types";

export const getSample = (data) => (dispatch) => {
  dispatch({
    type: SAMPLE_1,
    payload: data
  })
}