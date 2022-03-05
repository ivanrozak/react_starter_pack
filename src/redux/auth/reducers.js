import { TEST_TYPES } from './types'

const initialState = {
  test: 'ini data testnya'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_TYPES: {
      return {
        ...state,
        test: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
