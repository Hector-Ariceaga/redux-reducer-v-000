export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...friends, name: action.friend }
    default:
      return state
  }
}
