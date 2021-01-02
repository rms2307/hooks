export function userReducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'logout':
            return { ...state, user: state.user = null }
        default:
            return state
    }
}