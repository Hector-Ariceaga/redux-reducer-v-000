export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...friend, name: action.friend }
    default:
      return state
  }
}
