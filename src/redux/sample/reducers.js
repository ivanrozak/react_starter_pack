import { SAMPLE_1 } from './types'

const initialState = {
  sample: 'ini data sample'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_1: {
      return {
        ...state,
        sample: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;