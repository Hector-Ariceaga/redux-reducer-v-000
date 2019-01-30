export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {[...state, {friend: action.friend}] }
    default:
      return state
  }
}
