// a reducer takes in two things

// 1. the action
// 2. copy of current state

export function posts(state = [], action) {
  console.log('the post will change')
  console.log(state, action)
  return state
}