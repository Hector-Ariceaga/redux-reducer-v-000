export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: {...friends.push(name: action.friends)} }
    default:
      return state
  }
}
