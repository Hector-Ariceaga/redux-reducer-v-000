export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: {...friends, name: action.friends }}
    default:
      return state
  }
}
