// a reducer takes in two things

// 1. the action
// 2. copy of current state

export function posts(state = [], {type, index}) {
  switch (type) {
    case 'INCREMENT_LIKES':
      console.log('incrementing like')
      return [
        ...state.slice(0, index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1)
      ]
      break;  
    default:
      return state;
  }
}