export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    const removalIndex = (state.friends.findIndex(friend => friend.id === action.id) - 1)
      return {...state, friends: [...state.friends,
        ...state.friends.slice(0, removalIndex)]
      }
    default:
      return state
  }
}
