const postComment = (state = [], action) => {
  const {type, author, comment, i, postId} = action
  switch (type) {
    case 'ADD_COMMENT':
      return [ ...state, {
        user: author,
        text: comment 
      }]
      break;
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
      break;
    default:
      return state;
  }
}

export function comments(state = [], action) {
  console.log(action)
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComment(state[action.postId], action)
    }
  }  

  return state
}